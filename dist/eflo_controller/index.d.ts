import { ShrinkClusterRequest } from "./ShrinkCluster/req";
import { ShrinkClusterResponse } from "./ShrinkCluster/res";
import { ListClusterNodesRequest } from "./ListClusterNodes/req";
import { ListClusterNodesResponse } from "./ListClusterNodes/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { ReimageNodesRequest } from "./ReimageNodes/req";
import { ReimageNodesResponse } from "./ReimageNodes/res";
import { ListFreeNodesRequest } from "./ListFreeNodes/req";
import { ListFreeNodesResponse } from "./ListFreeNodes/res";
import { DescribeZonesRequest } from "./DescribeZones/req";
import { DescribeZonesResponse } from "./DescribeZones/res";
import { UntagResourcesRequest } from "./UntagResources/req";
import { UntagResourcesResponse } from "./UntagResources/res";
import { TagResourcesRequest } from "./TagResources/req";
import { TagResourcesResponse } from "./TagResources/res";
import { ListTagResourcesRequest } from "./ListTagResources/req";
import { ListTagResourcesResponse } from "./ListTagResources/res";
import { DescribeNodeRequest } from "./DescribeNode/req";
import { DescribeNodeResponse } from "./DescribeNode/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { ExtendClusterRequest } from "./ExtendCluster/req";
import { ExtendClusterResponse } from "./ExtendCluster/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { ListClustersRequest } from "./ListClusters/req";
import { ListClustersResponse } from "./ListClusters/res";
import { RebootNodesRequest } from "./RebootNodes/req";
import { RebootNodesResponse } from "./RebootNodes/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { DescribeTaskRequest } from "./DescribeTask/req";
import { DescribeTaskResponse } from "./DescribeTask/res";
import { DescribeClusterRequest } from "./DescribeCluster/req";
import { DescribeClusterResponse } from "./DescribeCluster/res";
import { ApproveOperationRequest } from "./ApproveOperation/req";
import { ApproveOperationResponse } from "./ApproveOperation/res";
import { StopInvocationRequest } from "./StopInvocation/req";
import { StopInvocationResponse } from "./StopInvocation/res";
import { RunCommandRequest } from "./RunCommand/req";
import { RunCommandResponse } from "./RunCommand/res";
import { DescribeInvocationsRequest } from "./DescribeInvocations/req";
import { DescribeInvocationsResponse } from "./DescribeInvocations/res";
import { DescribeSendFileResultsRequest } from "./DescribeSendFileResults/req";
import { DescribeSendFileResultsResponse } from "./DescribeSendFileResults/res";
import { SendFileRequest } from "./SendFile/req";
import { SendFileResponse } from "./SendFile/res";

interface EFLO_CONTROLLER {
    /**
     * 灵骏集群缩容。
     */
    ShrinkCluster(query: ShrinkClusterRequest): Promise<ShrinkClusterResponse>;
    /**
     * 查询集群节点列表。
     */
    ListClusterNodes(query: ListClusterNodesRequest): Promise<ListClusterNodesResponse>;
    /**
     * 资源转组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 机器重装。
     */
    ReimageNodes(query: ReimageNodesRequest): Promise<ReimageNodesResponse>;
    /**
     * 查询未使用节点列表。
     */
    ListFreeNodes(query: ListFreeNodesRequest): Promise<ListFreeNodesResponse>;
    /**
     * 可用区列表。
     */
    DescribeZones(query: DescribeZonesRequest): Promise<DescribeZonesResponse>;
    /**
     * 删除资源自定义标签。
     */
    UntagResources(query: UntagResourcesRequest): Promise<UntagResourcesResponse>;
    /**
     * 资源打用户标签。
     */
    TagResources(query: TagResourcesRequest): Promise<TagResourcesResponse>;
    /**
     * 查询资源标签。
     */
    ListTagResources(query: ListTagResourcesRequest): Promise<ListTagResourcesResponse>;
    /**
     * 查询节点列表。
     */
    DescribeNode(query: DescribeNodeRequest): Promise<DescribeNodeResponse>;
    /**
     * 查询地域信息列表。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 集群扩容。
     */
    ExtendCluster(query: ExtendClusterRequest): Promise<ExtendClusterResponse>;
    /**
     * 删除灵骏集群实例。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 查询集群实例列表。
     */
    ListClusters(query: ListClustersRequest): Promise<ListClustersResponse>;
    /**
     * 重启机器。
     */
    RebootNodes(query: RebootNodesRequest): Promise<RebootNodesResponse>;
    /**
     * 创建一个新的灵骏集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 查询任务详情。
     */
    DescribeTask(query: DescribeTaskRequest): Promise<DescribeTaskResponse>;
    /**
     * 查询灵骏集群详情。
     */
    DescribeCluster(query: DescribeClusterRequest): Promise<DescribeClusterResponse>;
    /**
     * 审批运维操作。
     */
    ApproveOperation(query: ApproveOperationRequest): Promise<ApproveOperationResponse>;
    /**
     * 停止运维助手命令进程。
     */
    StopInvocation(query: StopInvocationRequest): Promise<StopInvocationResponse>;
    /**
     * 一台或多台灵骏机器中执行一段Shell的脚本。
     */
    RunCommand(query: RunCommandRequest): Promise<RunCommandResponse>;
    /**
     * 查询运维助手命令的执行列表和状态。
     */
    DescribeInvocations(query: DescribeInvocationsRequest): Promise<DescribeInvocationsResponse>;
    /**
     * 查询运维助手下发文件列表及状态。
     */
    DescribeSendFileResults(query: DescribeSendFileResultsRequest): Promise<DescribeSendFileResultsResponse>;
    /**
     * 一台或多台灵骏机器下发远程文件。
     */
    SendFile(query: SendFileRequest): Promise<SendFileResponse>;
}
export default EFLO_CONTROLLER;
