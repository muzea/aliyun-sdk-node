import { StopReplicationJobRequest } from "./StopReplicationJob/req";
import { StopReplicationJobResponse } from "./StopReplicationJob/res";
import { ModifySourceServerAttributeRequest } from "./ModifySourceServerAttribute/req";
import { ModifySourceServerAttributeResponse } from "./ModifySourceServerAttribute/res";
import { ModifyReplicationJobAttributeRequest } from "./ModifyReplicationJobAttribute/req";
import { ModifyReplicationJobAttributeResponse } from "./ModifyReplicationJobAttribute/res";
import { DeleteSourceServerRequest } from "./DeleteSourceServer/req";
import { DeleteSourceServerResponse } from "./DeleteSourceServer/res";
import { DescribeReplicationJobsRequest } from "./DescribeReplicationJobs/req";
import { DescribeReplicationJobsResponse } from "./DescribeReplicationJobs/res";
import { StartReplicationJobRequest } from "./StartReplicationJob/req";
import { StartReplicationJobResponse } from "./StartReplicationJob/res";
import { DeleteReplicationJobRequest } from "./DeleteReplicationJob/req";
import { DeleteReplicationJobResponse } from "./DeleteReplicationJob/res";
import { CreateReplicationJobRequest } from "./CreateReplicationJob/req";
import { CreateReplicationJobResponse } from "./CreateReplicationJob/res";
import { DescribeSourceServersRequest } from "./DescribeSourceServers/req";
import { DescribeSourceServersResponse } from "./DescribeSourceServers/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";

interface SMC {
    /**
    * 停止一个迁移任务。
    */ StopReplicationJob(query: StopReplicationJobRequest): Promise<StopReplicationJobResponse>;
    /**
    * 修改一个迁移源的名称和描述。
    */ ModifySourceServerAttribute(query: ModifySourceServerAttributeRequest): Promise<ModifySourceServerAttributeResponse>;
    /**
    * 修改迁移任务信息。
    */ ModifyReplicationJobAttribute(query: ModifyReplicationJobAttributeRequest): Promise<ModifyReplicationJobAttributeResponse>;
    /**
    * 删除一个迁移源。
    */ DeleteSourceServer(query: DeleteSourceServerRequest): Promise<DeleteSourceServerResponse>;
    /**
    * 查询一个或多个迁移任务的详细信息。
    */ DescribeReplicationJobs(query: DescribeReplicationJobsRequest): Promise<DescribeReplicationJobsResponse>;
    /**
    * 启动一个迁移任务。
    */ StartReplicationJob(query: StartReplicationJobRequest): Promise<StartReplicationJobResponse>;
    /**
    * 删除一个迁移任务。
    */ DeleteReplicationJob(query: DeleteReplicationJobRequest): Promise<DeleteReplicationJobResponse>;
    /**
    * 为迁移源创建一个迁移任务。
    */ CreateReplicationJob(query: CreateReplicationJobRequest): Promise<CreateReplicationJobResponse>;
    /**
    * 查询一个或多个迁移源。
    */ DescribeSourceServers(query: DescribeSourceServersRequest): Promise<DescribeSourceServersResponse>;
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
}
export default SMC;
