import { GetAppSessionRequest } from "./GetAppSession/req";
import { GetAppSessionResponse } from "./GetAppSession/res";
import { StopAppSessionRequest } from "./StopAppSession/req";
import { StopAppSessionResponse } from "./StopAppSession/res";
import { ListAppSessionsRequest } from "./ListAppSessions/req";
import { ListAppSessionsResponse } from "./ListAppSessions/res";
import { CreateAppSessionRequest } from "./CreateAppSession/req";
import { CreateAppSessionResponse } from "./CreateAppSession/res";
import { ListAppVersionRequest } from "./ListAppVersion/req";
import { ListAppVersionResponse } from "./ListAppVersion/res";
import { DeleteAppVersionRequest } from "./DeleteAppVersion/req";
import { DeleteAppVersionResponse } from "./DeleteAppVersion/res";
import { ListAppRequest } from "./ListApp/req";
import { ListAppResponse } from "./ListApp/res";
import { CreateAppVersionRequest } from "./CreateAppVersion/req";
import { CreateAppVersionResponse } from "./CreateAppVersion/res";
import { CreateAdaptationRequest } from "./CreateAdaptation/req";
import { CreateAdaptationResponse } from "./CreateAdaptation/res";
import { GetAppVersionRequest } from "./GetAppVersion/req";
import { GetAppVersionResponse } from "./GetAppVersion/res";
import { ModifyAppVersionRequest } from "./ModifyAppVersion/req";
import { ModifyAppVersionResponse } from "./ModifyAppVersion/res";
import { ModifyAppRequest } from "./ModifyApp/req";
import { ModifyAppResponse } from "./ModifyApp/res";
import { GetAdaptationRequest } from "./GetAdaptation/req";
import { GetAdaptationResponse } from "./GetAdaptation/res";
import { DeleteAppRequest } from "./DeleteApp/req";
import { DeleteAppResponse } from "./DeleteApp/res";
import { GetAppRequest } from "./GetApp/req";
import { GetAppResponse } from "./GetApp/res";
import { CreateAppRequest } from "./CreateApp/req";
import { CreateAppResponse } from "./CreateApp/res";
import { GetReserveTaskDetailRequest } from "./GetReserveTaskDetail/req";
import { GetReserveTaskDetailResponse } from "./GetReserveTaskDetail/res";
import { CreateAppSessionBatchSyncRequest } from "./CreateAppSessionBatchSync/req";
import { CreateAppSessionBatchSyncResponse } from "./CreateAppSessionBatchSync/res";
import { CreateCapacityReservationRequest } from "./CreateCapacityReservation/req";
import { CreateCapacityReservationResponse } from "./CreateCapacityReservation/res";
import { StopAppSessionBatchRequest } from "./StopAppSessionBatch/req";
import { StopAppSessionBatchResponse } from "./StopAppSessionBatch/res";
import { ReleaseCapacityRequest } from "./ReleaseCapacity/req";
import { ReleaseCapacityResponse } from "./ReleaseCapacity/res";
import { GetAppCcuRequest } from "./GetAppCcu/req";
import { GetAppCcuResponse } from "./GetAppCcu/res";
import { CreateAppSessionSyncRequest } from "./CreateAppSessionSync/req";
import { CreateAppSessionSyncResponse } from "./CreateAppSessionSync/res";
import { GetCapacityRequest } from "./GetCapacity/req";
import { GetCapacityResponse } from "./GetCapacity/res";
import { CancelReserveTaskRequest } from "./CancelReserveTask/req";
import { CancelReserveTaskResponse } from "./CancelReserveTask/res";
import { ReleaseCapacityByBatchRequest } from "./ReleaseCapacityByBatch/req";
import { ReleaseCapacityByBatchResponse } from "./ReleaseCapacityByBatch/res";
import { BatchCheckSessionRequest } from "./BatchCheckSession/req";
import { BatchCheckSessionResponse } from "./BatchCheckSession/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ReleaseInstancesRequest } from "./ReleaseInstances/req";
import { ReleaseInstancesResponse } from "./ReleaseInstances/res";
import { ReserveInstancesRequest } from "./ReserveInstances/req";
import { ReserveInstancesResponse } from "./ReserveInstances/res";

interface CGCS {
    /**
     * 获取应用会话详情。
     */
    GetAppSession(query: GetAppSessionRequest): Promise<GetAppSessionResponse>;
    /**
     * 停止应用会话，后续停止结果会通过消息返回。
     */
    StopAppSession(query: StopAppSessionRequest): Promise<StopAppSessionResponse>;
    /**
     * 查询应用会话列表，支持批量查询。只支持查询未结束的会话信息。
     */
    ListAppSessions(query: ListAppSessionsRequest): Promise<ListAppSessionsResponse>;
    /**
     * 创建应用会话，并启动一个应用进程，返回会话信息。
     */
    CreateAppSession(query: CreateAppSessionRequest): Promise<CreateAppSessionResponse>;
    /**
     * 查询某个应用的版本列表。
     */
    ListAppVersion(query: ListAppVersionRequest): Promise<ListAppVersionResponse>;
    /**
     * 删除某个应用的版本。
     */
    DeleteAppVersion(query: DeleteAppVersionRequest): Promise<DeleteAppVersionResponse>;
    /**
     * 查询应用列表。
     */
    ListApp(query: ListAppRequest): Promise<ListAppResponse>;
    /**
     * 为应用创建一个新版本。
     */
    CreateAppVersion(query: CreateAppVersionRequest): Promise<CreateAppVersionResponse>;
    /**
     * 为某个应用版本创建适配请求。
     */
    CreateAdaptation(query: CreateAdaptationRequest): Promise<CreateAdaptationResponse>;
    /**
     * 查询某个应用的版本详情。
     */
    GetAppVersion(query: GetAppVersionRequest): Promise<GetAppVersionResponse>;
    /**
     * 修改应用的版本信息。
     */
    ModifyAppVersion(query: ModifyAppVersionRequest): Promise<ModifyAppVersionResponse>;
    /**
     * 修改某个应用的名称。
     */
    ModifyApp(query: ModifyAppRequest): Promise<ModifyAppResponse>;
    /**
     * 查询某个适配申请的详情。
     */
    GetAdaptation(query: GetAdaptationRequest): Promise<GetAdaptationResponse>;
    /**
     * 删除某个应用。
     */
    DeleteApp(query: DeleteAppRequest): Promise<DeleteAppResponse>;
    /**
     * 查询单个应用的详细信息。
     */
    GetApp(query: GetAppRequest): Promise<GetAppResponse>;
    /**
     * 创建一个新的应用。
     */
    CreateApp(query: CreateAppRequest): Promise<CreateAppResponse>;
    /**
     * 查询容器预定任务的详细信息。
     */
    GetReserveTaskDetail(query: GetReserveTaskDetailRequest): Promise<GetReserveTaskDetailResponse>;
    /**
     * 批量创建应用会话，平台会按顺序调配资源，启动多个进程。
     */
    CreateAppSessionBatchSync(query: CreateAppSessionBatchSyncRequest): Promise<CreateAppSessionBatchSyncResponse>;
    /**
     * 创建容器预定任务。预定可运行指定会话数量的容器，预定结果通过HTTP接口返回。
     */
    CreateCapacityReservation(query: CreateCapacityReservationRequest): Promise<CreateCapacityReservationResponse>;
    /**
     * 批量停止应用会话。后续停止结果会通过HTTP接口返回。
     */
    StopAppSessionBatch(query: StopAppSessionBatchRequest): Promise<StopAppSessionBatchResponse>;
    /**
     * 释放预定的容器。当符合指定条件且多个条件同时满足时，容器才会被释放。释放结果通过HTTP接口返回。
     */
    ReleaseCapacity(query: ReleaseCapacityRequest): Promise<ReleaseCapacityResponse>;
    /**
     * 查询运行中会话的详细信息。
     */
    GetAppCcu(query: GetAppCcuRequest): Promise<GetAppCcuResponse>;
    /**
     * 创建应用会话并启动应用进程后，会话信息通过消息返回。
     */
    CreateAppSessionSync(query: CreateAppSessionSyncRequest): Promise<CreateAppSessionSyncResponse>;
    /**
     * 查询容器信息。
     */
    GetCapacity(query: GetCapacityRequest): Promise<GetCapacityResponse>;
    /**
     * 取消指定的容器预定任务。
     */
    CancelReserveTask(query: CancelReserveTaskRequest): Promise<CancelReserveTaskResponse>;
    /**
     * 释放指定批次的机器。一般是机器预检未通过时，释放指定批次的机器。释放结果通过消息返回。
     */
    ReleaseCapacityByBatch(query: ReleaseCapacityByBatchRequest): Promise<ReleaseCapacityByBatchResponse>;
    /**
     * 此接口用于检查疑似异常会话。
     */
    BatchCheckSession(query: BatchCheckSessionRequest): Promise<BatchCheckSessionResponse>;
    /**
     * 查询云渲染实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 退订云渲染实例。
     */
    ReleaseInstances(query: ReleaseInstancesRequest): Promise<ReleaseInstancesResponse>;
    /**
     * 预定云渲染实例。
     */
    ReserveInstances(query: ReserveInstancesRequest): Promise<ReserveInstancesResponse>;
}
export default CGCS;
