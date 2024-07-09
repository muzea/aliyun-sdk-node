import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { StopListenerRequest } from "./StopListener/req";
import { StopListenerResponse } from "./StopListener/res";
import { DeleteLoadBalancerRequest } from "./DeleteLoadBalancer/req";
import { DeleteLoadBalancerResponse } from "./DeleteLoadBalancer/res";
import { StartListenerRequest } from "./StartListener/req";
import { StartListenerResponse } from "./StartListener/res";
import { CreateListenerRequest } from "./CreateListener/req";
import { CreateListenerResponse } from "./CreateListener/res";
import { UpdateServerGroupServersAttributeRequest } from "./UpdateServerGroupServersAttribute/req";
import { UpdateServerGroupServersAttributeResponse } from "./UpdateServerGroupServersAttribute/res";
import { GetJobStatusRequest } from "./GetJobStatus/req";
import { GetJobStatusResponse } from "./GetJobStatus/res";
import { RemoveServersFromServerGroupRequest } from "./RemoveServersFromServerGroup/req";
import { RemoveServersFromServerGroupResponse } from "./RemoveServersFromServerGroup/res";
import { DeleteServerGroupRequest } from "./DeleteServerGroup/req";
import { DeleteServerGroupResponse } from "./DeleteServerGroup/res";
import { CreateSecurityPolicyRequest } from "./CreateSecurityPolicy/req";
import { CreateSecurityPolicyResponse } from "./CreateSecurityPolicy/res";
import { UpdateLoadBalancerAddressTypeConfigRequest } from "./UpdateLoadBalancerAddressTypeConfig/req";
import { UpdateLoadBalancerAddressTypeConfigResponse } from "./UpdateLoadBalancerAddressTypeConfig/res";
import { ListServerGroupsRequest } from "./ListServerGroups/req";
import { ListServerGroupsResponse } from "./ListServerGroups/res";
import { ListListenerCertificatesRequest } from "./ListListenerCertificates/req";
import { ListListenerCertificatesResponse } from "./ListListenerCertificates/res";
import { DeleteListenerRequest } from "./DeleteListener/req";
import { DeleteListenerResponse } from "./DeleteListener/res";
import { ListListenersRequest } from "./ListListeners/req";
import { ListListenersResponse } from "./ListListeners/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { ListLoadBalancersRequest } from "./ListLoadBalancers/req";
import { ListLoadBalancersResponse } from "./ListLoadBalancers/res";
import { DetachCommonBandwidthPackageFromLoadBalancerRequest } from "./DetachCommonBandwidthPackageFromLoadBalancer/req";
import { DetachCommonBandwidthPackageFromLoadBalancerResponse } from "./DetachCommonBandwidthPackageFromLoadBalancer/res";
import { ListSecurityPolicyRequest } from "./ListSecurityPolicy/req";
import { ListSecurityPolicyResponse } from "./ListSecurityPolicy/res";
import { UpdateServerGroupAttributeRequest } from "./UpdateServerGroupAttribute/req";
import { UpdateServerGroupAttributeResponse } from "./UpdateServerGroupAttribute/res";
import { ListServerGroupServersRequest } from "./ListServerGroupServers/req";
import { ListServerGroupServersResponse } from "./ListServerGroupServers/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { AttachCommonBandwidthPackageToLoadBalancerRequest } from "./AttachCommonBandwidthPackageToLoadBalancer/req";
import { AttachCommonBandwidthPackageToLoadBalancerResponse } from "./AttachCommonBandwidthPackageToLoadBalancer/res";
import { DeleteSecurityPolicyRequest } from "./DeleteSecurityPolicy/req";
import { DeleteSecurityPolicyResponse } from "./DeleteSecurityPolicy/res";
import { CreateLoadBalancerRequest } from "./CreateLoadBalancer/req";
import { CreateLoadBalancerResponse } from "./CreateLoadBalancer/res";
import { AddServersToServerGroupRequest } from "./AddServersToServerGroup/req";
import { AddServersToServerGroupResponse } from "./AddServersToServerGroup/res";
import { CreateServerGroupRequest } from "./CreateServerGroup/req";
import { CreateServerGroupResponse } from "./CreateServerGroup/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { GetListenerAttributeRequest } from "./GetListenerAttribute/req";
import { GetListenerAttributeResponse } from "./GetListenerAttribute/res";
import { GetLoadBalancerAttributeRequest } from "./GetLoadBalancerAttribute/req";
import { GetLoadBalancerAttributeResponse } from "./GetLoadBalancerAttribute/res";
import { UpdateListenerAttributeRequest } from "./UpdateListenerAttribute/req";
import { UpdateListenerAttributeResponse } from "./UpdateListenerAttribute/res";
import { UpdateLoadBalancerAttributeRequest } from "./UpdateLoadBalancerAttribute/req";
import { UpdateLoadBalancerAttributeResponse } from "./UpdateLoadBalancerAttribute/res";
import { UpdateLoadBalancerZonesRequest } from "./UpdateLoadBalancerZones/req";
import { UpdateLoadBalancerZonesResponse } from "./UpdateLoadBalancerZones/res";
import { UpdateSecurityPolicyAttributeRequest } from "./UpdateSecurityPolicyAttribute/req";
import { UpdateSecurityPolicyAttributeResponse } from "./UpdateSecurityPolicyAttribute/res";
import { ListSystemSecurityPolicyRequest } from "./ListSystemSecurityPolicy/req";
import { ListSystemSecurityPolicyResponse } from "./ListSystemSecurityPolicy/res";
import { DisableLoadBalancerIpv6InternetRequest } from "./DisableLoadBalancerIpv6Internet/req";
import { DisableLoadBalancerIpv6InternetResponse } from "./DisableLoadBalancerIpv6Internet/res";
import { EnableLoadBalancerIpv6InternetRequest } from "./EnableLoadBalancerIpv6Internet/req";
import { EnableLoadBalancerIpv6InternetResponse } from "./EnableLoadBalancerIpv6Internet/res";
import { GetListenerHealthStatusRequest } from "./GetListenerHealthStatus/req";
import { GetListenerHealthStatusResponse } from "./GetListenerHealthStatus/res";
import { LoadBalancerLeaveSecurityGroupRequest } from "./LoadBalancerLeaveSecurityGroup/req";
import { LoadBalancerLeaveSecurityGroupResponse } from "./LoadBalancerLeaveSecurityGroup/res";
import { LoadBalancerJoinSecurityGroupRequest } from "./LoadBalancerJoinSecurityGroup/req";
import { LoadBalancerJoinSecurityGroupResponse } from "./LoadBalancerJoinSecurityGroup/res";
import { UpdateLoadBalancerProtectionRequest } from "./UpdateLoadBalancerProtection/req";
import { UpdateLoadBalancerProtectionResponse } from "./UpdateLoadBalancerProtection/res";
import { StartShiftLoadBalancerZonesRequest } from "./StartShiftLoadBalancerZones/req";
import { StartShiftLoadBalancerZonesResponse } from "./StartShiftLoadBalancerZones/res";
import { CancelShiftLoadBalancerZonesRequest } from "./CancelShiftLoadBalancerZones/req";
import { CancelShiftLoadBalancerZonesResponse } from "./CancelShiftLoadBalancerZones/res";
import { AssociateAdditionalCertificatesWithListenerRequest } from "./AssociateAdditionalCertificatesWithListener/req";
import { AssociateAdditionalCertificatesWithListenerResponse } from "./AssociateAdditionalCertificatesWithListener/res";
import { DisassociateAdditionalCertificatesWithListenerRequest } from "./DisassociateAdditionalCertificatesWithListener/req";
import { DisassociateAdditionalCertificatesWithListenerResponse } from "./DisassociateAdditionalCertificatesWithListener/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { SetHdMonitorRegionConfigRequest } from "./SetHdMonitorRegionConfig/req";
import { SetHdMonitorRegionConfigResponse } from "./SetHdMonitorRegionConfig/res";
import { DescribeHdMonitorRegionConfigRequest } from "./DescribeHdMonitorRegionConfig/req";
import { DescribeHdMonitorRegionConfigResponse } from "./DescribeHdMonitorRegionConfig/res";

interface NLB {
    /**
     * 为指定的资源列表统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 停止网络型负载均衡实例的监听。
     */
    StopListener(query: StopListenerRequest): Promise<StopListenerResponse>;
    /**
     * 删除网络型负载均衡实例。
     */
    DeleteLoadBalancer(query: DeleteLoadBalancerRequest): Promise<DeleteLoadBalancerResponse>;
    /**
     * 启动网络型负载均衡监听。
     */
    StartListener(query: StartListenerRequest): Promise<StartListenerResponse>;
    /**
     * 在网络型负载均衡实例中创建TCP、UDP或TCPSSL监听。
     */
    CreateListener(query: CreateListenerRequest): Promise<CreateListenerResponse>;
    /**
     * 更新网络型负载均衡服务器组中后端服务器的权重和描述信息。
     */
    UpdateServerGroupServersAttribute(query: UpdateServerGroupServersAttributeRequest): Promise<UpdateServerGroupServersAttributeResponse>;
    /**
     * 查询网络型负载均衡的异步任务执行结果信息。
     */
    GetJobStatus(query: GetJobStatusRequest): Promise<GetJobStatusResponse>;
    /**
     * 从网络型负载均衡服务器组中移除后端服务器。
     */
    RemoveServersFromServerGroup(query: RemoveServersFromServerGroupRequest): Promise<RemoveServersFromServerGroupResponse>;
    /**
     * 删除网络型负载均衡的服务器组。
     */
    DeleteServerGroup(query: DeleteServerGroupRequest): Promise<DeleteServerGroupResponse>;
    /**
     * 在指定地域创建TCPSSL监听的自定义安全策略。
     */
    CreateSecurityPolicy(query: CreateSecurityPolicyRequest): Promise<CreateSecurityPolicyResponse>;
    /**
     * 变更网络型负载均衡NLB实例的IPv4地址的网络类型。
     */
    UpdateLoadBalancerAddressTypeConfig(query: UpdateLoadBalancerAddressTypeConfigRequest): Promise<UpdateLoadBalancerAddressTypeConfigResponse>;
    /**
     * 查询网络型负载均衡实例的服务器组列表。
     */
    ListServerGroups(query: ListServerGroupsRequest): Promise<ListServerGroupsResponse>;
    /**
     * 查询TCPSSL监听的服务器证书。
     */
    ListListenerCertificates(query: ListListenerCertificatesRequest): Promise<ListListenerCertificatesResponse>;
    /**
     * 删除网络型负载均衡监听。
     */
    DeleteListener(query: DeleteListenerRequest): Promise<DeleteListenerResponse>;
    /**
     * 查询网络型负载均衡监听列表。
     */
    ListListeners(query: ListListenersRequest): Promise<ListListenersResponse>;
    /**
     * 为指定的资源列表统一解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询NLB一个地域下的可用区列表。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 查询已创建的网络型负载均衡实例的基本信息。
     */
    ListLoadBalancers(query: ListLoadBalancersRequest): Promise<ListLoadBalancersResponse>;
    /**
     * 解绑网络型负载均衡实例中的共享带宽包。
     */
    DetachCommonBandwidthPackageFromLoadBalancer(query: DetachCommonBandwidthPackageFromLoadBalancerRequest): Promise<DetachCommonBandwidthPackageFromLoadBalancerResponse>;
    /**
     * 查询网络型负载均衡的TLS自定义安全策略。
     */
    ListSecurityPolicy(query: ListSecurityPolicyRequest): Promise<ListSecurityPolicyResponse>;
    /**
     * 更新网络型负载均衡服务器组的配置。
     */
    UpdateServerGroupAttribute(query: UpdateServerGroupAttributeRequest): Promise<UpdateServerGroupAttributeResponse>;
    /**
     * 查询网络型负载均衡服务器组中的服务器列表。
     */
    ListServerGroupServers(query: ListServerGroupServersRequest): Promise<ListServerGroupServersResponse>;
    /**
     * 查询指定资源标签。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为网络型负载均衡实例绑定共享带宽包。
     */
    AttachCommonBandwidthPackageToLoadBalancer(query: AttachCommonBandwidthPackageToLoadBalancerRequest): Promise<AttachCommonBandwidthPackageToLoadBalancerResponse>;
    /**
     * 删除网络型负载均衡TLS自定义安全策略。
     */
    DeleteSecurityPolicy(query: DeleteSecurityPolicyRequest): Promise<DeleteSecurityPolicyResponse>;
    /**
     * 创建网络型负载均衡实例。
     */
    CreateLoadBalancer(query: CreateLoadBalancerRequest): Promise<CreateLoadBalancerResponse>;
    /**
     * 向网络型负载均衡服务器组中添加后端服务器。
     */
    AddServersToServerGroup(query: AddServersToServerGroupRequest): Promise<AddServersToServerGroupResponse>;
    /**
     * 在指定地域创建服务器组。
     */
    CreateServerGroup(query: CreateServerGroupRequest): Promise<CreateServerGroupResponse>;
    /**
     * 查询NLB的可用地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 查询网络型负载均衡实例的监听详情。
     */
    GetListenerAttribute(query: GetListenerAttributeRequest): Promise<GetListenerAttributeResponse>;
    /**
     * 查询指定网络型负载均衡实例的详细信息。
     */
    GetLoadBalancerAttribute(query: GetLoadBalancerAttributeRequest): Promise<GetLoadBalancerAttributeResponse>;
    /**
     * 更新网络型负载均衡监听的配置。
     */
    UpdateListenerAttribute(query: UpdateListenerAttributeRequest): Promise<UpdateListenerAttributeResponse>;
    /**
     * 更新网络型负载均衡实例名称等属性。
     */
    UpdateLoadBalancerAttribute(query: UpdateLoadBalancerAttributeRequest): Promise<UpdateLoadBalancerAttributeResponse>;
    /**
     * 修改网络型负载均衡实例可用区及可用区属性。
     */
    UpdateLoadBalancerZones(query: UpdateLoadBalancerZonesRequest): Promise<UpdateLoadBalancerZonesResponse>;
    /**
     * 更新网络型负载均衡自定义安全策略属性。
     */
    UpdateSecurityPolicyAttribute(query: UpdateSecurityPolicyAttributeRequest): Promise<UpdateSecurityPolicyAttributeResponse>;
    /**
     * 查询系统默认的TLS安全策略。
     */
    ListSystemSecurityPolicy(query: ListSystemSecurityPolicyRequest): Promise<ListSystemSecurityPolicyResponse>;
    /**
     * 将双栈NLB实例的Pv6地址从公网变更为私网。
     */
    DisableLoadBalancerIpv6Internet(query: DisableLoadBalancerIpv6InternetRequest): Promise<DisableLoadBalancerIpv6InternetResponse>;
    /**
     * 将双栈NLB实例的IPv6地址从私网变更为公网。
     */
    EnableLoadBalancerIpv6Internet(query: EnableLoadBalancerIpv6InternetRequest): Promise<EnableLoadBalancerIpv6InternetResponse>;
    /**
     * 查询网络型负载均衡实例监听的健康检查状态。
     */
    GetListenerHealthStatus(query: GetListenerHealthStatusRequest): Promise<GetListenerHealthStatusResponse>;
    /**
     * 为网络型负载均衡实例解绑安全组。
     */
    LoadBalancerLeaveSecurityGroup(query: LoadBalancerLeaveSecurityGroupRequest): Promise<LoadBalancerLeaveSecurityGroupResponse>;
    /**
     * 为网络型负载均衡实例绑定已创建的安全组。
     */
    LoadBalancerJoinSecurityGroup(query: LoadBalancerJoinSecurityGroupRequest): Promise<LoadBalancerJoinSecurityGroupResponse>;
    /**
     * 开启或关闭删除保护功能，及更新修改保护功能。
     */
    UpdateLoadBalancerProtection(query: UpdateLoadBalancerProtectionRequest): Promise<UpdateLoadBalancerProtectionResponse>;
    /**
     * 将可用区对应的EIP/VIP从域名解析中摘除。
     */
    StartShiftLoadBalancerZones(query: StartShiftLoadBalancerZonesRequest): Promise<StartShiftLoadBalancerZonesResponse>;
    /**
     * 将可用区对应的EIP/VIP加回到域名解析中。
     */
    CancelShiftLoadBalancerZones(query: CancelShiftLoadBalancerZonesRequest): Promise<CancelShiftLoadBalancerZonesResponse>;
    /**
     * 为TCPSSL监听关联扩展证书。
     */
    AssociateAdditionalCertificatesWithListener(query: AssociateAdditionalCertificatesWithListenerRequest): Promise<AssociateAdditionalCertificatesWithListenerResponse>;
    /**
     * 解除TCPSSL监听关联的扩展证书。
     */
    DisassociateAdditionalCertificatesWithListener(query: DisassociateAdditionalCertificatesWithListenerRequest): Promise<DisassociateAdditionalCertificatesWithListenerResponse>;
    /**
     * 修改云资源所属的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 配置秒级监控存储。
     */
    SetHdMonitorRegionConfig(query: SetHdMonitorRegionConfigRequest): Promise<SetHdMonitorRegionConfigResponse>;
    /**
     * 查询秒级监控存储配置。
     */
    DescribeHdMonitorRegionConfig(query: DescribeHdMonitorRegionConfigRequest): Promise<DescribeHdMonitorRegionConfigResponse>;
}
export default NLB;
