import { GetVersionRequest } from "./GetVersion/req";
import { GetVersionResponse } from "./GetVersion/res";
import { GroupInvokeFlowRequest } from "./GroupInvokeFlow/req";
import { GroupInvokeFlowResponse } from "./GroupInvokeFlow/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { EnableFlowRequest } from "./EnableFlow/req";
import { EnableFlowResponse } from "./EnableFlow/res";
import { InvokeFlowRequest } from "./InvokeFlow/req";
import { InvokeFlowResponse } from "./InvokeFlow/res";
import { DisableFlowRequest } from "./DisableFlow/req";
import { DisableFlowResponse } from "./DisableFlow/res";
import { ListTemplatesRequest } from "./ListTemplates/req";
import { ListTemplatesResponse } from "./ListTemplates/res";
import { CloneFlowRequest } from "./CloneFlow/req";
import { CloneFlowResponse } from "./CloneFlow/res";
import { ListVersionsRequest } from "./ListVersions/req";
import { ListVersionsResponse } from "./ListVersions/res";
import { CreateFlowRequest } from "./CreateFlow/req";
import { CreateFlowResponse } from "./CreateFlow/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { ListFlowsRequest } from "./ListFlows/req";
import { ListFlowsResponse } from "./ListFlows/res";
import { DeleteFlowRequest } from "./DeleteFlow/req";
import { DeleteFlowResponse } from "./DeleteFlow/res";
import { UpdateFlowRequest } from "./UpdateFlow/req";
import { UpdateFlowResponse } from "./UpdateFlow/res";
import { GetFlowRequest } from "./GetFlow/req";
import { GetFlowResponse } from "./GetFlow/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";

interface COMPOSER {
    /**
     * 查询某个工作流的某个特定版本信息。
     */
    GetVersion(query: GetVersionRequest): Promise<GetVersionResponse>;
    /**
     * 触发一个工作流多次执行。
     */
    GroupInvokeFlow(query: GroupInvokeFlowRequest): Promise<GroupInvokeFlowResponse>;
    /**
     * 查询编排模板详情。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 获取指定标签的资源列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 启用一个工作流。
     */
    EnableFlow(query: EnableFlowRequest): Promise<EnableFlowResponse>;
    /**
     * 运行一次工作流。
     */
    InvokeFlow(query: InvokeFlowRequest): Promise<InvokeFlowResponse>;
    /**
     * 禁用一个工作流，禁用后，工作流将不会运行。
     */
    DisableFlow(query: DisableFlowRequest): Promise<DisableFlowResponse>;
    /**
     * 列举当前用户可见的模板。
     */
    ListTemplates(query: ListTemplatesRequest): Promise<ListTemplatesResponse>;
    /**
     * 克隆一个工作流。
     */
    CloneFlow(query: CloneFlowRequest): Promise<CloneFlowResponse>;
    /**
     * 查询某个工作流所有版本列表。
     */
    ListVersions(query: ListVersionsRequest): Promise<ListVersionsResponse>;
    /**
     * 创建一个工作流。
     */
    CreateFlow(query: CreateFlowRequest): Promise<CreateFlowResponse>;
    /**
     * 删除一个或多个资源的标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 查询当前地域下所有工作流列表。
     */
    ListFlows(query: ListFlowsRequest): Promise<ListFlowsResponse>;
    /**
     * 删除一个工作流。
     */
    DeleteFlow(query: DeleteFlowRequest): Promise<DeleteFlowResponse>;
    /**
     * 更新一个工作流的信息
     */
    UpdateFlow(query: UpdateFlowRequest): Promise<UpdateFlowResponse>;
    /**
     * 查询一个工作流的具体信息。
     */
    GetFlow(query: GetFlowRequest): Promise<GetFlowResponse>;
    /**
     * 为一个或多个资源打标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
}
export default COMPOSER;
