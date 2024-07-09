import { AuthorizeInstanceGroupRequest } from "./AuthorizeInstanceGroup/req";
import { AuthorizeInstanceGroupResponse } from "./AuthorizeInstanceGroup/res";
import { DeleteAppInstanceGroupRequest } from "./DeleteAppInstanceGroup/req";
import { DeleteAppInstanceGroupResponse } from "./DeleteAppInstanceGroup/res";
import { ListRegionsRequest } from "./ListRegions/req";
import { ListRegionsResponse } from "./ListRegions/res";
import { PageListAppInstanceGroupUserRequest } from "./PageListAppInstanceGroupUser/req";
import { PageListAppInstanceGroupUserResponse } from "./PageListAppInstanceGroupUser/res";
import { ListNodeInstanceTypeRequest } from "./ListNodeInstanceType/req";
import { ListNodeInstanceTypeResponse } from "./ListNodeInstanceType/res";
import { GetResourcePriceRequest } from "./GetResourcePrice/req";
import { GetResourcePriceResponse } from "./GetResourcePrice/res";
import { CreateAppInstanceGroupRequest } from "./CreateAppInstanceGroup/req";
import { CreateAppInstanceGroupResponse } from "./CreateAppInstanceGroup/res";
import { ListAppInstanceGroupRequest } from "./ListAppInstanceGroup/req";
import { ListAppInstanceGroupResponse } from "./ListAppInstanceGroup/res";
import { ModifyAppInstanceGroupAttributeRequest } from "./ModifyAppInstanceGroupAttribute/req";
import { ModifyAppInstanceGroupAttributeResponse } from "./ModifyAppInstanceGroupAttribute/res";
import { RenewAppInstanceGroupRequest } from "./RenewAppInstanceGroup/req";
import { RenewAppInstanceGroupResponse } from "./RenewAppInstanceGroup/res";
import { UpdateAppInstanceGroupImageRequest } from "./UpdateAppInstanceGroupImage/req";
import { UpdateAppInstanceGroupImageResponse } from "./UpdateAppInstanceGroupImage/res";
import { ModifyNodePoolAttributeRequest } from "./ModifyNodePoolAttribute/req";
import { ModifyNodePoolAttributeResponse } from "./ModifyNodePoolAttribute/res";
import { GetOtaTaskByTaskIdRequest } from "./GetOtaTaskByTaskId/req";
import { GetOtaTaskByTaskIdResponse } from "./GetOtaTaskByTaskId/res";
import { CancelOtaTaskRequest } from "./CancelOtaTask/req";
import { CancelOtaTaskResponse } from "./CancelOtaTask/res";
import { ListOtaTaskRequest } from "./ListOtaTask/req";
import { ListOtaTaskResponse } from "./ListOtaTask/res";
import { ApproveOtaTaskRequest } from "./ApproveOtaTask/req";
import { ApproveOtaTaskResponse } from "./ApproveOtaTask/res";
import { GetAppInstanceGroupRequest } from "./GetAppInstanceGroup/req";
import { GetAppInstanceGroupResponse } from "./GetAppInstanceGroup/res";
import { LogOffAllSessionsInAppInstanceGroupRequest } from "./LogOffAllSessionsInAppInstanceGroup/req";
import { LogOffAllSessionsInAppInstanceGroupResponse } from "./LogOffAllSessionsInAppInstanceGroup/res";
import { ModifyTenantConfigRequest } from "./ModifyTenantConfig/req";
import { ModifyTenantConfigResponse } from "./ModifyTenantConfig/res";
import { ListTenantConfigRequest } from "./ListTenantConfig/req";
import { ListTenantConfigResponse } from "./ListTenantConfig/res";
import { GetResourceRenewPriceRequest } from "./GetResourceRenewPrice/req";
import { GetResourceRenewPriceResponse } from "./GetResourceRenewPrice/res";
import { UnbindRequest } from "./Unbind/req";
import { UnbindResponse } from "./Unbind/res";
import { DeleteAppInstancesRequest } from "./DeleteAppInstances/req";
import { DeleteAppInstancesResponse } from "./DeleteAppInstances/res";
import { GetConnectionTicketRequest } from "./GetConnectionTicket/req";
import { GetConnectionTicketResponse } from "./GetConnectionTicket/res";
import { ListAppInstancesRequest } from "./ListAppInstances/req";
import { ListAppInstancesResponse } from "./ListAppInstances/res";
import { GetDebugAppInstanceRequest } from "./GetDebugAppInstance/req";
import { GetDebugAppInstanceResponse } from "./GetDebugAppInstance/res";
import { CreateImageFromAppInstanceGroupRequest } from "./CreateImageFromAppInstanceGroup/req";
import { CreateImageFromAppInstanceGroupResponse } from "./CreateImageFromAppInstanceGroup/res";
import { GetProjectPoliciesRequest } from "./GetProjectPolicies/req";
import { GetProjectPoliciesResponse } from "./GetProjectPolicies/res";
import { CreateAccessPageRequest } from "./CreateAccessPage/req";
import { CreateAccessPageResponse } from "./CreateAccessPage/res";
import { GetAccessPageSessionRequest } from "./GetAccessPageSession/req";
import { GetAccessPageSessionResponse } from "./GetAccessPageSession/res";
import { DeleteProjectRequest } from "./DeleteProject/req";
import { DeleteProjectResponse } from "./DeleteProject/res";
import { AccessPageSetAclRequest } from "./AccessPageSetAcl/req";
import { AccessPageSetAclResponse } from "./AccessPageSetAcl/res";
import { AccessPageGetAclRequest } from "./AccessPageGetAcl/req";
import { AccessPageGetAclResponse } from "./AccessPageGetAcl/res";
import { RefreshAccessUrlRequest } from "./RefreshAccessUrl/req";
import { RefreshAccessUrlResponse } from "./RefreshAccessUrl/res";
import { DeleteAccessPageRequest } from "./DeleteAccessPage/req";
import { DeleteAccessPageResponse } from "./DeleteAccessPage/res";
import { ModifyProjectPolicyRequest } from "./ModifyProjectPolicy/req";
import { ModifyProjectPolicyResponse } from "./ModifyProjectPolicy/res";
import { UpdateAccessPageStateRequest } from "./UpdateAccessPageState/req";
import { UpdateAccessPageStateResponse } from "./UpdateAccessPageState/res";
import { ListAccessPagesRequest } from "./ListAccessPages/req";
import { ListAccessPagesResponse } from "./ListAccessPages/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { ListSessionPackagesRequest } from "./ListSessionPackages/req";
import { ListSessionPackagesResponse } from "./ListSessionPackages/res";
import { BuySessionPackageRequest } from "./BuySessionPackage/req";
import { BuySessionPackageResponse } from "./BuySessionPackage/res";
import { ListProjectsRequest } from "./ListProjects/req";
import { ListProjectsResponse } from "./ListProjects/res";
import { AskSessionPackagePriceRequest } from "./AskSessionPackagePrice/req";
import { AskSessionPackagePriceResponse } from "./AskSessionPackagePrice/res";
import { MigrateSessionPackageRequest } from "./MigrateSessionPackage/req";
import { MigrateSessionPackageResponse } from "./MigrateSessionPackage/res";
import { AskSessionPackageRenewPriceRequest } from "./AskSessionPackageRenewPrice/req";
import { AskSessionPackageRenewPriceResponse } from "./AskSessionPackageRenewPrice/res";
import { RenewSessionPackageRequest } from "./RenewSessionPackage/req";
import { RenewSessionPackageResponse } from "./RenewSessionPackage/res";

interface APPSTREAM_CENTER {
    /**
     * 为交付组添加或移除分配用户。只有添加到分配用户的用户可访问云应用。
     */
    AuthorizeInstanceGroup(query: AuthorizeInstanceGroupRequest): Promise<AuthorizeInstanceGroupResponse>;
    /**
     * 删除"资源型-按量付费"形式的交付组。
     */
    DeleteAppInstanceGroup(query: DeleteAppInstanceGroupRequest): Promise<DeleteAppInstanceGroupResponse>;
    /**
     * 查询无影云应用支持的地域。
     */
    ListRegions(query: ListRegionsRequest): Promise<ListRegionsResponse>;
    /**
     * 分页查询交付组中已添加的分配用户。
     */
    PageListAppInstanceGroupUser(query: PageListAppInstanceGroupUserRequest): Promise<PageListAppInstanceGroupUserResponse>;
    /**
     * 查询创建交付组时可选购的资源规格。
     */
    ListNodeInstanceType(query: ListNodeInstanceTypeRequest): Promise<ListNodeInstanceTypeResponse>;
    /**
     * 查询资源的价格信息。
     */
    GetResourcePrice(query: GetResourcePriceRequest): Promise<GetResourcePriceResponse>;
    /**
     * 创建交付组。
     */
    CreateAppInstanceGroup(query: CreateAppInstanceGroupRequest): Promise<CreateAppInstanceGroupResponse>;
    /**
     * 查询多个交付组详细信息，即不指定特定的交付组，而是查询所有满足条件的交付组的详细信息。
     */
    ListAppInstanceGroup(query: ListAppInstanceGroupRequest): Promise<ListAppInstanceGroupResponse>;
    /**
     * 修改交付组的通用策略，包括并发会话数、会话断连保留时长等。
     */
    ModifyAppInstanceGroupAttribute(query: ModifyAppInstanceGroupAttributeRequest): Promise<ModifyAppInstanceGroupAttributeResponse>;
    /**
     * 为交付组续费。
     */
    RenewAppInstanceGroup(query: RenewAppInstanceGroupRequest): Promise<RenewAppInstanceGroupResponse>;
    /**
     * 更新交付组的镜像。
     */
    UpdateAppInstanceGroupImage(query: UpdateAppInstanceGroupImageRequest): Promise<UpdateAppInstanceGroupImageResponse>;
    /**
     * 修改交付组的弹性模式，包括固定数量（不使用弹性扩缩容）、定时扩缩容和自动扩缩容。
     */
    ModifyNodePoolAttribute(query: ModifyNodePoolAttributeRequest): Promise<ModifyNodePoolAttributeResponse>;
    /**
     * 查询OTA升级任务明细，包括可升级版本、版本说明等。
     */
    GetOtaTaskByTaskId(query: GetOtaTaskByTaskIdRequest): Promise<GetOtaTaskByTaskIdResponse>;
    /**
     * 取消OTA升级任务。
     */
    CancelOtaTask(query: CancelOtaTaskRequest): Promise<CancelOtaTaskResponse>;
    /**
     * 查询OTA升级历史记录。
     */
    ListOtaTask(query: ListOtaTaskRequest): Promise<ListOtaTaskResponse>;
    /**
     * 设置OTA升级的执行时间。
     */
    ApproveOtaTask(query: ApproveOtaTaskRequest): Promise<ApproveOtaTaskResponse>;
    /**
     * 查询指定交付组详细信息。
     */
    GetAppInstanceGroup(query: GetAppInstanceGroupRequest): Promise<GetAppInstanceGroupResponse>;
    /**
     * 注销已开启定时扩缩容策略的按量付费交付组下所有会话。
     */
    LogOffAllSessionsInAppInstanceGroup(query: LogOffAllSessionsInAppInstanceGroupRequest): Promise<LogOffAllSessionsInAppInstanceGroupResponse>;
    /**
     * 修改管理员账号配置信息，例如是否开启资源到期提醒。
     */
    ModifyTenantConfig(query: ModifyTenantConfigRequest): Promise<ModifyTenantConfigResponse>;
    /**
     * 查询管理员账号配置信息，例如是否已开启资源到期提醒。
     */
    ListTenantConfig(query: ListTenantConfigRequest): Promise<ListTenantConfigResponse>;
    /**
     * 查询无影云应用资源的续费价格。
     */
    GetResourceRenewPrice(query: GetResourceRenewPriceRequest): Promise<GetResourceRenewPriceResponse>;
    /**
     * 解绑用户和会话。
     */
    Unbind(query: UnbindRequest): Promise<UnbindResponse>;
    /**
     * 删除指定应用实例。
     */
    DeleteAppInstances(query: DeleteAppInstancesRequest): Promise<DeleteAppInstancesResponse>;
    /**
     * 获取云应用连接凭证。
     */
    GetConnectionTicket(query: GetConnectionTicketRequest): Promise<GetConnectionTicketResponse>;
    /**
     * 查询交付组内会话实例的详细信息，包括实例ID、实例状态、创建时间、更新时间、会话状态、主网卡公网IP等。
     */
    ListAppInstances(query: ListAppInstancesRequest): Promise<ListAppInstancesResponse>;
    /**
     * 获取调试应用实例信息。
     */
    GetDebugAppInstance(query: GetDebugAppInstanceRequest): Promise<GetDebugAppInstanceResponse>;
    /**
     * 通过调试交付组创建新镜像。
     */
    CreateImageFromAppInstanceGroup(query: CreateImageFromAppInstanceGroupRequest): Promise<CreateImageFromAppInstanceGroupResponse>;
    /**
     * 获取项目的策略配置。
     */
    GetProjectPolicies(query: GetProjectPoliciesRequest): Promise<GetProjectPoliciesResponse>;
    /**
     * 创建访问页面。
     */
    CreateAccessPage(query: CreateAccessPageRequest): Promise<CreateAccessPageResponse>;
    /**
     * 获取访问页的会话凭据，连接至访问页面
     */
    GetAccessPageSession(query: GetAccessPageSessionRequest): Promise<GetAccessPageSessionResponse>;
    /**
     * 删除项目。
     */
    DeleteProject(query: DeleteProjectRequest): Promise<DeleteProjectResponse>;
    /**
     * 访问页面的访问控制管理。
     */
    AccessPageSetAcl(query: AccessPageSetAclRequest): Promise<AccessPageSetAclResponse>;
    /**
     * 获取访问管理页配置。
     */
    AccessPageGetAcl(query: AccessPageGetAclRequest): Promise<AccessPageGetAclResponse>;
    /**
     * 重新生成访问页面的超链接
     */
    RefreshAccessUrl(query: RefreshAccessUrlRequest): Promise<RefreshAccessUrlResponse>;
    /**
     * 删除已经发布的访问页面以及访问页相关的资源。
     */
    DeleteAccessPage(query: DeleteAccessPageRequest): Promise<DeleteAccessPageResponse>;
    /**
     * 修改项目策略。
     */
    ModifyProjectPolicy(query: ModifyProjectPolicyRequest): Promise<ModifyProjectPolicyResponse>;
    /**
     * 更新访问页面状态。
     */
    UpdateAccessPageState(query: UpdateAccessPageStateRequest): Promise<UpdateAccessPageStateResponse>;
    /**
     * 获取访问页面列表。
     */
    ListAccessPages(query: ListAccessPagesRequest): Promise<ListAccessPagesResponse>;
    /**
     * 创建一个项目实例，项目实例作用如下
     * 1. 云上环境、会话包和交付组配置的组合体，用户关联这几个实例
     * 2. 作为访问页面的主要输入。
     */
    CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * 获取项目的会话包列表。
     */
    ListSessionPackages(query: ListSessionPackagesRequest): Promise<ListSessionPackagesResponse>;
    /**
     * 购买云Flow会话包。
     */
    BuySessionPackage(query: BuySessionPackageRequest): Promise<BuySessionPackageResponse>;
    /**
     * 获取项目列表
     */
    ListProjects(query: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * 云Flow会话包收费查询。
     */
    AskSessionPackagePrice(query: AskSessionPackagePriceRequest): Promise<AskSessionPackagePriceResponse>;
    /**
     * 支持会话包转移功能，将已付费会话包从 源项目 迁移到 目标项目，源项目和目标项目不可同时为空。
     */
    MigrateSessionPackage(query: MigrateSessionPackageRequest): Promise<MigrateSessionPackageResponse>;
    /**
     * 查询会话包续费价格
     */
    AskSessionPackageRenewPrice(query: AskSessionPackageRenewPriceRequest): Promise<AskSessionPackageRenewPriceResponse>;
    /**
     * 为已购买未超期的会话包续费
     */
    RenewSessionPackage(query: RenewSessionPackageRequest): Promise<RenewSessionPackageResponse>;
}
export default APPSTREAM_CENTER;
