import { ListTagKeysRequest } from "./ListTagKeys/req";
import { ListTagKeysResponse } from "./ListTagKeys/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListTagValuesRequest } from "./ListTagValues/req";
import { ListTagValuesResponse } from "./ListTagValues/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { CreateTagsRequest } from "./CreateTags/req";
import { CreateTagsResponse } from "./CreateTags/res";
import { DeleteTagRequest } from "./DeleteTag/req";
import { DeleteTagResponse } from "./DeleteTag/res";
import { OpenCreatedByRequest } from "./OpenCreatedBy/req";
import { OpenCreatedByResponse } from "./OpenCreatedBy/res";
import { CloseCreatedByRequest } from "./CloseCreatedBy/req";
import { CloseCreatedByResponse } from "./CloseCreatedBy/res";
import { CheckCreatedByEnabledRequest } from "./CheckCreatedByEnabled/req";
import { CheckCreatedByEnabledResponse } from "./CheckCreatedByEnabled/res";
import { ListResourcesByTagRequest } from "./ListResourcesByTag/req";
import { ListResourcesByTagResponse } from "./ListResourcesByTag/res";
import { ListConfigRulesForTargetRequest } from "./ListConfigRulesForTarget/req";
import { ListConfigRulesForTargetResponse } from "./ListConfigRulesForTarget/res";
import { DeletePolicyRequest } from "./DeletePolicy/req";
import { DeletePolicyResponse } from "./DeletePolicy/res";
import { CreatePolicyRequest } from "./CreatePolicy/req";
import { CreatePolicyResponse } from "./CreatePolicy/res";
import { GetEffectivePolicyRequest } from "./GetEffectivePolicy/req";
import { GetEffectivePolicyResponse } from "./GetEffectivePolicy/res";
import { GetConfigRuleReportRequest } from "./GetConfigRuleReport/req";
import { GetConfigRuleReportResponse } from "./GetConfigRuleReport/res";
import { GenerateConfigRuleReportRequest } from "./GenerateConfigRuleReport/req";
import { GenerateConfigRuleReportResponse } from "./GenerateConfigRuleReport/res";
import { ListPoliciesForTargetRequest } from "./ListPoliciesForTarget/req";
import { ListPoliciesForTargetResponse } from "./ListPoliciesForTarget/res";
import { ListTargetsForPolicyRequest } from "./ListTargetsForPolicy/req";
import { ListTargetsForPolicyResponse } from "./ListTargetsForPolicy/res";
import { ListPoliciesRequest } from "./ListPolicies/req";
import { ListPoliciesResponse } from "./ListPolicies/res";
import { GetPolicyRequest } from "./GetPolicy/req";
import { GetPolicyResponse } from "./GetPolicy/res";
import { DetachPolicyRequest } from "./DetachPolicy/req";
import { DetachPolicyResponse } from "./DetachPolicy/res";
import { ModifyPolicyRequest } from "./ModifyPolicy/req";
import { ModifyPolicyResponse } from "./ModifyPolicy/res";
import { GetPolicyEnableStatusRequest } from "./GetPolicyEnableStatus/req";
import { GetPolicyEnableStatusResponse } from "./GetPolicyEnableStatus/res";
import { AttachPolicyRequest } from "./AttachPolicy/req";
import { AttachPolicyResponse } from "./AttachPolicy/res";
import { DisablePolicyTypeRequest } from "./DisablePolicyType/req";
import { DisablePolicyTypeResponse } from "./DisablePolicyType/res";
import { EnablePolicyTypeRequest } from "./EnablePolicyType/req";
import { EnablePolicyTypeResponse } from "./EnablePolicyType/res";
import { ListSupportResourceTypesRequest } from "./ListSupportResourceTypes/req";
import { ListSupportResourceTypesResponse } from "./ListSupportResourceTypes/res";

interface TAG {
    /**
     * 查询标签键列表。
     */
    ListTagKeys(query: ListTagKeysRequest): Promise<ListTagKeysResponse>;
    /**
     * 查询多个云产品的多个云资源绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询指定标签键对应的标签值。
     */
    ListTagValues(query: ListTagValuesRequest): Promise<ListTagValuesResponse>;
    /**
     * 为指定的多个云产品的多个云资源统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 为指定的多个云产品的多个云资源统一解绑标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询支持标签的地域信息。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 创建预置标签。
     */
    CreateTags(query: CreateTagsRequest): Promise<CreateTagsResponse>;
    /**
     * 删除预置标签。
     */
    DeleteTag(query: DeleteTagRequest): Promise<DeleteTagResponse>;
    /**
     * 启用创建者标签。
     */
    OpenCreatedBy(query: OpenCreatedByRequest): Promise<OpenCreatedByResponse>;
    /**
     * 禁用创建者标签。
     */
    CloseCreatedBy(query: CloseCreatedByRequest): Promise<CloseCreatedByResponse>;
    /**
     * 校验创建者标签启用状态。
     */
    CheckCreatedByEnabled(query: CheckCreatedByEnabledRequest): Promise<CheckCreatedByEnabledResponse>;
    /**
     * 基于标签查询资源。
     */
    ListResourcesByTag(query: ListResourcesByTagRequest): Promise<ListResourcesByTagResponse>;
    /**
     * 查询目标节点的标签检测任务列表。
     */
    ListConfigRulesForTarget(query: ListConfigRulesForTargetRequest): Promise<ListConfigRulesForTargetResponse>;
    /**
     * 删除标签策略。
     */
    DeletePolicy(query: DeletePolicyRequest): Promise<DeletePolicyResponse>;
    /**
     * 创建标签策略。
     */
    CreatePolicy(query: CreatePolicyRequest): Promise<CreatePolicyResponse>;
    /**
     * 查询有效策略。
     */
    GetEffectivePolicy(query: GetEffectivePolicyRequest): Promise<GetEffectivePolicyResponse>;
    /**
     * 查询上一次生成的不合规资源检测报告的基本信息。
     */
    GetConfigRuleReport(query: GetConfigRuleReportRequest): Promise<GetConfigRuleReportResponse>;
    /**
     * 生成不合规资源检测报告。
     */
    GenerateConfigRuleReport(query: GenerateConfigRuleReportRequest): Promise<GenerateConfigRuleReportResponse>;
    /**
     * 查询目标节点绑定的标签策略列表。
     */
    ListPoliciesForTarget(query: ListPoliciesForTargetRequest): Promise<ListPoliciesForTargetResponse>;
    /**
     * 查询标签策略绑定的目标节点。
     */
    ListTargetsForPolicy(query: ListTargetsForPolicyRequest): Promise<ListTargetsForPolicyResponse>;
    /**
     * 查询标签策略列表。
     */
    ListPolicies(query: ListPoliciesRequest): Promise<ListPoliciesResponse>;
    /**
     * 查询标签策略详情。
     */
    GetPolicy(query: GetPolicyRequest): Promise<GetPolicyResponse>;
    /**
     * 解绑指定的标签策略。
     */
    DetachPolicy(query: DetachPolicyRequest): Promise<DetachPolicyResponse>;
    /**
     * 修改标签策略。
     */
    ModifyPolicy(query: ModifyPolicyRequest): Promise<ModifyPolicyResponse>;
    /**
     * 查询标签策略状态。
     */
    GetPolicyEnableStatus(query: GetPolicyEnableStatusRequest): Promise<GetPolicyEnableStatusResponse>;
    /**
     * 将标签策略绑定到目标节点。
     */
    AttachPolicy(query: AttachPolicyRequest): Promise<AttachPolicyResponse>;
    /**
     * 禁用管控策略。
     */
    DisablePolicyType(query: DisablePolicyTypeRequest): Promise<DisablePolicyTypeResponse>;
    /**
     * 启用标签策略。
     */
    EnablePolicyType(query: EnablePolicyTypeRequest): Promise<EnablePolicyTypeResponse>;
    /**
     * 查询标签支持的资源类型和标签能力项。
     */
    ListSupportResourceTypes(query: ListSupportResourceTypesRequest): Promise<ListSupportResourceTypesResponse>;
}
export default TAG;
