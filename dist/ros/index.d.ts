import { CreateChangeSetRequest } from "./CreateChangeSet/req";
import { CreateChangeSetResponse } from "./CreateChangeSet/res";
import { SetStackPolicyRequest } from "./SetStackPolicy/req";
import { SetStackPolicyResponse } from "./SetStackPolicy/res";
import { GetResourceTypeRequest } from "./GetResourceType/req";
import { GetResourceTypeResponse } from "./GetResourceType/res";
import { CancelUpdateStackRequest } from "./CancelUpdateStack/req";
import { CancelUpdateStackResponse } from "./CancelUpdateStack/res";
import { ListChangeSetsRequest } from "./ListChangeSets/req";
import { ListChangeSetsResponse } from "./ListChangeSets/res";
import { SignalResourceRequest } from "./SignalResource/req";
import { SignalResourceResponse } from "./SignalResource/res";
import { ExecuteChangeSetRequest } from "./ExecuteChangeSet/req";
import { ExecuteChangeSetResponse } from "./ExecuteChangeSet/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { ListStackEventsRequest } from "./ListStackEvents/req";
import { ListStackEventsResponse } from "./ListStackEvents/res";
import { GetResourceTypeTemplateRequest } from "./GetResourceTypeTemplate/req";
import { GetResourceTypeTemplateResponse } from "./GetResourceTypeTemplate/res";
import { GetChangeSetRequest } from "./GetChangeSet/req";
import { GetChangeSetResponse } from "./GetChangeSet/res";
import { GetStackResourceRequest } from "./GetStackResource/req";
import { GetStackResourceResponse } from "./GetStackResource/res";
import { ValidateTemplateRequest } from "./ValidateTemplate/req";
import { ValidateTemplateResponse } from "./ValidateTemplate/res";
import { ListResourceTypesRequest } from "./ListResourceTypes/req";
import { ListResourceTypesResponse } from "./ListResourceTypes/res";
import { GetStackPolicyRequest } from "./GetStackPolicy/req";
import { GetStackPolicyResponse } from "./GetStackPolicy/res";
import { DeleteChangeSetRequest } from "./DeleteChangeSet/req";
import { DeleteChangeSetResponse } from "./DeleteChangeSet/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ListStackResourcesRequest } from "./ListStackResources/req";
import { ListStackResourcesResponse } from "./ListStackResources/res";
import { ContinueCreateStackRequest } from "./ContinueCreateStack/req";
import { ContinueCreateStackResponse } from "./ContinueCreateStack/res";
import { GetTemplateEstimateCostRequest } from "./GetTemplateEstimateCost/req";
import { GetTemplateEstimateCostResponse } from "./GetTemplateEstimateCost/res";
import { CreateStackRequest } from "./CreateStack/req";
import { CreateStackResponse } from "./CreateStack/res";
import { GetStackRequest } from "./GetStack/req";
import { GetStackResponse } from "./GetStack/res";
import { DeleteStackRequest } from "./DeleteStack/req";
import { DeleteStackResponse } from "./DeleteStack/res";
import { UpdateStackRequest } from "./UpdateStack/req";
import { UpdateStackResponse } from "./UpdateStack/res";
import { ListStacksRequest } from "./ListStacks/req";
import { ListStacksResponse } from "./ListStacks/res";
import { PreviewStackRequest } from "./PreviewStack/req";
import { PreviewStackResponse } from "./PreviewStack/res";

interface ROS {
    /**
    * 创建更改集。
    */ CreateChangeSet(query: CreateChangeSetRequest): Promise<CreateChangeSetResponse>;
    /**
    * 设置资源栈策略。
    */ SetStackPolicy(query: SetStackPolicyRequest): Promise<SetStackPolicyResponse>;
    /**
    * 查询资源类型的详细信息。
    */ GetResourceType(query: GetResourceTypeRequest): Promise<GetResourceTypeResponse>;
    /**
    * 取消更新资源栈。
    */ CancelUpdateStack(query: CancelUpdateStackRequest): Promise<CancelUpdateStackResponse>;
    /**
    * 查询更改集列表。
    */ ListChangeSets(query: ListChangeSetsRequest): Promise<ListChangeSetsResponse>;
    /**
    * 发送信号。
    */ SignalResource(query: SignalResourceRequest): Promise<SignalResourceResponse>;
    /**
    * 执行更改集。
    */ ExecuteChangeSet(query: ExecuteChangeSetRequest): Promise<ExecuteChangeSetResponse>;
    /**
    * 查询资源栈、更改集的详细信息。
    */ GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
    * 查询资源栈及其下面资源的事件。
    */ ListStackEvents(query: ListStackEventsRequest): Promise<ListStackEventsResponse>;
    /**
    * 根据资源类型查询该资源的模板。
    */ GetResourceTypeTemplate(query: GetResourceTypeTemplateRequest): Promise<GetResourceTypeTemplateResponse>;
    /**
    * 查询更改集信息。
    */ GetChangeSet(query: GetChangeSetRequest): Promise<GetChangeSetResponse>;
    /**
    * 查询某个资源栈的资源列表。
    */ GetStackResource(query: GetStackResourceRequest): Promise<GetStackResourceResponse>;
    /**
    * 验证将要创建资源栈的模板。
    */ ValidateTemplate(query: ValidateTemplateRequest): Promise<ValidateTemplateResponse>;
    /**
    * 查询支持的资源类型列表。
    */ ListResourceTypes(query: ListResourceTypesRequest): Promise<ListResourceTypesResponse>;
    /**
    * 获取资源栈策略。
    */ GetStackPolicy(query: GetStackPolicyRequest): Promise<GetStackPolicyResponse>;
    /**
    * 删除更改集。
    */ DeleteChangeSet(query: DeleteChangeSetRequest): Promise<DeleteChangeSetResponse>;
    /**
    * 查询地域列表。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 查询某个资源栈的资源列表。
    */ ListStackResources(query: ListStackResourcesRequest): Promise<ListStackResourcesResponse>;
    /**
    * 在资源栈处于创建失败状态时可继续创建资源栈。
    */ ContinueCreateStack(query: ContinueCreateStackRequest): Promise<ContinueCreateStackResponse>;
    /**
    * 查询模板中要创建的资源的预估价格。
    */ GetTemplateEstimateCost(query: GetTemplateEstimateCostRequest): Promise<GetTemplateEstimateCostResponse>;
    /**
    * 创建资源栈。
    */ CreateStack(query: CreateStackRequest): Promise<CreateStackResponse>;
    /**
    * 查询资源栈信息。
    */ GetStack(query: GetStackRequest): Promise<GetStackResponse>;
    /**
    * 删除资源栈，并可以删除该资源栈下所有的资源。
    */ DeleteStack(query: DeleteStackRequest): Promise<DeleteStackResponse>;
    /**
    * 更新资源栈。
    */ UpdateStack(query: UpdateStackRequest): Promise<UpdateStackResponse>;
    /**
    * 查询资源栈列表。
    */ ListStacks(query: ListStacksRequest): Promise<ListStacksResponse>;
    /**
    * 预览指定模板将要创建的资源栈信息。
    */ PreviewStack(query: PreviewStackRequest): Promise<PreviewStackResponse>;
}
export default ROS;
