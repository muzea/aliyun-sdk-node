import { CutOverReplicationJobRequest } from "./CutOverReplicationJob/req";
import { CutOverReplicationJobResponse } from "./CutOverReplicationJob/res";
import { DeleteReplicationJobRequest } from "./DeleteReplicationJob/req";
import { DeleteReplicationJobResponse } from "./DeleteReplicationJob/res";
import { CreateReplicationJobRequest } from "./CreateReplicationJob/req";
import { CreateReplicationJobResponse } from "./CreateReplicationJob/res";
import { DeleteSourceServerRequest } from "./DeleteSourceServer/req";
import { DeleteSourceServerResponse } from "./DeleteSourceServer/res";
import { DescribeReplicationJobsRequest } from "./DescribeReplicationJobs/req";
import { DescribeReplicationJobsResponse } from "./DescribeReplicationJobs/res";
import { DescribeSourceServersRequest } from "./DescribeSourceServers/req";
import { DescribeSourceServersResponse } from "./DescribeSourceServers/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { ModifySourceServerAttributeRequest } from "./ModifySourceServerAttribute/req";
import { ModifySourceServerAttributeResponse } from "./ModifySourceServerAttribute/res";
import { StartReplicationJobRequest } from "./StartReplicationJob/req";
import { StartReplicationJobResponse } from "./StartReplicationJob/res";
import { ModifyReplicationJobAttributeRequest } from "./ModifyReplicationJobAttribute/req";
import { ModifyReplicationJobAttributeResponse } from "./ModifyReplicationJobAttribute/res";
import { StopReplicationJobRequest } from "./StopReplicationJob/req";
import { StopReplicationJobResponse } from "./StopReplicationJob/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { DeleteAccessTokenRequest } from "./DeleteAccessToken/req";
import { DeleteAccessTokenResponse } from "./DeleteAccessToken/res";
import { DisableAccessTokenRequest } from "./DisableAccessToken/req";
import { DisableAccessTokenResponse } from "./DisableAccessToken/res";
import { ListAccessTokensRequest } from "./ListAccessTokens/req";
import { ListAccessTokensResponse } from "./ListAccessTokens/res";
import { CreateAccessTokenRequest } from "./CreateAccessToken/req";
import { CreateAccessTokenResponse } from "./CreateAccessToken/res";

interface SMC {
    /**
     * 将指定的自动增量迁移任务停止周期执行，并完成迁移任务。
     */
    CutOverReplicationJob(query: CutOverReplicationJobRequest): Promise<CutOverReplicationJobResponse>;
    /**
     * 调用DeleteReplicationJob删除一个迁移任务。
     */
    DeleteReplicationJob(query: DeleteReplicationJobRequest): Promise<DeleteReplicationJobResponse>;
    /**
     * 调用CreateReplicationJob为迁移源创建一个迁移任务。
     */
    CreateReplicationJob(query: CreateReplicationJobRequest): Promise<CreateReplicationJobResponse>;
    /**
     * 调用DeleteSourceServer删除一个迁移源。
     */
    DeleteSourceServer(query: DeleteSourceServerRequest): Promise<DeleteSourceServerResponse>;
    /**
     * 调用DescribeReplicationJobs查询一个或多个迁移任务的详细信息。
     */
    DescribeReplicationJobs(query: DescribeReplicationJobsRequest): Promise<DescribeReplicationJobsResponse>;
    /**
     * 调用DescribeSourceServers查询一个或多个迁移源信息。
     */
    DescribeSourceServers(query: DescribeSourceServersRequest): Promise<DescribeSourceServersResponse>;
    /**
     * 调用ListTagResources查询一个或多个SMC资源（迁移源和迁移任务）已经绑定的标签列表。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 调用ModifySourceServerAttribute修改一个迁移源的名称和描述。
     */
    ModifySourceServerAttribute(query: ModifySourceServerAttributeRequest): Promise<ModifySourceServerAttributeResponse>;
    /**
     * 调用StartReplicationJob启动一个迁移任务。
     */
    StartReplicationJob(query: StartReplicationJobRequest): Promise<StartReplicationJobResponse>;
    /**
     * 调用ModifyReplicationJobAttribute修改迁移任务信息。
     */
    ModifyReplicationJobAttribute(query: ModifyReplicationJobAttributeRequest): Promise<ModifyReplicationJobAttributeResponse>;
    /**
     * 调用StopReplicationJob停止一个迁移任务。
     */
    StopReplicationJob(query: StopReplicationJobRequest): Promise<StopReplicationJobResponse>;
    /**
     * 调用TagResources为指定的SMC资源（迁移源和迁移任务）列表统一创建并绑定标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 为指定的SMC资源（迁移源和迁移任务）统一解绑并删除标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 调用DeleteAccessToken删除激活码。
     */
    DeleteAccessToken(query: DeleteAccessTokenRequest): Promise<DeleteAccessTokenResponse>;
    /**
     * 调用DisableAccessToken禁用激活码。
     */
    DisableAccessToken(query: DisableAccessTokenRequest): Promise<DisableAccessTokenResponse>;
    /**
     * 调用ListAccessTokens查询已创建的激活码以及激活码的使用情况。
     */
    ListAccessTokens(query: ListAccessTokensRequest): Promise<ListAccessTokensResponse>;
    /**
     * 调用CreateAccessToken创建激活码。
     */
    CreateAccessToken(query: CreateAccessTokenRequest): Promise<CreateAccessTokenResponse>;
}
export default SMC;
