import { GrantRoleToUsersRequest } from "./GrantRoleToUsers/req";
import { GrantRoleToUsersResponse } from "./GrantRoleToUsers/res";
import { AddMembersRequest } from "./AddMembers/req";
import { AddMembersResponse } from "./AddMembers/res";
import { ListWorkspaceQueuesRequest } from "./ListWorkspaceQueues/req";
import { ListWorkspaceQueuesResponse } from "./ListWorkspaceQueues/res";
import { ListWorkspacesRequest } from "./ListWorkspaces/req";
import { ListWorkspacesResponse } from "./ListWorkspaces/res";
import { ListReleaseVersionsRequest } from "./ListReleaseVersions/req";
import { ListReleaseVersionsResponse } from "./ListReleaseVersions/res";
import { ListSessionClustersRequest } from "./ListSessionClusters/req";
import { ListSessionClustersResponse } from "./ListSessionClusters/res";
import { ListJobRunsRequest } from "./ListJobRuns/req";
import { ListJobRunsResponse } from "./ListJobRuns/res";
import { GetJobRunRequest } from "./GetJobRun/req";
import { GetJobRunResponse } from "./GetJobRun/res";
import { StartJobRunRequest } from "./StartJobRun/req";
import { StartJobRunResponse } from "./StartJobRun/res";
import { CancelJobRunRequest } from "./CancelJobRun/req";
import { CancelJobRunResponse } from "./CancelJobRun/res";
import { GetSqlStatementRequest } from "./GetSqlStatement/req";
import { GetSqlStatementResponse } from "./GetSqlStatement/res";
import { CreateSqlStatementRequest } from "./CreateSqlStatement/req";
import { CreateSqlStatementResponse } from "./CreateSqlStatement/res";
import { TerminateSqlStatementRequest } from "./TerminateSqlStatement/req";
import { TerminateSqlStatementResponse } from "./TerminateSqlStatement/res";

interface EMR_SERVERLESS_SPARK {
    /**
     * 调用GrantRoleToUsers为用户授予指定角色权限。
     */
    GrantRoleToUsers(query: GrantRoleToUsersRequest): Promise<GrantRoleToUsersResponse>;
    /**
     * 调用AddMembers将RAM用户或RAM角色添加到工作空间作为新成员。
     */
    AddMembers(query: AddMembersRequest): Promise<AddMembersResponse>;
    /**
     * 查看工作空间队列列表
     */
    ListWorkspaceQueues(query: ListWorkspaceQueuesRequest): Promise<ListWorkspaceQueuesResponse>;
    /**
     * 调用ListWorkspaces获取工作空间列表。
     */
    ListWorkspaces(query: ListWorkspacesRequest): Promise<ListWorkspacesResponse>;
    /**
     * 获取发布版本列表
     */
    ListReleaseVersions(query: ListReleaseVersionsRequest): Promise<ListReleaseVersionsResponse>;
    /**
     * 查询run列表
     */
    ListSessionClusters(query: ListSessionClustersRequest): Promise<ListSessionClustersResponse>;
    /**
     * 调用ListJobRuns获取Spark任务列表。
     */
    ListJobRuns(query: ListJobRunsRequest): Promise<ListJobRunsResponse>;
    /**
     * 调用GetJobRun获取任务详情。
     */
    GetJobRun(query: GetJobRunRequest): Promise<GetJobRunResponse>;
    /**
     * 调用StartJobRun启动Spark任务。
     */
    StartJobRun(query: StartJobRunRequest): Promise<StartJobRunResponse>;
    /**
     * 调用CancelJobRun终止正在运行的Spark任务。
     */
    CancelJobRun(query: CancelJobRunRequest): Promise<CancelJobRunResponse>;
    /**
     * 获取Sql Statement状态
     */
    GetSqlStatement(query: GetSqlStatementRequest): Promise<GetSqlStatementResponse>;
    /**
     * 使用session运行SQL
     */
    CreateSqlStatement(query: CreateSqlStatementRequest): Promise<CreateSqlStatementResponse>;
    /**
     * 终止 session statement
     */
    TerminateSqlStatement(query: TerminateSqlStatementRequest): Promise<TerminateSqlStatementResponse>;
}
export default EMR_SERVERLESS_SPARK;
