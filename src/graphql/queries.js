/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      role
      tags
      createdAt
      updatedAt
      owner
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        role
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getLecture = /* GraphQL */ `
  query GetLecture($id: ID!) {
    getLecture(id: $id) {
      id
      title
      description
      teacher {
        id
        name
        role
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      posts {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      lectureTeacherId
      __typename
    }
  }
`;
export const listLectures = /* GraphQL */ `
  query ListLectures(
    $filter: ModelLectureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLectures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        createdAt
        updatedAt
        lectureTeacherId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      author {
        id
        name
        role
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      lecture {
        id
        title
        description
        createdAt
        updatedAt
        lectureTeacherId
        __typename
      }
      comments {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      lecturePostsId
      postAuthorId
      owner
      __typename
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        lecturePostsId
        postAuthorId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      content
      author {
        id
        name
        role
        tags
        createdAt
        updatedAt
        owner
        __typename
      }
      post {
        id
        content
        createdAt
        updatedAt
        lecturePostsId
        postAuthorId
        owner
        __typename
      }
      createdAt
      updatedAt
      postCommentsId
      commentAuthorId
      owner
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        updatedAt
        postCommentsId
        commentAuthorId
        owner
        __typename
      }
      nextToken
      __typename
    }
  }
`;
