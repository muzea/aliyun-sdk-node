import { CreatePostPayOrderRequest } from "./CreatePostPayOrder/req";
import { CreatePostPayOrderResponse } from "./CreatePostPayOrder/res";
import { CreatePrePayOrderRequest } from "./CreatePrePayOrder/req";
import { CreatePrePayOrderResponse } from "./CreatePrePayOrder/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { UpgradePostPayOrderRequest } from "./UpgradePostPayOrder/req";
import { UpgradePostPayOrderResponse } from "./UpgradePostPayOrder/res";
import { UpgradePrePayOrderRequest } from "./UpgradePrePayOrder/req";
import { UpgradePrePayOrderResponse } from "./UpgradePrePayOrder/res";
import { ConvertPostPayOrderRequest } from "./ConvertPostPayOrder/req";
import { ConvertPostPayOrderResponse } from "./ConvertPostPayOrder/res";
import { ModifyInstanceNameRequest } from "./ModifyInstanceName/req";
import { ModifyInstanceNameResponse } from "./ModifyInstanceName/res";
import { ReleaseInstanceRequest } from "./ReleaseInstance/req";
import { ReleaseInstanceResponse } from "./ReleaseInstance/res";
import { GetInstanceListRequest } from "./GetInstanceList/req";
import { GetInstanceListResponse } from "./GetInstanceList/res";
import { GetAllInstanceIdListRequest } from "./GetAllInstanceIdList/req";
import { GetAllInstanceIdListResponse } from "./GetAllInstanceIdList/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { GetAllowedIpListRequest } from "./GetAllowedIpList/req";
import { GetAllowedIpListResponse } from "./GetAllowedIpList/res";
import { UpdateAllowedIpRequest } from "./UpdateAllowedIp/req";
import { UpdateAllowedIpResponse } from "./UpdateAllowedIp/res";
import { UpdateInstanceConfigRequest } from "./UpdateInstanceConfig/req";
import { UpdateInstanceConfigResponse } from "./UpdateInstanceConfig/res";
import { UpgradeInstanceVersionRequest } from "./UpgradeInstanceVersion/req";
import { UpgradeInstanceVersionResponse } from "./UpgradeInstanceVersion/res";
import { CreateTopicRequest } from "./CreateTopic/req";
import { CreateTopicResponse } from "./CreateTopic/res";
import { DeleteTopicRequest } from "./DeleteTopic/req";
import { DeleteTopicResponse } from "./DeleteTopic/res";
import { GetTopicListRequest } from "./GetTopicList/req";
import { GetTopicListResponse } from "./GetTopicList/res";
import { GetTopicStatusRequest } from "./GetTopicStatus/req";
import { GetTopicStatusResponse } from "./GetTopicStatus/res";
import { ModifyPartitionNumRequest } from "./ModifyPartitionNum/req";
import { ModifyPartitionNumResponse } from "./ModifyPartitionNum/res";
import { ModifyTopicRemarkRequest } from "./ModifyTopicRemark/req";
import { ModifyTopicRemarkResponse } from "./ModifyTopicRemark/res";
import { DeleteConsumerGroupRequest } from "./DeleteConsumerGroup/req";
import { DeleteConsumerGroupResponse } from "./DeleteConsumerGroup/res";
import { GetConsumerListRequest } from "./GetConsumerList/req";
import { GetConsumerListResponse } from "./GetConsumerList/res";
import { GetConsumerProgressRequest } from "./GetConsumerProgress/req";
import { GetConsumerProgressResponse } from "./GetConsumerProgress/res";
import { CreateConsumerGroupRequest } from "./CreateConsumerGroup/req";
import { CreateConsumerGroupResponse } from "./CreateConsumerGroup/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { CreateSaslUserRequest } from "./CreateSaslUser/req";
import { CreateSaslUserResponse } from "./CreateSaslUser/res";
import { DeleteSaslUserRequest } from "./DeleteSaslUser/req";
import { DeleteSaslUserResponse } from "./DeleteSaslUser/res";
import { DescribeSaslUsersRequest } from "./DescribeSaslUsers/req";
import { DescribeSaslUsersResponse } from "./DescribeSaslUsers/res";
import { CreateAclRequest } from "./CreateAcl/req";
import { CreateAclResponse } from "./CreateAcl/res";
import { DescribeAclsRequest } from "./DescribeAcls/req";
import { DescribeAclsResponse } from "./DescribeAcls/res";
import { DeleteAclRequest } from "./DeleteAcl/req";
import { DeleteAclResponse } from "./DeleteAcl/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { ReopenInstanceRequest } from "./ReopenInstance/req";
import { ReopenInstanceResponse } from "./ReopenInstance/res";
import { GetQuotaTipRequest } from "./GetQuotaTip/req";
import { GetQuotaTipResponse } from "./GetQuotaTip/res";
import { UpdateConsumerOffsetRequest } from "./UpdateConsumerOffset/req";
import { UpdateConsumerOffsetResponse } from "./UpdateConsumerOffset/res";
import { UpdateTopicConfigRequest } from "./UpdateTopicConfig/req";
import { UpdateTopicConfigResponse } from "./UpdateTopicConfig/res";
import { QueryMessageRequest } from "./QueryMessage/req";
import { QueryMessageResponse } from "./QueryMessage/res";
import { GetTopicSubscribeStatusRequest } from "./GetTopicSubscribeStatus/req";
import { GetTopicSubscribeStatusResponse } from "./GetTopicSubscribeStatus/res";
import { EnableAutoGroupCreationRequest } from "./EnableAutoGroupCreation/req";
import { EnableAutoGroupCreationResponse } from "./EnableAutoGroupCreation/res";
import { EnableAutoTopicCreationRequest } from "./EnableAutoTopicCreation/req";
import { EnableAutoTopicCreationResponse } from "./EnableAutoTopicCreation/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { CreateScheduledScalingRuleRequest } from "./CreateScheduledScalingRule/req";
import { CreateScheduledScalingRuleResponse } from "./CreateScheduledScalingRule/res";
import { GetAutoScalingConfigurationRequest } from "./GetAutoScalingConfiguration/req";
import { GetAutoScalingConfigurationResponse } from "./GetAutoScalingConfiguration/res";
import { DeleteScheduledScalingRuleRequest } from "./DeleteScheduledScalingRule/req";
import { DeleteScheduledScalingRuleResponse } from "./DeleteScheduledScalingRule/res";
import { ModifyScheduledScalingRuleRequest } from "./ModifyScheduledScalingRule/req";
import { ModifyScheduledScalingRuleResponse } from "./ModifyScheduledScalingRule/res";

interface ALIKAFKA {
    /**
     * 后付费实例根据所购资源规格的实际使用量计费，先使用，后计费。主要适用于测试或者流量峰值不确定的短期场景。本文介绍如何调用CreatePostPayOrder创建后付费实例。
     */
    CreatePostPayOrder(query: CreatePostPayOrderRequest): Promise<CreatePostPayOrderResponse>;
    /**
     * 预付费实例需要先付费才能使用资源，主要适用于长期稳定的业务运行场景。本文介绍调用CreatePrePayOrder创建预付费实例。
     */
    CreatePrePayOrder(query: CreatePrePayOrderRequest): Promise<CreatePrePayOrderResponse>;
    /**
     * 如需使用云消息队列 Kafka 版收发消息，需要购买并部署才可使用，本文介绍如何调用StartInstance部署实例。
     */
    StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    /**
     * 升配后付费实例。
     */
    UpgradePostPayOrder(query: UpgradePostPayOrderRequest): Promise<UpgradePostPayOrderResponse>;
    /**
     * 升配预付费实例。
     */
    UpgradePrePayOrder(query: UpgradePrePayOrderRequest): Promise<UpgradePrePayOrderResponse>;
    /**
     * 将后付费实例转为预付费实例。
     */
    ConvertPostPayOrder(query: ConvertPostPayOrderRequest): Promise<ConvertPostPayOrderResponse>;
    /**
     * 实例部署完成后，云消息队列 Kafka 版支持修改实例的名称。本文介绍如何调用ModifyInstanceName修改实例的名称。
     */
    ModifyInstanceName(query: ModifyInstanceNameRequest): Promise<ModifyInstanceNameResponse>;
    /**
     * 释放后付费实例。
     */
    ReleaseInstance(query: ReleaseInstanceRequest): Promise<ReleaseInstanceResponse>;
    /**
     * 查询指定地域的实例信息。
     */
    GetInstanceList(query: GetInstanceListRequest): Promise<GetInstanceListResponse>;
    /**
     * 查询当前用户下所有实例ID集合。
     */
    GetAllInstanceIdList(query: GetAllInstanceIdListRequest): Promise<GetAllInstanceIdListResponse>;
    /**
     * 当预付费实例或后付费实例被释放后可删除实例，本文介绍如何调用DeleteInstance删除实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 获取IP白名单。
     */
    GetAllowedIpList(query: GetAllowedIpListRequest): Promise<GetAllowedIpListResponse>;
    /**
     * 您可以编辑访问云消息队列 Kafka 版的白名单，配置在白名单中的IP地址与端口才允许访问云消息队列 Kafka 版实例，本文介绍如何调用UpdateAllowedIp变更IP白名单。
     */
    UpdateAllowedIp(query: UpdateAllowedIpRequest): Promise<UpdateAllowedIpResponse>;
    /**
     * 实例部署后，允许修改实例是否开启ACL、SSL、消息保留时长及最大消息大小，本文介绍如何调用UpdateInstanceConfig修改实例配置。
     */
    UpdateInstanceConfig(query: UpdateInstanceConfigRequest): Promise<UpdateInstanceConfigResponse>;
    /**
     * 升级实例版本。
     */
    UpgradeInstanceVersion(query: UpgradeInstanceVersionRequest): Promise<UpgradeInstanceVersionResponse>;
    /**
     * 创建Topic。
     */
    CreateTopic(query: CreateTopicRequest): Promise<CreateTopicResponse>;
    /**
     * 删除Topic。
     */
    DeleteTopic(query: DeleteTopicRequest): Promise<DeleteTopicResponse>;
    /**
     * 获取Topic信息。
     */
    GetTopicList(query: GetTopicListRequest): Promise<GetTopicListResponse>;
    /**
     * 获取Topic的消息收发状态。
     */
    GetTopicStatus(query: GetTopicStatusRequest): Promise<GetTopicStatusResponse>;
    /**
     * 修改Topic的分区数。
     */
    ModifyPartitionNum(query: ModifyPartitionNumRequest): Promise<ModifyPartitionNumResponse>;
    /**
     * 修改Topic的备注。
     */
    ModifyTopicRemark(query: ModifyTopicRemarkRequest): Promise<ModifyTopicRemarkResponse>;
    /**
     * 调用DeleteConsumerGroup删除Group。
     */
    DeleteConsumerGroup(query: DeleteConsumerGroupRequest): Promise<DeleteConsumerGroupResponse>;
    /**
     * 调用GetConsumerList获取Group信息。
     */
    GetConsumerList(query: GetConsumerListRequest): Promise<GetConsumerListResponse>;
    /**
     * 查询Consumer Group的消费状态。
     */
    GetConsumerProgress(query: GetConsumerProgressRequest): Promise<GetConsumerProgressResponse>;
    /**
     * 调用CreateConsumerGroup创建Group。
     */
    CreateConsumerGroup(query: CreateConsumerGroupRequest): Promise<CreateConsumerGroupResponse>;
    /**
     * 调用UntagResources为资源解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用TagResources为资源绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 调用ListTagResources查询资源绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用CreateSaslUser创建SASL用户。
     */
    CreateSaslUser(query: CreateSaslUserRequest): Promise<CreateSaslUserResponse>;
    /**
     * 调用DeleteSaslUser删除SASL用户。
     */
    DeleteSaslUser(query: DeleteSaslUserRequest): Promise<DeleteSaslUserResponse>;
    /**
     * 调用DescribeSaslUsers查询SASL用户。
     */
    DescribeSaslUsers(query: DescribeSaslUsersRequest): Promise<DescribeSaslUsersResponse>;
    /**
     * 调用CreateAcl创建ACL。
     */
    CreateAcl(query: CreateAclRequest): Promise<CreateAclResponse>;
    /**
     * 调用DescribeAcls查询ACL。
     */
    DescribeAcls(query: DescribeAclsRequest): Promise<DescribeAclsResponse>;
    /**
     * 调用DeleteAcl删除ACL。
     */
    DeleteAcl(query: DeleteAclRequest): Promise<DeleteAclResponse>;
    /**
     * 进行资源转组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 启用实例。
     */
    ReopenInstance(query: ReopenInstanceRequest): Promise<ReopenInstanceResponse>;
    /**
     * 获取Topic和分区的使用配额。
     */
    GetQuotaTip(query: GetQuotaTipRequest): Promise<GetQuotaTipResponse>;
    /**
     * 通过 UpdateConsumerOffset 重置消费者组的消费位点。
     */
    UpdateConsumerOffset(query: UpdateConsumerOffsetRequest): Promise<UpdateConsumerOffsetResponse>;
    /**
     * Topic创建后，允许修改Topic的消息保留时长以及最大消息大小，本文介绍如何调用接口来修改Topic的配置。
     */
    UpdateTopicConfig(query: UpdateTopicConfigRequest): Promise<UpdateTopicConfigResponse>;
    /**
     * 查询 Topic 中存储的消息，可通过消息创建时间或者位点来进行查询。
     */
    QueryMessage(query: QueryMessageRequest): Promise<QueryMessageResponse>;
    /**
     * 获取订阅 Topic 的 Group 信息。
     */
    GetTopicSubscribeStatus(query: GetTopicSubscribeStatusRequest): Promise<GetTopicSubscribeStatusResponse>;
    /**
     * 本文介绍如何调用EnableAutoGroupCreation开启和关闭自由使用Group。
     */
    EnableAutoGroupCreation(query: EnableAutoGroupCreationRequest): Promise<EnableAutoGroupCreationResponse>;
    /**
     * 本文介绍如何调用 EnableAutoTopicCreation 开启和关闭自动创建Topic，以及修改自动创建 Topic 默认分区数。
     */
    EnableAutoTopicCreation(query: EnableAutoTopicCreationRequest): Promise<EnableAutoTopicCreationResponse>;
    /**
     * 调用StopInstance以停机实例。
     */
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    /**
     * V3 Serverless 系列实例部署后，允许通过该接口创建实例弹性定时策略配置。
     */
    CreateScheduledScalingRule(query: CreateScheduledScalingRuleRequest): Promise<CreateScheduledScalingRuleResponse>;
    /**
     * V3 Serverless 系列实例部署后，允许通过该接口查询实例弹性定时策略配置。
     */
    GetAutoScalingConfiguration(query: GetAutoScalingConfigurationRequest): Promise<GetAutoScalingConfigurationResponse>;
    /**
     * V3 Serverless 系列实例部署后，允许通过该接口删除实例弹性定时策略配置。
     */
    DeleteScheduledScalingRule(query: DeleteScheduledScalingRuleRequest): Promise<DeleteScheduledScalingRuleResponse>;
    /**
     * V3 Serverless 系列实例部署后，允许通过该接口修改实例弹性定时策略。
     */
    ModifyScheduledScalingRule(query: ModifyScheduledScalingRuleRequest): Promise<ModifyScheduledScalingRuleResponse>;
}
export default ALIKAFKA;
