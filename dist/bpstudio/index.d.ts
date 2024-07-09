import { AppFailBackRequest } from "./AppFailBack/req";
import { AppFailBackResponse } from "./AppFailBack/res";
import { AppFailOverRequest } from "./AppFailOver/req";
import { AppFailOverResponse } from "./AppFailOver/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { CreateApplicationRequest } from "./CreateApplication/req";
import { CreateApplicationResponse } from "./CreateApplication/res";
import { DeleteApplicationRequest } from "./DeleteApplication/req";
import { DeleteApplicationResponse } from "./DeleteApplication/res";
import { DeployApplicationRequest } from "./DeployApplication/req";
import { DeployApplicationResponse } from "./DeployApplication/res";
import { ExecuteOperationASyncRequest } from "./ExecuteOperationASync/req";
import { ExecuteOperationASyncResponse } from "./ExecuteOperationASync/res";
import { ExecuteOperationSyncRequest } from "./ExecuteOperationSync/req";
import { ExecuteOperationSyncResponse } from "./ExecuteOperationSync/res";
import { GetApplicationRequest } from "./GetApplication/req";
import { GetApplicationResponse } from "./GetApplication/res";
import { GetExecuteOperationResultRequest } from "./GetExecuteOperationResult/req";
import { GetExecuteOperationResultResponse } from "./GetExecuteOperationResult/res";
import { GetFoTaskStatusRequest } from "./GetFoTaskStatus/req";
import { GetFoTaskStatusResponse } from "./GetFoTaskStatus/res";
import { GetPotentialFailZonesRequest } from "./GetPotentialFailZones/req";
import { GetPotentialFailZonesResponse } from "./GetPotentialFailZones/res";
import { GetTemplateRequest } from "./GetTemplate/req";
import { GetTemplateResponse } from "./GetTemplate/res";
import { GetTokenRequest } from "./GetToken/req";
import { GetTokenResponse } from "./GetToken/res";
import { InitAppFailOverRequest } from "./InitAppFailOver/req";
import { InitAppFailOverResponse } from "./InitAppFailOver/res";
import { ListApplicationRequest } from "./ListApplication/req";
import { ListApplicationResponse } from "./ListApplication/res";
import { ListFoCreatedAppsRequest } from "./ListFoCreatedApps/req";
import { ListFoCreatedAppsResponse } from "./ListFoCreatedApps/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ListTemplateRequest } from "./ListTemplate/req";
import { ListTemplateResponse } from "./ListTemplate/res";
import { ReleaseApplicationRequest } from "./ReleaseApplication/req";
import { ReleaseApplicationResponse } from "./ReleaseApplication/res";
import { ValidateApplicationRequest } from "./ValidateApplication/req";
import { ValidateApplicationResponse } from "./ValidateApplication/res";
import { ValuateApplicationRequest } from "./ValuateApplication/req";
import { ValuateApplicationResponse } from "./ValuateApplication/res";
import { ValuateTemplateRequest } from "./ValuateTemplate/req";
import { ValuateTemplateResponse } from "./ValuateTemplate/res";

interface BPSTUDIO {
    /**
     * 将容灾集切回至主可用区。
     */
    AppFailBack(query: AppFailBackRequest): Promise<AppFailBackResponse>;
    /**
     * 将容灾集切换至支持的可用区。
     */
    AppFailOver(query: AppFailOverRequest): Promise<AppFailOverResponse>;
    /**
     * 该接口可以将CADT创建的应用或模板从一个资源组转移到另一个资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 请确保在使用该接口前，已充分了解阿里云产品的收费方式和价格。基于CADT上官方模板或私有模板创建新的应用。
     */
    CreateApplication(query: CreateApplicationRequest): Promise<CreateApplicationResponse>;
    /**
     * 删除应用。
     */
    DeleteApplication(query: DeleteApplicationRequest): Promise<DeleteApplicationResponse>;
    /**
     * 计费成功后，创建资源。
     */
    DeployApplication(query: DeployApplicationRequest): Promise<DeployApplicationResponse>;
    /**
     * 异步执行产品操作功能。
     */
    ExecuteOperationASync(query: ExecuteOperationASyncRequest): Promise<ExecuteOperationASyncResponse>;
    /**
     * 同步执行产品操作功能。
     */
    ExecuteOperationSync(query: ExecuteOperationSyncRequest): Promise<ExecuteOperationSyncResponse>;
    /**
     * 获取指定应用的基本信息、校验结果、计费结果、部署结果。
     */
    GetApplication(query: GetApplicationRequest): Promise<GetApplicationResponse>;
    /**
     * 异步获取操作结果。
     */
    GetExecuteOperationResult(query: GetExecuteOperationResultRequest): Promise<GetExecuteOperationResultResponse>;
    /**
     * 获取指定容灾任务（TaskId）的状态。
     */
    GetFoTaskStatus(query: GetFoTaskStatusRequest): Promise<GetFoTaskStatusResponse>;
    /**
     * 获取指定容灾服务可切换的可用区列表。
     */
    GetPotentialFailZones(query: GetPotentialFailZonesRequest): Promise<GetPotentialFailZonesResponse>;
    /**
     * 获取模板图片及架构图相关信息。
     */
    GetTemplate(query: GetTemplateRequest): Promise<GetTemplateResponse>;
    /**
     * 获取读取架构图的临时授权，有效期30分钟。
     */
    GetToken(query: GetTokenRequest): Promise<GetTokenResponse>;
    /**
     * 应用容灾切换准备，初始化容灾切换任务。
     */
    InitAppFailOver(query: InitAppFailOverRequest): Promise<InitAppFailOverResponse>;
    /**
     * 该接口提供当前用户下所有应用的列表。其中可选参数keyword定义应用名中包含的关键字。
     */
    ListApplication(query: ListApplicationRequest): Promise<ListApplicationResponse>;
    /**
     * 接口查询当前账户下所有容灾服务计划。
     */
    ListFoCreatedApps(query: ListFoCreatedAppsRequest): Promise<ListFoCreatedAppsResponse>;
    /**
     * 该接口用于查询应用或模板的标签。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 获取模板列表，包括模板名称、架构图地址、架构图序列化文件地址等。
     */
    ListTemplate(query: ListTemplateRequest): Promise<ListTemplateResponse>;
    /**
     * 该接口释放应用的资源。
     */
    ReleaseApplication(query: ReleaseApplicationRequest): Promise<ReleaseApplicationResponse>;
    /**
     * 对应用下的资源输入的合法性进行校验，异步执行，校验结果调用GetApplication获取。
     */
    ValidateApplication(query: ValidateApplicationRequest): Promise<ValidateApplicationResponse>;
    /**
     * 对应用下的资源进行询价，通过GetApplication获取询价结果。
     */
    ValuateApplication(query: ValuateApplicationRequest): Promise<ValuateApplicationResponse>;
    /**
     * 查询模板价格。
     */
    ValuateTemplate(query: ValuateTemplateRequest): Promise<ValuateTemplateResponse>;
}
export default BPSTUDIO;
