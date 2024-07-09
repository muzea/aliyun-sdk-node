import { CreateWhiteBoardRequest } from "./CreateWhiteBoard/req";
import { CreateWhiteBoardResponse } from "./CreateWhiteBoard/res";
import { OpenWhiteBoardRequest } from "./OpenWhiteBoard/req";
import { OpenWhiteBoardResponse } from "./OpenWhiteBoard/res";
import { SetAppNameRequest } from "./SetAppName/req";
import { SetAppNameResponse } from "./SetAppName/res";
import { SetAppCallbackUrlRequest } from "./SetAppCallbackUrl/req";
import { SetAppCallbackUrlResponse } from "./SetAppCallbackUrl/res";
import { SetAppStatusRequest } from "./SetAppStatus/req";
import { SetAppStatusResponse } from "./SetAppStatus/res";
import { RefreshUsersPermissionsRequest } from "./RefreshUsersPermissions/req";
import { RefreshUsersPermissionsResponse } from "./RefreshUsersPermissions/res";
import { CreateAppRequest } from "./CreateApp/req";
import { CreateAppResponse } from "./CreateApp/res";
import { SetAppDomainNamesRequest } from "./SetAppDomainNames/req";
import { SetAppDomainNamesResponse } from "./SetAppDomainNames/res";
import { DescribeWhiteBoardsRequest } from "./DescribeWhiteBoards/req";
import { DescribeWhiteBoardsResponse } from "./DescribeWhiteBoards/res";
import { DescribeAppsRequest } from "./DescribeApps/req";
import { DescribeAppsResponse } from "./DescribeApps/res";
import { SetUsersPermissionsRequest } from "./SetUsersPermissions/req";
import { SetUsersPermissionsResponse } from "./SetUsersPermissions/res";
import { SetAppCallbackTypeRequest } from "./SetAppCallbackType/req";
import { SetAppCallbackTypeResponse } from "./SetAppCallbackType/res";
import { StartWhiteBoardRecordingRequest } from "./StartWhiteBoardRecording/req";
import { StartWhiteBoardRecordingResponse } from "./StartWhiteBoardRecording/res";
import { StopWhiteBoardRecordingRequest } from "./StopWhiteBoardRecording/req";
import { StopWhiteBoardRecordingResponse } from "./StopWhiteBoardRecording/res";
import { ResumeWhiteBoardRecordingRequest } from "./ResumeWhiteBoardRecording/req";
import { ResumeWhiteBoardRecordingResponse } from "./ResumeWhiteBoardRecording/res";
import { PauseWhiteBoardRecordingRequest } from "./PauseWhiteBoardRecording/req";
import { PauseWhiteBoardRecordingResponse } from "./PauseWhiteBoardRecording/res";
import { DescribeWhiteBoardRecordingsRequest } from "./DescribeWhiteBoardRecordings/req";
import { DescribeWhiteBoardRecordingsResponse } from "./DescribeWhiteBoardRecordings/res";

interface RTC_WHITE_BOARD {
    /**
     * 创建白板文档，获取白板文档标识DocKey。
     */
    CreateWhiteBoard(query: CreateWhiteBoardRequest): Promise<CreateWhiteBoardResponse>;
    /**
     * 打开已有白板文档，获取白板文档连接信息。
     */
    OpenWhiteBoard(query: OpenWhiteBoardRequest): Promise<OpenWhiteBoardResponse>;
    /**
     * 为白板应用重命名。
     */
    SetAppName(query: SetAppNameRequest): Promise<SetAppNameResponse>;
    /**
     * 为白板应用设置回调服务地址及回调鉴权码。
     */
    SetAppCallbackUrl(query: SetAppCallbackUrlRequest): Promise<SetAppCallbackUrlResponse>;
    /**
     * 为白板应用设置状态，1:启用，2:停用。
     */
    SetAppStatus(query: SetAppStatusRequest): Promise<SetAppStatusResponse>;
    /**
     * 刷新白板文档用户的权限缓存，当用户再次访问白板时，通过回调确认用户权限。
     */
    RefreshUsersPermissions(query: RefreshUsersPermissionsRequest): Promise<RefreshUsersPermissionsResponse>;
    /**
     * 创建白板应用，设置应用名的同时获取AppID。
     */
    CreateApp(query: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * 为白板应用设置合法域名列表，即使用中需要访问白板服务的域名列表。
     */
    SetAppDomainNames(query: SetAppDomainNamesRequest): Promise<SetAppDomainNamesResponse>;
    /**
     * 分页查询某AppID下的白板文档信息。
     */
    DescribeWhiteBoards(query: DescribeWhiteBoardsRequest): Promise<DescribeWhiteBoardsResponse>;
    /**
     * 分页查询云账号下的白板应用信息。
     */
    DescribeApps(query: DescribeAppsRequest): Promise<DescribeAppsResponse>;
    /**
     * 设置白板文档用户的长期权限。
     */
    SetUsersPermissions(query: SetUsersPermissionsRequest): Promise<SetUsersPermissionsResponse>;
    /**
     * 设置白板应用的回调类型。
     */
    SetAppCallbackType(query: SetAppCallbackTypeRequest): Promise<SetAppCallbackTypeResponse>;
    /**
     * 启动白板操作序列录制。
     */
    StartWhiteBoardRecording(query: StartWhiteBoardRecordingRequest): Promise<StartWhiteBoardRecordingResponse>;
    /**
     * 结束白板操作序列录制。
     */
    StopWhiteBoardRecording(query: StopWhiteBoardRecordingRequest): Promise<StopWhiteBoardRecordingResponse>;
    /**
     * 恢复白板（录制暂停中）操作序列录制。
     */
    ResumeWhiteBoardRecording(query: ResumeWhiteBoardRecordingRequest): Promise<ResumeWhiteBoardRecordingResponse>;
    /**
     * 暂停白板操作序列录制。
     */
    PauseWhiteBoardRecording(query: PauseWhiteBoardRecordingRequest): Promise<PauseWhiteBoardRecordingResponse>;
    /**
     * 分页查询白板所开启的录制列表和操作序列。
     */
    DescribeWhiteBoardRecordings(query: DescribeWhiteBoardRecordingsRequest): Promise<DescribeWhiteBoardRecordingsResponse>;
}
export default RTC_WHITE_BOARD;
