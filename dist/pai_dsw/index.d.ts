import { CreateInstanceShutdownTimerRequest } from "./CreateInstanceShutdownTimer/req";
import { CreateInstanceShutdownTimerResponse } from "./CreateInstanceShutdownTimer/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { CreateInstanceSnapshotRequest } from "./CreateInstanceSnapshot/req";
import { CreateInstanceSnapshotResponse } from "./CreateInstanceSnapshot/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DeleteInstanceShutdownTimerRequest } from "./DeleteInstanceShutdownTimer/req";
import { DeleteInstanceShutdownTimerResponse } from "./DeleteInstanceShutdownTimer/res";
import { DeleteInstanceSnapshotRequest } from "./DeleteInstanceSnapshot/req";
import { DeleteInstanceSnapshotResponse } from "./DeleteInstanceSnapshot/res";
import { GetInstanceShutdownTimerRequest } from "./GetInstanceShutdownTimer/req";
import { GetInstanceShutdownTimerResponse } from "./GetInstanceShutdownTimer/res";
import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { GetInstanceSnapshotRequest } from "./GetInstanceSnapshot/req";
import { GetInstanceSnapshotResponse } from "./GetInstanceSnapshot/res";
import { GetUserConfigRequest } from "./GetUserConfig/req";
import { GetUserConfigResponse } from "./GetUserConfig/res";
import { ListEcsSpecsRequest } from "./ListEcsSpecs/req";
import { ListEcsSpecsResponse } from "./ListEcsSpecs/res";
import { ListInstanceSnapshotRequest } from "./ListInstanceSnapshot/req";
import { ListInstanceSnapshotResponse } from "./ListInstanceSnapshot/res";
import { ListInstanceStatisticsRequest } from "./ListInstanceStatistics/req";
import { ListInstanceStatisticsResponse } from "./ListInstanceStatistics/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { UpdateInstanceRequest } from "./UpdateInstance/req";
import { UpdateInstanceResponse } from "./UpdateInstance/res";
import { GetTokenRequest } from "./GetToken/req";
import { GetTokenResponse } from "./GetToken/res";
import { GetInstanceMetricsRequest } from "./GetInstanceMetrics/req";
import { GetInstanceMetricsResponse } from "./GetInstanceMetrics/res";
import { GetIdleInstanceCullerRequest } from "./GetIdleInstanceCuller/req";
import { GetIdleInstanceCullerResponse } from "./GetIdleInstanceCuller/res";
import { DeleteIdleInstanceCullerRequest } from "./DeleteIdleInstanceCuller/req";
import { DeleteIdleInstanceCullerResponse } from "./DeleteIdleInstanceCuller/res";
import { CreateIdleInstanceCullerRequest } from "./CreateIdleInstanceCuller/req";
import { CreateIdleInstanceCullerResponse } from "./CreateIdleInstanceCuller/res";
import { GetLifecycleRequest } from "./GetLifecycle/req";
import { GetLifecycleResponse } from "./GetLifecycle/res";
import { GetResourceGroupStatisticsRequest } from "./GetResourceGroupStatistics/req";
import { GetResourceGroupStatisticsResponse } from "./GetResourceGroupStatistics/res";
import { GetInstanceEventsRequest } from "./GetInstanceEvents/req";
import { GetInstanceEventsResponse } from "./GetInstanceEvents/res";
import { GetMetricsRequest } from "./GetMetrics/req";
import { GetMetricsResponse } from "./GetMetrics/res";

interface PAI_DSW {
    /**
     * 调用CreateInstanceShutdownTimer，创建实例定时关机任务。
     */
    CreateInstanceShutdownTimer(query: CreateInstanceShutdownTimerRequest): Promise<CreateInstanceShutdownTimerResponse>;
    /**
     * 调用CreateInstance创建一个DSW实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 创建实例快照。
     */
    CreateInstanceSnapshot(query: CreateInstanceSnapshotRequest): Promise<CreateInstanceSnapshotResponse>;
    /**
     * 删除指定DSW实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 删除实例定时关机任务。
     */
    DeleteInstanceShutdownTimer(query: DeleteInstanceShutdownTimerRequest): Promise<DeleteInstanceShutdownTimerResponse>;
    /**
     * 删除实例快照。
     */
    DeleteInstanceSnapshot(query: DeleteInstanceSnapshotRequest): Promise<DeleteInstanceSnapshotResponse>;
    /**
     * 获取实例定时关机任务详情。
     */
    GetInstanceShutdownTimer(query: GetInstanceShutdownTimerRequest): Promise<GetInstanceShutdownTimerResponse>;
    /**
     * 查询DSW实例详情。
     */
    GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
     * 调用GetInstanceSnapshot，获取用户实例快照。
     */
    GetInstanceSnapshot(query: GetInstanceSnapshotRequest): Promise<GetInstanceSnapshotResponse>;
    /**
     * 调用GetUserConfig，查询用户信息。
     */
    GetUserConfig(query: GetUserConfigRequest): Promise<GetUserConfigResponse>;
    /**
     * 获取ECS规格列表。
     */
    ListEcsSpecs(query: ListEcsSpecsRequest): Promise<ListEcsSpecsResponse>;
    /**
     * 查询实例快照列表。
     */
    ListInstanceSnapshot(query: ListInstanceSnapshotRequest): Promise<ListInstanceSnapshotResponse>;
    /**
     * 获取实例统计信息。
     */
    ListInstanceStatistics(query: ListInstanceStatisticsRequest): Promise<ListInstanceStatisticsResponse>;
    /**
     * 启动DSW实例。
     */
    StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    /**
     * 查询DSW实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 调用StopInstance，停止DSW实例。
     */
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    /**
     * 更新DSW实例的属性。
     */
    UpdateInstance(query: UpdateInstanceRequest): Promise<UpdateInstanceResponse>;
    /**
     * 获取指定DSW实例的临时鉴权信息。
     */
    GetToken(query: GetTokenRequest): Promise<GetTokenResponse>;
    /**
     * 获取实例运行的资源指标。
     */
    GetInstanceMetrics(query: GetInstanceMetricsRequest): Promise<GetInstanceMetricsResponse>;
    /**
     * 获取指定实例的闲置自动关机策略。
     */
    GetIdleInstanceCuller(query: GetIdleInstanceCullerRequest): Promise<GetIdleInstanceCullerResponse>;
    /**
     * 删除实例闲置关机策略。
     */
    DeleteIdleInstanceCuller(query: DeleteIdleInstanceCullerRequest): Promise<DeleteIdleInstanceCullerResponse>;
    /**
     * 创建指定实例的自动关机策略，满足条件时将自动停止DSW实例。一个DSW实例只支持创建一个闲置自动关机策略，如果指定实例已设定过闲置自动关机策略，请先调用DeleteIdleInstanceCuller将其删除。
     */
    CreateIdleInstanceCuller(query: CreateIdleInstanceCullerRequest): Promise<CreateIdleInstanceCullerResponse>;
    /**
     * 获取实例的生命周期。
     */
    GetLifecycle(query: GetLifecycleRequest): Promise<GetLifecycleResponse>;
    /**
     * 资源组是特定用户，在使用PAI产品前，预先购买的一组机器资源；这些机器资源专属于此客户，不会被其他客户分享。用户后续的PAI计算任务，或算法开发环境，将运行在这组机器上。
     * 此功能用于统计在指定资源组上，运行的DSW实例（算法开发环境）的当前和历史运行状态（成功，失败，停止等等），以帮助用户了解在资源组内运行任务的历史状态，更有效率的利用资源组内的机器资源。
     */
    GetResourceGroupStatistics(query: GetResourceGroupStatisticsRequest): Promise<GetResourceGroupStatisticsResponse>;
    /**
     * 获取DSW实例的系统事件。
     */
    GetInstanceEvents(query: GetInstanceEventsRequest): Promise<GetInstanceEventsResponse>;
    /**
     * 获取实例的Metrics指标。
     */
    GetMetrics(query: GetMetricsRequest): Promise<GetMetricsResponse>;
}
export default PAI_DSW;
