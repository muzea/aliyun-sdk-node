import { CreateClusterRequest } from "./CreateCluster/req";
import { CreateClusterResponse } from "./CreateCluster/res";
import { DeleteClusterRequest } from "./DeleteCluster/req";
import { DeleteClusterResponse } from "./DeleteCluster/res";
import { CreateServiceLinkedRoleRequest } from "./CreateServiceLinkedRole/req";
import { CreateServiceLinkedRoleResponse } from "./CreateServiceLinkedRole/res";
import { CreateImageRequest } from "./CreateImage/req";
import { CreateImageResponse } from "./CreateImage/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { DeleteImageRequest } from "./DeleteImage/req";
import { DeleteImageResponse } from "./DeleteImage/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { DescribeAvailableResourceRequest } from "./DescribeAvailableResource/req";
import { DescribeAvailableResourceResponse } from "./DescribeAvailableResource/res";
import { DescribeClusterADDomainRequest } from "./DescribeClusterADDomain/req";
import { DescribeClusterADDomainResponse } from "./DescribeClusterADDomain/res";
import { DescribeClusterConnectionsRequest } from "./DescribeClusterConnections/req";
import { DescribeClusterConnectionsResponse } from "./DescribeClusterConnections/res";
import { DescribeClusterPolicyRequest } from "./DescribeClusterPolicy/req";
import { DescribeClusterPolicyResponse } from "./DescribeClusterPolicy/res";
import { DescribeClustersRequest } from "./DescribeClusters/req";
import { DescribeClustersResponse } from "./DescribeClusters/res";
import { DescribeImagesRequest } from "./DescribeImages/req";
import { DescribeImagesResponse } from "./DescribeImages/res";
import { DescribeInstancePolicyRequest } from "./DescribeInstancePolicy/req";
import { DescribeInstancePolicyResponse } from "./DescribeInstancePolicy/res";
import { DescribeInstancesRequest } from "./DescribeInstances/req";
import { DescribeInstancesResponse } from "./DescribeInstances/res";
import { GetConnectTicketRequest } from "./GetConnectTicket/req";
import { GetConnectTicketResponse } from "./GetConnectTicket/res";
import { IsUserAdminRequest } from "./IsUserAdmin/req";
import { IsUserAdminResponse } from "./IsUserAdmin/res";
import { RestartInstanceRequest } from "./RestartInstance/req";
import { RestartInstanceResponse } from "./RestartInstance/res";
import { SetClusterADDomainRequest } from "./SetClusterADDomain/req";
import { SetClusterADDomainResponse } from "./SetClusterADDomain/res";
import { SetClusterDnatRequest } from "./SetClusterDnat/req";
import { SetClusterDnatResponse } from "./SetClusterDnat/res";
import { SetClusterNameRequest } from "./SetClusterName/req";
import { SetClusterNameResponse } from "./SetClusterName/res";
import { SetClusterPolicyRequest } from "./SetClusterPolicy/req";
import { SetClusterPolicyResponse } from "./SetClusterPolicy/res";
import { SetImageNameRequest } from "./SetImageName/req";
import { SetImageNameResponse } from "./SetImageName/res";
import { SetInstanceNameRequest } from "./SetInstanceName/req";
import { SetInstanceNameResponse } from "./SetInstanceName/res";
import { SetInstanceUserRequest } from "./SetInstanceUser/req";
import { SetInstanceUserResponse } from "./SetInstanceUser/res";
import { SetInstancePolicyRequest } from "./SetInstancePolicy/req";
import { SetInstancePolicyResponse } from "./SetInstancePolicy/res";
import { StartInstanceRequest } from "./StartInstance/req";
import { StartInstanceResponse } from "./StartInstance/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";

interface GWS {
    /**
     * 创建集群。
     */
    CreateCluster(query: CreateClusterRequest): Promise<CreateClusterResponse>;
    /**
     * 删除集群。
     */
    DeleteCluster(query: DeleteClusterRequest): Promise<DeleteClusterResponse>;
    /**
     * 为云桌面创建服务关联角色。
     */
    CreateServiceLinkedRole(query: CreateServiceLinkedRoleRequest): Promise<CreateServiceLinkedRoleResponse>;
    /**
     * 创建镜像。
     */
    CreateImage(query: CreateImageRequest): Promise<CreateImageResponse>;
    /**
     * 创建实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 删除镜像。
     */
    DeleteImage(query: DeleteImageRequest): Promise<DeleteImageResponse>;
    /**
     * 删除实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 查看云桌面集群的规格与可用区列表。
     */
    DescribeAvailableResource(query: DescribeAvailableResourceRequest): Promise<DescribeAvailableResourceResponse>;
    /**
     * 查询与云桌面集群的用户关联 AD 的信息。
     */
    DescribeClusterADDomain(query: DescribeClusterADDomainRequest): Promise<DescribeClusterADDomainResponse>;
    /**
     * 查询某集群的会话连接信息。
     */
    DescribeClusterConnections(query: DescribeClusterConnectionsRequest): Promise<DescribeClusterConnectionsResponse>;
    /**
     * 获取集群策略。
     */
    DescribeClusterPolicy(query: DescribeClusterPolicyRequest): Promise<DescribeClusterPolicyResponse>;
    /**
     * 调用DescribeClusters查询集群信息。
     */
    DescribeClusters(query: DescribeClustersRequest): Promise<DescribeClustersResponse>;
    /**
     * 描述镜像。
     */
    DescribeImages(query: DescribeImagesRequest): Promise<DescribeImagesResponse>;
    /**
     * 攻取实例的策略配置状态。
     */
    DescribeInstancePolicy(query: DescribeInstancePolicyRequest): Promise<DescribeInstancePolicyResponse>;
    /**
     * 描述实例信息。
     */
    DescribeInstances(query: DescribeInstancesRequest): Promise<DescribeInstancesResponse>;
    /**
     * 获取连接实例所需要的token。
     */
    GetConnectTicket(query: GetConnectTicketRequest): Promise<GetConnectTicketResponse>;
    /**
     * 查询当前用户的权限。
     */
    IsUserAdmin(query: IsUserAdminRequest): Promise<IsUserAdminResponse>;
    /**
     * 重启实例。
     */
    RestartInstance(query: RestartInstanceRequest): Promise<RestartInstanceResponse>;
    /**
     * 调用SetClusterADDomain关联云桌面集群和AD域。
     */
    SetClusterADDomain(query: SetClusterADDomainRequest): Promise<SetClusterADDomainResponse>;
    /**
     * 将集群与网关（NAT）做关联，关联后将以 DNAT + EIP 的方式来连接桌面。
     */
    SetClusterDnat(query: SetClusterDnatRequest): Promise<SetClusterDnatResponse>;
    /**
     * 设置集群名称。
     */
    SetClusterName(query: SetClusterNameRequest): Promise<SetClusterNameResponse>;
    /**
     * 设置集群策略。
     */
    SetClusterPolicy(query: SetClusterPolicyRequest): Promise<SetClusterPolicyResponse>;
    /**
     * 设置镜像名称。
     */
    SetImageName(query: SetImageNameRequest): Promise<SetImageNameResponse>;
    /**
     * 设置实例名称。
     */
    SetInstanceName(query: SetInstanceNameRequest): Promise<SetInstanceNameResponse>;
    /**
     * 给实例分配用户。
     */
    SetInstanceUser(query: SetInstanceUserRequest): Promise<SetInstanceUserResponse>;
    /**
     * 设置实例的策略状态。
     */
    SetInstancePolicy(query: SetInstancePolicyRequest): Promise<SetInstancePolicyResponse>;
    /**
     * 启动实例。
     */
    StartInstance(query: StartInstanceRequest): Promise<StartInstanceResponse>;
    /**
     * 停止实例。
     */
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
}
export default GWS;
