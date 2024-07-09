import { DeleteTemplatesRequest } from "./DeleteTemplates/req";
import { DeleteTemplatesResponse } from "./DeleteTemplates/res";
import { ListTemplateVersionsRequest } from "./ListTemplateVersions/req";
import { ListTemplateVersionsResponse } from "./ListTemplateVersions/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { ValidateTemplateContentRequest } from "./ValidateTemplateContent/req";
import { ValidateTemplateContentResponse } from "./ValidateTemplateContent/res";
import { ListExecutionRiskyTasksRequest } from "./ListExecutionRiskyTasks/req";
import { ListExecutionRiskyTasksResponse } from "./ListExecutionRiskyTasks/res";
import { CancelExecutionRequest } from "./CancelExecution/req";
import { CancelExecutionResponse } from "./CancelExecution/res";
import { DeleteExecutionsRequest } from "./DeleteExecutions/req";
import { DeleteExecutionsResponse } from "./DeleteExecutions/res";
import { GenerateExecutionPolicyRequest } from "./GenerateExecutionPolicy/req";
import { GenerateExecutionPolicyResponse } from "./GenerateExecutionPolicy/res";
import { GetExecutionTemplateRequest } from "./GetExecutionTemplate/req";
import { GetExecutionTemplateResponse } from "./GetExecutionTemplate/res";
import { NotifyExecutionRequest } from "./NotifyExecution/req";
import { NotifyExecutionResponse } from "./NotifyExecution/res";
import { ListExecutionsRequest } from "./ListExecutions/req";
import { ListExecutionsResponse } from "./ListExecutions/res";
import { ListExecutionLogsRequest } from "./ListExecutionLogs/req";
import { ListExecutionLogsResponse } from "./ListExecutionLogs/res";
import { StartExecutionRequest } from "./StartExecution/req";
import { StartExecutionResponse } from "./StartExecution/res";
import { ListTaskExecutionsRequest } from "./ListTaskExecutions/req";
import { ListTaskExecutionsResponse } from "./ListTaskExecutions/res";
import { TriggerExecutionRequest } from "./TriggerExecution/req";
import { TriggerExecutionResponse } from "./TriggerExecution/res";
import { UpdateExecutionRequest } from "./UpdateExecution/req";
import { UpdateExecutionResponse } from "./UpdateExecution/res";
import { ListResourceExecutionStatusRequest } from "./ListResourceExecutionStatus/req";
import { ListResourceExecutionStatusResponse } from "./ListResourceExecutionStatus/res";
import { ListActionsRequest } from "./ListActions/req";
import { ListActionsResponse } from "./ListActions/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { DeleteParameterRequest } from "./DeleteParameter/req";
import { DeleteParameterResponse } from "./DeleteParameter/res";
import { GetParameterRequest } from "./GetParameter/req";
import { GetParameterResponse } from "./GetParameter/res";
import { ListParametersRequest } from "./ListParameters/req";
import { ListParametersResponse } from "./ListParameters/res";
import { UpdateParameterRequest } from "./UpdateParameter/req";
import { UpdateParameterResponse } from "./UpdateParameter/res";
import { CreateParameterRequest } from "./CreateParameter/req";
import { CreateParameterResponse } from "./CreateParameter/res";
import { ListParameterVersionsRequest } from "./ListParameterVersions/req";
import { ListParameterVersionsResponse } from "./ListParameterVersions/res";
import { GetParametersByPathRequest } from "./GetParametersByPath/req";
import { GetParametersByPathResponse } from "./GetParametersByPath/res";
import { GetParametersRequest } from "./GetParameters/req";
import { GetParametersResponse } from "./GetParameters/res";
import { DeleteSecretParameterRequest } from "./DeleteSecretParameter/req";
import { DeleteSecretParameterResponse } from "./DeleteSecretParameter/res";
import { GetSecretParameterRequest } from "./GetSecretParameter/req";
import { GetSecretParameterResponse } from "./GetSecretParameter/res";
import { ListSecretParametersRequest } from "./ListSecretParameters/req";
import { ListSecretParametersResponse } from "./ListSecretParameters/res";
import { UpdateSecretParameterRequest } from "./UpdateSecretParameter/req";
import { UpdateSecretParameterResponse } from "./UpdateSecretParameter/res";
import { CreateSecretParameterRequest } from "./CreateSecretParameter/req";
import { CreateSecretParameterResponse } from "./CreateSecretParameter/res";
import { ListSecretParameterVersionsRequest } from "./ListSecretParameterVersions/req";
import { ListSecretParameterVersionsResponse } from "./ListSecretParameterVersions/res";
import { GetSecretParametersByPathRequest } from "./GetSecretParametersByPath/req";
import { GetSecretParametersByPathResponse } from "./GetSecretParametersByPath/res";
import { GetSecretParametersRequest } from "./GetSecretParameters/req";
import { GetSecretParametersResponse } from "./GetSecretParameters/res";
import { GetInventorySchemaRequest } from "./GetInventorySchema/req";
import { GetInventorySchemaResponse } from "./GetInventorySchema/res";
import { SearchInventoryRequest } from "./SearchInventory/req";
import { SearchInventoryResponse } from "./SearchInventory/res";
import { ListInventoryEntriesRequest } from "./ListInventoryEntries/req";
import { ListInventoryEntriesResponse } from "./ListInventoryEntries/res";
import { CreateStateConfigurationRequest } from "./CreateStateConfiguration/req";
import { CreateStateConfigurationResponse } from "./CreateStateConfiguration/res";
import { UpdateStateConfigurationRequest } from "./UpdateStateConfiguration/req";
import { UpdateStateConfigurationResponse } from "./UpdateStateConfiguration/res";
import { ListStateConfigurationsRequest } from "./ListStateConfigurations/req";
import { ListStateConfigurationsResponse } from "./ListStateConfigurations/res";
import { DeleteStateConfigurationsRequest } from "./DeleteStateConfigurations/req";
import { DeleteStateConfigurationsResponse } from "./DeleteStateConfigurations/res";
import { CreateApplicationRequest } from "./CreateApplication/req";
import { CreateApplicationResponse } from "./CreateApplication/res";
import { UpdateApplicationRequest } from "./UpdateApplication/req";
import { UpdateApplicationResponse } from "./UpdateApplication/res";
import { GetApplicationRequest } from "./GetApplication/req";
import { GetApplicationResponse } from "./GetApplication/res";
import { ListApplicationsRequest } from "./ListApplications/req";
import { ListApplicationsResponse } from "./ListApplications/res";
import { DeleteApplicationRequest } from "./DeleteApplication/req";
import { DeleteApplicationResponse } from "./DeleteApplication/res";
import { CreateApplicationGroupRequest } from "./CreateApplicationGroup/req";
import { CreateApplicationGroupResponse } from "./CreateApplicationGroup/res";
import { UpdateApplicationGroupRequest } from "./UpdateApplicationGroup/req";
import { UpdateApplicationGroupResponse } from "./UpdateApplicationGroup/res";
import { GetApplicationGroupRequest } from "./GetApplicationGroup/req";
import { GetApplicationGroupResponse } from "./GetApplicationGroup/res";
import { ListApplicationGroupsRequest } from "./ListApplicationGroups/req";
import { ListApplicationGroupsResponse } from "./ListApplicationGroups/res";
import { DeleteApplicationGroupRequest } from "./DeleteApplicationGroup/req";
import { DeleteApplicationGroupResponse } from "./DeleteApplicationGroup/res";
import { DeployApplicationGroupRequest } from "./DeployApplicationGroup/req";
import { DeployApplicationGroupResponse } from "./DeployApplicationGroup/res";
import { ContinueDeployApplicationGroupRequest } from "./ContinueDeployApplicationGroup/req";
import { ContinueDeployApplicationGroupResponse } from "./ContinueDeployApplicationGroup/res";
import { CreatePatchBaselineRequest } from "./CreatePatchBaseline/req";
import { CreatePatchBaselineResponse } from "./CreatePatchBaseline/res";
import { GetPatchBaselineRequest } from "./GetPatchBaseline/req";
import { GetPatchBaselineResponse } from "./GetPatchBaseline/res";
import { UpdatePatchBaselineRequest } from "./UpdatePatchBaseline/req";
import { UpdatePatchBaselineResponse } from "./UpdatePatchBaseline/res";
import { RegisterDefaultPatchBaselineRequest } from "./RegisterDefaultPatchBaseline/req";
import { RegisterDefaultPatchBaselineResponse } from "./RegisterDefaultPatchBaseline/res";
import { ListPatchBaselinesRequest } from "./ListPatchBaselines/req";
import { ListPatchBaselinesResponse } from "./ListPatchBaselines/res";
import { DeletePatchBaselineRequest } from "./DeletePatchBaseline/req";
import { DeletePatchBaselineResponse } from "./DeletePatchBaseline/res";
import { ListInstancePatchStatesRequest } from "./ListInstancePatchStates/req";
import { ListInstancePatchStatesResponse } from "./ListInstancePatchStates/res";
import { ListInstancePatchesRequest } from "./ListInstancePatches/req";
import { ListInstancePatchesResponse } from "./ListInstancePatches/res";
import { GetServiceSettingsRequest } from "./GetServiceSettings/req";
import { GetServiceSettingsResponse } from "./GetServiceSettings/res";
import { SetServiceSettingsRequest } from "./SetServiceSettings/req";
import { SetServiceSettingsResponse } from "./SetServiceSettings/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { CreateOpsItemRequest } from "./CreateOpsItem/req";
import { CreateOpsItemResponse } from "./CreateOpsItem/res";
import { GetOpsItemRequest } from "./GetOpsItem/req";
import { GetOpsItemResponse } from "./GetOpsItem/res";
import { ListOpsItemsRequest } from "./ListOpsItems/req";
import { ListOpsItemsResponse } from "./ListOpsItems/res";
import { UpdateOpsItemRequest } from "./UpdateOpsItem/req";
import { UpdateOpsItemResponse } from "./UpdateOpsItem/res";
import { DescribeApplicationGroupBillRequest } from "./DescribeApplicationGroupBill/req";
import { DescribeApplicationGroupBillResponse } from "./DescribeApplicationGroupBill/res";

interface OOS {
    /**
     * 调用该API删除多个模版。
     */
    DeleteTemplates(query: DeleteTemplatesRequest): Promise<DeleteTemplatesResponse>;
    /**
     * 查询一个模版的多个版本对象。
     */
    ListTemplateVersions(query: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse>;
    /**
     * 创建一个模版。
     */
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    /**
     * 支持多种过滤方式。
     */
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    /**
     * 更新一个已经存在的模板。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 删除一个模版。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 获取一个模版，包括内容。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 校验一个模版是否合法。
     */
    ValidateTemplateContent(query: ValidateTemplateContentRequest): Promise<ValidateTemplateContentResponse>;
    /**
     * 获取模版中的高风险任务。
     */
    ListExecutionRiskyTasks(query: ListExecutionRiskyTasksRequest): Promise<ListExecutionRiskyTasksResponse>;
    /**
     * 取消执行。
     */
    CancelExecution(query: CancelExecutionRequest): Promise<CancelExecutionResponse>;
    /**
     * 删除执行。
     */
    DeleteExecutions(query: DeleteExecutionsRequest): Promise<DeleteExecutionsResponse>;
    /**
     * 获取模板执行所需要的Ram Policy。
     */
    GenerateExecutionPolicy(query: GenerateExecutionPolicyRequest): Promise<GenerateExecutionPolicyResponse>;
    /**
     * 获取一个执行所使用的模板，包括内容。
     */
    GetExecutionTemplate(query: GetExecutionTemplateRequest): Promise<GetExecutionTemplateResponse>;
    /**
     * 通知一个状态为等待中的执行接下来如何运行。
     */
    NotifyExecution(query: NotifyExecutionRequest): Promise<NotifyExecutionResponse>;
    /**
     * 查询执行，支持多种过滤方式。
     */
    ListExecutions(query: ListExecutionsRequest): Promise<ListExecutionsResponse>;
    /**
     * 获取执行的详细日志。
     */
    ListExecutionLogs(query: ListExecutionLogsRequest): Promise<ListExecutionLogsResponse>;
    /**
     * 启动一个执行。
     */
    StartExecution(query: StartExecutionRequest): Promise<StartExecutionResponse>;
    /**
     * 查询任务执行，支持多种过滤方式。
     */
    ListTaskExecutions(query: ListTaskExecutionsRequest): Promise<ListTaskExecutionsResponse>;
    /**
     * 事件触发器或告警触发器任务，可对该类执行发送消息体内容，消息体会使事件或告警任务产生一个新的子执行。
     */
    TriggerExecution(query: TriggerExecutionRequest): Promise<TriggerExecutionResponse>;
    /**
     * 更新未结束的执行。
     */
    UpdateExecution(query: UpdateExecutionRequest): Promise<UpdateExecutionResponse>;
    /**
     * 查看包含ECS实例的定时运维执行信息。
     */
    ListResourceExecutionStatus(query: ListResourceExecutionStatusRequest): Promise<ListResourceExecutionStatusResponse>;
    /**
     * 查询可用动作，包括原子动作和云产品动作。
     */
    ListActions(query: ListActionsRequest): Promise<ListActionsResponse>;
    /**
     * 创建标签资源关系，即可为资源创建用户标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 删除用户标签资源关系，即可为资源删除用户标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询可见的资源标签关系。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询已创建的标签。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 查询已创建的标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 修改云资源所属的资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 删除普通参数。
     */
    DeleteParameter(query: DeleteParameterRequest): Promise<DeleteParameterResponse>;
    /**
     * 获取一个普通参数或公共参数，包括参数值。
     */
    GetParameter(query: GetParameterRequest): Promise<GetParameterResponse>;
    /**
     * 查询普通参数和公共参数，支持多种查询。
     */
    ListParameters(query: ListParametersRequest): Promise<ListParametersResponse>;
    /**
     * 更新一个已存在的普通参数。
     */
    UpdateParameter(query: UpdateParameterRequest): Promise<UpdateParameterResponse>;
    /**
     * 创建一个普通参数。
     */
    CreateParameter(query: CreateParameterRequest): Promise<CreateParameterResponse>;
    /**
     * 查看普通参数的多个版本对象。
     */
    ListParameterVersions(query: ListParameterVersionsRequest): Promise<ListParameterVersionsResponse>;
    /**
     * 通过路径获取参数。
     */
    GetParametersByPath(query: GetParametersByPathRequest): Promise<GetParametersByPathResponse>;
    /**
     * 获取一个或多个参数的详细信息。
     */
    GetParameters(query: GetParametersRequest): Promise<GetParametersResponse>;
    /**
     * 删除一个加密参数。请确保在使用该接口前有操作kms DeleteSecret API的权限。
     */
    DeleteSecretParameter(query: DeleteSecretParameterRequest): Promise<DeleteSecretParameterResponse>;
    /**
     * 获取一个加密参数，包括参数值。请确保在使用该接口前有操作kms GetSecretValue API的权限。
     */
    GetSecretParameter(query: GetSecretParameterRequest): Promise<GetSecretParameterResponse>;
    /**
     * 查询普通参数，支持多种查询。
     */
    ListSecretParameters(query: ListSecretParametersRequest): Promise<ListSecretParametersResponse>;
    /**
     * 更新一个加密参数。请确保在使用该接口前有操作kms UpdateSecretValue API的权限。
     */
    UpdateSecretParameter(query: UpdateSecretParameterRequest): Promise<UpdateSecretParameterResponse>;
    /**
     * 创建一个加密参数。请确保在使用该接口前有操作kms CreateSecret API的权限。
     */
    CreateSecretParameter(query: CreateSecretParameterRequest): Promise<CreateSecretParameterResponse>;
    /**
     * 查询加密参数的多个版本对象。
     */
    ListSecretParameterVersions(query: ListSecretParameterVersionsRequest): Promise<ListSecretParameterVersionsResponse>;
    /**
     * 通过路径获取加密参数。请确保在使用该接口前有操作kms GetSecretValue API的权限。
     */
    GetSecretParametersByPath(query: GetSecretParametersByPathRequest): Promise<GetSecretParametersByPathResponse>;
    /**
     * 获取一个或多个加密参数的详细信息。请确保在使用该接口前有操作kms GetSecretValue API的权限。
     */
    GetSecretParameters(query: GetSecretParametersRequest): Promise<GetSecretParametersResponse>;
    /**
     * 获取配置清单的模式信息。
     */
    GetInventorySchema(query: GetInventorySchemaRequest): Promise<GetInventorySchemaResponse>;
    /**
     * 查询配置清单的详细信息或聚合信息。
     */
    SearchInventory(query: SearchInventoryRequest): Promise<SearchInventoryResponse>;
    /**
     * 查询一个实例下的配置清单记录。
     */
    ListInventoryEntries(query: ListInventoryEntriesRequest): Promise<ListInventoryEntriesResponse>;
    /**
     * 创建终态配置。
     */
    CreateStateConfiguration(query: CreateStateConfigurationRequest): Promise<CreateStateConfigurationResponse>;
    /**
     * 更新终态配置。
     */
    UpdateStateConfiguration(query: UpdateStateConfigurationRequest): Promise<UpdateStateConfigurationResponse>;
    /**
     * 查询终态配置。
     */
    ListStateConfigurations(query: ListStateConfigurationsRequest): Promise<ListStateConfigurationsResponse>;
    /**
     * 批量删除终态配置。
     */
    DeleteStateConfigurations(query: DeleteStateConfigurationsRequest): Promise<DeleteStateConfigurationsResponse>;
    /**
     * 创建一个应用。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    CreateApplication(query: CreateApplicationRequest): Promise<CreateApplicationResponse>;
    /**
     * 更新一个应用。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    UpdateApplication(query: UpdateApplicationRequest): Promise<UpdateApplicationResponse>;
    /**
     * 获取一个应用的详细信息。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    GetApplication(query: GetApplicationRequest): Promise<GetApplicationResponse>;
    /**
     * 查询应用列表。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    ListApplications(query: ListApplicationsRequest): Promise<ListApplicationsResponse>;
    /**
     * 删除一个应用。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    DeleteApplication(query: DeleteApplicationRequest): Promise<DeleteApplicationResponse>;
    /**
     * 创建一个应用分组。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    CreateApplicationGroup(query: CreateApplicationGroupRequest): Promise<CreateApplicationGroupResponse>;
    /**
     * 更新一个应用分组的信息。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    UpdateApplicationGroup(query: UpdateApplicationGroupRequest): Promise<UpdateApplicationGroupResponse>;
    /**
     * 获取一个应用分组的详细信息。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    GetApplicationGroup(query: GetApplicationGroupRequest): Promise<GetApplicationGroupResponse>;
    /**
     * 查询应用分组列表。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    ListApplicationGroups(query: ListApplicationGroupsRequest): Promise<ListApplicationGroupsResponse>;
    /**
     * 删除一个应用分组。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    DeleteApplicationGroup(query: DeleteApplicationGroupRequest): Promise<DeleteApplicationGroupResponse>;
    /**
     * 部署应用分组。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    DeployApplicationGroup(query: DeployApplicationGroupRequest): Promise<DeployApplicationGroupResponse>;
    /**
     * 当应用分组部署失败时，调用此接口继续部署应用分组。应用管理的服务地域仅支持杭州，请使用杭州的endpoint。
     */
    ContinueDeployApplicationGroup(query: ContinueDeployApplicationGroupRequest): Promise<ContinueDeployApplicationGroupResponse>;
    /**
     * 创建一个补丁基线。
     */
    CreatePatchBaseline(query: CreatePatchBaselineRequest): Promise<CreatePatchBaselineResponse>;
    /**
     * 获取一个补丁基线的详细信息。
     */
    GetPatchBaseline(query: GetPatchBaselineRequest): Promise<GetPatchBaselineResponse>;
    /**
     * 更新一个补丁基线。
     */
    UpdatePatchBaseline(query: UpdatePatchBaselineRequest): Promise<UpdatePatchBaselineResponse>;
    /**
     * 注册默认补丁基线。
     */
    RegisterDefaultPatchBaseline(query: RegisterDefaultPatchBaselineRequest): Promise<RegisterDefaultPatchBaselineResponse>;
    /**
     * 获取补丁基线列表。
     */
    ListPatchBaselines(query: ListPatchBaselinesRequest): Promise<ListPatchBaselinesResponse>;
    /**
     * 删除一个补丁基线。
     */
    DeletePatchBaseline(query: DeletePatchBaselineRequest): Promise<DeletePatchBaselineResponse>;
    /**
     * 获取实例补丁信息。
     */
    ListInstancePatchStates(query: ListInstancePatchStatesRequest): Promise<ListInstancePatchStatesResponse>;
    /**
     * 获取实例补丁信息。
     */
    ListInstancePatches(query: ListInstancePatchesRequest): Promise<ListInstancePatchesResponse>;
    /**
     * 获取投递功能的配置信息。
     */
    GetServiceSettings(query: GetServiceSettingsRequest): Promise<GetServiceSettingsResponse>;
    /**
     * 开启或关闭模板执行记录的投递功能，以及投递存储地点。
     */
    SetServiceSettings(query: SetServiceSettingsRequest): Promise<SetServiceSettingsResponse>;
    /**
     * 调用该API查询当前支持的地域情况。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 创建运维项。
     */
    CreateOpsItem(query: CreateOpsItemRequest): Promise<CreateOpsItemResponse>;
    /**
     * 获取运维项详情。
     */
    GetOpsItem(query: GetOpsItemRequest): Promise<GetOpsItemResponse>;
    /**
     * 查询运维项。
     */
    ListOpsItems(query: ListOpsItemsRequest): Promise<ListOpsItemsResponse>;
    /**
     * 修改运维项。
     */
    UpdateOpsItem(query: UpdateOpsItemRequest): Promise<UpdateOpsItemResponse>;
    /**
     * 查询应用分组资源成本。
     */
    DescribeApplicationGroupBill(query: DescribeApplicationGroupBillRequest): Promise<DescribeApplicationGroupBillResponse>;
}
export default OOS;
