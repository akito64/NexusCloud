/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createLecture = /* GraphQL */ `
  mutation CreateLecture(
    $input: CreateLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    createLecture(input: $input, condition: $condition) {
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
export const updateLecture = /* GraphQL */ `
  mutation UpdateLecture(
    $input: UpdateLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    updateLecture(input: $input, condition: $condition) {
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
export const deleteLecture = /* GraphQL */ `
  mutation DeleteLecture(
    $input: DeleteLectureInput!
    $condition: ModelLectureConditionInput
  ) {
    deleteLecture(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
