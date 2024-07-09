import { AddGrafanaRequest } from "./AddGrafana/req";
import { AddGrafanaResponse } from "./AddGrafana/res";
import { AddIntegrationRequest } from "./AddIntegration/req";
import { AddIntegrationResponse } from "./AddIntegration/res";
import { ApplyScenarioRequest } from "./ApplyScenario/req";
import { ApplyScenarioResponse } from "./ApplyScenario/res";
import { ConfigAppRequest } from "./ConfigApp/req";
import { ConfigAppResponse } from "./ConfigApp/res";
import { CreateAlertContactRequest } from "./CreateAlertContact/req";
import { CreateAlertContactResponse } from "./CreateAlertContact/res";
import { CreateAlertContactGroupRequest } from "./CreateAlertContactGroup/req";
import { CreateAlertContactGroupResponse } from "./CreateAlertContactGroup/res";
import { CreateRetcodeAppRequest } from "./CreateRetcodeApp/req";
import { CreateRetcodeAppResponse } from "./CreateRetcodeApp/res";
import { DeleteAlertContactRequest } from "./DeleteAlertContact/req";
import { DeleteAlertContactResponse } from "./DeleteAlertContact/res";
import { DeleteAlertContactGroupRequest } from "./DeleteAlertContactGroup/req";
import { DeleteAlertContactGroupResponse } from "./DeleteAlertContactGroup/res";
import { DeleteAlertRulesRequest } from "./DeleteAlertRules/req";
import { DeleteAlertRulesResponse } from "./DeleteAlertRules/res";
import { DeleteScenarioRequest } from "./DeleteScenario/req";
import { DeleteScenarioResponse } from "./DeleteScenario/res";
import { DeleteRetcodeAppRequest } from "./DeleteRetcodeApp/req";
import { DeleteRetcodeAppResponse } from "./DeleteRetcodeApp/res";
import { DeleteTraceAppRequest } from "./DeleteTraceApp/req";
import { DeleteTraceAppResponse } from "./DeleteTraceApp/res";
import { DescribeDispatchRuleRequest } from "./DescribeDispatchRule/req";
import { DescribeDispatchRuleResponse } from "./DescribeDispatchRule/res";
import { DescribeTraceLicenseKeyRequest } from "./DescribeTraceLicenseKey/req";
import { DescribeTraceLicenseKeyResponse } from "./DescribeTraceLicenseKey/res";
import { GetAgentDownloadUrlRequest } from "./GetAgentDownloadUrl/req";
import { GetAgentDownloadUrlResponse } from "./GetAgentDownloadUrl/res";
import { GetAppApiByPageRequest } from "./GetAppApiByPage/req";
import { GetAppApiByPageResponse } from "./GetAppApiByPage/res";
import { GetMultipleTraceRequest } from "./GetMultipleTrace/req";
import { GetMultipleTraceResponse } from "./GetMultipleTrace/res";
import { GetPrometheusApiTokenRequest } from "./GetPrometheusApiToken/req";
import { GetPrometheusApiTokenResponse } from "./GetPrometheusApiToken/res";
import { GetRetcodeShareUrlRequest } from "./GetRetcodeShareUrl/req";
import { GetRetcodeShareUrlResponse } from "./GetRetcodeShareUrl/res";
import { GetStackRequest } from "./GetStack/req";
import { GetStackResponse } from "./GetStack/res";
import { GetTraceRequest } from "./GetTrace/req";
import { GetTraceResponse } from "./GetTrace/res";
import { GetTraceAppRequest } from "./GetTraceApp/req";
import { GetTraceAppResponse } from "./GetTraceApp/res";
import { ImportAppAlertRulesRequest } from "./ImportAppAlertRules/req";
import { ImportAppAlertRulesResponse } from "./ImportAppAlertRules/res";
import { ListClusterFromGrafanaRequest } from "./ListClusterFromGrafana/req";
import { ListClusterFromGrafanaResponse } from "./ListClusterFromGrafana/res";
import { ListDashboardsRequest } from "./ListDashboards/req";
import { ListDashboardsResponse } from "./ListDashboards/res";
import { ListRetcodeAppsRequest } from "./ListRetcodeApps/req";
import { ListRetcodeAppsResponse } from "./ListRetcodeApps/res";
import { ListScenarioRequest } from "./ListScenario/req";
import { ListScenarioResponse } from "./ListScenario/res";
import { ListTraceAppsRequest } from "./ListTraceApps/req";
import { ListTraceAppsResponse } from "./ListTraceApps/res";
import { QueryMetricByPageRequest } from "./QueryMetricByPage/req";
import { QueryMetricByPageResponse } from "./QueryMetricByPage/res";
import { SaveTraceAppConfigRequest } from "./SaveTraceAppConfig/req";
import { SaveTraceAppConfigResponse } from "./SaveTraceAppConfig/res";
import { SearchAlertContactRequest } from "./SearchAlertContact/req";
import { SearchAlertContactResponse } from "./SearchAlertContact/res";
import { SearchAlertContactGroupRequest } from "./SearchAlertContactGroup/req";
import { SearchAlertContactGroupResponse } from "./SearchAlertContactGroup/res";
import { SearchAlertHistoriesRequest } from "./SearchAlertHistories/req";
import { SearchAlertHistoriesResponse } from "./SearchAlertHistories/res";
import { SearchAlertRulesRequest } from "./SearchAlertRules/req";
import { SearchAlertRulesResponse } from "./SearchAlertRules/res";
import { SearchEventsRequest } from "./SearchEvents/req";
import { SearchEventsResponse } from "./SearchEvents/res";
import { SearchRetcodeAppByPageRequest } from "./SearchRetcodeAppByPage/req";
import { SearchRetcodeAppByPageResponse } from "./SearchRetcodeAppByPage/res";
import { SearchTraceAppByNameRequest } from "./SearchTraceAppByName/req";
import { SearchTraceAppByNameResponse } from "./SearchTraceAppByName/res";
import { SearchTraceAppByPageRequest } from "./SearchTraceAppByPage/req";
import { SearchTraceAppByPageResponse } from "./SearchTraceAppByPage/res";
import { SearchTracesRequest } from "./SearchTraces/req";
import { SearchTracesResponse } from "./SearchTraces/res";
import { SearchTracesByPageRequest } from "./SearchTracesByPage/req";
import { SearchTracesByPageResponse } from "./SearchTracesByPage/res";
import { SetRetcodeShareStatusRequest } from "./SetRetcodeShareStatus/req";
import { SetRetcodeShareStatusResponse } from "./SetRetcodeShareStatus/res";
import { StartAlertRequest } from "./StartAlert/req";
import { StartAlertResponse } from "./StartAlert/res";
import { StopAlertRequest } from "./StopAlert/req";
import { StopAlertResponse } from "./StopAlert/res";
import { UpdateAlertContactRequest } from "./UpdateAlertContact/req";
import { UpdateAlertContactResponse } from "./UpdateAlertContact/res";
import { UpdateAlertContactGroupRequest } from "./UpdateAlertContactGroup/req";
import { UpdateAlertContactGroupResponse } from "./UpdateAlertContactGroup/res";
import { UpdateAlertRuleRequest } from "./UpdateAlertRule/req";
import { UpdateAlertRuleResponse } from "./UpdateAlertRule/res";
import { UpdateWebhookRequest } from "./UpdateWebhook/req";
import { UpdateWebhookResponse } from "./UpdateWebhook/res";
import { CreateDispatchRuleRequest } from "./CreateDispatchRule/req";
import { CreateDispatchRuleResponse } from "./CreateDispatchRule/res";
import { DeleteDispatchRuleRequest } from "./DeleteDispatchRule/req";
import { DeleteDispatchRuleResponse } from "./DeleteDispatchRule/res";
import { UpdateDispatchRuleRequest } from "./UpdateDispatchRule/req";
import { UpdateDispatchRuleResponse } from "./UpdateDispatchRule/res";
import { ListDispatchRuleRequest } from "./ListDispatchRule/req";
import { ListDispatchRuleResponse } from "./ListDispatchRule/res";
import { CheckServiceStatusRequest } from "./CheckServiceStatus/req";
import { CheckServiceStatusResponse } from "./CheckServiceStatus/res";
import { OpenVClusterRequest } from "./OpenVCluster/req";
import { OpenVClusterResponse } from "./OpenVCluster/res";
import { OpenArmsDefaultSLRRequest } from "./OpenArmsDefaultSLR/req";
import { OpenArmsDefaultSLRResponse } from "./OpenArmsDefaultSLR/res";
import { OpenXtraceDefaultSLRRequest } from "./OpenXtraceDefaultSLR/req";
import { OpenXtraceDefaultSLRResponse } from "./OpenXtraceDefaultSLR/res";
import { CreatePrometheusAlertRuleRequest } from "./CreatePrometheusAlertRule/req";
import { CreatePrometheusAlertRuleResponse } from "./CreatePrometheusAlertRule/res";
import { DeletePrometheusAlertRuleRequest } from "./DeletePrometheusAlertRule/req";
import { DeletePrometheusAlertRuleResponse } from "./DeletePrometheusAlertRule/res";
import { DescribePrometheusAlertRuleRequest } from "./DescribePrometheusAlertRule/req";
import { DescribePrometheusAlertRuleResponse } from "./DescribePrometheusAlertRule/res";
import { ListActivatedAlertsRequest } from "./ListActivatedAlerts/req";
import { ListActivatedAlertsResponse } from "./ListActivatedAlerts/res";
import { ListPrometheusAlertRulesRequest } from "./ListPrometheusAlertRules/req";
import { ListPrometheusAlertRulesResponse } from "./ListPrometheusAlertRules/res";
import { ListPrometheusAlertTemplatesRequest } from "./ListPrometheusAlertTemplates/req";
import { ListPrometheusAlertTemplatesResponse } from "./ListPrometheusAlertTemplates/res";
import { UpdatePrometheusAlertRuleRequest } from "./UpdatePrometheusAlertRule/req";
import { UpdatePrometheusAlertRuleResponse } from "./UpdatePrometheusAlertRule/res";
import { DeleteGrafanaResourceRequest } from "./DeleteGrafanaResource/req";
import { DeleteGrafanaResourceResponse } from "./DeleteGrafanaResource/res";
import { CreateWebhookRequest } from "./CreateWebhook/req";
import { CreateWebhookResponse } from "./CreateWebhook/res";
import { OpenArmsServiceSecondVersionRequest } from "./OpenArmsServiceSecondVersion/req";
import { OpenArmsServiceSecondVersionResponse } from "./OpenArmsServiceSecondVersion/res";
import { GetExploreUrlRequest } from "./GetExploreUrl/req";
import { GetExploreUrlResponse } from "./GetExploreUrl/res";
import { QueryPromInstallStatusRequest } from "./QueryPromInstallStatus/req";
import { QueryPromInstallStatusResponse } from "./QueryPromInstallStatus/res";
import { UninstallPromClusterRequest } from "./UninstallPromCluster/req";
import { UninstallPromClusterResponse } from "./UninstallPromCluster/res";
import { QueryReleaseMetricRequest } from "./QueryReleaseMetric/req";
import { QueryReleaseMetricResponse } from "./QueryReleaseMetric/res";
import { GetRecordingRuleRequest } from "./GetRecordingRule/req";
import { GetRecordingRuleResponse } from "./GetRecordingRule/res";
import { AddRecordingRuleRequest } from "./AddRecordingRule/req";
import { AddRecordingRuleResponse } from "./AddRecordingRule/res";
import { GetAlertRulesRequest } from "./GetAlertRules/req";
import { GetAlertRulesResponse } from "./GetAlertRules/res";
import { CreateOrUpdateAlertRuleRequest } from "./CreateOrUpdateAlertRule/req";
import { CreateOrUpdateAlertRuleResponse } from "./CreateOrUpdateAlertRule/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { InstallManagedPrometheusRequest } from "./InstallManagedPrometheus/req";
import { InstallManagedPrometheusResponse } from "./InstallManagedPrometheus/res";
import { UninstallManagedPrometheusRequest } from "./UninstallManagedPrometheus/req";
import { UninstallManagedPrometheusResponse } from "./UninstallManagedPrometheus/res";
import { DeleteAlertRuleRequest } from "./DeleteAlertRule/req";
import { DeleteAlertRuleResponse } from "./DeleteAlertRule/res";
import { SendTTSVerifyLinkRequest } from "./SendTTSVerifyLink/req";
import { SendTTSVerifyLinkResponse } from "./SendTTSVerifyLink/res";
import { CreateOrUpdateWebhookContactRequest } from "./CreateOrUpdateWebhookContact/req";
import { CreateOrUpdateWebhookContactResponse } from "./CreateOrUpdateWebhookContact/res";
import { DescribeWebhookContactsRequest } from "./DescribeWebhookContacts/req";
import { DescribeWebhookContactsResponse } from "./DescribeWebhookContacts/res";
import { DeleteWebhookContactRequest } from "./DeleteWebhookContact/req";
import { DeleteWebhookContactResponse } from "./DeleteWebhookContact/res";
import { DescribeIMRobotsRequest } from "./DescribeIMRobots/req";
import { DescribeIMRobotsResponse } from "./DescribeIMRobots/res";
import { DeleteContactRequest } from "./DeleteContact/req";
import { DeleteContactResponse } from "./DeleteContact/res";
import { DescribeContactGroupsRequest } from "./DescribeContactGroups/req";
import { DescribeContactGroupsResponse } from "./DescribeContactGroups/res";
import { DescribeContactsRequest } from "./DescribeContacts/req";
import { DescribeContactsResponse } from "./DescribeContacts/res";
import { DeleteContactGroupRequest } from "./DeleteContactGroup/req";
import { DeleteContactGroupResponse } from "./DeleteContactGroup/res";
import { CreateOrUpdateContactGroupRequest } from "./CreateOrUpdateContactGroup/req";
import { CreateOrUpdateContactGroupResponse } from "./CreateOrUpdateContactGroup/res";
import { DeleteIMRobotRequest } from "./DeleteIMRobot/req";
import { DeleteIMRobotResponse } from "./DeleteIMRobot/res";
import { CreateOrUpdateIMRobotRequest } from "./CreateOrUpdateIMRobot/req";
import { CreateOrUpdateIMRobotResponse } from "./CreateOrUpdateIMRobot/res";
import { CreateOrUpdateContactRequest } from "./CreateOrUpdateContact/req";
import { CreateOrUpdateContactResponse } from "./CreateOrUpdateContact/res";
import { ListAlertsRequest } from "./ListAlerts/req";
import { ListAlertsResponse } from "./ListAlerts/res";
import { DeleteIntegrationRequest } from "./DeleteIntegration/req";
import { DeleteIntegrationResponse } from "./DeleteIntegration/res";
import { GetIntegrationStateRequest } from "./GetIntegrationState/req";
import { GetIntegrationStateResponse } from "./GetIntegrationState/res";
import { ListSilencePoliciesRequest } from "./ListSilencePolicies/req";
import { ListSilencePoliciesResponse } from "./ListSilencePolicies/res";
import { CreateOrUpdateNotificationPolicyRequest } from "./CreateOrUpdateNotificationPolicy/req";
import { CreateOrUpdateNotificationPolicyResponse } from "./CreateOrUpdateNotificationPolicy/res";
import { ListEscalationPoliciesRequest } from "./ListEscalationPolicies/req";
import { ListEscalationPoliciesResponse } from "./ListEscalationPolicies/res";
import { ListNotificationPoliciesRequest } from "./ListNotificationPolicies/req";
import { ListNotificationPoliciesResponse } from "./ListNotificationPolicies/res";
import { ListOnCallSchedulesRequest } from "./ListOnCallSchedules/req";
import { ListOnCallSchedulesResponse } from "./ListOnCallSchedules/res";
import { DeleteSilencePolicyRequest } from "./DeleteSilencePolicy/req";
import { DeleteSilencePolicyResponse } from "./DeleteSilencePolicy/res";
import { DeleteNotificationPolicyRequest } from "./DeleteNotificationPolicy/req";
import { DeleteNotificationPolicyResponse } from "./DeleteNotificationPolicy/res";
import { CreateOrUpdateSilencePolicyRequest } from "./CreateOrUpdateSilencePolicy/req";
import { CreateOrUpdateSilencePolicyResponse } from "./CreateOrUpdateSilencePolicy/res";
import { ManageRecordingRuleRequest } from "./ManageRecordingRule/req";
import { ManageRecordingRuleResponse } from "./ManageRecordingRule/res";
import { GetAuthTokenRequest } from "./GetAuthToken/req";
import { GetAuthTokenResponse } from "./GetAuthToken/res";
import { UploadRequest } from "./Upload/req";
import { UploadResponse } from "./Upload/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { CreateOrUpdateEventBridgeIntegrationRequest } from "./CreateOrUpdateEventBridgeIntegration/req";
import { CreateOrUpdateEventBridgeIntegrationResponse } from "./CreateOrUpdateEventBridgeIntegration/res";
import { DeleteEventBridgeIntegrationRequest } from "./DeleteEventBridgeIntegration/req";
import { DeleteEventBridgeIntegrationResponse } from "./DeleteEventBridgeIntegration/res";
import { ListEventBridgeIntegrationsRequest } from "./ListEventBridgeIntegrations/req";
import { ListEventBridgeIntegrationsResponse } from "./ListEventBridgeIntegrations/res";
import { AddAliClusterIdsToPrometheusGlobalViewRequest } from "./AddAliClusterIdsToPrometheusGlobalView/req";
import { AddAliClusterIdsToPrometheusGlobalViewResponse } from "./AddAliClusterIdsToPrometheusGlobalView/res";
import { AddPrometheusGlobalViewRequest } from "./AddPrometheusGlobalView/req";
import { AddPrometheusGlobalViewResponse } from "./AddPrometheusGlobalView/res";
import { AddPrometheusGlobalViewByAliClusterIdsRequest } from "./AddPrometheusGlobalViewByAliClusterIds/req";
import { AddPrometheusGlobalViewByAliClusterIdsResponse } from "./AddPrometheusGlobalViewByAliClusterIds/res";
import { AppendInstancesToPrometheusGlobalViewRequest } from "./AppendInstancesToPrometheusGlobalView/req";
import { AppendInstancesToPrometheusGlobalViewResponse } from "./AppendInstancesToPrometheusGlobalView/res";
import { DeletePrometheusGlobalViewRequest } from "./DeletePrometheusGlobalView/req";
import { DeletePrometheusGlobalViewResponse } from "./DeletePrometheusGlobalView/res";
import { GetPrometheusGlobalViewRequest } from "./GetPrometheusGlobalView/req";
import { GetPrometheusGlobalViewResponse } from "./GetPrometheusGlobalView/res";
import { ListPrometheusGlobalViewRequest } from "./ListPrometheusGlobalView/req";
import { ListPrometheusGlobalViewResponse } from "./ListPrometheusGlobalView/res";
import { RemoveAliClusterIdsFromPrometheusGlobalViewRequest } from "./RemoveAliClusterIdsFromPrometheusGlobalView/req";
import { RemoveAliClusterIdsFromPrometheusGlobalViewResponse } from "./RemoveAliClusterIdsFromPrometheusGlobalView/res";
import { RemoveSourcesFromPrometheusGlobalViewRequest } from "./RemoveSourcesFromPrometheusGlobalView/req";
import { RemoveSourcesFromPrometheusGlobalViewResponse } from "./RemoveSourcesFromPrometheusGlobalView/res";
import { ManageGetRecordingRuleRequest } from "./ManageGetRecordingRule/req";
import { ManageGetRecordingRuleResponse } from "./ManageGetRecordingRule/res";
import { InstallCmsExporterRequest } from "./InstallCmsExporter/req";
import { InstallCmsExporterResponse } from "./InstallCmsExporter/res";
import { ListCmsInstancesRequest } from "./ListCmsInstances/req";
import { ListCmsInstancesResponse } from "./ListCmsInstances/res";
import { DeleteCmsExporterRequest } from "./DeleteCmsExporter/req";
import { DeleteCmsExporterResponse } from "./DeleteCmsExporter/res";
import { ListDashboardsByNameRequest } from "./ListDashboardsByName/req";
import { ListDashboardsByNameResponse } from "./ListDashboardsByName/res";
import { DelAuthTokenRequest } from "./DelAuthToken/req";
import { DelAuthTokenResponse } from "./DelAuthToken/res";
import { DeleteIntegrationsRequest } from "./DeleteIntegrations/req";
import { DeleteIntegrationsResponse } from "./DeleteIntegrations/res";
import { UpdateIntegrationRequest } from "./UpdateIntegration/req";
import { UpdateIntegrationResponse } from "./UpdateIntegration/res";
import { ListIntegrationRequest } from "./ListIntegration/req";
import { ListIntegrationResponse } from "./ListIntegration/res";
import { CreateIntegrationRequest } from "./CreateIntegration/req";
import { CreateIntegrationResponse } from "./CreateIntegration/res";
import { GetClusterAllUrlRequest } from "./GetClusterAllUrl/req";
import { GetClusterAllUrlResponse } from "./GetClusterAllUrl/res";
import { GetCommercialStatusRequest } from "./GetCommercialStatus/req";
import { GetCommercialStatusResponse } from "./GetCommercialStatus/res";
import { ListPrometheusInstancesRequest } from "./ListPrometheusInstances/req";
import { ListPrometheusInstancesResponse } from "./ListPrometheusInstances/res";
import { ListInsightsEventsRequest } from "./ListInsightsEvents/req";
import { ListInsightsEventsResponse } from "./ListInsightsEvents/res";
import { CreateSyntheticTaskRequest } from "./CreateSyntheticTask/req";
import { CreateSyntheticTaskResponse } from "./CreateSyntheticTask/res";
import { GetOnCallSchedulesDetailRequest } from "./GetOnCallSchedulesDetail/req";
import { GetOnCallSchedulesDetailResponse } from "./GetOnCallSchedulesDetail/res";
import { GetSyntheticTaskMonitorsRequest } from "./GetSyntheticTaskMonitors/req";
import { GetSyntheticTaskMonitorsResponse } from "./GetSyntheticTaskMonitors/res";
import { DeleteSourceMapRequest } from "./DeleteSourceMap/req";
import { DeleteSourceMapResponse } from "./DeleteSourceMap/res";
import { GetSourceMapInfoRequest } from "./GetSourceMapInfo/req";
import { GetSourceMapInfoResponse } from "./GetSourceMapInfo/res";
import { AddPrometheusInstanceRequest } from "./AddPrometheusInstance/req";
import { AddPrometheusInstanceResponse } from "./AddPrometheusInstance/res";
import { SwitchSyntheticTaskStatusRequest } from "./SwitchSyntheticTaskStatus/req";
import { SwitchSyntheticTaskStatusResponse } from "./SwitchSyntheticTaskStatus/res";
import { GetSyntheticTaskListRequest } from "./GetSyntheticTaskList/req";
import { GetSyntheticTaskListResponse } from "./GetSyntheticTaskList/res";
import { DeleteSyntheticTaskRequest } from "./DeleteSyntheticTask/req";
import { DeleteSyntheticTaskResponse } from "./DeleteSyntheticTask/res";
import { GetSyntheticTaskDetailRequest } from "./GetSyntheticTaskDetail/req";
import { GetSyntheticTaskDetailResponse } from "./GetSyntheticTaskDetail/res";
import { ListAlertEventsRequest } from "./ListAlertEvents/req";
import { ListAlertEventsResponse } from "./ListAlertEvents/res";
import { GetManagedPrometheusStatusRequest } from "./GetManagedPrometheusStatus/req";
import { GetManagedPrometheusStatusResponse } from "./GetManagedPrometheusStatus/res";
import { SyncRecordingRulesRequest } from "./SyncRecordingRules/req";
import { SyncRecordingRulesResponse } from "./SyncRecordingRules/res";
import { GetRetcodeLogstoreRequest } from "./GetRetcodeLogstore/req";
import { GetRetcodeLogstoreResponse } from "./GetRetcodeLogstore/res";
import { GetRetcodeDataByQueryRequest } from "./GetRetcodeDataByQuery/req";
import { GetRetcodeDataByQueryResponse } from "./GetRetcodeDataByQuery/res";
import { AddPrometheusRemoteWriteRequest } from "./AddPrometheusRemoteWrite/req";
import { AddPrometheusRemoteWriteResponse } from "./AddPrometheusRemoteWrite/res";
import { ListPrometheusRemoteWritesRequest } from "./ListPrometheusRemoteWrites/req";
import { ListPrometheusRemoteWritesResponse } from "./ListPrometheusRemoteWrites/res";
import { GetPrometheusRemoteWriteRequest } from "./GetPrometheusRemoteWrite/req";
import { GetPrometheusRemoteWriteResponse } from "./GetPrometheusRemoteWrite/res";
import { DeletePrometheusRemoteWriteRequest } from "./DeletePrometheusRemoteWrite/req";
import { DeletePrometheusRemoteWriteResponse } from "./DeletePrometheusRemoteWrite/res";
import { QueryAppMetadataRequest } from "./QueryAppMetadata/req";
import { QueryAppMetadataResponse } from "./QueryAppMetadata/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { GetPrometheusInstanceRequest } from "./GetPrometheusInstance/req";
import { GetPrometheusInstanceResponse } from "./GetPrometheusInstance/res";
import { AddPrometheusIntegrationRequest } from "./AddPrometheusIntegration/req";
import { AddPrometheusIntegrationResponse } from "./AddPrometheusIntegration/res";
import { GetPrometheusIntegrationRequest } from "./GetPrometheusIntegration/req";
import { GetPrometheusIntegrationResponse } from "./GetPrometheusIntegration/res";
import { UpdatePrometheusIntegrationRequest } from "./UpdatePrometheusIntegration/req";
import { UpdatePrometheusIntegrationResponse } from "./UpdatePrometheusIntegration/res";
import { DeletePrometheusIntegrationRequest } from "./DeletePrometheusIntegration/req";
import { DeletePrometheusIntegrationResponse } from "./DeletePrometheusIntegration/res";
import { ListPrometheusIntegrationRequest } from "./ListPrometheusIntegration/req";
import { ListPrometheusIntegrationResponse } from "./ListPrometheusIntegration/res";
import { ListPrometheusInstanceByTagAndResourceGroupIdRequest } from "./ListPrometheusInstanceByTagAndResourceGroupId/req";
import { ListPrometheusInstanceByTagAndResourceGroupIdResponse } from "./ListPrometheusInstanceByTagAndResourceGroupId/res";
import { GetRetcodeAppByPidRequest } from "./GetRetcodeAppByPid/req";
import { GetRetcodeAppByPidResponse } from "./GetRetcodeAppByPid/res";
import { GetSyntheticMonitorsRequest } from "./GetSyntheticMonitors/req";
import { GetSyntheticMonitorsResponse } from "./GetSyntheticMonitors/res";
import { CreatePrometheusInstanceRequest } from "./CreatePrometheusInstance/req";
import { CreatePrometheusInstanceResponse } from "./CreatePrometheusInstance/res";
import { UpdatePrometheusRemoteWriteRequest } from "./UpdatePrometheusRemoteWrite/req";
import { UpdatePrometheusRemoteWriteResponse } from "./UpdatePrometheusRemoteWrite/res";
import { BindPrometheusGrafanaInstanceRequest } from "./BindPrometheusGrafanaInstance/req";
import { BindPrometheusGrafanaInstanceResponse } from "./BindPrometheusGrafanaInstance/res";
import { UpdatePrometheusGlobalViewRequest } from "./UpdatePrometheusGlobalView/req";
import { UpdatePrometheusGlobalViewResponse } from "./UpdatePrometheusGlobalView/res";
import { EnableMetricRequest } from "./EnableMetric/req";
import { EnableMetricResponse } from "./EnableMetric/res";
import { UpdateMetricDropRequest } from "./UpdateMetricDrop/req";
import { UpdateMetricDropResponse } from "./UpdateMetricDrop/res";
import { GetCloudClusterAllUrlRequest } from "./GetCloudClusterAllUrl/req";
import { GetCloudClusterAllUrlResponse } from "./GetCloudClusterAllUrl/res";
import { DeleteGrafanaWorkspaceRequest } from "./DeleteGrafanaWorkspace/req";
import { DeleteGrafanaWorkspaceResponse } from "./DeleteGrafanaWorkspace/res";
import { UpdateGrafanaWorkspaceVersionRequest } from "./UpdateGrafanaWorkspaceVersion/req";
import { UpdateGrafanaWorkspaceVersionResponse } from "./UpdateGrafanaWorkspaceVersion/res";
import { UpdateGrafanaWorkspaceRequest } from "./UpdateGrafanaWorkspace/req";
import { UpdateGrafanaWorkspaceResponse } from "./UpdateGrafanaWorkspace/res";
import { CreateGrafanaWorkspaceRequest } from "./CreateGrafanaWorkspace/req";
import { CreateGrafanaWorkspaceResponse } from "./CreateGrafanaWorkspace/res";
import { GetGrafanaWorkspaceRequest } from "./GetGrafanaWorkspace/req";
import { GetGrafanaWorkspaceResponse } from "./GetGrafanaWorkspace/res";
import { ListGrafanaWorkspaceRequest } from "./ListGrafanaWorkspace/req";
import { ListGrafanaWorkspaceResponse } from "./ListGrafanaWorkspace/res";
import { DeletePrometheusMonitoringRequest } from "./DeletePrometheusMonitoring/req";
import { DeletePrometheusMonitoringResponse } from "./DeletePrometheusMonitoring/res";
import { GetPrometheusMonitoringRequest } from "./GetPrometheusMonitoring/req";
import { GetPrometheusMonitoringResponse } from "./GetPrometheusMonitoring/res";
import { CreatePrometheusMonitoringRequest } from "./CreatePrometheusMonitoring/req";
import { CreatePrometheusMonitoringResponse } from "./CreatePrometheusMonitoring/res";
import { ListPrometheusMonitoringRequest } from "./ListPrometheusMonitoring/req";
import { ListPrometheusMonitoringResponse } from "./ListPrometheusMonitoring/res";
import { UpdatePrometheusMonitoringStatusRequest } from "./UpdatePrometheusMonitoringStatus/req";
import { UpdatePrometheusMonitoringStatusResponse } from "./UpdatePrometheusMonitoringStatus/res";
import { UpdatePrometheusMonitoringRequest } from "./UpdatePrometheusMonitoring/req";
import { UpdatePrometheusMonitoringResponse } from "./UpdatePrometheusMonitoring/res";
import { ListTimingSyntheticTasksRequest } from "./ListTimingSyntheticTasks/req";
import { ListTimingSyntheticTasksResponse } from "./ListTimingSyntheticTasks/res";
import { StopTimingSyntheticTaskRequest } from "./StopTimingSyntheticTask/req";
import { StopTimingSyntheticTaskResponse } from "./StopTimingSyntheticTask/res";
import { GetTimingSyntheticTaskRequest } from "./GetTimingSyntheticTask/req";
import { GetTimingSyntheticTaskResponse } from "./GetTimingSyntheticTask/res";
import { StartTimingSyntheticTaskRequest } from "./StartTimingSyntheticTask/req";
import { StartTimingSyntheticTaskResponse } from "./StartTimingSyntheticTask/res";
import { UpdateTimingSyntheticTaskRequest } from "./UpdateTimingSyntheticTask/req";
import { UpdateTimingSyntheticTaskResponse } from "./UpdateTimingSyntheticTask/res";
import { CreateTimingSyntheticTaskRequest } from "./CreateTimingSyntheticTask/req";
import { CreateTimingSyntheticTaskResponse } from "./CreateTimingSyntheticTask/res";
import { DeleteTimingSyntheticTaskRequest } from "./DeleteTimingSyntheticTask/req";
import { DeleteTimingSyntheticTaskResponse } from "./DeleteTimingSyntheticTask/res";
import { ListSyntheticDetailRequest } from "./ListSyntheticDetail/req";
import { ListSyntheticDetailResponse } from "./ListSyntheticDetail/res";
import { GetAppJVMConfigRequest } from "./GetAppJVMConfig/req";
import { GetAppJVMConfigResponse } from "./GetAppJVMConfig/res";
import { DeleteAppListRequest } from "./DeleteAppList/req";
import { DeleteAppListResponse } from "./DeleteAppList/res";
import { CloseAlarmRequest } from "./CloseAlarm/req";
import { CloseAlarmResponse } from "./CloseAlarm/res";
import { ClaimAlarmRequest } from "./ClaimAlarm/req";
import { ClaimAlarmResponse } from "./ClaimAlarm/res";
import { ChangeAlarmSeverityRequest } from "./ChangeAlarmSeverity/req";
import { ChangeAlarmSeverityResponse } from "./ChangeAlarmSeverity/res";
import { BlockAlarmNotificationRequest } from "./BlockAlarmNotification/req";
import { BlockAlarmNotificationResponse } from "./BlockAlarmNotification/res";
import { InitEnvironmentRequest } from "./InitEnvironment/req";
import { InitEnvironmentResponse } from "./InitEnvironment/res";
import { RestartEnvironmentFeatureRequest } from "./RestartEnvironmentFeature/req";
import { RestartEnvironmentFeatureResponse } from "./RestartEnvironmentFeature/res";
import { InstallEnvironmentFeatureRequest } from "./InstallEnvironmentFeature/req";
import { InstallEnvironmentFeatureResponse } from "./InstallEnvironmentFeature/res";
import { UpgradeAddonReleaseRequest } from "./UpgradeAddonRelease/req";
import { UpgradeAddonReleaseResponse } from "./UpgradeAddonRelease/res";
import { DescribeEnvironmentFeatureRequest } from "./DescribeEnvironmentFeature/req";
import { DescribeEnvironmentFeatureResponse } from "./DescribeEnvironmentFeature/res";
import { DescribeAddonReleaseRequest } from "./DescribeAddonRelease/req";
import { DescribeAddonReleaseResponse } from "./DescribeAddonRelease/res";
import { ListEnvironmentDashboardsRequest } from "./ListEnvironmentDashboards/req";
import { ListEnvironmentDashboardsResponse } from "./ListEnvironmentDashboards/res";
import { ListEnvironmentFeaturesRequest } from "./ListEnvironmentFeatures/req";
import { ListEnvironmentFeaturesResponse } from "./ListEnvironmentFeatures/res";
import { DeleteAddonReleaseRequest } from "./DeleteAddonRelease/req";
import { DeleteAddonReleaseResponse } from "./DeleteAddonRelease/res";
import { DeleteEnvironmentFeatureRequest } from "./DeleteEnvironmentFeature/req";
import { DeleteEnvironmentFeatureResponse } from "./DeleteEnvironmentFeature/res";
import { UpgradeEnvironmentFeatureRequest } from "./UpgradeEnvironmentFeature/req";
import { UpgradeEnvironmentFeatureResponse } from "./UpgradeEnvironmentFeature/res";
import { InstallAddonRequest } from "./InstallAddon/req";
import { InstallAddonResponse } from "./InstallAddon/res";
import { ListAddonsRequest } from "./ListAddons/req";
import { ListAddonsResponse } from "./ListAddons/res";
import { ListAddonReleasesRequest } from "./ListAddonReleases/req";
import { ListAddonReleasesResponse } from "./ListAddonReleases/res";
import { UpdateEnvironmentRequest } from "./UpdateEnvironment/req";
import { UpdateEnvironmentResponse } from "./UpdateEnvironment/res";
import { UpdateEnvPodMonitorRequest } from "./UpdateEnvPodMonitor/req";
import { UpdateEnvPodMonitorResponse } from "./UpdateEnvPodMonitor/res";
import { UpdateEnvServiceMonitorRequest } from "./UpdateEnvServiceMonitor/req";
import { UpdateEnvServiceMonitorResponse } from "./UpdateEnvServiceMonitor/res";
import { UpdateEnvCustomJobRequest } from "./UpdateEnvCustomJob/req";
import { UpdateEnvCustomJobResponse } from "./UpdateEnvCustomJob/res";
import { ListEnvironmentsRequest } from "./ListEnvironments/req";
import { ListEnvironmentsResponse } from "./ListEnvironments/res";
import { ListEnvServiceMonitorsRequest } from "./ListEnvServiceMonitors/req";
import { ListEnvServiceMonitorsResponse } from "./ListEnvServiceMonitors/res";
import { ListEnvPodMonitorsRequest } from "./ListEnvPodMonitors/req";
import { ListEnvPodMonitorsResponse } from "./ListEnvPodMonitors/res";
import { ListEnvCustomJobsRequest } from "./ListEnvCustomJobs/req";
import { ListEnvCustomJobsResponse } from "./ListEnvCustomJobs/res";
import { DescribeEnvServiceMonitorRequest } from "./DescribeEnvServiceMonitor/req";
import { DescribeEnvServiceMonitorResponse } from "./DescribeEnvServiceMonitor/res";
import { DescribeEnvCustomJobRequest } from "./DescribeEnvCustomJob/req";
import { DescribeEnvCustomJobResponse } from "./DescribeEnvCustomJob/res";
import { DescribeEnvironmentRequest } from "./DescribeEnvironment/req";
import { DescribeEnvironmentResponse } from "./DescribeEnvironment/res";
import { DeleteEnvPodMonitorRequest } from "./DeleteEnvPodMonitor/req";
import { DeleteEnvPodMonitorResponse } from "./DeleteEnvPodMonitor/res";
import { DescribeEnvPodMonitorRequest } from "./DescribeEnvPodMonitor/req";
import { DescribeEnvPodMonitorResponse } from "./DescribeEnvPodMonitor/res";
import { DeleteEnvServiceMonitorRequest } from "./DeleteEnvServiceMonitor/req";
import { DeleteEnvServiceMonitorResponse } from "./DeleteEnvServiceMonitor/res";
import { DeleteEnvironmentRequest } from "./DeleteEnvironment/req";
import { DeleteEnvironmentResponse } from "./DeleteEnvironment/res";
import { CreateEnvPodMonitorRequest } from "./CreateEnvPodMonitor/req";
import { CreateEnvPodMonitorResponse } from "./CreateEnvPodMonitor/res";
import { CreateEnvServiceMonitorRequest } from "./CreateEnvServiceMonitor/req";
import { CreateEnvServiceMonitorResponse } from "./CreateEnvServiceMonitor/res";
import { CreateEnvCustomJobRequest } from "./CreateEnvCustomJob/req";
import { CreateEnvCustomJobResponse } from "./CreateEnvCustomJob/res";
import { CreateEnvironmentRequest } from "./CreateEnvironment/req";
import { CreateEnvironmentResponse } from "./CreateEnvironment/res";
import { DeleteEnvCustomJobRequest } from "./DeleteEnvCustomJob/req";
import { DeleteEnvCustomJobResponse } from "./DeleteEnvCustomJob/res";
import { UpdateRumFileStatusRequest } from "./UpdateRumFileStatus/req";
import { UpdateRumFileStatusResponse } from "./UpdateRumFileStatus/res";
import { GetRumUploadFilesRequest } from "./GetRumUploadFiles/req";
import { GetRumUploadFilesResponse } from "./GetRumUploadFiles/res";
import { GetRumDataForPageRequest } from "./GetRumDataForPage/req";
import { GetRumDataForPageResponse } from "./GetRumDataForPage/res";
import { CreateRumUploadFileUrlRequest } from "./CreateRumUploadFileUrl/req";
import { CreateRumUploadFileUrlResponse } from "./CreateRumUploadFileUrl/res";
import { DeleteRumUploadFileRequest } from "./DeleteRumUploadFile/req";
import { DeleteRumUploadFileResponse } from "./DeleteRumUploadFile/res";
import { GetRumAppInfoRequest } from "./GetRumAppInfo/req";
import { GetRumAppInfoResponse } from "./GetRumAppInfo/res";
import { GetRumAppsRequest } from "./GetRumApps/req";
import { GetRumAppsResponse } from "./GetRumApps/res";
import { CreateRumAppRequest } from "./CreateRumApp/req";
import { CreateRumAppResponse } from "./CreateRumApp/res";
import { DeleteRumAppRequest } from "./DeleteRumApp/req";
import { DeleteRumAppResponse } from "./DeleteRumApp/res";
import { GetTraceAppConfigRequest } from "./GetTraceAppConfig/req";
import { GetTraceAppConfigResponse } from "./GetTraceAppConfig/res";
import { CheckCommercialStatusRequest } from "./CheckCommercialStatus/req";
import { CheckCommercialStatusResponse } from "./CheckCommercialStatus/res";
import { QueryCommercialUsageRequest } from "./QueryCommercialUsage/req";
import { QueryCommercialUsageResponse } from "./QueryCommercialUsage/res";
import { QueryAppTopologyRequest } from "./QueryAppTopology/req";
import { QueryAppTopologyResponse } from "./QueryAppTopology/res";
import { AddTagToFlinkClusterRequest } from "./AddTagToFlinkCluster/req";
import { AddTagToFlinkClusterResponse } from "./AddTagToFlinkCluster/res";
import { UpdateRumAppRequest } from "./UpdateRumApp/req";
import { UpdateRumAppResponse } from "./UpdateRumApp/res";
import { GetRumExceptionStackRequest } from "./GetRumExceptionStack/req";
import { GetRumExceptionStackResponse } from "./GetRumExceptionStack/res";
import { UpdatePrometheusInstanceRequest } from "./UpdatePrometheusInstance/req";
import { UpdatePrometheusInstanceResponse } from "./UpdatePrometheusInstance/res";
import { GetRumOcuStatisticDataRequest } from "./GetRumOcuStatisticData/req";
import { GetRumOcuStatisticDataResponse } from "./GetRumOcuStatisticData/res";

interface ARMS {
    /**
     * 集成ARMS Prometheus监控的大盘。
     */
    AddGrafana(query: AddGrafanaRequest): Promise<AddGrafanaResponse>;
    /**
     * 集成ARMS Prometheus监控的大盘以及采集规则。
     */
    AddIntegration(query: AddIntegrationRequest): Promise<AddIntegrationResponse>;
    /**
     * 创建或更新业务监控。
     */
    ApplyScenario(query: ApplyScenarioRequest): Promise<ApplyScenarioResponse>;
    /**
     * 打开或关闭应用监控的Agent总开关，或者查询Agent总开关的状态。
     */
    ConfigApp(query: ConfigAppRequest): Promise<ConfigAppResponse>;
    /**
     * 创建报警联系人。
     */
    CreateAlertContact(query: CreateAlertContactRequest): Promise<CreateAlertContactResponse>;
    /**
     * 调用CreateAlertContactGroup接口创建报警联系人分组。
     */
    CreateAlertContactGroup(query: CreateAlertContactGroupRequest): Promise<CreateAlertContactGroupResponse>;
    /**
     * 创建前端监控任务。
     */
    CreateRetcodeApp(query: CreateRetcodeAppRequest): Promise<CreateRetcodeAppResponse>;
    /**
     * 调用DeleteAlertContact接口删除报警联系人。
     */
    DeleteAlertContact(query: DeleteAlertContactRequest): Promise<DeleteAlertContactResponse>;
    /**
     * 调用DeleteAlertContactGroup接口删除报警联系人分组。
     */
    DeleteAlertContactGroup(query: DeleteAlertContactGroupRequest): Promise<DeleteAlertContactGroupResponse>;
    /**
     * 调用DeleteAlertRules接口删除报警规则。
     */
    DeleteAlertRules(query: DeleteAlertRulesRequest): Promise<DeleteAlertRulesResponse>;
    /**
     * 删除业务监控。
     */
    DeleteScenario(query: DeleteScenarioRequest): Promise<DeleteScenarioResponse>;
    /**
     * 删除前端监控任务。
     */
    DeleteRetcodeApp(query: DeleteRetcodeAppRequest): Promise<DeleteRetcodeAppResponse>;
    /**
     * 删除指定ID或类型的应用。
     */
    DeleteTraceApp(query: DeleteTraceAppRequest): Promise<DeleteTraceAppResponse>;
    /**
     * 调用DescribeDispatchRule接口查询分派策略信息。
     */
    DescribeDispatchRule(query: DescribeDispatchRuleRequest): Promise<DescribeDispatchRuleResponse>;
    /**
     * 列出LicenseKey。
     */
    DescribeTraceLicenseKey(query: DescribeTraceLicenseKeyRequest): Promise<DescribeTraceLicenseKeyResponse>;
    /**
     * 获取探针下载链接。
     */
    GetAgentDownloadUrl(query: GetAgentDownloadUrlRequest): Promise<GetAgentDownloadUrlResponse>;
    /**
     * 通过分页的形式查询应用下每个接口的请求量、错误数、平均响应时间三种性能数据。可通过返回信息中的Completed字段判断分页是否结束。如未结束，CurrentPage参数加一后继续发起查询即可。
     */
    GetAppApiByPage(query: GetAppApiByPageRequest): Promise<GetAppApiByPageResponse>;
    /**
     * 获取多个调用链的详情。
     */
    GetMultipleTrace(query: GetMultipleTraceRequest): Promise<GetMultipleTraceResponse>;
    /**
     * 获取集成ARMS Prometheus监控所需的Token。
     */
    GetPrometheusApiToken(query: GetPrometheusApiTokenRequest): Promise<GetPrometheusApiTokenResponse>;
    /**
     * 获取前端监控站点的分享地址。
     */
    GetRetcodeShareUrl(query: GetRetcodeShareUrlRequest): Promise<GetRetcodeShareUrlResponse>;
    /**
     * 获取调用链方法栈信息。
     */
    GetStack(query: GetStackRequest): Promise<GetStackResponse>;
    /**
     * 加快获取调用链详情。
     */
    GetTrace(query: GetTraceRequest): Promise<GetTraceResponse>;
    /**
     * 获取应用监控任务详情。
     */
    GetTraceApp(query: GetTraceAppRequest): Promise<GetTraceAppResponse>;
    /**
     * 调用ImportAppAlertRules接口创建应用报警规则。
     */
    ImportAppAlertRules(query: ImportAppAlertRulesRequest): Promise<ImportAppAlertRulesResponse>;
    /**
     * 列出指定地域下的所有Grafana大盘。
     */
    ListClusterFromGrafana(query: ListClusterFromGrafanaRequest): Promise<ListClusterFromGrafanaResponse>;
    /**
     * 获取集群的Grafana大盘的列表。
     */
    ListDashboards(query: ListDashboardsRequest): Promise<ListDashboardsResponse>;
    /**
     * 列出指定地域下所有前端监控任务。
     */
    ListRetcodeApps(query: ListRetcodeAppsRequest): Promise<ListRetcodeAppsResponse>;
    /**
     * 获取业务监控详细信息。
     */
    ListScenario(query: ListScenarioRequest): Promise<ListScenarioResponse>;
    /**
     * 获取指定地域下全部应用监控任务的列表。
     */
    ListTraceApps(query: ListTraceAppsRequest): Promise<ListTraceAppsResponse>;
    /**
     * 分页查询应用监控或前端监控的相关监控指标。
     */
    QueryMetricByPage(query: QueryMetricByPageRequest): Promise<QueryMetricByPageResponse>;
    /**
     * 进行应用监控的自定义设置（如调用链采样设置、Agent开关等）。
     */
    SaveTraceAppConfig(query: SaveTraceAppConfigRequest): Promise<SaveTraceAppConfigResponse>;
    /**
     * 调用SearchAlertContact接口查询报警联系人。
     */
    SearchAlertContact(query: SearchAlertContactRequest): Promise<SearchAlertContactResponse>;
    /**
     * 调用SearchAlertContactGroup接口查询报警联系人分组。
     */
    SearchAlertContactGroup(query: SearchAlertContactGroupRequest): Promise<SearchAlertContactGroupResponse>;
    /**
     * 调用SearchAlertHistories接口查询报警规则的报警发送记录。
     */
    SearchAlertHistories(query: SearchAlertHistoriesRequest): Promise<SearchAlertHistoriesResponse>;
    /**
     * 调用SearchAlertRules接口查询报警规则。
     */
    SearchAlertRules(query: SearchAlertRulesRequest): Promise<SearchAlertRulesResponse>;
    /**
     * 调用SearchEvents接口查询报警事件记录。
     */
    SearchEvents(query: SearchEventsRequest): Promise<SearchEventsResponse>;
    /**
     * 分页查询前端监控任务。
     */
    SearchRetcodeAppByPage(query: SearchRetcodeAppByPageRequest): Promise<SearchRetcodeAppByPageResponse>;
    /**
     * 按应用名称查询应用监控任务。
     */
    SearchTraceAppByName(query: SearchTraceAppByNameRequest): Promise<SearchTraceAppByNameResponse>;
    /**
     * 分页查询应用监控任务。
     */
    SearchTraceAppByPage(query: SearchTraceAppByPageRequest): Promise<SearchTraceAppByPageResponse>;
    /**
     * 查询调用链列表信息，可根据时间、应用名称、IP地址、Span名称和Tag等信息筛选调用链。
     */
    SearchTraces(query: SearchTracesRequest): Promise<SearchTracesResponse>;
    /**
     * 分页查询调用链列表信息，可根据时间、应用名称、IP地址、Span名称和Tag等信息筛选调用链。
     */
    SearchTracesByPage(query: SearchTracesByPageRequest): Promise<SearchTracesByPageResponse>;
    /**
     * 打开或关闭前端监控站点的免登录分享开关，打开该功能后即可通过调用GetRetcodeShareUrl接口获取的地址访问前端监控页面。
     */
    SetRetcodeShareStatus(query: SetRetcodeShareStatusRequest): Promise<SetRetcodeShareStatusResponse>;
    /**
     * 调用StartAlert接口启动报警规则。
     */
    StartAlert(query: StartAlertRequest): Promise<StartAlertResponse>;
    /**
     * 调用StartAlert接口停止报警规则。
     */
    StopAlert(query: StopAlertRequest): Promise<StopAlertResponse>;
    /**
     * 调用UpdateAlertContact接口更新报警联系人。
     */
    UpdateAlertContact(query: UpdateAlertContactRequest): Promise<UpdateAlertContactResponse>;
    /**
     * 调用UpdateAlertContactGroup接口更新报警联系人分组。
     */
    UpdateAlertContactGroup(query: UpdateAlertContactGroupRequest): Promise<UpdateAlertContactGroupResponse>;
    /**
     * 调用UpdateAlertRule接口更新报警规则。
     */
    UpdateAlertRule(query: UpdateAlertRuleRequest): Promise<UpdateAlertRuleResponse>;
    /**
     * 调用UpdateWebhook接口修改Webhook告警联系人信息。
     */
    UpdateWebhook(query: UpdateWebhookRequest): Promise<UpdateWebhookResponse>;
    /**
     * 创建分派策略。
     */
    CreateDispatchRule(query: CreateDispatchRuleRequest): Promise<CreateDispatchRuleResponse>;
    /**
     * 加快删除指定ID的告警通知策略。
     */
    DeleteDispatchRule(query: DeleteDispatchRuleRequest): Promise<DeleteDispatchRuleResponse>;
    /**
     * 调用UpdateDispatchRule接口修改分派策略。
     */
    UpdateDispatchRule(query: UpdateDispatchRuleRequest): Promise<UpdateDispatchRuleResponse>;
    /**
     * 调用ListDispatchRule接口查询通知策略列表。
     */
    ListDispatchRule(query: ListDispatchRuleRequest): Promise<ListDispatchRuleResponse>;
    /**
     * 检查集群当前的服务状态，例如是否开通服务，是否欠费等。
     */
    CheckServiceStatus(query: CheckServiceStatusRequest): Promise<CheckServiceStatusResponse>;
    /**
     * 开通虚拟集群。
     */
    OpenVCluster(query: OpenVClusterRequest): Promise<OpenVClusterResponse>;
    /**
     * 开通ARMS服务关联角色AliyunServiceRoleForARMS。
     */
    OpenArmsDefaultSLR(query: OpenArmsDefaultSLRRequest): Promise<OpenArmsDefaultSLRResponse>;
    /**
     * 开通可观测链路 OpenTelemetry 版服务关联角色AliyunServiceRoleForXtrace。
     */
    OpenXtraceDefaultSLR(query: OpenXtraceDefaultSLRRequest): Promise<OpenXtraceDefaultSLRResponse>;
    /**
     * 创建告警规则。
     */
    CreatePrometheusAlertRule(query: CreatePrometheusAlertRuleRequest): Promise<CreatePrometheusAlertRuleResponse>;
    /**
     * 删除Prometheus告警规则。
     */
    DeletePrometheusAlertRule(query: DeletePrometheusAlertRuleRequest): Promise<DeletePrometheusAlertRuleResponse>;
    /**
     * 查看Prometheus告警规则。
     */
    DescribePrometheusAlertRule(query: DescribePrometheusAlertRuleRequest): Promise<DescribePrometheusAlertRuleResponse>;
    /**
     * 调用ListActivatedAlerts接口查询已经触发的告警列表。
     */
    ListActivatedAlerts(query: ListActivatedAlertsRequest): Promise<ListActivatedAlertsResponse>;
    /**
     * 查看Prometheus告警规则列表。
     */
    ListPrometheusAlertRules(query: ListPrometheusAlertRulesRequest): Promise<ListPrometheusAlertRulesResponse>;
    /**
     * 调用ListPrometheusAlertTemplates接口查看Prometheus告警模板列表。
     */
    ListPrometheusAlertTemplates(query: ListPrometheusAlertTemplatesRequest): Promise<ListPrometheusAlertTemplatesResponse>;
    /**
     * 调用UpdatePrometheusAlertRule接口更新Prometheus报警规则。
     */
    UpdatePrometheusAlertRule(query: UpdatePrometheusAlertRuleRequest): Promise<UpdatePrometheusAlertRuleResponse>;
    /**
     * 删除ARMS Prometheus监控集群中的Grafana大盘资源。
     */
    DeleteGrafanaResource(query: DeleteGrafanaResourceRequest): Promise<DeleteGrafanaResourceResponse>;
    /**
     * 调用CreateWebhook接口创建Webhook告警联系人。
     */
    CreateWebhook(query: CreateWebhookRequest): Promise<CreateWebhookResponse>;
    /**
     * 开通ARMS下指定子产品的后付费功能。
     */
    OpenArmsServiceSecondVersion(query: OpenArmsServiceSecondVersionRequest): Promise<OpenArmsServiceSecondVersionResponse>;
    /**
     * 获取使用Grafana的Explore功能。
     */
    GetExploreUrl(query: GetExploreUrlRequest): Promise<GetExploreUrlResponse>;
    /**
     * 来查询ARMS Prometheus集群的安装状态。
     */
    QueryPromInstallStatus(query: QueryPromInstallStatusRequest): Promise<QueryPromInstallStatusResponse>;
    /**
     * 来卸载ARMS Prometheus集群实例。
     */
    UninstallPromCluster(query: UninstallPromClusterRequest): Promise<UninstallPromClusterResponse>;
    /**
     * 查询EDAS和K8s应用发布过程中不同版本的指标。
     */
    QueryReleaseMetric(query: QueryReleaseMetricRequest): Promise<QueryReleaseMetricResponse>;
    /**
     * 获取集群的RecordingRule聚合规则。
     */
    GetRecordingRule(query: GetRecordingRuleRequest): Promise<GetRecordingRuleResponse>;
    /**
     * 创建或者更新Prometheus监控的RecordingRule规则。
     */
    AddRecordingRule(query: AddRecordingRuleRequest): Promise<AddRecordingRuleResponse>;
    /**
     * 查询已经创建的告警规则。
     */
    GetAlertRules(query: GetAlertRulesRequest): Promise<GetAlertRulesResponse>;
    /**
     * 创建或修改告警规则。
     */
    CreateOrUpdateAlertRule(query: CreateOrUpdateAlertRuleRequest): Promise<CreateOrUpdateAlertRuleResponse>;
    /**
     * 用于删除ARMS资源实例标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 创建托管（ASK/ECS）Prometheus。
     */
    InstallManagedPrometheus(query: InstallManagedPrometheusRequest): Promise<InstallManagedPrometheusResponse>;
    /**
     * 卸载托管（ASK/ECS/ACKoNE）Prometheus。
     */
    UninstallManagedPrometheus(query: UninstallManagedPrometheusRequest): Promise<UninstallManagedPrometheusResponse>;
    /**
     * 删除告警规则。
     */
    DeleteAlertRule(query: DeleteAlertRuleRequest): Promise<DeleteAlertRuleResponse>;
    /**
     * 为告警联系人发送手机号码验证短信。
     */
    SendTTSVerifyLink(query: SendTTSVerifyLinkRequest): Promise<SendTTSVerifyLinkResponse>;
    /**
     * 创建或修改Webhook告警联系人。
     */
    CreateOrUpdateWebhookContact(query: CreateOrUpdateWebhookContactRequest): Promise<CreateOrUpdateWebhookContactResponse>;
    /**
     * 查询Webhook告警联系人列表。
     */
    DescribeWebhookContacts(query: DescribeWebhookContactsRequest): Promise<DescribeWebhookContactsResponse>;
    /**
     * 删除Webhook告警联系人。
     */
    DeleteWebhookContact(query: DeleteWebhookContactRequest): Promise<DeleteWebhookContactResponse>;
    /**
     * 查询IM机器人列表。
     */
    DescribeIMRobots(query: DescribeIMRobotsRequest): Promise<DescribeIMRobotsResponse>;
    /**
     * 删除告警联系人。
     */
    DeleteContact(query: DeleteContactRequest): Promise<DeleteContactResponse>;
    /**
     * 查询告警联系人分组信息。
     */
    DescribeContactGroups(query: DescribeContactGroupsRequest): Promise<DescribeContactGroupsResponse>;
    /**
     * 查询告警联系人列表。
     */
    DescribeContacts(query: DescribeContactsRequest): Promise<DescribeContactsResponse>;
    /**
     * 删除告警联系人组。
     */
    DeleteContactGroup(query: DeleteContactGroupRequest): Promise<DeleteContactGroupResponse>;
    /**
     * 创建或修改告警联系人组。
     */
    CreateOrUpdateContactGroup(query: CreateOrUpdateContactGroupRequest): Promise<CreateOrUpdateContactGroupResponse>;
    /**
     * 删除IM机器人。
     */
    DeleteIMRobot(query: DeleteIMRobotRequest): Promise<DeleteIMRobotResponse>;
    /**
     * 创建或更新IM机器人。
     */
    CreateOrUpdateIMRobot(query: CreateOrUpdateIMRobotRequest): Promise<CreateOrUpdateIMRobotResponse>;
    /**
     * 创建或者修改告警联系人。
     */
    CreateOrUpdateContact(query: CreateOrUpdateContactRequest): Promise<CreateOrUpdateContactResponse>;
    /**
     * 调用ListAlerts接口查询告警发送历史。
     */
    ListAlerts(query: ListAlertsRequest): Promise<ListAlertsResponse>;
    /**
     * 删除Integration接入的采集规则。
     */
    DeleteIntegration(query: DeleteIntegrationRequest): Promise<DeleteIntegrationResponse>;
    /**
     * 来获取Integration的接入状态。
     */
    GetIntegrationState(query: GetIntegrationStateRequest): Promise<GetIntegrationStateResponse>;
    /**
     * 调用ListSilencePolicies接口查询静默策略列表信息。
     */
    ListSilencePolicies(query: ListSilencePoliciesRequest): Promise<ListSilencePoliciesResponse>;
    /**
     * 创建或更新通知策略。
     */
    CreateOrUpdateNotificationPolicy(query: CreateOrUpdateNotificationPolicyRequest): Promise<CreateOrUpdateNotificationPolicyResponse>;
    /**
     * 调用ListEscalationPolicies接口查询升级策略信息。
     */
    ListEscalationPolicies(query: ListEscalationPoliciesRequest): Promise<ListEscalationPoliciesResponse>;
    /**
     * 通过指定条件查询通知策略信息。
     */
    ListNotificationPolicies(query: ListNotificationPoliciesRequest): Promise<ListNotificationPoliciesResponse>;
    /**
     * 调用ListOnCallSchedules接口查询排班策略信息。
     */
    ListOnCallSchedules(query: ListOnCallSchedulesRequest): Promise<ListOnCallSchedulesResponse>;
    /**
     * 调用DeleteSilencePolicy接口根据静默策略ID删除静默策略。
     */
    DeleteSilencePolicy(query: DeleteSilencePolicyRequest): Promise<DeleteSilencePolicyResponse>;
    /**
     * 根据通知策略ID删除通知策略。
     */
    DeleteNotificationPolicy(query: DeleteNotificationPolicyRequest): Promise<DeleteNotificationPolicyResponse>;
    /**
     * 创建或修改静默策略。
     */
    CreateOrUpdateSilencePolicy(query: CreateOrUpdateSilencePolicyRequest): Promise<CreateOrUpdateSilencePolicyResponse>;
    /**
     * 编辑ARMS Prometheus的RecordingRule聚合规则。
     */
    ManageRecordingRule(query: ManageRecordingRuleRequest): Promise<ManageRecordingRuleResponse>;
    /**
     * 获取公网读写鉴权Token。
     */
    GetAuthToken(query: GetAuthTokenRequest): Promise<GetAuthTokenResponse>;
    /**
     * 上传SourceMap到ARMS前端监控。
     */
    Upload(query: UploadRequest): Promise<UploadResponse>;
    /**
     * 用于给ARMS资源实例打标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 创建或修改EventBridge通知集成。
     */
    CreateOrUpdateEventBridgeIntegration(query: CreateOrUpdateEventBridgeIntegrationRequest): Promise<CreateOrUpdateEventBridgeIntegrationResponse>;
    /**
     * 删除EventBridge通知集成。
     */
    DeleteEventBridgeIntegration(query: DeleteEventBridgeIntegrationRequest): Promise<DeleteEventBridgeIntegrationResponse>;
    /**
     * 查询EventBridge通知集成信息。
     */
    ListEventBridgeIntegrations(query: ListEventBridgeIntegrationsRequest): Promise<ListEventBridgeIntegrationsResponse>;
    /**
     * 增加ARMS Prometheus监控聚合实例的数据源。
     */
    AddAliClusterIdsToPrometheusGlobalView(query: AddAliClusterIdsToPrometheusGlobalViewRequest): Promise<AddAliClusterIdsToPrometheusGlobalViewResponse>;
    /**
     * 增加ARMS Prometheus监控的聚合实例。
     */
    AddPrometheusGlobalView(query: AddPrometheusGlobalViewRequest): Promise<AddPrometheusGlobalViewResponse>;
    /**
     * 增加ARMS Prometheus监控的聚合实例。
     */
    AddPrometheusGlobalViewByAliClusterIds(query: AddPrometheusGlobalViewByAliClusterIdsRequest): Promise<AddPrometheusGlobalViewByAliClusterIdsResponse>;
    /**
     * 增加ARMS Prometheus监控聚合实例中的数据源，将数据源添加到Prometheus聚合实例。
     */
    AppendInstancesToPrometheusGlobalView(query: AppendInstancesToPrometheusGlobalViewRequest): Promise<AppendInstancesToPrometheusGlobalViewResponse>;
    /**
     * 删除Prometheus聚合实例。
     */
    DeletePrometheusGlobalView(query: DeletePrometheusGlobalViewRequest): Promise<DeletePrometheusGlobalViewResponse>;
    /**
     * 增加ARMS Prometheus监控的聚合实例，获取指定聚合实例的详细数据源情况。
     */
    GetPrometheusGlobalView(query: GetPrometheusGlobalViewRequest): Promise<GetPrometheusGlobalViewResponse>;
    /**
     * 增加ARMS Prometheus监控的聚合实例，获取聚合实例列表。
     */
    ListPrometheusGlobalView(query: ListPrometheusGlobalViewRequest): Promise<ListPrometheusGlobalViewResponse>;
    /**
     * 移除ARMS Prometheus监控聚合实例的某些数据源。
     */
    RemoveAliClusterIdsFromPrometheusGlobalView(query: RemoveAliClusterIdsFromPrometheusGlobalViewRequest): Promise<RemoveAliClusterIdsFromPrometheusGlobalViewResponse>;
    /**
     * 移除ARMS Prometheus监控聚合实例中的数据源，仅支持删除非阿里数据源。
     */
    RemoveSourcesFromPrometheusGlobalView(query: RemoveSourcesFromPrometheusGlobalViewRequest): Promise<RemoveSourcesFromPrometheusGlobalViewResponse>;
    /**
     * 获取ARMS Prometheus的RecordingRule聚合规则。
     */
    ManageGetRecordingRule(query: ManageGetRecordingRuleRequest): Promise<ManageGetRecordingRuleResponse>;
    /**
     * 安装云服务采集器。
     */
    InstallCmsExporter(query: InstallCmsExporterRequest): Promise<InstallCmsExporterResponse>;
    /**
     * 查询云服务采集状态。
     */
    ListCmsInstances(query: ListCmsInstancesRequest): Promise<ListCmsInstancesResponse>;
    /**
     * 来卸载Prometheus for 云服务实例。
     */
    DeleteCmsExporter(query: DeleteCmsExporterRequest): Promise<DeleteCmsExporterResponse>;
    /**
     * 来创建与Prometheus关联的Loki数据源和相关的多数据源大盘。
     */
    ListDashboardsByName(query: ListDashboardsByNameRequest): Promise<ListDashboardsByNameResponse>;
    /**
     * 关闭鉴权token。
     */
    DelAuthToken(query: DelAuthTokenRequest): Promise<DelAuthTokenResponse>;
    /**
     * 删除指定告警集成。
     */
    DeleteIntegrations(query: DeleteIntegrationsRequest): Promise<DeleteIntegrationsResponse>;
    /**
     * 修改集成相关信息。
     */
    UpdateIntegration(query: UpdateIntegrationRequest): Promise<UpdateIntegrationResponse>;
    /**
     * 查看集成列表详情。
     */
    ListIntegration(query: ListIntegrationRequest): Promise<ListIntegrationResponse>;
    /**
     * 创建告警集成。
     */
    CreateIntegration(query: CreateIntegrationRequest): Promise<CreateIntegrationResponse>;
    /**
     * 获取集群所有地址。包括远程读写地址、 Push Gateway地址、 Grafana地址。
     */
    GetClusterAllUrl(query: GetClusterAllUrlRequest): Promise<GetClusterAllUrlResponse>;
    /**
     * 查看当前账号是否开通对应产品的商业化版本。
     */
    GetCommercialStatus(query: GetCommercialStatusRequest): Promise<GetCommercialStatusResponse>;
    /**
     * 获取Prometheus的所有正常实例。
     */
    ListPrometheusInstances(query: ListPrometheusInstancesRequest): Promise<ListPrometheusInstancesResponse>;
    /**
     * 查询指定时间段内Insights的异常事件列表。
     */
    ListInsightsEvents(query: ListInsightsEventsRequest): Promise<ListInsightsEventsResponse>;
    /**
     * 创建或更新云拨测定时任务。
     */
    CreateSyntheticTask(query: CreateSyntheticTaskRequest): Promise<CreateSyntheticTaskResponse>;
    /**
     * 调用GetOnCallSchedulesDetail接口查询排班策略信息。
     */
    GetOnCallSchedulesDetail(query: GetOnCallSchedulesDetailRequest): Promise<GetOnCallSchedulesDetailResponse>;
    /**
     * 获取拨测点信息。
     */
    GetSyntheticTaskMonitors(query: GetSyntheticTaskMonitorsRequest): Promise<GetSyntheticTaskMonitorsResponse>;
    /**
     * 删除前端监控中上传的SourceMap文件。
     */
    DeleteSourceMap(query: DeleteSourceMapRequest): Promise<DeleteSourceMapResponse>;
    /**
     * 获取前端监控中上传的SourceMap文件详细信息。
     */
    GetSourceMapInfo(query: GetSourceMapInfoRequest): Promise<GetSourceMapInfoResponse>;
    /**
     * 创建RemoteWrite类型Prometheus实例。
     */
    AddPrometheusInstance(query: AddPrometheusInstanceRequest): Promise<AddPrometheusInstanceResponse>;
    /**
     * 启动或者停止定时拨测任务。
     */
    SwitchSyntheticTaskStatus(query: SwitchSyntheticTaskStatusRequest): Promise<SwitchSyntheticTaskStatusResponse>;
    /**
     * 获取云拨测定时任务列表。
     */
    GetSyntheticTaskList(query: GetSyntheticTaskListRequest): Promise<GetSyntheticTaskListResponse>;
    /**
     * 删除云拨测定时任务。
     */
    DeleteSyntheticTask(query: DeleteSyntheticTaskRequest): Promise<DeleteSyntheticTaskResponse>;
    /**
     * 根据任务ID获取定时拨测任务的详情。
     */
    GetSyntheticTaskDetail(query: GetSyntheticTaskDetailRequest): Promise<GetSyntheticTaskDetailResponse>;
    /**
     * 查询告警事件历史。
     */
    ListAlertEvents(query: ListAlertEventsRequest): Promise<ListAlertEventsResponse>;
    /**
     * 获取托管版（ask、ecs和one）Prometheus实例的安装状态。
     */
    GetManagedPrometheusStatus(query: GetManagedPrometheusStatusRequest): Promise<GetManagedPrometheusStatusResponse>;
    /**
     * 将某个集群的聚合规则批量同步到全Region的其他目标集群。
     */
    SyncRecordingRules(query: SyncRecordingRulesRequest): Promise<SyncRecordingRulesResponse>;
    /**
     * 获取指定账号下前端监控应用对应SLS存储的Project和Logstore。
     */
    GetRetcodeLogstore(query: GetRetcodeLogstoreRequest): Promise<GetRetcodeLogstoreResponse>;
    /**
     * 根据SLS的查询语句查询前端监控的数据。
     */
    GetRetcodeDataByQuery(query: GetRetcodeDataByQueryRequest): Promise<GetRetcodeDataByQueryResponse>;
    /**
     * 增加Prometheus实例（仅支持aliyun-cs、ecs两种类型的实例）Remote Write配置。
     */
    AddPrometheusRemoteWrite(query: AddPrometheusRemoteWriteRequest): Promise<AddPrometheusRemoteWriteResponse>;
    /**
     * 查询Prometheus实例（仅支持aliyun-cs、ecs两种类型的实例）Remote Write配置列表。
     */
    ListPrometheusRemoteWrites(query: ListPrometheusRemoteWritesRequest): Promise<ListPrometheusRemoteWritesResponse>;
    /**
     * 查询Prometheus实例（仅支持aliyun-cs、ecs两种类型的实例）的指定Remote Write配置项。
     */
    GetPrometheusRemoteWrite(query: GetPrometheusRemoteWriteRequest): Promise<GetPrometheusRemoteWriteResponse>;
    /**
     * 删除Prometheus实例Remote Write配置项（仅支持aliyun-cs、ecs两种类型的实例）。
     */
    DeletePrometheusRemoteWrite(query: DeletePrometheusRemoteWriteRequest): Promise<DeletePrometheusRemoteWriteResponse>;
    /**
     * 根据ID和类型查询编码映射内容。
     */
    QueryAppMetadata(query: QueryAppMetadataRequest): Promise<QueryAppMetadataResponse>;
    /**
     * 修改资源所属资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 获取指定Prometheus实例信息。
     */
    GetPrometheusInstance(query: GetPrometheusInstanceRequest): Promise<GetPrometheusInstanceResponse>;
    /**
     * 增加Prometheus实例的集成中心Exporter实例（仅支持aliyun-cs、ecs两种类型的实例）。
     */
    AddPrometheusIntegration(query: AddPrometheusIntegrationRequest): Promise<AddPrometheusIntegrationResponse>;
    /**
     * 获取Prometheus实例（仅支持aliyun-cs、ecs两种类型的实例）指定集成中心Exporter实例。
     */
    GetPrometheusIntegration(query: GetPrometheusIntegrationRequest): Promise<GetPrometheusIntegrationResponse>;
    /**
     * 更改Prometheus实例（仅支持aliyun-cs、ecs两种类型的实例）集成中心Exporter配置。
     */
    UpdatePrometheusIntegration(query: UpdatePrometheusIntegrationRequest): Promise<UpdatePrometheusIntegrationResponse>;
    /**
     * 删除Prometheus实例集成中心Exporter实例（仅支持aliyun-cs、ecs两种类型的实例）。
     */
    DeletePrometheusIntegration(query: DeletePrometheusIntegrationRequest): Promise<DeletePrometheusIntegrationResponse>;
    /**
     * 查询Prometheus实例（仅支持aliyun-cs、ecs两种类型的实例）集成中心Exporter实例列表。
     */
    ListPrometheusIntegration(query: ListPrometheusIntegrationRequest): Promise<ListPrometheusIntegrationResponse>;
    /**
     * 根据标签和资源组查询Prometheus实例。
     */
    ListPrometheusInstanceByTagAndResourceGroupId(query: ListPrometheusInstanceByTagAndResourceGroupIdRequest): Promise<ListPrometheusInstanceByTagAndResourceGroupIdResponse>;
    /**
     * 根据前端监控应用Pid返回前端监控应用对象。
     */
    GetRetcodeAppByPid(query: GetRetcodeAppByPidRequest): Promise<GetRetcodeAppByPidResponse>;
    /**
     * 获取拨测点。
     */
    GetSyntheticMonitors(query: GetSyntheticMonitorsRequest): Promise<GetSyntheticMonitorsResponse>;
    /**
     * 新建Prometheus实例。
     */
    CreatePrometheusInstance(query: CreatePrometheusInstanceRequest): Promise<CreatePrometheusInstanceResponse>;
    /**
     * 编辑Prometheus实例（仅支持aliyun-cs、ecs两种类型的实例）指定RemoteWrite配置。
     */
    UpdatePrometheusRemoteWrite(query: UpdatePrometheusRemoteWriteRequest): Promise<UpdatePrometheusRemoteWriteResponse>;
    /**
     * 绑定Prometheus实例使用的Grafana工作区ID。
     */
    BindPrometheusGrafanaInstance(query: BindPrometheusGrafanaInstanceRequest): Promise<BindPrometheusGrafanaInstanceResponse>;
    /**
     * 更新Prometheus for GlobalView聚合数据源。
     */
    UpdatePrometheusGlobalView(query: UpdatePrometheusGlobalViewRequest): Promise<UpdatePrometheusGlobalViewResponse>;
    /**
     * 启用废弃指标。
     */
    EnableMetric(query: EnableMetricRequest): Promise<EnableMetricResponse>;
    /**
     * 更新废弃指标列表。
     */
    UpdateMetricDrop(query: UpdateMetricDropRequest): Promise<UpdateMetricDropResponse>;
    /**
     * 获取云监控云产品读写地址，pushgateway，grafana 地址。
     */
    GetCloudClusterAllUrl(query: GetCloudClusterAllUrlRequest): Promise<GetCloudClusterAllUrlResponse>;
    /**
     * 删除可观测可视化 Grafana 版工作区实例。
     */
    DeleteGrafanaWorkspace(query: DeleteGrafanaWorkspaceRequest): Promise<DeleteGrafanaWorkspaceResponse>;
    /**
     * 更新Grafana工作区版本。
     */
    UpdateGrafanaWorkspaceVersion(query: UpdateGrafanaWorkspaceVersionRequest): Promise<UpdateGrafanaWorkspaceVersionResponse>;
    /**
     * 更新指定Grafana工作区信息。
     */
    UpdateGrafanaWorkspace(query: UpdateGrafanaWorkspaceRequest): Promise<UpdateGrafanaWorkspaceResponse>;
    /**
     * 创建可观测可视化 Grafana 版工作区实例。
     */
    CreateGrafanaWorkspace(query: CreateGrafanaWorkspaceRequest): Promise<CreateGrafanaWorkspaceResponse>;
    /**
     * 查询指定Grafana工作区信息。
     */
    GetGrafanaWorkspace(query: GetGrafanaWorkspaceRequest): Promise<GetGrafanaWorkspaceResponse>;
    /**
     * 获取地域内Grafana工作区列表。
     */
    ListGrafanaWorkspace(query: ListGrafanaWorkspaceRequest): Promise<ListGrafanaWorkspaceResponse>;
    /**
     * 删除Prometheus实例监控配置。
     */
    DeletePrometheusMonitoring(query: DeletePrometheusMonitoringRequest): Promise<DeletePrometheusMonitoringResponse>;
    /**
     * 查询Prometheus实例指定监控配置。
     */
    GetPrometheusMonitoring(query: GetPrometheusMonitoringRequest): Promise<GetPrometheusMonitoringResponse>;
    /**
     * 创建Prometheus实例的监控配置。
     */
    CreatePrometheusMonitoring(query: CreatePrometheusMonitoringRequest): Promise<CreatePrometheusMonitoringResponse>;
    /**
     * 查询Prometheus实例监控配置。
     */
    ListPrometheusMonitoring(query: ListPrometheusMonitoringRequest): Promise<ListPrometheusMonitoringResponse>;
    /**
     * 更新Prometheus实例监控配置状态。
     */
    UpdatePrometheusMonitoringStatus(query: UpdatePrometheusMonitoringStatusRequest): Promise<UpdatePrometheusMonitoringStatusResponse>;
    /**
     * 更新Prometheus实例监控配置。
     */
    UpdatePrometheusMonitoring(query: UpdatePrometheusMonitoringRequest): Promise<UpdatePrometheusMonitoringResponse>;
    /**
     * 获取定时拨测任务列表。
     */
    ListTimingSyntheticTasks(query: ListTimingSyntheticTasksRequest): Promise<ListTimingSyntheticTasksResponse>;
    /**
     * 停止定时拨测任务。
     */
    StopTimingSyntheticTask(query: StopTimingSyntheticTaskRequest): Promise<StopTimingSyntheticTaskResponse>;
    /**
     * 获取任务详情。
     */
    GetTimingSyntheticTask(query: GetTimingSyntheticTaskRequest): Promise<GetTimingSyntheticTaskResponse>;
    /**
     * 启动定时拨测任务。
     */
    StartTimingSyntheticTask(query: StartTimingSyntheticTaskRequest): Promise<StartTimingSyntheticTaskResponse>;
    /**
     * 更新定时拨测任务。
     */
    UpdateTimingSyntheticTask(query: UpdateTimingSyntheticTaskRequest): Promise<UpdateTimingSyntheticTaskResponse>;
    /**
     * 创建定时拨测任务（新版）。
     */
    CreateTimingSyntheticTask(query: CreateTimingSyntheticTaskRequest): Promise<CreateTimingSyntheticTaskResponse>;
    /**
     * 删除定时拨测任务。
     */
    DeleteTimingSyntheticTask(query: DeleteTimingSyntheticTaskRequest): Promise<DeleteTimingSyntheticTaskResponse>;
    /**
     * 获取拨测结果。
     */
    ListSyntheticDetail(query: ListSyntheticDetailRequest): Promise<ListSyntheticDetailResponse>;
    /**
     * 获取应用各个实例的JVM配置信息。
     */
    GetAppJVMConfig(query: GetAppJVMConfigRequest): Promise<GetAppJVMConfigResponse>;
    /**
     * 根据应用监控PID列表，批量删除应用。
     */
    DeleteAppList(query: DeleteAppListRequest): Promise<DeleteAppListResponse>;
    /**
     * 关闭告警，请确保告警恢复后再关闭告警。如果告警一直处于触发状态，关闭告警后又会产生新的告警。
     */
    CloseAlarm(query: CloseAlarmRequest): Promise<CloseAlarmResponse>;
    /**
     * 认领告警，配合升级策略使用。 在告警协同处理时可以，认领后表示该告警正在处理中。
     */
    ClaimAlarm(query: ClaimAlarmRequest): Promise<ClaimAlarmResponse>;
    /**
     * 修改告警等级。
     */
    ChangeAlarmSeverity(query: ChangeAlarmSeverityRequest): Promise<ChangeAlarmSeverityResponse>;
    /**
     * 屏蔽告警通知，屏蔽后告警在指定的时间范围内不再发生通知。
     */
    BlockAlarmNotification(query: BlockAlarmNotificationRequest): Promise<BlockAlarmNotificationResponse>;
    /**
     * 初始化环境实例。
     */
    InitEnvironment(query: InitEnvironmentRequest): Promise<InitEnvironmentResponse>;
    /**
     * 重启feature。
     */
    RestartEnvironmentFeature(query: RestartEnvironmentFeatureRequest): Promise<RestartEnvironmentFeatureResponse>;
    /**
     * 安装Feature。
     */
    InstallEnvironmentFeature(query: InstallEnvironmentFeatureRequest): Promise<InstallEnvironmentFeatureResponse>;
    /**
     * 更新AddonRelease信息。
     */
    UpgradeAddonRelease(query: UpgradeAddonReleaseRequest): Promise<UpgradeAddonReleaseResponse>;
    /**
     * 查询Feature详情。
     */
    DescribeEnvironmentFeature(query: DescribeEnvironmentFeatureRequest): Promise<DescribeEnvironmentFeatureResponse>;
    /**
     * 通过名称查询AddonRelease详情。
     */
    DescribeAddonRelease(query: DescribeAddonReleaseRequest): Promise<DescribeAddonReleaseResponse>;
    /**
     * 查询环境中的大盘信息。
     */
    ListEnvironmentDashboards(query: ListEnvironmentDashboardsRequest): Promise<ListEnvironmentDashboardsResponse>;
    /**
     * 查询环境中的Feature。
     */
    ListEnvironmentFeatures(query: ListEnvironmentFeaturesRequest): Promise<ListEnvironmentFeaturesResponse>;
    /**
     * 通过AddonRelease名称删除AddonRelease数据。
     */
    DeleteAddonRelease(query: DeleteAddonReleaseRequest): Promise<DeleteAddonReleaseResponse>;
    /**
     * 删除feature。
     */
    DeleteEnvironmentFeature(query: DeleteEnvironmentFeatureRequest): Promise<DeleteEnvironmentFeatureResponse>;
    /**
     * 更新Feature信息。
     */
    UpgradeEnvironmentFeature(query: UpgradeEnvironmentFeatureRequest): Promise<UpgradeEnvironmentFeatureResponse>;
    /**
     * 安装Addon信息。
     */
    InstallAddon(query: InstallAddonRequest): Promise<InstallAddonResponse>;
    /**
     * 新版接入中心产品列表。
     */
    ListAddons(query: ListAddonsRequest): Promise<ListAddonsResponse>;
    /**
     * 查询环境中安装的Addon。
     */
    ListAddonReleases(query: ListAddonReleasesRequest): Promise<ListAddonReleasesResponse>;
    /**
     * 更新环境信息。
     */
    UpdateEnvironment(query: UpdateEnvironmentRequest): Promise<UpdateEnvironmentResponse>;
    /**
     * 更新环境的PodMonitor。
     */
    UpdateEnvPodMonitor(query: UpdateEnvPodMonitorRequest): Promise<UpdateEnvPodMonitorResponse>;
    /**
     * 更新环境的ServiceMonitor。
     */
    UpdateEnvServiceMonitor(query: UpdateEnvServiceMonitorRequest): Promise<UpdateEnvServiceMonitorResponse>;
    /**
     * 更新环境的自定义Job。
     */
    UpdateEnvCustomJob(query: UpdateEnvCustomJobRequest): Promise<UpdateEnvCustomJobResponse>;
    /**
     * 查询环境列表。
     */
    ListEnvironments(query: ListEnvironmentsRequest): Promise<ListEnvironmentsResponse>;
    /**
     * 查询环境的ServiceMonitor列表。
     */
    ListEnvServiceMonitors(query: ListEnvServiceMonitorsRequest): Promise<ListEnvServiceMonitorsResponse>;
    /**
     * 查询环境的PodMonitor列表。
     */
    ListEnvPodMonitors(query: ListEnvPodMonitorsRequest): Promise<ListEnvPodMonitorsResponse>;
    /**
     * 查询环境的自定义Job列表。
     */
    ListEnvCustomJobs(query: ListEnvCustomJobsRequest): Promise<ListEnvCustomJobsResponse>;
    /**
     * 查询环境的ServiceMonitor详情。
     */
    DescribeEnvServiceMonitor(query: DescribeEnvServiceMonitorRequest): Promise<DescribeEnvServiceMonitorResponse>;
    /**
     * 查询环境CustomJob详情。
     */
    DescribeEnvCustomJob(query: DescribeEnvCustomJobRequest): Promise<DescribeEnvCustomJobResponse>;
    /**
     * 查询环境详情。
     */
    DescribeEnvironment(query: DescribeEnvironmentRequest): Promise<DescribeEnvironmentResponse>;
    /**
     * 删除环境PodMonitor。
     */
    DeleteEnvPodMonitor(query: DeleteEnvPodMonitorRequest): Promise<DeleteEnvPodMonitorResponse>;
    /**
     * 查询环境的PodMonitor详情。
     */
    DescribeEnvPodMonitor(query: DescribeEnvPodMonitorRequest): Promise<DescribeEnvPodMonitorResponse>;
    /**
     * 删除环境ServiceMonitor。
     */
    DeleteEnvServiceMonitor(query: DeleteEnvServiceMonitorRequest): Promise<DeleteEnvServiceMonitorResponse>;
    /**
     * 删除环境实例。
     */
    DeleteEnvironment(query: DeleteEnvironmentRequest): Promise<DeleteEnvironmentResponse>;
    /**
     * 创建环境的PodMonitor。
     */
    CreateEnvPodMonitor(query: CreateEnvPodMonitorRequest): Promise<CreateEnvPodMonitorResponse>;
    /**
     * 创建环境的ServiceMonitor。
     */
    CreateEnvServiceMonitor(query: CreateEnvServiceMonitorRequest): Promise<CreateEnvServiceMonitorResponse>;
    /**
     * 创建环境的自定义Job。
     */
    CreateEnvCustomJob(query: CreateEnvCustomJobRequest): Promise<CreateEnvCustomJobResponse>;
    /**
     * 创建环境实例。
     */
    CreateEnvironment(query: CreateEnvironmentRequest): Promise<CreateEnvironmentResponse>;
    /**
     * 删除环境的自定义job。
     */
    DeleteEnvCustomJob(query: DeleteEnvCustomJobRequest): Promise<DeleteEnvCustomJobResponse>;
    /**
     * 更新RUM文件状态，上传RUM文件成功后，调用此接口。
     */
    UpdateRumFileStatus(query: UpdateRumFileStatusRequest): Promise<UpdateRumFileStatusResponse>;
    /**
     * 获取RUM相关文件，包括符号表、SourceMap等。
     */
    GetRumUploadFiles(query: GetRumUploadFilesRequest): Promise<GetRumUploadFilesResponse>;
    /**
     * 分页获取RUM数据。
     */
    GetRumDataForPage(query: GetRumDataForPageRequest): Promise<GetRumDataForPageResponse>;
    /**
     * 用于上传SourceMap文件、符号表文件等。
     */
    CreateRumUploadFileUrl(query: CreateRumUploadFileUrlRequest): Promise<CreateRumUploadFileUrlResponse>;
    /**
     * 用于删除符号表、SourceMap等文件。
     */
    DeleteRumUploadFile(query: DeleteRumUploadFileRequest): Promise<DeleteRumUploadFileResponse>;
    /**
     * 获取RUM应用信息。
     */
    GetRumAppInfo(query: GetRumAppInfoRequest): Promise<GetRumAppInfoResponse>;
    /**
     * 获取RUM应用列表。
     */
    GetRumApps(query: GetRumAppsRequest): Promise<GetRumAppsResponse>;
    /**
     * 创建RUM应用。
     */
    CreateRumApp(query: CreateRumAppRequest): Promise<CreateRumAppResponse>;
    /**
     * 删除RUM应用。
     */
    DeleteRumApp(query: DeleteRumAppRequest): Promise<DeleteRumAppResponse>;
    /**
     * 查询应用监控中，某个应用的全部自定义设置（如调用链采样设置、Agent开关等）。
     */
    GetTraceAppConfig(query: GetTraceAppConfigRequest): Promise<GetTraceAppConfigResponse>;
    /**
     * 检查产品的商业化开通状态。
     */
    CheckCommercialStatus(query: CheckCommercialStatusRequest): Promise<CheckCommercialStatusResponse>;
    /**
     * 查询写入量数据，支持应用监控、可观测链路OpenTelemetry版、Prometheus、用户体验监控四大产品用量数据。
     */
    QueryCommercialUsage(query: QueryCommercialUsageRequest): Promise<QueryCommercialUsageResponse>;
    /**
     * 查询应用拓扑
     */
    QueryAppTopology(query: QueryAppTopologyRequest): Promise<QueryAppTopologyResponse>;
    /**
     * 主要将用户Flink工作空间对应的Prometheus实例打上工作空间ID、工作空间名称这两个Tag。
     */
    AddTagToFlinkCluster(query: AddTagToFlinkClusterRequest): Promise<AddTagToFlinkClusterResponse>;
    /**
     * 更新RUM应用。
     */
    UpdateRumApp(query: UpdateRumAppRequest): Promise<UpdateRumAppResponse>;
    /**
     * 获取RUM异常堆栈信息。
     */
    GetRumExceptionStack(query: GetRumExceptionStackRequest): Promise<GetRumExceptionStackResponse>;
    /**
     * 更新Prometheus实例信息。
     */
    UpdatePrometheusInstance(query: UpdatePrometheusInstanceRequest): Promise<UpdatePrometheusInstanceResponse>;
    /**
     * 获取RUM的OCU用量数据。
     */
    GetRumOcuStatisticData(query: GetRumOcuStatisticDataRequest): Promise<GetRumOcuStatisticDataResponse>;
}
export default ARMS;
