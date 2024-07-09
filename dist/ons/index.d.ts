import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { OnsConsumerAccumulateRequest } from "./OnsConsumerAccumulate/req";
import { OnsConsumerAccumulateResponse } from "./OnsConsumerAccumulate/res";
import { OnsConsumerGetConnectionRequest } from "./OnsConsumerGetConnection/req";
import { OnsConsumerGetConnectionResponse } from "./OnsConsumerGetConnection/res";
import { OnsConsumerResetOffsetRequest } from "./OnsConsumerResetOffset/req";
import { OnsConsumerResetOffsetResponse } from "./OnsConsumerResetOffset/res";
import { OnsConsumerStatusRequest } from "./OnsConsumerStatus/req";
import { OnsConsumerStatusResponse } from "./OnsConsumerStatus/res";
import { OnsConsumerTimeSpanRequest } from "./OnsConsumerTimeSpan/req";
import { OnsConsumerTimeSpanResponse } from "./OnsConsumerTimeSpan/res";
import { OnsDLQMessageGetByIdRequest } from "./OnsDLQMessageGetById/req";
import { OnsDLQMessageGetByIdResponse } from "./OnsDLQMessageGetById/res";
import { OnsDLQMessageResendByIdRequest } from "./OnsDLQMessageResendById/req";
import { OnsDLQMessageResendByIdResponse } from "./OnsDLQMessageResendById/res";
import { OnsGroupConsumerUpdateRequest } from "./OnsGroupConsumerUpdate/req";
import { OnsGroupConsumerUpdateResponse } from "./OnsGroupConsumerUpdate/res";
import { OnsDLQMessagePageQueryByGroupIdRequest } from "./OnsDLQMessagePageQueryByGroupId/req";
import { OnsDLQMessagePageQueryByGroupIdResponse } from "./OnsDLQMessagePageQueryByGroupId/res";
import { OnsGroupCreateRequest } from "./OnsGroupCreate/req";
import { OnsGroupCreateResponse } from "./OnsGroupCreate/res";
import { OnsGroupDeleteRequest } from "./OnsGroupDelete/req";
import { OnsGroupDeleteResponse } from "./OnsGroupDelete/res";
import { OnsGroupListRequest } from "./OnsGroupList/req";
import { OnsGroupListResponse } from "./OnsGroupList/res";
import { OnsInstanceBaseInfoRequest } from "./OnsInstanceBaseInfo/req";
import { OnsInstanceBaseInfoResponse } from "./OnsInstanceBaseInfo/res";
import { OnsGroupSubDetailRequest } from "./OnsGroupSubDetail/req";
import { OnsGroupSubDetailResponse } from "./OnsGroupSubDetail/res";
import { OnsInstanceCreateRequest } from "./OnsInstanceCreate/req";
import { OnsInstanceCreateResponse } from "./OnsInstanceCreate/res";
import { OnsInstanceDeleteRequest } from "./OnsInstanceDelete/req";
import { OnsInstanceDeleteResponse } from "./OnsInstanceDelete/res";
import { OnsInstanceUpdateRequest } from "./OnsInstanceUpdate/req";
import { OnsInstanceUpdateResponse } from "./OnsInstanceUpdate/res";
import { OnsInstanceInServiceListRequest } from "./OnsInstanceInServiceList/req";
import { OnsInstanceInServiceListResponse } from "./OnsInstanceInServiceList/res";
import { OnsMessageGetByKeyRequest } from "./OnsMessageGetByKey/req";
import { OnsMessageGetByKeyResponse } from "./OnsMessageGetByKey/res";
import { OnsMessageGetByMsgIdRequest } from "./OnsMessageGetByMsgId/req";
import { OnsMessageGetByMsgIdResponse } from "./OnsMessageGetByMsgId/res";
import { OnsMessagePageQueryByTopicRequest } from "./OnsMessagePageQueryByTopic/req";
import { OnsMessagePageQueryByTopicResponse } from "./OnsMessagePageQueryByTopic/res";
import { OnsMessagePushRequest } from "./OnsMessagePush/req";
import { OnsMessagePushResponse } from "./OnsMessagePush/res";
import { OnsMessageTraceRequest } from "./OnsMessageTrace/req";
import { OnsMessageTraceResponse } from "./OnsMessageTrace/res";
import { OnsRegionListRequest } from "./OnsRegionList/req";
import { OnsRegionListResponse } from "./OnsRegionList/res";
import { OnsTopicCreateRequest } from "./OnsTopicCreate/req";
import { OnsTopicCreateResponse } from "./OnsTopicCreate/res";
import { OnsTopicDeleteRequest } from "./OnsTopicDelete/req";
import { OnsTopicDeleteResponse } from "./OnsTopicDelete/res";
import { OnsTopicListRequest } from "./OnsTopicList/req";
import { OnsTopicListResponse } from "./OnsTopicList/res";
import { OnsTopicStatusRequest } from "./OnsTopicStatus/req";
import { OnsTopicStatusResponse } from "./OnsTopicStatus/res";
import { OnsTopicSubDetailRequest } from "./OnsTopicSubDetail/req";
import { OnsTopicSubDetailResponse } from "./OnsTopicSubDetail/res";
import { OnsTopicUpdateRequest } from "./OnsTopicUpdate/req";
import { OnsTopicUpdateResponse } from "./OnsTopicUpdate/res";
import { OnsTraceGetResultRequest } from "./OnsTraceGetResult/req";
import { OnsTraceGetResultResponse } from "./OnsTraceGetResult/res";
import { OnsTraceQueryByMsgIdRequest } from "./OnsTraceQueryByMsgId/req";
import { OnsTraceQueryByMsgIdResponse } from "./OnsTraceQueryByMsgId/res";
import { OnsTraceQueryByMsgKeyRequest } from "./OnsTraceQueryByMsgKey/req";
import { OnsTraceQueryByMsgKeyResponse } from "./OnsTraceQueryByMsgKey/res";
import { OnsTrendGroupOutputTpsRequest } from "./OnsTrendGroupOutputTps/req";
import { OnsTrendGroupOutputTpsResponse } from "./OnsTrendGroupOutputTps/res";
import { OnsTrendTopicInputTpsRequest } from "./OnsTrendTopicInputTps/req";
import { OnsTrendTopicInputTpsResponse } from "./OnsTrendTopicInputTps/res";
import { OpenOnsServiceRequest } from "./OpenOnsService/req";
import { OpenOnsServiceResponse } from "./OpenOnsService/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { OnsMessageDetailRequest } from "./OnsMessageDetail/req";
import { OnsMessageDetailResponse } from "./OnsMessageDetail/res";

interface ONS {
    /**
     * 调用ListTagResources查询资源绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询指定Group ID的消息消费堆积情况，包括当前消息堆积数量和消费延迟时间等。
     */
    OnsConsumerAccumulate(query: OnsConsumerAccumulateRequest): Promise<OnsConsumerAccumulateResponse>;
    /**
     * 查询指定 Group ID 下当前客户端的连接情况。
     */
    OnsConsumerGetConnection(query: OnsConsumerGetConnectionRequest): Promise<OnsConsumerGetConnectionResponse>;
    /**
     * 重置指定的Group ID的消费位点到指定时间戳。
     */
    OnsConsumerResetOffset(query: OnsConsumerResetOffsetRequest): Promise<OnsConsumerResetOffsetResponse>;
    /**
     * 查询指定Group ID详细状态数据：订阅关系检查、消费TPS统计、负载均衡状态、消费端连接。
     */
    OnsConsumerStatus(query: OnsConsumerStatusRequest): Promise<OnsConsumerStatusResponse>;
    /**
     * 查询Topic可重置的时间范围，即该Topic中储存的最早的和最晚的消息的生产时间。
     */
    OnsConsumerTimeSpan(query: OnsConsumerTimeSpanRequest): Promise<OnsConsumerTimeSpanResponse>;
    /**
     * 通过传入Message ID查询指定的死信消息。包括存储时间、消息体、Key和Tag。
     */
    OnsDLQMessageGetById(query: OnsDLQMessageGetByIdRequest): Promise<OnsDLQMessageGetByIdResponse>;
    /**
     * 重发指定Message ID的死信消息，使该消息能够被Consumer再次消费。
     */
    OnsDLQMessageResendById(query: OnsDLQMessageResendByIdRequest): Promise<OnsDLQMessageResendByIdResponse>;
    /**
     * 配置指定Group ID对应的消费集群的消息读取权限。本接口一般用于禁止特定Group ID读取消息的场景。
     */
    OnsGroupConsumerUpdate(query: OnsGroupConsumerUpdateRequest): Promise<OnsGroupConsumerUpdateResponse>;
    /**
     * 通过传入Group ID和时间段，分页查询指定时间段内该Group ID内存在的所有死信消息。
     */
    OnsDLQMessagePageQueryByGroupId(query: OnsDLQMessagePageQueryByGroupIdRequest): Promise<OnsDLQMessagePageQueryByGroupIdResponse>;
    /**
     * 调用OnsGroupCreate创建客户端Group ID。
     */
    OnsGroupCreate(query: OnsGroupCreateRequest): Promise<OnsGroupCreateResponse>;
    /**
     * 调用OnsGroupDelete删除Group。
     */
    OnsGroupDelete(query: OnsGroupDeleteRequest): Promise<OnsGroupDeleteResponse>;
    /**
     * 查询指定实例下所有的Group ID信息。
     */
    OnsGroupList(query: OnsGroupListRequest): Promise<OnsGroupListResponse>;
    /**
     * 调用OnsInstanceBaseInfo接口查询实例基本信息和收发消息的接入点。
     */
    OnsInstanceBaseInfo(query: OnsInstanceBaseInfoRequest): Promise<OnsInstanceBaseInfoResponse>;
    /**
     * 查看Group订阅了哪些Topic，如果Group ID对应的消费者实例不在线则查不到数据。
     */
    OnsGroupSubDetail(query: OnsGroupSubDetailRequest): Promise<OnsGroupSubDetailResponse>;
    /**
     * 调用OnsInstanceCreate接口创建实例。
     */
    OnsInstanceCreate(query: OnsInstanceCreateRequest): Promise<OnsInstanceCreateResponse>;
    /**
     * 调用OnsInstanceDelete接口删除云消息队列 RocketMQ 版实例。
     */
    OnsInstanceDelete(query: OnsInstanceDeleteRequest): Promise<OnsInstanceDeleteResponse>;
    /**
     * 调用OnsInstanceUpdate接口更新实例名称和描述。
     */
    OnsInstanceUpdate(query: OnsInstanceUpdateRequest): Promise<OnsInstanceUpdateResponse>;
    /**
     * 查询当前账号在指定地域（Region）下所有的云消息队列 RocketMQ 版4.x实例信息。
     */
    OnsInstanceInServiceList(query: OnsInstanceInServiceListRequest): Promise<OnsInstanceInServiceListResponse>;
    /**
     * 根据 Topic 和 Message Key 模糊查询消息信息列表。
     */
    OnsMessageGetByKey(query: OnsMessageGetByKeyRequest): Promise<OnsMessageGetByKeyResponse>;
    /**
     * 通过传入 Message ID 查询指定消息的信息以及判断该指定的消息是否曾被消费过。
     */
    OnsMessageGetByMsgId(query: OnsMessageGetByMsgIdRequest): Promise<OnsMessageGetByMsgIdResponse>;
    /**
     * 分页查询指定时间段内指定Topic内存在的所有消息。
     */
    OnsMessagePageQueryByTopic(query: OnsMessagePageQueryByTopicRequest): Promise<OnsMessagePageQueryByTopicResponse>;
    /**
     * 调用OnsMessagePush向指定的消费者推送消息。
     */
    OnsMessagePush(query: OnsMessagePushRequest): Promise<OnsMessagePushResponse>;
    /**
     * 调用OnsMessageTrace根据Message ID来判断目标消息是否曾被消费过。
     */
    OnsMessageTrace(query: OnsMessageTraceRequest): Promise<OnsMessageTraceResponse>;
    /**
     * 调用OnsRegionList获取云消息队列 RocketMQ 版目前开放服务的地域（Region）信息列表。
     */
    OnsRegionList(query: OnsRegionListRequest): Promise<OnsRegionListResponse>;
    /**
     * 调用OnsTopicCreate接口创建Topic。
     */
    OnsTopicCreate(query: OnsTopicCreateRequest): Promise<OnsTopicCreateResponse>;
    /**
     * 调用OnsTopicDelete接口删除指定的Topic。
     */
    OnsTopicDelete(query: OnsTopicDeleteRequest): Promise<OnsTopicDeleteResponse>;
    /**
     * 查询账号下所有Topic的信息列表。
     */
    OnsTopicList(query: OnsTopicListRequest): Promise<OnsTopicListResponse>;
    /**
     * 查询当前Topic下的消息总量以及Topic的状态。
     */
    OnsTopicStatus(query: OnsTopicStatusRequest): Promise<OnsTopicStatusResponse>;
    /**
     * 查看有哪些在线订阅组订阅了这个Topic。
     */
    OnsTopicSubDetail(query: OnsTopicSubDetailRequest): Promise<OnsTopicSubDetailResponse>;
    /**
     * 调用OnsTopicUpdate配置Topic的读写模式。
     */
    OnsTopicUpdate(query: OnsTopicUpdateRequest): Promise<OnsTopicUpdateResponse>;
    /**
     * 通过传入轨迹查询任务的ID获取之前的轨迹查询结果。
     */
    OnsTraceGetResult(query: OnsTraceGetResultRequest): Promise<OnsTraceGetResultResponse>;
    /**
     * 通过传入Topic名称和Message ID创建轨迹查询任务，得到该查询任务的ID。您需要再调用OnsTraceGetResult接口，传入返回的查询任务ID，获取消息轨迹的详细结果。
     */
    OnsTraceQueryByMsgId(query: OnsTraceQueryByMsgIdRequest): Promise<OnsTraceQueryByMsgIdResponse>;
    /**
     * 通过传入Topic名称和Message Key创建轨迹查询任务，得到该查询任务的ID。您需要再调用OnsTraceGetResult接口，传入返回的查询任务ID，获取消息轨迹的详细结果。
     */
    OnsTraceQueryByMsgKey(query: OnsTraceQueryByMsgKeyRequest): Promise<OnsTraceQueryByMsgKeyResponse>;
    /**
     * 查询指定的Group ID在一段时间内消费消息的统计信息。
     */
    OnsTrendGroupOutputTps(query: OnsTrendGroupOutputTpsRequest): Promise<OnsTrendGroupOutputTpsResponse>;
    /**
     * 查询一段时间内指定的Topic的消息写入报表数据。
     */
    OnsTrendTopicInputTps(query: OnsTrendTopicInputTpsRequest): Promise<OnsTrendTopicInputTpsResponse>;
    /**
     * 调用OpenOnsService开通云消息队列 RocketMQ 版服务。
     */
    OpenOnsService(query: OpenOnsServiceRequest): Promise<OpenOnsServiceResponse>;
    /**
     * 调用TagResources为资源绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用UntagResources为资源解绑并删除标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用OnsMessageDetail查询某条消息的具体信息。
     */
    OnsMessageDetail(query: OnsMessageDetailRequest): Promise<OnsMessageDetailResponse>;
}
export default ONS;
