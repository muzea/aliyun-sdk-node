import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { CreateZnodeRequest } from "./CreateZnode/req";
import { CreateZnodeResponse } from "./CreateZnode/res";
import { CreateNacosConfigRequest } from "./CreateNacosConfig/req";
import { CreateNacosConfigResponse } from "./CreateNacosConfig/res";
import { CreateEngineNamespaceRequest } from "./CreateEngineNamespace/req";
import { CreateEngineNamespaceResponse } from "./CreateEngineNamespace/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { DeleteEngineNamespaceRequest } from "./DeleteEngineNamespace/req";
import { DeleteEngineNamespaceResponse } from "./DeleteEngineNamespace/res";
import { DeleteNacosConfigRequest } from "./DeleteNacosConfig/req";
import { DeleteNacosConfigResponse } from "./DeleteNacosConfig/res";
import { DeleteNacosConfigsRequest } from "./DeleteNacosConfigs/req";
import { DeleteNacosConfigsResponse } from "./DeleteNacosConfigs/res";
import { DeleteZnodeRequest } from "./DeleteZnode/req";
import { DeleteZnodeResponse } from "./DeleteZnode/res";
import { GetEngineNamepaceRequest } from "./GetEngineNamepace/req";
import { GetEngineNamepaceResponse } from "./GetEngineNamepace/res";
import { GetNacosConfigRequest } from "./GetNacosConfig/req";
import { GetNacosConfigResponse } from "./GetNacosConfig/res";
import { GetNacosHistoryConfigRequest } from "./GetNacosHistoryConfig/req";
import { GetNacosHistoryConfigResponse } from "./GetNacosHistoryConfig/res";
import { ListAnsInstancesRequest } from "./ListAnsInstances/req";
import { ListAnsInstancesResponse } from "./ListAnsInstances/res";
import { ListAnsServiceClustersRequest } from "./ListAnsServiceClusters/req";
import { ListAnsServiceClustersResponse } from "./ListAnsServiceClusters/res";
import { ListAnsServicesRequest } from "./ListAnsServices/req";
import { ListAnsServicesResponse } from "./ListAnsServices/res";
import { ListClustersRequest } from "./ListClusters/req";
import { ListClustersResponse } from "./ListClusters/res";
import { ListEngineNamespacesRequest } from "./ListEngineNamespaces/req";
import { ListEngineNamespacesResponse } from "./ListEngineNamespaces/res";
import { ListEurekaInstancesRequest } from "./ListEurekaInstances/req";
import { ListEurekaInstancesResponse } from "./ListEurekaInstances/res";
import { ListListenersByConfigRequest } from "./ListListenersByConfig/req";
import { ListListenersByConfigResponse } from "./ListListenersByConfig/res";
import { ListEurekaServicesRequest } from "./ListEurekaServices/req";
import { ListEurekaServicesResponse } from "./ListEurekaServices/res";
import { ListListenersByIpRequest } from "./ListListenersByIp/req";
import { ListListenersByIpResponse } from "./ListListenersByIp/res";
import { ListNacosConfigsRequest } from "./ListNacosConfigs/req";
import { ListNacosConfigsResponse } from "./ListNacosConfigs/res";
import { ListNacosHistoryConfigsRequest } from "./ListNacosHistoryConfigs/req";
import { ListNacosHistoryConfigsResponse } from "./ListNacosHistoryConfigs/res";
import { ListZnodeChildrenRequest } from "./ListZnodeChildren/req";
import { ListZnodeChildrenResponse } from "./ListZnodeChildren/res";
import { QueryBusinessLocationsRequest } from "./QueryBusinessLocations/req";
import { QueryBusinessLocationsResponse } from "./QueryBusinessLocations/res";
import { QueryClusterDetailRequest } from "./QueryClusterDetail/req";
import { QueryClusterDetailResponse } from "./QueryClusterDetail/res";
import { QueryClusterSpecificationRequest } from "./QueryClusterSpecification/req";
import { QueryClusterSpecificationResponse } from "./QueryClusterSpecification/res";
import { QueryConfigRequest } from "./QueryConfig/req";
import { QueryConfigResponse } from "./QueryConfig/res";
import { QueryMonitorRequest } from "./QueryMonitor/req";
import { QueryMonitorResponse } from "./QueryMonitor/res";
import { QueryZnodeDetailRequest } from "./QueryZnodeDetail/req";
import { QueryZnodeDetailResponse } from "./QueryZnodeDetail/res";
import { RestartClusterRequest } from "./RestartCluster/req";
import { RestartClusterResponse } from "./RestartCluster/res";
import { RetryClusterRequest } from "./RetryCluster/req";
import { RetryClusterResponse } from "./RetryCluster/res";
import { UpdateAclRequest } from "./UpdateAcl/req";
import { UpdateAclResponse } from "./UpdateAcl/res";
import { UpdateClusterRequest } from "./UpdateCluster/req";
import { UpdateClusterResponse } from "./UpdateCluster/res";
import { UpdateConfigRequest } from "./UpdateConfig/req";
import { UpdateConfigResponse } from "./UpdateConfig/res";
import { UpdateEngineNamespaceRequest } from "./UpdateEngineNamespace/req";
import { UpdateEngineNamespaceResponse } from "./UpdateEngineNamespace/res";
import { UpdateNacosConfigRequest } from "./UpdateNacosConfig/req";
import { UpdateNacosConfigResponse } from "./UpdateNacosConfig/res";
import { UpdateZnodeRequest } from "./UpdateZnode/req";
import { UpdateZnodeResponse } from "./UpdateZnode/res";
import { UpgradeClusterRequest } from "./UpgradeCluster/req";
import { UpgradeClusterResponse } from "./UpgradeCluster/res";
import { CloneNacosConfigRequest } from "./CloneNacosConfig/req";
import { CloneNacosConfigResponse } from "./CloneNacosConfig/res";
import { ExportNacosConfigRequest } from "./ExportNacosConfig/req";
import { ExportNacosConfigResponse } from "./ExportNacosConfig/res";
import { GetImportFileUrlRequest } from "./GetImportFileUrl/req";
import { GetImportFileUrlResponse } from "./GetImportFileUrl/res";
import { ImportNacosConfigRequest } from "./ImportNacosConfig/req";
import { ImportNacosConfigResponse } from "./ImportNacosConfig/res";
import { ListClusterTypesRequest } from "./ListClusterTypes/req";
import { ListClusterTypesResponse } from "./ListClusterTypes/res";
import { ListClusterConnectionTypesRequest } from "./ListClusterConnectionTypes/req";
import { ListClusterConnectionTypesResponse } from "./ListClusterConnectionTypes/res";
import { ListClusterVersionsRequest } from "./ListClusterVersions/req";
import { ListClusterVersionsResponse } from "./ListClusterVersions/res";
import { QueryClusterDiskSpecificationRequest } from "./QueryClusterDiskSpecification/req";
import { QueryClusterDiskSpecificationResponse } from "./QueryClusterDiskSpecification/res";
import { AddMockRuleRequest } from "./AddMockRule/req";
import { AddMockRuleResponse } from "./AddMockRule/res";
import { GetOverviewRequest } from "./GetOverview/req";
import { GetOverviewResponse } from "./GetOverview/res";
import { UpdateNacosInstanceRequest } from "./UpdateNacosInstance/req";
import { UpdateNacosInstanceResponse } from "./UpdateNacosInstance/res";
import { DeleteNacosServiceRequest } from "./DeleteNacosService/req";
import { DeleteNacosServiceResponse } from "./DeleteNacosService/res";
import { CreateApplicationRequest } from "./CreateApplication/req";
import { CreateApplicationResponse } from "./CreateApplication/res";
import { GetGovernanceKubernetesClusterRequest } from "./GetGovernanceKubernetesCluster/req";
import { GetGovernanceKubernetesClusterResponse } from "./GetGovernanceKubernetesCluster/res";
import { ModifyGovernanceKubernetesClusterRequest } from "./ModifyGovernanceKubernetesCluster/req";
import { ModifyGovernanceKubernetesClusterResponse } from "./ModifyGovernanceKubernetesCluster/res";
import { GetMseFeatureSwitchRequest } from "./GetMseFeatureSwitch/req";
import { GetMseFeatureSwitchResponse } from "./GetMseFeatureSwitch/res";
import { QueryGatewayTypeRequest } from "./QueryGatewayType/req";
import { QueryGatewayTypeResponse } from "./QueryGatewayType/res";
import { QuerySlbSpecRequest } from "./QuerySlbSpec/req";
import { QuerySlbSpecResponse } from "./QuerySlbSpec/res";
import { AddAuthPolicyRequest } from "./AddAuthPolicy/req";
import { AddAuthPolicyResponse } from "./AddAuthPolicy/res";
import { AddAuthResourceRequest } from "./AddAuthResource/req";
import { AddAuthResourceResponse } from "./AddAuthResource/res";
import { AddGatewayRequest } from "./AddGateway/req";
import { AddGatewayResponse } from "./AddGateway/res";
import { AddBlackWhiteListRequest } from "./AddBlackWhiteList/req";
import { AddBlackWhiteListResponse } from "./AddBlackWhiteList/res";
import { AddGatewayAuthRequest } from "./AddGatewayAuth/req";
import { AddGatewayAuthResponse } from "./AddGatewayAuth/res";
import { AddGatewayDomainRequest } from "./AddGatewayDomain/req";
import { AddGatewayDomainResponse } from "./AddGatewayDomain/res";
import { AddGatewayRouteRequest } from "./AddGatewayRoute/req";
import { AddGatewayRouteResponse } from "./AddGatewayRoute/res";
import { AddSSLCertRequest } from "./AddSSLCert/req";
import { AddSSLCertResponse } from "./AddSSLCert/res";
import { AddServiceSourceRequest } from "./AddServiceSource/req";
import { AddServiceSourceResponse } from "./AddServiceSource/res";
import { ApplyTagPoliciesRequest } from "./ApplyTagPolicies/req";
import { ApplyTagPoliciesResponse } from "./ApplyTagPolicies/res";
import { ApplyGatewayRouteRequest } from "./ApplyGatewayRoute/req";
import { ApplyGatewayRouteResponse } from "./ApplyGatewayRoute/res";
import { DeleteAuthResourceRequest } from "./DeleteAuthResource/req";
import { DeleteAuthResourceResponse } from "./DeleteAuthResource/res";
import { DeleteGatewayRequest } from "./DeleteGateway/req";
import { DeleteGatewayResponse } from "./DeleteGateway/res";
import { DeleteGatewayDomainRequest } from "./DeleteGatewayDomain/req";
import { DeleteGatewayDomainResponse } from "./DeleteGatewayDomain/res";
import { DeleteGatewayRouteRequest } from "./DeleteGatewayRoute/req";
import { DeleteGatewayRouteResponse } from "./DeleteGatewayRoute/res";
import { DeleteGatewayServiceRequest } from "./DeleteGatewayService/req";
import { DeleteGatewayServiceResponse } from "./DeleteGatewayService/res";
import { DeleteServiceSourceRequest } from "./DeleteServiceSource/req";
import { DeleteServiceSourceResponse } from "./DeleteServiceSource/res";
import { GetApplicationInstanceListRequest } from "./GetApplicationInstanceList/req";
import { GetApplicationInstanceListResponse } from "./GetApplicationInstanceList/res";
import { GetApplicationListRequest } from "./GetApplicationList/req";
import { GetApplicationListResponse } from "./GetApplicationList/res";
import { GetBlackWhiteListRequest } from "./GetBlackWhiteList/req";
import { GetBlackWhiteListResponse } from "./GetBlackWhiteList/res";
import { GetGatewayAuthDetailRequest } from "./GetGatewayAuthDetail/req";
import { GetGatewayAuthDetailResponse } from "./GetGatewayAuthDetail/res";
import { GetGatewayDomainDetailRequest } from "./GetGatewayDomainDetail/req";
import { GetGatewayDomainDetailResponse } from "./GetGatewayDomainDetail/res";
import { GetGatewayRouteDetailRequest } from "./GetGatewayRouteDetail/req";
import { GetGatewayRouteDetailResponse } from "./GetGatewayRouteDetail/res";
import { GetGatewayServiceDetailRequest } from "./GetGatewayServiceDetail/req";
import { GetGatewayServiceDetailResponse } from "./GetGatewayServiceDetail/res";
import { GetKubernetesSourceRequest } from "./GetKubernetesSource/req";
import { GetKubernetesSourceResponse } from "./GetKubernetesSource/res";
import { GetMseSourceRequest } from "./GetMseSource/req";
import { GetMseSourceResponse } from "./GetMseSource/res";
import { GetServiceListRequest } from "./GetServiceList/req";
import { GetServiceListResponse } from "./GetServiceList/res";
import { GetServiceListPageRequest } from "./GetServiceListPage/req";
import { GetServiceListPageResponse } from "./GetServiceListPage/res";
import { GetServiceMethodPageRequest } from "./GetServiceMethodPage/req";
import { GetServiceMethodPageResponse } from "./GetServiceMethodPage/res";
import { ImportServicesRequest } from "./ImportServices/req";
import { ImportServicesResponse } from "./ImportServices/res";
import { ListApplicationsWithTagRulesRequest } from "./ListApplicationsWithTagRules/req";
import { ListApplicationsWithTagRulesResponse } from "./ListApplicationsWithTagRules/res";
import { ListAuthPolicyRequest } from "./ListAuthPolicy/req";
import { ListAuthPolicyResponse } from "./ListAuthPolicy/res";
import { ListGatewayRequest } from "./ListGateway/req";
import { ListGatewayResponse } from "./ListGateway/res";
import { ListGatewayDomainRequest } from "./ListGatewayDomain/req";
import { ListGatewayDomainResponse } from "./ListGatewayDomain/res";
import { ListGatewayRouteRequest } from "./ListGatewayRoute/req";
import { ListGatewayRouteResponse } from "./ListGatewayRoute/res";
import { ListGatewayServiceRequest } from "./ListGatewayService/req";
import { ListGatewayServiceResponse } from "./ListGatewayService/res";
import { ListServiceSourceRequest } from "./ListServiceSource/req";
import { ListServiceSourceResponse } from "./ListServiceSource/res";
import { ListSSLCertRequest } from "./ListSSLCert/req";
import { ListSSLCertResponse } from "./ListSSLCert/res";
import { OfflineGatewayRouteRequest } from "./OfflineGatewayRoute/req";
import { OfflineGatewayRouteResponse } from "./OfflineGatewayRoute/res";
import { PullServicesRequest } from "./PullServices/req";
import { PullServicesResponse } from "./PullServices/res";
import { RemoveApplicationRequest } from "./RemoveApplication/req";
import { RemoveApplicationResponse } from "./RemoveApplication/res";
import { RemoveAuthPolicyRequest } from "./RemoveAuthPolicy/req";
import { RemoveAuthPolicyResponse } from "./RemoveAuthPolicy/res";
import { UpdateBlackWhiteListRequest } from "./UpdateBlackWhiteList/req";
import { UpdateBlackWhiteListResponse } from "./UpdateBlackWhiteList/res";
import { UpdateAuthPolicyRequest } from "./UpdateAuthPolicy/req";
import { UpdateAuthPolicyResponse } from "./UpdateAuthPolicy/res";
import { UpdateGatewayDomainRequest } from "./UpdateGatewayDomain/req";
import { UpdateGatewayDomainResponse } from "./UpdateGatewayDomain/res";
import { UpdateGatewayRouteRequest } from "./UpdateGatewayRoute/req";
import { UpdateGatewayRouteResponse } from "./UpdateGatewayRoute/res";
import { UpdateSSLCertRequest } from "./UpdateSSLCert/req";
import { UpdateSSLCertResponse } from "./UpdateSSLCert/res";
import { UpdateServiceSourceRequest } from "./UpdateServiceSource/req";
import { UpdateServiceSourceResponse } from "./UpdateServiceSource/res";
import { GetImageRequest } from "./GetImage/req";
import { GetImageResponse } from "./GetImage/res";
import { UpdateImageRequest } from "./UpdateImage/req";
import { UpdateImageResponse } from "./UpdateImage/res";
import { AddGatewaySlbRequest } from "./AddGatewaySlb/req";
import { AddGatewaySlbResponse } from "./AddGatewaySlb/res";
import { DeleteGatewaySlbRequest } from "./DeleteGatewaySlb/req";
import { DeleteGatewaySlbResponse } from "./DeleteGatewaySlb/res";
import { ListGatewaySlbRequest } from "./ListGatewaySlb/req";
import { ListGatewaySlbResponse } from "./ListGatewaySlb/res";
import { SelectGatewaySlbRequest } from "./SelectGatewaySlb/req";
import { SelectGatewaySlbResponse } from "./SelectGatewaySlb/res";
import { UpdateGatewayNameRequest } from "./UpdateGatewayName/req";
import { UpdateGatewayNameResponse } from "./UpdateGatewayName/res";
import { UpdateGatewayRouteHTTPRewriteRequest } from "./UpdateGatewayRouteHTTPRewrite/req";
import { UpdateGatewayRouteHTTPRewriteResponse } from "./UpdateGatewayRouteHTTPRewrite/res";
import { UpdateGatewayRouteHeaderOpRequest } from "./UpdateGatewayRouteHeaderOp/req";
import { UpdateGatewayRouteHeaderOpResponse } from "./UpdateGatewayRouteHeaderOp/res";
import { GetGatewayRequest } from "./GetGateway/req";
import { GetGatewayResponse } from "./GetGateway/res";
import { QueryGatewayRegionRequest } from "./QueryGatewayRegion/req";
import { QueryGatewayRegionResponse } from "./QueryGatewayRegion/res";
import { GetGatewayOptionRequest } from "./GetGatewayOption/req";
import { GetGatewayOptionResponse } from "./GetGatewayOption/res";
import { UpdateGatewayOptionRequest } from "./UpdateGatewayOption/req";
import { UpdateGatewayOptionResponse } from "./UpdateGatewayOption/res";
import { UpdateGatewayServiceVersionRequest } from "./UpdateGatewayServiceVersion/req";
import { UpdateGatewayServiceVersionResponse } from "./UpdateGatewayServiceVersion/res";
import { DeleteGatewayServiceVersionRequest } from "./DeleteGatewayServiceVersion/req";
import { DeleteGatewayServiceVersionResponse } from "./DeleteGatewayServiceVersion/res";
import { AddGatewayServiceVersionRequest } from "./AddGatewayServiceVersion/req";
import { AddGatewayServiceVersionResponse } from "./AddGatewayServiceVersion/res";
import { UpdateGatewayRouteCORSRequest } from "./UpdateGatewayRouteCORS/req";
import { UpdateGatewayRouteCORSResponse } from "./UpdateGatewayRouteCORS/res";
import { QueryGovernanceKubernetesClusterRequest } from "./QueryGovernanceKubernetesCluster/req";
import { QueryGovernanceKubernetesClusterResponse } from "./QueryGovernanceKubernetesCluster/res";
import { UpdateGatewayRouteTimeoutRequest } from "./UpdateGatewayRouteTimeout/req";
import { UpdateGatewayRouteTimeoutResponse } from "./UpdateGatewayRouteTimeout/res";
import { UpdateGatewayRouteRetryRequest } from "./UpdateGatewayRouteRetry/req";
import { UpdateGatewayRouteRetryResponse } from "./UpdateGatewayRouteRetry/res";
import { GetAppMessageQueueRouteRequest } from "./GetAppMessageQueueRoute/req";
import { GetAppMessageQueueRouteResponse } from "./GetAppMessageQueueRoute/res";
import { UpdateMessageQueueRouteRequest } from "./UpdateMessageQueueRoute/req";
import { UpdateMessageQueueRouteResponse } from "./UpdateMessageQueueRoute/res";
import { CreateNacosServiceRequest } from "./CreateNacosService/req";
import { CreateNacosServiceResponse } from "./CreateNacosService/res";
import { UpdateNacosServiceRequest } from "./UpdateNacosService/req";
import { UpdateNacosServiceResponse } from "./UpdateNacosService/res";
import { CreateNacosInstanceRequest } from "./CreateNacosInstance/req";
import { CreateNacosInstanceResponse } from "./CreateNacosInstance/res";
import { UpdateNacosClusterRequest } from "./UpdateNacosCluster/req";
import { UpdateNacosClusterResponse } from "./UpdateNacosCluster/res";
import { FetchLosslessRuleListRequest } from "./FetchLosslessRuleList/req";
import { FetchLosslessRuleListResponse } from "./FetchLosslessRuleList/res";
import { ModifyLosslessRuleRequest } from "./ModifyLosslessRule/req";
import { ModifyLosslessRuleResponse } from "./ModifyLosslessRule/res";
import { UpdateGatewayServiceTrafficPolicyRequest } from "./UpdateGatewayServiceTrafficPolicy/req";
import { UpdateGatewayServiceTrafficPolicyResponse } from "./UpdateGatewayServiceTrafficPolicy/res";
import { GetTagsBySwimmingLaneGroupIdRequest } from "./GetTagsBySwimmingLaneGroupId/req";
import { GetTagsBySwimmingLaneGroupIdResponse } from "./GetTagsBySwimmingLaneGroupId/res";
import { DeleteSwimmingLaneRequest } from "./DeleteSwimmingLane/req";
import { DeleteSwimmingLaneResponse } from "./DeleteSwimmingLane/res";
import { QueryAllSwimmingLaneGroupRequest } from "./QueryAllSwimmingLaneGroup/req";
import { QueryAllSwimmingLaneGroupResponse } from "./QueryAllSwimmingLaneGroup/res";
import { ListAppBySwimmingLaneGroupTagRequest } from "./ListAppBySwimmingLaneGroupTag/req";
import { ListAppBySwimmingLaneGroupTagResponse } from "./ListAppBySwimmingLaneGroupTag/res";
import { QuerySwimmingLaneByIdRequest } from "./QuerySwimmingLaneById/req";
import { QuerySwimmingLaneByIdResponse } from "./QuerySwimmingLaneById/res";
import { CreateOrUpdateSwimmingLaneGroupRequest } from "./CreateOrUpdateSwimmingLaneGroup/req";
import { CreateOrUpdateSwimmingLaneGroupResponse } from "./CreateOrUpdateSwimmingLaneGroup/res";
import { QueryAllSwimmingLaneRequest } from "./QueryAllSwimmingLane/req";
import { QueryAllSwimmingLaneResponse } from "./QueryAllSwimmingLane/res";
import { CreateOrUpdateSwimmingLaneRequest } from "./CreateOrUpdateSwimmingLane/req";
import { CreateOrUpdateSwimmingLaneResponse } from "./CreateOrUpdateSwimmingLane/res";
import { DeleteSwimmingLaneGroupRequest } from "./DeleteSwimmingLaneGroup/req";
import { DeleteSwimmingLaneGroupResponse } from "./DeleteSwimmingLaneGroup/res";
import { DeleteNacosInstanceRequest } from "./DeleteNacosInstance/req";
import { DeleteNacosInstanceResponse } from "./DeleteNacosInstance/res";
import { ListSecurityGroupRequest } from "./ListSecurityGroup/req";
import { ListSecurityGroupResponse } from "./ListSecurityGroup/res";
import { AddSecurityGroupRuleRequest } from "./AddSecurityGroupRule/req";
import { AddSecurityGroupRuleResponse } from "./AddSecurityGroupRule/res";
import { DeleteSecurityGroupRuleRequest } from "./DeleteSecurityGroupRule/req";
import { DeleteSecurityGroupRuleResponse } from "./DeleteSecurityGroupRule/res";
import { ListSecurityGroupRuleRequest } from "./ListSecurityGroupRule/req";
import { ListSecurityGroupRuleResponse } from "./ListSecurityGroupRule/res";
import { UpdateGatewayRouteWafStatusRequest } from "./UpdateGatewayRouteWafStatus/req";
import { UpdateGatewayRouteWafStatusResponse } from "./UpdateGatewayRouteWafStatus/res";
import { GetPluginConfigRequest } from "./GetPluginConfig/req";
import { GetPluginConfigResponse } from "./GetPluginConfig/res";
import { GetPluginsRequest } from "./GetPlugins/req";
import { GetPluginsResponse } from "./GetPlugins/res";
import { UpdatePluginConfigRequest } from "./UpdatePluginConfig/req";
import { UpdatePluginConfigResponse } from "./UpdatePluginConfig/res";
import { QueryClusterInfoRequest } from "./QueryClusterInfo/req";
import { QueryClusterInfoResponse } from "./QueryClusterInfo/res";
import { QueryInstancesInfoRequest } from "./QueryInstancesInfo/req";
import { QueryInstancesInfoResponse } from "./QueryInstancesInfo/res";
import { CreateMseServiceApplicationRequest } from "./CreateMseServiceApplication/req";
import { CreateMseServiceApplicationResponse } from "./CreateMseServiceApplication/res";
import { UpdateClusterSpecRequest } from "./UpdateClusterSpec/req";
import { UpdateClusterSpecResponse } from "./UpdateClusterSpec/res";
import { UpdateGatewaySpecRequest } from "./UpdateGatewaySpec/req";
import { UpdateGatewaySpecResponse } from "./UpdateGatewaySpec/res";
import { ListNamingTrackRequest } from "./ListNamingTrack/req";
import { ListNamingTrackResponse } from "./ListNamingTrack/res";
import { ListConfigTrackRequest } from "./ListConfigTrack/req";
import { ListConfigTrackResponse } from "./ListConfigTrack/res";
import { UpdateGatewayServiceCheckRequest } from "./UpdateGatewayServiceCheck/req";
import { UpdateGatewayServiceCheckResponse } from "./UpdateGatewayServiceCheck/res";
import { ImportZookeeperDataRequest } from "./ImportZookeeperData/req";
import { ImportZookeeperDataResponse } from "./ImportZookeeperData/res";
import { GetZookeeperDataImportUrlRequest } from "./GetZookeeperDataImportUrl/req";
import { GetZookeeperDataImportUrlResponse } from "./GetZookeeperDataImportUrl/res";
import { ListZkTrackRequest } from "./ListZkTrack/req";
import { ListZkTrackResponse } from "./ListZkTrack/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListClusterHealthCheckTaskRequest } from "./ListClusterHealthCheckTask/req";
import { ListClusterHealthCheckTaskResponse } from "./ListClusterHealthCheckTask/res";
import { OrderClusterHealthCheckRiskNoticeRequest } from "./OrderClusterHealthCheckRiskNotice/req";
import { OrderClusterHealthCheckRiskNoticeResponse } from "./OrderClusterHealthCheckRiskNotice/res";
import { PutClusterHealthCheckTaskRequest } from "./PutClusterHealthCheckTask/req";
import { PutClusterHealthCheckTaskResponse } from "./PutClusterHealthCheckTask/res";
import { GetServiceListenersRequest } from "./GetServiceListeners/req";
import { GetServiceListenersResponse } from "./GetServiceListeners/res";
import { ListInstanceCountRequest } from "./ListInstanceCount/req";
import { ListInstanceCountResponse } from "./ListInstanceCount/res";
import { UpdateMigrationTaskRequest } from "./UpdateMigrationTask/req";
import { UpdateMigrationTaskResponse } from "./UpdateMigrationTask/res";
import { DeleteMigrationTaskRequest } from "./DeleteMigrationTask/req";
import { DeleteMigrationTaskResponse } from "./DeleteMigrationTask/res";
import { ListMigrationTaskRequest } from "./ListMigrationTask/req";
import { ListMigrationTaskResponse } from "./ListMigrationTask/res";
import { AddMigrationTaskRequest } from "./AddMigrationTask/req";
import { AddMigrationTaskResponse } from "./AddMigrationTask/res";
import { ListExportZookeeperDataRequest } from "./ListExportZookeeperData/req";
import { ListExportZookeeperDataResponse } from "./ListExportZookeeperData/res";
import { ExportZookeeperDataRequest } from "./ExportZookeeperData/req";
import { ExportZookeeperDataResponse } from "./ExportZookeeperData/res";
import { BindSentinelBlockFallbackDefinitionRequest } from "./BindSentinelBlockFallbackDefinition/req";
import { BindSentinelBlockFallbackDefinitionResponse } from "./BindSentinelBlockFallbackDefinition/res";
import { ListSentinelBlockFallbackDefinitionsRequest } from "./ListSentinelBlockFallbackDefinitions/req";
import { ListSentinelBlockFallbackDefinitionsResponse } from "./ListSentinelBlockFallbackDefinitions/res";
import { UpdateIsolationRuleRequest } from "./UpdateIsolationRule/req";
import { UpdateIsolationRuleResponse } from "./UpdateIsolationRule/res";
import { DeleteIsolationRulesRequest } from "./DeleteIsolationRules/req";
import { DeleteIsolationRulesResponse } from "./DeleteIsolationRules/res";
import { ListIsolationRulesRequest } from "./ListIsolationRules/req";
import { ListIsolationRulesResponse } from "./ListIsolationRules/res";
import { CreateIsolationRuleRequest } from "./CreateIsolationRule/req";
import { CreateIsolationRuleResponse } from "./CreateIsolationRule/res";
import { QueryNamespaceRequest } from "./QueryNamespace/req";
import { QueryNamespaceResponse } from "./QueryNamespace/res";
import { DeleteFlowRulesRequest } from "./DeleteFlowRules/req";
import { DeleteFlowRulesResponse } from "./DeleteFlowRules/res";
import { ListFlowRulesRequest } from "./ListFlowRules/req";
import { ListFlowRulesResponse } from "./ListFlowRules/res";
import { UpdateFlowRuleRequest } from "./UpdateFlowRule/req";
import { UpdateFlowRuleResponse } from "./UpdateFlowRule/res";
import { CreateFlowRuleRequest } from "./CreateFlowRule/req";
import { CreateFlowRuleResponse } from "./CreateFlowRule/res";
import { DeleteCircuitBreakerRulesRequest } from "./DeleteCircuitBreakerRules/req";
import { DeleteCircuitBreakerRulesResponse } from "./DeleteCircuitBreakerRules/res";
import { UpdateCircuitBreakerRuleRequest } from "./UpdateCircuitBreakerRule/req";
import { UpdateCircuitBreakerRuleResponse } from "./UpdateCircuitBreakerRule/res";
import { ListCircuitBreakerRulesRequest } from "./ListCircuitBreakerRules/req";
import { ListCircuitBreakerRulesResponse } from "./ListCircuitBreakerRules/res";
import { CreateCircuitBreakerRuleRequest } from "./CreateCircuitBreakerRule/req";
import { CreateCircuitBreakerRuleResponse } from "./CreateCircuitBreakerRule/res";
import { DeleteNamespaceRequest } from "./DeleteNamespace/req";
import { DeleteNamespaceResponse } from "./DeleteNamespace/res";
import { GetGatewayAuthConsumerDetailRequest } from "./GetGatewayAuthConsumerDetail/req";
import { GetGatewayAuthConsumerDetailResponse } from "./GetGatewayAuthConsumerDetail/res";
import { DeleteGatewayAuthConsumerRequest } from "./DeleteGatewayAuthConsumer/req";
import { DeleteGatewayAuthConsumerResponse } from "./DeleteGatewayAuthConsumer/res";
import { UpdateGatewayAuthConsumerResourceStatusRequest } from "./UpdateGatewayAuthConsumerResourceStatus/req";
import { UpdateGatewayAuthConsumerResourceStatusResponse } from "./UpdateGatewayAuthConsumerResourceStatus/res";
import { DeleteGatewayAuthConsumerResourceRequest } from "./DeleteGatewayAuthConsumerResource/req";
import { DeleteGatewayAuthConsumerResourceResponse } from "./DeleteGatewayAuthConsumerResource/res";
import { AddGatewayAuthConsumerRequest } from "./AddGatewayAuthConsumer/req";
import { AddGatewayAuthConsumerResponse } from "./AddGatewayAuthConsumer/res";
import { UpdateGatewayAuthConsumerStatusRequest } from "./UpdateGatewayAuthConsumerStatus/req";
import { UpdateGatewayAuthConsumerStatusResponse } from "./UpdateGatewayAuthConsumerStatus/res";
import { UpdateGatewayAuthConsumerResourceRequest } from "./UpdateGatewayAuthConsumerResource/req";
import { UpdateGatewayAuthConsumerResourceResponse } from "./UpdateGatewayAuthConsumerResource/res";
import { ListGatewayAuthConsumerRequest } from "./ListGatewayAuthConsumer/req";
import { ListGatewayAuthConsumerResponse } from "./ListGatewayAuthConsumer/res";
import { ListGatewayRouteOnAuthRequest } from "./ListGatewayRouteOnAuth/req";
import { ListGatewayRouteOnAuthResponse } from "./ListGatewayRouteOnAuth/res";
import { UpdateGatewayAuthConsumerRequest } from "./UpdateGatewayAuthConsumer/req";
import { UpdateGatewayAuthConsumerResponse } from "./UpdateGatewayAuthConsumer/res";
import { ListGatewayAuthConsumerResourceRequest } from "./ListGatewayAuthConsumerResource/req";
import { ListGatewayAuthConsumerResourceResponse } from "./ListGatewayAuthConsumerResource/res";
import { UpdateGatewayRouteAuthRequest } from "./UpdateGatewayRouteAuth/req";
import { UpdateGatewayRouteAuthResponse } from "./UpdateGatewayRouteAuth/res";
import { GetLosslessRuleByAppRequest } from "./GetLosslessRuleByApp/req";
import { GetLosslessRuleByAppResponse } from "./GetLosslessRuleByApp/res";
import { EnableProxyProtocolRequest } from "./EnableProxyProtocol/req";
import { EnableProxyProtocolResponse } from "./EnableProxyProtocol/res";
import { ListGatewayZoneRequest } from "./ListGatewayZone/req";
import { ListGatewayZoneResponse } from "./ListGatewayZone/res";
import { ListAppBySwimmingLaneGroupTagsRequest } from "./ListAppBySwimmingLaneGroupTags/req";
import { ListAppBySwimmingLaneGroupTagsResponse } from "./ListAppBySwimmingLaneGroupTags/res";
import { CreateGatewayCircuitBreakerRuleRequest } from "./CreateGatewayCircuitBreakerRule/req";
import { CreateGatewayCircuitBreakerRuleResponse } from "./CreateGatewayCircuitBreakerRule/res";
import { DeleteGatewayFlowRuleRequest } from "./DeleteGatewayFlowRule/req";
import { DeleteGatewayFlowRuleResponse } from "./DeleteGatewayFlowRule/res";
import { UpdateGatewayIsolationRuleRequest } from "./UpdateGatewayIsolationRule/req";
import { UpdateGatewayIsolationRuleResponse } from "./UpdateGatewayIsolationRule/res";
import { UpdateGatewayCircuitBreakerRuleRequest } from "./UpdateGatewayCircuitBreakerRule/req";
import { UpdateGatewayCircuitBreakerRuleResponse } from "./UpdateGatewayCircuitBreakerRule/res";
import { UpdateGatewayFlowRuleRequest } from "./UpdateGatewayFlowRule/req";
import { UpdateGatewayFlowRuleResponse } from "./UpdateGatewayFlowRule/res";
import { CreateGatewayIsolationRuleRequest } from "./CreateGatewayIsolationRule/req";
import { CreateGatewayIsolationRuleResponse } from "./CreateGatewayIsolationRule/res";
import { ListGatewayCircuitBreakerRuleRequest } from "./ListGatewayCircuitBreakerRule/req";
import { ListGatewayCircuitBreakerRuleResponse } from "./ListGatewayCircuitBreakerRule/res";
import { ListGatewayIsolationRuleRequest } from "./ListGatewayIsolationRule/req";
import { ListGatewayIsolationRuleResponse } from "./ListGatewayIsolationRule/res";
import { ListGatewayFlowRuleRequest } from "./ListGatewayFlowRule/req";
import { ListGatewayFlowRuleResponse } from "./ListGatewayFlowRule/res";
import { DeleteGatewayIsolationRuleRequest } from "./DeleteGatewayIsolationRule/req";
import { DeleteGatewayIsolationRuleResponse } from "./DeleteGatewayIsolationRule/res";
import { DeleteGatewayCircuitBreakerRuleRequest } from "./DeleteGatewayCircuitBreakerRule/req";
import { DeleteGatewayCircuitBreakerRuleResponse } from "./DeleteGatewayCircuitBreakerRule/res";
import { CreateGatewayFlowRuleRequest } from "./CreateGatewayFlowRule/req";
import { CreateGatewayFlowRuleResponse } from "./CreateGatewayFlowRule/res";
import { CloneSentinelRuleFromAhasRequest } from "./CloneSentinelRuleFromAhas/req";
import { CloneSentinelRuleFromAhasResponse } from "./CloneSentinelRuleFromAhas/res";

interface MSE {
    /**
     * 创建一个注册配置中心（ZooKeeper、Nacos等）集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 创建Zookeeper数据节点。
     */
    CreateZnode(query: CreateZnodeRequest): Promise<CreateZnodeResponse>;
    /**
     * 创建一个Nacos配置。
     */
    CreateNacosConfig(query: CreateNacosConfigRequest): Promise<CreateNacosConfigResponse>;
    /**
     * 创建一个Nacos命名空间。
     */
    CreateEngineNamespace(query: CreateEngineNamespaceRequest): Promise<CreateEngineNamespaceResponse>;
    /**
     * 删除一个注册配置中心集群。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 删除Nacos命名空间。
     */
    DeleteEngineNamespace(query: DeleteEngineNamespaceRequest): Promise<DeleteEngineNamespaceResponse>;
    /**
     * 删除Nacos配置。
     */
    DeleteNacosConfig(query: DeleteNacosConfigRequest): Promise<DeleteNacosConfigResponse>;
    /**
     * 批量删除多个Nacos配置。
     */
    DeleteNacosConfigs(query: DeleteNacosConfigsRequest): Promise<DeleteNacosConfigsResponse>;
    /**
     * 释放Zookeeper数据节点。
     */
    DeleteZnode(query: DeleteZnodeRequest): Promise<DeleteZnodeResponse>;
    /**
     * 查询Nacos命名空间列表。
     */
    GetEngineNamepace(query: GetEngineNamepaceRequest): Promise<GetEngineNamepaceResponse>;
    /**
     * 获取Nacos配置。
     */
    GetNacosConfig(query: GetNacosConfigRequest): Promise<GetNacosConfigResponse>;
    /**
     * 查询Nacos配置变更历史列表。
     */
    GetNacosHistoryConfig(query: GetNacosHistoryConfigRequest): Promise<GetNacosHistoryConfigResponse>;
    /**
     * 查询Nacos服务实例列表。
     */
    ListAnsInstances(query: ListAnsInstancesRequest): Promise<ListAnsInstancesResponse>;
    /**
     * 查询Nacos服务的集群列表。
     */
    ListAnsServiceClusters(query: ListAnsServiceClustersRequest): Promise<ListAnsServiceClustersResponse>;
    /**
     * 查询Nacos服务详情。
     */
    ListAnsServices(query: ListAnsServicesRequest): Promise<ListAnsServicesResponse>;
    /**
     * 查询注册配置中心集群列表。
     */
    ListClusters(query: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * 查询Nacos命名空间列表。
     */
    ListEngineNamespaces(query: ListEngineNamespacesRequest): Promise<ListEngineNamespacesResponse>;
    /**
     * 查询Eureka实例列表。
     */
    ListEurekaInstances(query: ListEurekaInstancesRequest): Promise<ListEurekaInstancesResponse>;
    /**
     * 根据配置信息查询监听者。
     */
    ListListenersByConfig(query: ListListenersByConfigRequest): Promise<ListListenersByConfigResponse>;
    /**
     * 查询Eureka服务列表。
     */
    ListEurekaServices(query: ListEurekaServicesRequest): Promise<ListEurekaServicesResponse>;
    /**
     * 根据IP查询监听者列表。
     */
    ListListenersByIp(query: ListListenersByIpRequest): Promise<ListListenersByIpResponse>;
    /**
     * 查询Nacos配置列表。
     */
    ListNacosConfigs(query: ListNacosConfigsRequest): Promise<ListNacosConfigsResponse>;
    /**
     * 查询Nacos配置历史列表。
     */
    ListNacosHistoryConfigs(query: ListNacosHistoryConfigsRequest): Promise<ListNacosHistoryConfigsResponse>;
    /**
     * 查询ZooKeeper数据子节点。
     */
    ListZnodeChildren(query: ListZnodeChildrenRequest): Promise<ListZnodeChildrenResponse>;
    /**
     * 查询地域信息。
     */
    QueryBusinessLocations(query: QueryBusinessLocationsRequest): Promise<QueryBusinessLocationsResponse>;
    /**
     * 接口查询集群详情。
     */
    QueryClusterDetail(query: QueryClusterDetailRequest): Promise<QueryClusterDetailResponse>;
    /**
     * 查询支持的集群规格列表。
     */
    QueryClusterSpecification(query: QueryClusterSpecificationRequest): Promise<QueryClusterSpecificationResponse>;
    /**
     * 查询集群配置信息。
     */
    QueryConfig(query: QueryConfigRequest): Promise<QueryConfigResponse>;
    /**
     * 查询监控信息。
     */
    QueryMonitor(query: QueryMonitorRequest): Promise<QueryMonitorResponse>;
    /**
     * 查询ZooKeeper数据节点信息。
     */
    QueryZnodeDetail(query: QueryZnodeDetailRequest): Promise<QueryZnodeDetailResponse>;
    /**
     * 重启注册配置中心集群。
     */
    RestartCluster(query: RestartClusterRequest): Promise<RestartClusterResponse>;
    /**
     * 创建超时时，调用RetryCluster接口重试集群。
     */
    RetryCluster(query: RetryClusterRequest): Promise<RetryClusterResponse>;
    /**
     * 修改白名单。
     */
    UpdateAcl(query: UpdateAclRequest): Promise<UpdateAclResponse>;
    /**
     * 修改集群信息。
     */
    UpdateCluster(query: UpdateClusterRequest): Promise<UpdateClusterResponse>;
    /**
     * 更新集群配置。
     */
    UpdateConfig(query: UpdateConfigRequest): Promise<UpdateConfigResponse>;
    /**
     * 更新引擎命名空间。
     */
    UpdateEngineNamespace(query: UpdateEngineNamespaceRequest): Promise<UpdateEngineNamespaceResponse>;
    /**
     * 更新一个Nacos配置。
     */
    UpdateNacosConfig(query: UpdateNacosConfigRequest): Promise<UpdateNacosConfigResponse>;
    /**
     * 更新Zookeeper数据节点。
     */
    UpdateZnode(query: UpdateZnodeRequest): Promise<UpdateZnodeResponse>;
    /**
     * 升级集群版本。
     */
    UpgradeCluster(query: UpgradeClusterRequest): Promise<UpgradeClusterResponse>;
    /**
     * 将已有的Nacos配置克隆到其他命名空间。
     */
    CloneNacosConfig(query: CloneNacosConfigRequest): Promise<CloneNacosConfigResponse>;
    /**
     * 导出指定的Nacos配置。
     */
    ExportNacosConfig(query: ExportNacosConfigRequest): Promise<ExportNacosConfigResponse>;
    /**
     * 获取Nacos配置导入时获取文件的上传地址。
     */
    GetImportFileUrl(query: GetImportFileUrlRequest): Promise<GetImportFileUrlResponse>;
    /**
     * 使用配置文件导入Nacos配置。
     */
    ImportNacosConfig(query: ImportNacosConfigRequest): Promise<ImportNacosConfigResponse>;
    /**
     * 查询支持开通的引擎类型。
     */
    ListClusterTypes(query: ListClusterTypesRequest): Promise<ListClusterTypesResponse>;
    /**
     * 查询支持的集群连接类型。
     */
    ListClusterConnectionTypes(query: ListClusterConnectionTypesRequest): Promise<ListClusterConnectionTypesResponse>;
    /**
     * 查询支持的集群版本信息。
     */
    ListClusterVersions(query: ListClusterVersionsRequest): Promise<ListClusterVersionsResponse>;
    /**
     * 查询支持的集群磁盘规格信息。
     */
    QueryClusterDiskSpecification(query: QueryClusterDiskSpecificationRequest): Promise<QueryClusterDiskSpecificationResponse>;
    /**
     * 创建Mock规则。
     */
    AddMockRule(query: AddMockRuleRequest): Promise<AddMockRuleResponse>;
    /**
     * 查询治理概览信息。
     */
    GetOverview(query: GetOverviewRequest): Promise<GetOverviewResponse>;
    /**
     * 更新注册在Nacos中的实例信息。
     */
    UpdateNacosInstance(query: UpdateNacosInstanceRequest): Promise<UpdateNacosInstanceResponse>;
    /**
     * 删除一个Nacos服务。
     */
    DeleteNacosService(query: DeleteNacosServiceRequest): Promise<DeleteNacosServiceResponse>;
    /**
     * 创建应用。
     */
    CreateApplication(query: CreateApplicationRequest): Promise<CreateApplicationResponse>;
    /**
     * 获取服务治理的kubernetes集群信息。
     */
    GetGovernanceKubernetesCluster(query: GetGovernanceKubernetesClusterRequest): Promise<GetGovernanceKubernetesClusterResponse>;
    /**
     * 修改已接入服务治理的集群信息。
     */
    ModifyGovernanceKubernetesCluster(query: ModifyGovernanceKubernetesClusterRequest): Promise<ModifyGovernanceKubernetesClusterResponse>;
    /**
     * 获取MSE能力开关。
     */
    GetMseFeatureSwitch(query: GetMseFeatureSwitchRequest): Promise<GetMseFeatureSwitchResponse>;
    /**
     * 查询网关可用类型。
     */
    QueryGatewayType(query: QueryGatewayTypeRequest): Promise<QueryGatewayTypeResponse>;
    /**
     * 查询SLB类型。
     */
    QuerySlbSpec(query: QuerySlbSpecRequest): Promise<QuerySlbSpecResponse>;
    /**
     * 通过AddAuthPolicy接口创建服务鉴权规则。
     */
    AddAuthPolicy(query: AddAuthPolicyRequest): Promise<AddAuthPolicyResponse>;
    /**
     * 网关鉴权-创建授权信息。
     */
    AddAuthResource(query: AddAuthResourceRequest): Promise<AddAuthResourceResponse>;
    /**
     * 添加网关。
     */
    AddGateway(query: AddGatewayRequest): Promise<AddGatewayResponse>;
    /**
     * 添加黑白名单。
     */
    AddBlackWhiteList(query: AddBlackWhiteListRequest): Promise<AddBlackWhiteListResponse>;
    /**
     * 创建网关鉴权。
     */
    AddGatewayAuth(query: AddGatewayAuthRequest): Promise<AddGatewayAuthResponse>;
    /**
     * 添加网关关联域名。
     */
    AddGatewayDomain(query: AddGatewayDomainRequest): Promise<AddGatewayDomainResponse>;
    /**
     * 添加网关路由。
     */
    AddGatewayRoute(query: AddGatewayRouteRequest): Promise<AddGatewayRouteResponse>;
    /**
     * 网关域名关联证书，证书可托管在云盾服务。
     */
    AddSSLCert(query: AddSSLCertRequest): Promise<AddSSLCertResponse>;
    /**
     * 创建Nacos服务来源。
     */
    AddServiceSource(query: AddServiceSourceRequest): Promise<AddServiceSourceResponse>;
    /**
     * 修改标签路由规则。
     */
    ApplyTagPolicies(query: ApplyTagPoliciesRequest): Promise<ApplyTagPoliciesResponse>;
    /**
     * 发布网关路由。
     */
    ApplyGatewayRoute(query: ApplyGatewayRouteRequest): Promise<ApplyGatewayRouteResponse>;
    /**
     * 删除授权资源。
     */
    DeleteAuthResource(query: DeleteAuthResourceRequest): Promise<DeleteAuthResourceResponse>;
    /**
     * 删除指定网关。
     */
    DeleteGateway(query: DeleteGatewayRequest): Promise<DeleteGatewayResponse>;
    /**
     * 删除网关关联域名。
     */
    DeleteGatewayDomain(query: DeleteGatewayDomainRequest): Promise<DeleteGatewayDomainResponse>;
    /**
     * 删除网关路由。
     */
    DeleteGatewayRoute(query: DeleteGatewayRouteRequest): Promise<DeleteGatewayRouteResponse>;
    /**
     * 删除网关服务。
     */
    DeleteGatewayService(query: DeleteGatewayServiceRequest): Promise<DeleteGatewayServiceResponse>;
    /**
     * 删除网关服务来源。
     */
    DeleteServiceSource(query: DeleteServiceSourceRequest): Promise<DeleteServiceSourceResponse>;
    /**
     * 查询微服务应用实例列表。
     */
    GetApplicationInstanceList(query: GetApplicationInstanceListRequest): Promise<GetApplicationInstanceListResponse>;
    /**
     * 通过GetApplicationList接口获取应用列表。
     */
    GetApplicationList(query: GetApplicationListRequest): Promise<GetApplicationListResponse>;
    /**
     * 查询网关黑白名单。
     */
    GetBlackWhiteList(query: GetBlackWhiteListRequest): Promise<GetBlackWhiteListResponse>;
    /**
     * 获取网关鉴权详情。
     */
    GetGatewayAuthDetail(query: GetGatewayAuthDetailRequest): Promise<GetGatewayAuthDetailResponse>;
    /**
     * 查询网关域名详情。
     */
    GetGatewayDomainDetail(query: GetGatewayDomainDetailRequest): Promise<GetGatewayDomainDetailResponse>;
    /**
     * 查询网关路由详情。
     */
    GetGatewayRouteDetail(query: GetGatewayRouteDetailRequest): Promise<GetGatewayRouteDetailResponse>;
    /**
     * 查询服务详情。
     */
    GetGatewayServiceDetail(query: GetGatewayServiceDetailRequest): Promise<GetGatewayServiceDetailResponse>;
    /**
     * 获取当前所有ACK集群来源信息。
     */
    GetKubernetesSource(query: GetKubernetesSourceRequest): Promise<GetKubernetesSourceResponse>;
    /**
     * 查询已有MSE Nacos。
     */
    GetMseSource(query: GetMseSourceRequest): Promise<GetMseSourceResponse>;
    /**
     * 通过GetServiceList接口查询应用服务信息。
     */
    GetServiceList(query: GetServiceListRequest): Promise<GetServiceListResponse>;
    /**
     * 查询微服务应用的版本。
     */
    GetServiceListPage(query: GetServiceListPageRequest): Promise<GetServiceListPageResponse>;
    /**
     * 获取服务接口列表。
     */
    GetServiceMethodPage(query: GetServiceMethodPageRequest): Promise<GetServiceMethodPageResponse>;
    /**
     * 订阅导入网关的服务。
     */
    ImportServices(query: ImportServicesRequest): Promise<ImportServicesResponse>;
    /**
     * 通过ListApplicationsWithTagRules接口获取应用的路由规则。
     */
    ListApplicationsWithTagRules(query: ListApplicationsWithTagRulesRequest): Promise<ListApplicationsWithTagRulesResponse>;
    /**
     * 通过ListAuthPolicy接口查询服务鉴权规则列表。
     */
    ListAuthPolicy(query: ListAuthPolicyRequest): Promise<ListAuthPolicyResponse>;
    /**
     * 查询该网关列表信息。
     */
    ListGateway(query: ListGatewayRequest): Promise<ListGatewayResponse>;
    /**
     * 查询网关已关联域名列表。
     */
    ListGatewayDomain(query: ListGatewayDomainRequest): Promise<ListGatewayDomainResponse>;
    /**
     * 查询网关路由列表。
     */
    ListGatewayRoute(query: ListGatewayRouteRequest): Promise<ListGatewayRouteResponse>;
    /**
     * 查询网关已订阅的服务列表。
     */
    ListGatewayService(query: ListGatewayServiceRequest): Promise<ListGatewayServiceResponse>;
    /**
     * 查询已关联来源列表。
     */
    ListServiceSource(query: ListServiceSourceRequest): Promise<ListServiceSourceResponse>;
    /**
     * 获取网关证书列表。
     */
    ListSSLCert(query: ListSSLCertRequest): Promise<ListSSLCertResponse>;
    /**
     * 下线网关路由。
     */
    OfflineGatewayRoute(query: OfflineGatewayRouteRequest): Promise<OfflineGatewayRouteResponse>;
    /**
     * 查询指定来源可导入服务信息。
     */
    PullServices(query: PullServicesRequest): Promise<PullServicesResponse>;
    /**
     * 删除单个应用。
     */
    RemoveApplication(query: RemoveApplicationRequest): Promise<RemoveApplicationResponse>;
    /**
     * 通过RemoveAuthPolicy接口删除服务鉴权规则。
     */
    RemoveAuthPolicy(query: RemoveAuthPolicyRequest): Promise<RemoveAuthPolicyResponse>;
    /**
     * 更新网关黑白名单。
     */
    UpdateBlackWhiteList(query: UpdateBlackWhiteListRequest): Promise<UpdateBlackWhiteListResponse>;
    /**
     * 通过UpdateAuthPolicy接口更新服务鉴权规则。
     */
    UpdateAuthPolicy(query: UpdateAuthPolicyRequest): Promise<UpdateAuthPolicyResponse>;
    /**
     * 修改关联域名信息。
     */
    UpdateGatewayDomain(query: UpdateGatewayDomainRequest): Promise<UpdateGatewayDomainResponse>;
    /**
     * 更新网关路由。
     */
    UpdateGatewayRoute(query: UpdateGatewayRouteRequest): Promise<UpdateGatewayRouteResponse>;
    /**
     * 更换证书。
     */
    UpdateSSLCert(query: UpdateSSLCertRequest): Promise<UpdateSSLCertResponse>;
    /**
     * 修改云原生网关服务来源，目前仅支持对含有Ingress监听配置的ACK容器服务进行修改操作。
     */
    UpdateServiceSource(query: UpdateServiceSourceRequest): Promise<UpdateServiceSourceResponse>;
    /**
     * 查询当前版本可升级的最大版本号。
     */
    GetImage(query: GetImageRequest): Promise<GetImageResponse>;
    /**
     * 升级目标集群的版本号。
     */
    UpdateImage(query: UpdateImageRequest): Promise<UpdateImageResponse>;
    /**
     * 关联SLB。
     */
    AddGatewaySlb(query: AddGatewaySlbRequest): Promise<AddGatewaySlbResponse>;
    /**
     * 取消关联SLB。
     */
    DeleteGatewaySlb(query: DeleteGatewaySlbRequest): Promise<DeleteGatewaySlbResponse>;
    /**
     * 查询网关入口SLB。
     */
    ListGatewaySlb(query: ListGatewaySlbRequest): Promise<ListGatewaySlbResponse>;
    /**
     * 接口，查询用户已有（启动中状态无监听）SLB。
     */
    SelectGatewaySlb(query: SelectGatewaySlbRequest): Promise<SelectGatewaySlbResponse>;
    /**
     * 修改网关名称。
     */
    UpdateGatewayName(query: UpdateGatewayNameRequest): Promise<UpdateGatewayNameResponse>;
    /**
     * 更新网关路由的重写策略。
     */
    UpdateGatewayRouteHTTPRewrite(query: UpdateGatewayRouteHTTPRewriteRequest): Promise<UpdateGatewayRouteHTTPRewriteResponse>;
    /**
     * 修改网关路由Header设置。
     */
    UpdateGatewayRouteHeaderOp(query: UpdateGatewayRouteHeaderOpRequest): Promise<UpdateGatewayRouteHeaderOpResponse>;
    /**
     * 获取网关的所属VPC，所属交换机等基本信息。
     */
    GetGateway(query: GetGatewayRequest): Promise<GetGatewayResponse>;
    /**
     * 查询网关支持的地域。
     */
    QueryGatewayRegion(query: QueryGatewayRegionRequest): Promise<QueryGatewayRegionResponse>;
    /**
     * 获取网关全局参数。
     */
    GetGatewayOption(query: GetGatewayOptionRequest): Promise<GetGatewayOptionResponse>;
    /**
     * 更新网关参数。
     */
    UpdateGatewayOption(query: UpdateGatewayOptionRequest): Promise<UpdateGatewayOptionResponse>;
    /**
     * 更新修改服务。
     */
    UpdateGatewayServiceVersion(query: UpdateGatewayServiceVersionRequest): Promise<UpdateGatewayServiceVersionResponse>;
    /**
     * 删除网关服务版本。
     */
    DeleteGatewayServiceVersion(query: DeleteGatewayServiceVersionRequest): Promise<DeleteGatewayServiceVersionResponse>;
    /**
     * 添加服务版本。
     */
    AddGatewayServiceVersion(query: AddGatewayServiceVersionRequest): Promise<AddGatewayServiceVersionResponse>;
    /**
     * 修改网关路由跨域策略。
     */
    UpdateGatewayRouteCORS(query: UpdateGatewayRouteCORSRequest): Promise<UpdateGatewayRouteCORSResponse>;
    /**
     * 获取微服务治理K8s集群信息列表。
     */
    QueryGovernanceKubernetesCluster(query: QueryGovernanceKubernetesClusterRequest): Promise<QueryGovernanceKubernetesClusterResponse>;
    /**
     * 修改网关路由超时策略。
     */
    UpdateGatewayRouteTimeout(query: UpdateGatewayRouteTimeoutRequest): Promise<UpdateGatewayRouteTimeoutResponse>;
    /**
     * 修改网关路由重试策略。
     */
    UpdateGatewayRouteRetry(query: UpdateGatewayRouteRetryRequest): Promise<UpdateGatewayRouteRetryResponse>;
    /**
     * 获取应用消息灰度相关的信息。
     */
    GetAppMessageQueueRoute(query: GetAppMessageQueueRouteRequest): Promise<GetAppMessageQueueRouteResponse>;
    /**
     * 更新应用消息灰度的配置。
     */
    UpdateMessageQueueRoute(query: UpdateMessageQueueRouteRequest): Promise<UpdateMessageQueueRouteResponse>;
    /**
     * 创建Nacos服务。
     */
    CreateNacosService(query: CreateNacosServiceRequest): Promise<CreateNacosServiceResponse>;
    /**
     * 更新Nacos服务。
     */
    UpdateNacosService(query: UpdateNacosServiceRequest): Promise<UpdateNacosServiceResponse>;
    /**
     * 创建Nacos实例。
     */
    CreateNacosInstance(query: CreateNacosInstanceRequest): Promise<CreateNacosInstanceResponse>;
    /**
     * 更新Nacos集群信息。
     */
    UpdateNacosCluster(query: UpdateNacosClusterRequest): Promise<UpdateNacosClusterResponse>;
    /**
     * 获取无损上下线规则列表。
     */
    FetchLosslessRuleList(query: FetchLosslessRuleListRequest): Promise<FetchLosslessRuleListResponse>;
    /**
     * 修改用户无损上下线配置。
     */
    ModifyLosslessRule(query: ModifyLosslessRuleRequest): Promise<ModifyLosslessRuleResponse>;
    /**
     * 更新服务流量策略。
     */
    UpdateGatewayServiceTrafficPolicy(query: UpdateGatewayServiceTrafficPolicyRequest): Promise<UpdateGatewayServiceTrafficPolicyResponse>;
    /**
     * 用于获取当前泳道组内的所有标签。
     */
    GetTagsBySwimmingLaneGroupId(query: GetTagsBySwimmingLaneGroupIdRequest): Promise<GetTagsBySwimmingLaneGroupIdResponse>;
    /**
     * 用于删除全链路泳道。
     */
    DeleteSwimmingLane(query: DeleteSwimmingLaneRequest): Promise<DeleteSwimmingLaneResponse>;
    /**
     * 用于查询所有泳道组。
     */
    QueryAllSwimmingLaneGroup(query: QueryAllSwimmingLaneGroupRequest): Promise<QueryAllSwimmingLaneGroupResponse>;
    /**
     * 用于获取当前泳道组内的指定标签的应用列表。
     */
    ListAppBySwimmingLaneGroupTag(query: ListAppBySwimmingLaneGroupTagRequest): Promise<ListAppBySwimmingLaneGroupTagResponse>;
    /**
     * 用于通过泳道ID查询泳道信息。
     */
    QuerySwimmingLaneById(query: QuerySwimmingLaneByIdRequest): Promise<QuerySwimmingLaneByIdResponse>;
    /**
     * 用于创建或者更新全链路灰度泳道组。
     */
    CreateOrUpdateSwimmingLaneGroup(query: CreateOrUpdateSwimmingLaneGroupRequest): Promise<CreateOrUpdateSwimmingLaneGroupResponse>;
    /**
     * 用于查询当前泳道组内所有泳道。
     */
    QueryAllSwimmingLane(query: QueryAllSwimmingLaneRequest): Promise<QueryAllSwimmingLaneResponse>;
    /**
     * 用于创建或者更新全链路灰度泳道。
     */
    CreateOrUpdateSwimmingLane(query: CreateOrUpdateSwimmingLaneRequest): Promise<CreateOrUpdateSwimmingLaneResponse>;
    /**
     * 用于删除全链路泳道组。
     */
    DeleteSwimmingLaneGroup(query: DeleteSwimmingLaneGroupRequest): Promise<DeleteSwimmingLaneGroupResponse>;
    /**
     * 删除Nacos服务下持久化实例。
     */
    DeleteNacosInstance(query: DeleteNacosInstanceRequest): Promise<DeleteNacosInstanceResponse>;
    /**
     * 获取安全组列表。
     */
    ListSecurityGroup(query: ListSecurityGroupRequest): Promise<ListSecurityGroupResponse>;
    /**
     * 添加网关安全组规则。
     */
    AddSecurityGroupRule(query: AddSecurityGroupRuleRequest): Promise<AddSecurityGroupRuleResponse>;
    /**
     * 删除网关安全组规则。
     */
    DeleteSecurityGroupRule(query: DeleteSecurityGroupRuleRequest): Promise<DeleteSecurityGroupRuleResponse>;
    /**
     * 查询网关安全组列表。
     */
    ListSecurityGroupRule(query: ListSecurityGroupRuleRequest): Promise<ListSecurityGroupRuleResponse>;
    /**
     * 更新路由waf状态。
     */
    UpdateGatewayRouteWafStatus(query: UpdateGatewayRouteWafStatusRequest): Promise<UpdateGatewayRouteWafStatusResponse>;
    /**
     * 获取插件配置。
     */
    GetPluginConfig(query: GetPluginConfigRequest): Promise<GetPluginConfigResponse>;
    /**
     * 获取插件市场插件。
     */
    GetPlugins(query: GetPluginsRequest): Promise<GetPluginsResponse>;
    /**
     * 更新插件配置。
     */
    UpdatePluginConfig(query: UpdatePluginConfigRequest): Promise<UpdatePluginConfigResponse>;
    /**
     * 查询集群的静态信息。
     */
    QueryClusterInfo(query: QueryClusterInfoRequest): Promise<QueryClusterInfoResponse>;
    /**
     * 查询指定集群的运行时数据。
     */
    QueryInstancesInfo(query: QueryInstancesInfoRequest): Promise<QueryInstancesInfoResponse>;
    /**
     * 创建应用。
     */
    CreateMseServiceApplication(query: CreateMseServiceApplicationRequest): Promise<CreateMseServiceApplicationResponse>;
    /**
     * 更新注册配置中心集群节点数或规格（支持按量付费和包年包月）。
     */
    UpdateClusterSpec(query: UpdateClusterSpecRequest): Promise<UpdateClusterSpecResponse>;
    /**
     * 更新云原生网关集群节点数或规格（支持按量付费和包年包月）。
     */
    UpdateGatewaySpec(query: UpdateGatewaySpecRequest): Promise<UpdateGatewaySpecResponse>;
    /**
     * 获取Nacos注册中心的轨迹数据。
     */
    ListNamingTrack(query: ListNamingTrackRequest): Promise<ListNamingTrackResponse>;
    /**
     * 获取Nacos配置中心的轨迹数据。
     */
    ListConfigTrack(query: ListConfigTrackRequest): Promise<ListConfigTrackResponse>;
    /**
     * 更新云原生网关指定服务的健康检查策略。
     */
    UpdateGatewayServiceCheck(query: UpdateGatewayServiceCheckRequest): Promise<UpdateGatewayServiceCheckResponse>;
    /**
     * 发起Zookeeper数据导入任务，使Zookeeper集群开始导入目标URL内的数据。
     */
    ImportZookeeperData(query: ImportZookeeperDataRequest): Promise<ImportZookeeperDataResponse>;
    /**
     * 获取上传数据文件的URL，用户能通过此URL上传Zookeeper待导入的数据文件。
     */
    GetZookeeperDataImportUrl(query: GetZookeeperDataImportUrlRequest): Promise<GetZookeeperDataImportUrlResponse>;
    /**
     * 获取ZooKeeper的轨迹数据。
     */
    ListZkTrack(query: ListZkTrackRequest): Promise<ListZkTrackResponse>;
    /**
     * 查标签接口。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 为指定的资源打上标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 删标签接口。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 获取历史风险评估任务列表。
     */
    ListClusterHealthCheckTask(query: ListClusterHealthCheckTaskRequest): Promise<ListClusterHealthCheckTaskResponse>;
    /**
     * 是否订阅风险项通知功能。
     */
    OrderClusterHealthCheckRiskNotice(query: OrderClusterHealthCheckRiskNoticeRequest): Promise<OrderClusterHealthCheckRiskNoticeResponse>;
    /**
     * 对当前集群发起一次风险评估的检查任务。
     */
    PutClusterHealthCheckTask(query: PutClusterHealthCheckTaskRequest): Promise<PutClusterHealthCheckTaskResponse>;
    /**
     * 获取目标服务的监听者列表。
     */
    GetServiceListeners(query: GetServiceListenersRequest): Promise<GetServiceListenersResponse>;
    /**
     * 列举集群可开通的节点数。
     */
    ListInstanceCount(query: ListInstanceCountRequest): Promise<ListInstanceCountResponse>;
    /**
     * 调用接口更新迁移上云任务。
     */
    UpdateMigrationTask(query: UpdateMigrationTaskRequest): Promise<UpdateMigrationTaskResponse>;
    /**
     * 调用接口删除迁移上云任务。
     */
    DeleteMigrationTask(query: DeleteMigrationTaskRequest): Promise<DeleteMigrationTaskResponse>;
    /**
     * 调用接口查询迁移上云任务。
     */
    ListMigrationTask(query: ListMigrationTaskRequest): Promise<ListMigrationTaskResponse>;
    /**
     * 调用接口添加迁移任务。
     */
    AddMigrationTask(query: AddMigrationTaskRequest): Promise<AddMigrationTaskResponse>;
    /**
     * 列出Zookeeper的历史数据导出任务列表。
     */
    ListExportZookeeperData(query: ListExportZookeeperDataRequest): Promise<ListExportZookeeperDataResponse>;
    /**
     * 发起导出zookeeper数据任务。
     */
    ExportZookeeperData(query: ExportZookeeperDataRequest): Promise<ExportZookeeperDataResponse>;
    /**
     * 绑定流量防护行为。
     */
    BindSentinelBlockFallbackDefinition(query: BindSentinelBlockFallbackDefinitionRequest): Promise<BindSentinelBlockFallbackDefinitionResponse>;
    /**
     * 获取流量防护自定义行为。
     */
    ListSentinelBlockFallbackDefinitions(query: ListSentinelBlockFallbackDefinitionsRequest): Promise<ListSentinelBlockFallbackDefinitionsResponse>;
    /**
     * 更新隔离规则。
     */
    UpdateIsolationRule(query: UpdateIsolationRuleRequest): Promise<UpdateIsolationRuleResponse>;
    /**
     * 删除隔离规则。
     */
    DeleteIsolationRules(query: DeleteIsolationRulesRequest): Promise<DeleteIsolationRulesResponse>;
    /**
     * 查询隔离规则。
     */
    ListIsolationRules(query: ListIsolationRulesRequest): Promise<ListIsolationRulesResponse>;
    /**
     * 创建隔离规则。
     */
    CreateIsolationRule(query: CreateIsolationRuleRequest): Promise<CreateIsolationRuleResponse>;
    /**
     * 查询MSE命名空间。
     */
    QueryNamespace(query: QueryNamespaceRequest): Promise<QueryNamespaceResponse>;
    /**
     * 删除流控规则。
     */
    DeleteFlowRules(query: DeleteFlowRulesRequest): Promise<DeleteFlowRulesResponse>;
    /**
     * 获取流控规则列表。
     */
    ListFlowRules(query: ListFlowRulesRequest): Promise<ListFlowRulesResponse>;
    /**
     * 更新流控规则。
     */
    UpdateFlowRule(query: UpdateFlowRuleRequest): Promise<UpdateFlowRuleResponse>;
    /**
     * 创建流控规则。
     */
    CreateFlowRule(query: CreateFlowRuleRequest): Promise<CreateFlowRuleResponse>;
    /**
     * 删除熔断规则。
     */
    DeleteCircuitBreakerRules(query: DeleteCircuitBreakerRulesRequest): Promise<DeleteCircuitBreakerRulesResponse>;
    /**
     * 更新熔断规则。
     */
    UpdateCircuitBreakerRule(query: UpdateCircuitBreakerRuleRequest): Promise<UpdateCircuitBreakerRuleResponse>;
    /**
     * 获取熔断规则列表。
     */
    ListCircuitBreakerRules(query: ListCircuitBreakerRulesRequest): Promise<ListCircuitBreakerRulesResponse>;
    /**
     * 创建熔断规则。
     */
    CreateCircuitBreakerRule(query: CreateCircuitBreakerRuleRequest): Promise<CreateCircuitBreakerRuleResponse>;
    /**
     * 删除MSE命名空间。
     */
    DeleteNamespace(query: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;
    /**
     * 获取网关鉴权消费者细节。
     */
    GetGatewayAuthConsumerDetail(query: GetGatewayAuthConsumerDetailRequest): Promise<GetGatewayAuthConsumerDetailResponse>;
    /**
     * 删除网关鉴权消费者。
     */
    DeleteGatewayAuthConsumer(query: DeleteGatewayAuthConsumerRequest): Promise<DeleteGatewayAuthConsumerResponse>;
    /**
     * 更新网关鉴权消费者的授权状态。
     */
    UpdateGatewayAuthConsumerResourceStatus(query: UpdateGatewayAuthConsumerResourceStatusRequest): Promise<UpdateGatewayAuthConsumerResourceStatusResponse>;
    /**
     * 删除网关鉴权消费者的授权。
     */
    DeleteGatewayAuthConsumerResource(query: DeleteGatewayAuthConsumerResourceRequest): Promise<DeleteGatewayAuthConsumerResourceResponse>;
    /**
     * 新增网关鉴权消费者。
     */
    AddGatewayAuthConsumer(query: AddGatewayAuthConsumerRequest): Promise<AddGatewayAuthConsumerResponse>;
    /**
     * 更新网关鉴权消费者状态。
     */
    UpdateGatewayAuthConsumerStatus(query: UpdateGatewayAuthConsumerStatusRequest): Promise<UpdateGatewayAuthConsumerStatusResponse>;
    /**
     * 更新网关鉴权消费者的授权列表。
     */
    UpdateGatewayAuthConsumerResource(query: UpdateGatewayAuthConsumerResourceRequest): Promise<UpdateGatewayAuthConsumerResourceResponse>;
    /**
     * 获取网关鉴权消费者列表。
     */
    ListGatewayAuthConsumer(query: ListGatewayAuthConsumerRequest): Promise<ListGatewayAuthConsumerResponse>;
    /**
     * 获取开启鉴权的路由列表。
     */
    ListGatewayRouteOnAuth(query: ListGatewayRouteOnAuthRequest): Promise<ListGatewayRouteOnAuthResponse>;
    /**
     * 更新网关鉴权消费者。
     */
    UpdateGatewayAuthConsumer(query: UpdateGatewayAuthConsumerRequest): Promise<UpdateGatewayAuthConsumerResponse>;
    /**
     * 获取网关鉴权消费者的授权列表。
     */
    ListGatewayAuthConsumerResource(query: ListGatewayAuthConsumerResourceRequest): Promise<ListGatewayAuthConsumerResourceResponse>;
    /**
     * 更新路由鉴权配置。
     */
    UpdateGatewayRouteAuth(query: UpdateGatewayRouteAuthRequest): Promise<UpdateGatewayRouteAuthResponse>;
    /**
     * 获取指定应用无损上下线规则。
     */
    GetLosslessRuleByApp(query: GetLosslessRuleByAppRequest): Promise<GetLosslessRuleByAppResponse>;
    /**
     * 开启Proxy协议。如果网关入口流量使用NLB接入，如果不开启则无法获取客户端的真实IP，开启后对于非Proxy协议请求没有影响。
     */
    EnableProxyProtocol(query: EnableProxyProtocolRequest): Promise<EnableProxyProtocolResponse>;
    /**
     * 获取网关可用区列表。
     */
    ListGatewayZone(query: ListGatewayZoneRequest): Promise<ListGatewayZoneResponse>;
    /**
     * 获取指定泳道组内的指定标签的应用列表。
     */
    ListAppBySwimmingLaneGroupTags(query: ListAppBySwimmingLaneGroupTagsRequest): Promise<ListAppBySwimmingLaneGroupTagsResponse>;
    /**
     * 创建网关熔断规则。
     */
    CreateGatewayCircuitBreakerRule(query: CreateGatewayCircuitBreakerRuleRequest): Promise<CreateGatewayCircuitBreakerRuleResponse>;
    /**
     * 删除该网关流控规则。
     */
    DeleteGatewayFlowRule(query: DeleteGatewayFlowRuleRequest): Promise<DeleteGatewayFlowRuleResponse>;
    /**
     * 更新该网关并发规则。
     */
    UpdateGatewayIsolationRule(query: UpdateGatewayIsolationRuleRequest): Promise<UpdateGatewayIsolationRuleResponse>;
    /**
     * 更新该网关熔断规则。
     */
    UpdateGatewayCircuitBreakerRule(query: UpdateGatewayCircuitBreakerRuleRequest): Promise<UpdateGatewayCircuitBreakerRuleResponse>;
    /**
     * 更新该网关流控规则。
     */
    UpdateGatewayFlowRule(query: UpdateGatewayFlowRuleRequest): Promise<UpdateGatewayFlowRuleResponse>;
    /**
     * 创建网关并发规则。
     */
    CreateGatewayIsolationRule(query: CreateGatewayIsolationRuleRequest): Promise<CreateGatewayIsolationRuleResponse>;
    /**
     * 查询该网关熔断规则。
     */
    ListGatewayCircuitBreakerRule(query: ListGatewayCircuitBreakerRuleRequest): Promise<ListGatewayCircuitBreakerRuleResponse>;
    /**
     * 查询该网关并发规则。
     */
    ListGatewayIsolationRule(query: ListGatewayIsolationRuleRequest): Promise<ListGatewayIsolationRuleResponse>;
    /**
     * 查询该网关流控规则。
     */
    ListGatewayFlowRule(query: ListGatewayFlowRuleRequest): Promise<ListGatewayFlowRuleResponse>;
    /**
     * 删除该网关并发规则。
     */
    DeleteGatewayIsolationRule(query: DeleteGatewayIsolationRuleRequest): Promise<DeleteGatewayIsolationRuleResponse>;
    /**
     * 删除该网关熔断规则。
     */
    DeleteGatewayCircuitBreakerRule(query: DeleteGatewayCircuitBreakerRuleRequest): Promise<DeleteGatewayCircuitBreakerRuleResponse>;
    /**
     * 创建网关流控规则。
     */
    CreateGatewayFlowRule(query: CreateGatewayFlowRuleRequest): Promise<CreateGatewayFlowRuleResponse>;
    /**
     * 从AHAS侧复制规则
     */
    CloneSentinelRuleFromAhas(query: CloneSentinelRuleFromAhasRequest): Promise<CloneSentinelRuleFromAhasResponse>;
}
export default MSE;
