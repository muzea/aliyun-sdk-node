import { AddDNSAuthorizationRuleRequest } from "./AddDNSAuthorizationRule/req";
import { AddDNSAuthorizationRuleResponse } from "./AddDNSAuthorizationRule/res";
import { CreateAuthorizationRuleRequest } from "./CreateAuthorizationRule/req";
import { CreateAuthorizationRuleResponse } from "./CreateAuthorizationRule/res";
import { CreateWirelessCloudConnectorRequest } from "./CreateWirelessCloudConnector/req";
import { CreateWirelessCloudConnectorResponse } from "./CreateWirelessCloudConnector/res";
import { DeleteAuthorizationRuleRequest } from "./DeleteAuthorizationRule/req";
import { DeleteAuthorizationRuleResponse } from "./DeleteAuthorizationRule/res";
import { DeleteWirelessCloudConnectorRequest } from "./DeleteWirelessCloudConnector/req";
import { DeleteWirelessCloudConnectorResponse } from "./DeleteWirelessCloudConnector/res";
import { GetWirelessCloudConnectorRequest } from "./GetWirelessCloudConnector/req";
import { GetWirelessCloudConnectorResponse } from "./GetWirelessCloudConnector/res";
import { ListAPNsRequest } from "./ListAPNs/req";
import { ListAPNsResponse } from "./ListAPNs/res";
import { ListAuthorizationRulesRequest } from "./ListAuthorizationRules/req";
import { ListAuthorizationRulesResponse } from "./ListAuthorizationRules/res";
import { ListCardsRequest } from "./ListCards/req";
import { ListCardsResponse } from "./ListCards/res";
import { ListDataPackagesRequest } from "./ListDataPackages/req";
import { ListDataPackagesResponse } from "./ListDataPackages/res";
import { ListOrdersRequest } from "./ListOrders/req";
import { ListOrdersResponse } from "./ListOrders/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { ListWirelessCloudConnectorsRequest } from "./ListWirelessCloudConnectors/req";
import { ListWirelessCloudConnectorsResponse } from "./ListWirelessCloudConnectors/res";
import { ListZonesRequest } from "./ListZones/req";
import { ListZonesResponse } from "./ListZones/res";
import { UpdateAuthorizationRuleRequest } from "./UpdateAuthorizationRule/req";
import { UpdateAuthorizationRuleResponse } from "./UpdateAuthorizationRule/res";
import { UpdateCardRequest } from "./UpdateCard/req";
import { UpdateCardResponse } from "./UpdateCard/res";
import { UpdateDNSAuthorizationRuleRequest } from "./UpdateDNSAuthorizationRule/req";
import { UpdateDNSAuthorizationRuleResponse } from "./UpdateDNSAuthorizationRule/res";
import { UpdateWirelessCloudConnectorRequest } from "./UpdateWirelessCloudConnector/req";
import { UpdateWirelessCloudConnectorResponse } from "./UpdateWirelessCloudConnector/res";
import { OpenCc5gServiceRequest } from "./OpenCc5gService/req";
import { OpenCc5gServiceResponse } from "./OpenCc5gService/res";
import { AttachVpcToNetLinkRequest } from "./AttachVpcToNetLink/req";
import { AttachVpcToNetLinkResponse } from "./AttachVpcToNetLink/res";
import { DetachVpcFromNetLinkRequest } from "./DetachVpcFromNetLink/req";
import { DetachVpcFromNetLinkResponse } from "./DetachVpcFromNetLink/res";
import { StopCardsRequest } from "./StopCards/req";
import { StopCardsResponse } from "./StopCards/res";
import { LockCardsRequest } from "./LockCards/req";
import { LockCardsResponse } from "./LockCards/res";
import { ResumeCardsRequest } from "./ResumeCards/req";
import { ResumeCardsResponse } from "./ResumeCards/res";
import { UnlockCardsRequest } from "./UnlockCards/req";
import { UnlockCardsResponse } from "./UnlockCards/res";
import { DeleteBatchOperateCardsTaskRequest } from "./DeleteBatchOperateCardsTask/req";
import { DeleteBatchOperateCardsTaskResponse } from "./DeleteBatchOperateCardsTask/res";
import { CreateBatchOperateCardsTaskRequest } from "./CreateBatchOperateCardsTask/req";
import { CreateBatchOperateCardsTaskResponse } from "./CreateBatchOperateCardsTask/res";
import { ListBatchOperateCardsTasksRequest } from "./ListBatchOperateCardsTasks/req";
import { ListBatchOperateCardsTasksResponse } from "./ListBatchOperateCardsTasks/res";
import { UpdateBatchOperateCardsTaskRequest } from "./UpdateBatchOperateCardsTask/req";
import { UpdateBatchOperateCardsTaskResponse } from "./UpdateBatchOperateCardsTask/res";
import { GetCreateCustomerInfomationRequest } from "./GetCreateCustomerInfomation/req";
import { GetCreateCustomerInfomationResponse } from "./GetCreateCustomerInfomation/res";
import { InnerLimitRateCardsRequest } from "./InnerLimitRateCards/req";
import { InnerLimitRateCardsResponse } from "./InnerLimitRateCards/res";
import { InnerStopCardsRequest } from "./InnerStopCards/req";
import { InnerStopCardsResponse } from "./InnerStopCards/res";
import { GetCreateCustomerInformationRequest } from "./GetCreateCustomerInformation/req";
import { GetCreateCustomerInformationResponse } from "./GetCreateCustomerInformation/res";
import { GetCardLockReasonRequest } from "./GetCardLockReason/req";
import { GetCardLockReasonResponse } from "./GetCardLockReason/res";
import { SwitchWirelessCloudConnectorToBusinessRequest } from "./SwitchWirelessCloudConnectorToBusiness/req";
import { SwitchWirelessCloudConnectorToBusinessResponse } from "./SwitchWirelessCloudConnectorToBusiness/res";
import { DeleteIoTCloudConnectorBackhaulRouteRequest } from "./DeleteIoTCloudConnectorBackhaulRoute/req";
import { DeleteIoTCloudConnectorBackhaulRouteResponse } from "./DeleteIoTCloudConnectorBackhaulRoute/res";
import { ListIoTCloudConnectorBackhaulRouteRequest } from "./ListIoTCloudConnectorBackhaulRoute/req";
import { ListIoTCloudConnectorBackhaulRouteResponse } from "./ListIoTCloudConnectorBackhaulRoute/res";
import { ModifyWirelessCloudConnectorFeatureRequest } from "./ModifyWirelessCloudConnectorFeature/req";
import { ModifyWirelessCloudConnectorFeatureResponse } from "./ModifyWirelessCloudConnectorFeature/res";
import { CreateIoTCloudConnectorBackhaulRouteRequest } from "./CreateIoTCloudConnectorBackhaulRoute/req";
import { CreateIoTCloudConnectorBackhaulRouteResponse } from "./CreateIoTCloudConnectorBackhaulRoute/res";
import { GetCardRequest } from "./GetCard/req";
import { GetCardResponse } from "./GetCard/res";
import { GrantNetLinkRequest } from "./GrantNetLink/req";
import { GrantNetLinkResponse } from "./GrantNetLink/res";
import { RevokeNetLinkRequest } from "./RevokeNetLink/req";
import { RevokeNetLinkResponse } from "./RevokeNetLink/res";
import { FailCardsRequest } from "./FailCards/req";
import { FailCardsResponse } from "./FailCards/res";
import { GetDiagnoseResultForSingleCardRequest } from "./GetDiagnoseResultForSingleCard/req";
import { GetDiagnoseResultForSingleCardResponse } from "./GetDiagnoseResultForSingleCard/res";
import { ListDiagnoseInfoForSingleCardRequest } from "./ListDiagnoseInfoForSingleCard/req";
import { ListDiagnoseInfoForSingleCardResponse } from "./ListDiagnoseInfoForSingleCard/res";
import { SubmitDiagnoseTaskForSingleCardRequest } from "./SubmitDiagnoseTaskForSingleCard/req";
import { SubmitDiagnoseTaskForSingleCardResponse } from "./SubmitDiagnoseTaskForSingleCard/res";
import { UpdateWirelessCloudConnectorGroupRequest } from "./UpdateWirelessCloudConnectorGroup/req";
import { UpdateWirelessCloudConnectorGroupResponse } from "./UpdateWirelessCloudConnectorGroup/res";
import { UpdateGroupDnsAuthorizationRuleRequest } from "./UpdateGroupDnsAuthorizationRule/req";
import { UpdateGroupDnsAuthorizationRuleResponse } from "./UpdateGroupDnsAuthorizationRule/res";
import { UpdateGroupAuthorizationRuleRequest } from "./UpdateGroupAuthorizationRule/req";
import { UpdateGroupAuthorizationRuleResponse } from "./UpdateGroupAuthorizationRule/res";
import { ListWirelessCloudConnectorGroupsRequest } from "./ListWirelessCloudConnectorGroups/req";
import { ListWirelessCloudConnectorGroupsResponse } from "./ListWirelessCloudConnectorGroups/res";
import { RemoveWirelessCloudConnectorFromGroupRequest } from "./RemoveWirelessCloudConnectorFromGroup/req";
import { RemoveWirelessCloudConnectorFromGroupResponse } from "./RemoveWirelessCloudConnectorFromGroup/res";
import { ListGroupAuthorizationRulesRequest } from "./ListGroupAuthorizationRules/req";
import { ListGroupAuthorizationRulesResponse } from "./ListGroupAuthorizationRules/res";
import { DeleteWirelessCloudConnectorGroupRequest } from "./DeleteWirelessCloudConnectorGroup/req";
import { DeleteWirelessCloudConnectorGroupResponse } from "./DeleteWirelessCloudConnectorGroup/res";
import { DeleteGroupAuthorizationRuleRequest } from "./DeleteGroupAuthorizationRule/req";
import { DeleteGroupAuthorizationRuleResponse } from "./DeleteGroupAuthorizationRule/res";
import { CreateWirelessCloudConnectorGroupRequest } from "./CreateWirelessCloudConnectorGroup/req";
import { CreateWirelessCloudConnectorGroupResponse } from "./CreateWirelessCloudConnectorGroup/res";
import { CreateGroupAuthorizationRuleRequest } from "./CreateGroupAuthorizationRule/req";
import { CreateGroupAuthorizationRuleResponse } from "./CreateGroupAuthorizationRule/res";
import { AddWirelessCloudConnectorToGroupRequest } from "./AddWirelessCloudConnectorToGroup/req";
import { AddWirelessCloudConnectorToGroupResponse } from "./AddWirelessCloudConnectorToGroup/res";
import { AddGroupDnsAuthorizationRuleRequest } from "./AddGroupDnsAuthorizationRule/req";
import { AddGroupDnsAuthorizationRuleResponse } from "./AddGroupDnsAuthorizationRule/res";
import { ListCardUsagesRequest } from "./ListCardUsages/req";
import { ListCardUsagesResponse } from "./ListCardUsages/res";
import { RebindCardsRequest } from "./RebindCards/req";
import { RebindCardsResponse } from "./RebindCards/res";
import { ListCardDayUsagesRequest } from "./ListCardDayUsages/req";
import { ListCardDayUsagesResponse } from "./ListCardDayUsages/res";
import { ResetAreaLimitCardsRequest } from "./ResetAreaLimitCards/req";
import { ResetAreaLimitCardsResponse } from "./ResetAreaLimitCards/res";
import { ListCardAreaLimitSupportAreaRequest } from "./ListCardAreaLimitSupportArea/req";
import { ListCardAreaLimitSupportAreaResponse } from "./ListCardAreaLimitSupportArea/res";

interface CC5G {
    /**
     * 创建DNS授权规则。
     */
    AddDNSAuthorizationRule(query: AddDNSAuthorizationRuleRequest): Promise<AddDNSAuthorizationRuleResponse>;
    /**
     * 创建授权规则。
     */
    CreateAuthorizationRule(query: CreateAuthorizationRuleRequest): Promise<CreateAuthorizationRuleResponse>;
    /**
     * 创建5G高速上云服务实例。
     */
    CreateWirelessCloudConnector(query: CreateWirelessCloudConnectorRequest): Promise<CreateWirelessCloudConnectorResponse>;
    /**
     * 删除授权规则。
     */
    DeleteAuthorizationRule(query: DeleteAuthorizationRuleRequest): Promise<DeleteAuthorizationRuleResponse>;
    /**
     * 删除5G高速上云实例。
     */
    DeleteWirelessCloudConnector(query: DeleteWirelessCloudConnectorRequest): Promise<DeleteWirelessCloudConnectorResponse>;
    /**
     * 查询5G高速上云实例详细信息。
     */
    GetWirelessCloudConnector(query: GetWirelessCloudConnectorRequest): Promise<GetWirelessCloudConnectorResponse>;
    /**
     * 查询5G高速上云服务支持的APN列表。
     */
    ListAPNs(query: ListAPNsRequest): Promise<ListAPNsResponse>;
    /**
     * 查询授权规则列表。
     */
    ListAuthorizationRules(query: ListAuthorizationRulesRequest): Promise<ListAuthorizationRulesResponse>;
    /**
     * 查询5G高速上云实例下的卡信息列表。
     */
    ListCards(query: ListCardsRequest): Promise<ListCardsResponse>;
    /**
     * 查询流量包信息列表。
     */
    ListDataPackages(query: ListDataPackagesRequest): Promise<ListDataPackagesResponse>;
    /**
     * 查询订单列表。
     */
    ListOrders(query: ListOrdersRequest): Promise<ListOrdersResponse>;
    /**
     * 查询5G高速上云服务支持的地域列表。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 查询5G高速上云实例列表。
     */
    ListWirelessCloudConnectors(query: ListWirelessCloudConnectorsRequest): Promise<ListWirelessCloudConnectorsResponse>;
    /**
     * 查询5G高速上云服务支持的可用区列表。
     */
    ListZones(query: ListZonesRequest): Promise<ListZonesResponse>;
    /**
     * 更新授权规则。
     */
    UpdateAuthorizationRule(query: UpdateAuthorizationRuleRequest): Promise<UpdateAuthorizationRuleResponse>;
    /**
     * 更新卡实例的名称和描述。
     */
    UpdateCard(query: UpdateCardRequest): Promise<UpdateCardResponse>;
    /**
     * 更新DNS授权规则。
     */
    UpdateDNSAuthorizationRule(query: UpdateDNSAuthorizationRuleRequest): Promise<UpdateDNSAuthorizationRuleResponse>;
    /**
     * 更新5G高速上云实例信息。
     */
    UpdateWirelessCloudConnector(query: UpdateWirelessCloudConnectorRequest): Promise<UpdateWirelessCloudConnectorResponse>;
    /**
     * 开通5G高速上云服务。
     */
    OpenCc5gService(query: OpenCc5gServiceRequest): Promise<OpenCc5gServiceResponse>;
    /**
     * 关联用户Vpc和Vswitch到5G高速上云实例。
     */
    AttachVpcToNetLink(query: AttachVpcToNetLinkRequest): Promise<AttachVpcToNetLinkResponse>;
    /**
     * 取消用户Vpc和Vswitch的关联。
     */
    DetachVpcFromNetLink(query: DetachVpcFromNetLinkRequest): Promise<DetachVpcFromNetLinkResponse>;
    /**
     * 单卡停机，支持批量操作。
     */
    StopCards(query: StopCardsRequest): Promise<StopCardsResponse>;
    /**
     * 批量锁定卡。
     */
    LockCards(query: LockCardsRequest): Promise<LockCardsResponse>;
    /**
     * 激活单卡，或恢复运营商侧卡状态，支持批量操作。
     */
    ResumeCards(query: ResumeCardsRequest): Promise<ResumeCardsResponse>;
    /**
     * 批量解锁卡。
     */
    UnlockCards(query: UnlockCardsRequest): Promise<UnlockCardsResponse>;
    /**
     * 删除批量操作卡任务。
     */
    DeleteBatchOperateCardsTask(query: DeleteBatchOperateCardsTaskRequest): Promise<DeleteBatchOperateCardsTaskResponse>;
    /**
     * 创建批量操作卡任务。
     */
    CreateBatchOperateCardsTask(query: CreateBatchOperateCardsTaskRequest): Promise<CreateBatchOperateCardsTaskResponse>;
    /**
     * 列出批量操作卡任务。
     */
    ListBatchOperateCardsTasks(query: ListBatchOperateCardsTasksRequest): Promise<ListBatchOperateCardsTasksResponse>;
    /**
     * 更新批量操作卡任务。
     */
    UpdateBatchOperateCardsTask(query: UpdateBatchOperateCardsTaskRequest): Promise<UpdateBatchOperateCardsTaskResponse>;
    /**
     * 获取运营商物联网卡客户资料录入页面地址以及是否已经录入完成信息。
     */
    GetCreateCustomerInfomation(query: GetCreateCustomerInfomationRequest): Promise<GetCreateCustomerInfomationResponse>;
    /**
     * 内部卡限速接口
     */
    InnerLimitRateCards(query: InnerLimitRateCardsRequest): Promise<InnerLimitRateCardsResponse>;
    /**
     * 内部接口运营商侧卡停机
     */
    InnerStopCards(query: InnerStopCardsRequest): Promise<InnerStopCardsResponse>;
    /**
     * 获取客户资料录入地址和录入状态。
     */
    GetCreateCustomerInformation(query: GetCreateCustomerInformationRequest): Promise<GetCreateCustomerInformationResponse>;
    /**
     * 获取锁卡原因。
     */
    GetCardLockReason(query: GetCardLockReasonRequest): Promise<GetCardLockReasonResponse>;
    /**
     * 用于把5G上云服务测试实例切换到商业实例。
     */
    SwitchWirelessCloudConnectorToBusiness(query: SwitchWirelessCloudConnectorToBusinessRequest): Promise<SwitchWirelessCloudConnectorToBusinessResponse>;
    /**
     * 开启了反向访问高级特性场景下，针对连接实例删除反向访问路由
     * 。
     */
    DeleteIoTCloudConnectorBackhaulRoute(query: DeleteIoTCloudConnectorBackhaulRouteRequest): Promise<DeleteIoTCloudConnectorBackhaulRouteResponse>;
    /**
     * 开启了反向访问高级特性场景下，查询特定连接实例的反向访问路由列表。
     */
    ListIoTCloudConnectorBackhaulRoute(query: ListIoTCloudConnectorBackhaulRouteRequest): Promise<ListIoTCloudConnectorBackhaulRouteResponse>;
    /**
     * 修改5G高速上云实例高级属性，例如开启反向访问功能。
     */
    ModifyWirelessCloudConnectorFeature(query: ModifyWirelessCloudConnectorFeatureRequest): Promise<ModifyWirelessCloudConnectorFeatureResponse>;
    /**
     * 开启了反向访问高级特性场景下，针对连接实例下发反向访问路由。
     */
    CreateIoTCloudConnectorBackhaulRoute(query: CreateIoTCloudConnectorBackhaulRouteRequest): Promise<CreateIoTCloudConnectorBackhaulRouteResponse>;
    /**
     * 获取单卡信息。
     */
    GetCard(query: GetCardRequest): Promise<GetCardResponse>;
    /**
     * 授权云连接器给第三方客户。
     */
    GrantNetLink(query: GrantNetLinkRequest): Promise<GrantNetLinkResponse>;
    /**
     * 主动撤销之前授权动作。
     */
    RevokeNetLink(query: RevokeNetLinkRequest): Promise<RevokeNetLinkResponse>;
    /**
     * 销卡。
     */
    FailCards(query: FailCardsRequest): Promise<FailCardsResponse>;
    /**
     * 查询单张物联网卡的网络诊断结果。
     */
    GetDiagnoseResultForSingleCard(query: GetDiagnoseResultForSingleCardRequest): Promise<GetDiagnoseResultForSingleCardResponse>;
    /**
     * 查询5G上云实例的历史诊断信息（不包含诊断结果）。
     */
    ListDiagnoseInfoForSingleCard(query: ListDiagnoseInfoForSingleCardRequest): Promise<ListDiagnoseInfoForSingleCardResponse>;
    /**
     * 发起单张物联网卡的网络诊断。
     */
    SubmitDiagnoseTaskForSingleCard(query: SubmitDiagnoseTaskForSingleCardRequest): Promise<SubmitDiagnoseTaskForSingleCardResponse>;
    /**
     * 修改cc5g实例分组信息。
     */
    UpdateWirelessCloudConnectorGroup(query: UpdateWirelessCloudConnectorGroupRequest): Promise<UpdateWirelessCloudConnectorGroupResponse>;
    /**
     * 修改实例组的DNS授权规则。
     */
    UpdateGroupDnsAuthorizationRule(query: UpdateGroupDnsAuthorizationRuleRequest): Promise<UpdateGroupDnsAuthorizationRuleResponse>;
    /**
     * 修改cc5g实例组的授权规则。
     */
    UpdateGroupAuthorizationRule(query: UpdateGroupAuthorizationRuleRequest): Promise<UpdateGroupAuthorizationRuleResponse>;
    /**
     * 查询cc5g实例分组。
     */
    ListWirelessCloudConnectorGroups(query: ListWirelessCloudConnectorGroupsRequest): Promise<ListWirelessCloudConnectorGroupsResponse>;
    /**
     * 从cc5g实例分组移除cc5g实例。
     */
    RemoveWirelessCloudConnectorFromGroup(query: RemoveWirelessCloudConnectorFromGroupRequest): Promise<RemoveWirelessCloudConnectorFromGroupResponse>;
    /**
     * 查询分组的授权规则列表。
     */
    ListGroupAuthorizationRules(query: ListGroupAuthorizationRulesRequest): Promise<ListGroupAuthorizationRulesResponse>;
    /**
     * 删除cc5g实例分组。
     */
    DeleteWirelessCloudConnectorGroup(query: DeleteWirelessCloudConnectorGroupRequest): Promise<DeleteWirelessCloudConnectorGroupResponse>;
    /**
     * 删除cc5g分组授权规则。
     */
    DeleteGroupAuthorizationRule(query: DeleteGroupAuthorizationRuleRequest): Promise<DeleteGroupAuthorizationRuleResponse>;
    /**
     * 创建cc5g实例分组。
     */
    CreateWirelessCloudConnectorGroup(query: CreateWirelessCloudConnectorGroupRequest): Promise<CreateWirelessCloudConnectorGroupResponse>;
    /**
     * 创建cc5g分组的授权规则。
     */
    CreateGroupAuthorizationRule(query: CreateGroupAuthorizationRuleRequest): Promise<CreateGroupAuthorizationRuleResponse>;
    /**
     * 给cc5g实例分组增加cc5g实例。
     */
    AddWirelessCloudConnectorToGroup(query: AddWirelessCloudConnectorToGroupRequest): Promise<AddWirelessCloudConnectorToGroupResponse>;
    /**
     * 实例组创建DNS授权规则。
     */
    AddGroupDnsAuthorizationRule(query: AddGroupDnsAuthorizationRuleRequest): Promise<AddGroupDnsAuthorizationRuleResponse>;
    /**
     * 查询物联网卡流量使用信息。
     */
    ListCardUsages(query: ListCardUsagesRequest): Promise<ListCardUsagesResponse>;
    /**
     * 换绑解锁单卡。
     */
    RebindCards(query: RebindCardsRequest): Promise<RebindCardsResponse>;
    /**
     * 查询单卡单日流量。
     */
    ListCardDayUsages(query: ListCardDayUsagesRequest): Promise<ListCardDayUsagesResponse>;
    /**
     * 物联网卡区域限制解锁
     */
    ResetAreaLimitCards(query: ResetAreaLimitCardsRequest): Promise<ResetAreaLimitCardsResponse>;
    /**
     * 查询卡区域解锁支持的省份。
     */
    ListCardAreaLimitSupportArea(query: ListCardAreaLimitSupportAreaRequest): Promise<ListCardAreaLimitSupportAreaResponse>;
}
export default CC5G;
