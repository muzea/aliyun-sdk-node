import { ListRoomsRequest } from "./ListRooms/req";
import { ListRoomsResponse } from "./ListRooms/res";
import { GetAuthTokenRequest } from "./GetAuthToken/req";
import { GetAuthTokenResponse } from "./GetAuthToken/res";
import { GetRoomRequest } from "./GetRoom/req";
import { GetRoomResponse } from "./GetRoom/res";
import { UpdateRoomRequest } from "./UpdateRoom/req";
import { UpdateRoomResponse } from "./UpdateRoom/res";
import { DeleteRoomRequest } from "./DeleteRoom/req";
import { DeleteRoomResponse } from "./DeleteRoom/res";
import { StopLiveRequest } from "./StopLive/req";
import { StopLiveResponse } from "./StopLive/res";
import { PublishLiveRequest } from "./PublishLive/req";
import { PublishLiveResponse } from "./PublishLive/res";
import { UpdateLiveRequest } from "./UpdateLive/req";
import { UpdateLiveResponse } from "./UpdateLive/res";
import { CreateRoomRequest } from "./CreateRoom/req";
import { CreateRoomResponse } from "./CreateRoom/res";
import { DeleteLiveRequest } from "./DeleteLive/req";
import { DeleteLiveResponse } from "./DeleteLive/res";
import { CreateLiveRequest } from "./CreateLive/req";
import { CreateLiveResponse } from "./CreateLive/res";
import { GetLiveRequest } from "./GetLive/req";
import { GetLiveResponse } from "./GetLive/res";
import { SendCustomMessageToUsersRequest } from "./SendCustomMessageToUsers/req";
import { SendCustomMessageToUsersResponse } from "./SendCustomMessageToUsers/res";
import { SendCustomMessageToAllRequest } from "./SendCustomMessageToAll/req";
import { SendCustomMessageToAllResponse } from "./SendCustomMessageToAll/res";
import { ListConferenceUsersRequest } from "./ListConferenceUsers/req";
import { ListConferenceUsersResponse } from "./ListConferenceUsers/res";
import { DeleteConferenceRequest } from "./DeleteConference/req";
import { DeleteConferenceResponse } from "./DeleteConference/res";
import { GetConferenceRequest } from "./GetConference/req";
import { GetConferenceResponse } from "./GetConference/res";
import { RemoveMemberRequest } from "./RemoveMember/req";
import { RemoveMemberResponse } from "./RemoveMember/res";
import { BanCommentRequest } from "./BanComment/req";
import { BanCommentResponse } from "./BanComment/res";
import { CancelBanCommentRequest } from "./CancelBanComment/req";
import { CancelBanCommentResponse } from "./CancelBanComment/res";
import { BanAllCommentRequest } from "./BanAllComment/req";
import { BanAllCommentResponse } from "./BanAllComment/res";
import { SendCommentRequest } from "./SendComment/req";
import { SendCommentResponse } from "./SendComment/res";
import { CancelBanAllCommentRequest } from "./CancelBanAllComment/req";
import { CancelBanAllCommentResponse } from "./CancelBanAllComment/res";
import { GetStandardRoomJumpUrlRequest } from "./GetStandardRoomJumpUrl/req";
import { GetStandardRoomJumpUrlResponse } from "./GetStandardRoomJumpUrl/res";
import { CreateLiveRoomRequest } from "./CreateLiveRoom/req";
import { CreateLiveRoomResponse } from "./CreateLiveRoom/res";
import { GetLiveRoomRequest } from "./GetLiveRoom/req";
import { GetLiveRoomResponse } from "./GetLiveRoom/res";
import { GetLiveRoomStatisticsRequest } from "./GetLiveRoomStatistics/req";
import { GetLiveRoomStatisticsResponse } from "./GetLiveRoomStatistics/res";
import { GetLiveRoomUserStatisticsRequest } from "./GetLiveRoomUserStatistics/req";
import { GetLiveRoomUserStatisticsResponse } from "./GetLiveRoomUserStatistics/res";
import { ListLiveRoomsRequest } from "./ListLiveRooms/req";
import { ListLiveRoomsResponse } from "./ListLiveRooms/res";
import { StopLiveRoomRequest } from "./StopLiveRoom/req";
import { StopLiveRoomResponse } from "./StopLiveRoom/res";
import { CreateClassRequest } from "./CreateClass/req";
import { CreateClassResponse } from "./CreateClass/res";
import { GetClassDetailRequest } from "./GetClassDetail/req";
import { GetClassDetailResponse } from "./GetClassDetail/res";
import { StopClassRequest } from "./StopClass/req";
import { StopClassResponse } from "./StopClass/res";
import { DeleteClassRequest } from "./DeleteClass/req";
import { DeleteClassResponse } from "./DeleteClass/res";
import { UpdateClassRequest } from "./UpdateClass/req";
import { UpdateClassResponse } from "./UpdateClass/res";
import { ListLiveRoomsByIdRequest } from "./ListLiveRoomsById/req";
import { ListLiveRoomsByIdResponse } from "./ListLiveRoomsById/res";
import { DeleteCommentRequest } from "./DeleteComment/req";
import { DeleteCommentResponse } from "./DeleteComment/res";
import { ListCommentsRequest } from "./ListComments/req";
import { ListCommentsResponse } from "./ListComments/res";
import { DeleteLiveRoomRequest } from "./DeleteLiveRoom/req";
import { DeleteLiveRoomResponse } from "./DeleteLiveRoom/res";
import { UpdateLiveRoomRequest } from "./UpdateLiveRoom/req";
import { UpdateLiveRoomResponse } from "./UpdateLiveRoom/res";
import { PublishLiveRoomRequest } from "./PublishLiveRoom/req";
import { PublishLiveRoomResponse } from "./PublishLiveRoom/res";
import { ListClassesRequest } from "./ListClasses/req";
import { ListClassesResponse } from "./ListClasses/res";
import { ListRoomUsersRequest } from "./ListRoomUsers/req";
import { ListRoomUsersResponse } from "./ListRoomUsers/res";
import { GetClassRecordRequest } from "./GetClassRecord/req";
import { GetClassRecordResponse } from "./GetClassRecord/res";
import { GetLiveRecordRequest } from "./GetLiveRecord/req";
import { GetLiveRecordResponse } from "./GetLiveRecord/res";
import { KickRoomUserRequest } from "./KickRoomUser/req";
import { KickRoomUserResponse } from "./KickRoomUser/res";
import { SetUserAdminRequest } from "./SetUserAdmin/req";
import { SetUserAdminResponse } from "./SetUserAdmin/res";
import { ListSensitiveWordRequest } from "./ListSensitiveWord/req";
import { ListSensitiveWordResponse } from "./ListSensitiveWord/res";
import { DeleteSensitiveWordRequest } from "./DeleteSensitiveWord/req";
import { DeleteSensitiveWordResponse } from "./DeleteSensitiveWord/res";
import { CreateSensitiveWordRequest } from "./CreateSensitiveWord/req";
import { CreateSensitiveWordResponse } from "./CreateSensitiveWord/res";
import { CancelUserAdminRequest } from "./CancelUserAdmin/req";
import { CancelUserAdminResponse } from "./CancelUserAdmin/res";
import { DescribeMeterImpWatchLiveTimeByLiveIdRequest } from "./DescribeMeterImpWatchLiveTimeByLiveId/req";
import { DescribeMeterImpWatchLiveTimeByLiveIdResponse } from "./DescribeMeterImpWatchLiveTimeByLiveId/res";
import { DescribeMeterImpPlayBackTimeByLiveIdRequest } from "./DescribeMeterImpPlayBackTimeByLiveId/req";
import { DescribeMeterImpPlayBackTimeByLiveIdResponse } from "./DescribeMeterImpPlayBackTimeByLiveId/res";
import { UpdateShareScreenLayoutRequest } from "./UpdateShareScreenLayout/req";
import { UpdateShareScreenLayoutResponse } from "./UpdateShareScreenLayout/res";
import { CreateLiveRecordSliceFileRequest } from "./CreateLiveRecordSliceFile/req";
import { CreateLiveRecordSliceFileResponse } from "./CreateLiveRecordSliceFile/res";
import { DeleteCommentByCreatorIdRequest } from "./DeleteCommentByCreatorId/req";
import { DeleteCommentByCreatorIdResponse } from "./DeleteCommentByCreatorId/res";
import { ListLiveFilesRequest } from "./ListLiveFiles/req";
import { ListLiveFilesResponse } from "./ListLiveFiles/res";
import { DeleteLiveFilesByIdRequest } from "./DeleteLiveFilesById/req";
import { DeleteLiveFilesByIdResponse } from "./DeleteLiveFilesById/res";

interface IMP {
    /**
     * 调用ListRooms查询应用下的房间列表，包含每个房间的信息和正在使用的原子能力信息。
     */
    ListRooms(query: ListRoomsRequest): Promise<ListRoomsResponse>;
    /**
     * 调用GetAuthToken获取长连接建连Token，客户端可以用此Token通过LWP协议和各个原子能力进行长连接通信。
     */
    GetAuthToken(query: GetAuthTokenRequest): Promise<GetAuthTokenResponse>;
    /**
     * 调用GetRoom查询指定房间信息，包含房间信息和使用中的原子能力信息。
     */
    GetRoom(query: GetRoomRequest): Promise<GetRoomResponse>;
    /**
     * 调用UpdateRoom更新房间所有可修改信息。
     */
    UpdateRoom(query: UpdateRoomRequest): Promise<UpdateRoomResponse>;
    /**
     * 调用DeleteRoom删除指定房间，删除后房间无法继续使用。
     */
    DeleteRoom(query: DeleteRoomRequest): Promise<DeleteRoomResponse>;
    /**
     * 停止指定直播，直播状态改变为直播结束。
     */
    StopLive(query: StopLiveRequest): Promise<StopLiveResponse>;
    /**
     * 发布直播，将直播状态转变为直播中，并获取推拉流地址。
     */
    PublishLive(query: PublishLiveRequest): Promise<PublishLiveResponse>;
    /**
     * 更新指定直播相关信息。
     */
    UpdateLive(query: UpdateLiveRequest): Promise<UpdateLiveResponse>;
    /**
     * 调用CreateRoom创建一个房间，用户可以在房间内使用直播、白板、音视频通信等功能。
     */
    CreateRoom(query: CreateRoomRequest): Promise<CreateRoomResponse>;
    /**
     * 删除直播记录。
     */
    DeleteLive(query: DeleteLiveRequest): Promise<DeleteLiveResponse>;
    /**
     * 创建状态为未开播的新直播。
     */
    CreateLive(query: CreateLiveRequest): Promise<CreateLiveResponse>;
    /**
     * 查询与指定直播相关联的信息。
     */
    GetLive(query: GetLiveRequest): Promise<GetLiveResponse>;
    /**
     * 调用SendCustomMessageToUsers向房间中的指定成员发送自定义消息。
     */
    SendCustomMessageToUsers(query: SendCustomMessageToUsersRequest): Promise<SendCustomMessageToUsersResponse>;
    /**
     * 调用SendCustomMessageToAll向房间中全部在线成员发送自定义消息。
     */
    SendCustomMessageToAll(query: SendCustomMessageToAllRequest): Promise<SendCustomMessageToAllResponse>;
    /**
     * 调用ListConferenceUsers分页查询连麦用户信息。
     */
    ListConferenceUsers(query: ListConferenceUsersRequest): Promise<ListConferenceUsersResponse>;
    /**
     * 调用DeleteConference结束连麦。一般用于管理后台结束，或长时间未退出时的强制结束。
     */
    DeleteConference(query: DeleteConferenceRequest): Promise<DeleteConferenceResponse>;
    /**
     * 调用GetConference查询指定连麦信息，包含连麦标题和连麦状态。也可查询连麦结束后的录制地址。
     */
    GetConference(query: GetConferenceRequest): Promise<GetConferenceResponse>;
    /**
     * 调用RemoveMember将指定用户从连麦中踢出。
     */
    RemoveMember(query: RemoveMemberRequest): Promise<RemoveMemberResponse>;
    /**
     * 调用BanComment接口，实现对房间内某特定用户实施禁言操作。
     */
    BanComment(query: BanCommentRequest): Promise<BanCommentResponse>;
    /**
     * 调用CancelBanComment接口，取消对房间内某特定用户的禁言。
     */
    CancelBanComment(query: CancelBanCommentRequest): Promise<CancelBanCommentResponse>;
    /**
     * 调用BanAllComment接口，禁言房间内所有用户。
     */
    BanAllComment(query: BanAllCommentRequest): Promise<BanAllCommentResponse>;
    /**
     * 调用SendComment发送弹幕消息，该弹幕消息会推送给房间内所有在线人员。
     */
    SendComment(query: SendCommentRequest): Promise<SendCommentResponse>;
    /**
     * 调用CancelBanAllComment接口，取消房间内全员禁言的限制。
     */
    CancelBanAllComment(query: CancelBanAllCommentRequest): Promise<CancelBanAllCommentResponse>;
    /**
     * 调用GetStandardRoomJumpUrl获取低代码服务跳转链接。
     */
    GetStandardRoomJumpUrl(query: GetStandardRoomJumpUrlRequest): Promise<GetStandardRoomJumpUrlResponse>;
    /**
     * 调用CreateLiveRoom创建状态为未开播的新直播。
     */
    CreateLiveRoom(query: CreateLiveRoomRequest): Promise<CreateLiveRoomResponse>;
    /**
     * 调用GetLiveRoom查询指定直播相关信息。
     */
    GetLiveRoom(query: GetLiveRoomRequest): Promise<GetLiveRoomResponse>;
    /**
     * 调用GetLiveRoomStatistics查询与指定直播相关的数据统计信息。后续计划迁入新方案，不推荐使用。
     */
    GetLiveRoomStatistics(query: GetLiveRoomStatisticsRequest): Promise<GetLiveRoomStatisticsResponse>;
    /**
     * 调用GetLiveRoomUserStatistics分页查询与指定直播相关的用户观看数据。后续计划迁入新方案，不推荐使用。
     */
    GetLiveRoomUserStatistics(query: GetLiveRoomUserStatisticsRequest): Promise<GetLiveRoomUserStatisticsResponse>;
    /**
     * 调用ListLiveRooms分页查询直播信息。
     */
    ListLiveRooms(query: ListLiveRoomsRequest): Promise<ListLiveRoomsResponse>;
    /**
     * 调用StopLiveRoom停止指定直播，直播状态改变为直播结束。
     */
    StopLiveRoom(query: StopLiveRoomRequest): Promise<StopLiveRoomResponse>;
    /**
     * 调用CreateClass创建课程。可用于学生上课，职场培训等场景，包含连麦、直播、白板、聊天等功能。
     */
    CreateClass(query: CreateClassRequest): Promise<CreateClassResponse>;
    /**
     * 调用GetClassDetail获取课程详情。可用于查询课程状态，以及相关联的直播，连麦，白板等ID信息。通过这些ID，可进一步查询对应的直播，连麦，白板的详情。
     */
    GetClassDetail(query: GetClassDetailRequest): Promise<GetClassDetailResponse>;
    /**
     * 调用StopClass执行结束课程动作，会修改课程状态为已下课。
     */
    StopClass(query: StopClassRequest): Promise<StopClassResponse>;
    /**
     * 调用DeleteClass删除课程。
     */
    DeleteClass(query: DeleteClassRequest): Promise<DeleteClassResponse>;
    /**
     * 调用UpdateClass更新课程。
     */
    UpdateClass(query: UpdateClassRequest): Promise<UpdateClassResponse>;
    /**
     * 调用ListLiveRoomsById根据传入的直播ID批量查询指定的直播信息。
     */
    ListLiveRoomsById(query: ListLiveRoomsByIdRequest): Promise<ListLiveRoomsByIdResponse>;
    /**
     * 调用DeleteComment删除弹幕消息。
     */
    DeleteComment(query: DeleteCommentRequest): Promise<DeleteCommentResponse>;
    /**
     * 调用ListComments批量查询弹幕消息。
     */
    ListComments(query: ListCommentsRequest): Promise<ListCommentsResponse>;
    /**
     * 调用DeleteLiveRoom删除直播记录。
     */
    DeleteLiveRoom(query: DeleteLiveRoomRequest): Promise<DeleteLiveRoomResponse>;
    /**
     * 调用UpdateLiveRoom更新指定直播相关信息。
     */
    UpdateLiveRoom(query: UpdateLiveRoomRequest): Promise<UpdateLiveRoomResponse>;
    /**
     * 调用PublishLiveRoom发布直播，将直播状态转变为直播中，并获取推拉流地址。
     */
    PublishLiveRoom(query: PublishLiveRoomRequest): Promise<PublishLiveRoomResponse>;
    /**
     * 调用ListClasses获取课程列表。可基于应用ID和课程状态，分页查询应用对应的所有课程列表。
     */
    ListClasses(query: ListClassesRequest): Promise<ListClassesResponse>;
    /**
     * 调用ListRoomUsers分页查询房间内的实时用户列表。
     */
    ListRoomUsers(query: ListRoomUsersRequest): Promise<ListRoomUsersResponse>;
    /**
     * 调用GetClassRecord获取课程录制信息。可用于课程结束后获取回放地址，如果课程未结束，结果为空。
     */
    GetClassRecord(query: GetClassRecordRequest): Promise<GetClassRecordResponse>;
    /**
     * 调用GetLiveRecord获取直播录制信息。可用于直播结束后获取回放地址，如果直播未结束，结果为空。
     */
    GetLiveRecord(query: GetLiveRecordRequest): Promise<GetLiveRecordResponse>;
    /**
     * 调用KickRoomUser接口，实现对房间内某特定用户实施踢出房间操作。
     */
    KickRoomUser(query: KickRoomUserRequest): Promise<KickRoomUserResponse>;
    /**
     * 调用SetUserAdmin接口，设置房间内某特定用户为管理员。
     */
    SetUserAdmin(query: SetUserAdminRequest): Promise<SetUserAdminResponse>;
    /**
     * 调用ListSensitiveWord查询敏感词。
     */
    ListSensitiveWord(query: ListSensitiveWordRequest): Promise<ListSensitiveWordResponse>;
    /**
     * 调用DeleteSensitiveWord删除敏感词。
     */
    DeleteSensitiveWord(query: DeleteSensitiveWordRequest): Promise<DeleteSensitiveWordResponse>;
    /**
     * 自定义敏感词。
     */
    CreateSensitiveWord(query: CreateSensitiveWordRequest): Promise<CreateSensitiveWordResponse>;
    /**
     * 调用CancelUserAdmin接口，取消房间内某特定用户管理员身份，变成普通观众。
     */
    CancelUserAdmin(query: CancelUserAdminRequest): Promise<CancelUserAdminResponse>;
    /**
     * 调用DescribeMeterImpWatchLiveTimeByLiveId查看观看时长相关数据，包含普通延迟观看时长，低延迟观看时长。
     */
    DescribeMeterImpWatchLiveTimeByLiveId(query: DescribeMeterImpWatchLiveTimeByLiveIdRequest): Promise<DescribeMeterImpWatchLiveTimeByLiveIdResponse>;
    /**
     * 调用DescribeMeterImpPlayBackTimeByLiveId查询指定直播资源的回看时长。
     */
    DescribeMeterImpPlayBackTimeByLiveId(query: DescribeMeterImpPlayBackTimeByLiveIdRequest): Promise<DescribeMeterImpPlayBackTimeByLiveIdResponse>;
    /**
     * 调用UpdateShareScreenLayout更新共享屏幕布局。可用于课堂场景，直播画面中共享屏幕画面叠加老师摄像头画面。
     */
    UpdateShareScreenLayout(query: UpdateShareScreenLayoutRequest): Promise<UpdateShareScreenLayoutResponse>;
    /**
     * 调用CreateLiveRecordSliceFile创建直播录制片段文件。
     */
    CreateLiveRecordSliceFile(query: CreateLiveRecordSliceFileRequest): Promise<CreateLiveRecordSliceFileResponse>;
    /**
     * 调用DeleteCommentByCreatorId根据创建者ID批量删除弹幕。
     */
    DeleteCommentByCreatorId(query: DeleteCommentByCreatorIdRequest): Promise<DeleteCommentByCreatorIdResponse>;
    /**
     * 调用ListLiveFiles获取直播录制文件列表信息。
     */
    ListLiveFiles(query: ListLiveFilesRequest): Promise<ListLiveFilesResponse>;
    /**
     * 调用DeleteLiveFilesById接口删除该直播的录制文件。
     */
    DeleteLiveFilesById(query: DeleteLiveFilesByIdRequest): Promise<DeleteLiveFilesByIdResponse>;
}
export default IMP;
