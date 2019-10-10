import { AttachInstancesRequest } from "./AttachInstances/req";
import { AttachInstancesResponse } from "./AttachInstances/res";
import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { DeleteClusterNodesRequest } from "./DeleteClusterNodes/req";
import { DeleteClusterNodesResponse } from "./DeleteClusterNodes/res";
import { DescribeClusterUserKubeconfigRequest } from "./DescribeClusterUserKubeconfig/req";
import { DescribeClusterUserKubeconfigResponse } from "./DescribeClusterUserKubeconfig/res";
import { DescribeClustersRequest } from "./DescribeClusters/req";
import { DescribeClustersResponse } from "./DescribeClusters/res";
import { ScaleClusterRequest } from "./ScaleCluster/req";
import { ScaleClusterResponse } from "./ScaleCluster/res";
import { ModifyClusterRequest } from "./ModifyCluster/req";
import { ModifyClusterResponse } from "./ModifyCluster/res";
import { DescribeClusterV2UserKubeconfigRequest } from "./DescribeClusterV2UserKubeconfig/req";
import { DescribeClusterV2UserKubeconfigResponse } from "./DescribeClusterV2UserKubeconfig/res";
import { DescribeUserIdentityRequest } from "./DescribeUserIdentity/req";
import { DescribeUserIdentityResponse } from "./DescribeUserIdentity/res";

interface CS {
    AttachInstances(query: AttachInstancesRequest): Promise<AttachInstancesResponse>;
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    DeleteClusterNodes(query: DeleteClusterNodesRequest): Promise<DeleteClusterNodesResponse>;
    DescribeClusterUserKubeconfig(query: DescribeClusterUserKubeconfigRequest): Promise<DescribeClusterUserKubeconfigResponse>;
    DescribeClusters(query: DescribeClustersRequest): Promise<DescribeClustersResponse>;
    ScaleCluster(query: ScaleClusterRequest): Promise<ScaleClusterResponse>;
    ModifyCluster(query: ModifyClusterRequest): Promise<ModifyClusterResponse>;
    DescribeClusterV2UserKubeconfig(query: DescribeClusterV2UserKubeconfigRequest): Promise<DescribeClusterV2UserKubeconfigResponse>;
    DescribeUserIdentity(query: DescribeUserIdentityRequest): Promise<DescribeUserIdentityResponse>;
}
export default CS;
