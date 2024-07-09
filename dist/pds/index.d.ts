import { CreateUserRequest } from "./CreateUser/req";
import { CreateUserResponse } from "./CreateUser/res";
import { CreateFileRequest } from "./CreateFile/req";
import { CreateFileResponse } from "./CreateFile/res";
import { CreateDriveRequest } from "./CreateDrive/req";
import { CreateDriveResponse } from "./CreateDrive/res";
import { ListTagsRequest } from "./ListTags/req";
import { ListTagsResponse } from "./ListTags/res";
import { ImportUserRequest } from "./ImportUser/req";
import { ImportUserResponse } from "./ImportUser/res";
import { TokenRequest } from "./Token/req";
import { TokenResponse } from "./Token/res";
import { GetLinkInfoRequest } from "./GetLinkInfo/req";
import { GetLinkInfoResponse } from "./GetLinkInfo/res";
import { CreateGroupRequest } from "./CreateGroup/req";
import { CreateGroupResponse } from "./CreateGroup/res";
import { GetGroupRequest } from "./GetGroup/req";
import { GetGroupResponse } from "./GetGroup/res";
import { UpdateGroupRequest } from "./UpdateGroup/req";
import { UpdateGroupResponse } from "./UpdateGroup/res";
import { BatchRequest } from "./Batch/req";
import { BatchResponse } from "./Batch/res";
import { ClearRecyclebinRequest } from "./ClearRecyclebin/req";
import { ClearRecyclebinResponse } from "./ClearRecyclebin/res";
import { CompleteFileRequest } from "./CompleteFile/req";
import { CompleteFileResponse } from "./CompleteFile/res";
import { CreateShareLinkRequest } from "./CreateShareLink/req";
import { CreateShareLinkResponse } from "./CreateShareLink/res";
import { DeltaGetLastCursorRequest } from "./DeltaGetLastCursor/req";
import { DeltaGetLastCursorResponse } from "./DeltaGetLastCursor/res";
import { FileListPermissionRequest } from "./FileListPermission/req";
import { FileListPermissionResponse } from "./FileListPermission/res";
import { FilePutUserTagsRequest } from "./FilePutUserTags/req";
import { FilePutUserTagsResponse } from "./FilePutUserTags/res";
import { GetAsyncTaskRequest } from "./GetAsyncTask/req";
import { GetAsyncTaskResponse } from "./GetAsyncTask/res";
import { GetDefaultDriveRequest } from "./GetDefaultDrive/req";
import { GetDefaultDriveResponse } from "./GetDefaultDrive/res";
import { GetDownloadUrlRequest } from "./GetDownloadUrl/req";
import { GetDownloadUrlResponse } from "./GetDownloadUrl/res";
import { GetDriveRequest } from "./GetDrive/req";
import { GetDriveResponse } from "./GetDrive/res";
import { GetFileRequest } from "./GetFile/req";
import { GetFileResponse } from "./GetFile/res";
import { GetLinkInfoByUserIdRequest } from "./GetLinkInfoByUserId/req";
import { GetLinkInfoByUserIdResponse } from "./GetLinkInfoByUserId/res";
import { GetShareLinkRequest } from "./GetShareLink/req";
import { GetShareLinkResponse } from "./GetShareLink/res";
import { GetShareLinkByAnonymousRequest } from "./GetShareLinkByAnonymous/req";
import { GetShareLinkByAnonymousResponse } from "./GetShareLinkByAnonymous/res";
import { GetShareLinkTokenRequest } from "./GetShareLinkToken/req";
import { GetShareLinkTokenResponse } from "./GetShareLinkToken/res";
import { GetUploadUrlRequest } from "./GetUploadUrl/req";
import { GetUploadUrlResponse } from "./GetUploadUrl/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { LinkAccountRequest } from "./LinkAccount/req";
import { LinkAccountResponse } from "./LinkAccount/res";
import { ListDeltaRequest } from "./ListDelta/req";
import { ListDeltaResponse } from "./ListDelta/res";
import { ListDriveRequest } from "./ListDrive/req";
import { ListDriveResponse } from "./ListDrive/res";
import { ListFileRequest } from "./ListFile/req";
import { ListFileResponse } from "./ListFile/res";
import { ListMyDrivesRequest } from "./ListMyDrives/req";
import { ListMyDrivesResponse } from "./ListMyDrives/res";
import { ListRecyclebinRequest } from "./ListRecyclebin/req";
import { ListRecyclebinResponse } from "./ListRecyclebin/res";
import { ListShareLinkRequest } from "./ListShareLink/req";
import { ListShareLinkResponse } from "./ListShareLink/res";
import { ListUploadedPartsRequest } from "./ListUploadedParts/req";
import { ListUploadedPartsResponse } from "./ListUploadedParts/res";
import { ListUserRequest } from "./ListUser/req";
import { ListUserResponse } from "./ListUser/res";
import { MoveFileRequest } from "./MoveFile/req";
import { MoveFileResponse } from "./MoveFile/res";
import { RestoreFileRequest } from "./RestoreFile/req";
import { RestoreFileResponse } from "./RestoreFile/res";
import { SearchDriveRequest } from "./SearchDrive/req";
import { SearchDriveResponse } from "./SearchDrive/res";
import { ScanFileRequest } from "./ScanFile/req";
import { ScanFileResponse } from "./ScanFile/res";
import { SearchFileRequest } from "./SearchFile/req";
import { SearchFileResponse } from "./SearchFile/res";
import { SearchShareLinkRequest } from "./SearchShareLink/req";
import { SearchShareLinkResponse } from "./SearchShareLink/res";
import { SearchUserRequest } from "./SearchUser/req";
import { SearchUserResponse } from "./SearchUser/res";
import { TrashFileRequest } from "./TrashFile/req";
import { TrashFileResponse } from "./TrashFile/res";
import { UpdateDriveRequest } from "./UpdateDrive/req";
import { UpdateDriveResponse } from "./UpdateDrive/res";
import { UpdateFileRequest } from "./UpdateFile/req";
import { UpdateFileResponse } from "./UpdateFile/res";
import { UpdateShareLinkRequest } from "./UpdateShareLink/req";
import { UpdateShareLinkResponse } from "./UpdateShareLink/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { ListGroupRequest } from "./ListGroup/req";
import { ListGroupResponse } from "./ListGroup/res";
import { DeleteFileRequest } from "./DeleteFile/req";
import { DeleteFileResponse } from "./DeleteFile/res";
import { ListAddressGroupsRequest } from "./ListAddressGroups/req";
import { ListAddressGroupsResponse } from "./ListAddressGroups/res";
import { ListFacegroupsRequest } from "./ListFacegroups/req";
import { ListFacegroupsResponse } from "./ListFacegroups/res";
import { SearchAddressGroupsRequest } from "./SearchAddressGroups/req";
import { SearchAddressGroupsResponse } from "./SearchAddressGroups/res";
import { UpdateFacegroupRequest } from "./UpdateFacegroup/req";
import { UpdateFacegroupResponse } from "./UpdateFacegroup/res";
import { AuthorizeRequest } from "./Authorize/req";
import { AuthorizeResponse } from "./Authorize/res";
import { CancelShareLinkRequest } from "./CancelShareLink/req";
import { CancelShareLinkResponse } from "./CancelShareLink/res";
import { DeleteDriveRequest } from "./DeleteDrive/req";
import { DeleteDriveResponse } from "./DeleteDrive/res";
import { DeleteGroupRequest } from "./DeleteGroup/req";
import { DeleteGroupResponse } from "./DeleteGroup/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DownloadFileRequest } from "./DownloadFile/req";
import { DownloadFileResponse } from "./DownloadFile/res";
import { FileAddPermissionRequest } from "./FileAddPermission/req";
import { FileAddPermissionResponse } from "./FileAddPermission/res";
import { FileDeleteUserTagsRequest } from "./FileDeleteUserTags/req";
import { FileDeleteUserTagsResponse } from "./FileDeleteUserTags/res";
import { FileRemovePermissionRequest } from "./FileRemovePermission/req";
import { FileRemovePermissionResponse } from "./FileRemovePermission/res";
import { GetVideoPreviewPlayInfoRequest } from "./GetVideoPreviewPlayInfo/req";
import { GetVideoPreviewPlayInfoResponse } from "./GetVideoPreviewPlayInfo/res";
import { ListReceivedFileRequest } from "./ListReceivedFile/req";
import { ListReceivedFileResponse } from "./ListReceivedFile/res";
import { RemoveFaceGroupFileRequest } from "./RemoveFaceGroupFile/req";
import { RemoveFaceGroupFileResponse } from "./RemoveFaceGroupFile/res";
import { DeleteRevisionRequest } from "./DeleteRevision/req";
import { DeleteRevisionResponse } from "./DeleteRevision/res";
import { GetRevisionRequest } from "./GetRevision/req";
import { GetRevisionResponse } from "./GetRevision/res";
import { ListRevisionRequest } from "./ListRevision/req";
import { ListRevisionResponse } from "./ListRevision/res";
import { RestoreRevisionRequest } from "./RestoreRevision/req";
import { RestoreRevisionResponse } from "./RestoreRevision/res";
import { UpdateRevisionRequest } from "./UpdateRevision/req";
import { UpdateRevisionResponse } from "./UpdateRevision/res";
import { RemoveGroupMemberRequest } from "./RemoveGroupMember/req";
import { RemoveGroupMemberResponse } from "./RemoveGroupMember/res";
import { AddGroupMemberRequest } from "./AddGroupMember/req";
import { AddGroupMemberResponse } from "./AddGroupMember/res";
import { CopyFileRequest } from "./CopyFile/req";
import { CopyFileResponse } from "./CopyFile/res";
import { GetVideoPreviewPlayMetaRequest } from "./GetVideoPreviewPlayMeta/req";
import { GetVideoPreviewPlayMetaResponse } from "./GetVideoPreviewPlayMeta/res";
import { ListGroupMemberRequest } from "./ListGroupMember/req";
import { ListGroupMemberResponse } from "./ListGroupMember/res";
import { ListMyGroupDriveRequest } from "./ListMyGroupDrive/req";
import { ListMyGroupDriveResponse } from "./ListMyGroupDrive/res";
import { CreateDomainRequest } from "./CreateDomain/req";
import { CreateDomainResponse } from "./CreateDomain/res";
import { DeleteDomainRequest } from "./DeleteDomain/req";
import { DeleteDomainResponse } from "./DeleteDomain/res";
import { GetDomainRequest } from "./GetDomain/req";
import { GetDomainResponse } from "./GetDomain/res";
import { ListDomainsRequest } from "./ListDomains/req";
import { ListDomainsResponse } from "./ListDomains/res";
import { SearchDomainsRequest } from "./SearchDomains/req";
import { SearchDomainsResponse } from "./SearchDomains/res";
import { UpdateDomainRequest } from "./UpdateDomain/req";
import { UpdateDomainResponse } from "./UpdateDomain/res";
import { CsiGetFileInfoRequest } from "./CsiGetFileInfo/req";
import { CsiGetFileInfoResponse } from "./CsiGetFileInfo/res";
import { InvestigateFileRequest } from "./InvestigateFile/req";
import { InvestigateFileResponse } from "./InvestigateFile/res";
import { CreateIdentityToBenefitPkgMappingRequest } from "./CreateIdentityToBenefitPkgMapping/req";
import { CreateIdentityToBenefitPkgMappingResponse } from "./CreateIdentityToBenefitPkgMapping/res";
import { GetIdentityToBenefitPkgMappingRequest } from "./GetIdentityToBenefitPkgMapping/req";
import { GetIdentityToBenefitPkgMappingResponse } from "./GetIdentityToBenefitPkgMapping/res";
import { ListIdentityToBenefitPkgMappingRequest } from "./ListIdentityToBenefitPkgMapping/req";
import { ListIdentityToBenefitPkgMappingResponse } from "./ListIdentityToBenefitPkgMapping/res";
import { UpdateIdentityToBenefitPkgMappingRequest } from "./UpdateIdentityToBenefitPkgMapping/req";
import { UpdateIdentityToBenefitPkgMappingResponse } from "./UpdateIdentityToBenefitPkgMapping/res";
import { ListAssignmentRequest } from "./ListAssignment/req";
import { ListAssignmentResponse } from "./ListAssignment/res";
import { AddStoryFilesRequest } from "./AddStoryFiles/req";
import { AddStoryFilesResponse } from "./AddStoryFiles/res";
import { CreateCustomizedStoryRequest } from "./CreateCustomizedStory/req";
import { CreateCustomizedStoryResponse } from "./CreateCustomizedStory/res";
import { CreateSimilarImageClusterTaskRequest } from "./CreateSimilarImageClusterTask/req";
import { CreateSimilarImageClusterTaskResponse } from "./CreateSimilarImageClusterTask/res";
import { CreateStoryRequest } from "./CreateStory/req";
import { CreateStoryResponse } from "./CreateStory/res";
import { DeleteStoryRequest } from "./DeleteStory/req";
import { DeleteStoryResponse } from "./DeleteStory/res";
import { GetTaskStatusRequest } from "./GetTaskStatus/req";
import { GetTaskStatusResponse } from "./GetTaskStatus/res";
import { GetStoryRequest } from "./GetStory/req";
import { GetStoryResponse } from "./GetStory/res";
import { RemoveStoryFilesRequest } from "./RemoveStoryFiles/req";
import { RemoveStoryFilesResponse } from "./RemoveStoryFiles/res";
import { UpdateStoryRequest } from "./UpdateStory/req";
import { UpdateStoryResponse } from "./UpdateStory/res";
import { SearchSimilarImageClustersRequest } from "./SearchSimilarImageClusters/req";
import { SearchSimilarImageClustersResponse } from "./SearchSimilarImageClusters/res";
import { SearchStoriesRequest } from "./SearchStories/req";
import { SearchStoriesResponse } from "./SearchStories/res";
import { AssignRoleRequest } from "./AssignRole/req";
import { AssignRoleResponse } from "./AssignRole/res";
import { CancelAssignRoleRequest } from "./CancelAssignRole/req";
import { CancelAssignRoleResponse } from "./CancelAssignRole/res";
import { UnLinkAccountRequest } from "./UnLinkAccount/req";
import { UnLinkAccountResponse } from "./UnLinkAccount/res";
import { GetDomainQuotaRequest } from "./GetDomainQuota/req";
import { GetDomainQuotaResponse } from "./GetDomainQuota/res";
import { GroupUpdateNameRequest } from "./GroupUpdateName/req";
import { GroupUpdateNameResponse } from "./GroupUpdateName/res";
import { InnerSignInRequest } from "./InnerSignIn/req";
import { InnerSignInResponse } from "./InnerSignIn/res";
import { SelectDomainRequest } from "./SelectDomain/req";
import { SelectDomainResponse } from "./SelectDomain/res";

interface PDS {
    /**
     * 创建用户。
     */
    CreateUser(query: CreateUserRequest): Promise<CreateUserResponse>;
    /**
     * 创建文件或文件夹。
     */
    CreateFile(query: CreateFileRequest): Promise<CreateFileResponse>;
    /**
     * 创建空间。
     */
    CreateDrive(query: CreateDriveRequest): Promise<CreateDriveResponse>;
    /**
     * 列举标签分组。
     */
    ListTags(query: ListTagsRequest): Promise<ListTagsResponse>;
    /**
     * 导入用户。
     */
    ImportUser(query: ImportUserRequest): Promise<ImportUserResponse>;
    /**
     * OAuth2.0授权流程的获取访问令牌。
     */
    Token(query: TokenRequest): Promise<TokenResponse>;
    /**
     * 获取账号信息。
     */
    GetLinkInfo(query: GetLinkInfoRequest): Promise<GetLinkInfoResponse>;
    /**
     * 创建群组。
     */
    CreateGroup(query: CreateGroupRequest): Promise<CreateGroupResponse>;
    /**
     * 获取群组信息。
     */
    GetGroup(query: GetGroupRequest): Promise<GetGroupResponse>;
    /**
     * 根据群组id定位到指定的群组，并修改群组信息。
     */
    UpdateGroup(query: UpdateGroupRequest): Promise<UpdateGroupResponse>;
    /**
     * 支持批量调用部分API，提升调用效率。
     */
    Batch(query: BatchRequest): Promise<BatchResponse>;
    /**
     * 清空回收站中所有文件和文件夹。
     */
    ClearRecyclebin(query: ClearRecyclebinRequest): Promise<ClearRecyclebinResponse>;
    /**
     * 完成文件上传。
     */
    CompleteFile(query: CompleteFileRequest): Promise<CompleteFileResponse>;
    /**
     * 创建分享。
     */
    CreateShareLink(query: CreateShareLinkRequest): Promise<CreateShareLinkResponse>;
    /**
     * 获取增量操作游标。
     */
    DeltaGetLastCursor(query: DeltaGetLastCursorRequest): Promise<DeltaGetLastCursorResponse>;
    /**
     * 列举文件的共享或授权记录。
     */
    FileListPermission(query: FileListPermissionRequest): Promise<FileListPermissionResponse>;
    /**
     * 对文件添加自定义标签。
     */
    FilePutUserTags(query: FilePutUserTagsRequest): Promise<FilePutUserTagsResponse>;
    /**
     * 获取异步任务信息。
     */
    GetAsyncTask(query: GetAsyncTaskRequest): Promise<GetAsyncTaskResponse>;
    /**
     * 获取指定用户的缺省空间。
     */
    GetDefaultDrive(query: GetDefaultDriveRequest): Promise<GetDefaultDriveResponse>;
    /**
     * 获取文件下载地址。
     */
    GetDownloadUrl(query: GetDownloadUrlRequest): Promise<GetDownloadUrlResponse>;
    /**
     * 获取空间信息。
     */
    GetDrive(query: GetDriveRequest): Promise<GetDriveResponse>;
    /**
     * 获取文件详情。
     */
    GetFile(query: GetFileRequest): Promise<GetFileResponse>;
    /**
     * 根据用户ID获取账号信息。
     */
    GetLinkInfoByUserId(query: GetLinkInfoByUserIdRequest): Promise<GetLinkInfoByUserIdResponse>;
    /**
     * 获取分享信息。
     */
    GetShareLink(query: GetShareLinkRequest): Promise<GetShareLinkResponse>;
    /**
     * 匿名查看分享信息。
     */
    GetShareLinkByAnonymous(query: GetShareLinkByAnonymousRequest): Promise<GetShareLinkByAnonymousResponse>;
    /**
     * 匿名获取分享令牌。
     */
    GetShareLinkToken(query: GetShareLinkTokenRequest): Promise<GetShareLinkTokenResponse>;
    /**
     * 获取上传地址。
     */
    GetUploadUrl(query: GetUploadUrlRequest): Promise<GetUploadUrlResponse>;
    /**
     * 获取用户信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 绑定账号。
     */
    LinkAccount(query: LinkAccountRequest): Promise<LinkAccountResponse>;
    /**
     * 列举增量信息。
     */
    ListDelta(query: ListDeltaRequest): Promise<ListDeltaResponse>;
    /**
     * 列举空间。
     */
    ListDrive(query: ListDriveRequest): Promise<ListDriveResponse>;
    /**
     * 直接文件夹下列举文件和文件夹。
     */
    ListFile(query: ListFileRequest): Promise<ListFileResponse>;
    /**
     * 列举登录用户自己的空间列表。
     */
    ListMyDrives(query: ListMyDrivesRequest): Promise<ListMyDrivesResponse>;
    /**
     * 列举回收站。
     */
    ListRecyclebin(query: ListRecyclebinRequest): Promise<ListRecyclebinResponse>;
    /**
     * 列举分享。
     */
    ListShareLink(query: ListShareLinkRequest): Promise<ListShareLinkResponse>;
    /**
     * 列举已上传成功的多段。
     */
    ListUploadedParts(query: ListUploadedPartsRequest): Promise<ListUploadedPartsResponse>;
    /**
     * 列举用户。
     */
    ListUser(query: ListUserRequest): Promise<ListUserResponse>;
    /**
     * 移动文件或文件夹。
     */
    MoveFile(query: MoveFileRequest): Promise<MoveFileResponse>;
    /**
     * 从回收站恢复文件或文件夹。
     */
    RestoreFile(query: RestoreFileRequest): Promise<RestoreFileResponse>;
    /**
     * 搜索空间。
     */
    SearchDrive(query: SearchDriveRequest): Promise<SearchDriveResponse>;
    /**
     * 扫描文件。
     */
    ScanFile(query: ScanFileRequest): Promise<ScanFileResponse>;
    /**
     * 搜索文件。
     */
    SearchFile(query: SearchFileRequest): Promise<SearchFileResponse>;
    /**
     * 搜索分享。
     */
    SearchShareLink(query: SearchShareLinkRequest): Promise<SearchShareLinkResponse>;
    /**
     * 搜索用户。
     */
    SearchUser(query: SearchUserRequest): Promise<SearchUserResponse>;
    /**
     * 文件或文件夹放入回收站。
     */
    TrashFile(query: TrashFileRequest): Promise<TrashFileResponse>;
    /**
     * 修改空间信息。
     */
    UpdateDrive(query: UpdateDriveRequest): Promise<UpdateDriveResponse>;
    /**
     * 修改文件信息，非数据。
     */
    UpdateFile(query: UpdateFileRequest): Promise<UpdateFileResponse>;
    /**
     * 修改分享。
     */
    UpdateShareLink(query: UpdateShareLinkRequest): Promise<UpdateShareLinkResponse>;
    /**
     * 修改用户信息。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 列举群组。
     */
    ListGroup(query: ListGroupRequest): Promise<ListGroupResponse>;
    /**
     * 删除文件或文件夹。
     */
    DeleteFile(query: DeleteFileRequest): Promise<DeleteFileResponse>;
    /**
     * 列举地点聚类。
     */
    ListAddressGroups(query: ListAddressGroupsRequest): Promise<ListAddressGroupsResponse>;
    /**
     * 列举人脸分组。
     */
    ListFacegroups(query: ListFacegroupsRequest): Promise<ListFacegroupsResponse>;
    /**
     * 根据地点列表查询地点聚类。
     */
    SearchAddressGroups(query: SearchAddressGroupsRequest): Promise<SearchAddressGroupsResponse>;
    /**
     * 更新人脸分组信息。
     */
    UpdateFacegroup(query: UpdateFacegroupRequest): Promise<UpdateFacegroupResponse>;
    /**
     * OAuth2.0请求授权。
     */
    Authorize(query: AuthorizeRequest): Promise<AuthorizeResponse>;
    /**
     * 删除分享。
     */
    CancelShareLink(query: CancelShareLinkRequest): Promise<CancelShareLinkResponse>;
    /**
     * 删除空间。
     */
    DeleteDrive(query: DeleteDriveRequest): Promise<DeleteDriveResponse>;
    /**
     * 删除群组接口， 在删除群组前，需保证群组下没有其他群组或用户，否则会导致删除失败。
     */
    DeleteGroup(query: DeleteGroupRequest): Promise<DeleteGroupResponse>;
    /**
     * 删除用户。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 下载文件。
     */
    DownloadFile(query: DownloadFileRequest): Promise<DownloadFileResponse>;
    /**
     * 文件共享授权给用户或组。每个Drive下的共享授权记录最多不能超过1000条
     */
    FileAddPermission(query: FileAddPermissionRequest): Promise<FileAddPermissionResponse>;
    /**
     * 删除文件自定义标签。
     */
    FileDeleteUserTags(query: FileDeleteUserTagsRequest): Promise<FileDeleteUserTagsResponse>;
    /**
     * 取消文件共享授权。
     */
    FileRemovePermission(query: FileRemovePermissionRequest): Promise<FileRemovePermissionResponse>;
    /**
     * 获取视频播放信息。
     */
    GetVideoPreviewPlayInfo(query: GetVideoPreviewPlayInfoRequest): Promise<GetVideoPreviewPlayInfoResponse>;
    /**
     * 收到的共享， 可通过此接口获取到从个人空间授权给此用户的文件列表。
     */
    ListReceivedFile(query: ListReceivedFileRequest): Promise<ListReceivedFileResponse>;
    /**
     * 删除人脸分组中的文件。
     */
    RemoveFaceGroupFile(query: RemoveFaceGroupFileRequest): Promise<RemoveFaceGroupFileResponse>;
    /**
     * 删除历史版本，不支持删除最新版本。
     */
    DeleteRevision(query: DeleteRevisionRequest): Promise<DeleteRevisionResponse>;
    /**
     * 获取版本详情。
     */
    GetRevision(query: GetRevisionRequest): Promise<GetRevisionResponse>;
    /**
     * 列举版本信息。
     */
    ListRevision(query: ListRevisionRequest): Promise<ListRevisionResponse>;
    /**
     * 将文件的某个历史版本，还原为文件的最新版本，还原时生成一个新版本，被还原的版本不变。不支持还原最新版本。
     */
    RestoreRevision(query: RestoreRevisionRequest): Promise<RestoreRevisionResponse>;
    /**
     * 更新版本信息，设置版本为永久保留，或者添加版本描述信息。支持将一个文件的最多50个版本设置为永久保留。
     */
    UpdateRevision(query: UpdateRevisionRequest): Promise<UpdateRevisionResponse>;
    /**
     * 从群组移除成员。
     */
    RemoveGroupMember(query: RemoveGroupMemberRequest): Promise<RemoveGroupMemberResponse>;
    /**
     * 添加成员到群组。
     */
    AddGroupMember(query: AddGroupMemberRequest): Promise<AddGroupMemberResponse>;
    /**
     * 拷贝文件或目录。
     */
    CopyFile(query: CopyFileRequest): Promise<CopyFileResponse>;
    /**
     * 获取视频播放元信息。
     */
    GetVideoPreviewPlayMeta(query: GetVideoPreviewPlayMetaRequest): Promise<GetVideoPreviewPlayMetaResponse>;
    /**
     * 列举团队成员。
     */
    ListGroupMember(query: ListGroupMemberRequest): Promise<ListGroupMemberResponse>;
    /**
     * 列举被授权的团队空间列表。
     */
    ListMyGroupDrive(query: ListMyGroupDriveRequest): Promise<ListMyGroupDriveResponse>;
    /**
     * 创建 domain。
     */
    CreateDomain(query: CreateDomainRequest): Promise<CreateDomainResponse>;
    /**
     * 删除 domain
     */
    DeleteDomain(query: DeleteDomainRequest): Promise<DeleteDomainResponse>;
    /**
     * 获取 domain
     */
    GetDomain(query: GetDomainRequest): Promise<GetDomainResponse>;
    /**
     * 列举 domain
     */
    ListDomains(query: ListDomainsRequest): Promise<ListDomainsResponse>;
    /**
     * 搜索 domain
     */
    SearchDomains(query: SearchDomainsRequest): Promise<SearchDomainsResponse>;
    /**
     * 更新 domain。
     */
    UpdateDomain(query: UpdateDomainRequest): Promise<UpdateDomainResponse>;
    /**
     * 获取文件的内容安全详情。
     */
    CsiGetFileInfo(query: CsiGetFileInfoRequest): Promise<CsiGetFileInfoResponse>;
    /**
     * 将未经审核的文件送审。
     */
    InvestigateFile(query: InvestigateFileRequest): Promise<InvestigateFileResponse>;
    /**
     * 创建实体和权益包关联，可用于给用户绑定权益包。
     */
    CreateIdentityToBenefitPkgMapping(query: CreateIdentityToBenefitPkgMappingRequest): Promise<CreateIdentityToBenefitPkgMappingResponse>;
    /**
     * 获取实体和权益包关联，可用于获取用户绑定的权益包。
     */
    GetIdentityToBenefitPkgMapping(query: GetIdentityToBenefitPkgMappingRequest): Promise<GetIdentityToBenefitPkgMappingResponse>;
    /**
     * 列举实体和权益包关联，可用于获取用户绑定的权益包列表。
     */
    ListIdentityToBenefitPkgMapping(query: ListIdentityToBenefitPkgMappingRequest): Promise<ListIdentityToBenefitPkgMappingResponse>;
    /**
     * 更新实体和权益包关联，可用于给用户绑定权益包。
     */
    UpdateIdentityToBenefitPkgMapping(query: UpdateIdentityToBenefitPkgMappingRequest): Promise<UpdateIdentityToBenefitPkgMappingResponse>;
    /**
     * 列举已分配的角色列表，比如可通过团队ID获取团队管理员角色列表。
     */
    ListAssignment(query: ListAssignmentRequest): Promise<ListAssignmentResponse>;
    /**
     * 给指定故事添加文件。
     */
    AddStoryFiles(query: AddStoryFilesRequest): Promise<AddStoryFilesResponse>;
    /**
     * 创建自定义故事。
     * 区别于推荐故事，自定义故事下面的文件列表由用户指定。
     */
    CreateCustomizedStory(query: CreateCustomizedStoryRequest): Promise<CreateCustomizedStoryResponse>;
    /**
     * 用户可以发起创建相似图片聚类任务，该任务会将指定 drive 空间下相似的图片聚类在一起。
     */
    CreateSimilarImageClusterTask(query: CreateSimilarImageClusterTaskRequest): Promise<CreateSimilarImageClusterTaskResponse>;
    /**
     * 创建推荐故事。
     * PDS 会根据请求参数中的故事类型和时间范围筛选 drive 空间下的图片和视频，将符合条件的图片、视频加入该故事的文件列表。
     * 若没有符合条件的图片、视频，则会创建空故事。
     */
    CreateStory(query: CreateStoryRequest): Promise<CreateStoryResponse>;
    /**
     * 删除指定故事。
     */
    DeleteStory(query: DeleteStoryRequest): Promise<DeleteStoryResponse>;
    /**
     * 查询增值服务异步任务执行状态。
     * 目前支持的接口有：CreateSimilarImageClusterTask。
     */
    GetTaskStatus(query: GetTaskStatusRequest): Promise<GetTaskStatusResponse>;
    /**
     * 获取指定故事详情，包含封面、文件列表等。
     */
    GetStory(query: GetStoryRequest): Promise<GetStoryResponse>;
    /**
     * 移除指定故事中的文件。
     */
    RemoveStoryFiles(query: RemoveStoryFilesRequest): Promise<RemoveStoryFilesResponse>;
    /**
     * 更新指定故事的信息，包含名称、标签、自定义 id、封面等。
     */
    UpdateStory(query: UpdateStoryRequest): Promise<UpdateStoryResponse>;
    /**
     * 获取指定 drive 空间下的相似图片。
     */
    SearchSimilarImageClusters(query: SearchSimilarImageClustersRequest): Promise<SearchSimilarImageClustersResponse>;
    /**
     * 根据用户指定的条件，查询指定 drive 空间下的故事列表。
     */
    SearchStories(query: SearchStoriesRequest): Promise<SearchStoriesResponse>;
    /**
     * 当前支持将用户设置为团队管理员角色。
     */
    AssignRole(query: AssignRoleRequest): Promise<AssignRoleResponse>;
    /**
     * 当前仅支持取消团队管理员角色。
     */
    CancelAssignRole(query: CancelAssignRoleRequest): Promise<CancelAssignRoleResponse>;
    /**
     * 取消账号绑定。
     */
    UnLinkAccount(query: UnLinkAccountRequest): Promise<UnLinkAccountResponse>;
    /**
     * 获取domain限额
     */
    GetDomainQuota(query: GetDomainQuotaRequest): Promise<GetDomainQuotaResponse>;
    /**
     * 更新用户组名字
     */
    GroupUpdateName(query: GroupUpdateNameRequest): Promise<GroupUpdateNameResponse>;
    /**
     * 企业短信验证码登录
     */
    InnerSignIn(query: InnerSignInRequest): Promise<InnerSignInResponse>;
    /**
     * 企业登录选择domain
     */
    SelectDomain(query: SelectDomainRequest): Promise<SelectDomainResponse>;
}
export default PDS;
