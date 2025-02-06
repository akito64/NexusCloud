import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { listEvents } from "./graphql/queries";
import { createEvent, deleteEvent } from "./graphql/mutations";

function CalendarComponent() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            try {
                const eventData = await API.graphql(graphqlOperation(listEvents));
                setEvents(eventData.data.listEvents.items.map(event => ({
                    id: event.id,
                    title: event.title,
                    start: event.startDate,
                    end: event.endDate
                })));
            } catch (error) {
                console.error("Error fetching events:", error);
            }
        }
        fetchEvents();
    }, []);

    const handleDateClick = async (info) => {
        const title = prompt("イベント名を入力してください:");
        if (title) {
            try {
                const newEvent = await API.graphql(graphqlOperation(createEvent, {
                    input: {
                        title: title,
                        startDate: info.dateStr,
                        endDate: info.dateStr
                    }
                }));
                setEvents([...events, {
                    id: newEvent.data.createEvent.id,
                    title: newEvent.data.createEvent.title,
                    start: newEvent.data.createEvent.startDate,
                    end: newEvent.data.createEvent.endDate
                }]);
            } catch (error) {
                console.error("Error creating event:", error);
            }
        }
    };

    return (
        <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            events={events}
            dateClick={handleDateClick}
        />
    );
}

export default CalendarComponent;
