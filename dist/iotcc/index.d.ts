import { ListAuthorizationRulesRequest } from "./ListAuthorizationRules/req";
import { ListAuthorizationRulesResponse } from "./ListAuthorizationRules/res";
import { CreateServiceRequest } from "./CreateService/req";
import { CreateServiceResponse } from "./CreateService/res";
import { UpdateServiceEntryAttributeRequest } from "./UpdateServiceEntryAttribute/req";
import { UpdateServiceEntryAttributeResponse } from "./UpdateServiceEntryAttribute/res";
import { CreateAuthorizationRuleRequest } from "./CreateAuthorizationRule/req";
import { CreateAuthorizationRuleResponse } from "./CreateAuthorizationRule/res";
import { DeleteServiceRequest } from "./DeleteService/req";
import { DeleteServiceResponse } from "./DeleteService/res";
import { ListServiceRequest } from "./ListService/req";
import { ListServiceResponse } from "./ListService/res";
import { UpdateIoTCloudConnectorAttributeRequest } from "./UpdateIoTCloudConnectorAttribute/req";
import { UpdateIoTCloudConnectorAttributeResponse } from "./UpdateIoTCloudConnectorAttribute/res";
import { ListIoTCloudConnectorsRequest } from "./ListIoTCloudConnectors/req";
import { ListIoTCloudConnectorsResponse } from "./ListIoTCloudConnectors/res";
import { DisableIoTCloudConnectorAccessLogRequest } from "./DisableIoTCloudConnectorAccessLog/req";
import { DisableIoTCloudConnectorAccessLogResponse } from "./DisableIoTCloudConnectorAccessLog/res";
import { UpdateConnectionPoolAttributeRequest } from "./UpdateConnectionPoolAttribute/req";
import { UpdateConnectionPoolAttributeResponse } from "./UpdateConnectionPoolAttribute/res";
import { GetIoTCloudConnectorAccessLogRequest } from "./GetIoTCloudConnectorAccessLog/req";
import { GetIoTCloudConnectorAccessLogResponse } from "./GetIoTCloudConnectorAccessLog/res";
import { CreateIoTCloudConnectorRequest } from "./CreateIoTCloudConnector/req";
import { CreateIoTCloudConnectorResponse } from "./CreateIoTCloudConnector/res";
import { CreateConnectionPoolRequest } from "./CreateConnectionPool/req";
import { CreateConnectionPoolResponse } from "./CreateConnectionPool/res";
import { DeleteIoTCloudConnectorRequest } from "./DeleteIoTCloudConnector/req";
import { DeleteIoTCloudConnectorResponse } from "./DeleteIoTCloudConnector/res";
import { DeleteAuthorizationRuleRequest } from "./DeleteAuthorizationRule/req";
import { DeleteAuthorizationRuleResponse } from "./DeleteAuthorizationRule/res";
import { EnableIoTCloudConnectorAccessLogRequest } from "./EnableIoTCloudConnectorAccessLog/req";
import { EnableIoTCloudConnectorAccessLogResponse } from "./EnableIoTCloudConnectorAccessLog/res";
import { UpdateServiceAttributeRequest } from "./UpdateServiceAttribute/req";
import { UpdateServiceAttributeResponse } from "./UpdateServiceAttribute/res";
import { UpdateAuthorizationRuleAttributeRequest } from "./UpdateAuthorizationRuleAttribute/req";
import { UpdateAuthorizationRuleAttributeResponse } from "./UpdateAuthorizationRuleAttribute/res";
import { ListServiceEntriesRequest } from "./ListServiceEntries/req";
import { ListServiceEntriesResponse } from "./ListServiceEntries/res";
import { CreateServiceEntryRequest } from "./CreateServiceEntry/req";
import { CreateServiceEntryResponse } from "./CreateServiceEntry/res";
import { ListIoTCloudConnectorAvailableZonesRequest } from "./ListIoTCloudConnectorAvailableZones/req";
import { ListIoTCloudConnectorAvailableZonesResponse } from "./ListIoTCloudConnectorAvailableZones/res";
import { DissociateVSwitchFromIoTCloudConnectorRequest } from "./DissociateVSwitchFromIoTCloudConnector/req";
import { DissociateVSwitchFromIoTCloudConnectorResponse } from "./DissociateVSwitchFromIoTCloudConnector/res";
import { AssociateVSwitchWithIoTCloudConnectorRequest } from "./AssociateVSwitchWithIoTCloudConnector/req";
import { AssociateVSwitchWithIoTCloudConnectorResponse } from "./AssociateVSwitchWithIoTCloudConnector/res";
import { DeleteConnectionPoolRequest } from "./DeleteConnectionPool/req";
import { DeleteConnectionPoolResponse } from "./DeleteConnectionPool/res";
import { DeleteServiceEntryRequest } from "./DeleteServiceEntry/req";
import { DeleteServiceEntryResponse } from "./DeleteServiceEntry/res";
import { ListConnectionPoolsRequest } from "./ListConnectionPools/req";
import { ListConnectionPoolsResponse } from "./ListConnectionPools/res";
import { GrantVirtualBorderRouterRequest } from "./GrantVirtualBorderRouter/req";
import { GrantVirtualBorderRouterResponse } from "./GrantVirtualBorderRouter/res";
import { ListConnectionPoolIpsRequest } from "./ListConnectionPoolIps/req";
import { ListConnectionPoolIpsResponse } from "./ListConnectionPoolIps/res";
import { ListAPNsRequest } from "./ListAPNs/req";
import { ListAPNsResponse } from "./ListAPNs/res";
import { DissociateIpFromConnectionPoolRequest } from "./DissociateIpFromConnectionPool/req";
import { DissociateIpFromConnectionPoolResponse } from "./DissociateIpFromConnectionPool/res";
import { AssociateIpWithConnectionPoolRequest } from "./AssociateIpWithConnectionPool/req";
import { AssociateIpWithConnectionPoolResponse } from "./AssociateIpWithConnectionPool/res";
import { GetStsInfoAndOssPathRequest } from "./GetStsInfoAndOssPath/req";
import { GetStsInfoAndOssPathResponse } from "./GetStsInfoAndOssPath/res";
import { GetConnectionPoolIpOperationResultRequest } from "./GetConnectionPoolIpOperationResult/req";
import { GetConnectionPoolIpOperationResultResponse } from "./GetConnectionPoolIpOperationResult/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { OpenIoTCloudConnectorServiceRequest } from "./OpenIoTCloudConnectorService/req";
import { OpenIoTCloudConnectorServiceResponse } from "./OpenIoTCloudConnectorService/res";
import { AddIoTCloudConnectorToGroupRequest } from "./AddIoTCloudConnectorToGroup/req";
import { AddIoTCloudConnectorToGroupResponse } from "./AddIoTCloudConnectorToGroup/res";
import { CreateGroupAuthorizationRuleRequest } from "./CreateGroupAuthorizationRule/req";
import { CreateGroupAuthorizationRuleResponse } from "./CreateGroupAuthorizationRule/res";
import { CreateIoTCloudConnectorGroupRequest } from "./CreateIoTCloudConnectorGroup/req";
import { CreateIoTCloudConnectorGroupResponse } from "./CreateIoTCloudConnectorGroup/res";
import { DeleteGroupAuthorizationRuleRequest } from "./DeleteGroupAuthorizationRule/req";
import { DeleteGroupAuthorizationRuleResponse } from "./DeleteGroupAuthorizationRule/res";
import { DeleteIoTCloudConnectorGroupRequest } from "./DeleteIoTCloudConnectorGroup/req";
import { DeleteIoTCloudConnectorGroupResponse } from "./DeleteIoTCloudConnectorGroup/res";
import { ListIoTCloudConnectorGroupsRequest } from "./ListIoTCloudConnectorGroups/req";
import { ListIoTCloudConnectorGroupsResponse } from "./ListIoTCloudConnectorGroups/res";
import { RemoveIoTCloudConnectorFromGroupRequest } from "./RemoveIoTCloudConnectorFromGroup/req";
import { RemoveIoTCloudConnectorFromGroupResponse } from "./RemoveIoTCloudConnectorFromGroup/res";
import { UpdateGroupAuthorizationRuleAttributeRequest } from "./UpdateGroupAuthorizationRuleAttribute/req";
import { UpdateGroupAuthorizationRuleAttributeResponse } from "./UpdateGroupAuthorizationRuleAttribute/res";
import { UpdateIoTCloudConnectorGroupAttributeRequest } from "./UpdateIoTCloudConnectorGroupAttribute/req";
import { UpdateIoTCloudConnectorGroupAttributeResponse } from "./UpdateIoTCloudConnectorGroupAttribute/res";
import { ListGroupAuthorizationRulesRequest } from "./ListGroupAuthorizationRules/req";
import { ListGroupAuthorizationRulesResponse } from "./ListGroupAuthorizationRules/res";
import { ListConnectionPoolAllIpsRequest } from "./ListConnectionPoolAllIps/req";
import { ListConnectionPoolAllIpsResponse } from "./ListConnectionPoolAllIps/res";
import { AddCidrToConnectionPoolRequest } from "./AddCidrToConnectionPool/req";
import { AddCidrToConnectionPoolResponse } from "./AddCidrToConnectionPool/res";
import { SubmitDiagnoseTaskForSingleCardRequest } from "./SubmitDiagnoseTaskForSingleCard/req";
import { SubmitDiagnoseTaskForSingleCardResponse } from "./SubmitDiagnoseTaskForSingleCard/res";
import { ListDiagnoseInfoForSingleCardRequest } from "./ListDiagnoseInfoForSingleCard/req";
import { ListDiagnoseInfoForSingleCardResponse } from "./ListDiagnoseInfoForSingleCard/res";
import { GetDiagnoseResultForSingleCardRequest } from "./GetDiagnoseResultForSingleCard/req";
import { GetDiagnoseResultForSingleCardResponse } from "./GetDiagnoseResultForSingleCard/res";
import { ListGroupDNSServiceRulesRequest } from "./ListGroupDNSServiceRules/req";
import { ListGroupDNSServiceRulesResponse } from "./ListGroupDNSServiceRules/res";
import { DeleteDNSServiceRuleRequest } from "./DeleteDNSServiceRule/req";
import { DeleteDNSServiceRuleResponse } from "./DeleteDNSServiceRule/res";
import { CreateGroupDNSServiceRuleRequest } from "./CreateGroupDNSServiceRule/req";
import { CreateGroupDNSServiceRuleResponse } from "./CreateGroupDNSServiceRule/res";
import { UpdateGroupDNSServiceRuleAttributeRequest } from "./UpdateGroupDNSServiceRuleAttribute/req";
import { UpdateGroupDNSServiceRuleAttributeResponse } from "./UpdateGroupDNSServiceRuleAttribute/res";
import { ListDNSServiceRulesRequest } from "./ListDNSServiceRules/req";
import { ListDNSServiceRulesResponse } from "./ListDNSServiceRules/res";
import { MoveAuthorizationRuleToDNSServiceRequest } from "./MoveAuthorizationRuleToDNSService/req";
import { MoveAuthorizationRuleToDNSServiceResponse } from "./MoveAuthorizationRuleToDNSService/res";
import { DeleteGroupDNSServiceRuleRequest } from "./DeleteGroupDNSServiceRule/req";
import { DeleteGroupDNSServiceRuleResponse } from "./DeleteGroupDNSServiceRule/res";
import { UpdateDNSServiceRuleAttributeRequest } from "./UpdateDNSServiceRuleAttribute/req";
import { UpdateDNSServiceRuleAttributeResponse } from "./UpdateDNSServiceRuleAttribute/res";
import { MoveGroupAuthorizationRuleToDNSServiceRequest } from "./MoveGroupAuthorizationRuleToDNSService/req";
import { MoveGroupAuthorizationRuleToDNSServiceResponse } from "./MoveGroupAuthorizationRuleToDNSService/res";
import { CreateDNSServiceRuleRequest } from "./CreateDNSServiceRule/req";
import { CreateDNSServiceRuleResponse } from "./CreateDNSServiceRule/res";
import { CreateIoTCloudConnectorBackhaulRouteRequest } from "./CreateIoTCloudConnectorBackhaulRoute/req";
import { CreateIoTCloudConnectorBackhaulRouteResponse } from "./CreateIoTCloudConnectorBackhaulRoute/res";
import { ListIoTCoudConnectorBackhaulRouteRequest } from "./ListIoTCoudConnectorBackhaulRoute/req";
import { ListIoTCoudConnectorBackhaulRouteResponse } from "./ListIoTCoudConnectorBackhaulRoute/res";
import { DeleteIoTCloudConnetorBackhaulRouteRequest } from "./DeleteIoTCloudConnetorBackhaulRoute/req";
import { DeleteIoTCloudConnetorBackhaulRouteResponse } from "./DeleteIoTCloudConnetorBackhaulRoute/res";
import { ListIoTCloudConnectorEIPsRequest } from "./ListIoTCloudConnectorEIPs/req";
import { ListIoTCloudConnectorEIPsResponse } from "./ListIoTCloudConnectorEIPs/res";
import { CreateAuthorizationRulesRequest } from "./CreateAuthorizationRules/req";
import { CreateAuthorizationRulesResponse } from "./CreateAuthorizationRules/res";
import { CreateIpMappingRuleRequest } from "./CreateIpMappingRule/req";
import { CreateIpMappingRuleResponse } from "./CreateIpMappingRule/res";
import { ListIpMappingRulesRequest } from "./ListIpMappingRules/req";
import { ListIpMappingRulesResponse } from "./ListIpMappingRules/res";
import { DeleteIpMappingRuleRequest } from "./DeleteIpMappingRule/req";
import { DeleteIpMappingRuleResponse } from "./DeleteIpMappingRule/res";
import { DeleteGroupIpMappingRuleRequest } from "./DeleteGroupIpMappingRule/req";
import { DeleteGroupIpMappingRuleResponse } from "./DeleteGroupIpMappingRule/res";
import { ListGroupIpMappingRulesRequest } from "./ListGroupIpMappingRules/req";
import { ListGroupIpMappingRulesResponse } from "./ListGroupIpMappingRules/res";
import { CreateGroupIpMappingRuleRequest } from "./CreateGroupIpMappingRule/req";
import { CreateGroupIpMappingRuleResponse } from "./CreateGroupIpMappingRule/res";
import { UpdateGroupIpMappingRuleRequest } from "./UpdateGroupIpMappingRule/req";
import { UpdateGroupIpMappingRuleResponse } from "./UpdateGroupIpMappingRule/res";
import { UpdateIpMappingRuleRequest } from "./UpdateIpMappingRule/req";
import { UpdateIpMappingRuleResponse } from "./UpdateIpMappingRule/res";
import { ConfirmIoTCloudConnectorRequest } from "./ConfirmIoTCloudConnector/req";
import { ConfirmIoTCloudConnectorResponse } from "./ConfirmIoTCloudConnector/res";
import { RevertIoTCloudConnectorRequest } from "./RevertIoTCloudConnector/req";
import { RevertIoTCloudConnectorResponse } from "./RevertIoTCloudConnector/res";
import { DeleteAuthorizationRulesRequest } from "./DeleteAuthorizationRules/req";
import { DeleteAuthorizationRulesResponse } from "./DeleteAuthorizationRules/res";

interface IOTCC {
    /**
     * 查询授权规则信息。
     */
    ListAuthorizationRules(query: ListAuthorizationRulesRequest): Promise<ListAuthorizationRulesResponse>;
    /**
     * 创建分应用统计服务。
     */
    CreateService(query: CreateServiceRequest): Promise<CreateServiceResponse>;
    /**
     * 修改分应用统计服务列表中的应用条目。
     */
    UpdateServiceEntryAttribute(query: UpdateServiceEntryAttributeRequest): Promise<UpdateServiceEntryAttributeResponse>;
    /**
     * 创建授权规则。
     */
    CreateAuthorizationRule(query: CreateAuthorizationRuleRequest): Promise<CreateAuthorizationRuleResponse>;
    /**
     * 删除分应用统计服务。
     */
    DeleteService(query: DeleteServiceRequest): Promise<DeleteServiceResponse>;
    /**
     * 查询分应用统计服务。
     */
    ListService(query: ListServiceRequest): Promise<ListServiceResponse>;
    /**
     * 更新云连接器实例信息。
     */
    UpdateIoTCloudConnectorAttribute(query: UpdateIoTCloudConnectorAttributeRequest): Promise<UpdateIoTCloudConnectorAttributeResponse>;
    /**
     * 查询云连接器实例信息。
     */
    ListIoTCloudConnectors(query: ListIoTCloudConnectorsRequest): Promise<ListIoTCloudConnectorsResponse>;
    /**
     * 关闭访问日志功能。
     */
    DisableIoTCloudConnectorAccessLog(query: DisableIoTCloudConnectorAccessLogRequest): Promise<DisableIoTCloudConnectorAccessLogResponse>;
    /**
     * 更新连接地址池。
     */
    UpdateConnectionPoolAttribute(query: UpdateConnectionPoolAttributeRequest): Promise<UpdateConnectionPoolAttributeResponse>;
    /**
     * 获取指定云连接器访问日志状态信息。
     */
    GetIoTCloudConnectorAccessLog(query: GetIoTCloudConnectorAccessLogRequest): Promise<GetIoTCloudConnectorAccessLogResponse>;
    /**
     * 创建云连接器实例。
     */
    CreateIoTCloudConnector(query: CreateIoTCloudConnectorRequest): Promise<CreateIoTCloudConnectorResponse>;
    /**
     * 创建连接地址池。
     */
    CreateConnectionPool(query: CreateConnectionPoolRequest): Promise<CreateConnectionPoolResponse>;
    /**
     * 删除云连接器实例。
     */
    DeleteIoTCloudConnector(query: DeleteIoTCloudConnectorRequest): Promise<DeleteIoTCloudConnectorResponse>;
    /**
     * 删除授权规则。
     */
    DeleteAuthorizationRule(query: DeleteAuthorizationRuleRequest): Promise<DeleteAuthorizationRuleResponse>;
    /**
     * 指定云连接器开启访问日志功能。
     */
    EnableIoTCloudConnectorAccessLog(query: EnableIoTCloudConnectorAccessLogRequest): Promise<EnableIoTCloudConnectorAccessLogResponse>;
    /**
     * 修改分应用统计服务。
     */
    UpdateServiceAttribute(query: UpdateServiceAttributeRequest): Promise<UpdateServiceAttributeResponse>;
    /**
     * 更新授权规则信息。
     */
    UpdateAuthorizationRuleAttribute(query: UpdateAuthorizationRuleAttributeRequest): Promise<UpdateAuthorizationRuleAttributeResponse>;
    /**
     * 查询分应用统计条目。
     */
    ListServiceEntries(query: ListServiceEntriesRequest): Promise<ListServiceEntriesResponse>;
    /**
     * 分应用统计服务列表中添加应用条目。
     */
    CreateServiceEntry(query: CreateServiceEntryRequest): Promise<CreateServiceEntryResponse>;
    /**
     * 查询支持云连接器实例绑定交换机的可用区。
     */
    ListIoTCloudConnectorAvailableZones(query: ListIoTCloudConnectorAvailableZonesRequest): Promise<ListIoTCloudConnectorAvailableZonesResponse>;
    /**
     * 将交换机与云连接器实例解关联。
     */
    DissociateVSwitchFromIoTCloudConnector(query: DissociateVSwitchFromIoTCloudConnectorRequest): Promise<DissociateVSwitchFromIoTCloudConnectorResponse>;
    /**
     * 将交换机与云连接器实例进行关联。
     */
    AssociateVSwitchWithIoTCloudConnector(query: AssociateVSwitchWithIoTCloudConnectorRequest): Promise<AssociateVSwitchWithIoTCloudConnectorResponse>;
    /**
     * 删除连接地址池。
     */
    DeleteConnectionPool(query: DeleteConnectionPoolRequest): Promise<DeleteConnectionPoolResponse>;
    /**
     * 删除分应用统计条目。
     */
    DeleteServiceEntry(query: DeleteServiceEntryRequest): Promise<DeleteServiceEntryResponse>;
    /**
     * 查询云连接地址池。
     */
    ListConnectionPools(query: ListConnectionPoolsRequest): Promise<ListConnectionPoolsResponse>;
    /**
     * 获取边界路由器VBR的服务关联角色SLR权限。
     */
    GrantVirtualBorderRouter(query: GrantVirtualBorderRouterRequest): Promise<GrantVirtualBorderRouterResponse>;
    /**
     * 查询连接地址池中的IP地址状态信息。
     */
    ListConnectionPoolIps(query: ListConnectionPoolIpsRequest): Promise<ListConnectionPoolIpsResponse>;
    /**
     * 查询云连接器实例支持的APN列表。
     */
    ListAPNs(query: ListAPNsRequest): Promise<ListAPNsResponse>;
    /**
     * 解除IP地址与云连接器关联的连接地址池的绑定关系。
     */
    DissociateIpFromConnectionPool(query: DissociateIpFromConnectionPoolRequest): Promise<DissociateIpFromConnectionPoolResponse>;
    /**
     * 绑定某个已存在的IP访问控制。
     */
    AssociateIpWithConnectionPool(query: AssociateIpWithConnectionPoolRequest): Promise<AssociateIpWithConnectionPoolResponse>;
    /**
     * 获取服务账号STS信息和模板文件临时提交地址。
     */
    GetStsInfoAndOssPath(query: GetStsInfoAndOssPathRequest): Promise<GetStsInfoAndOssPathResponse>;
    /**
     * 获取IP地址与连接地址池绑定与解绑的操作结果。
     */
    GetConnectionPoolIpOperationResult(query: GetConnectionPoolIpOperationResultRequest): Promise<GetConnectionPoolIpOperationResultResponse>;
    /**
     * 查询云连接器支持的地域列表。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 开通云连接器服务。
     */
    OpenIoTCloudConnectorService(query: OpenIoTCloudConnectorServiceRequest): Promise<OpenIoTCloudConnectorServiceResponse>;
    /**
     * 为实例组添加云连接器实例。
     */
    AddIoTCloudConnectorToGroup(query: AddIoTCloudConnectorToGroupRequest): Promise<AddIoTCloudConnectorToGroupResponse>;
    /**
     * 实例组创建授权规则。
     */
    CreateGroupAuthorizationRule(query: CreateGroupAuthorizationRuleRequest): Promise<CreateGroupAuthorizationRuleResponse>;
    /**
     * 创建实例组。
     */
    CreateIoTCloudConnectorGroup(query: CreateIoTCloudConnectorGroupRequest): Promise<CreateIoTCloudConnectorGroupResponse>;
    /**
     * 删除实例组的授权规则。
     */
    DeleteGroupAuthorizationRule(query: DeleteGroupAuthorizationRuleRequest): Promise<DeleteGroupAuthorizationRuleResponse>;
    /**
     * 删除实例组。
     */
    DeleteIoTCloudConnectorGroup(query: DeleteIoTCloudConnectorGroupRequest): Promise<DeleteIoTCloudConnectorGroupResponse>;
    /**
     * 查询实例组列表信息。
     */
    ListIoTCloudConnectorGroups(query: ListIoTCloudConnectorGroupsRequest): Promise<ListIoTCloudConnectorGroupsResponse>;
    /**
     * 将云连接器实例从实例组中移除。
     */
    RemoveIoTCloudConnectorFromGroup(query: RemoveIoTCloudConnectorFromGroupRequest): Promise<RemoveIoTCloudConnectorFromGroupResponse>;
    /**
     * 修改实例组的授权规则。
     */
    UpdateGroupAuthorizationRuleAttribute(query: UpdateGroupAuthorizationRuleAttributeRequest): Promise<UpdateGroupAuthorizationRuleAttributeResponse>;
    /**
     * 修改云连接器分组属性。
     */
    UpdateIoTCloudConnectorGroupAttribute(query: UpdateIoTCloudConnectorGroupAttributeRequest): Promise<UpdateIoTCloudConnectorGroupAttributeResponse>;
    /**
     * 查询实例组的授权规则信息。
     */
    ListGroupAuthorizationRules(query: ListGroupAuthorizationRulesRequest): Promise<ListGroupAuthorizationRulesResponse>;
    /**
     * 查询连接地址池所有IP地址信息。
     */
    ListConnectionPoolAllIps(query: ListConnectionPoolAllIpsRequest): Promise<ListConnectionPoolAllIpsResponse>;
    /**
     * 连接池增加连接IP段，主要用于动态IP增加IP方式，区别于单个卡IP添加方式。
     */
    AddCidrToConnectionPool(query: AddCidrToConnectionPoolRequest): Promise<AddCidrToConnectionPoolResponse>;
    /**
     * 提交单卡诊断任务。
     */
    SubmitDiagnoseTaskForSingleCard(query: SubmitDiagnoseTaskForSingleCardRequest): Promise<SubmitDiagnoseTaskForSingleCardResponse>;
    /**
     * 查询单卡诊断的诊断结果信息。
     */
    ListDiagnoseInfoForSingleCard(query: ListDiagnoseInfoForSingleCardRequest): Promise<ListDiagnoseInfoForSingleCardResponse>;
    /**
     * 获取单卡诊断结果。
     */
    GetDiagnoseResultForSingleCard(query: GetDiagnoseResultForSingleCardRequest): Promise<GetDiagnoseResultForSingleCardResponse>;
    /**
     * 查询实例组的DNS授权规则。
     */
    ListGroupDNSServiceRules(query: ListGroupDNSServiceRulesRequest): Promise<ListGroupDNSServiceRulesResponse>;
    /**
     * 删除DNS授权规则。
     */
    DeleteDNSServiceRule(query: DeleteDNSServiceRuleRequest): Promise<DeleteDNSServiceRuleResponse>;
    /**
     * 实例组创建DNS授权规则。
     */
    CreateGroupDNSServiceRule(query: CreateGroupDNSServiceRuleRequest): Promise<CreateGroupDNSServiceRuleResponse>;
    /**
     * 修改实例组的DNS授权规则。
     */
    UpdateGroupDNSServiceRuleAttribute(query: UpdateGroupDNSServiceRuleAttributeRequest): Promise<UpdateGroupDNSServiceRuleAttributeResponse>;
    /**
     * 查询DNS授权规则。
     */
    ListDNSServiceRules(query: ListDNSServiceRulesRequest): Promise<ListDNSServiceRulesResponse>;
    /**
     * 将授权规则转移到DNS授权规则中。
     */
    MoveAuthorizationRuleToDNSService(query: MoveAuthorizationRuleToDNSServiceRequest): Promise<MoveAuthorizationRuleToDNSServiceResponse>;
    /**
     * 删除实例组的DNS授权规则。
     */
    DeleteGroupDNSServiceRule(query: DeleteGroupDNSServiceRuleRequest): Promise<DeleteGroupDNSServiceRuleResponse>;
    /**
     * 修改DNS授权规则。
     */
    UpdateDNSServiceRuleAttribute(query: UpdateDNSServiceRuleAttributeRequest): Promise<UpdateDNSServiceRuleAttributeResponse>;
    /**
     * 将实例组的授权规则转移到DNS授权规则中。
     */
    MoveGroupAuthorizationRuleToDNSService(query: MoveGroupAuthorizationRuleToDNSServiceRequest): Promise<MoveGroupAuthorizationRuleToDNSServiceResponse>;
    /**
     * 创建DNS授权规则。
     */
    CreateDNSServiceRule(query: CreateDNSServiceRuleRequest): Promise<CreateDNSServiceRuleResponse>;
    /**
     * 调用CreateIoTCloudConnectorBackhaulRoute接口创建当前云连接器实例绑定VPC后的回程路由。
     */
    CreateIoTCloudConnectorBackhaulRoute(query: CreateIoTCloudConnectorBackhaulRouteRequest): Promise<CreateIoTCloudConnectorBackhaulRouteResponse>;
    /**
     * 调用ListIoTCoudConnectorBackhaulRoute接口查询当前云连接器实例绑定VPC后的回程路由。
     */
    ListIoTCoudConnectorBackhaulRoute(query: ListIoTCoudConnectorBackhaulRouteRequest): Promise<ListIoTCoudConnectorBackhaulRouteResponse>;
    /**
     * 调用DeleteIoTCloudConnetorBackhaulRoute接口删除当前云连接器实例绑定VPC后的回程路由。
     */
    DeleteIoTCloudConnetorBackhaulRoute(query: DeleteIoTCloudConnetorBackhaulRouteRequest): Promise<DeleteIoTCloudConnetorBackhaulRouteResponse>;
    /**
     * 调用ListIoTCloudConnectorEIPs接口查询云连接器实例关联的弹性公网IP列表。
     */
    ListIoTCloudConnectorEIPs(query: ListIoTCloudConnectorEIPsRequest): Promise<ListIoTCloudConnectorEIPsResponse>;
    /**
     * 调用CreateAuthorizationRules接口创建多条授权规则。
     */
    CreateAuthorizationRules(query: CreateAuthorizationRulesRequest): Promise<CreateAuthorizationRulesResponse>;
    /**
     * 调用CreateIpMappingRule接口创建授权规则IP的重定向功能。
     */
    CreateIpMappingRule(query: CreateIpMappingRuleRequest): Promise<CreateIpMappingRuleResponse>;
    /**
     * 调用ListIpMappingRules接口查询授权规则IP重定向信息。
     */
    ListIpMappingRules(query: ListIpMappingRulesRequest): Promise<ListIpMappingRulesResponse>;
    /**
     * 调用DeleteIpMappingRule接口删除授权规则IP重定向信息。
     */
    DeleteIpMappingRule(query: DeleteIpMappingRuleRequest): Promise<DeleteIpMappingRuleResponse>;
    /**
     * 调用DeleteGroupIpMappingRule接口删除实例组授权规则IP重定向信息。
     */
    DeleteGroupIpMappingRule(query: DeleteGroupIpMappingRuleRequest): Promise<DeleteGroupIpMappingRuleResponse>;
    /**
     * 调用ListGroupIpMappingRules接口查询实例组授权规则IP重定向信息。
     */
    ListGroupIpMappingRules(query: ListGroupIpMappingRulesRequest): Promise<ListGroupIpMappingRulesResponse>;
    /**
     * 调用CreateGroupIpMappingRule接口创建实例组授权规则IP的重定向规则。
     */
    CreateGroupIpMappingRule(query: CreateGroupIpMappingRuleRequest): Promise<CreateGroupIpMappingRuleResponse>;
    /**
     * 调用UpdateGroupIpMappingRule接口修改实例组授权规则IP重定向的相关信息。
     */
    UpdateGroupIpMappingRule(query: UpdateGroupIpMappingRuleRequest): Promise<UpdateGroupIpMappingRuleResponse>;
    /**
     * 调用UpdateIpMappingRule接口修改授权规则IP重定向的相关信息。
     */
    UpdateIpMappingRule(query: UpdateIpMappingRuleRequest): Promise<UpdateIpMappingRuleResponse>;
    /**
     * 调用ConfirmIoTCloudConnector接口确认或拒绝云连接器实例过户。
     */
    ConfirmIoTCloudConnector(query: ConfirmIoTCloudConnectorRequest): Promise<ConfirmIoTCloudConnectorResponse>;
    /**
     * 调用RevertIoTCloudConnector接口归还已拒绝过户的云连接器实例。
     */
    RevertIoTCloudConnector(query: RevertIoTCloudConnectorRequest): Promise<RevertIoTCloudConnectorResponse>;
    /**
     * 批量删除授权规则。
     */
    DeleteAuthorizationRules(query: DeleteAuthorizationRulesRequest): Promise<DeleteAuthorizationRulesResponse>;
}
export default IOTCC;
