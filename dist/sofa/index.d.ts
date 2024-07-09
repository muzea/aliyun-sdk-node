import { AddMsConfigAttributesRequest } from "./AddMsConfigAttributes/req";
import { AddMsConfigAttributesResponse } from "./AddMsConfigAttributes/res";
import { AddMsConfigResourcesRequest } from "./AddMsConfigResources/req";
import { AddMsConfigResourcesResponse } from "./AddMsConfigResources/res";
import { CreateMqSofamqGroupRequest } from "./CreateMqSofamqGroup/req";
import { CreateMqSofamqGroupResponse } from "./CreateMqSofamqGroup/res";
import { CreateMqSofamqTopicRequest } from "./CreateMqSofamqTopic/req";
import { CreateMqSofamqTopicResponse } from "./CreateMqSofamqTopic/res";
import { DeleteMqSofamqGroupRequest } from "./DeleteMqSofamqGroup/req";
import { DeleteMqSofamqGroupResponse } from "./DeleteMqSofamqGroup/res";
import { DeleteMqSofamqTopicRequest } from "./DeleteMqSofamqTopic/req";
import { DeleteMqSofamqTopicResponse } from "./DeleteMqSofamqTopic/res";
import { DeleteMqSofamqTraceRequest } from "./DeleteMqSofamqTrace/req";
import { DeleteMqSofamqTraceResponse } from "./DeleteMqSofamqTrace/res";
import { DeleteMqSofamqWarnRequest } from "./DeleteMqSofamqWarn/req";
import { DeleteMqSofamqWarnResponse } from "./DeleteMqSofamqWarn/res";
import { DeleteMsConfigAttributesRequest } from "./DeleteMsConfigAttributes/req";
import { DeleteMsConfigAttributesResponse } from "./DeleteMsConfigAttributes/res";
import { DeleteMsConfigResourcesRequest } from "./DeleteMsConfigResources/req";
import { DeleteMsConfigResourcesResponse } from "./DeleteMsConfigResources/res";
import { DisableMqSofamqWarnRequest } from "./DisableMqSofamqWarn/req";
import { DisableMqSofamqWarnResponse } from "./DisableMqSofamqWarn/res";
import { EnableMqSofamqWarnRequest } from "./EnableMqSofamqWarn/req";
import { EnableMqSofamqWarnResponse } from "./EnableMqSofamqWarn/res";
import { GetMqSofamqMessageByIdRequest } from "./GetMqSofamqMessageById/req";
import { GetMqSofamqMessageByIdResponse } from "./GetMqSofamqMessageById/res";
import { UpdateMsConfigAttributesRequest } from "./UpdateMsConfigAttributes/req";
import { UpdateMsConfigAttributesResponse } from "./UpdateMsConfigAttributes/res";
import { QueryMqSofamqConsumerAccumulateRequest } from "./QueryMqSofamqConsumerAccumulate/req";
import { QueryMqSofamqConsumerAccumulateResponse } from "./QueryMqSofamqConsumerAccumulate/res";
import { QueryMqSofamqMessageByKeyRequest } from "./QueryMqSofamqMessageByKey/req";
import { QueryMqSofamqMessageByKeyResponse } from "./QueryMqSofamqMessageByKey/res";
import { GetMsConfigAttributesRequest } from "./GetMsConfigAttributes/req";
import { GetMsConfigAttributesResponse } from "./GetMsConfigAttributes/res";
import { ListMqSofamqTraceRequest } from "./ListMqSofamqTrace/req";
import { ListMqSofamqTraceResponse } from "./ListMqSofamqTrace/res";
import { UpdateMqSofamqGroupRemarkRequest } from "./UpdateMqSofamqGroupRemark/req";
import { UpdateMqSofamqGroupRemarkResponse } from "./UpdateMqSofamqGroupRemark/res";
import { UpdateMqSofamqWarnRequest } from "./UpdateMqSofamqWarn/req";
import { UpdateMqSofamqWarnResponse } from "./UpdateMqSofamqWarn/res";
import { ResendMqSofamqDLQMessageBatchRequest } from "./ResendMqSofamqDLQMessageBatch/req";
import { ResendMqSofamqDLQMessageBatchResponse } from "./ResendMqSofamqDLQMessageBatch/res";
import { GrayPushMsConfigDataRequest } from "./GrayPushMsConfigData/req";
import { GrayPushMsConfigDataResponse } from "./GrayPushMsConfigData/res";
import { GetMqSofamqConsumerStatusRequest } from "./GetMqSofamqConsumerStatus/req";
import { GetMqSofamqConsumerStatusResponse } from "./GetMqSofamqConsumerStatus/res";
import { ResendMqSofamqDLQMessageByIdRequest } from "./ResendMqSofamqDLQMessageById/req";
import { ResendMqSofamqDLQMessageByIdResponse } from "./ResendMqSofamqDLQMessageById/res";
import { ResetMqSofamqConsumerOffsetRequest } from "./ResetMqSofamqConsumerOffset/req";
import { ResetMqSofamqConsumerOffsetResponse } from "./ResetMqSofamqConsumerOffset/res";
import { QueryMsConfigResourcesRequest } from "./QueryMsConfigResources/req";
import { QueryMsConfigResourcesResponse } from "./QueryMsConfigResources/res";
import { GetMqSofamqTraceResultRequest } from "./GetMqSofamqTraceResult/req";
import { GetMqSofamqTraceResultResponse } from "./GetMqSofamqTraceResult/res";
import { QueryMsConfigClientsRequest } from "./QueryMsConfigClients/req";
import { QueryMsConfigClientsResponse } from "./QueryMsConfigClients/res";
import { ListMqSofamqWarnRequest } from "./ListMqSofamqWarn/req";
import { ListMqSofamqWarnResponse } from "./ListMqSofamqWarn/res";
import { GetMqSofamqDLQMessageByIdRequest } from "./GetMqSofamqDLQMessageById/req";
import { GetMqSofamqDLQMessageByIdResponse } from "./GetMqSofamqDLQMessageById/res";
import { ListMqSofamqWarnHistoryRequest } from "./ListMqSofamqWarnHistory/req";
import { ListMqSofamqWarnHistoryResponse } from "./ListMqSofamqWarnHistory/res";
import { QueryMsConfigClientValuesRequest } from "./QueryMsConfigClientValues/req";
import { QueryMsConfigClientValuesResponse } from "./QueryMsConfigClientValues/res";
import { ListMqSofamqTopicRequest } from "./ListMqSofamqTopic/req";
import { ListMqSofamqTopicResponse } from "./ListMqSofamqTopic/res";
import { QueryMqSofamqTraceByMsgKeyRequest } from "./QueryMqSofamqTraceByMsgKey/req";
import { QueryMqSofamqTraceByMsgKeyResponse } from "./QueryMqSofamqTraceByMsgKey/res";
import { QueryMqSofamqDLQMessageByGroupIdRequest } from "./QueryMqSofamqDLQMessageByGroupId/req";
import { QueryMqSofamqDLQMessageByGroupIdResponse } from "./QueryMqSofamqDLQMessageByGroupId/res";
import { UpdateMqSofamqTopicRemarkRequest } from "./UpdateMqSofamqTopicRemark/req";
import { UpdateMqSofamqTopicRemarkResponse } from "./UpdateMqSofamqTopicRemark/res";
import { QueryMqSofamqTraceByTopicRequest } from "./QueryMqSofamqTraceByTopic/req";
import { QueryMqSofamqTraceByTopicResponse } from "./QueryMqSofamqTraceByTopic/res";
import { GetMqSofamqConsumerJStackRequest } from "./GetMqSofamqConsumerJStack/req";
import { GetMqSofamqConsumerJStackResponse } from "./GetMqSofamqConsumerJStack/res";
import { QueryMsConfigAttributesRequest } from "./QueryMsConfigAttributes/req";
import { QueryMsConfigAttributesResponse } from "./QueryMsConfigAttributes/res";
import { QueryMqSofamqConsumerTimespanRequest } from "./QueryMqSofamqConsumerTimespan/req";
import { QueryMqSofamqConsumerTimespanResponse } from "./QueryMqSofamqConsumerTimespan/res";
import { QueryMqSofamqGroupSubDetailRequest } from "./QueryMqSofamqGroupSubDetail/req";
import { QueryMqSofamqGroupSubDetailResponse } from "./QueryMqSofamqGroupSubDetail/res";
import { UpdateMsConfigResourcesRequest } from "./UpdateMsConfigResources/req";
import { UpdateMsConfigResourcesResponse } from "./UpdateMsConfigResources/res";
import { QueryMsConfigDataRequest } from "./QueryMsConfigData/req";
import { QueryMsConfigDataResponse } from "./QueryMsConfigData/res";
import { UpdateMqSofamqGroupRequest } from "./UpdateMqSofamqGroup/req";
import { UpdateMqSofamqGroupResponse } from "./UpdateMqSofamqGroup/res";
import { GetMqSofamqTraceByMsgIdRequest } from "./GetMqSofamqTraceByMsgId/req";
import { GetMqSofamqTraceByMsgIdResponse } from "./GetMqSofamqTraceByMsgId/res";
import { QueryMqSofamqConsumerConnectionRequest } from "./QueryMqSofamqConsumerConnection/req";
import { QueryMqSofamqConsumerConnectionResponse } from "./QueryMqSofamqConsumerConnection/res";
import { PushMsConfigDataRequest } from "./PushMsConfigData/req";
import { PushMsConfigDataResponse } from "./PushMsConfigData/res";
import { UpdateMqSofamqTopicRequest } from "./UpdateMqSofamqTopic/req";
import { UpdateMqSofamqTopicResponse } from "./UpdateMqSofamqTopic/res";
import { GetMsConfigResourcesRequest } from "./GetMsConfigResources/req";
import { GetMsConfigResourcesResponse } from "./GetMsConfigResources/res";
import { ListMqSofamqGroupRequest } from "./ListMqSofamqGroup/req";
import { ListMqSofamqGroupResponse } from "./ListMqSofamqGroup/res";
import { QueryMqSofamqMessageByTopicRequest } from "./QueryMqSofamqMessageByTopic/req";
import { QueryMqSofamqMessageByTopicResponse } from "./QueryMqSofamqMessageByTopic/res";
import { DescribeCasComputersRequest } from "./DescribeCasComputers/req";
import { DescribeCasComputersResponse } from "./DescribeCasComputers/res";
import { QueryRMSMetricsRequest } from "./QueryRMSMetrics/req";
import { QueryRMSMetricsResponse } from "./QueryRMSMetrics/res";
import { QueryRMSUnifiedAlarmHistoryRequest } from "./QueryRMSUnifiedAlarmHistory/req";
import { QueryRMSUnifiedAlarmHistoryResponse } from "./QueryRMSUnifiedAlarmHistory/res";
import { QueryRMSUnifiedAlarmRuleRequest } from "./QueryRMSUnifiedAlarmRule/req";
import { QueryRMSUnifiedAlarmRuleResponse } from "./QueryRMSUnifiedAlarmRule/res";
import { CreateRMSUnifiedAlarmRuleRequest } from "./CreateRMSUnifiedAlarmRule/req";
import { CreateRMSUnifiedAlarmRuleResponse } from "./CreateRMSUnifiedAlarmRule/res";
import { DeleteRMSUnifiedAlarmRuleRequest } from "./DeleteRMSUnifiedAlarmRule/req";
import { DeleteRMSUnifiedAlarmRuleResponse } from "./DeleteRMSUnifiedAlarmRule/res";
import { UpdateRMSUnifiedAlarmRuleRequest } from "./UpdateRMSUnifiedAlarmRule/req";
import { UpdateRMSUnifiedAlarmRuleResponse } from "./UpdateRMSUnifiedAlarmRule/res";
import { LogoutMsRegistryServiceRequest } from "./LogoutMsRegistryService/req";
import { LogoutMsRegistryServiceResponse } from "./LogoutMsRegistryService/res";
import { QueryRMSUnifiedAlarmEventRequest } from "./QueryRMSUnifiedAlarmEvent/req";
import { QueryRMSUnifiedAlarmEventResponse } from "./QueryRMSUnifiedAlarmEvent/res";
import { QueryRMSUnifiedAlarmNotifyHistoryRequest } from "./QueryRMSUnifiedAlarmNotifyHistory/req";
import { QueryRMSUnifiedAlarmNotifyHistoryResponse } from "./QueryRMSUnifiedAlarmNotifyHistory/res";

interface SOFA {
    /**
     * 在配置文件配置项中增加属性，只有添加属性之后，才能对属性进行推送。
     */
    AddMsConfigAttributes(query: AddMsConfigAttributesRequest): Promise<AddMsConfigAttributesResponse>;
    /**
     * 资源相当于文件的概念，一个资源下可以有多个属性。
     */
    AddMsConfigResources(query: AddMsConfigResourcesRequest): Promise<AddMsConfigResourcesResponse>;
    /**
     * 创建 Group ID。创建的 Group ID 用于发布和订阅消息。
     */
    CreateMqSofamqGroup(query: CreateMqSofamqGroupRequest): Promise<CreateMqSofamqGroupResponse>;
    /**
     * 需要指定消息类型与 Topic 名称。
     */
    CreateMqSofamqTopic(query: CreateMqSofamqTopicRequest): Promise<CreateMqSofamqTopicResponse>;
    /**
     * 删除指定的 Group。
     */
    DeleteMqSofamqGroup(query: DeleteMqSofamqGroupRequest): Promise<DeleteMqSofamqGroupResponse>;
    /**
     * 删除后，该 Topic 下所有的订阅关系会被清理。
     */
    DeleteMqSofamqTopic(query: DeleteMqSofamqTopicRequest): Promise<DeleteMqSofamqTopicResponse>;
    /**
     * 删除指定的消息轨迹查询任务。
     */
    DeleteMqSofamqTrace(query: DeleteMqSofamqTraceRequest): Promise<DeleteMqSofamqTraceResponse>;
    /**
     * 通过报警规则 ID。
     */
    DeleteMqSofamqWarn(query: DeleteMqSofamqWarnRequest): Promise<DeleteMqSofamqWarnResponse>;
    /**
     * 根据属性 ID 删除对应的属性元信息。删除属性元信息，属性值不会删除。
     */
    DeleteMsConfigAttributes(query: DeleteMsConfigAttributesRequest): Promise<DeleteMsConfigAttributesResponse>;
    /**
     * 根据资源 ID 删除对应资源，删除资源会同时删除对应资源下所有的属性信息。
     */
    DeleteMsConfigResources(query: DeleteMsConfigResourcesRequest): Promise<DeleteMsConfigResourcesResponse>;
    /**
     * 通过传入报警规则 ID，禁用指定的报警规则。
     */
    DisableMqSofamqWarn(query: DisableMqSofamqWarnRequest): Promise<DisableMqSofamqWarnResponse>;
    /**
     * 通过传入报警规则 ID，启用指定的报警规则。
     */
    EnableMqSofamqWarn(query: EnableMqSofamqWarnRequest): Promise<EnableMqSofamqWarnResponse>;
    /**
     * 精确查询。查询条件需要的 Message ID 从每次消息发送成功的 SendResult 中获取。
     */
    GetMqSofamqMessageById(query: GetMqSofamqMessageByIdRequest): Promise<GetMqSofamqMessageByIdResponse>;
    /**
     * 根据属性 ID 更新属性元信息。
     */
    UpdateMsConfigAttributes(query: UpdateMsConfigAttributesRequest): Promise<UpdateMsConfigAttributesResponse>;
    /**
     * 用于粗略判断消息消费情况和延迟情况。
     */
    QueryMqSofamqConsumerAccumulate(query: QueryMqSofamqConsumerAccumulateRequest): Promise<QueryMqSofamqConsumerAccumulateResponse>;
    /**
     * 模糊查询。由于业务方的 Message Key 可能不唯一，所以查询结果可能为多条。
     */
    QueryMqSofamqMessageByKey(query: QueryMqSofamqMessageByKeyRequest): Promise<QueryMqSofamqMessageByKeyResponse>;
    /**
     * 根据属性 ID 获取对应的属性信息。
     */
    GetMsConfigAttributes(query: GetMsConfigAttributesRequest): Promise<GetMsConfigAttributesResponse>;
    /**
     * 查询指定实例下的消息轨迹查询任务列表信息。
     */
    ListMqSofamqTrace(query: ListMqSofamqTraceRequest): Promise<ListMqSofamqTraceResponse>;
    /**
     * 修改或更新 Group 的描述信息。
     */
    UpdateMqSofamqGroupRemark(query: UpdateMqSofamqGroupRemarkRequest): Promise<UpdateMqSofamqGroupRemarkResponse>;
    /**
     * 更新指定报警规则的配置信息。
     */
    UpdateMqSofamqWarn(query: UpdateMqSofamqWarnRequest): Promise<UpdateMqSofamqWarnResponse>;
    /**
     * 批量重发指定 Message ID 的死信消息，使这些消息能够被 Consumer 再次消费。
     */
    ResendMqSofamqDLQMessageBatch(query: ResendMqSofamqDLQMessageBatchRequest): Promise<ResendMqSofamqDLQMessageBatchResponse>;
    /**
     * 按 IP 灰度推送属性值。
     */
    GrayPushMsConfigData(query: GrayPushMsConfigDataRequest): Promise<GrayPushMsConfigDataResponse>;
    /**
     * 包含订阅关系检查、消费 TPS 统计、负载均衡状态、消费端连接等。
     */
    GetMqSofamqConsumerStatus(query: GetMqSofamqConsumerStatusRequest): Promise<GetMqSofamqConsumerStatusResponse>;
    /**
     * 使死信消息复活，让消息能够被 Consumer 再消费一次。
     */
    ResendMqSofamqDLQMessageById(query: ResendMqSofamqDLQMessageByIdRequest): Promise<ResendMqSofamqDLQMessageByIdResponse>;
    /**
     * 重置指定的 Group ID 的消费位点到指定时间戳。一般用于清理堆积消息，或者回溯消费。
     */
    ResetMqSofamqConsumerOffset(query: ResetMqSofamqConsumerOffsetRequest): Promise<ResetMqSofamqConsumerOffsetResponse>;
    /**
     * 根据应用名或者资源 ID 模糊查询对应的资源元信息。
     */
    QueryMsConfigResources(query: QueryMsConfigResourcesRequest): Promise<QueryMsConfigResourcesResponse>;
    /**
     * 过传入查询任务 ID，获取对应的轨迹查询的结果明细。
     */
    GetMqSofamqTraceResult(query: GetMqSofamqTraceResultRequest): Promise<GetMqSofamqTraceResultResponse>;
    /**
     * 查询一个属性所有订阅的客户端信息。动态配置客户端在启动的时候，会与服务端建立长连接，并告知动态配置服务端自身关联的属性信息，通过此长连接可以查询到所有订阅属性的客户端信息。
     */
    QueryMsConfigClients(query: QueryMsConfigClientsRequest): Promise<QueryMsConfigClientsResponse>;
    /**
     * 获取报警规则列表信息。
     */
    ListMqSofamqWarn(query: ListMqSofamqWarnRequest): Promise<ListMqSofamqWarnResponse>;
    /**
     * 精确查询，根据 Message ID，查询死信消息。
     */
    GetMqSofamqDLQMessageById(query: GetMqSofamqDLQMessageByIdRequest): Promise<GetMqSofamqDLQMessageByIdResponse>;
    /**
     * 查询历史报警记录，目前默认保存 30 天以内的报警信息。
     */
    ListMqSofamqWarnHistory(query: ListMqSofamqWarnHistoryRequest): Promise<ListMqSofamqWarnHistoryResponse>;
    /**
     * 根据属性 ID 查询指定客户端的内存值。
     */
    QueryMsConfigClientValues(query: QueryMsConfigClientValuesRequest): Promise<QueryMsConfigClientValuesResponse>;
    /**
     * 查询指定实例下 Topic 的信息列表。
     */
    ListMqSofamqTopic(query: ListMqSofamqTopicRequest): Promise<ListMqSofamqTopicResponse>;
    /**
     * 根据 Message Key 查询消息的投递轨迹信息。
     */
    QueryMqSofamqTraceByMsgKey(query: QueryMqSofamqTraceByMsgKeyRequest): Promise<QueryMqSofamqTraceByMsgKeyResponse>;
    /**
     * 分页查询指定时间段内 Group ID 内的所有死信消息。
     */
    QueryMqSofamqDLQMessageByGroupId(query: QueryMqSofamqDLQMessageByGroupIdRequest): Promise<QueryMqSofamqDLQMessageByGroupIdResponse>;
    /**
     * 用来更新或修改 Topic 的描述信息。
     */
    UpdateMqSofamqTopicRemark(query: UpdateMqSofamqTopicRemarkRequest): Promise<UpdateMqSofamqTopicRemarkResponse>;
    /**
     * 通过传入 Topic 名称创建消息轨迹查询任务，得到该查询任务的 ID。
     */
    QueryMqSofamqTraceByTopic(query: QueryMqSofamqTraceByTopicRequest): Promise<QueryMqSofamqTraceByTopicResponse>;
    /**
     * 用于定位问题。
     */
    GetMqSofamqConsumerJStack(query: GetMqSofamqConsumerJStackRequest): Promise<GetMqSofamqConsumerJStackResponse>;
    /**
     * 根据域,、应用名、资源 ID、属性名称获取属性详细信息，包含属性 ID。其它接口都依赖此接口获取属性 ID。
     */
    QueryMsConfigAttributes(query: QueryMsConfigAttributesRequest): Promise<QueryMsConfigAttributesResponse>;
    /**
     * 可以查询某个 Topic 当前服务器上存在的消息的最新时间和最早时间，以及查询消费端最近消费的时间。
     */
    QueryMqSofamqConsumerTimespan(query: QueryMqSofamqConsumerTimespanRequest): Promise<QueryMqSofamqConsumerTimespanResponse>;
    /**
     * 如果 Group ID 对应的消费者实例不在线，则查不到数据。
     */
    QueryMqSofamqGroupSubDetail(query: QueryMqSofamqGroupSubDetailRequest): Promise<QueryMqSofamqGroupSubDetailResponse>;
    /**
     * update_attribute 为 false 时，则只更新资源元信息，不会更新属性信息。
     */
    UpdateMsConfigResources(query: UpdateMsConfigResourcesRequest): Promise<UpdateMsConfigResourcesResponse>;
    /**
     * 根据属性 ID 查询其最后一次推送值。
     */
    QueryMsConfigData(query: QueryMsConfigDataRequest): Promise<QueryMsConfigDataResponse>;
    /**
     * 修改或更新指定的 Group 描述信息。
     */
    UpdateMqSofamqGroup(query: UpdateMqSofamqGroupRequest): Promise<UpdateMqSofamqGroupResponse>;
    /**
     * 根据 Message ID 查询消息的投递轨迹信息。
     */
    GetMqSofamqTraceByMsgId(query: GetMqSofamqTraceByMsgIdRequest): Promise<GetMqSofamqTraceByMsgIdResponse>;
    /**
     * 判断指定 Group ID 的消费者是否在线，并获取详细的客户端连接的列表。
     */
    QueryMqSofamqConsumerConnection(query: QueryMqSofamqConsumerConnectionRequest): Promise<QueryMqSofamqConsumerConnectionResponse>;
    /**
     * 推送后所有订阅对应属性的客户端都会在一秒内更新内存值，并回调属性对应的 setter 方法。
     */
    PushMsConfigData(query: PushMsConfigDataRequest): Promise<PushMsConfigDataResponse>;
    /**
     * 用于更新指定 Topic 的读写权限配置。
     */
    UpdateMqSofamqTopic(query: UpdateMqSofamqTopicRequest): Promise<UpdateMqSofamqTopicResponse>;
    /**
     * 根据资源 ID 获取资源元信息。
     */
    GetMsConfigResources(query: GetMsConfigResourcesRequest): Promise<GetMsConfigResourcesResponse>;
    /**
     * 查询指定环境实例下 Group ID 资源的信息列表。
     */
    ListMqSofamqGroup(query: ListMqSofamqGroupRequest): Promise<ListMqSofamqGroupResponse>;
    /**
     * 通过传入 Topic 名称和时间段，分页查询指定时间段内 Topic 内的所有消息。
     */
    QueryMqSofamqMessageByTopic(query: QueryMqSofamqMessageByTopicRequest): Promise<QueryMqSofamqMessageByTopicResponse>;
    DescribeCasComputers(query: DescribeCasComputersRequest): Promise<DescribeCasComputersResponse>;
    /**
     * 根据指标ID等过滤条件查询监控指标时序数据。
     */
    QueryRMSMetrics(query: QueryRMSMetricsRequest): Promise<QueryRMSMetricsResponse>;
    QueryRMSUnifiedAlarmHistory(query: QueryRMSUnifiedAlarmHistoryRequest): Promise<QueryRMSUnifiedAlarmHistoryResponse>;
    QueryRMSUnifiedAlarmRule(query: QueryRMSUnifiedAlarmRuleRequest): Promise<QueryRMSUnifiedAlarmRuleResponse>;
    /**
     * 创建告警规则。
     */
    CreateRMSUnifiedAlarmRule(query: CreateRMSUnifiedAlarmRuleRequest): Promise<CreateRMSUnifiedAlarmRuleResponse>;
    /**
     * 删除告警规则。
     */
    DeleteRMSUnifiedAlarmRule(query: DeleteRMSUnifiedAlarmRuleRequest): Promise<DeleteRMSUnifiedAlarmRuleResponse>;
    UpdateRMSUnifiedAlarmRule(query: UpdateRMSUnifiedAlarmRuleRequest): Promise<UpdateRMSUnifiedAlarmRuleResponse>;
    LogoutMsRegistryService(query: LogoutMsRegistryServiceRequest): Promise<LogoutMsRegistryServiceResponse>;
    QueryRMSUnifiedAlarmEvent(query: QueryRMSUnifiedAlarmEventRequest): Promise<QueryRMSUnifiedAlarmEventResponse>;
    /**
     * 查询告警通知历史，如钉钉、电话、短信、webhook的通知记录，以及通知状态。
     */
    QueryRMSUnifiedAlarmNotifyHistory(query: QueryRMSUnifiedAlarmNotifyHistoryRequest): Promise<QueryRMSUnifiedAlarmNotifyHistoryResponse>;
}
export default SOFA;
