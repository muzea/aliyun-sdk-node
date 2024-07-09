import { CreateFlowRequest } from "./CreateFlow/req";
import { CreateFlowResponse } from "./CreateFlow/res";
import { DescribeFlowEntitySnapshotRequest } from "./DescribeFlowEntitySnapshot/req";
import { DescribeFlowEntitySnapshotResponse } from "./DescribeFlowEntitySnapshot/res";

interface DDI {
    /**
     * 创建一个工作流，对应于项目空间 -> 工作流设计页面 -> 新建工作流。
     */
    CreateFlow(query: CreateFlowRequest): Promise<CreateFlowResponse>;
    DescribeFlowEntitySnapshot(query: DescribeFlowEntitySnapshotRequest): Promise<DescribeFlowEntitySnapshotResponse>;
}
export default DDI;
