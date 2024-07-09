import { ActivateZonesRequest } from "./ActivateZones/req";
import { ActivateZonesResponse } from "./ActivateZones/res";
import { AddConnectableClusterRequest } from "./AddConnectableCluster/req";
import { AddConnectableClusterResponse } from "./AddConnectableCluster/res";
import { AddSnapshotRepoRequest } from "./AddSnapshotRepo/req";
import { AddSnapshotRepoResponse } from "./AddSnapshotRepo/res";
import { CancelTaskRequest } from "./CancelTask/req";
import { CancelTaskResponse } from "./CancelTask/res";
import { CloseDiagnosisRequest } from "./CloseDiagnosis/req";
import { CloseDiagnosisResponse } from "./CloseDiagnosis/res";
import { CloseHttpsRequest } from "./CloseHttps/req";
import { CloseHttpsResponse } from "./CloseHttps/res";
import { CreateLogstashRequest } from "./CreateLogstash/req";
import { CreateLogstashResponse } from "./CreateLogstash/res";
import { CreatePipelinesRequest } from "./CreatePipelines/req";
import { CreatePipelinesResponse } from "./CreatePipelines/res";
import { CreateSnapshotRequest } from "./CreateSnapshot/req";
import { CreateSnapshotResponse } from "./CreateSnapshot/res";
import { DeactivateZonesRequest } from "./DeactivateZones/req";
import { DeactivateZonesResponse } from "./DeactivateZones/res";
import { DeleteCollectorRequest } from "./DeleteCollector/req";
import { DeleteCollectorResponse } from "./DeleteCollector/res";
import { DeleteConnectedClusterRequest } from "./DeleteConnectedCluster/req";
import { DeleteConnectedClusterResponse } from "./DeleteConnectedCluster/res";
import { DeleteDataTaskRequest } from "./DeleteDataTask/req";
import { DeleteDataTaskResponse } from "./DeleteDataTask/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DeleteLogstashRequest } from "./DeleteLogstash/req";
import { DeleteLogstashResponse } from "./DeleteLogstash/res";
import { DeletePipelinesRequest } from "./DeletePipelines/req";
import { DeletePipelinesResponse } from "./DeletePipelines/res";
import { DeleteSnapshotRepoRequest } from "./DeleteSnapshotRepo/req";
import { DeleteSnapshotRepoResponse } from "./DeleteSnapshotRepo/res";
import { DescribeCollectorRequest } from "./DescribeCollector/req";
import { DescribeCollectorResponse } from "./DescribeCollector/res";
import { DescribeConnectableClustersRequest } from "./DescribeConnectableClusters/req";
import { DescribeConnectableClustersResponse } from "./DescribeConnectableClusters/res";
import { DescribeDiagnoseReportRequest } from "./DescribeDiagnoseReport/req";
import { DescribeDiagnoseReportResponse } from "./DescribeDiagnoseReport/res";
import { DescribeDiagnosisSettingsRequest } from "./DescribeDiagnosisSettings/req";
import { DescribeDiagnosisSettingsResponse } from "./DescribeDiagnosisSettings/res";
import { DescribeElasticsearchHealthRequest } from "./DescribeElasticsearchHealth/req";
import { DescribeElasticsearchHealthResponse } from "./DescribeElasticsearchHealth/res";
import { DescribeInstanceRequest } from "./DescribeInstance/req";
import { DescribeInstanceResponse } from "./DescribeInstance/res";
import { DescribeKibanaSettingsRequest } from "./DescribeKibanaSettings/req";
import { DescribeKibanaSettingsResponse } from "./DescribeKibanaSettings/res";
import { DescribeLogstashRequest } from "./DescribeLogstash/req";
import { DescribeLogstashResponse } from "./DescribeLogstash/res";
import { DescribePipelineRequest } from "./DescribePipeline/req";
import { DescribePipelineResponse } from "./DescribePipeline/res";
import { DescribePipelineManagementConfigRequest } from "./DescribePipelineManagementConfig/req";
import { DescribePipelineManagementConfigResponse } from "./DescribePipelineManagementConfig/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeSnapshotSettingRequest } from "./DescribeSnapshotSetting/req";
import { DescribeSnapshotSettingResponse } from "./DescribeSnapshotSetting/res";
import { DescribeTemplatesRequest } from "./DescribeTemplates/req";
import { DescribeTemplatesResponse } from "./DescribeTemplates/res";
import { DescribeXpackMonitorConfigRequest } from "./DescribeXpackMonitorConfig/req";
import { DescribeXpackMonitorConfigResponse } from "./DescribeXpackMonitorConfig/res";
import { EstimatedLogstashRestartTimeRequest } from "./EstimatedLogstashRestartTime/req";
import { EstimatedLogstashRestartTimeResponse } from "./EstimatedLogstashRestartTime/res";
import { EstimatedRestartTimeRequest } from "./EstimatedRestartTime/req";
import { EstimatedRestartTimeResponse } from "./EstimatedRestartTime/res";
import { DiagnoseInstanceRequest } from "./DiagnoseInstance/req";
import { DiagnoseInstanceResponse } from "./DiagnoseInstance/res";
import { GetClusterDataInformationRequest } from "./GetClusterDataInformation/req";
import { GetClusterDataInformationResponse } from "./GetClusterDataInformation/res";
import { GetElastictaskRequest } from "./GetElastictask/req";
import { GetElastictaskResponse } from "./GetElastictask/res";
import { GetEmonMonitorDataRequest } from "./GetEmonMonitorData/req";
import { GetEmonMonitorDataResponse } from "./GetEmonMonitorData/res";
import { GetSuggestShrinkableNodesRequest } from "./GetSuggestShrinkableNodes/req";
import { GetSuggestShrinkableNodesResponse } from "./GetSuggestShrinkableNodes/res";
import { GetRegionConfigurationRequest } from "./GetRegionConfiguration/req";
import { GetRegionConfigurationResponse } from "./GetRegionConfiguration/res";
import { GetTransferableNodesRequest } from "./GetTransferableNodes/req";
import { GetTransferableNodesResponse } from "./GetTransferableNodes/res";
import { InstallKibanaSystemPluginRequest } from "./InstallKibanaSystemPlugin/req";
import { InstallKibanaSystemPluginResponse } from "./InstallKibanaSystemPlugin/res";
import { InstallLogstashSystemPluginRequest } from "./InstallLogstashSystemPlugin/req";
import { InstallLogstashSystemPluginResponse } from "./InstallLogstashSystemPlugin/res";
import { InstallSystemPluginRequest } from "./InstallSystemPlugin/req";
import { InstallSystemPluginResponse } from "./InstallSystemPlugin/res";
import { InstallUserPluginsRequest } from "./InstallUserPlugins/req";
import { InstallUserPluginsResponse } from "./InstallUserPlugins/res";
import { InterruptElasticsearchTaskRequest } from "./InterruptElasticsearchTask/req";
import { InterruptElasticsearchTaskResponse } from "./InterruptElasticsearchTask/res";
import { InterruptLogstashTaskRequest } from "./InterruptLogstashTask/req";
import { InterruptLogstashTaskResponse } from "./InterruptLogstashTask/res";
import { ListAllNodeRequest } from "./ListAllNode/req";
import { ListAllNodeResponse } from "./ListAllNode/res";
import { ListAlternativeSnapshotReposRequest } from "./ListAlternativeSnapshotRepos/req";
import { ListAlternativeSnapshotReposResponse } from "./ListAlternativeSnapshotRepos/res";
import { ListAvailableEsInstanceIdsRequest } from "./ListAvailableEsInstanceIds/req";
import { ListAvailableEsInstanceIdsResponse } from "./ListAvailableEsInstanceIds/res";
import { ListCollectorsRequest } from "./ListCollectors/req";
import { ListCollectorsResponse } from "./ListCollectors/res";
import { ListConnectedClustersRequest } from "./ListConnectedClusters/req";
import { ListConnectedClustersResponse } from "./ListConnectedClusters/res";
import { ListDataTasksRequest } from "./ListDataTasks/req";
import { ListDataTasksResponse } from "./ListDataTasks/res";
import { ListDiagnoseReportRequest } from "./ListDiagnoseReport/req";
import { ListDiagnoseReportResponse } from "./ListDiagnoseReport/res";
import { ListDiagnoseReportIdsRequest } from "./ListDiagnoseReportIds/req";
import { ListDiagnoseReportIdsResponse } from "./ListDiagnoseReportIds/res";
import { ListDictInformationRequest } from "./ListDictInformation/req";
import { ListDictInformationResponse } from "./ListDictInformation/res";
import { ListEcsInstancesRequest } from "./ListEcsInstances/req";
import { ListEcsInstancesResponse } from "./ListEcsInstances/res";
import { ListExtendfilesRequest } from "./ListExtendfiles/req";
import { ListExtendfilesResponse } from "./ListExtendfiles/res";
import { ListInstanceRequest } from "./ListInstance/req";
import { ListInstanceResponse } from "./ListInstance/res";
import { ListInstanceIndicesRequest } from "./ListInstanceIndices/req";
import { ListInstanceIndicesResponse } from "./ListInstanceIndices/res";
import { ListKibanaPluginsRequest } from "./ListKibanaPlugins/req";
import { ListKibanaPluginsResponse } from "./ListKibanaPlugins/res";
import { ListLogstashRequest } from "./ListLogstash/req";
import { ListLogstashResponse } from "./ListLogstash/res";
import { ListLogstashLogRequest } from "./ListLogstashLog/req";
import { ListLogstashLogResponse } from "./ListLogstashLog/res";
import { ListLogstashPluginsRequest } from "./ListLogstashPlugins/req";
import { ListLogstashPluginsResponse } from "./ListLogstashPlugins/res";
import { ListNodesRequest } from "./ListNodes/req";
import { ListNodesResponse } from "./ListNodes/res";
import { ListPipelineRequest } from "./ListPipeline/req";
import { ListPipelineResponse } from "./ListPipeline/res";
import { ListPipelineIdsRequest } from "./ListPipelineIds/req";
import { ListPipelineIdsResponse } from "./ListPipelineIds/res";
import { ListPluginsRequest } from "./ListPlugins/req";
import { ListPluginsResponse } from "./ListPlugins/res";
import { ListSearchLogRequest } from "./ListSearchLog/req";
import { ListSearchLogResponse } from "./ListSearchLog/res";
import { ListSnapshotReposByInstanceIdRequest } from "./ListSnapshotReposByInstanceId/req";
import { ListSnapshotReposByInstanceIdResponse } from "./ListSnapshotReposByInstanceId/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListTagsRequest } from "./ListTags/req";
import { ListTagsResponse } from "./ListTags/res";
import { MigrateToOtherZoneRequest } from "./MigrateToOtherZone/req";
import { MigrateToOtherZoneResponse } from "./MigrateToOtherZone/res";
import { ModifyDeployMachineRequest } from "./ModifyDeployMachine/req";
import { ModifyDeployMachineResponse } from "./ModifyDeployMachine/res";
import { ModifyElastictaskRequest } from "./ModifyElastictask/req";
import { ModifyElastictaskResponse } from "./ModifyElastictask/res";
import { ModifyInstanceMaintainTimeRequest } from "./ModifyInstanceMaintainTime/req";
import { ModifyInstanceMaintainTimeResponse } from "./ModifyInstanceMaintainTime/res";
import { ModifyWhiteIpsRequest } from "./ModifyWhiteIps/req";
import { ModifyWhiteIpsResponse } from "./ModifyWhiteIps/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { OpenDiagnosisRequest } from "./OpenDiagnosis/req";
import { OpenDiagnosisResponse } from "./OpenDiagnosis/res";
import { OpenHttpsRequest } from "./OpenHttps/req";
import { OpenHttpsResponse } from "./OpenHttps/res";
import { ReinstallCollectorRequest } from "./ReinstallCollector/req";
import { ReinstallCollectorResponse } from "./ReinstallCollector/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { RenewLogstashRequest } from "./RenewLogstash/req";
import { RenewLogstashResponse } from "./RenewLogstash/res";
import { RestartInstanceRequest } from "./RestartInstance/req";
import { RestartInstanceResponse } from "./RestartInstance/res";
import { RestartLogstashRequest } from "./RestartLogstash/req";
import { RestartLogstashResponse } from "./RestartLogstash/res";
import { ResumeElasticsearchTaskRequest } from "./ResumeElasticsearchTask/req";
import { ResumeElasticsearchTaskResponse } from "./ResumeElasticsearchTask/res";
import { ResumeLogstashTaskRequest } from "./ResumeLogstashTask/req";
import { ResumeLogstashTaskResponse } from "./ResumeLogstashTask/res";
import { RunPipelinesRequest } from "./RunPipelines/req";
import { RunPipelinesResponse } from "./RunPipelines/res";
import { ShrinkNodeRequest } from "./ShrinkNode/req";
import { ShrinkNodeResponse } from "./ShrinkNode/res";
import { StartCollectorRequest } from "./StartCollector/req";
import { StartCollectorResponse } from "./StartCollector/res";
import { StopCollectorRequest } from "./StopCollector/req";
import { StopCollectorResponse } from "./StopCollector/res";
import { StopPipelinesRequest } from "./StopPipelines/req";
import { StopPipelinesResponse } from "./StopPipelines/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { TransferNodeRequest } from "./TransferNode/req";
import { TransferNodeResponse } from "./TransferNode/res";
import { TriggerNetworkRequest } from "./TriggerNetwork/req";
import { TriggerNetworkResponse } from "./TriggerNetwork/res";
import { UninstallKibanaPluginRequest } from "./UninstallKibanaPlugin/req";
import { UninstallKibanaPluginResponse } from "./UninstallKibanaPlugin/res";
import { UninstallLogstashPluginRequest } from "./UninstallLogstashPlugin/req";
import { UninstallLogstashPluginResponse } from "./UninstallLogstashPlugin/res";
import { UninstallPluginRequest } from "./UninstallPlugin/req";
import { UninstallPluginResponse } from "./UninstallPlugin/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { UpdateAdminPasswordRequest } from "./UpdateAdminPassword/req";
import { UpdateAdminPasswordResponse } from "./UpdateAdminPassword/res";
import { UpdateAdvancedSettingRequest } from "./UpdateAdvancedSetting/req";
import { UpdateAdvancedSettingResponse } from "./UpdateAdvancedSetting/res";
import { UpdateAliwsDictRequest } from "./UpdateAliwsDict/req";
import { UpdateAliwsDictResponse } from "./UpdateAliwsDict/res";
import { UpdateBlackIpsRequest } from "./UpdateBlackIps/req";
import { UpdateBlackIpsResponse } from "./UpdateBlackIps/res";
import { UpdateCollectorRequest } from "./UpdateCollector/req";
import { UpdateCollectorResponse } from "./UpdateCollector/res";
import { UpdateCollectorNameRequest } from "./UpdateCollectorName/req";
import { UpdateCollectorNameResponse } from "./UpdateCollectorName/res";
import { UpdateDescriptionRequest } from "./UpdateDescription/req";
import { UpdateDescriptionResponse } from "./UpdateDescription/res";
import { UpdateDiagnosisSettingsRequest } from "./UpdateDiagnosisSettings/req";
import { UpdateDiagnosisSettingsResponse } from "./UpdateDiagnosisSettings/res";
import { UpdateDictRequest } from "./UpdateDict/req";
import { UpdateDictResponse } from "./UpdateDict/res";
import { UpdateExtendConfigRequest } from "./UpdateExtendConfig/req";
import { UpdateExtendConfigResponse } from "./UpdateExtendConfig/res";
import { UpdateExtendfilesRequest } from "./UpdateExtendfiles/req";
import { UpdateExtendfilesResponse } from "./UpdateExtendfiles/res";
import { UpdateHotIkDictsRequest } from "./UpdateHotIkDicts/req";
import { UpdateHotIkDictsResponse } from "./UpdateHotIkDicts/res";
import { UpdateInstanceRequest } from "./UpdateInstance/req";
import { UpdateInstanceResponse } from "./UpdateInstance/res";
import { UpdateInstanceChargeTypeRequest } from "./UpdateInstanceChargeType/req";
import { UpdateInstanceChargeTypeResponse } from "./UpdateInstanceChargeType/res";
import { UpdateInstanceSettingsRequest } from "./UpdateInstanceSettings/req";
import { UpdateInstanceSettingsResponse } from "./UpdateInstanceSettings/res";
import { UpdateKibanaSettingsRequest } from "./UpdateKibanaSettings/req";
import { UpdateKibanaSettingsResponse } from "./UpdateKibanaSettings/res";
import { UpdateKibanaWhiteIpsRequest } from "./UpdateKibanaWhiteIps/req";
import { UpdateKibanaWhiteIpsResponse } from "./UpdateKibanaWhiteIps/res";
import { UpdateLogstashRequest } from "./UpdateLogstash/req";
import { UpdateLogstashResponse } from "./UpdateLogstash/res";
import { UpdateLogstashChargeTypeRequest } from "./UpdateLogstashChargeType/req";
import { UpdateLogstashChargeTypeResponse } from "./UpdateLogstashChargeType/res";
import { UpdateLogstashDescriptionRequest } from "./UpdateLogstashDescription/req";
import { UpdateLogstashDescriptionResponse } from "./UpdateLogstashDescription/res";
import { UpdateLogstashSettingsRequest } from "./UpdateLogstashSettings/req";
import { UpdateLogstashSettingsResponse } from "./UpdateLogstashSettings/res";
import { UpdatePipelineManagementConfigRequest } from "./UpdatePipelineManagementConfig/req";
import { UpdatePipelineManagementConfigResponse } from "./UpdatePipelineManagementConfig/res";
import { UpdatePipelinesRequest } from "./UpdatePipelines/req";
import { UpdatePipelinesResponse } from "./UpdatePipelines/res";
import { UpdatePrivateNetworkWhiteIpsRequest } from "./UpdatePrivateNetworkWhiteIps/req";
import { UpdatePrivateNetworkWhiteIpsResponse } from "./UpdatePrivateNetworkWhiteIps/res";
import { UpdatePublicNetworkRequest } from "./UpdatePublicNetwork/req";
import { UpdatePublicNetworkResponse } from "./UpdatePublicNetwork/res";
import { UpdatePublicWhiteIpsRequest } from "./UpdatePublicWhiteIps/req";
import { UpdatePublicWhiteIpsResponse } from "./UpdatePublicWhiteIps/res";
import { UpdateReadWritePolicyRequest } from "./UpdateReadWritePolicy/req";
import { UpdateReadWritePolicyResponse } from "./UpdateReadWritePolicy/res";
import { UpdateSnapshotSettingRequest } from "./UpdateSnapshotSetting/req";
import { UpdateSnapshotSettingResponse } from "./UpdateSnapshotSetting/res";
import { UpdateSynonymsDictsRequest } from "./UpdateSynonymsDicts/req";
import { UpdateSynonymsDictsResponse } from "./UpdateSynonymsDicts/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { UpdateWhiteIpsRequest } from "./UpdateWhiteIps/req";
import { UpdateWhiteIpsResponse } from "./UpdateWhiteIps/res";
import { UpdateXpackMonitorConfigRequest } from "./UpdateXpackMonitorConfig/req";
import { UpdateXpackMonitorConfigResponse } from "./UpdateXpackMonitorConfig/res";
import { UpgradeEngineVersionRequest } from "./UpgradeEngineVersion/req";
import { UpgradeEngineVersionResponse } from "./UpgradeEngineVersion/res";
import { ValidateConnectionRequest } from "./ValidateConnection/req";
import { ValidateConnectionResponse } from "./ValidateConnection/res";
import { ValidateShrinkNodesRequest } from "./ValidateShrinkNodes/req";
import { ValidateShrinkNodesResponse } from "./ValidateShrinkNodes/res";
import { ValidateTransferableNodesRequest } from "./ValidateTransferableNodes/req";
import { ValidateTransferableNodesResponse } from "./ValidateTransferableNodes/res";
import { createInstanceRequest } from "./createInstance/req";
import { createInstanceResponse } from "./createInstance/res";
import { CreateCollectorRequest } from "./CreateCollector/req";
import { CreateCollectorResponse } from "./CreateCollector/res";
import { DescribeAckOperatorRequest } from "./DescribeAckOperator/req";
import { DescribeAckOperatorResponse } from "./DescribeAckOperator/res";
import { InitializeOperationRoleRequest } from "./InitializeOperationRole/req";
import { InitializeOperationRoleResponse } from "./InitializeOperationRole/res";
import { InstallAckOperatorRequest } from "./InstallAckOperator/req";
import { InstallAckOperatorResponse } from "./InstallAckOperator/res";
import { ListAckClustersRequest } from "./ListAckClusters/req";
import { ListAckClustersResponse } from "./ListAckClusters/res";
import { ListAckNamespacesRequest } from "./ListAckNamespaces/req";
import { ListAckNamespacesResponse } from "./ListAckNamespaces/res";
import { RestartCollectorRequest } from "./RestartCollector/req";
import { RestartCollectorResponse } from "./RestartCollector/res";
import { ValidateSlrPermissionRequest } from "./ValidateSlrPermission/req";
import { ValidateSlrPermissionResponse } from "./ValidateSlrPermission/res";
import { ListDefaultCollectorConfigurationsRequest } from "./ListDefaultCollectorConfigurations/req";
import { ListDefaultCollectorConfigurationsResponse } from "./ListDefaultCollectorConfigurations/res";
import { RecommendTemplatesRequest } from "./RecommendTemplates/req";
import { RecommendTemplatesResponse } from "./RecommendTemplates/res";
import { CancelDeletionRequest } from "./CancelDeletion/req";
import { CancelDeletionResponse } from "./CancelDeletion/res";
import { CancelLogstashDeletionRequest } from "./CancelLogstashDeletion/req";
import { CancelLogstashDeletionResponse } from "./CancelLogstashDeletion/res";
import { ListDiagnoseIndicesRequest } from "./ListDiagnoseIndices/req";
import { ListDiagnoseIndicesResponse } from "./ListDiagnoseIndices/res";
import { CloseManagedIndexRequest } from "./CloseManagedIndex/req";
import { CloseManagedIndexResponse } from "./CloseManagedIndex/res";
import { CreateDataStreamRequest } from "./CreateDataStream/req";
import { CreateDataStreamResponse } from "./CreateDataStream/res";
import { CreateILMPolicyRequest } from "./CreateILMPolicy/req";
import { CreateILMPolicyResponse } from "./CreateILMPolicy/res";
import { CreateIndexTemplateRequest } from "./CreateIndexTemplate/req";
import { CreateIndexTemplateResponse } from "./CreateIndexTemplate/res";
import { DeleteDataStreamRequest } from "./DeleteDataStream/req";
import { DeleteDataStreamResponse } from "./DeleteDataStream/res";
import { DeleteILMPolicyRequest } from "./DeleteILMPolicy/req";
import { DeleteILMPolicyResponse } from "./DeleteILMPolicy/res";
import { DeleteIndexTemplateRequest } from "./DeleteIndexTemplate/req";
import { DeleteIndexTemplateResponse } from "./DeleteIndexTemplate/res";
import { DescribeILMPolicyRequest } from "./DescribeILMPolicy/req";
import { DescribeILMPolicyResponse } from "./DescribeILMPolicy/res";
import { DescribeIndexTemplateRequest } from "./DescribeIndexTemplate/req";
import { DescribeIndexTemplateResponse } from "./DescribeIndexTemplate/res";
import { ListDataStreamsRequest } from "./ListDataStreams/req";
import { ListDataStreamsResponse } from "./ListDataStreams/res";
import { ListILMPoliciesRequest } from "./ListILMPolicies/req";
import { ListILMPoliciesResponse } from "./ListILMPolicies/res";
import { ListIndexTemplatesRequest } from "./ListIndexTemplates/req";
import { ListIndexTemplatesResponse } from "./ListIndexTemplates/res";
import { RolloverDataStreamRequest } from "./RolloverDataStream/req";
import { RolloverDataStreamResponse } from "./RolloverDataStream/res";
import { UpdateILMPolicyRequest } from "./UpdateILMPolicy/req";
import { UpdateILMPolicyResponse } from "./UpdateILMPolicy/res";
import { UpdateIndexTemplateRequest } from "./UpdateIndexTemplate/req";
import { UpdateIndexTemplateResponse } from "./UpdateIndexTemplate/res";
import { GetEmonGrafanaAlertsRequest } from "./GetEmonGrafanaAlerts/req";
import { GetEmonGrafanaAlertsResponse } from "./GetEmonGrafanaAlerts/res";
import { GetEmonGrafanaDashboardsRequest } from "./GetEmonGrafanaDashboards/req";
import { GetEmonGrafanaDashboardsResponse } from "./GetEmonGrafanaDashboards/res";
import { PostEmonTryAlarmRuleRequest } from "./PostEmonTryAlarmRule/req";
import { PostEmonTryAlarmRuleResponse } from "./PostEmonTryAlarmRule/res";
import { CreateVpcEndpointRequest } from "./CreateVpcEndpoint/req";
import { CreateVpcEndpointResponse } from "./CreateVpcEndpoint/res";
import { DeleteVpcEndpointRequest } from "./DeleteVpcEndpoint/req";
import { DeleteVpcEndpointResponse } from "./DeleteVpcEndpoint/res";
import { ListDictsRequest } from "./ListDicts/req";
import { ListDictsResponse } from "./ListDicts/res";
import { ListShardRecoveriesRequest } from "./ListShardRecoveries/req";
import { ListShardRecoveriesResponse } from "./ListShardRecoveries/res";
import { ListVpcEndpointsRequest } from "./ListVpcEndpoints/req";
import { ListVpcEndpointsResponse } from "./ListVpcEndpoints/res";
import { GetOpenStoreUsageRequest } from "./GetOpenStoreUsage/req";
import { GetOpenStoreUsageResponse } from "./GetOpenStoreUsage/res";
import { CapacityPlanRequest } from "./CapacityPlan/req";
import { CapacityPlanResponse } from "./CapacityPlan/res";
import { DescribeApmRequest } from "./DescribeApm/req";
import { DescribeApmResponse } from "./DescribeApm/res";
import { ListApmRequest } from "./ListApm/req";
import { ListApmResponse } from "./ListApm/res";
import { RemoveApmRequest } from "./RemoveApm/req";
import { RemoveApmResponse } from "./RemoveApm/res";
import { UpdateApmRequest } from "./UpdateApm/req";
import { UpdateApmResponse } from "./UpdateApm/res";
import { StartApmRequest } from "./StartApm/req";
import { StartApmResponse } from "./StartApm/res";
import { StopApmRequest } from "./StopApm/req";
import { StopApmResponse } from "./StopApm/res";
import { DeleteComponentIndexRequest } from "./DeleteComponentIndex/req";
import { DeleteComponentIndexResponse } from "./DeleteComponentIndex/res";
import { DescribeComponentIndexRequest } from "./DescribeComponentIndex/req";
import { DescribeComponentIndexResponse } from "./DescribeComponentIndex/res";
import { CreateComponentIndexRequest } from "./CreateComponentIndex/req";
import { CreateComponentIndexResponse } from "./CreateComponentIndex/res";
import { DescribeDeprecatedTemplateRequest } from "./DescribeDeprecatedTemplate/req";
import { DescribeDeprecatedTemplateResponse } from "./DescribeDeprecatedTemplate/res";
import { ListComponentIndicesRequest } from "./ListComponentIndices/req";
import { ListComponentIndicesResponse } from "./ListComponentIndices/res";
import { DeleteDeprecatedTemplateRequest } from "./DeleteDeprecatedTemplate/req";
import { DeleteDeprecatedTemplateResponse } from "./DeleteDeprecatedTemplate/res";
import { ListDeprecatedTemplatesRequest } from "./ListDeprecatedTemplates/req";
import { ListDeprecatedTemplatesResponse } from "./ListDeprecatedTemplates/res";
import { UpdateComponentIndexRequest } from "./UpdateComponentIndex/req";
import { UpdateComponentIndexResponse } from "./UpdateComponentIndex/res";
import { ListInstanceHistoryEventsRequest } from "./ListInstanceHistoryEvents/req";
import { ListInstanceHistoryEventsResponse } from "./ListInstanceHistoryEvents/res";
import { UpdateDynamicSettingsRequest } from "./UpdateDynamicSettings/req";
import { UpdateDynamicSettingsResponse } from "./UpdateDynamicSettings/res";
import { DescribeDynamicSettingsRequest } from "./DescribeDynamicSettings/req";
import { DescribeDynamicSettingsResponse } from "./DescribeDynamicSettings/res";
import { ListActionRecordsRequest } from "./ListActionRecords/req";
import { ListActionRecordsResponse } from "./ListActionRecords/res";
import { ListDiagnosisItemsRequest } from "./ListDiagnosisItems/req";
import { ListDiagnosisItemsResponse } from "./ListDiagnosisItems/res";
import { DisableKibanaPvlNetworkRequest } from "./DisableKibanaPvlNetwork/req";
import { DisableKibanaPvlNetworkResponse } from "./DisableKibanaPvlNetwork/res";
import { UpdateKibanaPvlNetworkRequest } from "./UpdateKibanaPvlNetwork/req";
import { UpdateKibanaPvlNetworkResponse } from "./UpdateKibanaPvlNetwork/res";
import { ListKibanaPvlNetworkRequest } from "./ListKibanaPvlNetwork/req";
import { ListKibanaPvlNetworkResponse } from "./ListKibanaPvlNetwork/res";
import { EnableKibanaPvlNetworkRequest } from "./EnableKibanaPvlNetwork/req";
import { EnableKibanaPvlNetworkResponse } from "./EnableKibanaPvlNetwork/res";

interface ELASTICSEARCH {
    /**
     * 恢复已下线的可用区。仅对多可用区实例有效。
     */
    ActivateZones(query: ActivateZonesRequest): Promise<ActivateZonesResponse>;
    /**
     * 配置网络互通，完成不同实例的连接。
     */
    AddConnectableCluster(query: AddConnectableClusterRequest): Promise<AddConnectableClusterResponse>;
    /**
     * 在设置跨集群OSS仓库时，创建引用仓库。
     */
    AddSnapshotRepo(query: AddSnapshotRepoRequest): Promise<AddSnapshotRepoResponse>;
    /**
     * 取消正在运行的数据迁移任务。
     */
    CancelTask(query: CancelTaskRequest): Promise<CancelTaskResponse>;
    /**
     * 关闭实例的智能运维功能。
     */
    CloseDiagnosis(query: CloseDiagnosisRequest): Promise<CloseDiagnosisResponse>;
    /**
     * 关闭集群HTTPS协议。
     */
    CloseHttps(query: CloseHttpsRequest): Promise<CloseHttpsResponse>;
    /**
     * 调用CreateLogstash，创建一个Logstash实例。
     */
    CreateLogstash(query: CreateLogstashRequest): Promise<CreateLogstashResponse>;
    /**
     * 创建Logstash管道，采集数据。
     */
    CreatePipelines(query: CreatePipelinesRequest): Promise<CreatePipelinesResponse>;
    /**
     * 调用CreateSnapshot，手动对集群进行快照备份。
     */
    CreateSnapshot(query: CreateSnapshotRequest): Promise<CreateSnapshotResponse>;
    /**
     * 在有多个可用区的情况下，下线部分可用区。并将下线的可用区中的节点迁移到其他可用区。
     */
    DeactivateZones(query: DeactivateZonesRequest): Promise<DeactivateZonesResponse>;
    /**
     * 删除指定的采集器。
     */
    DeleteCollector(query: DeleteCollectorRequest): Promise<DeleteCollectorResponse>;
    /**
     * 删除两个实例之间的网络互通。
     */
    DeleteConnectedCluster(query: DeleteConnectedClusterRequest): Promise<DeleteConnectedClusterResponse>;
    /**
     * 删除Elasticsearch索引迁移任务。
     */
    DeleteDataTask(query: DeleteDataTaskRequest): Promise<DeleteDataTaskResponse>;
    /**
     * 实例所使用的物理资源都被回收，相关数据全部丢失且不可恢复；挂载实例节点的云盘和相应的快照都会被释放。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 主动释放Logstash实例。
     */
    DeleteLogstash(query: DeleteLogstashRequest): Promise<DeleteLogstashResponse>;
    /**
     * 删除Logstash实例所配置的管道。
     */
    DeletePipelines(query: DeletePipelinesRequest): Promise<DeletePipelinesResponse>;
    /**
     * 删除实例跨集群OSS引用仓库。
     */
    DeleteSnapshotRepo(query: DeleteSnapshotRepoRequest): Promise<DeleteSnapshotRepoResponse>;
    /**
     * 获取采集器实例的详细信息。
     */
    DescribeCollector(query: DescribeCollectorRequest): Promise<DescribeCollectorResponse>;
    /**
     * 获取能够与当前实例进行网络互通的实例列表。不包括已经打通的实例。
     */
    DescribeConnectableClusters(query: DescribeConnectableClustersRequest): Promise<DescribeConnectableClustersResponse>;
    /**
     * 调用DescribeDiagnoseReport，查看智能运维的历史报告。
     */
    DescribeDiagnoseReport(query: DescribeDiagnoseReportRequest): Promise<DescribeDiagnoseReportResponse>;
    /**
     * 调用DescribeDiagnosisSettings，获取智能运维的场景设置。
     */
    DescribeDiagnosisSettings(query: DescribeDiagnosisSettingsRequest): Promise<DescribeDiagnosisSettingsResponse>;
    /**
     * 查看集群运行的健康状态，是否正常运行。
     */
    DescribeElasticsearchHealth(query: DescribeElasticsearchHealthRequest): Promise<DescribeElasticsearchHealthResponse>;
    /**
     * 调用DescribeInstance，查询指定实例的详细信息。
     */
    DescribeInstance(query: DescribeInstanceRequest): Promise<DescribeInstanceResponse>;
    /**
     * 获取Elasticsearch实例的Kibana节点的配置。
     */
    DescribeKibanaSettings(query: DescribeKibanaSettingsRequest): Promise<DescribeKibanaSettingsResponse>;
    /**
     * 查询Logstash实例详细信息。
     */
    DescribeLogstash(query: DescribeLogstashRequest): Promise<DescribeLogstashResponse>;
    /**
     * 获取Logstash实例的管道信息。
     */
    DescribePipeline(query: DescribePipelineRequest): Promise<DescribePipelineResponse>;
    /**
     * 调用DescribePipelineManagementConfig，获取Logstash管道管理配置。
     */
    DescribePipelineManagementConfig(query: DescribePipelineManagementConfigRequest): Promise<DescribePipelineManagementConfigResponse>;
    /**
     * 获取阿里云Elasticsearch的区域信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 获取集群的快照备份设置，备份周期。
     */
    DescribeSnapshotSetting(query: DescribeSnapshotSettingRequest): Promise<DescribeSnapshotSettingResponse>;
    /**
     * 获取实例的场景模板配置，集群settings配置。
     */
    DescribeTemplates(query: DescribeTemplatesRequest): Promise<DescribeTemplatesResponse>;
    /**
     * 获取Logstash实例的X-Pack监控配置。
     */
    DescribeXpackMonitorConfig(query: DescribeXpackMonitorConfigRequest): Promise<DescribeXpackMonitorConfigResponse>;
    /**
     * 获取Logstash实例重启的预估时间。
     */
    EstimatedLogstashRestartTime(query: EstimatedLogstashRestartTimeRequest): Promise<EstimatedLogstashRestartTimeResponse>;
    /**
     * 获取实例重启的大致时间。
     */
    EstimatedRestartTime(query: EstimatedRestartTimeRequest): Promise<EstimatedRestartTimeResponse>;
    /**
     * 调用DiagnoseInstance，即刻诊断实例。
     */
    DiagnoseInstance(query: DiagnoseInstanceRequest): Promise<DiagnoseInstanceResponse>;
    /**
     * 获取索引迁移数据信息。
     */
    GetClusterDataInformation(query: GetClusterDataInformationRequest): Promise<GetClusterDataInformationResponse>;
    /**
     * 获取集群的弹性扩缩容规则。必须在创建实例时购买弹性节点才可。
     */
    GetElastictask(query: GetElastictaskRequest): Promise<GetElastictaskResponse>;
    /**
     * 查询Elasticsearch实例的Grafana指标监控数据。
     */
    GetEmonMonitorData(query: GetEmonMonitorDataRequest): Promise<GetEmonMonitorDataResponse>;
    /**
     * 指定节点类型和数量，获取可缩容的节点。
     */
    GetSuggestShrinkableNodes(query: GetSuggestShrinkableNodesRequest): Promise<GetSuggestShrinkableNodesResponse>;
    /**
     * 获取当前的区域信息。
     */
    GetRegionConfiguration(query: GetRegionConfigurationRequest): Promise<GetRegionConfigurationResponse>;
    /**
     * 指定节点类型和个数，获取可进行数据迁移的节点。
     */
    GetTransferableNodes(query: GetTransferableNodesRequest): Promise<GetTransferableNodesResponse>;
    /**
     * 安装Kibana预置插件。要求Kibana的规格为2核4G及以上。
     */
    InstallKibanaSystemPlugin(query: InstallKibanaSystemPluginRequest): Promise<InstallKibanaSystemPluginResponse>;
    /**
     * 为指定的Logstash实例安装系统插件。
     */
    InstallLogstashSystemPlugin(query: InstallLogstashSystemPluginRequest): Promise<InstallLogstashSystemPluginResponse>;
    /**
     * Elasticsearch实例安装系统插件。
     */
    InstallSystemPlugin(query: InstallSystemPluginRequest): Promise<InstallSystemPluginResponse>;
    /**
     * 调用InstallUserPlugins，安装用户自定义的已经上传至Elasticsearch控制台的插件。
     */
    InstallUserPlugins(query: InstallUserPluginsRequest): Promise<InstallUserPluginsResponse>;
    /**
     * 中断实例变更任务，仅对状态为生效中的实例有效，中断后，实例进入变更中断（suspended）状态。
     */
    InterruptElasticsearchTask(query: InterruptElasticsearchTaskRequest): Promise<InterruptElasticsearchTaskResponse>;
    /**
     * 中断后，实例会进入中断中（suspended）状态。
     */
    InterruptLogstashTask(query: InterruptLogstashTaskRequest): Promise<InterruptLogstashTaskResponse>;
    /**
     * 获取Elasticsearch集群下的所有节点信息。
     */
    ListAllNode(query: ListAllNodeRequest): Promise<ListAllNodeResponse>;
    /**
     * 获取当前实例可添加的OSS引用仓库。
     */
    ListAlternativeSnapshotRepos(query: ListAlternativeSnapshotReposRequest): Promise<ListAlternativeSnapshotReposResponse>;
    /**
     * 在设置Logstash实例的X-Pack监控时，获取可用的Elasticsearch实例列表。
     */
    ListAvailableEsInstanceIds(query: ListAvailableEsInstanceIdsRequest): Promise<ListAvailableEsInstanceIdsResponse>;
    /**
     * 获取采集器列表信息。
     */
    ListCollectors(query: ListCollectorsRequest): Promise<ListCollectorsResponse>;
    /**
     * 获取已经与当前实例进行了网络互通的实例列表。
     */
    ListConnectedClusters(query: ListConnectedClustersRequest): Promise<ListConnectedClustersResponse>;
    /**
     * 获取不同Elasticsearch集群之间的数据迁移任务的列表。
     */
    ListDataTasks(query: ListDataTasksRequest): Promise<ListDataTasksResponse>;
    /**
     * 调用ListDiagnoseReport，获取智能运维的历史报告。
     */
    ListDiagnoseReport(query: ListDiagnoseReportRequest): Promise<ListDiagnoseReportResponse>;
    /**
     * 获取智能运维历史报告所有的ID。
     */
    ListDiagnoseReportIds(query: ListDiagnoseReportIdsRequest): Promise<ListDiagnoseReportIdsResponse>;
    /**
     * 查看对应的词典信息。
     */
    ListDictInformation(query: ListDictInformationRequest): Promise<ListDictInformationResponse>;
    /**
     * 获取当前用户vpc和vswitch下的ECS 实例列表。
     */
    ListEcsInstances(query: ListEcsInstancesRequest): Promise<ListEcsInstancesResponse>;
    /**
     * 获取Logstash实例的扩展文件配置。
     */
    ListExtendfiles(query: ListExtendfilesRequest): Promise<ListExtendfilesResponse>;
    /**
     * 获取ES实例列表信息。
     */
    ListInstance(query: ListInstanceRequest): Promise<ListInstanceResponse>;
    /**
     * 能够过滤系统索引。
     */
    ListInstanceIndices(query: ListInstanceIndicesRequest): Promise<ListInstanceIndicesResponse>;
    /**
     * 获取Elasticsearch Kibana节点的插件列表。
     */
    ListKibanaPlugins(query: ListKibanaPluginsRequest): Promise<ListKibanaPluginsResponse>;
    /**
     * 在列表中展示所有或指定Logstash实例的详细信息。
     */
    ListLogstash(query: ListLogstashRequest): Promise<ListLogstashResponse>;
    /**
     * 调用ListLogstashLog，查看Logstash实例的日志。
     */
    ListLogstashLog(query: ListLogstashLogRequest): Promise<ListLogstashLogResponse>;
    /**
     * 调用ListLogstashPlugins，获取所有或指定插件的详细信息。
     */
    ListLogstashPlugins(query: ListLogstashPluginsRequest): Promise<ListLogstashPluginsResponse>;
    /**
     * 智能运维的历史报告列表。
     */
    ListNodes(query: ListNodesRequest): Promise<ListNodesResponse>;
    /**
     * 获取Logstash的管道列表。
     */
    ListPipeline(query: ListPipelineRequest): Promise<ListPipelineResponse>;
    /**
     * 获取Logstash实例管道ID列表。
     */
    ListPipelineIds(query: ListPipelineIdsRequest): Promise<ListPipelineIdsResponse>;
    /**
     * 获取指定阿里云Elasticsearch实例的插件列表。
     */
    ListPlugins(query: ListPluginsRequest): Promise<ListPluginsResponse>;
    /**
     * 查看ES实例不同类型的日志。
     */
    ListSearchLog(query: ListSearchLogRequest): Promise<ListSearchLogResponse>;
    /**
     * 获取当前实例的跨集群OSS仓库设置列表。
     */
    ListSnapshotReposByInstanceId(query: ListSnapshotReposByInstanceIdRequest): Promise<ListSnapshotReposByInstanceIdResponse>;
    /**
     * 获取所有实例和标签的关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 用户在当前区域创建的所有标签。
     */
    ListTags(query: ListTagsRequest): Promise<ListTagsResponse>;
    /**
     * 迁移对应可用区下的节点到目标可用区。
     */
    MigrateToOtherZone(query: MigrateToOtherZoneRequest): Promise<MigrateToOtherZoneResponse>;
    /**
     * 更新一个collector安装的esc机器。
     */
    ModifyDeployMachine(query: ModifyDeployMachineRequest): Promise<ModifyDeployMachineResponse>;
    /**
     * 调用ModifyElastictask，更新集群弹性扩缩容规则。
     */
    ModifyElastictask(query: ModifyElastictaskRequest): Promise<ModifyElastictaskResponse>;
    /**
     * 调用ModifyInstanceMaintainTime，更改并开启实例的可维护时间。
     */
    ModifyInstanceMaintainTime(query: ModifyInstanceMaintainTimeRequest): Promise<ModifyInstanceMaintainTimeResponse>;
    /**
     * 调用ModifyWhiteIps，更新指定实例的访问白名单。
     */
    ModifyWhiteIps(query: ModifyWhiteIpsRequest): Promise<ModifyWhiteIpsResponse>;
    /**
     * 修改实例所属资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 打开实例的智能运维功能。
     */
    OpenDiagnosis(query: OpenDiagnosisRequest): Promise<OpenDiagnosisResponse>;
    /**
     * 开启HTTPS协议。开启前请确保已购买协调节点。
     */
    OpenHttps(query: OpenHttpsRequest): Promise<OpenHttpsResponse>;
    /**
     * 重试安装在创建时没有安装成功的采集器。
     */
    ReinstallCollector(query: ReinstallCollectorRequest): Promise<ReinstallCollectorResponse>;
    /**
     * 为包年包月的Elasticseach实例续费。
     */
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
     * 指定Logstash实例续费。
     */
    RenewLogstash(query: RenewLogstashRequest): Promise<RenewLogstashResponse>;
    /**
     * 重启Elasticsearch集群。
     */
    RestartInstance(query: RestartInstanceRequest): Promise<RestartInstanceResponse>;
    /**
     * 重启指定实例。重启后，实例会进入生效中（activing）状态。
     */
    RestartLogstash(query: RestartLogstashRequest): Promise<RestartLogstashResponse>;
    /**
     * 恢复实例之间啊变更中断的任务。
     */
    ResumeElasticsearchTask(query: ResumeElasticsearchTaskRequest): Promise<ResumeElasticsearchTaskResponse>;
    /**
     * 恢复实例的变更中断任务。恢复后实例会进入生效中（activating）状态。
     */
    ResumeLogstashTask(query: ResumeLogstashTaskRequest): Promise<ResumeLogstashTaskResponse>;
    /**
     * 调用RunPipelines，立即部署Logstash管道。
     */
    RunPipelines(query: RunPipelinesRequest): Promise<RunPipelinesResponse>;
    /**
     * 指定Elasticsearch节点角色进行缩节点操作。
     */
    ShrinkNode(query: ShrinkNodeRequest): Promise<ShrinkNodeResponse>;
    /**
     * 启动采集器，进行数据采集。
     */
    StartCollector(query: StartCollectorRequest): Promise<StartCollectorResponse>;
    /**
     * 调用StopCollector，停止运行中的采集器。
     */
    StopCollector(query: StopCollectorRequest): Promise<StopCollectorResponse>;
    /**
     * 调用StopPipelines，停止运行Logstash管道。
     */
    StopPipelines(query: StopPipelinesRequest): Promise<StopPipelinesResponse>;
    /**
     * 指定实例创建标签资源关系。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 节点数据迁移，方便进行缩节点操作。
     */
    TransferNode(query: TransferNodeRequest): Promise<TransferNodeResponse>;
    /**
     * 开启或关闭Elasticsearch或Kibana集群的公网或私网访问。
     */
    TriggerNetwork(query: TriggerNetworkRequest): Promise<TriggerNetworkResponse>;
    /**
     * 卸载Elasticsearch实例Kibana节点插件。
     */
    UninstallKibanaPlugin(query: UninstallKibanaPluginRequest): Promise<UninstallKibanaPluginResponse>;
    /**
     * Logstash实例卸载已安装的插件。
     */
    UninstallLogstashPlugin(query: UninstallLogstashPluginRequest): Promise<UninstallLogstashPluginResponse>;
    /**
     * Elasticsearch实例卸载系统插件。
     */
    UninstallPlugin(query: UninstallPluginRequest): Promise<UninstallPluginResponse>;
    /**
     * 删除指定实例的用户资源标签关系。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 更新指定Elasticsearch实例的elastic账号的密码。
     */
    UpdateAdminPassword(query: UpdateAdminPasswordRequest): Promise<UpdateAdminPasswordResponse>;
    /**
     * 更改Elasticsearch指定实例的垃圾回收器配置。
     */
    UpdateAdvancedSetting(query: UpdateAdvancedSettingRequest): Promise<UpdateAdvancedSettingResponse>;
    /**
     * 更新AliNLP分词插件（英文名为analysis-aliws）的词典。
     */
    UpdateAliwsDict(query: UpdateAliwsDictRequest): Promise<UpdateAliwsDictResponse>;
    /**
     * 修改ES实例访问黑名单，已废弃
     */
    UpdateBlackIps(query: UpdateBlackIpsRequest): Promise<UpdateBlackIpsResponse>;
    /**
     * 修改采集器配置。
     */
    UpdateCollector(query: UpdateCollectorRequest): Promise<UpdateCollectorResponse>;
    /**
     * 调用UpdateCollectorName，修改采集器名称。
     */
    UpdateCollectorName(query: UpdateCollectorNameRequest): Promise<UpdateCollectorNameResponse>;
    /**
     * 更改Elasticsearch实例名称。
     */
    UpdateDescription(query: UpdateDescriptionRequest): Promise<UpdateDescriptionResponse>;
    /**
     * 修改指定Elasticsearch实例的智能运维场景设置。
     */
    UpdateDiagnosisSettings(query: UpdateDiagnosisSettingsRequest): Promise<UpdateDiagnosisSettingsResponse>;
    /**
     * 更新Elasticsearch实例的用户词典。
     */
    UpdateDict(query: UpdateDictRequest): Promise<UpdateDictResponse>;
    /**
     * 修改Elasticsearch场景化配置模板。
     */
    UpdateExtendConfig(query: UpdateExtendConfigRequest): Promise<UpdateExtendConfigResponse>;
    /**
     * 更新Logstash实例的扩展文件配置。
     */
    UpdateExtendfiles(query: UpdateExtendfilesRequest): Promise<UpdateExtendfilesResponse>;
    /**
     * 更新阿里云Elasticsearch实例的IK热词词典。
     */
    UpdateHotIkDicts(query: UpdateHotIkDictsRequest): Promise<UpdateHotIkDictsResponse>;
    /**
     * Elasticsearch集群升配，增加节点数，角色，规格，磁盘配置。
     */
    UpdateInstance(query: UpdateInstanceRequest): Promise<UpdateInstanceResponse>;
    /**
     * Elasticsearch实例更改付费类型，按量付费实例转换为包年包月实例。
     */
    UpdateInstanceChargeType(query: UpdateInstanceChargeTypeRequest): Promise<UpdateInstanceChargeTypeResponse>;
    /**
     * 修改指定ES实例的YML参数配置。
     */
    UpdateInstanceSettings(query: UpdateInstanceSettingsRequest): Promise<UpdateInstanceSettingsResponse>;
    /**
     * 修改Kibana配置。目前仅支持修改Kibana语言配置。
     */
    UpdateKibanaSettings(query: UpdateKibanaSettingsRequest): Promise<UpdateKibanaSettingsResponse>;
    /**
     * 更新指定阿里云Elasticsearch实例的Kibana访问白名单。
     */
    UpdateKibanaWhiteIps(query: UpdateKibanaWhiteIpsRequest): Promise<UpdateKibanaWhiteIpsResponse>;
    /**
     * 修改指定实例的部分信息，例如节点数、配额、名称、硬盘大小等。
     */
    UpdateLogstash(query: UpdateLogstashRequest): Promise<UpdateLogstashResponse>;
    /**
     * 将按量付费的阿里云Logstash实例转换为包年包月实例。
     */
    UpdateLogstashChargeType(query: UpdateLogstashChargeTypeRequest): Promise<UpdateLogstashChargeTypeResponse>;
    /**
     * 修改指定Logstash实例名称。
     */
    UpdateLogstashDescription(query: UpdateLogstashDescriptionRequest): Promise<UpdateLogstashDescriptionResponse>;
    /**
     * 更新指定Logstash实例的配置。
     */
    UpdateLogstashSettings(query: UpdateLogstashSettingsRequest): Promise<UpdateLogstashSettingsResponse>;
    /**
     * 修改指定Logstash实例的管道管理方式。
     */
    UpdatePipelineManagementConfig(query: UpdatePipelineManagementConfigRequest): Promise<UpdatePipelineManagementConfigResponse>;
    /**
     * 调用UpdatePipelines，更新Logstash管道信息。
     */
    UpdatePipelines(query: UpdatePipelinesRequest): Promise<UpdatePipelinesResponse>;
    /**
     * 更新指定实例的VPC私网访问白名单。
     */
    UpdatePrivateNetworkWhiteIps(query: UpdatePrivateNetworkWhiteIpsRequest): Promise<UpdatePrivateNetworkWhiteIpsResponse>;
    /**
     * 开启或关闭指定Elasticsearch实例的公网地址。
     */
    UpdatePublicNetwork(query: UpdatePublicNetworkRequest): Promise<UpdatePublicNetworkResponse>;
    /**
     * 更新指定Elasticsearch实例的公网地址访问白名单。
     */
    UpdatePublicWhiteIps(query: UpdatePublicWhiteIpsRequest): Promise<UpdatePublicWhiteIpsResponse>;
    /**
     * 开启或关闭集群的写入高可用特性。目前仅支持华北2（北京）区域的实例。
     */
    UpdateReadWritePolicy(query: UpdateReadWritePolicyRequest): Promise<UpdateReadWritePolicyResponse>;
    /**
     * 更新指定实例的数据备份配置。
     */
    UpdateSnapshotSetting(query: UpdateSnapshotSettingRequest): Promise<UpdateSnapshotSettingResponse>;
    /**
     * 更新阿里云Elasticsearch实例的同义词词典。
     */
    UpdateSynonymsDicts(query: UpdateSynonymsDictsRequest): Promise<UpdateSynonymsDictsResponse>;
    /**
     * 修改集群的场景化模板配置内容。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 修改ES实例的VPC私网访问白名单。
     */
    UpdateWhiteIps(query: UpdateWhiteIpsRequest): Promise<UpdateWhiteIpsResponse>;
    /**
     * 更新Logstash实例的X-Pack监控报警配置。
     */
    UpdateXpackMonitorConfig(query: UpdateXpackMonitorConfigRequest): Promise<UpdateXpackMonitorConfigResponse>;
    /**
     * 升级Elasticsearch实例版本，支持版本升级和内核版本升级。
     */
    UpgradeEngineVersion(query: UpgradeEngineVersionRequest): Promise<UpgradeEngineVersionResponse>;
    /**
     * 验证提供X-Pack监控的Elasticsearch实例的联通性。
     */
    ValidateConnection(query: ValidateConnectionRequest): Promise<ValidateConnectionResponse>;
    /**
     * 校验指定实例中的某些节点是否可以缩容。
     */
    ValidateShrinkNodes(query: ValidateShrinkNodesRequest): Promise<ValidateShrinkNodesResponse>;
    /**
     * 校验是否可以迁移指定实例中某些节点上的数据。
     */
    ValidateTransferableNodes(query: ValidateTransferableNodesRequest): Promise<ValidateTransferableNodesResponse>;
    /**
     * 创建Elasticsearch实例。
     */
    createInstance(query: createInstanceRequest): Promise<createInstanceResponse>;
    /**
     * 创建采集器，采集指定服务上的数据。
     */
    CreateCollector(query: CreateCollectorRequest): Promise<CreateCollectorResponse>;
    /**
     * 调用DescribeAckOperator，查看指定容器服务Kubernetes版ACK（Container Service for Kubernetes）集群上安装的Elasticsearch Operator信息。
     */
    DescribeAckOperator(query: DescribeAckOperatorRequest): Promise<DescribeAckOperatorResponse>;
    /**
     * 调用InitializeOperationRole，创建服务关联角色。
     */
    InitializeOperationRole(query: InitializeOperationRoleRequest): Promise<InitializeOperationRoleResponse>;
    /**
     * 在指定容器服务集群上安装 Ack Operator。
     */
    InstallAckOperator(query: InstallAckOperatorRequest): Promise<InstallAckOperatorResponse>;
    /**
     * 获取容器服务Kubernetes版ACK（Container Service for Kubernetes）集群列表。
     */
    ListAckClusters(query: ListAckClustersRequest): Promise<ListAckClustersResponse>;
    /**
     * 查看指定容器服务Kubernetes版ACK（Container Service for Kubernetes）集群的所有命名空间。
     */
    ListAckNamespaces(query: ListAckNamespacesRequest): Promise<ListAckNamespacesResponse>;
    /**
     * 重启采集器，进行数据采集工作。
     */
    RestartCollector(query: RestartCollectorRequest): Promise<RestartCollectorResponse>;
    /**
     * 验证当前账户SLR权限。
     */
    ValidateSlrPermission(query: ValidateSlrPermissionRequest): Promise<ValidateSlrPermissionResponse>;
    /**
     * 调用ListDefaultCollectorConfigurations，获取采集器的默认配置文件。
     */
    ListDefaultCollectorConfigurations(query: ListDefaultCollectorConfigurationsRequest): Promise<ListDefaultCollectorConfigurationsResponse>;
    /**
     * 调用RecommendTemplates，获取推荐的集群配置。
     */
    RecommendTemplates(query: RecommendTemplatesRequest): Promise<RecommendTemplatesResponse>;
    /**
     * 恢复释放后被冻结的Elasticsearch实例。
     */
    CancelDeletion(query: CancelDeletionRequest): Promise<CancelDeletionResponse>;
    /**
     * 恢复释放后被冻结的Logstash实例。
     */
    CancelLogstashDeletion(query: CancelLogstashDeletionRequest): Promise<CancelLogstashDeletionResponse>;
    /**
     * 获取指定实例智能运维模块中健康诊断的诊断索引。
     */
    ListDiagnoseIndices(query: ListDiagnoseIndicesRequest): Promise<ListDiagnoseIndicesResponse>;
    /**
     * 关闭Indexing Service集群中某个索引的云端托管功能。此功能不可逆，关闭后无法再开启。
     */
    CloseManagedIndex(query: CloseManagedIndexRequest): Promise<CloseManagedIndexResponse>;
    /**
     * 创建数据流，管理一批索引。
     */
    CreateDataStream(query: CreateDataStreamRequest): Promise<CreateDataStreamResponse>;
    /**
     * 创建索引生命周期策略，如果创建的策略名已经存在，则替换成该策略并递增版本。
     */
    CreateILMPolicy(query: CreateILMPolicyRequest): Promise<CreateILMPolicyResponse>;
    /**
     * 创建集群索引模板，可用于索引模版的组件化设置。
     */
    CreateIndexTemplate(query: CreateIndexTemplateRequest): Promise<CreateIndexTemplateResponse>;
    /**
     * 删除指定的集群数据流。
     */
    DeleteDataStream(query: DeleteDataStreamRequest): Promise<DeleteDataStreamResponse>;
    /**
     * 删除指定的索引生命周期策略。
     */
    DeleteILMPolicy(query: DeleteILMPolicyRequest): Promise<DeleteILMPolicyResponse>;
    /**
     * 删除置顶的索引模版。
     */
    DeleteIndexTemplate(query: DeleteIndexTemplateRequest): Promise<DeleteIndexTemplateResponse>;
    /**
     * 查询指定索引生命周期详情。
     */
    DescribeILMPolicy(query: DescribeILMPolicyRequest): Promise<DescribeILMPolicyResponse>;
    /**
     * 返回有关一个索引模板的信息。
     */
    DescribeIndexTemplate(query: DescribeIndexTemplateRequest): Promise<DescribeIndexTemplateResponse>;
    /**
     * 获取Elasticserch集群中，索引数据流列表。
     */
    ListDataStreams(query: ListDataStreamsRequest): Promise<ListDataStreamsResponse>;
    /**
     * 查询集群已经创建的索引生命周期列表。
     */
    ListILMPolicies(query: ListILMPoliciesRequest): Promise<ListILMPoliciesResponse>;
    /**
     * 查询索引模板列表。
     */
    ListIndexTemplates(query: ListIndexTemplatesRequest): Promise<ListIndexTemplatesResponse>;
    /**
     * 为数据流或索引别名创建新索引。
     */
    RolloverDataStream(query: RolloverDataStreamRequest): Promise<RolloverDataStreamResponse>;
    /**
     * 修改Elasticsearch索引生命周期策略。
     */
    UpdateILMPolicy(query: UpdateILMPolicyRequest): Promise<UpdateILMPolicyResponse>;
    /**
     * 修改Elasticsearch实例模版配置。
     */
    UpdateIndexTemplate(query: UpdateIndexTemplateRequest): Promise<UpdateIndexTemplateResponse>;
    /**
     * 调用GetEmonGrafanaAlerts，获取Grafana报警列表。
     */
    GetEmonGrafanaAlerts(query: GetEmonGrafanaAlertsRequest): Promise<GetEmonGrafanaAlertsResponse>;
    /**
     * 调用GetEmonGrafanaDashboards，获取Grafana大盘列表。
     */
    GetEmonGrafanaDashboards(query: GetEmonGrafanaDashboardsRequest): Promise<GetEmonGrafanaDashboardsResponse>;
    /**
     * 调用PostEmonTryAlarmRule，发送测试的报警消息。
     */
    PostEmonTryAlarmRule(query: PostEmonTryAlarmRuleRequest): Promise<PostEmonTryAlarmRuleResponse>;
    /**
     * 创建私网链接VPC终端节点，用于连接用户VPC下创建的终端节点服务。
     */
    CreateVpcEndpoint(query: CreateVpcEndpointRequest): Promise<CreateVpcEndpointResponse>;
    /**
     * 调用DeleteVpcEndpoint，删除服务VPC下的终端节点。
     */
    DeleteVpcEndpoint(query: DeleteVpcEndpointRequest): Promise<DeleteVpcEndpointResponse>;
    /**
     * 查看指定类型的词典列表详情。
     */
    ListDicts(query: ListDictsRequest): Promise<ListDictsResponse>;
    /**
     * 查询有关正在进行和已完成的分片恢复的数据进度列表，默认返回正在进行的分片恢复信息。
     */
    ListShardRecoveries(query: ListShardRecoveriesRequest): Promise<ListShardRecoveriesResponse>;
    /**
     * 查看服务服务账号vpc下的终端节点状态。
     */
    ListVpcEndpoints(query: ListVpcEndpointsRequest): Promise<ListVpcEndpointsResponse>;
    /**
     * 查看OpensStore实例的存储容量和使用情况。
     */
    GetOpenStoreUsage(query: GetOpenStoreUsageRequest): Promise<GetOpenStoreUsageResponse>;
    /**
     * 用于系统根据业务场景、QPS和日志产生量等情况为您推荐集群容量规划的最佳配置信息。
     */
    CapacityPlan(query: CapacityPlanRequest): Promise<CapacityPlanResponse>;
    /**
     * 查看APM实例详情。
     */
    DescribeApm(query: DescribeApmRequest): Promise<DescribeApmResponse>;
    /**
     * 查看APM实例列表。
     */
    ListApm(query: ListApmRequest): Promise<ListApmResponse>;
    /**
     * 删除已经创建完成的APM实例。
     */
    RemoveApm(query: RemoveApmRequest): Promise<RemoveApmResponse>;
    /**
     * 修改APM Server实例配置信息。
     */
    UpdateApm(query: UpdateApmRequest): Promise<UpdateApmResponse>;
    /**
     * 启动APM Server实例，代理数据。
     */
    StartApm(query: StartApmRequest): Promise<StartApmResponse>;
    /**
     * 停止APM Server，停止APM代理上传数据。
     */
    StopApm(query: StopApmRequest): Promise<StopApmResponse>;
    /**
     * 删除Elasticsearch的组合索引模板。
     */
    DeleteComponentIndex(query: DeleteComponentIndexRequest): Promise<DeleteComponentIndexResponse>;
    /**
     * 查看Elasticsearch的组合模板详情。
     */
    DescribeComponentIndex(query: DescribeComponentIndexRequest): Promise<DescribeComponentIndexResponse>;
    /**
     * 调用CreateComponentIndex，创建Elasticsearch组合模板。
     */
    CreateComponentIndex(query: CreateComponentIndexRequest): Promise<CreateComponentIndexResponse>;
    /**
     * 查看历史索引模板详情。
     */
    DescribeDeprecatedTemplate(query: DescribeDeprecatedTemplateRequest): Promise<DescribeDeprecatedTemplateResponse>;
    /**
     * 获取Elasticsearch的组合模板列表。
     */
    ListComponentIndices(query: ListComponentIndicesRequest): Promise<ListComponentIndicesResponse>;
    /**
     * 删除历史索引模板。
     */
    DeleteDeprecatedTemplate(query: DeleteDeprecatedTemplateRequest): Promise<DeleteDeprecatedTemplateResponse>;
    /**
     * ListDeprecatedTemplates，查看历史索引模板列表。
     */
    ListDeprecatedTemplates(query: ListDeprecatedTemplatesRequest): Promise<ListDeprecatedTemplatesResponse>;
    /**
     * UpdateComponentIndex，更新Elasticsearch的组合模板。
     */
    UpdateComponentIndex(query: UpdateComponentIndexRequest): Promise<UpdateComponentIndexResponse>;
    /**
     * 调用ListInstanceHistoryEvents，查看Elasticsearch集群触发的硬件运维事件列表。
     */
    ListInstanceHistoryEvents(query: ListInstanceHistoryEventsRequest): Promise<ListInstanceHistoryEventsResponse>;
    /**
     * 修改集群动态配置
     */
    UpdateDynamicSettings(query: UpdateDynamicSettingsRequest): Promise<UpdateDynamicSettingsResponse>;
    /**
     * 获取集群动态指标
     */
    DescribeDynamicSettings(query: DescribeDynamicSettingsRequest): Promise<DescribeDynamicSettingsResponse>;
    /**
     * 变更记录 变更详情
     */
    ListActionRecords(query: ListActionRecordsRequest): Promise<ListActionRecordsResponse>;
    /**
     * 列举Elasticsearch实例智能诊断项目。
     */
    ListDiagnosisItems(query: ListDiagnosisItemsRequest): Promise<ListDiagnosisItemsResponse>;
    /**
     * 关闭kibana私网
     */
    DisableKibanaPvlNetwork(query: DisableKibanaPvlNetworkRequest): Promise<DisableKibanaPvlNetworkResponse>;
    /**
     * 更新kibana私网访问
     */
    UpdateKibanaPvlNetwork(query: UpdateKibanaPvlNetworkRequest): Promise<UpdateKibanaPvlNetworkResponse>;
    /**
     * 查询kibana私网详细信息
     */
    ListKibanaPvlNetwork(query: ListKibanaPvlNetworkRequest): Promise<ListKibanaPvlNetworkResponse>;
    /**
     * 调用EnableKibanaPvlNetwork，开启Kibana私网访问。
     */
    EnableKibanaPvlNetwork(query: EnableKibanaPvlNetworkRequest): Promise<EnableKibanaPvlNetworkResponse>;
}
export default ELASTICSEARCH;
