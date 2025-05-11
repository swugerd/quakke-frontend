/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  /** Token for user authentication */
  accessToken: Scalars['String']['output'];
};

export type Banner = {
  __typename?: 'Banner';
  /** Banner image */
  bannerImage: FileEntity;
  /** Banner video */
  bannerVideo?: Maybe<FileEntity>;
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Description of banner */
  description?: Maybe<Scalars['String']['output']>;
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Date of publishing banner to the main page (default now) */
  publishDate: Scalars['DateTime']['output'];
  /** Title of banner */
  title: Scalars['String']['output'];
  /** Description of banner */
  type: BannerTypes;
  /** Date of unpublishing banner from the main page (default end of day) */
  unpublishDate: Scalars['DateTime']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User that created banner */
  user: User;
};

export enum BannerTypes {
  Image = 'IMAGE',
  Stream = 'STREAM',
  Video = 'VIDEO'
}

export type CategoriesQuerySearchDto = {
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
};

export type Category = {
  __typename?: 'Category';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Category name */
  name: Scalars['String']['output'];
  /** Sub categories */
  subCategories: Array<SubCategory>;
  /** Update record date with time zone */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type CategoryPagination = {
  __typename?: 'CategoryPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<Category>;
};

export type Comment = {
  __typename?: 'Comment';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Comment dislikes */
  dislikes?: Maybe<Array<Rating>>;
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Comment likes */
  likes?: Maybe<Array<Rating>>;
  /** Parent comment */
  parent?: Maybe<Comment>;
  /** Comment replies */
  replies?: Maybe<Array<Comment>>;
  /** Comment text */
  text: Scalars['String']['output'];
  /** Creation record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** Comment author */
  user: User;
  /** Video for which a comment was left */
  video: Video;
};

export type CommentPagination = {
  __typename?: 'CommentPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<Comment>;
};

export type CommentsQuerySearchDto = {
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
  /** Comment text */
  text?: InputMaybe<Scalars['String']['input']>;
};

export type Complaint = {
  __typename?: 'Complaint';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Complaint message */
  message: Scalars['String']['output'];
  /** Complaint reason (NEGATIVE | INCONSISTENCY | RACISM) */
  reason: ComplaintReasons;
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User for which a complaint was left */
  user?: Maybe<User>;
  /** Video for which a complaint was left */
  video?: Maybe<Video>;
};

export type ComplaintPagination = {
  __typename?: 'ComplaintPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<Complaint>;
};

export type ComplaintQuerySearchDto = {
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** Complaint message */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
  /** Complaint reason (NEGATIVE | INCONSISTENCY | RACISM) */
  reason?: InputMaybe<ComplaintReasons>;
};

export enum ComplaintReasons {
  Inconsistency = 'INCONSISTENCY',
  Negative = 'NEGATIVE',
  Racism = 'RACISM'
}

export type CountEntity = {
  __typename?: 'CountEntity';
  /** Total count of records */
  count: Scalars['Int']['output'];
};

export type CreateBannerDto = {
  /** Unique image id that already uploaded */
  bannerImageId: Scalars['Int']['input'];
  /** Unique video id that already uploaded */
  bannerVideoId?: InputMaybe<Scalars['Int']['input']>;
  /** Description of banner */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Date of publishing banner to the main page (default now) */
  publishDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Title of banner */
  title: Scalars['String']['input'];
  /** Banner type (VIDEO | STREAM | IMAGE) */
  type: BannerTypes;
  /** Date of unpublishing banner from the main page (default end of day) */
  unpublishDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type CreateCategoryDto = {
  /** Category name */
  name: Scalars['String']['input'];
};

export type CreateCommentDto = {
  /** Unique id of parent comment */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Comment text */
  text: Scalars['String']['input'];
  /** Unique video id that already uploaded */
  videoId: Scalars['Int']['input'];
};

export type CreateComplaintDto = {
  /** Complaint message */
  message: Scalars['String']['input'];
  /** Complaint reason (NEGATIVE | INCONSISTENCY | RACISM) */
  reason: ComplaintReasons;
  /** User for which a complaint was left */
  userId?: InputMaybe<Scalars['Int']['input']>;
  /** Video for which a complaint was left */
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateHistoryDto = {
  /** Video timestamp */
  time: Scalars['Int']['input'];
  /** Video for which a history was left */
  videoId: Scalars['Int']['input'];
};

export type CreateNotificationDto = {
  /** Notification type (NEW_SUBSCRIBER | NEW_LIKE | NEW_DISLIKE | NEW_COMMENT | VIDEO_BLOCK | VIDEO_UNBLOCK | SYSTEM_UPDATE) */
  type: Notifications;
  /** User for which a notification was left */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreatePartnerRequestDto = {
  /** Partner request message */
  message: Scalars['String']['input'];
};

export type CreatePlaylistDto = {
  /** Playlist name */
  name: Scalars['String']['input'];
};

export type CreateRatingDto = {
  /** Comment for which a rating was left */
  commentId?: InputMaybe<Scalars['Int']['input']>;
  /** Rating type (LIKE | DISLIKE) */
  type: RatingEnum;
  /** Video for which a rating was left */
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateRoleDto = {
  /** Role name (USER | MODERATOR | ADMIN) */
  name: Roles;
};

export type CreateSettingDto = {
  /** User settings */
  userId: Scalars['Int']['input'];
};

export type CreateSubCategoryDto = {
  /** Parent category */
  categoryId: Scalars['Int']['input'];
  /** Sub category name */
  name: Scalars['String']['input'];
};

export type CreateTagDto = {
  /** Tag name */
  name: Scalars['String']['input'];
};

export type CreateUserDto = {
  /** User email */
  email: Scalars['String']['input'];
  /** User login */
  login: Scalars['String']['input'];
  /** User name */
  name: Scalars['String']['input'];
  /** User password */
  password: Scalars['String']['input'];
  /** User avatar */
  userAvatarId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateVideoDto = {
  /** Video category */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Video description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Video name */
  name: Scalars['String']['input'];
  /** Video sub category */
  subCategoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique video id that already uploaded */
  videoFileId: Scalars['Int']['input'];
  /** Video preview */
  videoPreviewId?: InputMaybe<Scalars['Int']['input']>;
};

export type CreateViewDto = {
  /** Video that belongs to view */
  videoId: Scalars['Int']['input'];
};

export type EmailResponse = {
  __typename?: 'EmailResponse';
  /** Response message */
  message: Scalars['String']['output'];
};

export type FileDto = {
  /** File to upload */
  file: Scalars['Upload']['input'];
};

export type FileEntity = {
  __typename?: 'FileEntity';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** File extenstion */
  extension: Scalars['String']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** File size in bytes */
  size: Scalars['Int']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** Url to static path */
  url: Scalars['String']['output'];
};

export type History = {
  __typename?: 'History';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Video timestamp */
  time: Scalars['Int']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User that created history */
  user: User;
  /** Video for which a history was left */
  video: Video;
};

export type HistoryPagination = {
  __typename?: 'HistoryPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<History>;
};

export type HistoryQuerySearchDto = {
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  /** Operation status */
  success: Scalars['Boolean']['output'];
};

export type Monitoring = {
  __typename?: 'Monitoring';
  /** Channel comments count */
  commentsCount: Scalars['Int']['output'];
  /** Channel dislikes count */
  dislikesCount: Scalars['Int']['output'];
  /** Channel likes count */
  likesCount: Scalars['Int']['output'];
  /** Channel subscribers count */
  subscribersCount: Scalars['Int']['output'];
  /** Channel views count */
  viewsCount: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addVideoToPlaylist: Playlist;
  createBanner: Banner;
  createCategory: Category;
  createComment: Comment;
  createComplaint: Complaint;
  createHistory: History;
  createNotification: Notification;
  createPartnerRequest: PartnerRequest;
  createPlaylist: Playlist;
  createRating: Rating;
  createRole: Role;
  createSettings: Setting;
  createSubCategory: SubCategory;
  createTag: Tag;
  createUser: User;
  createVideo: Video;
  createView: View;
  dropAvatar: FileEntity;
  dropBannerImage: FileEntity;
  dropBannerVideo: FileEntity;
  dropPreview: FileEntity;
  dropVideo: FileEntity;
  login: AuthResponse;
  logout: LogoutResponse;
  refreshTokens: AuthResponse;
  register: AuthResponse;
  removeAllHistory: CountEntity;
  removeBanner: Banner;
  removeCategory: Category;
  removeComment: Comment;
  removeComplaint: Complaint;
  removeFromPlaylist: Playlist;
  removeHistory: History;
  removeNotification: Notification;
  removePartnerRequest: PartnerRequest;
  removePlaylist: Playlist;
  removeRating: Rating;
  removeRole: Role;
  removeSettings: Setting;
  removeSubCategory: SubCategory;
  removeTag: Tag;
  removeUser: User;
  removeVideo: Video;
  removeView: View;
  setNewPassord: EmailResponse;
  updateBanner: Banner;
  updateCategory: Category;
  updateComment: Comment;
  updateComplaint: Complaint;
  updateHistory: History;
  updateNotification: Notification;
  updatePartnerRequest: PartnerRequest;
  updatePlaylist: Playlist;
  updateRating: Rating;
  updateRole: Role;
  updateSettings: Setting;
  updateSubCategory: SubCategory;
  updateTag: Tag;
  updateUser: User;
  updateVideo: Video;
  updateView: View;
  uploadAvatar: FileEntity;
  uploadBannerImage: FileEntity;
  uploadBannerVideo: FileEntity;
  uploadPreview: FileEntity;
  uploadVideo: FileEntity;
};


export type MutationAddVideoToPlaylistArgs = {
  dto: VideoPlaylistDto;
};


export type MutationCreateBannerArgs = {
  dto: CreateBannerDto;
};


export type MutationCreateCategoryArgs = {
  dto: CreateCategoryDto;
};


export type MutationCreateCommentArgs = {
  dto: CreateCommentDto;
};


export type MutationCreateComplaintArgs = {
  dto: CreateComplaintDto;
};


export type MutationCreateHistoryArgs = {
  dto: CreateHistoryDto;
};


export type MutationCreateNotificationArgs = {
  dto: CreateNotificationDto;
};


export type MutationCreatePartnerRequestArgs = {
  dto: CreatePartnerRequestDto;
};


export type MutationCreatePlaylistArgs = {
  dto: CreatePlaylistDto;
};


export type MutationCreateRatingArgs = {
  dto: CreateRatingDto;
};


export type MutationCreateRoleArgs = {
  dto: CreateRoleDto;
};


export type MutationCreateSettingsArgs = {
  dto: CreateSettingDto;
};


export type MutationCreateSubCategoryArgs = {
  dto: CreateSubCategoryDto;
};


export type MutationCreateTagArgs = {
  dto: CreateTagDto;
};


export type MutationCreateUserArgs = {
  dto: CreateUserDto;
};


export type MutationCreateVideoArgs = {
  dto: CreateVideoDto;
};


export type MutationCreateViewArgs = {
  dto: CreateViewDto;
};


export type MutationDropAvatarArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDropBannerImageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDropBannerVideoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDropPreviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDropVideoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationLoginArgs = {
  dto: SignInDto;
};


export type MutationRegisterArgs = {
  dto: SignUpDto;
};


export type MutationRemoveBannerArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveCommentArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveComplaintArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveFromPlaylistArgs = {
  dto: VideoPlaylistDto;
};


export type MutationRemoveHistoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveNotificationArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePartnerRequestArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemovePlaylistArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveRatingArgs = {
  id: Scalars['Int']['input'];
  type: RatingEnum;
};


export type MutationRemoveRoleArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSettingsArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveSubCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveVideoArgs = {
  id: Scalars['Int']['input'];
};


export type MutationRemoveViewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationSetNewPassordArgs = {
  dto: ResetPasswordDto;
};


export type MutationUpdateBannerArgs = {
  dto: UpdateBannerDto;
};


export type MutationUpdateCategoryArgs = {
  dto: UpdateCategoryDto;
};


export type MutationUpdateCommentArgs = {
  dto: UpdateCommentDto;
};


export type MutationUpdateComplaintArgs = {
  dto: UpdateComplaintDto;
};


export type MutationUpdateHistoryArgs = {
  dto: UpdateHistoryDto;
};


export type MutationUpdateNotificationArgs = {
  dto: UpdateNotificationDto;
};


export type MutationUpdatePartnerRequestArgs = {
  dto: UpdatePartnerRequestDto;
};


export type MutationUpdatePlaylistArgs = {
  dto: UpdatePlaylistDto;
};


export type MutationUpdateRatingArgs = {
  dto: UpdateRatingDto;
};


export type MutationUpdateRoleArgs = {
  dto: UpdateRoleDto;
};


export type MutationUpdateSettingsArgs = {
  dto: UpdateSettingDto;
};


export type MutationUpdateSubCategoryArgs = {
  dto: UpdateSubCategoryDto;
};


export type MutationUpdateTagArgs = {
  dto: UpdateTagDto;
};


export type MutationUpdateUserArgs = {
  dto: UpdateUserDto;
};


export type MutationUpdateVideoArgs = {
  dto: UpdateVideoDto;
};


export type MutationUpdateViewArgs = {
  dto: UpdateViewDto;
};


export type MutationUploadAvatarArgs = {
  file: FileDto;
};


export type MutationUploadBannerImageArgs = {
  file: FileDto;
};


export type MutationUploadBannerVideoArgs = {
  file: FileDto;
};


export type MutationUploadPreviewArgs = {
  file: FileDto;
};


export type MutationUploadVideoArgs = {
  file: FileDto;
};

export type Notification = {
  __typename?: 'Notification';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Notification type (NEW_SUBSCRIBER | NEW_LIKE | NEW_DISLIKE | NEW_COMMENT | VIDEO_BLOCK | VIDEO_UNBLOCK | SYSTEM_UPDATE) */
  type: Notifications;
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User for which a notification was left */
  user?: Maybe<User>;
};

export type NotificationPagination = {
  __typename?: 'NotificationPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<Notification>;
};

export type NotificationQuerySearchDto = {
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
};

export enum Notifications {
  NewComment = 'NEW_COMMENT',
  NewDislike = 'NEW_DISLIKE',
  NewLike = 'NEW_LIKE',
  NewSubscriber = 'NEW_SUBSCRIBER',
  SystemUpdate = 'SYSTEM_UPDATE',
  VideoBlock = 'VIDEO_BLOCK',
  VideoUnblock = 'VIDEO_UNBLOCK'
}

export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type PartnerRequest = {
  __typename?: 'PartnerRequest';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Partner request message */
  message: Scalars['String']['output'];
  /** Partner request status (OPEN | APPROVED | REJECTED) */
  status: PartnerRequestStatuses;
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User that created partner request */
  user: User;
};

export type PartnerRequestPagination = {
  __typename?: 'PartnerRequestPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<PartnerRequest>;
};

export type PartnerRequestQuerySearchDto = {
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** Partner request message */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
  /** Partner request status (OPEN | APPROVED | REJECTED) */
  status?: InputMaybe<PartnerRequestStatuses>;
};

export enum PartnerRequestStatuses {
  Approved = 'APPROVED',
  Open = 'OPEN',
  Rejected = 'REJECTED'
}

export type Playlist = {
  __typename?: 'Playlist';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Playlist name */
  name: Scalars['String']['output'];
  /** Playlist privacy (OPEN | CLOSED) */
  privacy: Scalars['String']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** Playlist author */
  user: User;
  /** Playlist videos */
  videos?: Maybe<Array<VideoPlaylist>>;
};

export type PlaylistPagination = {
  __typename?: 'PlaylistPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<Playlist>;
};

export type PlaylistQuerySearchDto = {
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** Playlist name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
  /** Playlist privacy (OPEN | CLOSED) */
  privacy?: InputMaybe<Privacy>;
};

export enum Privacy {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type ProfileResponse = {
  __typename?: 'ProfileResponse';
  /** User email */
  email: Scalars['String']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Role name (USER | MODERATOR | ADMIN) */
  role: Roles;
};

export type Query = {
  __typename?: 'Query';
  getBanner: Banner;
  getBanners: Array<Banner>;
  getCategories: Array<Category>;
  getCategoriesWithQuery: CategoryPagination;
  getCategory: Category;
  getComment: Comment;
  getComments: Array<Comment>;
  getCommentsWithQuery: CommentPagination;
  getComplaint: Complaint;
  getComplaints: Array<Complaint>;
  getComplaintsWithQuery: ComplaintPagination;
  getHistory: Array<History>;
  getHistoryWithQuery: HistoryPagination;
  getMe: ProfileResponse;
  getMonitoring: Monitoring;
  getNotification: Notification;
  getNotifications: Array<Notification>;
  getNotificationsWithQuery: NotificationPagination;
  getPartnerRequest: PartnerRequest;
  getPartnerRequests: Array<PartnerRequest>;
  getPartnerRequestsWithQuery: PartnerRequestPagination;
  getPlaylist: Playlist;
  getPlaylists: Array<Playlist>;
  getPlaylistsWithQuery: PlaylistPagination;
  getRating: Rating;
  getRatings: Array<Rating>;
  getRole: Role;
  getRoles: Array<Role>;
  getSettings: Array<Setting>;
  getSettingsById: Setting;
  getSubCategories: Array<SubCategory>;
  getSubCategory: SubCategory;
  getTag: Tag;
  getTags: Array<Tag>;
  getUser: User;
  getUserNotifications: Array<Notification>;
  getUserSettings: Setting;
  getUsers: Array<User>;
  getUsersWithQuery: UserPagination;
  getVideo: Video;
  getVideos: Array<Video>;
  getVideosWithQuery: VideoPagination;
  getView: View;
  getViews: Array<View>;
  sendEmailForgotPassword: EmailResponse;
  sendEmailVerification: EmailResponse;
  verifyEmail: EmailResponse;
};


export type QueryGetBannerArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetCategoriesWithQueryArgs = {
  query: CategoriesQuerySearchDto;
};


export type QueryGetCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetCommentArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetCommentsWithQueryArgs = {
  query: CommentsQuerySearchDto;
};


export type QueryGetComplaintArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetComplaintsWithQueryArgs = {
  query: ComplaintQuerySearchDto;
};


export type QueryGetHistoryWithQueryArgs = {
  query: HistoryQuerySearchDto;
};


export type QueryGetNotificationArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetNotificationsWithQueryArgs = {
  query: NotificationQuerySearchDto;
};


export type QueryGetPartnerRequestArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPartnerRequestsWithQueryArgs = {
  query: PartnerRequestQuerySearchDto;
};


export type QueryGetPlaylistArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetPlaylistsWithQueryArgs = {
  query: PlaylistQuerySearchDto;
};


export type QueryGetRatingArgs = {
  id: Scalars['Int']['input'];
  type: RatingEnum;
};


export type QueryGetRatingsArgs = {
  type: RatingEnum;
};


export type QueryGetRoleArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetSettingsByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetSubCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetTagArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetUsersWithQueryArgs = {
  query: QuerySearchDto;
};


export type QueryGetVideoArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetVideosWithQueryArgs = {
  query: VideoQuerySearchDto;
};


export type QueryGetViewArgs = {
  id: Scalars['Int']['input'];
};


export type QuerySendEmailForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type QuerySendEmailVerificationArgs = {
  email: Scalars['String']['input'];
};


export type QueryVerifyEmailArgs = {
  token: Scalars['String']['input'];
};

export type QuerySearchDto = {
  /** User email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Is user banned or not */
  isBanned?: InputMaybe<Scalars['Boolean']['input']>;
  /** Is user partner or not */
  isPartner?: InputMaybe<Scalars['Boolean']['input']>;
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** User login */
  login?: InputMaybe<Scalars['String']['input']>;
  /** User name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
};

export type Rating = {
  __typename?: 'Rating';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User that created rating */
  user: User;
};

export enum RatingEnum {
  Dislike = 'DISLIKE',
  Like = 'LIKE'
}

export type ResetPasswordDto = {
  /** Email to change user password */
  email: Scalars['String']['input'];
  /** New user password */
  newPassword: Scalars['String']['input'];
  /** Confirmation code */
  token: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Role name (USER | MODERATOR | ADMIN) */
  name: Roles;
  /** Update record date with time zone */
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export enum Roles {
  Admin = 'ADMIN',
  Moderator = 'MODERATOR',
  User = 'USER'
}

export type SelectedCategory = {
  __typename?: 'SelectedCategory';
  category: Category;
};

export type Setting = {
  __typename?: 'Setting';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** User profile privacy (OPEN | CLOSED) */
  privacy: Privacy;
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User settings */
  user: User;
};

export type SignInDto = {
  /** Credentials for login (login or email) */
  credentials: Scalars['String']['input'];
  /** Password for login */
  password: Scalars['String']['input'];
};

export type SignUpDto = {
  /** User email */
  email: Scalars['String']['input'];
  /** User login */
  login: Scalars['String']['input'];
  /** User name */
  name: Scalars['String']['input'];
  /** User password */
  password: Scalars['String']['input'];
};

export type SubCategory = {
  __typename?: 'SubCategory';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Tag name */
  name: Scalars['String']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
};

export type UpdateBannerDto = {
  /** Unique image id that already uploaded */
  bannerImageId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique video id that already uploaded */
  bannerVideoId?: InputMaybe<Scalars['Int']['input']>;
  /** Description of banner */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Date of publishing banner to the main page (default now) */
  publishDate?: InputMaybe<Scalars['DateTime']['input']>;
  /** Title of banner */
  title?: InputMaybe<Scalars['String']['input']>;
  /** Banner type (VIDEO | STREAM | IMAGE) */
  type?: InputMaybe<BannerTypes>;
  /** Date of unpublishing banner from the main page (default end of day) */
  unpublishDate?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UpdateCategoryDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Category name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCommentDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Unique id of parent comment */
  parentId?: InputMaybe<Scalars['Int']['input']>;
  /** Comment text */
  text?: InputMaybe<Scalars['String']['input']>;
  /** Unique video id that already uploaded */
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateComplaintDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Complaint message */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Complaint reason (NEGATIVE | INCONSISTENCY | RACISM) */
  reason?: InputMaybe<ComplaintReasons>;
  /** User for which a complaint was left */
  userId?: InputMaybe<Scalars['Int']['input']>;
  /** Video for which a complaint was left */
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateHistoryDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Video timestamp */
  time?: InputMaybe<Scalars['Int']['input']>;
  /** Video for which a history was left */
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateNotificationDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Notification type (NEW_SUBSCRIBER | NEW_LIKE | NEW_DISLIKE | NEW_COMMENT | VIDEO_BLOCK | VIDEO_UNBLOCK | SYSTEM_UPDATE) */
  type?: InputMaybe<Notifications>;
  /** User for which a notification was left */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdatePartnerRequestDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Partner request message */
  message?: InputMaybe<Scalars['String']['input']>;
  /** Partner request status (OPEN | APPROVED | REJECTED) */
  status?: InputMaybe<PartnerRequestStatuses>;
};

export type UpdatePlaylistDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Playlist name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateRatingDto = {
  /** Comment for which a rating was left */
  commentId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Rating type (LIKE | DISLIKE) */
  type?: InputMaybe<RatingEnum>;
  /** Video for which a rating was left */
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateRoleDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Role name (USER | MODERATOR | ADMIN) */
  name?: InputMaybe<Roles>;
};

export type UpdateSettingDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** User profile privacy (OPEN | CLOSED) */
  privacy?: InputMaybe<Privacy>;
  /** User settings */
  userId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateSubCategoryDto = {
  /** Parent category */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Sub category name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateTagDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Tag name */
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserDto = {
  /** User email */
  email?: InputMaybe<Scalars['String']['input']>;
  /** Unique id */
  id: Scalars['Int']['input'];
  /** User login */
  login?: InputMaybe<Scalars['String']['input']>;
  /** User name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** User password */
  password?: InputMaybe<Scalars['String']['input']>;
  /** User avatar */
  userAvatarId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateVideoDto = {
  /** Video category */
  categoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Video description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Unique id */
  id: Scalars['Int']['input'];
  /** Video name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Video sub category */
  subCategoryId?: InputMaybe<Scalars['Int']['input']>;
  /** Unique video id that already uploaded */
  videoFileId?: InputMaybe<Scalars['Int']['input']>;
  /** Video preview */
  videoPreviewId?: InputMaybe<Scalars['Int']['input']>;
};

export type UpdateViewDto = {
  /** Unique id */
  id: Scalars['Int']['input'];
  /** User that created view */
  userId: Scalars['Int']['input'];
  /** Video that belongs to view */
  videoId?: InputMaybe<Scalars['Int']['input']>;
};

export type User = {
  __typename?: 'User';
  /** Created user banners */
  banners?: Maybe<Array<Banner>>;
  /** User comments */
  comments?: Maybe<Array<Comment>>;
  /** User complaints */
  complaints?: Maybe<Array<Complaint>>;
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** User dislikes */
  dislikes?: Maybe<Array<Rating>>;
  /** User email */
  email: Scalars['String']['output'];
  /** User video history */
  history?: Maybe<Array<History>>;
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Is user banned or not */
  isBanned: Scalars['Boolean']['output'];
  /** Is user partner or not */
  isPartner: Scalars['Boolean']['output'];
  /** User likes */
  likes?: Maybe<Array<Rating>>;
  /** User login */
  login: Scalars['String']['output'];
  /** User name */
  name: Scalars['String']['output'];
  /** User notifications */
  notifications?: Maybe<Array<Notification>>;
  /** User partner requests */
  partnerRequests?: Maybe<Array<PartnerRequest>>;
  /** User password */
  password?: Maybe<Scalars['String']['output']>;
  /** User playlists */
  playlists?: Maybe<Array<Playlist>>;
  /** Role name (USER | MODERATOR | ADMIN) */
  role: Role;
  /** Selected user categoires */
  selectedCategories?: Maybe<Array<SelectedCategory>>;
  /** User settings */
  settings: Array<Setting>;
  /** User subscribers */
  subscribers?: Maybe<Array<User>>;
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User avatar */
  userAvatar?: Maybe<FileEntity>;
  /** User videos */
  videos?: Maybe<Array<Video>>;
};

export type UserPagination = {
  __typename?: 'UserPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<User>;
};

export type Video = {
  __typename?: 'Video';
  /** Video author */
  author: User;
  /** Video category */
  category?: Maybe<Category>;
  /** Video comments */
  comments?: Maybe<Array<Comment>>;
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Video description */
  description?: Maybe<Scalars['String']['output']>;
  /** Video dislikes */
  dislikes?: Maybe<Array<Rating>>;
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Video description */
  isBanned: Scalars['Boolean']['output'];
  /** Video likes */
  likes?: Maybe<Array<Rating>>;
  /** Video name */
  name: Scalars['String']['output'];
  /** Video sub category */
  subCategory?: Maybe<SubCategory>;
  /** Video tags */
  tags?: Maybe<Array<Tag>>;
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** Video file */
  videoFile: FileEntity;
  /** Video preview */
  videoPreview?: Maybe<FileEntity>;
};

export type VideoPagination = {
  __typename?: 'VideoPagination';
  /** Total count of records */
  count: Scalars['Int']['output'];
  /** List of records */
  data: Array<Video>;
};

export type VideoPlaylist = {
  __typename?: 'VideoPlaylist';
  video: Video;
};

export type VideoPlaylistDto = {
  /** Unique playlist id to add video */
  playlistId: Scalars['Int']['input'];
  /** Unique video id to add in playlist */
  videoId: Scalars['Int']['input'];
};

export type VideoQuerySearchDto = {
  /** Video description */
  description?: InputMaybe<Scalars['String']['input']>;
  /** Is video blocked */
  isBanned?: InputMaybe<Scalars['Boolean']['input']>;
  /** Limit of records to show */
  limit: Scalars['Int']['input'];
  /** Video name */
  name?: InputMaybe<Scalars['String']['input']>;
  /** Number of records to skip from 0 */
  offset?: Scalars['Int']['input'];
  /** Sort field */
  orderBy?: InputMaybe<Scalars['String']['input']>;
  /** Sort direction (asc | desc) */
  orderDirection?: InputMaybe<OrderEnum>;
};

export type View = {
  __typename?: 'View';
  /** Creation record date with time zone */
  createdAt: Scalars['DateTime']['output'];
  /** Unique id */
  id: Scalars['Int']['output'];
  /** Update record date with time zone */
  updatedAt: Scalars['DateTime']['output'];
  /** User that created view */
  user: User;
  /** Video that belongs to view */
  video: Video;
};
