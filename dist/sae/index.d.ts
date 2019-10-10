import { DescribeChangeOrderRequest } from "./DescribeChangeOrder/req";
import { DescribeChangeOrderResponse } from "./DescribeChangeOrder/res";
import { RestartApplicationRequest } from "./RestartApplication/req";
import { RestartApplicationResponse } from "./RestartApplication/res";
import { ListChangeOrdersRequest } from "./ListChangeOrders/req";
import { ListChangeOrdersResponse } from "./ListChangeOrders/res";
import { DescribeInstanceSpecificationsRequest } from "./DescribeInstanceSpecifications/req";
import { DescribeInstanceSpecificationsResponse } from "./DescribeInstanceSpecifications/res";
import { AbortChangeOrderRequest } from "./AbortChangeOrder/req";
import { AbortChangeOrderResponse } from "./AbortChangeOrder/res";
import { AbortAndRollbackChangeOrderRequest } from "./AbortAndRollbackChangeOrder/req";
import { AbortAndRollbackChangeOrderResponse } from "./AbortAndRollbackChangeOrder/res";
import { DescribeNamespaceListRequest } from "./DescribeNamespaceList/req";
import { DescribeNamespaceListResponse } from "./DescribeNamespaceList/res";
import { RescaleApplicationRequest } from "./RescaleApplication/req";
import { RescaleApplicationResponse } from "./RescaleApplication/res";
import { ConfirmPipelineBatchRequest } from "./ConfirmPipelineBatch/req";
import { ConfirmPipelineBatchResponse } from "./ConfirmPipelineBatch/res";
import { StopApplicationRequest } from "./StopApplication/req";
import { StopApplicationResponse } from "./StopApplication/res";
import { StartApplicationRequest } from "./StartApplication/req";
import { StartApplicationResponse } from "./StartApplication/res";
import { DeleteApplicationRequest } from "./DeleteApplication/req";
import { DeleteApplicationResponse } from "./DeleteApplication/res";
import { RescaleApplicationVerticallyRequest } from "./RescaleApplicationVertically/req";
import { RescaleApplicationVerticallyResponse } from "./RescaleApplicationVertically/res";
import { UnbindSlbRequest } from "./UnbindSlb/req";
import { UnbindSlbResponse } from "./UnbindSlb/res";
import { CreateApplicationRequest } from "./CreateApplication/req";
import { CreateApplicationResponse } from "./CreateApplication/res";
import { DescribeApplicationStatusRequest } from "./DescribeApplicationStatus/req";
import { DescribeApplicationStatusResponse } from "./DescribeApplicationStatus/res";
import { DeployApplicationRequest } from "./DeployApplication/req";
import { DeployApplicationResponse } from "./DeployApplication/res";
import { QueryResourceStaticsRequest } from "./QueryResourceStatics/req";
import { QueryResourceStaticsResponse } from "./QueryResourceStatics/res";
import { BindSlbRequest } from "./BindSlb/req";
import { BindSlbResponse } from "./BindSlb/res";
import { DescribeApplicationSlbsRequest } from "./DescribeApplicationSlbs/req";
import { DescribeApplicationSlbsResponse } from "./DescribeApplicationSlbs/res";
import { ListApplicationsRequest } from "./ListApplications/req";
import { ListApplicationsResponse } from "./ListApplications/res";
import { CreateNamespaceRequest } from "./CreateNamespace/req";
import { CreateNamespaceResponse } from "./CreateNamespace/res";
import { UpdateNamespaceRequest } from "./UpdateNamespace/req";
import { UpdateNamespaceResponse } from "./UpdateNamespace/res";
import { ListPublishedServicesRequest } from "./ListPublishedServices/req";
import { ListPublishedServicesResponse } from "./ListPublishedServices/res";
import { DescribeApplicationConfigRequest } from "./DescribeApplicationConfig/req";
import { DescribeApplicationConfigResponse } from "./DescribeApplicationConfig/res";
import { ListConsumedServicesRequest } from "./ListConsumedServices/req";
import { ListConsumedServicesResponse } from "./ListConsumedServices/res";
import { DescribeNamespaceRequest } from "./DescribeNamespace/req";
import { DescribeNamespaceResponse } from "./DescribeNamespace/res";
import { DescribeApplicationGroupsRequest } from "./DescribeApplicationGroups/req";
import { DescribeApplicationGroupsResponse } from "./DescribeApplicationGroups/res";
import { DeleteNamespaceRequest } from "./DeleteNamespace/req";
import { DeleteNamespaceResponse } from "./DeleteNamespace/res";
import { DescribeApplicationInstancesRequest } from "./DescribeApplicationInstances/req";
import { DescribeApplicationInstancesResponse } from "./DescribeApplicationInstances/res";
import { DescribeEdasContainersRequest } from "./DescribeEdasContainers/req";
import { DescribeEdasContainersResponse } from "./DescribeEdasContainers/res";
import { DescribeApplicationImageRequest } from "./DescribeApplicationImage/req";
import { DescribeApplicationImageResponse } from "./DescribeApplicationImage/res";
import { DescribeComponentsRequest } from "./DescribeComponents/req";
import { DescribeComponentsResponse } from "./DescribeComponents/res";
import { DescribeRegionsRequest } from "./DescribeRegions/req";
import { DescribeRegionsResponse } from "./DescribeRegions/res";
import { DescribeInstanceLogRequest } from "./DescribeInstanceLog/req";
import { DescribeInstanceLogResponse } from "./DescribeInstanceLog/res";
import { DescribeNamespacesRequest } from "./DescribeNamespaces/req";
import { DescribeNamespacesResponse } from "./DescribeNamespaces/res";
import { ListLogConfigsRequest } from "./ListLogConfigs/req";
import { ListLogConfigsResponse } from "./ListLogConfigs/res";

interface SAE {
    /**
    * 查询变更单信息
    */ DescribeChangeOrder(query: DescribeChangeOrderRequest): Promise<DescribeChangeOrderResponse>;
    /**
    * 重启应用
    */ RestartApplication(query: RestartApplicationRequest): Promise<RestartApplicationResponse>;
    /**
    * 获取变更单列表
    */ ListChangeOrders(query: ListChangeOrdersRequest): Promise<ListChangeOrdersResponse>;
    /**
    * 获取应用实例规格信息
    */ DescribeInstanceSpecifications(query: DescribeInstanceSpecificationsRequest): Promise<DescribeInstanceSpecificationsResponse>;
    /**
    * 中止变更单
    */ AbortChangeOrder(query: AbortChangeOrderRequest): Promise<AbortChangeOrderResponse>;
    /**
    * 中止或回滚变更单
    */ AbortAndRollbackChangeOrder(query: AbortAndRollbackChangeOrderRequest): Promise<AbortAndRollbackChangeOrderResponse>;
    /**
    * 获取命名空间列表
    */ DescribeNamespaceList(query: DescribeNamespaceListRequest): Promise<DescribeNamespaceListResponse>;
    /**
    * 应用扩缩
    */ RescaleApplication(query: RescaleApplicationRequest): Promise<RescaleApplicationResponse>;
    /**
    * 是否开始一下批次
    */ ConfirmPipelineBatch(query: ConfirmPipelineBatchRequest): Promise<ConfirmPipelineBatchResponse>;
    /**
    * 停止应用
    */ StopApplication(query: StopApplicationRequest): Promise<StopApplicationResponse>;
    /**
    * 启动应用
    */ StartApplication(query: StartApplicationRequest): Promise<StartApplicationResponse>;
    /**
    * 删除应用
    */ DeleteApplication(query: DeleteApplicationRequest): Promise<DeleteApplicationResponse>;
    /**
    * 改变应用实例规格
    */ RescaleApplicationVertically(query: RescaleApplicationVerticallyRequest): Promise<RescaleApplicationVerticallyResponse>;
    /**
    * 解绑内网或公网SLB
    */ UnbindSlb(query: UnbindSlbRequest): Promise<UnbindSlbResponse>;
    /**
    * 创建一个SAE应用
    */ CreateApplication(query: CreateApplicationRequest): Promise<CreateApplicationResponse>;
    /**
    * 获取应用的状态信息
    */ DescribeApplicationStatus(query: DescribeApplicationStatusRequest): Promise<DescribeApplicationStatusResponse>;
    /**
    * 部署应用
    */ DeployApplication(query: DeployApplicationRequest): Promise<DeployApplicationResponse>;
    /**
    * 获取应用的资源使用量
    */ QueryResourceStatics(query: QueryResourceStaticsRequest): Promise<QueryResourceStaticsResponse>;
    /**
    * 为应用绑定SLB
    */ BindSlb(query: BindSlbRequest): Promise<BindSlbResponse>;
    /**
    * 获取应用SLB配置信息
    */ DescribeApplicationSlbs(query: DescribeApplicationSlbsRequest): Promise<DescribeApplicationSlbsResponse>;
    /**
    * 获取应用列表
    */ ListApplications(query: ListApplicationsRequest): Promise<ListApplicationsResponse>;
    /**
    * 创建命名空间
    */ CreateNamespace(query: CreateNamespaceRequest): Promise<CreateNamespaceResponse>;
    /**
    * 更新命名空间信息
    */ UpdateNamespace(query: UpdateNamespaceRequest): Promise<UpdateNamespaceResponse>;
    /**
    * 获取发布的微服务列表
    */ ListPublishedServices(query: ListPublishedServicesRequest): Promise<ListPublishedServicesResponse>;
    /**
    * 获取应用配置信息。
    */ DescribeApplicationConfig(query: DescribeApplicationConfigRequest): Promise<DescribeApplicationConfigResponse>;
    /**
    * 获取订阅的微服务列表
    */ ListConsumedServices(query: ListConsumedServicesRequest): Promise<ListConsumedServicesResponse>;
    /**
    * 查询命名空间详细信息
    */ DescribeNamespace(query: DescribeNamespaceRequest): Promise<DescribeNamespaceResponse>;
    /**
    * 获取应用实例分组
    */ DescribeApplicationGroups(query: DescribeApplicationGroupsRequest): Promise<DescribeApplicationGroupsResponse>;
    /**
    * 删除命名空间
    */ DeleteNamespace(query: DeleteNamespaceRequest): Promise<DeleteNamespaceResponse>;
    /**
    * 获取应用实例列表
    */ DescribeApplicationInstances(query: DescribeApplicationInstancesRequest): Promise<DescribeApplicationInstancesResponse>;
    /**
    * 获取应用微服务容器组件列表
    */ DescribeEdasContainers(query: DescribeEdasContainersRequest): Promise<DescribeEdasContainersResponse>;
    /**
    * 描述应用镜像信息
    */ DescribeApplicationImage(query: DescribeApplicationImageRequest): Promise<DescribeApplicationImageResponse>;
    /**
    * 获取应用创建部署时所需的组件版本
    */ DescribeComponents(query: DescribeComponentsRequest): Promise<DescribeComponentsResponse>;
    /**
    * 使用 DescribeRegions 查询可用地域。
    */ DescribeRegions(query: DescribeRegionsRequest): Promise<DescribeRegionsResponse>;
    /**
    * 获取实例日志
    */ DescribeInstanceLog(query: DescribeInstanceLogRequest): Promise<DescribeInstanceLogResponse>;
    /**
    * 查询命名空间列表
    */ DescribeNamespaces(query: DescribeNamespacesRequest): Promise<DescribeNamespacesResponse>;
    ListLogConfigs(query: ListLogConfigsRequest): Promise<ListLogConfigsResponse>;
}
export default SAE;
