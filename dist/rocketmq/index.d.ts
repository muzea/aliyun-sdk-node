import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { ListConsumerGroupSubscriptionsRequest } from "./ListConsumerGroupSubscriptions/req";
import { ListConsumerGroupSubscriptionsResponse } from "./ListConsumerGroupSubscriptions/res";
import { ListTopicSubscriptionsRequest } from "./ListTopicSubscriptions/req";
import { ListTopicSubscriptionsResponse } from "./ListTopicSubscriptions/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { ListConsumerConnectionsRequest } from "./ListConsumerConnections/req";
import { ListConsumerConnectionsResponse } from "./ListConsumerConnections/res";
import { ResetConsumeOffsetRequest } from "./ResetConsumeOffset/req";
import { ResetConsumeOffsetResponse } from "./ResetConsumeOffset/res";
import { GetTopicRequest } from "./GetTopic/req";
import { GetTopicResponse } from "./GetTopic/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DeleteConsumerGroupRequest } from "./DeleteConsumerGroup/req";
import { DeleteConsumerGroupResponse } from "./DeleteConsumerGroup/res";
import { ListConsumerGroupsRequest } from "./ListConsumerGroups/req";
import { ListConsumerGroupsResponse } from "./ListConsumerGroups/res";
import { ListTopicsRequest } from "./ListTopics/req";
import { ListTopicsResponse } from "./ListTopics/res";
import { GetConsumerGroupRequest } from "./GetConsumerGroup/req";
import { GetConsumerGroupResponse } from "./GetConsumerGroup/res";
import { CreateConsumerGroupRequest } from "./CreateConsumerGroup/req";
import { CreateConsumerGroupResponse } from "./CreateConsumerGroup/res";
import { UpdateConsumerGroupRequest } from "./UpdateConsumerGroup/req";
import { UpdateConsumerGroupResponse } from "./UpdateConsumerGroup/res";
import { CreateTopicRequest } from "./CreateTopic/req";
import { CreateTopicResponse } from "./CreateTopic/res";
import { UpdateTopicRequest } from "./UpdateTopic/req";
import { UpdateTopicResponse } from "./UpdateTopic/res";
import { DeleteTopicRequest } from "./DeleteTopic/req";
import { DeleteTopicResponse } from "./DeleteTopic/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { UpdateInstanceRequest } from "./UpdateInstance/req";
import { UpdateInstanceResponse } from "./UpdateInstance/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { ListAvailableZonesRequest } from "./ListAvailableZones/req";
import { ListAvailableZonesResponse } from "./ListAvailableZones/res";

interface ROCKETMQ {
    /**
     * 获取某个指定实例的详细信息。
     */
    GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
     * 查询指定消费者组的订阅关系。
     */
    ListConsumerGroupSubscriptions(query: ListConsumerGroupSubscriptionsRequest): Promise<ListConsumerGroupSubscriptionsResponse>;
    /**
     * 查询指定主题的订阅关系列表。
     */
    ListTopicSubscriptions(query: ListTopicSubscriptionsRequest): Promise<ListTopicSubscriptionsResponse>;
    /**
     * 查询地域列表。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 获取指定消费者客户端的连接信息。
     */
    ListConsumerConnections(query: ListConsumerConnectionsRequest): Promise<ListConsumerConnectionsResponse>;
    /**
     * 重置指定消费者分组的消费位点。重置消费位点是指改变订阅者当前的消费位置。当消费者出现故障或者消费错误数据时，您可通过重置消费位点将消费位置回滚到之前的某个位点重新开始消费，您也可以将消费位置移动至最新位点，暂时不处理堆积的消息。
     */
    ResetConsumeOffset(query: ResetConsumeOffsetRequest): Promise<ResetConsumeOffsetResponse>;
    /**
     * 获取某个指定主题的详细信息。
     */
    GetTopic(query: GetTopicRequest): Promise<GetTopicResponse>;
    /**
     * 删除云消息队列 RocketMQ 版实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 创建云消息队列 RocketMQ 版5.x系列实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 删除指定的消费者分组。
     */
    DeleteConsumerGroup(query: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse>;
    /**
     * 查询指定实例下消费者分组的列表信息。
     */
    ListConsumerGroups(query: ListConsumerGroupsRequest): Promise<ListConsumerGroupsResponse>;
    /**
     * 查询指定实例下的主题列表信息。
     */
    ListTopics(query: ListTopicsRequest): Promise<ListTopicsResponse>;
    /**
     * 获取某个指定消费者分组的详细信息。
     */
    GetConsumerGroup(query: GetConsumerGroupRequest): Promise<GetConsumerGroupResponse>;
    /**
     * 创建云消息队列 RocketMQ 版的消费者分组（ConsumerGroup）。消费者分组是云消息队列 RocketMQ 版系统中承载多个消费行为一致的消费者的负载均衡分组。消费者需要通过指定消费者分组订阅相关的主题来实现消息订阅。
     */
    CreateConsumerGroup(query: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse>;
    /**
     * 更新消费者分组的基础信息和消费重试策略。
     */
    UpdateConsumerGroup(query: UpdateConsumerGroupRequest): Promise<UpdateConsumerGroupResponse>;
    /**
     * 创建云消息队列 RocketMQ 版的主题（Topic）。主题是云消息队列 RocketMQ 版中消息传输和存储的顶层容器，用于标识同一类业务逻辑的消息。在消息收发模型中，生产者将消息发送至主题，消费者通过订阅指定的主题来消费其中的消息。
     */
    CreateTopic(query: CreateTopicRequest): Promise<CreateTopicResponse>;
    /**
     * 更新主题的备注信息。
     */
    UpdateTopic(query: UpdateTopicRequest): Promise<UpdateTopicResponse>;
    /**
     * 删除指定主题。
     */
    DeleteTopic(query: DeleteTopicRequest): Promise<DeleteTopicResponse>;
    /**
     * 查询指定地域下，所有的云消息队列 RocketMQ 版实例的列表信息。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 更新云消息队列 RocketMQ 版实例的基本信息和规格配置。
     */
    UpdateInstance(query: UpdateInstanceRequest): Promise<UpdateInstanceResponse>;
    /**
     * 修改实例所属的资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 查询支持的可用区。
     */
    ListAvailableZones(query: ListAvailableZonesRequest): Promise<ListAvailableZonesResponse>;
}
export default ROCKETMQ;
