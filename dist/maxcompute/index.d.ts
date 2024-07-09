import { ListQuotasRequest } from "./ListQuotas/req";
import { ListQuotasResponse } from "./ListQuotas/res";
import { GetQuotaRequest } from "./GetQuota/req";
import { GetQuotaResponse } from "./GetQuota/res";
import { UpdateQuotaRequest } from "./UpdateQuota/req";
import { UpdateQuotaResponse } from "./UpdateQuota/res";
import { CreateProjectRequest } from "./CreateProject/req";
import { CreateProjectResponse } from "./CreateProject/res";
import { ListUsersByRoleRequest } from "./ListUsersByRole/req";
import { ListUsersByRoleResponse } from "./ListUsersByRole/res";
import { CreateQuotaScheduleRequest } from "./CreateQuotaSchedule/req";
import { CreateQuotaScheduleResponse } from "./CreateQuotaSchedule/res";
import { ListUsersRequest } from "./ListUsers/req";
import { ListUsersResponse } from "./ListUsers/res";
import { CreateRoleRequest } from "./CreateRole/req";
import { CreateRoleResponse } from "./CreateRole/res";
import { GetRoleAclOnObjectRequest } from "./GetRoleAclOnObject/req";
import { GetRoleAclOnObjectResponse } from "./GetRoleAclOnObject/res";
import { ListPackagesRequest } from "./ListPackages/req";
import { ListPackagesResponse } from "./ListPackages/res";
import { GetRolePolicyRequest } from "./GetRolePolicy/req";
import { GetRolePolicyResponse } from "./GetRolePolicy/res";
import { CreatePackageRequest } from "./CreatePackage/req";
import { CreatePackageResponse } from "./CreatePackage/res";
import { GetPackageRequest } from "./GetPackage/req";
import { GetPackageResponse } from "./GetPackage/res";
import { UpdatePackageRequest } from "./UpdatePackage/req";
import { UpdatePackageResponse } from "./UpdatePackage/res";
import { ListRolesRequest } from "./ListRoles/req";
import { ListRolesResponse } from "./ListRoles/res";
import { ListTablesRequest } from "./ListTables/req";
import { ListTablesResponse } from "./ListTables/res";
import { UpdateProjectIpWhiteListRequest } from "./UpdateProjectIpWhiteList/req";
import { UpdateProjectIpWhiteListResponse } from "./UpdateProjectIpWhiteList/res";
import { ListResourcesRequest } from "./ListResources/req";
import { ListResourcesResponse } from "./ListResources/res";
import { ListFunctionsRequest } from "./ListFunctions/req";
import { ListFunctionsResponse } from "./ListFunctions/res";
import { ListQuotasPlansRequest } from "./ListQuotasPlans/req";
import { ListQuotasPlansResponse } from "./ListQuotasPlans/res";
import { DeleteQuotaPlanRequest } from "./DeleteQuotaPlan/req";
import { DeleteQuotaPlanResponse } from "./DeleteQuotaPlan/res";
import { GetQuotaScheduleRequest } from "./GetQuotaSchedule/req";
import { GetQuotaScheduleResponse } from "./GetQuotaSchedule/res";
import { UpdateQuotaScheduleRequest } from "./UpdateQuotaSchedule/req";
import { UpdateQuotaScheduleResponse } from "./UpdateQuotaSchedule/res";
import { CreateQuotaPlanRequest } from "./CreateQuotaPlan/req";
import { CreateQuotaPlanResponse } from "./CreateQuotaPlan/res";
import { GetTrustedProjectsRequest } from "./GetTrustedProjects/req";
import { GetTrustedProjectsResponse } from "./GetTrustedProjects/res";
import { UpdateQuotaPlanRequest } from "./UpdateQuotaPlan/req";
import { UpdateQuotaPlanResponse } from "./UpdateQuotaPlan/res";
import { GetQuotaPlanRequest } from "./GetQuotaPlan/req";
import { GetQuotaPlanResponse } from "./GetQuotaPlan/res";
import { GetProjectRequest } from "./GetProject/req";
import { GetProjectResponse } from "./GetProject/res";
import { ListProjectsRequest } from "./ListProjects/req";
import { ListProjectsResponse } from "./ListProjects/res";
import { ListProjectUsersRequest } from "./ListProjectUsers/req";
import { ListProjectUsersResponse } from "./ListProjectUsers/res";
import { GetRoleAclRequest } from "./GetRoleAcl/req";
import { GetRoleAclResponse } from "./GetRoleAcl/res";
import { GetTableInfoRequest } from "./GetTableInfo/req";
import { GetTableInfoResponse } from "./GetTableInfo/res";
import { KillJobsRequest } from "./KillJobs/req";
import { KillJobsResponse } from "./KillJobs/res";
import { ListJobInfosRequest } from "./ListJobInfos/req";
import { ListJobInfosResponse } from "./ListJobInfos/res";
import { GetJobResourceUsageRequest } from "./GetJobResourceUsage/req";
import { GetJobResourceUsageResponse } from "./GetJobResourceUsage/res";
import { GetRunningJobsRequest } from "./GetRunningJobs/req";
import { GetRunningJobsResponse } from "./GetRunningJobs/res";

interface MAXCOMPUTE {
    /**
     * 获取Quota列表。
     */
    ListQuotas(query: ListQuotasRequest): Promise<ListQuotasResponse>;
    /**
     * 获取指定一级Quota组信息。
     */
    GetQuota(query: GetQuotaRequest): Promise<GetQuotaResponse>;
    /**
     * 更新MaxCompute配额信息。
     */
    UpdateQuota(query: UpdateQuotaRequest): Promise<UpdateQuotaResponse>;
    /**
     * 创建MaxCompute项目。
     */
    CreateProject(query: CreateProjectRequest): Promise<CreateProjectResponse>;
    /**
     * 获取绑定某项目级角色的用户列表。
     */
    ListUsersByRole(query: ListUsersByRoleRequest): Promise<ListUsersByRoleResponse>;
    /**
     * 添加Quota时间计划。
     */
    CreateQuotaSchedule(query: CreateQuotaScheduleRequest): Promise<CreateQuotaScheduleResponse>;
    /**
     * 获取租户下的所有用户列表。
     */
    ListUsers(query: ListUsersRequest): Promise<ListUsersResponse>;
    /**
     * 创建MaxCompute项目级角色。
     */
    CreateRole(query: CreateRoleRequest): Promise<CreateRoleResponse>;
    /**
     * 获取项目级角色对某对象的ACL授权信息。
     */
    GetRoleAclOnObject(query: GetRoleAclOnObjectRequest): Promise<GetRoleAclOnObjectResponse>;
    /**
     * 获取MaxCompute项目下的Package列表。
     */
    ListPackages(query: ListPackagesRequest): Promise<ListPackagesResponse>;
    /**
     * 获取项目级角色Policy授权内容。
     */
    GetRolePolicy(query: GetRolePolicyRequest): Promise<GetRolePolicyResponse>;
    /**
     * 通过调用该接口创建package。
     */
    CreatePackage(query: CreatePackageRequest): Promise<CreatePackageResponse>;
    /**
     * 获取package信息。
     */
    GetPackage(query: GetPackageRequest): Promise<GetPackageResponse>;
    /**
     * 更新Package内的对象及允许安装的项目列表。
     */
    UpdatePackage(query: UpdatePackageRequest): Promise<UpdatePackageResponse>;
    /**
     * 获取MaxCompute项目级角色列表。
     */
    ListRoles(query: ListRolesRequest): Promise<ListRolesResponse>;
    /**
     * 获取MaxCompute项目内的表列表。
     */
    ListTables(query: ListTablesRequest): Promise<ListTablesResponse>;
    /**
     * 修改MaxCompute项目IP白名单。
     */
    UpdateProjectIpWhiteList(query: UpdateProjectIpWhiteListRequest): Promise<UpdateProjectIpWhiteListResponse>;
    /**
     * 获取MaxCompute项目内的资源列表。
     */
    ListResources(query: ListResourcesRequest): Promise<ListResourcesResponse>;
    /**
     * 获取MaxCompute函数列表。
     */
    ListFunctions(query: ListFunctionsRequest): Promise<ListFunctionsResponse>;
    /**
     * 获取Quota计划列表。
     */
    ListQuotasPlans(query: ListQuotasPlansRequest): Promise<ListQuotasPlansResponse>;
    /**
     * 删除Quota计划。
     */
    DeleteQuotaPlan(query: DeleteQuotaPlanRequest): Promise<DeleteQuotaPlanResponse>;
    /**
     * 获取Quota时间计划信息。
     */
    GetQuotaSchedule(query: GetQuotaScheduleRequest): Promise<GetQuotaScheduleResponse>;
    /**
     * 更新Quota时间计划信息。
     */
    UpdateQuotaSchedule(query: UpdateQuotaScheduleRequest): Promise<UpdateQuotaScheduleResponse>;
    /**
     * 新增Quota计划。
     */
    CreateQuotaPlan(query: CreateQuotaPlanRequest): Promise<CreateQuotaPlanResponse>;
    /**
     * 获取当前项目的TrustedProject（受信任项目）列表。
     */
    GetTrustedProjects(query: GetTrustedProjectsRequest): Promise<GetTrustedProjectsResponse>;
    /**
     * 更新Quota计划。
     */
    UpdateQuotaPlan(query: UpdateQuotaPlanRequest): Promise<UpdateQuotaPlanResponse>;
    /**
     * 获取Quota计划信息。
     */
    GetQuotaPlan(query: GetQuotaPlanRequest): Promise<GetQuotaPlanResponse>;
    /**
     * 查询MaxCompute项目的基本信息。
     */
    GetProject(query: GetProjectRequest): Promise<GetProjectResponse>;
    /**
     * 获取MaxCompute项目列表。
     */
    ListProjects(query: ListProjectsRequest): Promise<ListProjectsResponse>;
    /**
     * 获取项目用户列表。
     */
    ListProjectUsers(query: ListProjectUsersRequest): Promise<ListProjectUsersResponse>;
    /**
     * 获取项目级角色ACL授权信息。
     */
    GetRoleAcl(query: GetRoleAclRequest): Promise<GetRoleAclResponse>;
    /**
     * 获取表信息
     */
    GetTableInfo(query: GetTableInfoRequest): Promise<GetTableInfoResponse>;
    /**
     * 终止正在运行的作业。
     */
    KillJobs(query: KillJobsRequest): Promise<KillJobsResponse>;
    /**
     * 查看作业列表
     */
    ListJobInfos(query: ListJobInfosRequest): Promise<ListJobInfosResponse>;
    /**
     * 指定时间范围内，针对已结束的全部作业进行统计，以“天”为级别展示作业执行者级别的资源使用总量。
     */
    GetJobResourceUsage(query: GetJobResourceUsageRequest): Promise<GetJobResourceUsageResponse>;
    /**
     * 指定时间范围内，所有仍处于“运行中”的作业的运行态数据展示。
     */
    GetRunningJobs(query: GetRunningJobsRequest): Promise<GetRunningJobsResponse>;
}
export default MAXCOMPUTE;
