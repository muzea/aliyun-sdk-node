import { DescribeHubClustersRequest } from "./DescribeHubClusters/req";
import { DescribeHubClustersResponse } from "./DescribeHubClusters/res";
import { DescribeManagedClustersRequest } from "./DescribeManagedClusters/req";
import { DescribeManagedClustersResponse } from "./DescribeManagedClusters/res";
import { DescribeHubClusterKubeconfigRequest } from "./DescribeHubClusterKubeconfig/req";
import { DescribeHubClusterKubeconfigResponse } from "./DescribeHubClusterKubeconfig/res";
import { DescribeHubClusterDetailsRequest } from "./DescribeHubClusterDetails/req";
import { DescribeHubClusterDetailsResponse } from "./DescribeHubClusterDetails/res";
import { DeleteHubClusterRequest } from "./DeleteHubCluster/req";
import { DeleteHubClusterResponse } from "./DeleteHubCluster/res";
import { CreateHubClusterRequest } from "./CreateHubCluster/req";
import { CreateHubClusterResponse } from "./CreateHubCluster/res";
import { AttachClusterToHubRequest } from "./AttachClusterToHub/req";
import { AttachClusterToHubResponse } from "./AttachClusterToHub/res";
import { DetachClusterFromHubRequest } from "./DetachClusterFromHub/req";
import { DetachClusterFromHubResponse } from "./DetachClusterFromHub/res";
import { DescribeHubClusterLogsRequest } from "./DescribeHubClusterLogs/req";
import { DescribeHubClusterLogsResponse } from "./DescribeHubClusterLogs/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { UpdateHubClusterFeatureRequest } from "./UpdateHubClusterFeature/req";
import { UpdateHubClusterFeatureResponse } from "./UpdateHubClusterFeature/res";
import { DescribeUserPermissionsRequest } from "./DescribeUserPermissions/req";
import { DescribeUserPermissionsResponse } from "./DescribeUserPermissions/res";
import { GrantUserPermissionsRequest } from "./GrantUserPermissions/req";
import { GrantUserPermissionsResponse } from "./GrantUserPermissions/res";
import { DeleteUserPermissionRequest } from "./DeleteUserPermission/req";
import { DeleteUserPermissionResponse } from "./DeleteUserPermission/res";
import { GrantUserPermissionRequest } from "./GrantUserPermission/req";
import { GrantUserPermissionResponse } from "./GrantUserPermission/res";
import { UpdateUserPermissionRequest } from "./UpdateUserPermission/req";
import { UpdateUserPermissionResponse } from "./UpdateUserPermission/res";
import { DeletePolicyInstanceRequest } from "./DeletePolicyInstance/req";
import { DeletePolicyInstanceResponse } from "./DeletePolicyInstance/res";
import { DescribePolicyGovernanceInClusterRequest } from "./DescribePolicyGovernanceInCluster/req";
import { DescribePolicyGovernanceInClusterResponse } from "./DescribePolicyGovernanceInCluster/res";
import { DeployPolicyInstanceRequest } from "./DeployPolicyInstance/req";
import { DeployPolicyInstanceResponse } from "./DeployPolicyInstance/res";
import { DescribePolicyInstancesRequest } from "./DescribePolicyInstances/req";
import { DescribePolicyInstancesResponse } from "./DescribePolicyInstances/res";
import { DescribePolicyDetailsRequest } from "./DescribePolicyDetails/req";
import { DescribePolicyDetailsResponse } from "./DescribePolicyDetails/res";
import { DescribePolicyInstancesStatusRequest } from "./DescribePolicyInstancesStatus/req";
import { DescribePolicyInstancesStatusResponse } from "./DescribePolicyInstancesStatus/res";
import { DescribePoliciesRequest } from "./DescribePolicies/req";
import { DescribePoliciesResponse } from "./DescribePolicies/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";

interface ADCP {
    /**
     * 获取用户ACK One主控实例列表
     * 。
     */
    DescribeHubClusters(query: DescribeHubClustersRequest): Promise<DescribeHubClustersResponse>;
    /**
     * 获取ACK One主控集群下的子集群列表。
     */
    DescribeManagedClusters(query: DescribeManagedClustersRequest): Promise<DescribeManagedClustersResponse>;
    /**
     * 获取ACK One集群的KubeConfig。除了通过容器服务控制台来管理集群之外，您还可以通过Kubernetes命令行工具kubectl来管理集群以及应用。使用kubectl工具管理集群时，您需要先获取集群的KubeConfig信息并通过kubectl工具连接集群。
     */
    DescribeHubClusterKubeconfig(query: DescribeHubClusterKubeconfigRequest): Promise<DescribeHubClusterKubeconfigResponse>;
    /**
     * 获取ACKOne主控集群的详细信息
     * 。
     */
    DescribeHubClusterDetails(query: DescribeHubClusterDetailsRequest): Promise<DescribeHubClusterDetailsResponse>;
    /**
     * 删除ACK One的主控集群
     * 。
     */
    DeleteHubCluster(query: DeleteHubClusterRequest): Promise<DeleteHubClusterResponse>;
    /**
     * 创建一个ACK One主控实例。
     */
    CreateHubCluster(query: CreateHubClusterRequest): Promise<CreateHubClusterResponse>;
    /**
     * 添加ACK集群到ACKOne主控集群。
     */
    AttachClusterToHub(query: AttachClusterToHubRequest): Promise<AttachClusterToHubResponse>;
    /**
     * 从ACK One主控集群中移除ACK子集群。
     */
    DetachClusterFromHub(query: DetachClusterFromHubRequest): Promise<DetachClusterFromHubResponse>;
    /**
     * 获取ACK One多集群舰队主控集群的日志。
     */
    DescribeHubClusterLogs(query: DescribeHubClusterLogsRequest): Promise<DescribeHubClusterLogsResponse>;
    /**
     * 查看可选的地域。
     */
    DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
     * 更新集群特性。
     */
    UpdateHubClusterFeature(query: UpdateHubClusterFeatureRequest): Promise<UpdateHubClusterFeatureResponse>;
    /**
     * 查看子账号授权内容。
     */
    DescribeUserPermissions(query: DescribeUserPermissionsRequest): Promise<DescribeUserPermissionsResponse>;
    /**
     * 为子账号授权。
     */
    GrantUserPermissions(query: GrantUserPermissionsRequest): Promise<GrantUserPermissionsResponse>;
    /**
     * 删除RAM用户RBAC授权。
     */
    DeleteUserPermission(query: DeleteUserPermissionRequest): Promise<DeleteUserPermissionResponse>;
    /**
     * 为RAM用户或RAM角色授予RBAC权限。RAM系统策略仅控制ACK One集群资源的操作权限（例如创建实例、查看实例列表等），若RAM用户或RAM角色需要操作指定集群内的K8s资源，例如，创建GitOps Application和Argo Workflow等，还需要获取指定ACK One集群及其命名空间的操作权限即RBAC权限。本文为您介绍如何为RAM用户或RAM角色授予RBAC权限。
     */
    GrantUserPermission(query: GrantUserPermissionRequest): Promise<GrantUserPermissionResponse>;
    /**
     * 更新RAM用户RBAC授权。
     */
    UpdateUserPermission(query: UpdateUserPermissionRequest): Promise<UpdateUserPermissionResponse>;
    /**
     * 删除关联集群中的策略规则实例。
     */
    DeletePolicyInstance(query: DeletePolicyInstanceRequest): Promise<DeletePolicyInstanceResponse>;
    /**
     * 获取主控实例下关联集群策略治理详情。
     */
    DescribePolicyGovernanceInCluster(query: DescribePolicyGovernanceInClusterRequest): Promise<DescribePolicyGovernanceInClusterResponse>;
    /**
     * 在主控实例关联集群中部署策略规则实例。
     */
    DeployPolicyInstance(query: DeployPolicyInstanceRequest): Promise<DeployPolicyInstanceResponse>;
    /**
     * 查询主控实例关联集群的策略实例。
     */
    DescribePolicyInstances(query: DescribePolicyInstancesRequest): Promise<DescribePolicyInstancesResponse>;
    /**
     * 获取策略治理规则模板详情。
     */
    DescribePolicyDetails(query: DescribePolicyDetailsRequest): Promise<DescribePolicyDetailsResponse>;
    /**
     * 获取主控实例关联集群指定策略规则实例详情。
     */
    DescribePolicyInstancesStatus(query: DescribePolicyInstancesStatusRequest): Promise<DescribePolicyInstancesStatusResponse>;
    /**
     * 列举策略治理规则库列表。
     */
    DescribePolicies(query: DescribePoliciesRequest): Promise<DescribePoliciesResponse>;
    /**
     * 更新资源组
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
}
export default ADCP;
