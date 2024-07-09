import { PreviewStackRequest } from "./PreviewStack/req";
import { PreviewStackResponse } from "./PreviewStack/res";
import { CreateStackRequest } from "./CreateStack/req";
import { CreateStackResponse } from "./CreateStack/res";
import { ContinueCreateStackRequest } from "./ContinueCreateStack/req";
import { ContinueCreateStackResponse } from "./ContinueCreateStack/res";
import { SetDeletionProtectionRequest } from "./SetDeletionProtection/req";
import { SetDeletionProtectionResponse } from "./SetDeletionProtection/res";
import { UpdateStackRequest } from "./UpdateStack/req";
import { UpdateStackResponse } from "./UpdateStack/res";
import { CancelUpdateStackRequest } from "./CancelUpdateStack/req";
import { CancelUpdateStackResponse } from "./CancelUpdateStack/res";
import { GetStackRequest } from "./GetStack/req";
import { GetStackResponse } from "./GetStack/res";
import { ListStacksRequest } from "./ListStacks/req";
import { ListStacksResponse } from "./ListStacks/res";
import { ListStackEventsRequest } from "./ListStackEvents/req";
import { ListStackEventsResponse } from "./ListStackEvents/res";
import { ListStackOperationRisksRequest } from "./ListStackOperationRisks/req";
import { ListStackOperationRisksResponse } from "./ListStackOperationRisks/res";
import { DeleteStackRequest } from "./DeleteStack/req";
import { DeleteStackResponse } from "./DeleteStack/res";
import { CancelStackOperationRequest } from "./CancelStackOperation/req";
import { CancelStackOperationResponse } from "./CancelStackOperation/res";
import { GetResourceTypeTemplateRequest } from "./GetResourceTypeTemplate/req";
import { GetResourceTypeTemplateResponse } from "./GetResourceTypeTemplate/res";
import { ListStackResourcesRequest } from "./ListStackResources/req";
import { ListStackResourcesResponse } from "./ListStackResources/res";
import { GetStackResourceRequest } from "./GetStackResource/req";
import { GetStackResourceResponse } from "./GetStackResource/res";
import { GetResourceTypeRequest } from "./GetResourceType/req";
import { GetResourceTypeResponse } from "./GetResourceType/res";
import { ListResourceTypesRequest } from "./ListResourceTypes/req";
import { ListResourceTypesResponse } from "./ListResourceTypes/res";
import { MoveResourceGroupRequest } from "./MoveResourceGroup/req";
import { MoveResourceGroupResponse } from "./MoveResourceGroup/res";
import { CreateTemplateScratchRequest } from "./CreateTemplateScratch/req";
import { CreateTemplateScratchResponse } from "./CreateTemplateScratch/res";
import { UpdateTemplateScratchRequest } from "./UpdateTemplateScratch/req";
import { UpdateTemplateScratchResponse } from "./UpdateTemplateScratch/res";
import { ListTemplateScratchesRequest } from "./ListTemplateScratches/req";
import { ListTemplateScratchesResponse } from "./ListTemplateScratches/res";
import { GetTemplateScratchRequest } from "./GetTemplateScratch/req";
import { GetTemplateScratchResponse } from "./GetTemplateScratch/res";
import { DeleteTemplateScratchRequest } from "./DeleteTemplateScratch/req";
import { DeleteTemplateScratchResponse } from "./DeleteTemplateScratch/res";
import { GenerateTemplateByScratchRequest } from "./GenerateTemplateByScratch/req";
import { GenerateTemplateByScratchResponse } from "./GenerateTemplateByScratch/res";
import { GenerateTemplatePolicyRequest } from "./GenerateTemplatePolicy/req";
import { GenerateTemplatePolicyResponse } from "./GenerateTemplatePolicy/res";
import { CreateTemplateRequest } from "./CreateTemplate/req";
import { CreateTemplateResponse } from "./CreateTemplate/res";
import { ValidateTemplateRequest } from "./ValidateTemplate/req";
import { ValidateTemplateResponse } from "./ValidateTemplate/res";
import { UpdateTemplateRequest } from "./UpdateTemplate/req";
import { UpdateTemplateResponse } from "./UpdateTemplate/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { GetTemplateEstimateCostRequest } from "./GetTemplateEstimateCost/req";
import { GetTemplateEstimateCostResponse } from "./GetTemplateEstimateCost/res";
import { GetTemplateSummaryRequest } from "./GetTemplateSummary/req";
import { GetTemplateSummaryResponse } from "./GetTemplateSummary/res";
import { GetTemplateParameterConstraintsRequest } from "./GetTemplateParameterConstraints/req";
import { GetTemplateParameterConstraintsResponse } from "./GetTemplateParameterConstraints/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { ListTemplateVersionsRequest } from "./ListTemplateVersions/req";
import { ListTemplateVersionsResponse } from "./ListTemplateVersions/res";
import { SetTemplatePermissionRequest } from "./SetTemplatePermission/req";
import { SetTemplatePermissionResponse } from "./SetTemplatePermission/res";
import { DeleteTemplateRequest } from "./DeleteTemplate/req";
import { DeleteTemplateResponse } from "./DeleteTemplate/res";
import { SetStackPolicyRequest } from "./SetStackPolicy/req";
import { SetStackPolicyResponse } from "./SetStackPolicy/res";
import { GetStackPolicyRequest } from "./GetStackPolicy/req";
import { GetStackPolicyResponse } from "./GetStackPolicy/res";
import { CreateChangeSetRequest } from "./CreateChangeSet/req";
import { CreateChangeSetResponse } from "./CreateChangeSet/res";
import { ExecuteChangeSetRequest } from "./ExecuteChangeSet/req";
import { ExecuteChangeSetResponse } from "./ExecuteChangeSet/res";
import { GetChangeSetRequest } from "./GetChangeSet/req";
import { GetChangeSetResponse } from "./GetChangeSet/res";
import { ListChangeSetsRequest } from "./ListChangeSets/req";
import { ListChangeSetsResponse } from "./ListChangeSets/res";
import { DeleteChangeSetRequest } from "./DeleteChangeSet/req";
import { DeleteChangeSetResponse } from "./DeleteChangeSet/res";
import { CreateStackGroupRequest } from "./CreateStackGroup/req";
import { CreateStackGroupResponse } from "./CreateStackGroup/res";
import { UpdateStackGroupRequest } from "./UpdateStackGroup/req";
import { UpdateStackGroupResponse } from "./UpdateStackGroup/res";
import { GetStackGroupRequest } from "./GetStackGroup/req";
import { GetStackGroupResponse } from "./GetStackGroup/res";
import { ListStackGroupsRequest } from "./ListStackGroups/req";
import { ListStackGroupsResponse } from "./ListStackGroups/res";
import { GetStackGroupOperationRequest } from "./GetStackGroupOperation/req";
import { GetStackGroupOperationResponse } from "./GetStackGroupOperation/res";
import { ListStackGroupOperationsRequest } from "./ListStackGroupOperations/req";
import { ListStackGroupOperationsResponse } from "./ListStackGroupOperations/res";
import { ListStackGroupOperationResultsRequest } from "./ListStackGroupOperationResults/req";
import { ListStackGroupOperationResultsResponse } from "./ListStackGroupOperationResults/res";
import { StopStackGroupOperationRequest } from "./StopStackGroupOperation/req";
import { StopStackGroupOperationResponse } from "./StopStackGroupOperation/res";
import { CreateStackInstancesRequest } from "./CreateStackInstances/req";
import { CreateStackInstancesResponse } from "./CreateStackInstances/res";
import { UpdateStackInstancesRequest } from "./UpdateStackInstances/req";
import { UpdateStackInstancesResponse } from "./UpdateStackInstances/res";
import { GetStackInstanceRequest } from "./GetStackInstance/req";
import { GetStackInstanceResponse } from "./GetStackInstance/res";
import { ListStackInstancesRequest } from "./ListStackInstances/req";
import { ListStackInstancesResponse } from "./ListStackInstances/res";
import { DeleteStackInstancesRequest } from "./DeleteStackInstances/req";
import { DeleteStackInstancesResponse } from "./DeleteStackInstances/res";
import { DeleteStackGroupRequest } from "./DeleteStackGroup/req";
import { DeleteStackGroupResponse } from "./DeleteStackGroup/res";
import { DetectStackResourceDriftRequest } from "./DetectStackResourceDrift/req";
import { DetectStackResourceDriftResponse } from "./DetectStackResourceDrift/res";
import { DetectStackDriftRequest } from "./DetectStackDrift/req";
import { DetectStackDriftResponse } from "./DetectStackDrift/res";
import { DetectStackGroupDriftRequest } from "./DetectStackGroupDrift/req";
import { DetectStackGroupDriftResponse } from "./DetectStackGroupDrift/res";
import { GetStackDriftDetectionStatusRequest } from "./GetStackDriftDetectionStatus/req";
import { GetStackDriftDetectionStatusResponse } from "./GetStackDriftDetectionStatus/res";
import { ListStackResourceDriftsRequest } from "./ListStackResourceDrifts/req";
import { ListStackResourceDriftsResponse } from "./ListStackResourceDrifts/res";
import { UpdateStackTemplateByResourcesRequest } from "./UpdateStackTemplateByResources/req";
import { UpdateStackTemplateByResourcesResponse } from "./UpdateStackTemplateByResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { SignalResourceRequest } from "./SignalResource/req";
import { SignalResourceResponse } from "./SignalResource/res";
import { GetServiceProvisionsRequest } from "./GetServiceProvisions/req";
import { GetServiceProvisionsResponse } from "./GetServiceProvisions/res";
import { GetFeatureDetailsRequest } from "./GetFeatureDetails/req";
import { GetFeatureDetailsResponse } from "./GetFeatureDetails/res";
import { CreateDiagnosticRequest } from "./CreateDiagnostic/req";
import { CreateDiagnosticResponse } from "./CreateDiagnostic/res";
import { DeleteDiagnosticRequest } from "./DeleteDiagnostic/req";
import { DeleteDiagnosticResponse } from "./DeleteDiagnostic/res";
import { ListDiagnosticsRequest } from "./ListDiagnostics/req";
import { ListDiagnosticsResponse } from "./ListDiagnostics/res";
import { GetDiagnosticRequest } from "./GetDiagnostic/req";
import { GetDiagnosticResponse } from "./GetDiagnostic/res";
import { SetResourceTypeRequest } from "./SetResourceType/req";
import { SetResourceTypeResponse } from "./SetResourceType/res";
import { ListResourceTypeRegistrationsRequest } from "./ListResourceTypeRegistrations/req";
import { ListResourceTypeRegistrationsResponse } from "./ListResourceTypeRegistrations/res";
import { RegisterResourceTypeRequest } from "./RegisterResourceType/req";
import { RegisterResourceTypeResponse } from "./RegisterResourceType/res";
import { DeregisterResourceTypeRequest } from "./DeregisterResourceType/req";
import { DeregisterResourceTypeResponse } from "./DeregisterResourceType/res";
import { ListResourceTypeVersionsRequest } from "./ListResourceTypeVersions/req";
import { ListResourceTypeVersionsResponse } from "./ListResourceTypeVersions/res";

interface ROS {
    /**
     * 预览指定模板将要创建的资源栈信息，验证模板资源的准确性。
     */
    PreviewStack(query: PreviewStackRequest): Promise<PreviewStackResponse>;
    /**
     * 使用资源编排模板创建资源栈，完成一组资源的创建。
     */
    CreateStack(query: CreateStackRequest): Promise<CreateStackResponse>;
    /**
     * 资源栈创建失败后，继续创建资源栈。
     */
    ContinueCreateStack(query: ContinueCreateStackRequest): Promise<ContinueCreateStackResponse>;
    /**
     * 修改资源栈的删除保护属性。
     */
    SetDeletionProtection(query: SetDeletionProtectionRequest): Promise<SetDeletionProtectionResponse>;
    /**
     * 更新已创建资源栈的资源信息。
     */
    UpdateStack(query: UpdateStackRequest): Promise<UpdateStackResponse>;
    /**
     * 当您的资源栈正处于更新中或创建中且操作尚未完成，您可以调用该接口取消更新资源栈操作。
     */
    CancelUpdateStack(query: CancelUpdateStackRequest): Promise<CancelUpdateStackResponse>;
    /**
     * 查询资源栈信息。
     */
    GetStack(query: GetStackRequest): Promise<GetStackResponse>;
    /**
     * 查询资源栈列表。
     */
    ListStacks(query: ListStacksRequest): Promise<ListStacksResponse>;
    /**
     * 查询资源栈及栈内资源的事件。
     */
    ListStackEvents(query: ListStackEventsRequest): Promise<ListStackEventsResponse>;
    /**
     * 检测进行资源栈操作可能涉及的风险，并返回风险原因或缺失项。
     */
    ListStackOperationRisks(query: ListStackOperationRisksRequest): Promise<ListStackOperationRisksResponse>;
    /**
     * 删除指定资源栈，可以选择是否保留资源。
     */
    DeleteStack(query: DeleteStackRequest): Promise<DeleteStackResponse>;
    /**
     * 取消资源栈操作。
     */
    CancelStackOperation(query: CancelStackOperationRequest): Promise<CancelStackOperationResponse>;
    /**
     * 根据资源类型生成一个示例模板。
     */
    GetResourceTypeTemplate(query: GetResourceTypeTemplateRequest): Promise<GetResourceTypeTemplateResponse>;
    /**
     * 查询指定资源栈的资源列表。
     */
    ListStackResources(query: ListStackResourcesRequest): Promise<ListStackResourcesResponse>;
    /**
     * 查询某个资源栈的资源。
     */
    GetStackResource(query: GetStackResourceRequest): Promise<GetStackResourceResponse>;
    /**
     * 通过指定资源类型查询详细信息。
     */
    GetResourceType(query: GetResourceTypeRequest): Promise<GetResourceTypeResponse>;
    /**
     * 查询支持的资源类型列表。
     */
    ListResourceTypes(query: ListResourceTypesRequest): Promise<ListResourceTypesResponse>;
    /**
     * 调用MoveResourceGroup接口修改资源所属的资源组。
     */
    MoveResourceGroup(query: MoveResourceGroupRequest): Promise<MoveResourceGroupResponse>;
    /**
     * 创建资源场景。
     */
    CreateTemplateScratch(query: CreateTemplateScratchRequest): Promise<CreateTemplateScratchResponse>;
    /**
     * 更新资源场景。
     */
    UpdateTemplateScratch(query: UpdateTemplateScratchRequest): Promise<UpdateTemplateScratchResponse>;
    /**
     * 查询资源场景列表。
     */
    ListTemplateScratches(query: ListTemplateScratchesRequest): Promise<ListTemplateScratchesResponse>;
    /**
     * 获取资源场景详情。
     */
    GetTemplateScratch(query: GetTemplateScratchRequest): Promise<GetTemplateScratchResponse>;
    /**
     * 删除资源场景。
     */
    DeleteTemplateScratch(query: DeleteTemplateScratchRequest): Promise<DeleteTemplateScratchResponse>;
    /**
     * 为资源场景生成模板。
     */
    GenerateTemplateByScratch(query: GenerateTemplateByScratchRequest): Promise<GenerateTemplateByScratchResponse>;
    /**
     * 通过指定模板生成模板所需的策略信息。
     */
    GenerateTemplatePolicy(query: GenerateTemplatePolicyRequest): Promise<GenerateTemplatePolicyResponse>;
    /**
     * 创建自定义模板。
     */
    CreateTemplate(query: CreateTemplateRequest): Promise<CreateTemplateResponse>;
    /**
     * 通过指定模板地址或模板内容验证将要创建资源栈的模板。
     */
    ValidateTemplate(query: ValidateTemplateRequest): Promise<ValidateTemplateResponse>;
    /**
     * 通过指定模板地址或模板详情更新模板。
     */
    UpdateTemplate(query: UpdateTemplateRequest): Promise<UpdateTemplateResponse>;
    /**
     * 指定资源栈、资源栈组、更改集、自定义模板其中任意信息获取模板详情。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 通过指定模板和模板参数查询创建资源栈的预估价格。
     */
    GetTemplateEstimateCost(query: GetTemplateEstimateCostRequest): Promise<GetTemplateEstimateCostResponse>;
    /**
     * 通过指定模板、资源栈、资源栈组、更改集其中任意信息查询模板资源详情。
     */
    GetTemplateSummary(query: GetTemplateSummaryRequest): Promise<GetTemplateSummaryResponse>;
    /**
     * 调用GetTemplateParameterConstraints接口查询模板参数的取值。
     */
    GetTemplateParameterConstraints(query: GetTemplateParameterConstraintsRequest): Promise<GetTemplateParameterConstraintsResponse>;
    /**
     * 查询私有与共享的模板列表。
     */
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    /**
     * 通过查询指定模板获取模板的版本列表详情。
     */
    ListTemplateVersions(query: ListTemplateVersionsRequest): Promise<ListTemplateVersionsResponse>;
    /**
     * 为指定模板设置共享或取消共享。
     */
    SetTemplatePermission(query: SetTemplatePermissionRequest): Promise<SetTemplatePermissionResponse>;
    /**
     * 删除指定模板，如果已将模板共享给其他阿里云账号，需要取消共享后才能删除。
     */
    DeleteTemplate(query: DeleteTemplateRequest): Promise<DeleteTemplateResponse>;
    /**
     * 为指定资源栈配置资源策略。
     */
    SetStackPolicy(query: SetStackPolicyRequest): Promise<SetStackPolicyResponse>;
    /**
     * 在一个阿里云地域下查询指定资源栈策略详情。
     */
    GetStackPolicy(query: GetStackPolicyRequest): Promise<GetStackPolicyResponse>;
    /**
     * 为资源栈创建更改集，您可以在执行更改之前查看对应更改内容。
     */
    CreateChangeSet(query: CreateChangeSetRequest): Promise<CreateChangeSetResponse>;
    /**
     * 对资源栈执行更改集，资源变更即可生效。
     */
    ExecuteChangeSet(query: ExecuteChangeSetRequest): Promise<ExecuteChangeSetResponse>;
    /**
     * 查询指定更改集信息，可以选择是否获取对应模板详情。
     */
    GetChangeSet(query: GetChangeSetRequest): Promise<GetChangeSetResponse>;
    /**
     * 查询已创建的更改集列表详情。
     */
    ListChangeSets(query: ListChangeSetsRequest): Promise<ListChangeSetsResponse>;
    /**
     * 为已创建更改集的资源栈删除更改集。
     */
    DeleteChangeSet(query: DeleteChangeSetRequest): Promise<DeleteChangeSetResponse>;
    /**
     * 使用资源编排模板创建资源栈组，通过资源栈组，可以在多个阿里云账号中跨地域创建资源栈。
     */
    CreateStackGroup(query: CreateStackGroupRequest): Promise<CreateStackGroupResponse>;
    /**
     * 更新已创建的资源栈组。
     */
    UpdateStackGroup(query: UpdateStackGroupRequest): Promise<UpdateStackGroupResponse>;
    /**
     * 在一个阿里云地域下根据资源栈组名称查询资源栈组详情。
     */
    GetStackGroup(query: GetStackGroupRequest): Promise<GetStackGroupResponse>;
    /**
     * 在一个阿里云地域下查询资源栈组列表详情。
     */
    ListStackGroups(query: ListStackGroupsRequest): Promise<ListStackGroupsResponse>;
    /**
     * 在一个阿里云地域下查询指定资源栈组的操作详情。
     */
    GetStackGroupOperation(query: GetStackGroupOperationRequest): Promise<GetStackGroupOperationResponse>;
    /**
     * 在一个阿里云地域下查询资源栈组操作列表详情。
     */
    ListStackGroupOperations(query: ListStackGroupOperationsRequest): Promise<ListStackGroupOperationsResponse>;
    /**
     * 在一个阿里云地域下查询指定资源栈组操作的结果列表详情。
     */
    ListStackGroupOperationResults(query: ListStackGroupOperationResultsRequest): Promise<ListStackGroupOperationResultsResponse>;
    /**
     * 停止资源栈组正在进行的操作。
     */
    StopStackGroupOperation(query: StopStackGroupOperationRequest): Promise<StopStackGroupOperationResponse>;
    /**
     * 为一个或多个账号在指定地域下创建资源栈实例。
     */
    CreateStackInstances(query: CreateStackInstancesRequest): Promise<CreateStackInstancesResponse>;
    /**
     * 为一个或多个账号在指定地域下更新资源栈实例。
     */
    UpdateStackInstances(query: UpdateStackInstancesRequest): Promise<UpdateStackInstancesResponse>;
    /**
     * 查询指定资源栈组关联的资源栈实例详情。
     */
    GetStackInstance(query: GetStackInstanceRequest): Promise<GetStackInstanceResponse>;
    /**
     * 在一个阿里云地域下查询指定资源栈组关联的资源栈实例列表详情。
     */
    ListStackInstances(query: ListStackInstancesRequest): Promise<ListStackInstancesResponse>;
    /**
     * 为一个或多个账号在指定地域下删除资源栈实例，可以选择是否保留资源。
     */
    DeleteStackInstances(query: DeleteStackInstancesRequest): Promise<DeleteStackInstancesResponse>;
    /**
     * 删除已创建的资源栈组。
     */
    DeleteStackGroup(query: DeleteStackGroupRequest): Promise<DeleteStackGroupResponse>;
    /**
     * 对资源进行偏差检测，以便确定资源是否已偏离其预期的模板配置。
     */
    DetectStackResourceDrift(query: DetectStackResourceDriftRequest): Promise<DetectStackResourceDriftResponse>;
    /**
     * 对资源栈进行偏差检测，可以限定具体资源，以便确定资源栈是否已偏离其预期的模板配置。
     */
    DetectStackDrift(query: DetectStackDriftRequest): Promise<DetectStackDriftResponse>;
    /**
     * 对资源栈组进行偏差检测，以便确定资源栈组是否已偏离其预期的模板配置。
     */
    DetectStackGroupDrift(query: DetectStackGroupDriftRequest): Promise<DetectStackGroupDriftResponse>;
    /**
     * 在一个阿里云地域下根据偏差检测ID查询偏差检查状态。
     */
    GetStackDriftDetectionStatus(query: GetStackDriftDetectionStatusRequest): Promise<GetStackDriftDetectionStatusResponse>;
    /**
     * 在一个阿里云地域下查询资源栈的资源偏差详情。
     */
    ListStackResourceDrifts(query: ListStackResourceDriftsRequest): Promise<ListStackResourceDriftsResponse>;
    /**
     * 通过执行偏差检测，消除资源栈的偏差。
     */
    UpdateStackTemplateByResources(query: UpdateStackTemplateByResourcesRequest): Promise<UpdateStackTemplateByResourcesResponse>;
    /**
     * 指定一个或多个资源创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 在一个阿里云地域下查询模板或资源栈中一个或多个资源已经绑定的标签。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 在一个阿里云地域下查询资源栈或模板的标签键。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 在一个阿里云地域下查询模板或资源栈中指定标签键对应的标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 为指定的一个或多个资源统一解绑并删除标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询可选地域列表。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 您可以调用本接口对指定资源栈的资源发送信号，与ALIYUN::ROS::WaitCondition配合使用以控制资源栈的执行流程。
     */
    SignalResource(query: SignalResourceRequest): Promise<SignalResourceResponse>;
    /**
     * 查询服务开通状态和服务角色信息。
     */
    GetServiceProvisions(query: GetServiceProvisionsRequest): Promise<GetServiceProvisionsResponse>;
    /**
     * 查询ROS支持的特定功能详情。
     */
    GetFeatureDetails(query: GetFeatureDetailsRequest): Promise<GetFeatureDetailsResponse>;
    /**
     * 创建诊断任务进行一键诊断。
     */
    CreateDiagnostic(query: CreateDiagnosticRequest): Promise<CreateDiagnosticResponse>;
    /**
     * 删除诊断记录。
     */
    DeleteDiagnostic(query: DeleteDiagnosticRequest): Promise<DeleteDiagnosticResponse>;
    /**
     * 查询诊断列表。
     */
    ListDiagnostics(query: ListDiagnosticsRequest): Promise<ListDiagnosticsResponse>;
    /**
     * 指定诊断报告ID，获取诊断的详细信息。
     */
    GetDiagnostic(query: GetDiagnosticRequest): Promise<GetDiagnosticResponse>;
    /**
     * 修改资源类型或资源类型某个版本的相关描述。
     */
    SetResourceType(query: SetResourceTypeRequest): Promise<SetResourceTypeResponse>;
    /**
     * 查询资源注册记录列表。
     */
    ListResourceTypeRegistrations(query: ListResourceTypeRegistrationsRequest): Promise<ListResourceTypeRegistrationsResponse>;
    /**
     * 创建新的资源类型，或为已有资源类型增加一个新版本。
     */
    RegisterResourceType(query: RegisterResourceTypeRequest): Promise<RegisterResourceTypeResponse>;
    /**
     * 删除资源类型，或删除已有资源类型的某个版本。
     */
    DeregisterResourceType(query: DeregisterResourceTypeRequest): Promise<DeregisterResourceTypeResponse>;
    /**
     * 查询资源类型版本列表，包括用户自己创建的和ROS提供的资源类型。
     */
    ListResourceTypeVersions(query: ListResourceTypeVersionsRequest): Promise<ListResourceTypeVersionsResponse>;
}
export default ROS;
