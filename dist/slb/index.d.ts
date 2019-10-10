import { SetRuleRequest } from "./SetRule/req";
import { SetRuleResponse } from "./SetRule/res";
import { CreateLoadBalancerRequest } from "./CreateLoadBalancer/req";
import { CreateLoadBalancerResponse } from "./CreateLoadBalancer/res";
import { DeleteMasterSlaveServerGroupRequest } from "./DeleteMasterSlaveServerGroup/req";
import { DeleteMasterSlaveServerGroupResponse } from "./DeleteMasterSlaveServerGroup/res";
import { DeleteLoadBalancerListenerRequest } from "./DeleteLoadBalancerListener/req";
import { DeleteLoadBalancerListenerResponse } from "./DeleteLoadBalancerListener/res";
import { ModifyLoadBalancerInstanceSpecRequest } from "./ModifyLoadBalancerInstanceSpec/req";
import { ModifyLoadBalancerInstanceSpecResponse } from "./ModifyLoadBalancerInstanceSpec/res";
import { ModifyVServerGroupBackendServersRequest } from "./ModifyVServerGroupBackendServers/req";
import { ModifyVServerGroupBackendServersResponse } from "./ModifyVServerGroupBackendServers/res";
import { DescribeMasterSlaveServerGroupsRequest } from "./DescribeMasterSlaveServerGroups/req";
import { DescribeMasterSlaveServerGroupsResponse } from "./DescribeMasterSlaveServerGroups/res";
import { ModifyLoadBalancerPayTypeRequest } from "./ModifyLoadBalancerPayType/req";
import { ModifyLoadBalancerPayTypeResponse } from "./ModifyLoadBalancerPayType/res";
import { UploadCACertificateRequest } from "./UploadCACertificate/req";
import { UploadCACertificateResponse } from "./UploadCACertificate/res";
import { RemoveAccessControlListEntryRequest } from "./RemoveAccessControlListEntry/req";
import { RemoveAccessControlListEntryResponse } from "./RemoveAccessControlListEntry/res";
import { AddTagsRequest } from "./AddTags/req";
import { AddTagsResponse } from "./AddTags/res";
import { SetDomainExtensionAttributeRequest } from "./SetDomainExtensionAttribute/req";
import { SetDomainExtensionAttributeResponse } from "./SetDomainExtensionAttribute/res";
import { DescribeVServerGroupAttributeRequest } from "./DescribeVServerGroupAttribute/req";
import { DescribeVServerGroupAttributeResponse } from "./DescribeVServerGroupAttribute/res";
import { StopLoadBalancerListenerRequest } from "./StopLoadBalancerListener/req";
import { StopLoadBalancerListenerResponse } from "./StopLoadBalancerListener/res";
import { CreateAccessControlListRequest } from "./CreateAccessControlList/req";
import { CreateAccessControlListResponse } from "./CreateAccessControlList/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DeleteVServerGroupRequest } from "./DeleteVServerGroup/req";
import { DeleteVServerGroupResponse } from "./DeleteVServerGroup/res";
import { SetBackendServersRequest } from "./SetBackendServers/req";
import { SetBackendServersResponse } from "./SetBackendServers/res";
import { CreateDomainExtensionRequest } from "./CreateDomainExtension/req";
import { CreateDomainExtensionResponse } from "./CreateDomainExtension/res";
import { DeleteServerCertificateRequest } from "./DeleteServerCertificate/req";
import { DeleteServerCertificateResponse } from "./DeleteServerCertificate/res";
import { DescribeLoadBalancersRequest } from "./DescribeLoadBalancers/req";
import { DescribeLoadBalancersResponse } from "./DescribeLoadBalancers/res";
import { SetCACertificateNameRequest } from "./SetCACertificateName/req";
import { SetCACertificateNameResponse } from "./SetCACertificateName/res";
import { AddListenerWhiteListItemRequest } from "./AddListenerWhiteListItem/req";
import { AddListenerWhiteListItemResponse } from "./AddListenerWhiteListItem/res";
import { SetLoadBalancerNameRequest } from "./SetLoadBalancerName/req";
import { SetLoadBalancerNameResponse } from "./SetLoadBalancerName/res";
import { SetLoadBalancerUDPListenerAttributeRequest } from "./SetLoadBalancerUDPListenerAttribute/req";
import { SetLoadBalancerUDPListenerAttributeResponse } from "./SetLoadBalancerUDPListenerAttribute/res";
import { AddAccessControlListEntryRequest } from "./AddAccessControlListEntry/req";
import { AddAccessControlListEntryResponse } from "./AddAccessControlListEntry/res";
import { SetServerCertificateNameRequest } from "./SetServerCertificateName/req";
import { SetServerCertificateNameResponse } from "./SetServerCertificateName/res";
import { AddVServerGroupBackendServersRequest } from "./AddVServerGroupBackendServers/req";
import { AddVServerGroupBackendServersResponse } from "./AddVServerGroupBackendServers/res";
import { DescribeLoadBalancerTCPListenerAttributeRequest } from "./DescribeLoadBalancerTCPListenerAttribute/req";
import { DescribeLoadBalancerTCPListenerAttributeResponse } from "./DescribeLoadBalancerTCPListenerAttribute/res";
import { RemoveListenerWhiteListItemRequest } from "./RemoveListenerWhiteListItem/req";
import { RemoveListenerWhiteListItemResponse } from "./RemoveListenerWhiteListItem/res";
import { DescribeRulesRequest } from "./DescribeRules/req";
import { DescribeRulesResponse } from "./DescribeRules/res";
import { DeleteAccessControlListRequest } from "./DeleteAccessControlList/req";
import { DeleteAccessControlListResponse } from "./DeleteAccessControlList/res";
import { SetAccessControlListAttributeRequest } from "./SetAccessControlListAttribute/req";
import { SetAccessControlListAttributeResponse } from "./SetAccessControlListAttribute/res";
import { DescribeLoadBalancerUDPListenerAttributeRequest } from "./DescribeLoadBalancerUDPListenerAttribute/req";
import { DescribeLoadBalancerUDPListenerAttributeResponse } from "./DescribeLoadBalancerUDPListenerAttribute/res";
import { DescribeCACertificatesRequest } from "./DescribeCACertificates/req";
import { DescribeCACertificatesResponse } from "./DescribeCACertificates/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { RemoveTagsRequest } from "./RemoveTags/req";
import { RemoveTagsResponse } from "./RemoveTags/res";
import { UploadServerCertificateRequest } from "./UploadServerCertificate/req";
import { UploadServerCertificateResponse } from "./UploadServerCertificate/res";
import { CreateVServerGroupRequest } from "./CreateVServerGroup/req";
import { CreateVServerGroupResponse } from "./CreateVServerGroup/res";
import { DescribeVServerGroupsRequest } from "./DescribeVServerGroups/req";
import { DescribeVServerGroupsResponse } from "./DescribeVServerGroups/res";
import { DescribeAccessControlListsRequest } from "./DescribeAccessControlLists/req";
import { DescribeAccessControlListsResponse } from "./DescribeAccessControlLists/res";
import { DescribeDomainExtensionsRequest } from "./DescribeDomainExtensions/req";
import { DescribeDomainExtensionsResponse } from "./DescribeDomainExtensions/res";
import { DescribeHealthStatusRequest } from "./DescribeHealthStatus/req";
import { DescribeHealthStatusResponse } from "./DescribeHealthStatus/res";
import { SetLoadBalancerHTTPSListenerAttributeRequest } from "./SetLoadBalancerHTTPSListenerAttribute/req";
import { SetLoadBalancerHTTPSListenerAttributeResponse } from "./SetLoadBalancerHTTPSListenerAttribute/res";
import { DeleteLoadBalancerRequest } from "./DeleteLoadBalancer/req";
import { DeleteLoadBalancerResponse } from "./DeleteLoadBalancer/res";
import { DeleteRulesRequest } from "./DeleteRules/req";
import { DeleteRulesResponse } from "./DeleteRules/res";
import { DescribeRuleAttributeRequest } from "./DescribeRuleAttribute/req";
import { DescribeRuleAttributeResponse } from "./DescribeRuleAttribute/res";
import { DescribeServerCertificatesRequest } from "./DescribeServerCertificates/req";
import { DescribeServerCertificatesResponse } from "./DescribeServerCertificates/res";
import { DescribeLoadBalancerHTTPSListenerAttributeRequest } from "./DescribeLoadBalancerHTTPSListenerAttribute/req";
import { DescribeLoadBalancerHTTPSListenerAttributeResponse } from "./DescribeLoadBalancerHTTPSListenerAttribute/res";
import { DeleteDomainExtensionRequest } from "./DeleteDomainExtension/req";
import { DeleteDomainExtensionResponse } from "./DeleteDomainExtension/res";
import { RemoveBackendServersRequest } from "./RemoveBackendServers/req";
import { RemoveBackendServersResponse } from "./RemoveBackendServers/res";
import { SetLoadBalancerHTTPListenerAttributeRequest } from "./SetLoadBalancerHTTPListenerAttribute/req";
import { SetLoadBalancerHTTPListenerAttributeResponse } from "./SetLoadBalancerHTTPListenerAttribute/res";
import { CreateLoadBalancerTCPListenerRequest } from "./CreateLoadBalancerTCPListener/req";
import { CreateLoadBalancerTCPListenerResponse } from "./CreateLoadBalancerTCPListener/res";
import { RemoveVServerGroupBackendServersRequest } from "./RemoveVServerGroupBackendServers/req";
import { RemoveVServerGroupBackendServersResponse } from "./RemoveVServerGroupBackendServers/res";
import { CreateMasterSlaveServerGroupRequest } from "./CreateMasterSlaveServerGroup/req";
import { CreateMasterSlaveServerGroupResponse } from "./CreateMasterSlaveServerGroup/res";
import { ModifyLoadBalancerInternetSpecRequest } from "./ModifyLoadBalancerInternetSpec/req";
import { ModifyLoadBalancerInternetSpecResponse } from "./ModifyLoadBalancerInternetSpec/res";
import { CreateLoadBalancerHTTPListenerRequest } from "./CreateLoadBalancerHTTPListener/req";
import { CreateLoadBalancerHTTPListenerResponse } from "./CreateLoadBalancerHTTPListener/res";
import { CreateLoadBalancerHTTPSListenerRequest } from "./CreateLoadBalancerHTTPSListener/req";
import { CreateLoadBalancerHTTPSListenerResponse } from "./CreateLoadBalancerHTTPSListener/res";
import { StartLoadBalancerListenerRequest } from "./StartLoadBalancerListener/req";
import { StartLoadBalancerListenerResponse } from "./StartLoadBalancerListener/res";
import { SetLoadBalancerStatusRequest } from "./SetLoadBalancerStatus/req";
import { SetLoadBalancerStatusResponse } from "./SetLoadBalancerStatus/res";
import { CreateLoadBalancerUDPListenerRequest } from "./CreateLoadBalancerUDPListener/req";
import { CreateLoadBalancerUDPListenerResponse } from "./CreateLoadBalancerUDPListener/res";
import { DescribeTagsRequest } from "./DescribeTags/req";
import { DescribeTagsResponse } from "./DescribeTags/res";
import { DescribeMasterSlaveServerGroupAttributeRequest } from "./DescribeMasterSlaveServerGroupAttribute/req";
import { DescribeMasterSlaveServerGroupAttributeResponse } from "./DescribeMasterSlaveServerGroupAttribute/res";
import { DescribeLoadBalancerAttributeRequest } from "./DescribeLoadBalancerAttribute/req";
import { DescribeLoadBalancerAttributeResponse } from "./DescribeLoadBalancerAttribute/res";
import { SetVServerGroupAttributeRequest } from "./SetVServerGroupAttribute/req";
import { SetVServerGroupAttributeResponse } from "./SetVServerGroupAttribute/res";
import { SetLoadBalancerTCPListenerAttributeRequest } from "./SetLoadBalancerTCPListenerAttribute/req";
import { SetLoadBalancerTCPListenerAttributeResponse } from "./SetLoadBalancerTCPListenerAttribute/res";
import { DescribeLoadBalancerHTTPListenerAttributeRequest } from "./DescribeLoadBalancerHTTPListenerAttribute/req";
import { DescribeLoadBalancerHTTPListenerAttributeResponse } from "./DescribeLoadBalancerHTTPListenerAttribute/res";
import { SetListenerAccessControlStatusRequest } from "./SetListenerAccessControlStatus/req";
import { SetListenerAccessControlStatusResponse } from "./SetListenerAccessControlStatus/res";
import { DescribeAccessControlListAttributeRequest } from "./DescribeAccessControlListAttribute/req";
import { DescribeAccessControlListAttributeResponse } from "./DescribeAccessControlListAttribute/res";
import { DescribeListenerAccessControlAttributeRequest } from "./DescribeListenerAccessControlAttribute/req";
import { DescribeListenerAccessControlAttributeResponse } from "./DescribeListenerAccessControlAttribute/res";
import { DeleteCACertificateRequest } from "./DeleteCACertificate/req";
import { DeleteCACertificateResponse } from "./DeleteCACertificate/res";
import { CreateRulesRequest } from "./CreateRules/req";
import { CreateRulesResponse } from "./CreateRules/res";
import { AddBackendServersRequest } from "./AddBackendServers/req";
import { AddBackendServersResponse } from "./AddBackendServers/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { SetLoadBalancerDeleteProtectionRequest } from "./SetLoadBalancerDeleteProtection/req";
import { SetLoadBalancerDeleteProtectionResponse } from "./SetLoadBalancerDeleteProtection/res";
import { DescribeMasterSlaveVServerGroupAttributeRequest } from "./DescribeMasterSlaveVServerGroupAttribute/req";
import { DescribeMasterSlaveVServerGroupAttributeResponse } from "./DescribeMasterSlaveVServerGroupAttribute/res";
import { DeleteMasterSlaveVServerGroupRequest } from "./DeleteMasterSlaveVServerGroup/req";
import { DeleteMasterSlaveVServerGroupResponse } from "./DeleteMasterSlaveVServerGroup/res";
import { CreateMasterSlaveVServerGroupRequest } from "./CreateMasterSlaveVServerGroup/req";
import { CreateMasterSlaveVServerGroupResponse } from "./CreateMasterSlaveVServerGroup/res";
import { DescribeMasterSlaveVServerGroupsRequest } from "./DescribeMasterSlaveVServerGroups/req";
import { DescribeMasterSlaveVServerGroupsResponse } from "./DescribeMasterSlaveVServerGroups/res";

interface SLB {
    /**
    * 调用SetRule更改转发规则的目标虚拟服务器组。
    */ SetRule(query: SetRuleRequest): Promise<SetRuleResponse>;
    /**
    * 调用CreateLoadBalancer创建负载均衡实例。
    */ CreateLoadBalancer(query: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse>;
    /**
    * 调用DeleteMasterSlaveServerGroup删除指定的主备服务器组。
    */ DeleteMasterSlaveServerGroup(query: DeleteMasterSlaveServerGroupRequest): Promise<DeleteMasterSlaveServerGroupResponse>;
    /**
    * 调用DeleteLoadBalancerListener删除监听。
    */ DeleteLoadBalancerListener(query: DeleteLoadBalancerListenerRequest): Promise<DeleteLoadBalancerListenerResponse>;
    /**
    * 调用ModifyLoadBalancerInstanceSpec修改负载均衡的实例规格。
    */ ModifyLoadBalancerInstanceSpec(query: ModifyLoadBalancerInstanceSpecRequest): Promise<ModifyLoadBalancerInstanceSpecResponse>;
    /**
    * 调用ModifyVServerGroupBackendServers替换服务器组中的后端服务器。
    */ ModifyVServerGroupBackendServers(query: ModifyVServerGroupBackendServersRequest): Promise<ModifyVServerGroupBackendServersResponse>;
    /**
    * 调用DescribeMasterSlaveServerGroups查询主备服务器组列表。
    */ DescribeMasterSlaveServerGroups(query: DescribeMasterSlaveServerGroupsRequest): Promise<DescribeMasterSlaveServerGroupsResponse>;
    /**
    * 调用ModifyLoadBalancerPayType将后付费实例转换为预付费实例。
    */ ModifyLoadBalancerPayType(query: ModifyLoadBalancerPayTypeRequest): Promise<ModifyLoadBalancerPayTypeResponse>;
    /**
    * 调用UploadCACertificate上传CA证书。
    */ UploadCACertificate(query: UploadCACertificateRequest): Promise<UploadCACertificateResponse>;
    /**
    * 调用RemoveAccessControlListEntry删除访问控制策略组中的IP条目。
    */ RemoveAccessControlListEntry(query: RemoveAccessControlListEntryRequest): Promise<RemoveAccessControlListEntryResponse>;
    /**
    * 调用AddTags为指定的负载均衡实例添加标签。
    */ AddTags(query: AddTagsRequest): Promise<AddTagsResponse>;
    /**
    * 调用SetDomainExtensionAttribute修改扩展域名的证书。
    */ SetDomainExtensionAttribute(query: SetDomainExtensionAttributeRequest): Promise<SetDomainExtensionAttributeResponse>;
    /**
    * 调用DescribeVServerGroupAttribute查询服务器组的详细信息。
    */ DescribeVServerGroupAttribute(query: DescribeVServerGroupAttributeRequest): Promise<DescribeVServerGroupAttributeResponse>;
    /**
    * 调用StopLoadBalancerListener停止监听。
    */ StopLoadBalancerListener(query: StopLoadBalancerListenerRequest): Promise<StopLoadBalancerListenerResponse>;
    /**
    * 调用CreateAccessControlList创建访问控制策略组。
    */ CreateAccessControlList(query: CreateAccessControlListRequest): Promise<CreateAccessControlListResponse>;
    /**
    * 调用DescribeRegions查询可用地域。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 调用DeleteVServerGroup删除服务器组。
    */ DeleteVServerGroup(query: DeleteVServerGroupRequest): Promise<DeleteVServerGroupResponse>;
    /**
    * 调用SetBackendServers设置后端服务器权重。
    */ SetBackendServers(query: SetBackendServersRequest): Promise<SetBackendServersResponse>;
    /**
    * 调用CreateDomainExtension创建扩展域名。
    */ CreateDomainExtension(query: CreateDomainExtensionRequest): Promise<CreateDomainExtensionResponse>;
    /**
    * 调用DeleteServerCertificate删除服务器证书。
    */ DeleteServerCertificate(query: DeleteServerCertificateRequest): Promise<DeleteServerCertificateResponse>;
    /**
    * 调用DescribeLoadBalancers查询已创建的负载均衡实例。
    */ DescribeLoadBalancers(query: DescribeLoadBalancersRequest): Promise<DescribeLoadBalancersResponse>;
    /**
    * 调用SetCACertificateName设置CA证书名称。
    */ SetCACertificateName(query: SetCACertificateNameRequest): Promise<SetCACertificateNameResponse>;
    /**
    * 调用AddListenerWhiteListItem添加监听访问控制白名单。
    */ AddListenerWhiteListItem(query: AddListenerWhiteListItemRequest): Promise<AddListenerWhiteListItemResponse>;
    /**
    * 调用SetLoadBalancerName修改负载均衡实例的名称。
    */ SetLoadBalancerName(query: SetLoadBalancerNameRequest): Promise<SetLoadBalancerNameResponse>;
    /**
    * 调用SetLoadBalancerUDPListenerAttribute修改UDP协议监听的配置。
    */ SetLoadBalancerUDPListenerAttribute(query: SetLoadBalancerUDPListenerAttributeRequest): Promise<SetLoadBalancerUDPListenerAttributeResponse>;
    /**
    * 调用AddAccessControlListEntry在访问控制策略组中添加IP条目。
    */ AddAccessControlListEntry(query: AddAccessControlListEntryRequest): Promise<AddAccessControlListEntryResponse>;
    /**
    * 调用SetServerCertificateName设置服务器证书名称。
    */ SetServerCertificateName(query: SetServerCertificateNameRequest): Promise<SetServerCertificateNameResponse>;
    /**
    * 调用AddVServerGroupBackendServers向指定的后端服务器组中添加后端服务器。
    */ AddVServerGroupBackendServers(query: AddVServerGroupBackendServersRequest): Promise<AddVServerGroupBackendServersResponse>;
    /**
    * 调用DescribeLoadBalancerTCPListenerAttribute查询TCP监听配置。
    */ DescribeLoadBalancerTCPListenerAttribute(query: DescribeLoadBalancerTCPListenerAttributeRequest): Promise<DescribeLoadBalancerTCPListenerAttributeResponse>;
    /**
    * 调用RemoveListenerWhiteListItem删除监听白名单中的IP。
    */ RemoveListenerWhiteListItem(query: RemoveListenerWhiteListItemRequest): Promise<RemoveListenerWhiteListItemResponse>;
    /**
    * 调用DescribeRules查询指定监听已配置的转发规则。
    */ DescribeRules(query: DescribeRulesRequest): Promise<DescribeRulesResponse>;
    /**
    * 调用DeleteAccessControlList删除访问控制策略组。
    */ DeleteAccessControlList(query: DeleteAccessControlListRequest): Promise<DeleteAccessControlListResponse>;
    /**
    * 调用SetAccessControlListAttribute修改访问控制策略组的名称。
    */ SetAccessControlListAttribute(query: SetAccessControlListAttributeRequest): Promise<SetAccessControlListAttributeResponse>;
    /**
    * 调用DescribeLoadBalancerUDPListenerAttribute查询UDP监听的配置。
    */ DescribeLoadBalancerUDPListenerAttribute(query: DescribeLoadBalancerUDPListenerAttributeRequest): Promise<DescribeLoadBalancerUDPListenerAttributeResponse>;
    /**
    * 调用DescribeCACertificates查询CA证书列表。
    */ DescribeCACertificates(query: DescribeCACertificatesRequest): Promise<DescribeCACertificatesResponse>;
    /**
    * 调用DescribeZones查询指定地域的可用区信息。
    */ DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
    * 调用RemoveTags解绑指定负载均衡实例下的标签。
    */ RemoveTags(query: RemoveTagsRequest): Promise<RemoveTagsResponse>;
    /**
    * 调用UploadServerCertificate上传服务器证书。
    */ UploadServerCertificate(query: UploadServerCertificateRequest): Promise<UploadServerCertificateResponse>;
    /**
    * 调用CreateVServerGroup向指定的后端服务器组中添加后端服务器。
    */ CreateVServerGroup(query: CreateVServerGroupRequest): Promise<CreateVServerGroupResponse>;
    /**
    * 调用DescribeVServerGroups查询服务器组列表。
    */ DescribeVServerGroups(query: DescribeVServerGroupsRequest): Promise<DescribeVServerGroupsResponse>;
    /**
    * 调用DescribeAccessControlLists查询已创建的访问控制策略组。
    */ DescribeAccessControlLists(query: DescribeAccessControlListsRequest): Promise<DescribeAccessControlListsResponse>;
    /**
    * 调用DescribeDomainExtensions查询已添加的扩展域名。
    */ DescribeDomainExtensions(query: DescribeDomainExtensionsRequest): Promise<DescribeDomainExtensionsResponse>;
    /**
    * 调用DescribeHealthStatus查询后端服务器的健康状态。
    */ DescribeHealthStatus(query: DescribeHealthStatusRequest): Promise<DescribeHealthStatusResponse>;
    /**
    * 调用SetLoadBalancerHTTPSListenerAttribute修改HTTPS监听的配置。
    */ SetLoadBalancerHTTPSListenerAttribute(query: SetLoadBalancerHTTPSListenerAttributeRequest): Promise<SetLoadBalancerHTTPSListenerAttributeResponse>;
    /**
    * 调用DeleteLoadBalancer删除后付费的负载均衡实例。
    */ DeleteLoadBalancer(query: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse>;
    /**
    * 调用DeleteRules删除转发规则。
    */ DeleteRules(query: DeleteRulesRequest): Promise<DeleteRulesResponse>;
    /**
    * 调用DescribeRuleAttribute查询指定转发规则的配置详情。
    */ DescribeRuleAttribute(query: DescribeRuleAttributeRequest): Promise<DescribeRuleAttributeResponse>;
    /**
    * 调用DescribeServerCertificates查询指定地域的服务器证书列表。
    */ DescribeServerCertificates(query: DescribeServerCertificatesRequest): Promise<DescribeServerCertificatesResponse>;
    /**
    * 调用DescribeLoadBalancerHTTPSListenerAttribute查询HTTPS监听配置。
    */ DescribeLoadBalancerHTTPSListenerAttribute(query: DescribeLoadBalancerHTTPSListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPSListenerAttributeResponse>;
    /**
    * 调用DeleteDomainExtension删除扩展域名。
    */ DeleteDomainExtension(query: DeleteDomainExtensionRequest): Promise<DeleteDomainExtensionResponse>;
    /**
    * 调用RemoveBackendServers移除后端服务器。
    */ RemoveBackendServers(query: RemoveBackendServersRequest): Promise<RemoveBackendServersResponse>;
    /**
    * 调用SetLoadBalancerHTTPListenerAttribute修改HTTP监听的配置。
    */ SetLoadBalancerHTTPListenerAttribute(query: SetLoadBalancerHTTPListenerAttributeRequest): Promise<SetLoadBalancerHTTPListenerAttributeResponse>;
    /**
    * 调用CreateLoadBalancerTCPListener创建TCP监听。
    */ CreateLoadBalancerTCPListener(query: CreateLoadBalancerTCPListenerRequest): Promise<CreateLoadBalancerTCPListenerResponse>;
    /**
    * 调用RemoveVServerGroupBackendServers从指定的后端服务器组中移除后端服务器。
    */ RemoveVServerGroupBackendServers(query: RemoveVServerGroupBackendServersRequest): Promise<RemoveVServerGroupBackendServersResponse>;
    /**
    * 调用CreateMasterSlaveServerGroup创建主备服务器组。一组主备服务器组只能包含两个ECS实例，一个为主服务器，另一个为备服务器。
    */ CreateMasterSlaveServerGroup(query: CreateMasterSlaveServerGroupRequest): Promise<CreateMasterSlaveServerGroupResponse>;
    /**
    * 调用ModifyLoadBalancerInternetSpec修改公网负载均衡实例的计费方式。
    */ ModifyLoadBalancerInternetSpec(query: ModifyLoadBalancerInternetSpecRequest): Promise<ModifyLoadBalancerInternetSpecResponse>;
    /**
    * 调用CreateLoadBalancerHTTPListener创建HTTP监听。
    */ CreateLoadBalancerHTTPListener(query: CreateLoadBalancerHTTPListenerRequest): Promise<CreateLoadBalancerHTTPListenerResponse>;
    /**
    * 调用CreateLoadBalancerHTTPSListener创建HTTPS监听。
    */ CreateLoadBalancerHTTPSListener(query: CreateLoadBalancerHTTPSListenerRequest): Promise<CreateLoadBalancerHTTPSListenerResponse>;
    /**
    * 调用StartLoadBalancerListener启动监听。
    */ StartLoadBalancerListener(query: StartLoadBalancerListenerRequest): Promise<StartLoadBalancerListenerResponse>;
    /**
    * 调用SetLoadBalancerStatus设置负载均衡实例的状态。
    */ SetLoadBalancerStatus(query: SetLoadBalancerStatusRequest): Promise<SetLoadBalancerStatusResponse>;
    /**
    * 调用CreateLoadBalancerUDPListener创建UDP监听。
    */ CreateLoadBalancerUDPListener(query: CreateLoadBalancerUDPListenerRequest): Promise<CreateLoadBalancerUDPListenerResponse>;
    /**
    * 调用DescribeTags查询标签列表。
    */ DescribeTags(query: DescribeTagsRequest): Promise<DescribeTagsResponse>;
    /**
    * 调用DescribeMasterSlaveServerGroupAttribute查询指定主备服务器组的详细信息。
    */ DescribeMasterSlaveServerGroupAttribute(query: DescribeMasterSlaveServerGroupAttributeRequest): Promise<DescribeMasterSlaveServerGroupAttributeResponse>;
    /**
    * 调用DescribeLoadBalancerAttribute查询指定负载均衡实例的详细信息。
    */ DescribeLoadBalancerAttribute(query: DescribeLoadBalancerAttributeRequest): Promise<DescribeLoadBalancerAttributeResponse>;
    /**
    * 调用SetVServerGroupAttribute修改虚拟服务器组的配置。
    */ SetVServerGroupAttribute(query: SetVServerGroupAttributeRequest): Promise<SetVServerGroupAttributeResponse>;
    /**
    * 调用SetLoadBalancerTCPListenerAttribute修改TCP监听的配置。
    */ SetLoadBalancerTCPListenerAttribute(query: SetLoadBalancerTCPListenerAttributeRequest): Promise<SetLoadBalancerTCPListenerAttributeResponse>;
    /**
    * 调用DescribeLoadBalancerHTTPListenerAttribute查询HTTP监听配置。
    */ DescribeLoadBalancerHTTPListenerAttribute(query: DescribeLoadBalancerHTTPListenerAttributeRequest): Promise<DescribeLoadBalancerHTTPListenerAttributeResponse>;
    /**
    * 调用SetListenerAccessControlStatus是否开启指定监听的白名单访问控制。
    */ SetListenerAccessControlStatus(query: SetListenerAccessControlStatusRequest): Promise<SetListenerAccessControlStatusResponse>;
    /**
    * 调用DescribeAccessControlListAttribute查询访问控制策略组的配置。
    */ DescribeAccessControlListAttribute(query: DescribeAccessControlListAttributeRequest): Promise<DescribeAccessControlListAttributeResponse>;
    /**
    * 调用DescribeListenerAccessControlAttribute查询监听的白名单配置。
    */ DescribeListenerAccessControlAttribute(query: DescribeListenerAccessControlAttributeRequest): Promise<DescribeListenerAccessControlAttributeResponse>;
    /**
    * 调用DeleteCACertificate删除CA证书。
    */ DeleteCACertificate(query: DeleteCACertificateRequest): Promise<DeleteCACertificateResponse>;
    /**
    * 调用CreateRules为指定的HTTP或HTTPS监听添加转发规则。
    */ CreateRules(query: CreateRulesRequest): Promise<CreateRulesResponse>;
    /**
    * 调用AddBackendServers添加后端服务器。
    */ AddBackendServers(query: AddBackendServersRequest): Promise<AddBackendServersResponse>;
    /**
    * 调用DescribeAvailableResource查询某个Region的可用区支持的资源售卖情况。
    */ DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    /**
    * 调用SetLoadBalancerDeleteProtection设置实例删除保护状态。
    */ SetLoadBalancerDeleteProtection(query: SetLoadBalancerDeleteProtectionRequest): Promise<SetLoadBalancerDeleteProtectionResponse>;
    DescribeMasterSlaveVServerGroupAttribute(query: DescribeMasterSlaveVServerGroupAttributeRequest): Promise<DescribeMasterSlaveVServerGroupAttributeResponse>;
    DeleteMasterSlaveVServerGroup(query: DeleteMasterSlaveVServerGroupRequest): Promise<DeleteMasterSlaveVServerGroupResponse>;
    CreateMasterSlaveVServerGroup(query: CreateMasterSlaveVServerGroupRequest): Promise<CreateMasterSlaveVServerGroupResponse>;
    DescribeMasterSlaveVServerGroups(query: DescribeMasterSlaveVServerGroupsRequest): Promise<DescribeMasterSlaveVServerGroupsResponse>;
}
export default SLB;
