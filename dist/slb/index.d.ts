import { AddAccessControlListEntryRequest } from "./AddAccessControlListEntry/req";
import { AddAccessControlListEntryResponse } from "./AddAccessControlListEntry/res";
import { AddBackendServersRequest } from "./AddBackendServers/req";
import { AddBackendServersResponse } from "./AddBackendServers/res";
import { AddTagsRequest } from "./AddTags/req";
import { AddTagsResponse } from "./AddTags/res";
import { AddListenerWhiteListItemRequest } from "./AddListenerWhiteListItem/req";
import { AddListenerWhiteListItemResponse } from "./AddListenerWhiteListItem/res";
import { AddVServerGroupBackendServersRequest } from "./AddVServerGroupBackendServers/req";
import { AddVServerGroupBackendServersResponse } from "./AddVServerGroupBackendServers/res";
import { CreateAccessControlListRequest } from "./CreateAccessControlList/req";
import { CreateAccessControlListResponse } from "./CreateAccessControlList/res";
import { CreateDomainExtensionRequest } from "./CreateDomainExtension/req";
import { CreateDomainExtensionResponse } from "./CreateDomainExtension/res";
import { CreateLoadBalancerRequest } from "./CreateLoadBalancer/req";
import { CreateLoadBalancerResponse } from "./CreateLoadBalancer/res";
import { CreateLoadBalancerHTTPListenerRequest } from "./CreateLoadBalancerHTTPListener/req";
import { CreateLoadBalancerHTTPListenerResponse } from "./CreateLoadBalancerHTTPListener/res";
import { CreateLoadBalancerHTTPSListenerRequest } from "./CreateLoadBalancerHTTPSListener/req";
import { CreateLoadBalancerHTTPSListenerResponse } from "./CreateLoadBalancerHTTPSListener/res";
import { CreateLoadBalancerTCPListenerRequest } from "./CreateLoadBalancerTCPListener/req";
import { CreateLoadBalancerTCPListenerResponse } from "./CreateLoadBalancerTCPListener/res";
import { CreateLoadBalancerUDPListenerRequest } from "./CreateLoadBalancerUDPListener/req";
import { CreateLoadBalancerUDPListenerResponse } from "./CreateLoadBalancerUDPListener/res";
import { CreateMasterSlaveServerGroupRequest } from "./CreateMasterSlaveServerGroup/req";
import { CreateMasterSlaveServerGroupResponse } from "./CreateMasterSlaveServerGroup/res";
import { CreateRulesRequest } from "./CreateRules/req";
import { CreateRulesResponse } from "./CreateRules/res";
import { CreateTLSCipherPolicyRequest } from "./CreateTLSCipherPolicy/req";
import { CreateTLSCipherPolicyResponse } from "./CreateTLSCipherPolicy/res";
import { CreateVServerGroupRequest } from "./CreateVServerGroup/req";
import { CreateVServerGroupResponse } from "./CreateVServerGroup/res";
import { DeleteAccessControlListRequest } from "./DeleteAccessControlList/req";
import { DeleteAccessControlListResponse } from "./DeleteAccessControlList/res";
import { DeleteCACertificateRequest } from "./DeleteCACertificate/req";
import { DeleteCACertificateResponse } from "./DeleteCACertificate/res";
import { DeleteDomainExtensionRequest } from "./DeleteDomainExtension/req";
import { DeleteDomainExtensionResponse } from "./DeleteDomainExtension/res";
import { DeleteLoadBalancerRequest } from "./DeleteLoadBalancer/req";
import { DeleteLoadBalancerResponse } from "./DeleteLoadBalancer/res";
import { DeleteLoadBalancerListenerRequest } from "./DeleteLoadBalancerListener/req";
import { DeleteLoadBalancerListenerResponse } from "./DeleteLoadBalancerListener/res";
import { DeleteMasterSlaveServerGroupRequest } from "./DeleteMasterSlaveServerGroup/req";
import { DeleteMasterSlaveServerGroupResponse } from "./DeleteMasterSlaveServerGroup/res";
import { DeleteRulesRequest } from "./DeleteRules/req";
import { DeleteRulesResponse } from "./DeleteRules/res";
import { DeleteServerCertificateRequest } from "./DeleteServerCertificate/req";
import { DeleteServerCertificateResponse } from "./DeleteServerCertificate/res";
import { DeleteTLSCipherPolicyRequest } from "./DeleteTLSCipherPolicy/req";
import { DeleteTLSCipherPolicyResponse } from "./DeleteTLSCipherPolicy/res";
import { DeleteVServerGroupRequest } from "./DeleteVServerGroup/req";
import { DeleteVServerGroupResponse } from "./DeleteVServerGroup/res";
import { DescribeAccessControlListAttributeRequest } from "./DescribeAccessControlListAttribute/req";
import { DescribeAccessControlListAttributeResponse } from "./DescribeAccessControlListAttribute/res";
import { DescribeAccessControlListsRequest } from "./DescribeAccessControlLists/req";
import { DescribeAccessControlListsResponse } from "./DescribeAccessControlLists/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { DescribeCACertificatesRequest } from "./DescribeCACertificates/req";
import { DescribeCACertificatesResponse } from "./DescribeCACertificates/res";
import { DescribeDomainExtensionAttributeRequest } from "./DescribeDomainExtensionAttribute/req";
import { DescribeDomainExtensionAttributeResponse } from "./DescribeDomainExtensionAttribute/res";
import { DescribeDomainExtensionsRequest } from "./DescribeDomainExtensions/req";
import { DescribeDomainExtensionsResponse } from "./DescribeDomainExtensions/res";
import { DescribeHealthStatusRequest } from "./DescribeHealthStatus/req";
import { DescribeHealthStatusResponse } from "./DescribeHealthStatus/res";
import { DescribeListenerAccessControlAttributeRequest } from "./DescribeListenerAccessControlAttribute/req";
import { DescribeListenerAccessControlAttributeResponse } from "./DescribeListenerAccessControlAttribute/res";
import { DescribeLoadBalancerAttributeRequest } from "./DescribeLoadBalancerAttribute/req";
import { DescribeLoadBalancerAttributeResponse } from "./DescribeLoadBalancerAttribute/res";
import { DescribeLoadBalancerHTTPListenerAttributeRequest } from "./DescribeLoadBalancerHTTPListenerAttribute/req";
import { DescribeLoadBalancerHTTPListenerAttributeResponse } from "./DescribeLoadBalancerHTTPListenerAttribute/res";
import { DescribeLoadBalancerHTTPSListenerAttributeRequest } from "./DescribeLoadBalancerHTTPSListenerAttribute/req";
import { DescribeLoadBalancerHTTPSListenerAttributeResponse } from "./DescribeLoadBalancerHTTPSListenerAttribute/res";
import { DescribeLoadBalancerTCPListenerAttributeRequest } from "./DescribeLoadBalancerTCPListenerAttribute/req";
import { DescribeLoadBalancerTCPListenerAttributeResponse } from "./DescribeLoadBalancerTCPListenerAttribute/res";
import { DescribeLoadBalancerUDPListenerAttributeRequest } from "./DescribeLoadBalancerUDPListenerAttribute/req";
import { DescribeLoadBalancerUDPListenerAttributeResponse } from "./DescribeLoadBalancerUDPListenerAttribute/res";
import { DescribeMasterSlaveServerGroupAttributeRequest } from "./DescribeMasterSlaveServerGroupAttribute/req";
import { DescribeMasterSlaveServerGroupAttributeResponse } from "./DescribeMasterSlaveServerGroupAttribute/res";
import { DescribeLoadBalancersRequest } from "./DescribeLoadBalancers/req";
import { DescribeLoadBalancersResponse } from "./DescribeLoadBalancers/res";
import { DescribeMasterSlaveServerGroupsRequest } from "./DescribeMasterSlaveServerGroups/req";
import { DescribeMasterSlaveServerGroupsResponse } from "./DescribeMasterSlaveServerGroups/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeRuleAttributeRequest } from "./DescribeRuleAttribute/req";
import { DescribeRuleAttributeResponse } from "./DescribeRuleAttribute/res";
import { DescribeRulesRequest } from "./DescribeRules/req";
import { DescribeRulesResponse } from "./DescribeRules/res";
import { DescribeServerCertificatesRequest } from "./DescribeServerCertificates/req";
import { DescribeServerCertificatesResponse } from "./DescribeServerCertificates/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { DescribeVServerGroupAttributeRequest } from "./DescribeVServerGroupAttribute/req";
import { DescribeVServerGroupAttributeResponse } from "./DescribeVServerGroupAttribute/res";
import { DescribeVServerGroupsRequest } from "./DescribeVServerGroups/req";
import { DescribeVServerGroupsResponse } from "./DescribeVServerGroups/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { ListTLSCipherPoliciesRequest } from "./ListTLSCipherPolicies/req";
import { ListTLSCipherPoliciesResponse } from "./ListTLSCipherPolicies/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ModifyLoadBalancerInstanceSpecRequest } from "./ModifyLoadBalancerInstanceSpec/req";
import { ModifyLoadBalancerInstanceSpecResponse } from "./ModifyLoadBalancerInstanceSpec/res";
import { ModifyLoadBalancerInternetSpecRequest } from "./ModifyLoadBalancerInternetSpec/req";
import { ModifyLoadBalancerInternetSpecResponse } from "./ModifyLoadBalancerInternetSpec/res";
import { ModifyLoadBalancerPayTypeRequest } from "./ModifyLoadBalancerPayType/req";
import { ModifyLoadBalancerPayTypeResponse } from "./ModifyLoadBalancerPayType/res";
import { ModifyVServerGroupBackendServersRequest } from "./ModifyVServerGroupBackendServers/req";
import { ModifyVServerGroupBackendServersResponse } from "./ModifyVServerGroupBackendServers/res";
import { RemoveAccessControlListEntryRequest } from "./RemoveAccessControlListEntry/req";
import { RemoveAccessControlListEntryResponse } from "./RemoveAccessControlListEntry/res";
import { RemoveBackendServersRequest } from "./RemoveBackendServers/req";
import { RemoveBackendServersResponse } from "./RemoveBackendServers/res";
import { RemoveListenerWhiteListItemRequest } from "./RemoveListenerWhiteListItem/req";
import { RemoveListenerWhiteListItemResponse } from "./RemoveListenerWhiteListItem/res";
import { RemoveTagsRequest } from "./RemoveTags/req";
import { RemoveTagsResponse } from "./RemoveTags/res";
import { RemoveVServerGroupBackendServersRequest } from "./RemoveVServerGroupBackendServers/req";
import { RemoveVServerGroupBackendServersResponse } from "./RemoveVServerGroupBackendServers/res";
import { SetAccessControlListAttributeRequest } from "./SetAccessControlListAttribute/req";
import { SetAccessControlListAttributeResponse } from "./SetAccessControlListAttribute/res";
import { SetBackendServersRequest } from "./SetBackendServers/req";
import { SetBackendServersResponse } from "./SetBackendServers/res";
import { SetCACertificateNameRequest } from "./SetCACertificateName/req";
import { SetCACertificateNameResponse } from "./SetCACertificateName/res";
import { SetDomainExtensionAttributeRequest } from "./SetDomainExtensionAttribute/req";
import { SetDomainExtensionAttributeResponse } from "./SetDomainExtensionAttribute/res";
import { SetListenerAccessControlStatusRequest } from "./SetListenerAccessControlStatus/req";
import { SetListenerAccessControlStatusResponse } from "./SetListenerAccessControlStatus/res";
import { SetLoadBalancerDeleteProtectionRequest } from "./SetLoadBalancerDeleteProtection/req";
import { SetLoadBalancerDeleteProtectionResponse } from "./SetLoadBalancerDeleteProtection/res";
import { SetLoadBalancerHTTPListenerAttributeRequest } from "./SetLoadBalancerHTTPListenerAttribute/req";
import { SetLoadBalancerHTTPListenerAttributeResponse } from "./SetLoadBalancerHTTPListenerAttribute/res";
import { SetLoadBalancerModificationProtectionRequest } from "./SetLoadBalancerModificationProtection/req";
import { SetLoadBalancerModificationProtectionResponse } from "./SetLoadBalancerModificationProtection/res";
import { SetLoadBalancerNameRequest } from "./SetLoadBalancerName/req";
import { SetLoadBalancerNameResponse } from "./SetLoadBalancerName/res";
import { SetLoadBalancerHTTPSListenerAttributeRequest } from "./SetLoadBalancerHTTPSListenerAttribute/req";
import { SetLoadBalancerHTTPSListenerAttributeResponse } from "./SetLoadBalancerHTTPSListenerAttribute/res";
import { SetLoadBalancerStatusRequest } from "./SetLoadBalancerStatus/req";
import { SetLoadBalancerStatusResponse } from "./SetLoadBalancerStatus/res";
import { SetLoadBalancerTCPListenerAttributeRequest } from "./SetLoadBalancerTCPListenerAttribute/req";
import { SetLoadBalancerTCPListenerAttributeResponse } from "./SetLoadBalancerTCPListenerAttribute/res";
import { SetLoadBalancerUDPListenerAttributeRequest } from "./SetLoadBalancerUDPListenerAttribute/req";
import { SetLoadBalancerUDPListenerAttributeResponse } from "./SetLoadBalancerUDPListenerAttribute/res";
import { SetRuleRequest } from "./SetRule/req";
import { SetRuleResponse } from "./SetRule/res";
import { SetServerCertificateNameRequest } from "./SetServerCertificateName/req";
import { SetServerCertificateNameResponse } from "./SetServerCertificateName/res";
import { SetTLSCipherPolicyAttributeRequest } from "./SetTLSCipherPolicyAttribute/req";
import { SetTLSCipherPolicyAttributeResponse } from "./SetTLSCipherPolicyAttribute/res";
import { SetVServerGroupAttributeRequest } from "./SetVServerGroupAttribute/req";
import { SetVServerGroupAttributeResponse } from "./SetVServerGroupAttribute/res";
import { StartLoadBalancerListenerRequest } from "./StartLoadBalancerListener/req";
import { StartLoadBalancerListenerResponse } from "./StartLoadBalancerListener/res";
import { StopLoadBalancerListenerRequest } from "./StopLoadBalancerListener/req";
import { StopLoadBalancerListenerResponse } from "./StopLoadBalancerListener/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { UploadCACertificateRequest } from "./UploadCACertificate/req";
import { UploadCACertificateResponse } from "./UploadCACertificate/res";
import { UploadServerCertificateRequest } from "./UploadServerCertificate/req";
import { UploadServerCertificateResponse } from "./UploadServerCertificate/res";
import { DescribeLoadBalancerListenersRequest } from "./DescribeLoadBalancerListeners/req";
import { DescribeLoadBalancerListenersResponse } from "./DescribeLoadBalancerListeners/res";
import { DeleteAccessLogsDownloadAttributeRequest } from "./DeleteAccessLogsDownloadAttribute/req";
import { DeleteAccessLogsDownloadAttributeResponse } from "./DeleteAccessLogsDownloadAttribute/res";
import { DescribeAccessLogsDownloadAttributeRequest } from "./DescribeAccessLogsDownloadAttribute/req";
import { DescribeAccessLogsDownloadAttributeResponse } from "./DescribeAccessLogsDownloadAttribute/res";
import { DescribeHighDefinationMonitorRequest } from "./DescribeHighDefinationMonitor/req";
import { DescribeHighDefinationMonitorResponse } from "./DescribeHighDefinationMonitor/res";
import { EnableHighDefinationMonitorRequest } from "./EnableHighDefinationMonitor/req";
import { EnableHighDefinationMonitorResponse } from "./EnableHighDefinationMonitor/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { SetAccessLogsDownloadAttributeRequest } from "./SetAccessLogsDownloadAttribute/req";
import { SetAccessLogsDownloadAttributeResponse } from "./SetAccessLogsDownloadAttribute/res";
import { ModifyHighDefinationMonitorRequest } from "./ModifyHighDefinationMonitor/req";
import { ModifyHighDefinationMonitorResponse } from "./ModifyHighDefinationMonitor/res";
import { ModifyLoadBalancerInstanceChargeTypeRequest } from "./ModifyLoadBalancerInstanceChargeType/req";
import { ModifyLoadBalancerInstanceChargeTypeResponse } from "./ModifyLoadBalancerInstanceChargeType/res";

interface SLB {
    /**
     * 在访问控制策略组中添加IP条目。
     */
    AddAccessControlListEntry(query: AddAccessControlListEntryRequest): Promise<AddAccessControlListEntryResponse>;
    /**
     * 添加后端服务器。
     */
    AddBackendServers(query: AddBackendServersRequest): Promise<AddBackendServersResponse>;
    /**
     * 为指定的负载均衡实例添加标签。
     */
    AddTags(query: AddTagsRequest): Promise<AddTagsResponse>;
    /**
     * 添加监听访问控制白名单。
     */
    AddListenerWhiteListItem(query: AddListenerWhiteListItemRequest): Promise<AddListenerWhiteListItemResponse>;
    /**
     * 向指定的虚拟服务器组中添加后端服务器。
     */
    AddVServerGroupBackendServers(query: AddVServerGroupBackendServersRequest): Promise<AddVServerGroupBackendServersResponse>;
    /**
     * 创建访问控制策略组。
     */
    CreateAccessControlList(query: CreateAccessControlListRequest): Promise<CreateAccessControlListResponse>;
    /**
     * 创建扩展域名。
     */
    CreateDomainExtension(query: CreateDomainExtensionRequest): Promise<CreateDomainExtensionResponse>;
    /**
     * 创建负载均衡实例。
     */
    CreateLoadBalancer(query: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse>;
    /**
     * 创建HTTP监听。
     */
    CreateLoadBalancerHTTPListener(query: CreateLoadBalancerHTTPListenerRequest): Promise<CreateLoadBalancerHTTPListenerResponse>;
    /**
     * 创建HTTPS监听。
     */
    CreateLoadBalancerHTTPSListener(query: CreateLoadBalancerHTTPSListenerRequest): Promise<CreateLoadBalancerHTTPSListenerResponse>;
    /**
     * 创建TCP监听。
     */
    CreateLoadBalancerTCPListener(query: CreateLoadBalancerTCPListenerRequest): Promise<CreateLoadBalancerTCPListenerResponse>;
    /**
     * 创建UDP监听。
     */
    CreateLoadBalancerUDPListener(query: CreateLoadBalancerUDPListenerRequest): Promise<CreateLoadBalancerUDPListenerResponse>;
    /**
     * 创建主备服务器组。一个主备服务器组只能包含两个后端服务器，一个为主服务器，另一个为备服务器。
     */
    CreateMasterSlaveServerGroup(query: CreateMasterSlaveServerGroupRequest): Promise<CreateMasterSlaveServerGroupResponse>;
    /**
     * 为指定的HTTP或HTTPS监听添加转发规则。
     */
    CreateRules(query: CreateRulesRequest): Promise<CreateRulesResponse>;
    /**
     * 创建TLS策略。
     */
    CreateTLSCipherPolicy(query: CreateTLSCipherPolicyRequest): Promise<CreateTLSCipherPolicyResponse>;
    /**
     * 创建虚拟服务器组并向指定的服务器组中添加后端服务器。
     */
    CreateVServerGroup(query: CreateVServerGroupRequest): Promise<CreateVServerGroupResponse>;
    /**
     * 删除访问控制策略组。
     */
    DeleteAccessControlList(query: DeleteAccessControlListRequest): Promise<DeleteAccessControlListResponse>;
    /**
     * 删除CA证书。
     */
    DeleteCACertificate(query: DeleteCACertificateRequest): Promise<DeleteCACertificateResponse>;
    /**
     * 删除扩展域名。
     */
    DeleteDomainExtension(query: DeleteDomainExtensionRequest): Promise<DeleteDomainExtensionResponse>;
    /**
     * 删除后付费的负载均衡实例。
     */
    DeleteLoadBalancer(query: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse>;
    /**
     * 删除监听。
     */
    DeleteLoadBalancerListener(query: DeleteLoadBalancerListenerRequest): Promise<DeleteLoadBalancerListenerResponse>;
    /**
     * 删除指定的主备服务器组。
     */
    DeleteMasterSlaveServerGroup(query: DeleteMasterSlaveServerGroupRequest): Promise<DeleteMasterSlaveServerGroupResponse>;
    /**
     * 删除转发规则。
     */
    DeleteRules(query: DeleteRulesRequest): Promise<DeleteRulesResponse>;
    /**
     * 删除服务器证书。
     */
    DeleteServerCertificate(query: DeleteServerCertificateRequest): Promise<DeleteServerCertificateResponse>;
    /**
     * 删除TLS策略。
     */
    DeleteTLSCipherPolicy(query: DeleteTLSCipherPolicyRequest): Promise<DeleteTLSCipherPolicyResponse>;
    /**
     * 删除虚拟服务器组。
     */
    DeleteVServerGroup(query: DeleteVServerGroupRequest): Promise<DeleteVServerGroupResponse>;
    /**
     * 查询访问控制策略组的配置。
     */
    DescribeAccessControlListAttribute(query: DescribeAccessControlListAttributeRequest): Promise<DescribeAccessControlListAttributeResponse>;
    /**
     * 查询已创建的访问控制策略组。
     */
    DescribeAccessControlLists(query: DescribeAccessControlListsRequest): Promise<DescribeAccessControlListsResponse>;
    /**
     * 查询某个Region的可用区支持的资源售卖情况，可用的资源。
     */
    DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    /**
     * 查询CA证书列表。
     */
    DescribeCACertificates(query: DescribeCACertificatesRequest): Promise<DescribeCACertificatesResponse>;
    /**
     * 查询已添加的扩展域名属性。
     */
    DescribeDomainExtensionAttribute(query: DescribeDomainExtensionAttributeRequest): Promise<DescribeDomainExtensionAttributeResponse>;
    /**
     * 查询已添加的扩展域名。
     */
    DescribeDomainExtensions(query: DescribeDomainExtensionsRequest): Promise<DescribeDomainExtensionsResponse>;
    /**
     * 查询后端服务器的健康状态。
     */
    DescribeHealthStatus(query: DescribeHealthStatusRequest): Promise<DescribeHealthStatusResponse>;
    /**
     * 查询监听的白名单配置。
     */
    DescribeListenerAccessControlAttribute(query: DescribeListenerAccessControlAttributeRequest): Promise<DescribeListenerAccessControlAttributeResponse>;
    /**
     * 查询指定负载均衡实例的详细信息。
     */
    DescribeLoadBalancerAttribute(query: DescribeLoadBalancerAttributeRequest): Promise<DescribeLoadBalancerAttributeResponse>;
    /**
     * 查询HTTP监听配置。
     */
    DescribeLoadBalancerHTTPListenerAttribute(query: DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse>;
    /**
     * 查询HTTPS监听配置。
     */
    DescribeLoadBalancerHTTPSListenerAttribute(query: DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse>;
    /**
     * 查询TCP监听配置。
     */
    DescribeLoadBalancerTCPListenerAttribute(query: DescribeLoadBalancerTCPListenerAttributeRequest): Promise<DescribeLoadBalancerTCPListenerAttributeResponse>;
    /**
     * 查询UDP监听的配置。
     */
    DescribeLoadBalancerUDPListenerAttribute(query: DescribeLoadBalancerUDPListenerAttributeRequest): Promise<DescribeLoadBalancerUDPListenerAttributeResponse>;
    /**
     * 查询指定主备服务器组的详细信息。
     */
    DescribeMasterSlaveServerGroupAttribute(query: DescribeMasterSlaveServerGroupAttributeRequest): Promise<DescribeMasterSlaveServerGroupAttributeResponse>;
    /**
     * 查询已创建的负载均衡实例。
     */
    DescribeLoadBalancers(query: DescribeLoadBalancersRequest): Promise<DescribeLoadBalancersResponse>;
    /**
     * 查询主备服务器组列表。
     */
    DescribeMasterSlaveServerGroups(query: DescribeMasterSlaveServerGroupsRequest): Promise<DescribeMasterSlaveServerGroupsResponse>;
    /**
     * 查询可用地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询指定转发规则的配置详情。
     */
    DescribeRuleAttribute(query: DescribeRuleAttributeRequest): Promise<DescribeRuleAttributeResponse>;
    /**
     * 查询指定监听已配置的转发规则。
     */
    DescribeRules(query: DescribeRulesRequest): Promise<DescribeRulesResponse>;
    /**
     * 查询指定地域的服务器证书列表。
     */
    DescribeServerCertificates(query: DescribeServerCertificatesRequest): Promise<DescribeServerCertificatesResponse>;
    /**
     * 查询标签列表。
     */
    DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
     * 查询虚拟服务器组的详细信息。
     */
    DescribeVServerGroupAttribute(query: DescribeVServerGroupAttributeRequest): Promise<DescribeVServerGroupAttributeResponse>;
    /**
     * 查询虚拟服务器组列表。
     */
    DescribeVServerGroups(query: DescribeVServerGroupsRequest): Promise<DescribeVServerGroupsResponse>;
    /**
     * 查询指定地域的可用区信息。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 查询TLS策略。
     */
    ListTLSCipherPolicies(query: ListTLSCipherPoliciesRequest): Promise<ListTLSCipherPoliciesResponse>;
    /**
     * 查询实例已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 修改负载均衡的实例规格。
     */
    ModifyLoadBalancerInstanceSpec(query: ModifyLoadBalancerInstanceSpecRequest): Promise<ModifyLoadBalancerInstanceSpecResponse>;
    /**
     * 修改公网负载均衡实例的计费方式。
     */
    ModifyLoadBalancerInternetSpec(query: ModifyLoadBalancerInternetSpecRequest): Promise<ModifyLoadBalancerInternetSpecResponse>;
    /**
     * 将按量计费实例转换为包年包月实例。
     */
    ModifyLoadBalancerPayType(query: ModifyLoadBalancerPayTypeRequest): Promise<ModifyLoadBalancerPayTypeResponse>;
    /**
     * 替换虚拟服务器组中的后端服务器。
     */
    ModifyVServerGroupBackendServers(query: ModifyVServerGroupBackendServersRequest): Promise<ModifyVServerGroupBackendServersResponse>;
    /**
     * 删除访问控制策略组中的IP条目。
     */
    RemoveAccessControlListEntry(query: RemoveAccessControlListEntryRequest): Promise<RemoveAccessControlListEntryResponse>;
    /**
     * 移除后端服务器。
     */
    RemoveBackendServers(query: RemoveBackendServersRequest): Promise<RemoveBackendServersResponse>;
    /**
     * 删除监听白名单中的IP。
     */
    RemoveListenerWhiteListItem(query: RemoveListenerWhiteListItemRequest): Promise<RemoveListenerWhiteListItemResponse>;
    /**
     * 解绑指定负载均衡实例下的标签。
     */
    RemoveTags(query: RemoveTagsRequest): Promise<RemoveTagsResponse>;
    /**
     * 从指定的虚拟服务器组中移除后端服务器。
     */
    RemoveVServerGroupBackendServers(query: RemoveVServerGroupBackendServersRequest): Promise<RemoveVServerGroupBackendServersResponse>;
    /**
     * 修改访问控制策略组的名称。
     */
    SetAccessControlListAttribute(query: SetAccessControlListAttributeRequest): Promise<SetAccessControlListAttributeResponse>;
    /**
     * 设置后端服务器权重。
     */
    SetBackendServers(query: SetBackendServersRequest): Promise<SetBackendServersResponse>;
    /**
     * 设置CA证书名称。
     */
    SetCACertificateName(query: SetCACertificateNameRequest): Promise<SetCACertificateNameResponse>;
    /**
     * 修改扩展域名的证书。
     */
    SetDomainExtensionAttribute(query: SetDomainExtensionAttributeRequest): Promise<SetDomainExtensionAttributeResponse>;
    /**
     * 是否开启指定监听的白名单访问控制。
     */
    SetListenerAccessControlStatus(query: SetListenerAccessControlStatusRequest): Promise<SetListenerAccessControlStatusResponse>;
    /**
     * 设置实例删除保护状态。
     */
    SetLoadBalancerDeleteProtection(query: SetLoadBalancerDeleteProtectionRequest): Promise<SetLoadBalancerDeleteProtectionResponse>;
    /**
     * 修改HTTP监听的配置。
     */
    SetLoadBalancerHTTPListenerAttribute(query: SetLoadBalancerHTTPListenerAttributeRequest): Promise<SetLoadBalancerHTTPListenerAttributeResponse>;
    /**
     * 设置负载均衡实例修改保护状态。
     */
    SetLoadBalancerModificationProtection(query: SetLoadBalancerModificationProtectionRequest): Promise<SetLoadBalancerModificationProtectionResponse>;
    /**
     * 修改负载均衡实例的名称。
     */
    SetLoadBalancerName(query: SetLoadBalancerNameRequest): Promise<SetLoadBalancerNameResponse>;
    /**
     * 修改HTTPS监听的配置。
     */
    SetLoadBalancerHTTPSListenerAttribute(query: SetLoadBalancerHTTPSListenerAttributeRequest): Promise<SetLoadBalancerHTTPSListenerAttributeResponse>;
    /**
     * 设置负载均衡实例的状态。
     */
    SetLoadBalancerStatus(query: SetLoadBalancerStatusRequest): Promise<SetLoadBalancerStatusResponse>;
    /**
     * 修改TCP监听的配置。
     */
    SetLoadBalancerTCPListenerAttribute(query: SetLoadBalancerTCPListenerAttributeRequest): Promise<SetLoadBalancerTCPListenerAttributeResponse>;
    /**
     * 修改UDP协议监听的配置。
     */
    SetLoadBalancerUDPListenerAttribute(query: SetLoadBalancerUDPListenerAttributeRequest): Promise<SetLoadBalancerUDPListenerAttributeResponse>;
    /**
     * 修改目标虚拟服务器组的转发规则。
     */
    SetRule(query: SetRuleRequest): Promise<SetRuleResponse>;
    /**
     * 设置服务器证书名称。
     */
    SetServerCertificateName(query: SetServerCertificateNameRequest): Promise<SetServerCertificateNameResponse>;
    /**
     * 设置TLS策略。
     */
    SetTLSCipherPolicyAttribute(query: SetTLSCipherPolicyAttributeRequest): Promise<SetTLSCipherPolicyAttributeResponse>;
    /**
     * 修改虚拟服务器组的配置。
     */
    SetVServerGroupAttribute(query: SetVServerGroupAttributeRequest): Promise<SetVServerGroupAttributeResponse>;
    /**
     * 启动监听。
     */
    StartLoadBalancerListener(query: StartLoadBalancerListenerRequest): Promise<StartLoadBalancerListenerResponse>;
    /**
     * 停止监听。
     */
    StopLoadBalancerListener(query: StopLoadBalancerListenerRequest): Promise<StopLoadBalancerListenerResponse>;
    /**
     * 为指定的资源列表统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 为指定的资源列表统一解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 上传CA证书。
     */
    UploadCACertificate(query: UploadCACertificateRequest): Promise<UploadCACertificateResponse>;
    /**
     * 上传服务器证书。
     */
    UploadServerCertificate(query: UploadServerCertificateRequest): Promise<UploadServerCertificateResponse>;
    /**
     * 查询负载均衡监听列表详情。
     */
    DescribeLoadBalancerListeners(query: DescribeLoadBalancerListenersRequest): Promise<DescribeLoadBalancerListenersResponse>;
    /**
     * 删除指定传统型负载均衡实例的访问日志。
     */
    DeleteAccessLogsDownloadAttribute(query: DeleteAccessLogsDownloadAttributeRequest): Promise<DeleteAccessLogsDownloadAttributeResponse>;
    /**
     * 查询指定传统型负载均衡实例的访问日志。
     */
    DescribeAccessLogsDownloadAttribute(query: DescribeAccessLogsDownloadAttributeRequest): Promise<DescribeAccessLogsDownloadAttributeResponse>;
    /**
     * 查询指定地域的秒级监控配置信息。
     */
    DescribeHighDefinationMonitor(query: DescribeHighDefinationMonitorRequest): Promise<DescribeHighDefinationMonitorResponse>;
    /**
     * 启用当前地域的秒级监控功能。
     */
    EnableHighDefinationMonitor(query: EnableHighDefinationMonitorRequest): Promise<EnableHighDefinationMonitorResponse>;
    /**
     * 修改云资源所属的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 为传统型负载均衡实例添加访问日志转发规则。
     */
    SetAccessLogsDownloadAttribute(query: SetAccessLogsDownloadAttributeRequest): Promise<SetAccessLogsDownloadAttributeResponse>;
    /**
     * 修改高精度秒级监控的配置信息。
     */
    ModifyHighDefinationMonitor(query: ModifyHighDefinationMonitorRequest): Promise<ModifyHighDefinationMonitorResponse>;
    /**
     * 变更按量付费CLB实例的实例计费方式。
     */
    ModifyLoadBalancerInstanceChargeType(query: ModifyLoadBalancerInstanceChargeTypeRequest): Promise<ModifyLoadBalancerInstanceChargeTypeResponse>;
}
export default SLB;
