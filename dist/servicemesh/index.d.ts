import { AddClusterIntoServiceMeshRequest } from "./AddClusterIntoServiceMesh/req";
import { AddClusterIntoServiceMeshResponse } from "./AddClusterIntoServiceMesh/res";
import { AddVmAppToMeshRequest } from "./AddVmAppToMesh/req";
import { AddVmAppToMeshResponse } from "./AddVmAppToMesh/res";
import { DeleteServiceMeshRequest } from "./DeleteServiceMesh/req";
import { DeleteServiceMeshResponse } from "./DeleteServiceMesh/res";
import { DescribeCensRequest } from "./DescribeCens/req";
import { DescribeCensResponse } from "./DescribeCens/res";
import { CreateServiceMeshRequest } from "./CreateServiceMesh/req";
import { CreateServiceMeshResponse } from "./CreateServiceMesh/res";
import { DescribeClusterGrafanaRequest } from "./DescribeClusterGrafana/req";
import { DescribeClusterGrafanaResponse } from "./DescribeClusterGrafana/res";
import { DescribeClusterPrometheusRequest } from "./DescribeClusterPrometheus/req";
import { DescribeClusterPrometheusResponse } from "./DescribeClusterPrometheus/res";
import { DescribeClustersInServiceMeshRequest } from "./DescribeClustersInServiceMesh/req";
import { DescribeClustersInServiceMeshResponse } from "./DescribeClustersInServiceMesh/res";
import { DescribeGuestClusterAccessLogDashboardsRequest } from "./DescribeGuestClusterAccessLogDashboards/req";
import { DescribeGuestClusterAccessLogDashboardsResponse } from "./DescribeGuestClusterAccessLogDashboards/res";
import { DescribeServiceMeshDetailRequest } from "./DescribeServiceMeshDetail/req";
import { DescribeServiceMeshDetailResponse } from "./DescribeServiceMeshDetail/res";
import { DescribeServiceMeshKubeconfigRequest } from "./DescribeServiceMeshKubeconfig/req";
import { DescribeServiceMeshKubeconfigResponse } from "./DescribeServiceMeshKubeconfig/res";
import { DescribeServiceMeshesRequest } from "./DescribeServiceMeshes/req";
import { DescribeServiceMeshesResponse } from "./DescribeServiceMeshes/res";
import { DescribeUpgradeVersionRequest } from "./DescribeUpgradeVersion/req";
import { DescribeUpgradeVersionResponse } from "./DescribeUpgradeVersion/res";
import { GetRegisteredServiceEndpointsRequest } from "./GetRegisteredServiceEndpoints/req";
import { GetRegisteredServiceEndpointsResponse } from "./GetRegisteredServiceEndpoints/res";
import { GetRegisteredServiceNamespacesRequest } from "./GetRegisteredServiceNamespaces/req";
import { GetRegisteredServiceNamespacesResponse } from "./GetRegisteredServiceNamespaces/res";
import { GetVmAppMeshInfoRequest } from "./GetVmAppMeshInfo/req";
import { GetVmAppMeshInfoResponse } from "./GetVmAppMeshInfo/res";
import { GetVmMetaRequest } from "./GetVmMeta/req";
import { GetVmMetaResponse } from "./GetVmMeta/res";
import { RemoveClusterFromServiceMeshRequest } from "./RemoveClusterFromServiceMesh/req";
import { RemoveClusterFromServiceMeshResponse } from "./RemoveClusterFromServiceMesh/res";
import { RemoveVmAppFromMeshRequest } from "./RemoveVmAppFromMesh/req";
import { RemoveVmAppFromMeshResponse } from "./RemoveVmAppFromMesh/res";
import { UpdateIstioInjectionConfigRequest } from "./UpdateIstioInjectionConfig/req";
import { UpdateIstioInjectionConfigResponse } from "./UpdateIstioInjectionConfig/res";
import { UpgradeMeshVersionRequest } from "./UpgradeMeshVersion/req";
import { UpgradeMeshVersionResponse } from "./UpgradeMeshVersion/res";
import { UpdateMeshFeatureRequest } from "./UpdateMeshFeature/req";
import { UpdateMeshFeatureResponse } from "./UpdateMeshFeature/res";
import { GetCaCertRequest } from "./GetCaCert/req";
import { GetCaCertResponse } from "./GetCaCert/res";
import { DescribeVpcsRequest } from "./DescribeVpcs/req";
import { DescribeVpcsResponse } from "./DescribeVpcs/res";
import { DescribeVSwitchesRequest } from "./DescribeVSwitches/req";
import { DescribeVSwitchesResponse } from "./DescribeVSwitches/res";
import { AddVMIntoServiceMeshRequest } from "./AddVMIntoServiceMesh/req";
import { AddVMIntoServiceMeshResponse } from "./AddVMIntoServiceMesh/res";
import { DescribeServiceMeshVMsRequest } from "./DescribeServiceMeshVMs/req";
import { DescribeServiceMeshVMsResponse } from "./DescribeServiceMeshVMs/res";
import { RemoveVMFromServiceMeshRequest } from "./RemoveVMFromServiceMesh/req";
import { RemoveVMFromServiceMeshResponse } from "./RemoveVMFromServiceMesh/res";
import { DescribeVMsInServiceMeshRequest } from "./DescribeVMsInServiceMesh/req";
import { DescribeVMsInServiceMeshResponse } from "./DescribeVMsInServiceMesh/res";
import { DescribeMetadataRequest } from "./DescribeMetadata/req";
import { DescribeMetadataResponse } from "./DescribeMetadata/res";
import { DescribeReusableSlbRequest } from "./DescribeReusableSlb/req";
import { DescribeReusableSlbResponse } from "./DescribeReusableSlb/res";
import { DescribeServiceMeshClustersRequest } from "./DescribeServiceMeshClusters/req";
import { DescribeServiceMeshClustersResponse } from "./DescribeServiceMeshClusters/res";
import { DescribeServiceMeshLogsRequest } from "./DescribeServiceMeshLogs/req";
import { DescribeServiceMeshLogsResponse } from "./DescribeServiceMeshLogs/res";
import { DescribeServiceMeshProxyStatusRequest } from "./DescribeServiceMeshProxyStatus/req";
import { DescribeServiceMeshProxyStatusResponse } from "./DescribeServiceMeshProxyStatus/res";
import { DescribeUserPermissionsRequest } from "./DescribeUserPermissions/req";
import { DescribeUserPermissionsResponse } from "./DescribeUserPermissions/res";
import { GrantUserPermissionsRequest } from "./GrantUserPermissions/req";
import { GrantUserPermissionsResponse } from "./GrantUserPermissions/res";
import { DescribeGuestClusterNamespacesRequest } from "./DescribeGuestClusterNamespaces/req";
import { DescribeGuestClusterNamespacesResponse } from "./DescribeGuestClusterNamespaces/res";
import { DescribeGuestClusterPodsRequest } from "./DescribeGuestClusterPods/req";
import { DescribeGuestClusterPodsResponse } from "./DescribeGuestClusterPods/res";
import { ModifyServiceMeshNameRequest } from "./ModifyServiceMeshName/req";
import { ModifyServiceMeshNameResponse } from "./ModifyServiceMeshName/res";
import { DescribeCrTemplatesRequest } from "./DescribeCrTemplates/req";
import { DescribeCrTemplatesResponse } from "./DescribeCrTemplates/res";
import { ReActivateAuditRequest } from "./ReActivateAudit/req";
import { ReActivateAuditResponse } from "./ReActivateAudit/res";
import { UpdateControlPlaneLogConfigRequest } from "./UpdateControlPlaneLogConfig/req";
import { UpdateControlPlaneLogConfigResponse } from "./UpdateControlPlaneLogConfig/res";
import { DescribeServiceMeshAdditionalStatusRequest } from "./DescribeServiceMeshAdditionalStatus/req";
import { DescribeServiceMeshAdditionalStatusResponse } from "./DescribeServiceMeshAdditionalStatus/res";
import { UpgradeMeshEditionPartiallyRequest } from "./UpgradeMeshEditionPartially/req";
import { UpgradeMeshEditionPartiallyResponse } from "./UpgradeMeshEditionPartially/res";
import { DescribeServiceMeshUpgradeStatusRequest } from "./DescribeServiceMeshUpgradeStatus/req";
import { DescribeServiceMeshUpgradeStatusResponse } from "./DescribeServiceMeshUpgradeStatus/res";
import { DescribeNamespaceScopeSidecarConfigRequest } from "./DescribeNamespaceScopeSidecarConfig/req";
import { DescribeNamespaceScopeSidecarConfigResponse } from "./DescribeNamespaceScopeSidecarConfig/res";
import { UpdateNamespaceScopeSidecarConfigRequest } from "./UpdateNamespaceScopeSidecarConfig/req";
import { UpdateNamespaceScopeSidecarConfigResponse } from "./UpdateNamespaceScopeSidecarConfig/res";
import { RevokeKubeconfigRequest } from "./RevokeKubeconfig/req";
import { RevokeKubeconfigResponse } from "./RevokeKubeconfig/res";
import { DescribeVersionsRequest } from "./DescribeVersions/req";
import { DescribeVersionsResponse } from "./DescribeVersions/res";
import { DescribeUsersWithPermissionsRequest } from "./DescribeUsersWithPermissions/req";
import { DescribeUsersWithPermissionsResponse } from "./DescribeUsersWithPermissions/res";
import { DescribeCCMVersionRequest } from "./DescribeCCMVersion/req";
import { DescribeCCMVersionResponse } from "./DescribeCCMVersion/res";
import { DescribeASMGatewayImportedServicesRequest } from "./DescribeASMGatewayImportedServices/req";
import { DescribeASMGatewayImportedServicesResponse } from "./DescribeASMGatewayImportedServices/res";
import { DescribeImportedServicesDetailRequest } from "./DescribeImportedServicesDetail/req";
import { DescribeImportedServicesDetailResponse } from "./DescribeImportedServicesDetail/res";
import { DescribeNodesInstanceTypeRequest } from "./DescribeNodesInstanceType/req";
import { DescribeNodesInstanceTypeResponse } from "./DescribeNodesInstanceType/res";
import { UpdateASMGatewayImportedServicesRequest } from "./UpdateASMGatewayImportedServices/req";
import { UpdateASMGatewayImportedServicesResponse } from "./UpdateASMGatewayImportedServices/res";
import { UpdateASMGatewayRequest } from "./UpdateASMGateway/req";
import { UpdateASMGatewayResponse } from "./UpdateASMGateway/res";
import { CreateASMGatewayRequest } from "./CreateASMGateway/req";
import { CreateASMGatewayResponse } from "./CreateASMGateway/res";
import { DeleteIstioGatewayDomainsRequest } from "./DeleteIstioGatewayDomains/req";
import { DeleteIstioGatewayDomainsResponse } from "./DeleteIstioGatewayDomains/res";
import { CreateIstioGatewayDomainsRequest } from "./CreateIstioGatewayDomains/req";
import { CreateIstioGatewayDomainsResponse } from "./CreateIstioGatewayDomains/res";
import { DescribeGatewaySecretDetailsRequest } from "./DescribeGatewaySecretDetails/req";
import { DescribeGatewaySecretDetailsResponse } from "./DescribeGatewaySecretDetails/res";
import { DescribeIstioGatewayDomainsRequest } from "./DescribeIstioGatewayDomains/req";
import { DescribeIstioGatewayDomainsResponse } from "./DescribeIstioGatewayDomains/res";
import { CreateGatewaySecretRequest } from "./CreateGatewaySecret/req";
import { CreateGatewaySecretResponse } from "./CreateGatewaySecret/res";
import { DeleteGatewaySecretRequest } from "./DeleteGatewaySecret/req";
import { DeleteGatewaySecretResponse } from "./DeleteGatewaySecret/res";
import { UpdateIstioRouteAdditionalStatusRequest } from "./UpdateIstioRouteAdditionalStatus/req";
import { UpdateIstioRouteAdditionalStatusResponse } from "./UpdateIstioRouteAdditionalStatus/res";
import { DescribeIstioGatewayRouteDetailRequest } from "./DescribeIstioGatewayRouteDetail/req";
import { DescribeIstioGatewayRouteDetailResponse } from "./DescribeIstioGatewayRouteDetail/res";
import { DescribeIstioGatewayRoutesRequest } from "./DescribeIstioGatewayRoutes/req";
import { DescribeIstioGatewayRoutesResponse } from "./DescribeIstioGatewayRoutes/res";
import { DeleteGatewayRouteRequest } from "./DeleteGatewayRoute/req";
import { DeleteGatewayRouteResponse } from "./DeleteGatewayRoute/res";
import { UpdateIstioGatewayRoutesRequest } from "./UpdateIstioGatewayRoutes/req";
import { UpdateIstioGatewayRoutesResponse } from "./UpdateIstioGatewayRoutes/res";
import { CreateIstioGatewayRoutesRequest } from "./CreateIstioGatewayRoutes/req";
import { CreateIstioGatewayRoutesResponse } from "./CreateIstioGatewayRoutes/res";
import { DescribeEipResourcesRequest } from "./DescribeEipResources/req";
import { DescribeEipResourcesResponse } from "./DescribeEipResources/res";
import { ModifyApiServerEipResourceRequest } from "./ModifyApiServerEipResource/req";
import { ModifyApiServerEipResourceResponse } from "./ModifyApiServerEipResource/res";
import { UpdateMeshCRAggregationRequest } from "./UpdateMeshCRAggregation/req";
import { UpdateMeshCRAggregationResponse } from "./UpdateMeshCRAggregation/res";
import { UpdateASMNamespaceFromGuestClusterRequest } from "./UpdateASMNamespaceFromGuestCluster/req";
import { UpdateASMNamespaceFromGuestClusterResponse } from "./UpdateASMNamespaceFromGuestCluster/res";
import { CreateSwimLaneGroupRequest } from "./CreateSwimLaneGroup/req";
import { CreateSwimLaneGroupResponse } from "./CreateSwimLaneGroup/res";
import { UpdateSwimLaneRequest } from "./UpdateSwimLane/req";
import { UpdateSwimLaneResponse } from "./UpdateSwimLane/res";
import { GetSwimLaneDetailRequest } from "./GetSwimLaneDetail/req";
import { GetSwimLaneDetailResponse } from "./GetSwimLaneDetail/res";
import { DeleteSwimLaneRequest } from "./DeleteSwimLane/req";
import { DeleteSwimLaneResponse } from "./DeleteSwimLane/res";
import { UpdateSwimLaneGroupRequest } from "./UpdateSwimLaneGroup/req";
import { UpdateSwimLaneGroupResponse } from "./UpdateSwimLaneGroup/res";
import { CreateSwimLaneRequest } from "./CreateSwimLane/req";
import { CreateSwimLaneResponse } from "./CreateSwimLane/res";
import { DeleteSwimLaneGroupRequest } from "./DeleteSwimLaneGroup/req";
import { DeleteSwimLaneGroupResponse } from "./DeleteSwimLaneGroup/res";
import { GetGrafanaDashboardUrlRequest } from "./GetGrafanaDashboardUrl/req";
import { GetGrafanaDashboardUrlResponse } from "./GetGrafanaDashboardUrl/res";
import { GetSwimLaneListRequest } from "./GetSwimLaneList/req";
import { GetSwimLaneListResponse } from "./GetSwimLaneList/res";
import { GetDeploymentBySelectorRequest } from "./GetDeploymentBySelector/req";
import { GetDeploymentBySelectorResponse } from "./GetDeploymentBySelector/res";
import { GetSwimLaneGroupListRequest } from "./GetSwimLaneGroupList/req";
import { GetSwimLaneGroupListResponse } from "./GetSwimLaneGroupList/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UpdateWaypointRequest } from "./UpdateWaypoint/req";
import { UpdateWaypointResponse } from "./UpdateWaypoint/res";
import { CreateWaypointRequest } from "./CreateWaypoint/req";
import { CreateWaypointResponse } from "./CreateWaypoint/res";
import { DeleteWaypointRequest } from "./DeleteWaypoint/req";
import { DeleteWaypointResponse } from "./DeleteWaypoint/res";
import { ListWaypointsRequest } from "./ListWaypoints/req";
import { ListWaypointsResponse } from "./ListWaypoints/res";
import { ListServiceAccountsRequest } from "./ListServiceAccounts/req";
import { ListServiceAccountsResponse } from "./ListServiceAccounts/res";
import { UpdateMeshMultiClusterNetworkRequest } from "./UpdateMeshMultiClusterNetwork/req";
import { UpdateMeshMultiClusterNetworkResponse } from "./UpdateMeshMultiClusterNetwork/res";
import { DescribeMeshMultiClusterNetworkRequest } from "./DescribeMeshMultiClusterNetwork/req";
import { DescribeMeshMultiClusterNetworkResponse } from "./DescribeMeshMultiClusterNetwork/res";
import { ModifyPilotEipResourceRequest } from "./ModifyPilotEipResource/req";
import { ModifyPilotEipResourceResponse } from "./ModifyPilotEipResource/res";

interface SERVICEMESH {
    /**
     * 调用AddClusterIntoServiceMesh添加一个集群到服务网格。
     */
    AddClusterIntoServiceMesh(query: AddClusterIntoServiceMeshRequest): Promise<AddClusterIntoServiceMeshResponse>;
    /**
     * 调用AddVmAppToMesh接口添加非容器应用到服务网格。
     */
    AddVmAppToMesh(query: AddVmAppToMeshRequest): Promise<AddVmAppToMeshResponse>;
    /**
     * 调用DeleteServiceMesh删除一个服务网格实例。
     */
    DeleteServiceMesh(query: DeleteServiceMeshRequest): Promise<DeleteServiceMeshResponse>;
    /**
     * 调用DescribeCens获取同一服务网格下多集群跨VPC的网络连通性检测结果。
     */
    DescribeCens(query: DescribeCensRequest): Promise<DescribeCensResponse>;
    /**
     * 调用CreateServiceMesh创建一个服务网格实例。
     */
    CreateServiceMesh(query: CreateServiceMeshRequest): Promise<CreateServiceMeshResponse>;
    /**
     * 调用DescribeClusterGrafana获取服务网格内集群的Grafana报表信息。
     */
    DescribeClusterGrafana(query: DescribeClusterGrafanaRequest): Promise<DescribeClusterGrafanaResponse>;
    /**
     * 调用DescribeClusterPrometheus获取服务网格内集群的Prometheus公网地址。
     */
    DescribeClusterPrometheus(query: DescribeClusterPrometheusRequest): Promise<DescribeClusterPrometheusResponse>;
    /**
     * 调用DescribeClustersInServiceMesh获取服务网格所在集群的信息列表。
     */
    DescribeClustersInServiceMesh(query: DescribeClustersInServiceMeshRequest): Promise<DescribeClustersInServiceMeshResponse>;
    /**
     * 调用DescribeGuestClusterAccessLogDashboards获取数据面集群的访问日志报表。
     */
    DescribeGuestClusterAccessLogDashboards(query: DescribeGuestClusterAccessLogDashboardsRequest): Promise<DescribeGuestClusterAccessLogDashboardsResponse>;
    /**
     * 调用DescribeServiceMeshDetail获取服务网格详情。
     */
    DescribeServiceMeshDetail(query: DescribeServiceMeshDetailRequest): Promise<DescribeServiceMeshDetailResponse>;
    /**
     * 调用DescribeServiceMeshKubeconfig获取连接服务网格的KubeConfig配置。
     */
    DescribeServiceMeshKubeconfig(query: DescribeServiceMeshKubeconfigRequest): Promise<DescribeServiceMeshKubeconfigResponse>;
    /**
     * 调用DescribeServiceMeshes获取服务网格列表。
     */
    DescribeServiceMeshes(query: DescribeServiceMeshesRequest): Promise<DescribeServiceMeshesResponse>;
    /**
     * 调用DescribeUpgradeVersion获取服务网格的可更新版本信息。
     */
    DescribeUpgradeVersion(query: DescribeUpgradeVersionRequest): Promise<DescribeUpgradeVersionResponse>;
    /**
     * 调用GetRegisteredServiceEndpoints获取注册服务端点信息。
     */
    GetRegisteredServiceEndpoints(query: GetRegisteredServiceEndpointsRequest): Promise<GetRegisteredServiceEndpointsResponse>;
    /**
     * 调用GetRegisteredServiceNamespaces获取注册服务的命名空间列表。
     */
    GetRegisteredServiceNamespaces(query: GetRegisteredServiceNamespacesRequest): Promise<GetRegisteredServiceNamespacesResponse>;
    /**
     * 调用GetVmAppMeshInfo获取VM网格化信息列表。
     */
    GetVmAppMeshInfo(query: GetVmAppMeshInfoRequest): Promise<GetVmAppMeshInfoResponse>;
    /**
     * 调用GetVmMeta获取VM网格化所需的元数据信息。
     */
    GetVmMeta(query: GetVmMetaRequest): Promise<GetVmMetaResponse>;
    /**
     * 调用RemoveClusterFromServiceMesh接口从服务网格中删除一个集群。
     */
    RemoveClusterFromServiceMesh(query: RemoveClusterFromServiceMeshRequest): Promise<RemoveClusterFromServiceMeshResponse>;
    /**
     * 调用RemoveVmAppFromMesh将VM应用从服务网格中删除。
     */
    RemoveVmAppFromMesh(query: RemoveVmAppFromMeshRequest): Promise<RemoveVmAppFromMeshResponse>;
    /**
     * 调用UpdateIstioInjectionConfig修改网格注入设置。
     */
    UpdateIstioInjectionConfig(query: UpdateIstioInjectionConfigRequest): Promise<UpdateIstioInjectionConfigResponse>;
    /**
     * 调用UpgradeMeshVersion升级服务网格的版本。
     */
    UpgradeMeshVersion(query: UpgradeMeshVersionRequest): Promise<UpgradeMeshVersionResponse>;
    /**
     * 调用UpdateMeshFeature更新服务网格的功能配置。
     */
    UpdateMeshFeature(query: UpdateMeshFeatureRequest): Promise<UpdateMeshFeatureResponse>;
    /**
     * 调用GetCaCert获取CA证书。
     */
    GetCaCert(query: GetCaCertRequest): Promise<GetCaCertResponse>;
    /**
     * 调用DescribeVpcs获取指定地域内可用的VPC。
     */
    DescribeVpcs(query: DescribeVpcsRequest): Promise<DescribeVpcsResponse>;
    /**
     * 调用DescribeVSwitches获取指定地域，指定VPC内的虚拟交换机列表。
     */
    DescribeVSwitches(query: DescribeVSwitchesRequest): Promise<DescribeVSwitchesResponse>;
    /**
     * 调用AddVMIntoServiceMesh添加虚拟机到服务网格。
     */
    AddVMIntoServiceMesh(query: AddVMIntoServiceMeshRequest): Promise<AddVMIntoServiceMeshResponse>;
    /**
     * 调用DescribeServiceMeshVMs获取和服务网格同一VPC的ECS。
     */
    DescribeServiceMeshVMs(query: DescribeServiceMeshVMsRequest): Promise<DescribeServiceMeshVMsResponse>;
    /**
     * 调用RemoveVMFromServiceMesh从服务网格中移除虚拟机。
     */
    RemoveVMFromServiceMesh(query: RemoveVMFromServiceMeshRequest): Promise<RemoveVMFromServiceMeshResponse>;
    /**
     * 调用DescribeVMsInServiceMesh获取已经加入到服务网格的虚拟机。
     */
    DescribeVMsInServiceMesh(query: DescribeVMsInServiceMeshRequest): Promise<DescribeVMsInServiceMeshResponse>;
    /**
     * 调用DescribeMetadata获取服务网格ASM的基本信息。
     */
    DescribeMetadata(query: DescribeMetadataRequest): Promise<DescribeMetadataResponse>;
    /**
     * 调用DescribeReusableSlb获取可复用的CLB（原SLB）。
     */
    DescribeReusableSlb(query: DescribeReusableSlbRequest): Promise<DescribeReusableSlbResponse>;
    /**
     * 调用DescribeServiceMeshClusters获取服务网格的可用集群。
     */
    DescribeServiceMeshClusters(query: DescribeServiceMeshClustersRequest): Promise<DescribeServiceMeshClustersResponse>;
    /**
     * 调用DescribeServiceMeshLogs获取网格日志。
     */
    DescribeServiceMeshLogs(query: DescribeServiceMeshLogsRequest): Promise<DescribeServiceMeshLogsResponse>;
    /**
     * 调用DescribeServiceMeshProxyStatus查询IstioProxy状态。
     */
    DescribeServiceMeshProxyStatus(query: DescribeServiceMeshProxyStatusRequest): Promise<DescribeServiceMeshProxyStatusResponse>;
    /**
     * 调用DescribeUserPermissions获取子账号授权信息。
     */
    DescribeUserPermissions(query: DescribeUserPermissionsRequest): Promise<DescribeUserPermissionsResponse>;
    /**
     * 调用GrantUserPermissions更新子账号授权信息。
     */
    GrantUserPermissions(query: GrantUserPermissionsRequest): Promise<GrantUserPermissionsResponse>;
    /**
     * 调用DescribeGuestClusterNamespaces获取加入服务网格的Kubernetes集群的命名空间列表。
     */
    DescribeGuestClusterNamespaces(query: DescribeGuestClusterNamespacesRequest): Promise<DescribeGuestClusterNamespacesResponse>;
    /**
     * 调用DescribeGuestClusterPods获取指定K8s集群指定命名空间内的Pod。
     */
    DescribeGuestClusterPods(query: DescribeGuestClusterPodsRequest): Promise<DescribeGuestClusterPodsResponse>;
    /**
     * 调用ModifyServiceMeshName修改服务网格实例名称。
     */
    ModifyServiceMeshName(query: ModifyServiceMeshNameRequest): Promise<ModifyServiceMeshNameResponse>;
    /**
     * 调用DescribeCrTemplates查询服务网格中常见使用场景下的Istio资源YAML模板。
     */
    DescribeCrTemplates(query: DescribeCrTemplatesRequest): Promise<DescribeCrTemplatesResponse>;
    /**
     * 调用ReActivateAudit重建新的网格审计日志。在开启网格审计后，如果误删了存储审计日志的logproject，可以重新创建一个空白的网格审计日志。
     */
    ReActivateAudit(query: ReActivateAuditRequest): Promise<ReActivateAuditResponse>;
    /**
     * 修改控制面日志采集配置。
     */
    UpdateControlPlaneLogConfig(query: UpdateControlPlaneLogConfigRequest): Promise<UpdateControlPlaneLogConfigResponse>;
    /**
     * 调用DescribeServiceMeshAdditionalStatus查询ASM实例的附加检查信息。
     */
    DescribeServiceMeshAdditionalStatus(query: DescribeServiceMeshAdditionalStatusRequest): Promise<DescribeServiceMeshAdditionalStatusResponse>;
    /**
     * 调用UpgradeMeshEditionPartially升级ASM实例或者将ASM实例切换为专业版。
     */
    UpgradeMeshEditionPartially(query: UpgradeMeshEditionPartiallyRequest): Promise<UpgradeMeshEditionPartiallyResponse>;
    /**
     * 调用DescribeServiceMeshUpgradeStatus查询ASM实例和ASM网关的升级状态。
     */
    DescribeServiceMeshUpgradeStatus(query: DescribeServiceMeshUpgradeStatusRequest): Promise<DescribeServiceMeshUpgradeStatusResponse>;
    /**
     * 调用DescribeNamespaceScopeSidecarConfig查询命名空间级别的Sidecar配置设置。
     */
    DescribeNamespaceScopeSidecarConfig(query: DescribeNamespaceScopeSidecarConfigRequest): Promise<DescribeNamespaceScopeSidecarConfigResponse>;
    /**
     * 调用UpdateNamespaceScopeSidecarConfig更新命名空间级别的Sidecar配置。
     */
    UpdateNamespaceScopeSidecarConfig(query: UpdateNamespaceScopeSidecarConfigRequest): Promise<UpdateNamespaceScopeSidecarConfigResponse>;
    /**
     * 调用RevokeKubeconfig吊销ASM实例的Kubeconfig，并重新生成新的Kubeconfig。
     */
    RevokeKubeconfig(query: RevokeKubeconfigRequest): Promise<RevokeKubeconfigResponse>;
    /**
     * 调用DescribeVersions获取创建网格时可用的ASM版本。
     */
    DescribeVersions(query: DescribeVersionsRequest): Promise<DescribeVersionsResponse>;
    /**
     * 调用DescribeUsersWithPermissions获取所有具有RBAC权限的RAM用户或RAM角色ID。
     */
    DescribeUsersWithPermissions(query: DescribeUsersWithPermissionsRequest): Promise<DescribeUsersWithPermissionsResponse>;
    /**
     * 调用DescribeCCMVersion查询CCM组件版本。
     */
    DescribeCCMVersion(query: DescribeCCMVersionRequest): Promise<DescribeCCMVersionResponse>;
    /**
     * 调用DescribeASMGatewayImportedServices获取ASM网关已导入的服务信息。
     */
    DescribeASMGatewayImportedServices(query: DescribeASMGatewayImportedServicesRequest): Promise<DescribeASMGatewayImportedServicesResponse>;
    /**
     * 调用DescribeImportedServicesDetail获取ASM网关已导入服务的详细信息。
     */
    DescribeImportedServicesDetail(query: DescribeImportedServicesDetailRequest): Promise<DescribeImportedServicesDetailResponse>;
    /**
     * 调用DescribeNodesInstanceType查询数据面节点类型，判断是否支持MultiBuffer性能加速。
     */
    DescribeNodesInstanceType(query: DescribeNodesInstanceTypeRequest): Promise<DescribeNodesInstanceTypeResponse>;
    /**
     * 调用UpdateASMGatewayImportedServices更新ASM网关导入的服务信息，导入或删除网关关联的上游服务。
     */
    UpdateASMGatewayImportedServices(query: UpdateASMGatewayImportedServicesRequest): Promise<UpdateASMGatewayImportedServicesResponse>;
    /**
     * 调用UpdateASMGateway修改ASM网关。
     */
    UpdateASMGateway(query: UpdateASMGatewayRequest): Promise<UpdateASMGatewayResponse>;
    /**
     * 调用CreateASMGateway创建ASM网关。
     */
    CreateASMGateway(query: CreateASMGatewayRequest): Promise<CreateASMGatewayResponse>;
    /**
     * 调用DeleteIstioGatewayDomains删除网关路由。
     */
    DeleteIstioGatewayDomains(query: DeleteIstioGatewayDomainsRequest): Promise<DeleteIstioGatewayDomainsResponse>;
    /**
     * 调用CreateIstioGatewayDomains创建网关域名证书。
     */
    CreateIstioGatewayDomains(query: CreateIstioGatewayDomainsRequest): Promise<CreateIstioGatewayDomainsResponse>;
    /**
     * 调用DescribeGatewaySecretDetails查询网关证书密钥详细信息。
     */
    DescribeGatewaySecretDetails(query: DescribeGatewaySecretDetailsRequest): Promise<DescribeGatewaySecretDetailsResponse>;
    /**
     * 调用DescribeIstioGatewayDomains查询网关域名列表。
     */
    DescribeIstioGatewayDomains(query: DescribeIstioGatewayDomainsRequest): Promise<DescribeIstioGatewayDomainsResponse>;
    /**
     * 调用CreateGatewaySecret创建网关密钥。
     */
    CreateGatewaySecret(query: CreateGatewaySecretRequest): Promise<CreateGatewaySecretResponse>;
    /**
     * 调用DeleteGatewaySecret删除网关密钥。
     */
    DeleteGatewaySecret(query: DeleteGatewaySecretRequest): Promise<DeleteGatewaySecretResponse>;
    /**
     * 调用UpdateIstioRouteAdditionalStatus更新路由额外信息。
     */
    UpdateIstioRouteAdditionalStatus(query: UpdateIstioRouteAdditionalStatusRequest): Promise<UpdateIstioRouteAdditionalStatusResponse>;
    /**
     * 调用DescribeIstioGatewayRouteDetail查看网关路由详情。
     */
    DescribeIstioGatewayRouteDetail(query: DescribeIstioGatewayRouteDetailRequest): Promise<DescribeIstioGatewayRouteDetailResponse>;
    /**
     * 调用DescribeIstioGatewayRoutes查询ASM网关的路由列表。
     */
    DescribeIstioGatewayRoutes(query: DescribeIstioGatewayRoutesRequest): Promise<DescribeIstioGatewayRoutesResponse>;
    /**
     * 调用DeleteGatewayRoute删除网关路由。
     */
    DeleteGatewayRoute(query: DeleteGatewayRouteRequest): Promise<DeleteGatewayRouteResponse>;
    /**
     * 调用UpdateIstioGatewayRoutes更新网关路由。
     */
    UpdateIstioGatewayRoutes(query: UpdateIstioGatewayRoutesRequest): Promise<UpdateIstioGatewayRoutesResponse>;
    /**
     * 调用CreateIstioGatewayRoutes创建ASM网关对应的路由。
     */
    CreateIstioGatewayRoutes(query: CreateIstioGatewayRoutesRequest): Promise<CreateIstioGatewayRoutesResponse>;
    /**
     * 调用DescribeEipResources查询EIP资源列表。
     */
    DescribeEipResources(query: DescribeEipResourcesRequest): Promise<DescribeEipResourcesResponse>;
    /**
     * 调用ModifyApiServerEipResource解绑或绑定API Server的EIP。
     */
    ModifyApiServerEipResource(query: ModifyApiServerEipResourceRequest): Promise<ModifyApiServerEipResourceResponse>;
    /**
     * 调用UpdateMeshCRAggregation更新数据面KubeAPI访问Istio资源功能的启用状态。
     */
    UpdateMeshCRAggregation(query: UpdateMeshCRAggregationRequest): Promise<UpdateMeshCRAggregationResponse>;
    /**
     * 调用UpdateASMNamespaceFromGuestCluster从加入服务网格的Kubernetes集群中同步命名空间信息。
     */
    UpdateASMNamespaceFromGuestCluster(query: UpdateASMNamespaceFromGuestClusterRequest): Promise<UpdateASMNamespaceFromGuestClusterResponse>;
    /**
     * 调用CreateSwimLaneGroup创建泳道组。
     */
    CreateSwimLaneGroup(query: CreateSwimLaneGroupRequest): Promise<CreateSwimLaneGroupResponse>;
    /**
     * 调用UpdateSwimLane更新指定泳道信息。
     */
    UpdateSwimLane(query: UpdateSwimLaneRequest): Promise<UpdateSwimLaneResponse>;
    /**
     * 调用GetSwimLaneDetail获取指定泳道详细信息。
     */
    GetSwimLaneDetail(query: GetSwimLaneDetailRequest): Promise<GetSwimLaneDetailResponse>;
    /**
     * 调用DeleteSwimLane删除指定泳道。
     */
    DeleteSwimLane(query: DeleteSwimLaneRequest): Promise<DeleteSwimLaneResponse>;
    /**
     * 调用UpdateSwimLaneGroup更新对应泳道组。
     */
    UpdateSwimLaneGroup(query: UpdateSwimLaneGroupRequest): Promise<UpdateSwimLaneGroupResponse>;
    /**
     * 调用CreateSwimLane创建泳道。
     */
    CreateSwimLane(query: CreateSwimLaneRequest): Promise<CreateSwimLaneResponse>;
    /**
     * 调用DeleteSwimLaneGroup删除指定泳道组。删除泳道组对应也会删除泳道组下的泳道和相关引流规则。
     */
    DeleteSwimLaneGroup(query: DeleteSwimLaneGroupRequest): Promise<DeleteSwimLaneGroupResponse>;
    /**
     * 调用GetGrafanaDashboardUrl从ARMS获取Grafana仪表盘URL。
     */
    GetGrafanaDashboardUrl(query: GetGrafanaDashboardUrlRequest): Promise<GetGrafanaDashboardUrlResponse>;
    /**
     * 调用GetSwimLaneList获取某个泳道组下所有泳道列表。
     */
    GetSwimLaneList(query: GetSwimLaneListRequest): Promise<GetSwimLaneListResponse>;
    /**
     * 调用GetDeploymentBySelector获取Selector指定的工作负载列表。
     */
    GetDeploymentBySelector(query: GetDeploymentBySelectorRequest): Promise<GetDeploymentBySelectorResponse>;
    /**
     * 调用GetSwimLaneGroupList获取网格实例下所有泳道组列表。
     */
    GetSwimLaneGroupList(query: GetSwimLaneGroupListRequest): Promise<GetSwimLaneGroupListResponse>;
    /**
     * 调用UntagResources删除实例上的用户标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用ListTagResources查询实例上的用户标签。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用TagResources添加或修改资源的用户标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 更新Waypoint
     */
    UpdateWaypoint(query: UpdateWaypointRequest): Promise<UpdateWaypointResponse>;
    /**
     * 创建Waypoint
     */
    CreateWaypoint(query: CreateWaypointRequest): Promise<CreateWaypointResponse>;
    /**
     * 删除Waypoint资源
     */
    DeleteWaypoint(query: DeleteWaypointRequest): Promise<DeleteWaypointResponse>;
    /**
     * 调用ListWaypoints获取数据面集群某个命名空间下所有Waypoint配置。
     */
    ListWaypoints(query: ListWaypointsRequest): Promise<ListWaypointsResponse>;
    /**
     * 列举所有服务账号
     */
    ListServiceAccounts(query: ListServiceAccountsRequest): Promise<ListServiceAccountsResponse>;
    /**
     * 更新服务网格中多个Kubernetes集群的网络分区配置
     */
    UpdateMeshMultiClusterNetwork(query: UpdateMeshMultiClusterNetworkRequest): Promise<UpdateMeshMultiClusterNetworkResponse>;
    /**
     * 获取服务网格中多个Kubernetes集群的网络分区配置描述
     */
    DescribeMeshMultiClusterNetwork(query: DescribeMeshMultiClusterNetworkRequest): Promise<DescribeMeshMultiClusterNetworkResponse>;
    /**
     * ModifyPilotEipResource
     */
    ModifyPilotEipResource(query: ModifyPilotEipResourceRequest): Promise<ModifyPilotEipResourceResponse>;
}
export default SERVICEMESH;
