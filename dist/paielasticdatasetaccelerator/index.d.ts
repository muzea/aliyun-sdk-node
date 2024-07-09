import { CreateEndpointRequest } from "./CreateEndpoint/req";
import { CreateEndpointResponse } from "./CreateEndpoint/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { DeleteTagRequest } from "./DeleteTag/req";
import { DeleteTagResponse } from "./DeleteTag/res";
import { ListTagsRequest } from "./ListTags/req";
import { ListTagsResponse } from "./ListTags/res";
import { DescribeSlotRequest } from "./DescribeSlot/req";
import { DescribeSlotResponse } from "./DescribeSlot/res";
import { QueryStatisticRequest } from "./QueryStatistic/req";
import { QueryStatisticResponse } from "./QueryStatistic/res";
import { CreateTagRequest } from "./CreateTag/req";
import { CreateTagResponse } from "./CreateTag/res";
import { QuerySlotMetricsRequest } from "./QuerySlotMetrics/req";
import { QuerySlotMetricsResponse } from "./QuerySlotMetrics/res";
import { UpdateSlotRequest } from "./UpdateSlot/req";
import { UpdateSlotResponse } from "./UpdateSlot/res";
import { DeleteSlotRequest } from "./DeleteSlot/req";
import { DeleteSlotResponse } from "./DeleteSlot/res";
import { StopSlotRequest } from "./StopSlot/req";
import { StopSlotResponse } from "./StopSlot/res";
import { ListSlotsRequest } from "./ListSlots/req";
import { ListSlotsResponse } from "./ListSlots/res";
import { DeleteEndpointRequest } from "./DeleteEndpoint/req";
import { DeleteEndpointResponse } from "./DeleteEndpoint/res";
import { UnbindEndpointRequest } from "./UnbindEndpoint/req";
import { UnbindEndpointResponse } from "./UnbindEndpoint/res";
import { UpdateInstanceRequest } from "./UpdateInstance/req";
import { UpdateInstanceResponse } from "./UpdateInstance/res";
import { DescribeEndpointRequest } from "./DescribeEndpoint/req";
import { DescribeEndpointResponse } from "./DescribeEndpoint/res";
import { CreateSlotRequest } from "./CreateSlot/req";
import { CreateSlotResponse } from "./CreateSlot/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { ListEndpointsRequest } from "./ListEndpoints/req";
import { ListEndpointsResponse } from "./ListEndpoints/res";
import { BindEndpointRequest } from "./BindEndpoint/req";
import { BindEndpointResponse } from "./BindEndpoint/res";
import { QueryInstanceMetricsRequest } from "./QueryInstanceMetrics/req";
import { QueryInstanceMetricsResponse } from "./QueryInstanceMetrics/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { ListComponentsRequest } from "./ListComponents/req";
import { ListComponentsResponse } from "./ListComponents/res";
import { DescribeComponentRequest } from "./DescribeComponent/req";
import { DescribeComponentResponse } from "./DescribeComponent/res";
import { ReloadSlotRequest } from "./ReloadSlot/req";
import { ReloadSlotResponse } from "./ReloadSlot/res";
import { CreateSlotsRequest } from "./CreateSlots/req";
import { CreateSlotsResponse } from "./CreateSlots/res";

interface PAIELASTICDATASETACCELERATOR {
    /**
     * 创建并注册一个数据集加速槽端点。
     */
    CreateEndpoint(query: CreateEndpointRequest): Promise<CreateEndpointResponse>;
    /**
     * 创建数据集加速实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 获取数据集加速实例信息列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 删除一个资源上的一个标签。
     */
    DeleteTag(query: DeleteTagRequest): Promise<DeleteTagResponse>;
    /**
     * 获取标签列表。
     */
    ListTags(query: ListTagsRequest): Promise<ListTagsResponse>;
    /**
     * 获取指定数据集加速槽的信息。
     */
    DescribeSlot(query: DescribeSlotRequest): Promise<DescribeSlotResponse>;
    /**
     * 查询当前账号下数据集加速相关的统计信息。
     */
    QueryStatistic(query: QueryStatisticRequest): Promise<QueryStatisticResponse>;
    /**
     * 针对一个资源，创建一个标签。
     */
    CreateTag(query: CreateTagRequest): Promise<CreateTagResponse>;
    /**
     * 查询并获取数据集加速槽监控指标信息。
     */
    QuerySlotMetrics(query: QuerySlotMetricsRequest): Promise<QuerySlotMetricsResponse>;
    /**
     * 更新一个数据集加速槽的信息。
     */
    UpdateSlot(query: UpdateSlotRequest): Promise<UpdateSlotResponse>;
    /**
     * 删除一个数据集加速槽。
     */
    DeleteSlot(query: DeleteSlotRequest): Promise<DeleteSlotResponse>;
    /**
     * 停止一个数据集加速槽。
     */
    StopSlot(query: StopSlotRequest): Promise<StopSlotResponse>;
    /**
     * 获取数据集加速槽的信息列表。
     */
    ListSlots(query: ListSlotsRequest): Promise<ListSlotsResponse>;
    /**
     * 删除一个数据集加速槽挂载点。
     */
    DeleteEndpoint(query: DeleteEndpointRequest): Promise<DeleteEndpointResponse>;
    /**
     * 取消挂载点关联和指定数据集加速槽的关联关系。
     */
    UnbindEndpoint(query: UnbindEndpointRequest): Promise<UnbindEndpointResponse>;
    /**
     * 更新一个数据集加速实例的信息。
     */
    UpdateInstance(query: UpdateInstanceRequest): Promise<UpdateInstanceResponse>;
    /**
     * 获取指定数据集加速槽挂载点的信息。
     */
    DescribeEndpoint(query: DescribeEndpointRequest): Promise<DescribeEndpointResponse>;
    /**
     * 创建并注册一个数据集加速槽。
     */
    CreateSlot(query: CreateSlotRequest): Promise<CreateSlotResponse>;
    /**
     * 删除一个数据集加速实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 获取数据集加速槽挂载点的信息列表。
     */
    ListEndpoints(query: ListEndpointsRequest): Promise<ListEndpointsResponse>;
    /**
     * 将一个挂载点关联到一个数据集加速槽上。
     */
    BindEndpoint(query: BindEndpointRequest): Promise<BindEndpointResponse>;
    /**
     * 查询并获取数据集加速实例监控指标信息。
     */
    QueryInstanceMetrics(query: QueryInstanceMetricsRequest): Promise<QueryInstanceMetricsResponse>;
    /**
     * 获取指定数据集加速实例信息。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 获取数据集加速组件的信息列表。
     */
    ListComponents(query: ListComponentsRequest): Promise<ListComponentsResponse>;
    /**
     * 获取指定数据集加速组件的信息。
     */
    DescribeComponent(query: DescribeComponentRequest): Promise<DescribeComponentResponse>;
    /**
     * 重载数据加速槽的数据。
     */
    ReloadSlot(query: ReloadSlotRequest): Promise<ReloadSlotResponse>;
    /**
     * 同时创建并注册多个数据集加速槽，并使用相同的一组数据加速槽挂载点。
     */
    CreateSlots(query: CreateSlotsRequest): Promise<CreateSlotsResponse>;
}
export default PAIELASTICDATASETACCELERATOR;
