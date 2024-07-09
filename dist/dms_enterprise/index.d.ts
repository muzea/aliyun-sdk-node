import { ApproveOrderRequest } from "./ApproveOrder/req";
import { ApproveOrderResponse } from "./ApproveOrder/res";
import { CloseOrderRequest } from "./CloseOrder/req";
import { CloseOrderResponse } from "./CloseOrder/res";
import { CreateOrderRequest } from "./CreateOrder/req";
import { CreateOrderResponse } from "./CreateOrder/res";
import { CreatePublishGroupTaskRequest } from "./CreatePublishGroupTask/req";
import { CreatePublishGroupTaskResponse } from "./CreatePublishGroupTask/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DeleteUserRequest } from "./DeleteUser/req";
import { DeleteUserResponse } from "./DeleteUser/res";
import { DisableUserRequest } from "./DisableUser/req";
import { DisableUserResponse } from "./DisableUser/res";
import { EnableUserRequest } from "./EnableUser/req";
import { EnableUserResponse } from "./EnableUser/res";
import { ExecuteDataCorrectRequest } from "./ExecuteDataCorrect/req";
import { ExecuteDataCorrectResponse } from "./ExecuteDataCorrect/res";
import { ExecuteDataExportRequest } from "./ExecuteDataExport/req";
import { ExecuteDataExportResponse } from "./ExecuteDataExport/res";
import { ExecuteScriptRequest } from "./ExecuteScript/req";
import { ExecuteScriptResponse } from "./ExecuteScript/res";
import { GetApprovalDetailRequest } from "./GetApprovalDetail/req";
import { GetApprovalDetailResponse } from "./GetApprovalDetail/res";
import { GetDataCorrectBackupFilesRequest } from "./GetDataCorrectBackupFiles/req";
import { GetDataCorrectBackupFilesResponse } from "./GetDataCorrectBackupFiles/res";
import { GetDataCorrectOrderDetailRequest } from "./GetDataCorrectOrderDetail/req";
import { GetDataCorrectOrderDetailResponse } from "./GetDataCorrectOrderDetail/res";
import { GetDataExportDownloadURLRequest } from "./GetDataExportDownloadURL/req";
import { GetDataExportDownloadURLResponse } from "./GetDataExportDownloadURL/res";
import { GetDataExportOrderDetailRequest } from "./GetDataExportOrderDetail/req";
import { GetDataExportOrderDetailResponse } from "./GetDataExportOrderDetail/res";
import { GetDatabaseRequest } from "./GetDatabase/req";
import { GetDatabaseResponse } from "./GetDatabase/res";
import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { GetLogicDatabaseRequest } from "./GetLogicDatabase/req";
import { GetLogicDatabaseResponse } from "./GetLogicDatabase/res";
import { GetMetaTableColumnRequest } from "./GetMetaTableColumn/req";
import { GetMetaTableColumnResponse } from "./GetMetaTableColumn/res";
import { GetMetaTableDetailInfoRequest } from "./GetMetaTableDetailInfo/req";
import { GetMetaTableDetailInfoResponse } from "./GetMetaTableDetailInfo/res";
import { GetOpLogRequest } from "./GetOpLog/req";
import { GetOpLogResponse } from "./GetOpLog/res";
import { GetOrderBaseInfoRequest } from "./GetOrderBaseInfo/req";
import { GetOrderBaseInfoResponse } from "./GetOrderBaseInfo/res";
import { GetTableDBTopologyRequest } from "./GetTableDBTopology/req";
import { GetTableDBTopologyResponse } from "./GetTableDBTopology/res";
import { GetUserRequest } from "./GetUser/req";
import { GetUserResponse } from "./GetUser/res";
import { GetUserActiveTenantRequest } from "./GetUserActiveTenant/req";
import { GetUserActiveTenantResponse } from "./GetUserActiveTenant/res";
import { GrantUserPermissionRequest } from "./GrantUserPermission/req";
import { GrantUserPermissionResponse } from "./GrantUserPermission/res";
import { ListColumnsRequest } from "./ListColumns/req";
import { ListColumnsResponse } from "./ListColumns/res";
import { ListDatabaseUserPermssionsRequest } from "./ListDatabaseUserPermssions/req";
import { ListDatabaseUserPermssionsResponse } from "./ListDatabaseUserPermssions/res";
import { ListDatabasesRequest } from "./ListDatabases/req";
import { ListDatabasesResponse } from "./ListDatabases/res";
import { ListIndexesRequest } from "./ListIndexes/req";
import { ListIndexesResponse } from "./ListIndexes/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ListLogicDatabasesRequest } from "./ListLogicDatabases/req";
import { ListLogicDatabasesResponse } from "./ListLogicDatabases/res";
import { ListLogicTablesRequest } from "./ListLogicTables/req";
import { ListLogicTablesResponse } from "./ListLogicTables/res";
import { ListOrdersRequest } from "./ListOrders/req";
import { ListOrdersResponse } from "./ListOrders/res";
import { ListSensitiveColumnsRequest } from "./ListSensitiveColumns/req";
import { ListSensitiveColumnsResponse } from "./ListSensitiveColumns/res";
import { ListSensitiveColumnsDetailRequest } from "./ListSensitiveColumnsDetail/req";
import { ListSensitiveColumnsDetailResponse } from "./ListSensitiveColumnsDetail/res";
import { ListTablesRequest } from "./ListTables/req";
import { ListTablesResponse } from "./ListTables/res";
import { ListUserPermissionsRequest } from "./ListUserPermissions/req";
import { ListUserPermissionsResponse } from "./ListUserPermissions/res";
import { ListUserTenantsRequest } from "./ListUserTenants/req";
import { ListUserTenantsResponse } from "./ListUserTenants/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { ListWorkFlowNodesRequest } from "./ListWorkFlowNodes/req";
import { ListWorkFlowNodesResponse } from "./ListWorkFlowNodes/res";
import { ListWorkFlowTemplatesRequest } from "./ListWorkFlowTemplates/req";
import { ListWorkFlowTemplatesResponse } from "./ListWorkFlowTemplates/res";
import { RegisterInstanceRequest } from "./RegisterInstance/req";
import { RegisterInstanceResponse } from "./RegisterInstance/res";
import { RegisterUserRequest } from "./RegisterUser/req";
import { RegisterUserResponse } from "./RegisterUser/res";
import { RevokeUserPermissionRequest } from "./RevokeUserPermission/req";
import { RevokeUserPermissionResponse } from "./RevokeUserPermission/res";
import { SearchDatabaseRequest } from "./SearchDatabase/req";
import { SearchDatabaseResponse } from "./SearchDatabase/res";
import { SearchTableRequest } from "./SearchTable/req";
import { SearchTableResponse } from "./SearchTable/res";
import { SetOwnersRequest } from "./SetOwners/req";
import { SetOwnersResponse } from "./SetOwners/res";
import { SubmitOrderApprovalRequest } from "./SubmitOrderApproval/req";
import { SubmitOrderApprovalResponse } from "./SubmitOrderApproval/res";
import { SyncDatabaseMetaRequest } from "./SyncDatabaseMeta/req";
import { SyncDatabaseMetaResponse } from "./SyncDatabaseMeta/res";
import { SyncInstanceMetaRequest } from "./SyncInstanceMeta/req";
import { SyncInstanceMetaResponse } from "./SyncInstanceMeta/res";
import { UpdateInstanceRequest } from "./UpdateInstance/req";
import { UpdateInstanceResponse } from "./UpdateInstance/res";
import { UpdateUserRequest } from "./UpdateUser/req";
import { UpdateUserResponse } from "./UpdateUser/res";
import { CreateUploadOSSFileJobRequest } from "./CreateUploadOSSFileJob/req";
import { CreateUploadOSSFileJobResponse } from "./CreateUploadOSSFileJob/res";
import { GetUserUploadFileJobRequest } from "./GetUserUploadFileJob/req";
import { GetUserUploadFileJobResponse } from "./GetUserUploadFileJob/res";
import { CreateUploadFileJobRequest } from "./CreateUploadFileJob/req";
import { CreateUploadFileJobResponse } from "./CreateUploadFileJob/res";
import { SubmitStructSyncOrderApprovalRequest } from "./SubmitStructSyncOrderApproval/req";
import { SubmitStructSyncOrderApprovalResponse } from "./SubmitStructSyncOrderApproval/res";
import { GetStructSyncExecSqlDetailRequest } from "./GetStructSyncExecSqlDetail/req";
import { GetStructSyncExecSqlDetailResponse } from "./GetStructSyncExecSqlDetail/res";
import { GetStructSyncJobAnalyzeResultRequest } from "./GetStructSyncJobAnalyzeResult/req";
import { GetStructSyncJobAnalyzeResultResponse } from "./GetStructSyncJobAnalyzeResult/res";
import { GetStructSyncOrderDetailRequest } from "./GetStructSyncOrderDetail/req";
import { GetStructSyncOrderDetailResponse } from "./GetStructSyncOrderDetail/res";
import { GetOwnerApplyOrderDetailRequest } from "./GetOwnerApplyOrderDetail/req";
import { GetOwnerApplyOrderDetailResponse } from "./GetOwnerApplyOrderDetail/res";
import { ExecuteStructSyncRequest } from "./ExecuteStructSync/req";
import { ExecuteStructSyncResponse } from "./ExecuteStructSync/res";
import { GetPermApplyOrderDetailRequest } from "./GetPermApplyOrderDetail/req";
import { GetPermApplyOrderDetailResponse } from "./GetPermApplyOrderDetail/res";
import { ListDBTaskSQLJobDetailRequest } from "./ListDBTaskSQLJobDetail/req";
import { ListDBTaskSQLJobDetailResponse } from "./ListDBTaskSQLJobDetail/res";
import { GetDataCorrectSQLFileRequest } from "./GetDataCorrectSQLFile/req";
import { GetDataCorrectSQLFileResponse } from "./GetDataCorrectSQLFile/res";
import { GetStructSyncJobDetailRequest } from "./GetStructSyncJobDetail/req";
import { GetStructSyncJobDetailResponse } from "./GetStructSyncJobDetail/res";
import { ListDBTaskSQLJobRequest } from "./ListDBTaskSQLJob/req";
import { ListDBTaskSQLJobResponse } from "./ListDBTaskSQLJob/res";
import { CreateStructSyncOrderRequest } from "./CreateStructSyncOrder/req";
import { CreateStructSyncOrderResponse } from "./CreateStructSyncOrder/res";
import { GetTableTopologyRequest } from "./GetTableTopology/req";
import { GetTableTopologyResponse } from "./GetTableTopology/res";
import { GetDataCorrectTaskDetailRequest } from "./GetDataCorrectTaskDetail/req";
import { GetDataCorrectTaskDetailResponse } from "./GetDataCorrectTaskDetail/res";
import { CreateDataCorrectOrderRequest } from "./CreateDataCorrectOrder/req";
import { CreateDataCorrectOrderResponse } from "./CreateDataCorrectOrder/res";
import { CreateDataImportOrderRequest } from "./CreateDataImportOrder/req";
import { CreateDataImportOrderResponse } from "./CreateDataImportOrder/res";
import { CreateFreeLockCorrectOrderRequest } from "./CreateFreeLockCorrectOrder/req";
import { CreateFreeLockCorrectOrderResponse } from "./CreateFreeLockCorrectOrder/res";
import { GetDataCronClearTaskDetailListRequest } from "./GetDataCronClearTaskDetailList/req";
import { GetDataCronClearTaskDetailListResponse } from "./GetDataCronClearTaskDetailList/res";
import { CreateDataCronClearOrderRequest } from "./CreateDataCronClearOrder/req";
import { CreateDataCronClearOrderResponse } from "./CreateDataCronClearOrder/res";
import { ListDDLPublishRecordsRequest } from "./ListDDLPublishRecords/req";
import { ListDDLPublishRecordsResponse } from "./ListDDLPublishRecords/res";
import { GetDBTopologyRequest } from "./GetDBTopology/req";
import { GetDBTopologyResponse } from "./GetDBTopology/res";
import { GetPhysicalDatabaseRequest } from "./GetPhysicalDatabase/req";
import { GetPhysicalDatabaseResponse } from "./GetPhysicalDatabase/res";
import { CreateSQLReviewOrderRequest } from "./CreateSQLReviewOrder/req";
import { CreateSQLReviewOrderResponse } from "./CreateSQLReviewOrder/res";
import { ListSQLReviewOriginSQLRequest } from "./ListSQLReviewOriginSQL/req";
import { ListSQLReviewOriginSQLResponse } from "./ListSQLReviewOriginSQL/res";
import { GetSQLReviewCheckResultStatusRequest } from "./GetSQLReviewCheckResultStatus/req";
import { GetSQLReviewCheckResultStatusResponse } from "./GetSQLReviewCheckResultStatus/res";
import { GetSQLReviewOptimizeDetailRequest } from "./GetSQLReviewOptimizeDetail/req";
import { GetSQLReviewOptimizeDetailResponse } from "./GetSQLReviewOptimizeDetail/res";
import { ListDataCorrectPreCheckSQLRequest } from "./ListDataCorrectPreCheckSQL/req";
import { ListDataCorrectPreCheckSQLResponse } from "./ListDataCorrectPreCheckSQL/res";
import { ListDataCorrectPreCheckDBRequest } from "./ListDataCorrectPreCheckDB/req";
import { ListDataCorrectPreCheckDBResponse } from "./ListDataCorrectPreCheckDB/res";
import { CreateProxyRequest } from "./CreateProxy/req";
import { CreateProxyResponse } from "./CreateProxy/res";
import { CreateProxyAccessRequest } from "./CreateProxyAccess/req";
import { CreateProxyAccessResponse } from "./CreateProxyAccess/res";
import { DeleteProxyRequest } from "./DeleteProxy/req";
import { DeleteProxyResponse } from "./DeleteProxy/res";
import { DeleteProxyAccessRequest } from "./DeleteProxyAccess/req";
import { DeleteProxyAccessResponse } from "./DeleteProxyAccess/res";
import { GetProxyRequest } from "./GetProxy/req";
import { GetProxyResponse } from "./GetProxy/res";
import { InspectProxyAccessSecretRequest } from "./InspectProxyAccessSecret/req";
import { InspectProxyAccessSecretResponse } from "./InspectProxyAccessSecret/res";
import { ListProxiesRequest } from "./ListProxies/req";
import { ListProxiesResponse } from "./ListProxies/res";
import { ListProxyAccessesRequest } from "./ListProxyAccesses/req";
import { ListProxyAccessesResponse } from "./ListProxyAccesses/res";
import { ChangeColumnSecLevelRequest } from "./ChangeColumnSecLevel/req";
import { ChangeColumnSecLevelResponse } from "./ChangeColumnSecLevel/res";
import { CreateLogicDatabaseRequest } from "./CreateLogicDatabase/req";
import { CreateLogicDatabaseResponse } from "./CreateLogicDatabase/res";
import { DeleteLogicDatabaseRequest } from "./DeleteLogicDatabase/req";
import { DeleteLogicDatabaseResponse } from "./DeleteLogicDatabase/res";
import { EditLogicDatabaseRequest } from "./EditLogicDatabase/req";
import { EditLogicDatabaseResponse } from "./EditLogicDatabase/res";
import { ListInstanceUserPermissionsRequest } from "./ListInstanceUserPermissions/req";
import { ListInstanceUserPermissionsResponse } from "./ListInstanceUserPermissions/res";
import { ListSQLExecAuditLogRequest } from "./ListSQLExecAuditLog/req";
import { ListSQLExecAuditLogResponse } from "./ListSQLExecAuditLog/res";
import { ListProxySQLExecAuditLogRequest } from "./ListProxySQLExecAuditLog/req";
import { ListProxySQLExecAuditLogResponse } from "./ListProxySQLExecAuditLog/res";
import { ListInstanceLoginAuditLogRequest } from "./ListInstanceLoginAuditLog/req";
import { ListInstanceLoginAuditLogResponse } from "./ListInstanceLoginAuditLog/res";
import { ModifyDataCorrectExecSQLRequest } from "./ModifyDataCorrectExecSQL/req";
import { ModifyDataCorrectExecSQLResponse } from "./ModifyDataCorrectExecSQL/res";
import { GetDBTaskSQLJobLogRequest } from "./GetDBTaskSQLJobLog/req";
import { GetDBTaskSQLJobLogResponse } from "./GetDBTaskSQLJobLog/res";
import { DeleteLogicTableRouteConfigRequest } from "./DeleteLogicTableRouteConfig/req";
import { DeleteLogicTableRouteConfigResponse } from "./DeleteLogicTableRouteConfig/res";
import { AddLogicTableRouteConfigRequest } from "./AddLogicTableRouteConfig/req";
import { AddLogicTableRouteConfigResponse } from "./AddLogicTableRouteConfig/res";
import { ListLogicTableRouteConfigRequest } from "./ListLogicTableRouteConfig/req";
import { ListLogicTableRouteConfigResponse } from "./ListLogicTableRouteConfig/res";
import { RetryDataCorrectPreCheckRequest } from "./RetryDataCorrectPreCheck/req";
import { RetryDataCorrectPreCheckResponse } from "./RetryDataCorrectPreCheck/res";
import { PauseDataCorrectSQLJobRequest } from "./PauseDataCorrectSQLJob/req";
import { PauseDataCorrectSQLJobResponse } from "./PauseDataCorrectSQLJob/res";
import { RestartDataCorrectSQLJobRequest } from "./RestartDataCorrectSQLJob/req";
import { RestartDataCorrectSQLJobResponse } from "./RestartDataCorrectSQLJob/res";
import { ListStandardGroupsRequest } from "./ListStandardGroups/req";
import { ListStandardGroupsResponse } from "./ListStandardGroups/res";
import { CreateStandardGroupRequest } from "./CreateStandardGroup/req";
import { CreateStandardGroupResponse } from "./CreateStandardGroup/res";
import { ChangeLhDagOwnerRequest } from "./ChangeLhDagOwner/req";
import { ChangeLhDagOwnerResponse } from "./ChangeLhDagOwner/res";
import { DeleteLhMembersRequest } from "./DeleteLhMembers/req";
import { DeleteLhMembersResponse } from "./DeleteLhMembers/res";
import { ReDeployLhDagVersionRequest } from "./ReDeployLhDagVersion/req";
import { ReDeployLhDagVersionResponse } from "./ReDeployLhDagVersion/res";
import { ListLhTaskFlowAndScenarioRequest } from "./ListLhTaskFlowAndScenario/req";
import { ListLhTaskFlowAndScenarioResponse } from "./ListLhTaskFlowAndScenario/res";
import { CreateLakeHouseSpaceRequest } from "./CreateLakeHouseSpace/req";
import { CreateLakeHouseSpaceResponse } from "./CreateLakeHouseSpace/res";
import { AddLhMembersRequest } from "./AddLhMembers/req";
import { AddLhMembersResponse } from "./AddLhMembers/res";
import { DeleteLakeHouseSpaceRequest } from "./DeleteLakeHouseSpace/req";
import { DeleteLakeHouseSpaceResponse } from "./DeleteLakeHouseSpace/res";
import { DeleteTaskFlowRequest } from "./DeleteTaskFlow/req";
import { DeleteTaskFlowResponse } from "./DeleteTaskFlow/res";
import { GetLhSpaceByNameRequest } from "./GetLhSpaceByName/req";
import { GetLhSpaceByNameResponse } from "./GetLhSpaceByName/res";
import { GetTaskInstanceRelationRequest } from "./GetTaskInstanceRelation/req";
import { GetTaskInstanceRelationResponse } from "./GetTaskInstanceRelation/res";
import { ListTaskFlowRequest } from "./ListTaskFlow/req";
import { ListTaskFlowResponse } from "./ListTaskFlow/res";
import { ListTaskFlowInstanceRequest } from "./ListTaskFlowInstance/req";
import { ListTaskFlowInstanceResponse } from "./ListTaskFlowInstance/res";
import { ListDAGVersionsRequest } from "./ListDAGVersions/req";
import { ListDAGVersionsResponse } from "./ListDAGVersions/res";
import { OfflineTaskFlowRequest } from "./OfflineTaskFlow/req";
import { OfflineTaskFlowResponse } from "./OfflineTaskFlow/res";
import { ListDesensitizationRuleRequest } from "./ListDesensitizationRule/req";
import { ListDesensitizationRuleResponse } from "./ListDesensitizationRule/res";
import { ModifyDesensitizationStrategyRequest } from "./ModifyDesensitizationStrategy/req";
import { ModifyDesensitizationStrategyResponse } from "./ModifyDesensitizationStrategy/res";
import { AddDesensitizationRuleRequest } from "./AddDesensitizationRule/req";
import { AddDesensitizationRuleResponse } from "./AddDesensitizationRule/res";
import { ListSensitiveDataAuditLogRequest } from "./ListSensitiveDataAuditLog/req";
import { ListSensitiveDataAuditLogResponse } from "./ListSensitiveDataAuditLog/res";
import { UpdateTaskFlowConstantsRequest } from "./UpdateTaskFlowConstants/req";
import { UpdateTaskFlowConstantsResponse } from "./UpdateTaskFlowConstants/res";
import { UpdateScenarioRequest } from "./UpdateScenario/req";
import { UpdateScenarioResponse } from "./UpdateScenario/res";
import { ResumeTaskFlowInstanceRequest } from "./ResumeTaskFlowInstance/req";
import { ResumeTaskFlowInstanceResponse } from "./ResumeTaskFlowInstance/res";
import { UpdateTaskContentRequest } from "./UpdateTaskContent/req";
import { UpdateTaskContentResponse } from "./UpdateTaskContent/res";
import { ListTaskFlowsByPageRequest } from "./ListTaskFlowsByPage/req";
import { ListTaskFlowsByPageResponse } from "./ListTaskFlowsByPage/res";
import { ListScenariosRequest } from "./ListScenarios/req";
import { ListScenariosResponse } from "./ListScenarios/res";
import { UpdateTaskConfigRequest } from "./UpdateTaskConfig/req";
import { UpdateTaskConfigResponse } from "./UpdateTaskConfig/res";
import { ListTaskFlowConstantsRequest } from "./ListTaskFlowConstants/req";
import { ListTaskFlowConstantsResponse } from "./ListTaskFlowConstants/res";
import { BackFillRequest } from "./BackFill/req";
import { BackFillResponse } from "./BackFill/res";
import { UpdateTaskTimeVariablesRequest } from "./UpdateTaskTimeVariables/req";
import { UpdateTaskTimeVariablesResponse } from "./UpdateTaskTimeVariables/res";
import { ListTaskFlowTimeVariablesRequest } from "./ListTaskFlowTimeVariables/req";
import { ListTaskFlowTimeVariablesResponse } from "./ListTaskFlowTimeVariables/res";
import { UpdateTaskFlowTimeVariablesRequest } from "./UpdateTaskFlowTimeVariables/req";
import { UpdateTaskFlowTimeVariablesResponse } from "./UpdateTaskFlowTimeVariables/res";
import { UpdateTaskFlowCooperatorsRequest } from "./UpdateTaskFlowCooperators/req";
import { UpdateTaskFlowCooperatorsResponse } from "./UpdateTaskFlowCooperators/res";
import { CreateScenarioRequest } from "./CreateScenario/req";
import { CreateScenarioResponse } from "./CreateScenario/res";
import { DeleteScenarioRequest } from "./DeleteScenario/req";
import { DeleteScenarioResponse } from "./DeleteScenario/res";
import { UpdateSLARulesRequest } from "./UpdateSLARules/req";
import { UpdateSLARulesResponse } from "./UpdateSLARules/res";
import { GetRuleNumLimitOfSLARequest } from "./GetRuleNumLimitOfSLA/req";
import { GetRuleNumLimitOfSLAResponse } from "./GetRuleNumLimitOfSLA/res";
import { GetIntervalLimitOfSLARequest } from "./GetIntervalLimitOfSLA/req";
import { GetIntervalLimitOfSLAResponse } from "./GetIntervalLimitOfSLA/res";
import { ListDefaultSLARulesRequest } from "./ListDefaultSLARules/req";
import { ListDefaultSLARulesResponse } from "./ListDefaultSLARules/res";
import { ListTaskFlowCooperatorsRequest } from "./ListTaskFlowCooperators/req";
import { ListTaskFlowCooperatorsResponse } from "./ListTaskFlowCooperators/res";
import { ListSLARulesRequest } from "./ListSLARules/req";
import { ListSLARulesResponse } from "./ListSLARules/res";
import { GetTaskRequest } from "./GetTask/req";
import { GetTaskResponse } from "./GetTask/res";
import { MoveTaskFlowToScenarioRequest } from "./MoveTaskFlowToScenario/req";
import { MoveTaskFlowToScenarioResponse } from "./MoveTaskFlowToScenario/res";
import { GetTaskFlowNotificationRequest } from "./GetTaskFlowNotification/req";
import { GetTaskFlowNotificationResponse } from "./GetTaskFlowNotification/res";
import { UpdateTaskNameRequest } from "./UpdateTaskName/req";
import { UpdateTaskNameResponse } from "./UpdateTaskName/res";
import { UpdateTaskOutputRequest } from "./UpdateTaskOutput/req";
import { UpdateTaskOutputResponse } from "./UpdateTaskOutput/res";
import { DeleteTaskFlowEdgesByConditionRequest } from "./DeleteTaskFlowEdgesByCondition/req";
import { DeleteTaskFlowEdgesByConditionResponse } from "./DeleteTaskFlowEdgesByCondition/res";
import { ListTaskFlowEdgesByConditionRequest } from "./ListTaskFlowEdgesByCondition/req";
import { ListTaskFlowEdgesByConditionResponse } from "./ListTaskFlowEdgesByCondition/res";
import { AddTaskFlowEdgesRequest } from "./AddTaskFlowEdges/req";
import { AddTaskFlowEdgesResponse } from "./AddTaskFlowEdges/res";
import { UpdateTaskFlowNameAndDescRequest } from "./UpdateTaskFlowNameAndDesc/req";
import { UpdateTaskFlowNameAndDescResponse } from "./UpdateTaskFlowNameAndDesc/res";
import { GetTaskFlowGraphRequest } from "./GetTaskFlowGraph/req";
import { GetTaskFlowGraphResponse } from "./GetTaskFlowGraph/res";
import { UpdateTaskFlowEdgesRequest } from "./UpdateTaskFlowEdges/req";
import { UpdateTaskFlowEdgesResponse } from "./UpdateTaskFlowEdges/res";
import { UpdateTaskFlowOwnerRequest } from "./UpdateTaskFlowOwner/req";
import { UpdateTaskFlowOwnerResponse } from "./UpdateTaskFlowOwner/res";
import { UpdateTaskFlowScheduleRequest } from "./UpdateTaskFlowSchedule/req";
import { UpdateTaskFlowScheduleResponse } from "./UpdateTaskFlowSchedule/res";
import { UpdateTaskFlowRelationsRequest } from "./UpdateTaskFlowRelations/req";
import { UpdateTaskFlowRelationsResponse } from "./UpdateTaskFlowRelations/res";
import { UpdateTaskFlowNotificationRequest } from "./UpdateTaskFlowNotification/req";
import { UpdateTaskFlowNotificationResponse } from "./UpdateTaskFlowNotification/res";
import { ListTasksInTaskFlowRequest } from "./ListTasksInTaskFlow/req";
import { ListTasksInTaskFlowResponse } from "./ListTasksInTaskFlow/res";
import { CreateTaskFlowRequest } from "./CreateTaskFlow/req";
import { CreateTaskFlowResponse } from "./CreateTaskFlow/res";
import { SuspendTaskFlowInstanceRequest } from "./SuspendTaskFlowInstance/req";
import { SuspendTaskFlowInstanceResponse } from "./SuspendTaskFlowInstance/res";
import { ReRunTaskFlowInstanceRequest } from "./ReRunTaskFlowInstance/req";
import { ReRunTaskFlowInstanceResponse } from "./ReRunTaskFlowInstance/res";
import { MakeTaskFlowInstanceSuccessRequest } from "./MakeTaskFlowInstanceSuccess/req";
import { MakeTaskFlowInstanceSuccessResponse } from "./MakeTaskFlowInstanceSuccess/res";
import { DeleteTaskRequest } from "./DeleteTask/req";
import { DeleteTaskResponse } from "./DeleteTask/res";
import { PublishAndDeployTaskFlowRequest } from "./PublishAndDeployTaskFlow/req";
import { PublishAndDeployTaskFlowResponse } from "./PublishAndDeployTaskFlow/res";
import { StopTaskFlowInstanceRequest } from "./StopTaskFlowInstance/req";
import { StopTaskFlowInstanceResponse } from "./StopTaskFlowInstance/res";
import { CreateTaskRequest } from "./CreateTask/req";
import { CreateTaskResponse } from "./CreateTask/res";
import { ListClassificationTemplatesRequest } from "./ListClassificationTemplates/req";
import { ListClassificationTemplatesResponse } from "./ListClassificationTemplates/res";
import { BuyPayAsYouGoOrderRequest } from "./BuyPayAsYouGoOrder/req";
import { BuyPayAsYouGoOrderResponse } from "./BuyPayAsYouGoOrder/res";
import { RefundPayAsYouGoOrderRequest } from "./RefundPayAsYouGoOrder/req";
import { RefundPayAsYouGoOrderResponse } from "./RefundPayAsYouGoOrder/res";
import { ListEffectiveOrdersRequest } from "./ListEffectiveOrders/req";
import { ListEffectiveOrdersResponse } from "./ListEffectiveOrders/res";
import { GetOrderAttachmentFileRequest } from "./GetOrderAttachmentFile/req";
import { GetOrderAttachmentFileResponse } from "./GetOrderAttachmentFile/res";
import { GetDataCorrectRollbackFileRequest } from "./GetDataCorrectRollbackFile/req";
import { GetDataCorrectRollbackFileResponse } from "./GetDataCorrectRollbackFile/res";
import { GetDataCronClearConfigRequest } from "./GetDataCronClearConfig/req";
import { GetDataCronClearConfigResponse } from "./GetDataCronClearConfig/res";
import { GetOnlineDDLProgressRequest } from "./GetOnlineDDLProgress/req";
import { GetOnlineDDLProgressResponse } from "./GetOnlineDDLProgress/res";
import { GetProxyAccessRequest } from "./GetProxyAccess/req";
import { GetProxyAccessResponse } from "./GetProxyAccess/res";
import { GrantTemplateAuthorityRequest } from "./GrantTemplateAuthority/req";
import { GrantTemplateAuthorityResponse } from "./GrantTemplateAuthority/res";
import { RevokeTemplateAuthorityRequest } from "./RevokeTemplateAuthority/req";
import { RevokeTemplateAuthorityResponse } from "./RevokeTemplateAuthority/res";
import { UpdateAuthorityTemplateRequest } from "./UpdateAuthorityTemplate/req";
import { UpdateAuthorityTemplateResponse } from "./UpdateAuthorityTemplate/res";
import { GetAuthorityTemplateItemRequest } from "./GetAuthorityTemplateItem/req";
import { GetAuthorityTemplateItemResponse } from "./GetAuthorityTemplateItem/res";
import { GetAuthorityTemplateRequest } from "./GetAuthorityTemplate/req";
import { GetAuthorityTemplateResponse } from "./GetAuthorityTemplate/res";
import { CreateAuthorityTemplateRequest } from "./CreateAuthorityTemplate/req";
import { CreateAuthorityTemplateResponse } from "./CreateAuthorityTemplate/res";
import { ListDataImportSQLPreCheckDetailRequest } from "./ListDataImportSQLPreCheckDetail/req";
import { ListDataImportSQLPreCheckDetailResponse } from "./ListDataImportSQLPreCheckDetail/res";
import { ListDataImportSQLTypeRequest } from "./ListDataImportSQLType/req";
import { ListDataImportSQLTypeResponse } from "./ListDataImportSQLType/res";
import { GetDataImportSQLRequest } from "./GetDataImportSQL/req";
import { GetDataImportSQLResponse } from "./GetDataImportSQL/res";
import { CreateDatabaseExportOrderRequest } from "./CreateDatabaseExportOrder/req";
import { CreateDatabaseExportOrderResponse } from "./CreateDatabaseExportOrder/res";
import { CreateDataExportOrderRequest } from "./CreateDataExportOrder/req";
import { CreateDataExportOrderResponse } from "./CreateDataExportOrder/res";
import { GetDatabaseExportOrderDetailRequest } from "./GetDatabaseExportOrderDetail/req";
import { GetDatabaseExportOrderDetailResponse } from "./GetDatabaseExportOrderDetail/res";
import { CreateDataTrackOrderRequest } from "./CreateDataTrackOrder/req";
import { CreateDataTrackOrderResponse } from "./CreateDataTrackOrder/res";
import { QueryDataTrackResultDownloadStatusRequest } from "./QueryDataTrackResultDownloadStatus/req";
import { QueryDataTrackResultDownloadStatusResponse } from "./QueryDataTrackResultDownloadStatus/res";
import { GetDataTrackJobTableMetaRequest } from "./GetDataTrackJobTableMeta/req";
import { GetDataTrackJobTableMetaResponse } from "./GetDataTrackJobTableMeta/res";
import { SearchDataTrackResultRequest } from "./SearchDataTrackResult/req";
import { SearchDataTrackResultResponse } from "./SearchDataTrackResult/res";
import { DownloadDataTrackResultRequest } from "./DownloadDataTrackResult/req";
import { DownloadDataTrackResultResponse } from "./DownloadDataTrackResult/res";
import { GetDataTrackOrderDetailRequest } from "./GetDataTrackOrderDetail/req";
import { GetDataTrackOrderDetailResponse } from "./GetDataTrackOrderDetail/res";
import { GetDataTrackJobDegreeRequest } from "./GetDataTrackJobDegree/req";
import { GetDataTrackJobDegreeResponse } from "./GetDataTrackJobDegree/res";
import { GetDataExportPreCheckDetailRequest } from "./GetDataExportPreCheckDetail/req";
import { GetDataExportPreCheckDetailResponse } from "./GetDataExportPreCheckDetail/res";
import { SkipDataCorrectRowCheckRequest } from "./SkipDataCorrectRowCheck/req";
import { SkipDataCorrectRowCheckResponse } from "./SkipDataCorrectRowCheck/res";
import { GetDataArchiveOrderDetailRequest } from "./GetDataArchiveOrderDetail/req";
import { GetDataArchiveOrderDetailResponse } from "./GetDataArchiveOrderDetail/res";
import { AnalyzeSQLLineageRequest } from "./AnalyzeSQLLineage/req";
import { AnalyzeSQLLineageResponse } from "./AnalyzeSQLLineage/res";
import { CreateDataArchiveOrderRequest } from "./CreateDataArchiveOrder/req";
import { CreateDataArchiveOrderResponse } from "./CreateDataArchiveOrder/res";
import { GetDataArchiveCountRequest } from "./GetDataArchiveCount/req";
import { GetDataArchiveCountResponse } from "./GetDataArchiveCount/res";
import { ChangeColumnSecurityLevelRequest } from "./ChangeColumnSecurityLevel/req";
import { ChangeColumnSecurityLevelResponse } from "./ChangeColumnSecurityLevel/res";
import { GetClassificationTemplateRequest } from "./GetClassificationTemplate/req";
import { GetClassificationTemplateResponse } from "./GetClassificationTemplate/res";
import { ListSensitivityLevelRequest } from "./ListSensitivityLevel/req";
import { ListSensitivityLevelResponse } from "./ListSensitivityLevel/res";
import { CreateProcCorrectOrderRequest } from "./CreateProcCorrectOrder/req";
import { CreateProcCorrectOrderResponse } from "./CreateProcCorrectOrder/res";
import { GetPagedInstanceRequest } from "./GetPagedInstance/req";
import { GetPagedInstanceResponse } from "./GetPagedInstance/res";
import { PreviewWorkflowRequest } from "./PreviewWorkflow/req";
import { PreviewWorkflowResponse } from "./PreviewWorkflow/res";
import { GetDbExportDownloadURLRequest } from "./GetDbExportDownloadURL/req";
import { GetDbExportDownloadURLResponse } from "./GetDbExportDownloadURL/res";
import { ListAuthorityTemplateRequest } from "./ListAuthorityTemplate/req";
import { ListAuthorityTemplateResponse } from "./ListAuthorityTemplate/res";
import { DeleteAuthorityTemplateRequest } from "./DeleteAuthorityTemplate/req";
import { DeleteAuthorityTemplateResponse } from "./DeleteAuthorityTemplate/res";
import { AddInstanceRequest } from "./AddInstance/req";
import { AddInstanceResponse } from "./AddInstance/res";
import { ModifyInstanceRequest } from "./ModifyInstance/req";
import { ModifyInstanceResponse } from "./ModifyInstance/res";
import { UpdateStandardGroupRequest } from "./UpdateStandardGroup/req";
import { UpdateStandardGroupResponse } from "./UpdateStandardGroup/res";
import { DeleteStandardGroupRequest } from "./DeleteStandardGroup/req";
import { DeleteStandardGroupResponse } from "./DeleteStandardGroup/res";
import { GetStandardGroupRequest } from "./GetStandardGroup/req";
import { GetStandardGroupResponse } from "./GetStandardGroup/res";
import { ListSensitiveColumnInfoRequest } from "./ListSensitiveColumnInfo/req";
import { ListSensitiveColumnInfoResponse } from "./ListSensitiveColumnInfo/res";
import { GetTableDesignProjectFlowRequest } from "./GetTableDesignProjectFlow/req";
import { GetTableDesignProjectFlowResponse } from "./GetTableDesignProjectFlow/res";
import { GetTableDesignProjectInfoRequest } from "./GetTableDesignProjectInfo/req";
import { GetTableDesignProjectInfoResponse } from "./GetTableDesignProjectInfo/res";

interface DMS_ENTERPRISE {
    /**
     * 调用ApproveOrder接口审批工单。
     */
    ApproveOrder(query: ApproveOrderRequest): Promise<ApproveOrderResponse>;
    /**
     * 调用CloseOrder关闭工单。
     */
    CloseOrder(query: CloseOrderRequest): Promise<CloseOrderResponse>;
    /**
     * 创建工单。
     */
    CreateOrder(query: CreateOrderRequest): Promise<CreateOrderResponse>;
    /**
     * 执行结构设计工单。
     */
    CreatePublishGroupTask(query: CreatePublishGroupTaskRequest): Promise<CreatePublishGroupTaskResponse>;
    /**
     * 调用deleteinstance接口，在DMS中删除指定实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 调用该API可删除已录入DMS的用户（阿里云账号）。
     */
    DeleteUser(query: DeleteUserRequest): Promise<DeleteUserResponse>;
    /**
     * 可禁用产品内暂时不需要的云账号。
     */
    DisableUser(query: DisableUserRequest): Promise<DisableUserResponse>;
    /**
     * 可启用产品内先前已经禁用的云账号。
     */
    EnableUser(query: EnableUserRequest): Promise<EnableUserResponse>;
    /**
     * 执行数据变更工单。
     */
    ExecuteDataCorrect(query: ExecuteDataCorrectRequest): Promise<ExecuteDataCorrectResponse>;
    /**
     * 调用ExecuteDataExport执行数据导出工单。
     */
    ExecuteDataExport(query: ExecuteDataExportRequest): Promise<ExecuteDataExportResponse>;
    /**
     * 调用ExecuteScript执行SQL脚本。
     */
    ExecuteScript(query: ExecuteScriptRequest): Promise<ExecuteScriptResponse>;
    /**
     * 调用GetApprovalDetail获取工单审批详情。
     */
    GetApprovalDetail(query: GetApprovalDetailRequest): Promise<GetApprovalDetailResponse>;
    /**
     * 获取数据变更工单备份文件下载地址。
     */
    GetDataCorrectBackupFiles(query: GetDataCorrectBackupFilesRequest): Promise<GetDataCorrectBackupFilesResponse>;
    /**
     * 获取数据变更工单详细信息。
     */
    GetDataCorrectOrderDetail(query: GetDataCorrectOrderDetailRequest): Promise<GetDataCorrectOrderDetailResponse>;
    /**
     * 调用GetDataExportDownloadURL获取数据导出结果附件下载地址。
     */
    GetDataExportDownloadURL(query: GetDataExportDownloadURLRequest): Promise<GetDataExportDownloadURLResponse>;
    /**
     * 获取SQL结果集导出工单详情。
     */
    GetDataExportOrderDetail(query: GetDataExportOrderDetailRequest): Promise<GetDataExportOrderDetailResponse>;
    /**
     * 调用GetDatabase获取具体库详情信息。
     */
    GetDatabase(query: GetDatabaseRequest): Promise<GetDatabaseResponse>;
    /**
     * 获取实例详细信息。
     */
    GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
     * 获取逻辑库详情信息。
     */
    GetLogicDatabase(query: GetLogicDatabaseRequest): Promise<GetLogicDatabaseResponse>;
    /**
     * 调用GetMetaTableColumn接口获取表的字段信息。
     */
    GetMetaTableColumn(query: GetMetaTableColumnRequest): Promise<GetMetaTableColumnResponse>;
    /**
     * 调用GetMetaTableDetailInfo接口获取表的字段、索引等信息。
     */
    GetMetaTableDetailInfo(query: GetMetaTableDetailInfoRequest): Promise<GetMetaTableDetailInfoResponse>;
    /**
     * 获取指定时间内的操作日志详情列表。
     */
    GetOpLog(query: GetOpLogRequest): Promise<GetOpLogResponse>;
    /**
     * 调用GetOrderBaseInfo获取工单基本信息。
     */
    GetOrderBaseInfo(query: GetOrderBaseInfoRequest): Promise<GetOrderBaseInfoResponse>;
    /**
     * 获取数据表的拓扑图。
     */
    GetTableDBTopology(query: GetTableDBTopologyRequest): Promise<GetTableDBTopologyResponse>;
    /**
     * 获取特定的用户信息。
     */
    GetUser(query: GetUserRequest): Promise<GetUserResponse>;
    /**
     * 获取当前所处的租户信息。
     */
    GetUserActiveTenant(query: GetUserActiveTenantRequest): Promise<GetUserActiveTenantResponse>;
    /**
     * 授予用户实例、库、表权限。
     */
    GrantUserPermission(query: GrantUserPermissionRequest): Promise<GrantUserPermissionResponse>;
    /**
     * 返回表的列信息。
     */
    ListColumns(query: ListColumnsRequest): Promise<ListColumnsResponse>;
    /**
     * 调用ListDatabaseUserPermssions展示具备指定数据库权限的用户权限详情。
     */
    ListDatabaseUserPermssions(query: ListDatabaseUserPermssionsRequest): Promise<ListDatabaseUserPermssionsResponse>;
    /**
     * 调用ListDatabases获取一个实例下的数据库列表详情信息。
     */
    ListDatabases(query: ListDatabasesRequest): Promise<ListDatabasesResponse>;
    /**
     * 调用ListIndexes返回表索引信息。
     */
    ListIndexes(query: ListIndexesRequest): Promise<ListIndexesResponse>;
    /**
     * 调用ListInstances接口，获取实例信息列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 调用ListLogicDatabases接口，返回逻辑库详情列表。
     */
    ListLogicDatabases(query: ListLogicDatabasesRequest): Promise<ListLogicDatabasesResponse>;
    /**
     * 获取指定逻辑库下面的逻辑表详情列表。
     */
    ListLogicTables(query: ListLogicTablesRequest): Promise<ListLogicTablesResponse>;
    /**
     * 调用ListOrders获取工单列表信息。
     */
    ListOrders(query: ListOrdersRequest): Promise<ListOrdersResponse>;
    /**
     * 调用ListSensitiveColumns搜索敏感字段列表。
     */
    ListSensitiveColumns(query: ListSensitiveColumnsRequest): Promise<ListSensitiveColumnsResponse>;
    /**
     * 调用ListSensitiveColumnsDetail获取敏感字段详情信息。
     */
    ListSensitiveColumnsDetail(query: ListSensitiveColumnsDetailRequest): Promise<ListSensitiveColumnsDetailResponse>;
    /**
     * 调用ListTables获取一个库下面的表详情列表。
     */
    ListTables(query: ListTablesRequest): Promise<ListTablesResponse>;
    /**
     * 调用ListUserPermissions展示指定用户所具备的库表权限。
     */
    ListUserPermissions(query: ListUserPermissionsRequest): Promise<ListUserPermissionsResponse>;
    /**
     * 获取当前的租户列表。
     */
    ListUserTenants(query: ListUserTenantsRequest): Promise<ListUserTenantsResponse>;
    /**
     * 获取用户的详情列表。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 获取审批节点列表。
     */
    ListWorkFlowNodes(query: ListWorkFlowNodesRequest): Promise<ListWorkFlowNodesResponse>;
    /**
     * 获取审批模板列表。
     */
    ListWorkFlowTemplates(query: ListWorkFlowTemplatesRequest): Promise<ListWorkFlowTemplatesResponse>;
    /**
     * 在DMS中录入新的数据库实例。
     */
    RegisterInstance(query: RegisterInstanceRequest): Promise<RegisterInstanceResponse>;
    /**
     * 录入本企业的新用户。
     */
    RegisterUser(query: RegisterUserRequest): Promise<RegisterUserResponse>;
    /**
     * 回收用户实例、库、表权限。
     */
    RevokeUserPermission(query: RevokeUserPermissionRequest): Promise<RevokeUserPermissionResponse>;
    /**
     * 搜索库详情信息。
     */
    SearchDatabase(query: SearchDatabaseRequest): Promise<SearchDatabaseResponse>;
    /**
     * 搜索表详情列表。
     */
    SearchTable(query: SearchTableRequest): Promise<SearchTableResponse>;
    /**
     * 设置实例、库、表的Owner。
     */
    SetOwners(query: SetOwnersRequest): Promise<SetOwnersResponse>;
    /**
     * 调用SubmitOrderApproval提交工单审批。
     */
    SubmitOrderApproval(query: SubmitOrderApprovalRequest): Promise<SubmitOrderApprovalResponse>;
    /**
     * 同步数据库字典元数据。
     */
    SyncDatabaseMeta(query: SyncDatabaseMetaRequest): Promise<SyncDatabaseMetaResponse>;
    /**
     * 调用SyncInstanceMeta同步实例下所有数据库字典元数据。
     */
    SyncInstanceMeta(query: SyncInstanceMetaRequest): Promise<SyncInstanceMetaResponse>;
    /**
     * 更新实例信息，同时检查该实例连通性。
     */
    UpdateInstance(query: UpdateInstanceRequest): Promise<UpdateInstanceResponse>;
    /**
     * 更新用户信息。
     */
    UpdateUser(query: UpdateUserRequest): Promise<UpdateUserResponse>;
    /**
     * 创建上传OSS附件任务，获得附件任务Key。
     */
    CreateUploadOSSFileJob(query: CreateUploadOSSFileJobRequest): Promise<CreateUploadOSSFileJobResponse>;
    /**
     * 获取上传附件的任务信息。
     */
    GetUserUploadFileJob(query: GetUserUploadFileJobRequest): Promise<GetUserUploadFileJobResponse>;
    /**
     * 创建上传链接形式附件任务，获得附件任务Key。
     */
    CreateUploadFileJob(query: CreateUploadFileJobRequest): Promise<CreateUploadFileJobResponse>;
    /**
     * 调用SubmitStructSyncOrderApproval提交结构同步工单至审批流程。
     */
    SubmitStructSyncOrderApproval(query: SubmitStructSyncOrderApprovalRequest): Promise<SubmitStructSyncOrderApprovalResponse>;
    /**
     * 调用GetStructSyncExecSqlDetail获取结构同步的执行SQL脚本。
     */
    GetStructSyncExecSqlDetail(query: GetStructSyncExecSqlDetailRequest): Promise<GetStructSyncExecSqlDetailResponse>;
    /**
     * 调用GetStructSyncJobAnalyzeResult获取结构同步的任务分析结果。
     */
    GetStructSyncJobAnalyzeResult(query: GetStructSyncJobAnalyzeResultRequest): Promise<GetStructSyncJobAnalyzeResultResponse>;
    /**
     * 调用GetStructSyncOrderDetail获取结构同步的工单详情信息。
     */
    GetStructSyncOrderDetail(query: GetStructSyncOrderDetailRequest): Promise<GetStructSyncOrderDetailResponse>;
    /**
     * 获取申请库-Owner、表-Owner、实例-Owner的工单详情。
     */
    GetOwnerApplyOrderDetail(query: GetOwnerApplyOrderDetailRequest): Promise<GetOwnerApplyOrderDetailResponse>;
    /**
     * 调用此API执行结构同步工单。
     */
    ExecuteStructSync(query: ExecuteStructSyncRequest): Promise<ExecuteStructSyncResponse>;
    /**
     * 调用GetPermApplyOrderDetail获取权限申请的工单详情。
     */
    GetPermApplyOrderDetail(query: GetPermApplyOrderDetailRequest): Promise<GetPermApplyOrderDetailResponse>;
    /**
     * 获取SQL任务的详情信息。
     */
    ListDBTaskSQLJobDetail(query: ListDBTaskSQLJobDetailRequest): Promise<ListDBTaskSQLJobDetailResponse>;
    /**
     * 获取数据变更工单的SQL脚本附件下载地址。
     */
    GetDataCorrectSQLFile(query: GetDataCorrectSQLFileRequest): Promise<GetDataCorrectSQLFileResponse>;
    /**
     * 调用GetStructSyncJobDetail获取结构同步的任务详情。
     */
    GetStructSyncJobDetail(query: GetStructSyncJobDetailRequest): Promise<GetStructSyncJobDetailResponse>;
    /**
     * 获取SQL任务列表。
     */
    ListDBTaskSQLJob(query: ListDBTaskSQLJobRequest): Promise<ListDBTaskSQLJobResponse>;
    /**
     * 创建变更工单。
     */
    CreateStructSyncOrder(query: CreateStructSyncOrderRequest): Promise<CreateStructSyncOrderResponse>;
    /**
     * 调用GetTableTopology获取数据表的拓扑信息。
     */
    GetTableTopology(query: GetTableTopologyRequest): Promise<GetTableTopologyResponse>;
    /**
     * 获取普通数据变更、无锁变更、数据导入工单任务详情。
     */
    GetDataCorrectTaskDetail(query: GetDataCorrectTaskDetailRequest): Promise<GetDataCorrectTaskDetailResponse>;
    /**
     * 创建普通数据变更工单。
     */
    CreateDataCorrectOrder(query: CreateDataCorrectOrderRequest): Promise<CreateDataCorrectOrderResponse>;
    /**
     * 创建数据导入工单。
     */
    CreateDataImportOrder(query: CreateDataImportOrderRequest): Promise<CreateDataImportOrderResponse>;
    /**
     * 创建无锁变更工单。
     */
    CreateFreeLockCorrectOrder(query: CreateFreeLockCorrectOrderRequest): Promise<CreateFreeLockCorrectOrderResponse>;
    /**
     * 获取历史数据清理工单任务详情。
     */
    GetDataCronClearTaskDetailList(query: GetDataCronClearTaskDetailListRequest): Promise<GetDataCronClearTaskDetailListResponse>;
    /**
     * 创建历史数据清理工单。
     */
    CreateDataCronClearOrder(query: CreateDataCronClearOrderRequest): Promise<CreateDataCronClearOrderResponse>;
    /**
     * 获取结构设计工单的发布详情。
     */
    ListDDLPublishRecords(query: ListDDLPublishRecordsRequest): Promise<ListDDLPublishRecordsResponse>;
    /**
     * 获取逻辑库与其对应物理分库的拓扑信息。
     */
    GetDBTopology(query: GetDBTopologyRequest): Promise<GetDBTopologyResponse>;
    /**
     * 调用GetPhysicalDatabase获取物理库的详情。
     */
    GetPhysicalDatabase(query: GetPhysicalDatabaseRequest): Promise<GetPhysicalDatabaseResponse>;
    /**
     * 调用CreateSQLReviewOrder创建SQL审核工单。
     */
    CreateSQLReviewOrder(query: CreateSQLReviewOrderRequest): Promise<CreateSQLReviewOrderResponse>;
    /**
     * 获取SQL审核工单的SQL详情结果。
     */
    ListSQLReviewOriginSQL(query: ListSQLReviewOriginSQLRequest): Promise<ListSQLReviewOriginSQLResponse>;
    /**
     * 获取SQL审核工单的审核结果。
     */
    GetSQLReviewCheckResultStatus(query: GetSQLReviewCheckResultStatusRequest): Promise<GetSQLReviewCheckResultStatusResponse>;
    /**
     * 获取SQL审核优化建议的详情，适用于数据变更工单和SQLReview工单。
     */
    GetSQLReviewOptimizeDetail(query: GetSQLReviewOptimizeDetailRequest): Promise<GetSQLReviewOptimizeDetailResponse>;
    /**
     * 获取数据变更工单中预检查环节的SQL信息列表。
     */
    ListDataCorrectPreCheckSQL(query: ListDataCorrectPreCheckSQLRequest): Promise<ListDataCorrectPreCheckSQLResponse>;
    /**
     * 获取数据变更工单中预检查环节的数据库列表。
     */
    ListDataCorrectPreCheckDB(query: ListDataCorrectPreCheckDBRequest): Promise<ListDataCorrectPreCheckDBResponse>;
    /**
     * 调用CreateProxy接口，开启实例的数据安全访问功能。
     */
    CreateProxy(query: CreateProxyRequest): Promise<CreateProxyResponse>;
    /**
     * 授予用户安全访问代理权限。
     */
    CreateProxyAccess(query: CreateProxyAccessRequest): Promise<CreateProxyAccessResponse>;
    /**
     * 关闭实例的安全访问代理。
     */
    DeleteProxy(query: DeleteProxyRequest): Promise<DeleteProxyResponse>;
    /**
     * 回收目标用户的安全访问代理权限。
     */
    DeleteProxyAccess(query: DeleteProxyAccessRequest): Promise<DeleteProxyAccessResponse>;
    /**
     * 获取数据安全访问代理的详细信息。
     */
    GetProxy(query: GetProxyRequest): Promise<GetProxyResponse>;
    /**
     * 获取安全访问代理的授权密码。
     */
    InspectProxyAccessSecret(query: InspectProxyAccessSecretRequest): Promise<InspectProxyAccessSecretResponse>;
    /**
     * 获取安全访问代理列表。
     */
    ListProxies(query: ListProxiesRequest): Promise<ListProxiesResponse>;
    /**
     * 获取安全访问代理的授权列表。
     */
    ListProxyAccesses(query: ListProxyAccessesRequest): Promise<ListProxyAccessesResponse>;
    /**
     * 调整字段敏感等级。
     */
    ChangeColumnSecLevel(query: ChangeColumnSecLevelRequest): Promise<ChangeColumnSecLevelResponse>;
    /**
     * 创建DMS逻辑库。
     */
    CreateLogicDatabase(query: CreateLogicDatabaseRequest): Promise<CreateLogicDatabaseResponse>;
    /**
     * 删除DMS逻辑库。仅删除逻辑库，并不会对物理分库做任何物理删除操作。
     */
    DeleteLogicDatabase(query: DeleteLogicDatabaseRequest): Promise<DeleteLogicDatabaseResponse>;
    /**
     * 编辑逻辑库信息。
     */
    EditLogicDatabase(query: EditLogicDatabaseRequest): Promise<EditLogicDatabaseResponse>;
    /**
     * 调用ListInstanceUserPermissions获取实例的用户权限列表。
     */
    ListInstanceUserPermissions(query: ListInstanceUserPermissionsRequest): Promise<ListInstanceUserPermissionsResponse>;
    /**
     * 获取在DMS进行SQL操作的审计日志列表。
     */
    ListSQLExecAuditLog(query: ListSQLExecAuditLogRequest): Promise<ListSQLExecAuditLogResponse>;
    /**
     * 获取安全访问代理审计信息列表。
     */
    ListProxySQLExecAuditLog(query: ListProxySQLExecAuditLogRequest): Promise<ListProxySQLExecAuditLogResponse>;
    /**
     * 获取实例登录列表信息。
     */
    ListInstanceLoginAuditLog(query: ListInstanceLoginAuditLogRequest): Promise<ListInstanceLoginAuditLogResponse>;
    /**
     * 修改数据变更工单提交的SQL脚本。
     */
    ModifyDataCorrectExecSQL(query: ModifyDataCorrectExecSQLRequest): Promise<ModifyDataCorrectExecSQLResponse>;
    /**
     * 获取SQL任务调度详情日志。
     */
    GetDBTaskSQLJobLog(query: GetDBTaskSQLJobLogRequest): Promise<GetDBTaskSQLJobLogResponse>;
    /**
     * 删除逻辑表路由算法配置信息。
     */
    DeleteLogicTableRouteConfig(query: DeleteLogicTableRouteConfigRequest): Promise<DeleteLogicTableRouteConfigResponse>;
    /**
     * 为逻辑表添加路由算法配置。
     */
    AddLogicTableRouteConfig(query: AddLogicTableRouteConfigRequest): Promise<AddLogicTableRouteConfigResponse>;
    /**
     * 获取逻辑表的路由算法配置列表。
     */
    ListLogicTableRouteConfig(query: ListLogicTableRouteConfigRequest): Promise<ListLogicTableRouteConfigResponse>;
    /**
     * 重新执行数据变更工单预检查步骤。
     */
    RetryDataCorrectPreCheck(query: RetryDataCorrectPreCheckRequest): Promise<RetryDataCorrectPreCheckResponse>;
    /**
     * 暂停执行数据变更工单SQL任务。
     */
    PauseDataCorrectSQLJob(query: PauseDataCorrectSQLJobRequest): Promise<PauseDataCorrectSQLJobResponse>;
    /**
     * 对已经执行失败的数据变更SQL任务进行重试。
     */
    RestartDataCorrectSQLJob(query: RestartDataCorrectSQLJobRequest): Promise<RestartDataCorrectSQLJobResponse>;
    /**
     * 获取安全规则集列表。
     */
    ListStandardGroups(query: ListStandardGroupsRequest): Promise<ListStandardGroupsResponse>;
    /**
     * 调用CreateStandardGroup创建安全规则集。
     */
    CreateStandardGroup(query: CreateStandardGroupRequest): Promise<CreateStandardGroupResponse>;
    /**
     * 转交DMS数仓开发项目空间中的任务流责任人。
     */
    ChangeLhDagOwner(query: ChangeLhDagOwnerRequest): Promise<ChangeLhDagOwnerResponse>;
    /**
     * 调用DeleteLhMembers接口，删除DMS数仓开发项目空间成员或任务流开发者。
     */
    DeleteLhMembers(query: DeleteLhMembersRequest): Promise<DeleteLhMembersResponse>;
    /**
     * 调用ReDeployLhDagVersion接口，重新部署任务流历史版本。
     */
    ReDeployLhDagVersion(query: ReDeployLhDagVersionRequest): Promise<ReDeployLhDagVersionResponse>;
    /**
     * 查询DMS数仓开发项目空间中业务场景对应的任务流列表。
     */
    ListLhTaskFlowAndScenario(query: ListLhTaskFlowAndScenarioRequest): Promise<ListLhTaskFlowAndScenarioResponse>;
    /**
     * 调用CreateLakeHouseSpace接口，在DMS数仓开发中创建新的项目空间。
     */
    CreateLakeHouseSpace(query: CreateLakeHouseSpaceRequest): Promise<CreateLakeHouseSpaceResponse>;
    /**
     * 调用AddLhMembers接口，添加DMS数仓开发项目空间管理员、空间成员或任务流开发者。
     */
    AddLhMembers(query: AddLhMembersRequest): Promise<AddLhMembersResponse>;
    /**
     * 调用DeleteLakeHouseSpace接口，删除数仓开发中的项目空间。
     */
    DeleteLakeHouseSpace(query: DeleteLakeHouseSpaceRequest): Promise<DeleteLakeHouseSpaceResponse>;
    /**
     * 调用DeleteTaskFlow接口，删除任务流。
     */
    DeleteTaskFlow(query: DeleteTaskFlowRequest): Promise<DeleteTaskFlowResponse>;
    /**
     * 调用GetLhSpaceByName接口，根据DMS数仓开发项目空间名查询项目空间信息。
     */
    GetLhSpaceByName(query: GetLhSpaceByNameRequest): Promise<GetLhSpaceByNameResponse>;
    /**
     * 调用GetTaskInstanceRelation接口，获取任务流运行记录的节点信息。
     */
    GetTaskInstanceRelation(query: GetTaskInstanceRelationRequest): Promise<GetTaskInstanceRelationResponse>;
    /**
     * 调用ListTaskFlow接口，获取任务流信息列表。
     */
    ListTaskFlow(query: ListTaskFlowRequest): Promise<ListTaskFlowResponse>;
    /**
     * 调用ListTaskFlowInstance接口，获取任务流运行记录。
     */
    ListTaskFlowInstance(query: ListTaskFlowInstanceRequest): Promise<ListTaskFlowInstanceResponse>;
    /**
     * 调用ListDAGVersions接口，获取任务流历史发布版本信息列表。
     */
    ListDAGVersions(query: ListDAGVersionsRequest): Promise<ListDAGVersionsResponse>;
    /**
     * 调用OfflineTaskFlow接口，在DMS中下线已发布的任务流。
     */
    OfflineTaskFlow(query: OfflineTaskFlowRequest): Promise<OfflineTaskFlowResponse>;
    /**
     * 获取脱敏规则列表。
     */
    ListDesensitizationRule(query: ListDesensitizationRuleRequest): Promise<ListDesensitizationRuleResponse>;
    /**
     * 修改字段绑定的脱敏规则。
     */
    ModifyDesensitizationStrategy(query: ModifyDesensitizationStrategyRequest): Promise<ModifyDesensitizationStrategyResponse>;
    /**
     * 添加脱敏规则。
     */
    AddDesensitizationRule(query: AddDesensitizationRuleRequest): Promise<AddDesensitizationRuleResponse>;
    /**
     * 调用ListSensitiveDataAuditLog接口，查看敏感信息审计日志详情。
     */
    ListSensitiveDataAuditLog(query: ListSensitiveDataAuditLogRequest): Promise<ListSensitiveDataAuditLogResponse>;
    /**
     * 调用UpdateTaskFlowConstants接口，更新任务流常量列表。
     */
    UpdateTaskFlowConstants(query: UpdateTaskFlowConstantsRequest): Promise<UpdateTaskFlowConstantsResponse>;
    /**
     * 调用UpdateScenario接口，更新任务流业务场景名称和描述。
     */
    UpdateScenario(query: UpdateScenarioRequest): Promise<UpdateScenarioResponse>;
    /**
     * 调用ResumeTaskFlowInstance接口，恢复已暂停运行的任务流。
     */
    ResumeTaskFlowInstance(query: ResumeTaskFlowInstanceRequest): Promise<ResumeTaskFlowInstanceResponse>;
    /**
     * 调用UpdateTaskContent接口，更新任务流中的任务。
     */
    UpdateTaskContent(query: UpdateTaskContentRequest): Promise<UpdateTaskContentResponse>;
    /**
     * 调用ListTaskFlowsByPage接口，分页获取任务流详情列表。
     */
    ListTaskFlowsByPage(query: ListTaskFlowsByPageRequest): Promise<ListTaskFlowsByPageResponse>;
    /**
     * 调用ListScenarios接口，获取业务场景列表。
     */
    ListScenarios(query: ListScenariosRequest): Promise<ListScenariosResponse>;
    /**
     * 调用UpdateTaskConfig接口，更新任务高级配置。
     */
    UpdateTaskConfig(query: UpdateTaskConfigRequest): Promise<UpdateTaskConfigResponse>;
    /**
     * 调用ListTaskFlowConstants接口获取任务流常量列表。
     */
    ListTaskFlowConstants(query: ListTaskFlowConstantsRequest): Promise<ListTaskFlowConstantsResponse>;
    /**
     * 调用BackFill接口，给任务编排补数据。
     */
    BackFill(query: BackFillRequest): Promise<BackFillResponse>;
    /**
     * 更新任务时间变量。
     */
    UpdateTaskTimeVariables(query: UpdateTaskTimeVariablesRequest): Promise<UpdateTaskTimeVariablesResponse>;
    /**
     * 调用ListTaskFlowTimeVariables接口，获取任务流时间变量列表。
     */
    ListTaskFlowTimeVariables(query: ListTaskFlowTimeVariablesRequest): Promise<ListTaskFlowTimeVariablesResponse>;
    /**
     * 调用UpdateTaskFlowTimeVariables接口，更新任务流时间变量。
     */
    UpdateTaskFlowTimeVariables(query: UpdateTaskFlowTimeVariablesRequest): Promise<UpdateTaskFlowTimeVariablesResponse>;
    /**
     * 调用UpdateTaskFlowCooperators接口，更新任务流相关人员列表。
     */
    UpdateTaskFlowCooperators(query: UpdateTaskFlowCooperatorsRequest): Promise<UpdateTaskFlowCooperatorsResponse>;
    /**
     * 调用CreateScenario接口，创建业务场景，也可以将任务流按业务场景进行分组。
     */
    CreateScenario(query: CreateScenarioRequest): Promise<CreateScenarioResponse>;
    /**
     * 调用DeleteScenario接口，删除业务场景。
     */
    DeleteScenario(query: DeleteScenarioRequest): Promise<DeleteScenarioResponse>;
    /**
     * 调用此API可以更新任务流SLA超时提醒。
     */
    UpdateSLARules(query: UpdateSLARulesRequest): Promise<UpdateSLARulesResponse>;
    /**
     * 调用GetRuleNumLimitOfSLA接口，获取任务编排自定义SLA规则的限制数量，自定义的SLA规则数量不可超过该限制数。
     */
    GetRuleNumLimitOfSLA(query: GetRuleNumLimitOfSLARequest): Promise<GetRuleNumLimitOfSLAResponse>;
    /**
     * 调用GetIntervalLimitOfSLA接口，获取任务流允许配置SLA超时规则时，其最小调度周期限制。
     */
    GetIntervalLimitOfSLA(query: GetIntervalLimitOfSLARequest): Promise<GetIntervalLimitOfSLAResponse>;
    /**
     * 调用ListDefaultSLARules，获取默认SLA超时提醒规则。
     */
    ListDefaultSLARules(query: ListDefaultSLARulesRequest): Promise<ListDefaultSLARulesResponse>;
    /**
     * 获取任务流相关人列表。
     */
    ListTaskFlowCooperators(query: ListTaskFlowCooperatorsRequest): Promise<ListTaskFlowCooperatorsResponse>;
    /**
     * 调用此API可以获取自定义SLA规则列表。
     */
    ListSLARules(query: ListSLARulesRequest): Promise<ListSLARulesResponse>;
    /**
     * 调用GetTask接口，按照任务流节点ID获取指定节点的配置，包括任务的时间变量。
     */
    GetTask(query: GetTaskRequest): Promise<GetTaskResponse>;
    /**
     * 调用MoveTaskFlowToScenario接口，移动任务流至指定业务场景。
     */
    MoveTaskFlowToScenario(query: MoveTaskFlowToScenarioRequest): Promise<MoveTaskFlowToScenarioResponse>;
    /**
     * 调用GetTaskFlowNotification接口，获取任务流通知设置。
     */
    GetTaskFlowNotification(query: GetTaskFlowNotificationRequest): Promise<GetTaskFlowNotificationResponse>;
    /**
     * 调用UpdateTaskName接口，更新任务名称。
     */
    UpdateTaskName(query: UpdateTaskNameRequest): Promise<UpdateTaskNameResponse>;
    /**
     * 调用UpdateTaskOutput接口，更新任务节点的输出变量。
     */
    UpdateTaskOutput(query: UpdateTaskOutputRequest): Promise<UpdateTaskOutputResponse>;
    /**
     * 调用DeleteTaskFlowEdgesByCondition接口，按照多条件删除任务流边。
     */
    DeleteTaskFlowEdgesByCondition(query: DeleteTaskFlowEdgesByConditionRequest): Promise<DeleteTaskFlowEdgesByConditionResponse>;
    /**
     * 调用ListTaskFlowEdgesByCondition接口，多条件获取指定任务流DAG图的边。
     */
    ListTaskFlowEdgesByCondition(query: ListTaskFlowEdgesByConditionRequest): Promise<ListTaskFlowEdgesByConditionResponse>;
    /**
     * 为已存在的任务流节点建立有向边。
     */
    AddTaskFlowEdges(query: AddTaskFlowEdgesRequest): Promise<AddTaskFlowEdgesResponse>;
    /**
     * 调用UpdateTaskFlowNameAndDesc接口，更新任务流名称和描述。
     */
    UpdateTaskFlowNameAndDesc(query: UpdateTaskFlowNameAndDescRequest): Promise<UpdateTaskFlowNameAndDescResponse>;
    /**
     * 调用GetTaskFlowGraph接口获取任务流的DAG图。
     */
    GetTaskFlowGraph(query: GetTaskFlowGraphRequest): Promise<GetTaskFlowGraphResponse>;
    /**
     * 批量更新指定任务流的指定边的起点节点和终点节点。
     */
    UpdateTaskFlowEdges(query: UpdateTaskFlowEdgesRequest): Promise<UpdateTaskFlowEdgesResponse>;
    /**
     * 调用UpdateTaskFlowOwner接口，更新任务流Owner。
     */
    UpdateTaskFlowOwner(query: UpdateTaskFlowOwnerRequest): Promise<UpdateTaskFlowOwnerResponse>;
    /**
     * 调用UpdateTaskFlowSchedule接口，更新任务流调度配置。
     */
    UpdateTaskFlowSchedule(query: UpdateTaskFlowScheduleRequest): Promise<UpdateTaskFlowScheduleResponse>;
    /**
     * 调用UpdateTaskFlowRelations接口，全量更新任务流边。
     */
    UpdateTaskFlowRelations(query: UpdateTaskFlowRelationsRequest): Promise<UpdateTaskFlowRelationsResponse>;
    /**
     * 调用UpdateTaskFlowNotification接口，更新任务流通知设置。
     */
    UpdateTaskFlowNotification(query: UpdateTaskFlowNotificationRequest): Promise<UpdateTaskFlowNotificationResponse>;
    /**
     * 调用ListTasksInTaskFlow接口，获取指定任务流的任务节点列表。
     */
    ListTasksInTaskFlow(query: ListTasksInTaskFlowRequest): Promise<ListTasksInTaskFlowResponse>;
    /**
     * 调用CreateTaskFlow接口，创建任务流。
     */
    CreateTaskFlow(query: CreateTaskFlowRequest): Promise<CreateTaskFlowResponse>;
    /**
     * 调用SuspendTaskFlowInstance接口，暂停运行中的任务流实例。
     */
    SuspendTaskFlowInstance(query: SuspendTaskFlowInstanceRequest): Promise<SuspendTaskFlowInstanceResponse>;
    /**
     * 调用ReRunTaskFlowInstance接口，重跑任务流实例。
     */
    ReRunTaskFlowInstance(query: ReRunTaskFlowInstanceRequest): Promise<ReRunTaskFlowInstanceResponse>;
    /**
     * 调用MakeTaskFlowInstanceSuccess接口，将指定任务流的状态设置为成功。
     */
    MakeTaskFlowInstanceSuccess(query: MakeTaskFlowInstanceSuccessRequest): Promise<MakeTaskFlowInstanceSuccessResponse>;
    /**
     * 调用DeleteTask接口，删除任务流任务。
     */
    DeleteTask(query: DeleteTaskRequest): Promise<DeleteTaskResponse>;
    /**
     * 调用PublishAndDeployTaskFlow接口，发布并部署指定任务流。
     */
    PublishAndDeployTaskFlow(query: PublishAndDeployTaskFlowRequest): Promise<PublishAndDeployTaskFlowResponse>;
    /**
     * 调用StopTaskFlowInstance接口，停止运行中的任务流实例。
     */
    StopTaskFlowInstance(query: StopTaskFlowInstanceRequest): Promise<StopTaskFlowInstanceResponse>;
    /**
     * 调用CreateTask接口，创建任务流任务。
     */
    CreateTask(query: CreateTaskRequest): Promise<CreateTaskResponse>;
    /**
     * 调用ListClassificationTemplates接口，获取分类分级模板列表信息。
     */
    ListClassificationTemplates(query: ListClassificationTemplatesRequest): Promise<ListClassificationTemplatesResponse>;
    /**
     * 调用BuyPayAsYouGoOrder接口，购买DMS按量付费的商品。
     */
    BuyPayAsYouGoOrder(query: BuyPayAsYouGoOrderRequest): Promise<BuyPayAsYouGoOrderResponse>;
    /**
     * 调用RefundPayAsYouGoOrder接口，退订已购买的DMS按量付费商品。
     */
    RefundPayAsYouGoOrder(query: RefundPayAsYouGoOrderRequest): Promise<RefundPayAsYouGoOrderResponse>;
    /**
     * 查询有效订单列表。
     */
    ListEffectiveOrders(query: ListEffectiveOrdersRequest): Promise<ListEffectiveOrdersResponse>;
    /**
     * 调用GetOrderAttachmentFile接口，获取工单附件下载地址。
     */
    GetOrderAttachmentFile(query: GetOrderAttachmentFileRequest): Promise<GetOrderAttachmentFileResponse>;
    /**
     * 调用GetDataCorrectRollbackFile接口，获取数据变更工单提交的回滚附件下载地址。
     */
    GetDataCorrectRollbackFile(query: GetDataCorrectRollbackFileRequest): Promise<GetDataCorrectRollbackFileResponse>;
    /**
     * 查询历史数据清理工单的定时配置。
     */
    GetDataCronClearConfig(query: GetDataCronClearConfigRequest): Promise<GetDataCronClearConfigResponse>;
    /**
     * 调用GetOnlineDDLProgress接口，获取OnlineDDL任务执行进度详情。
     */
    GetOnlineDDLProgress(query: GetOnlineDDLProgressRequest): Promise<GetOnlineDDLProgressResponse>;
    /**
     * 获取安全访问代理的授权。
     */
    GetProxyAccess(query: GetProxyAccessRequest): Promise<GetProxyAccessResponse>;
    /**
     * 授予用户权限模板中的资源权限。
     */
    GrantTemplateAuthority(query: GrantTemplateAuthorityRequest): Promise<GrantTemplateAuthorityResponse>;
    /**
     * 回收权限模板中的资源权限。
     */
    RevokeTemplateAuthority(query: RevokeTemplateAuthorityRequest): Promise<RevokeTemplateAuthorityResponse>;
    /**
     * 更新权限模板。
     */
    UpdateAuthorityTemplate(query: UpdateAuthorityTemplateRequest): Promise<UpdateAuthorityTemplateResponse>;
    /**
     * 获取权限模板中的资源列表。
     */
    GetAuthorityTemplateItem(query: GetAuthorityTemplateItemRequest): Promise<GetAuthorityTemplateItemResponse>;
    /**
     * 获取权限模板详情。
     */
    GetAuthorityTemplate(query: GetAuthorityTemplateRequest): Promise<GetAuthorityTemplateResponse>;
    /**
     * 创建权限模板。
     */
    CreateAuthorityTemplate(query: CreateAuthorityTemplateRequest): Promise<CreateAuthorityTemplateResponse>;
    /**
     * 获取数据导入预检SQL详情。
     */
    ListDataImportSQLPreCheckDetail(query: ListDataImportSQLPreCheckDetailRequest): Promise<ListDataImportSQLPreCheckDetailResponse>;
    /**
     * 获取数据导入SQL类型。
     */
    ListDataImportSQLType(query: ListDataImportSQLTypeRequest): Promise<ListDataImportSQLTypeResponse>;
    /**
     * 获取数据导入的SQL。
     */
    GetDataImportSQL(query: GetDataImportSQLRequest): Promise<GetDataImportSQLResponse>;
    /**
     * 创建数据库导出工单。
     */
    CreateDatabaseExportOrder(query: CreateDatabaseExportOrderRequest): Promise<CreateDatabaseExportOrderResponse>;
    /**
     * 创建SQL结果集导出工单。
     */
    CreateDataExportOrder(query: CreateDataExportOrderRequest): Promise<CreateDataExportOrderResponse>;
    /**
     * 获取数据库导出工单详情。
     */
    GetDatabaseExportOrderDetail(query: GetDatabaseExportOrderDetailRequest): Promise<GetDatabaseExportOrderDetailResponse>;
    /**
     * 创建数据追踪工单。
     */
    CreateDataTrackOrder(query: CreateDataTrackOrderRequest): Promise<CreateDataTrackOrderResponse>;
    /**
     * 查询下载数据追踪日志解析结果进度。
     */
    QueryDataTrackResultDownloadStatus(query: QueryDataTrackResultDownloadStatusRequest): Promise<QueryDataTrackResultDownloadStatusResponse>;
    /**
     * 获取数据追踪表元数据信息。
     */
    GetDataTrackJobTableMeta(query: GetDataTrackJobTableMetaRequest): Promise<GetDataTrackJobTableMetaResponse>;
    /**
     * 搜索数据追踪日志解析结果。
     */
    SearchDataTrackResult(query: SearchDataTrackResultRequest): Promise<SearchDataTrackResultResponse>;
    /**
     * 下载数据追踪日志解析结果。
     */
    DownloadDataTrackResult(query: DownloadDataTrackResultRequest): Promise<DownloadDataTrackResultResponse>;
    /**
     * 获取数据追踪工单详情。
     */
    GetDataTrackOrderDetail(query: GetDataTrackOrderDetailRequest): Promise<GetDataTrackOrderDetailResponse>;
    /**
     * 获取数据追踪任务进度。
     */
    GetDataTrackJobDegree(query: GetDataTrackJobDegreeRequest): Promise<GetDataTrackJobDegreeResponse>;
    /**
     * 查看SQL结果集导出工单预检查详情。
     */
    GetDataExportPreCheckDetail(query: GetDataExportPreCheckDetailRequest): Promise<GetDataExportPreCheckDetailResponse>;
    /**
     * 跳过数据变更预检查行数校验。
     */
    SkipDataCorrectRowCheck(query: SkipDataCorrectRowCheckRequest): Promise<SkipDataCorrectRowCheckResponse>;
    /**
     * 调用此API获取数据归档工单详情，包含工单的创建时间、任务调度信息、归档任务日志和归档数据库的信息等。
     */
    GetDataArchiveOrderDetail(query: GetDataArchiveOrderDetailRequest): Promise<GetDataArchiveOrderDetailResponse>;
    /**
     * 分析SQL语句中的表、字段之间的血缘关系（依赖和影响关系）。
     */
    AnalyzeSQLLineage(query: AnalyzeSQLLineageRequest): Promise<AnalyzeSQLLineageResponse>;
    /**
     * 使用此API可以创建数据归档工单，将数据归档至专属存储、RDS MySQL等目标中。
     */
    CreateDataArchiveOrder(query: CreateDataArchiveOrderRequest): Promise<CreateDataArchiveOrderResponse>;
    /**
     * 获取数据归档工单量统计，包括：归档成功的工单数、归档失败的工单数、正在进行归档的工单数和归档工单的总数。
     */
    GetDataArchiveCount(query: GetDataArchiveCountRequest): Promise<GetDataArchiveCountResponse>;
    /**
     * 调整字段的安全级别。
     */
    ChangeColumnSecurityLevel(query: ChangeColumnSecurityLevelRequest): Promise<ChangeColumnSecurityLevelResponse>;
    /**
     * 使用此API获取实例绑定的分类分级模板信息，包含模板ID、模板类型等信息。
     */
    GetClassificationTemplate(query: GetClassificationTemplateRequest): Promise<GetClassificationTemplateResponse>;
    /**
     * 获取分类分级模板对应的敏感序列列表。
     */
    ListSensitivityLevel(query: ListSensitivityLevelRequest): Promise<ListSensitivityLevelResponse>;
    /**
     * 使用此API创建可编程对象变更工单。
     */
    CreateProcCorrectOrder(query: CreateProcCorrectOrderRequest): Promise<CreateProcCorrectOrderResponse>;
    /**
     * 返回指定工单的任务信息。
     */
    GetPagedInstance(query: GetPagedInstanceRequest): Promise<GetPagedInstanceResponse>;
    /**
     * 该API用于在正式提交审批前，预览工单审批流。
     */
    PreviewWorkflow(query: PreviewWorkflowRequest): Promise<PreviewWorkflowResponse>;
    /**
     * 调用GetDbExportDownloadURL接口，获取数据库导出结果附件下载地址。
     */
    GetDbExportDownloadURL(query: GetDbExportDownloadURLRequest): Promise<GetDbExportDownloadURLResponse>;
    /**
     * 调用ListAuthorityTemplate接口获取权限模板列表，包含模板创建者、模板名称、模板创建者及模板总数等信息。
     */
    ListAuthorityTemplate(query: ListAuthorityTemplateRequest): Promise<ListAuthorityTemplateResponse>;
    /**
     * 调用DeleteAuthorityTemplate接口可以删除已创建的权限模板。
     */
    DeleteAuthorityTemplate(query: DeleteAuthorityTemplateRequest): Promise<DeleteAuthorityTemplateResponse>;
    /**
     * 调用该API可以实现将您的数据库实例录入至DMS中，同时，可以为实例开启安全托管能力。
     */
    AddInstance(query: AddInstanceRequest): Promise<AddInstanceResponse>;
    /**
     * 当您需要修改实例的托管模式、数据库账密、功能包等基本信息，及环境类型、实例在DMS的名称、查询和导出数据的超时时间等高级信息时，可调用该API。
     */
    ModifyInstance(query: ModifyInstanceRequest): Promise<ModifyInstanceResponse>;
    /**
     * 使用该API可以调整指定安全规则集的名称及描述信息。
     */
    UpdateStandardGroup(query: UpdateStandardGroupRequest): Promise<UpdateStandardGroupResponse>;
    /**
     * 调用DeleteStandardGroup接口可以删除已创建的安全规则集。
     */
    DeleteStandardGroup(query: DeleteStandardGroupRequest): Promise<DeleteStandardGroupResponse>;
    /**
     * 调用GetStandardGroup接口可以获取到租户下已有的安全规则集信息，包含规则名称、描述及规则关联实例的类型等信息。
     */
    GetStandardGroup(query: GetStandardGroupRequest): Promise<GetStandardGroupResponse>;
    /**
     * 调用此接口可以获取到敏感字段所使用的脱敏算法ID、名称，以及字段的安全级别等信息。
     */
    ListSensitiveColumnInfo(query: ListSensitiveColumnInfoRequest): Promise<ListSensitiveColumnInfoResponse>;
    /**
     * 调用此API可获取结构设计工单当前所在环节、是否允许返回结构设计节点、执行发布的策略等信息。
     */
    GetTableDesignProjectFlow(query: GetTableDesignProjectFlowRequest): Promise<GetTableDesignProjectFlowResponse>;
    /**
     * 调用此API可获取指定结构设计工单的项目信息以及工单的变更基准库的信息，包含结构设计工单的状态、工单创建者ID、基准库的名称和ID等。
     */
    GetTableDesignProjectInfo(query: GetTableDesignProjectInfoRequest): Promise<GetTableDesignProjectInfoResponse>;
}
export default DMS_ENTERPRISE;
