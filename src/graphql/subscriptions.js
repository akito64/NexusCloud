/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onCreateUser(filter: $filter, owner: $owner) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onUpdateUser(filter: $filter, owner: $owner) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $owner: String
  ) {
    onDeleteUser(filter: $filter, owner: $owner) {
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
export const onCreateLecture = /* GraphQL */ `
  subscription OnCreateLecture($filter: ModelSubscriptionLectureFilterInput) {
    onCreateLecture(filter: $filter) {
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
export const onUpdateLecture = /* GraphQL */ `
  subscription OnUpdateLecture($filter: ModelSubscriptionLectureFilterInput) {
    onUpdateLecture(filter: $filter) {
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
export const onDeleteLecture = /* GraphQL */ `
  subscription OnDeleteLecture($filter: ModelSubscriptionLectureFilterInput) {
    onDeleteLecture(filter: $filter) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onCreateComment(filter: $filter, owner: $owner) {
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
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onUpdateComment(filter: $filter, owner: $owner) {
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
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment(
    $filter: ModelSubscriptionCommentFilterInput
    $owner: String
  ) {
    onDeleteComment(filter: $filter, owner: $owner) {
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
