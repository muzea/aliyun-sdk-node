import { ListServiceInstancesRequest } from "./ListServiceInstances/req";
import { ListServiceInstancesResponse } from "./ListServiceInstances/res";
import { CreateServiceInstanceRequest } from "./CreateServiceInstance/req";
import { CreateServiceInstanceResponse } from "./CreateServiceInstance/res";
import { DeleteServiceInstancesRequest } from "./DeleteServiceInstances/req";
import { DeleteServiceInstancesResponse } from "./DeleteServiceInstances/res";
import { GetServiceInstanceRequest } from "./GetServiceInstance/req";
import { GetServiceInstanceResponse } from "./GetServiceInstance/res";
import { ContinueDeployServiceInstanceRequest } from "./ContinueDeployServiceInstance/req";
import { ContinueDeployServiceInstanceResponse } from "./ContinueDeployServiceInstance/res";
import { ListServiceInstanceLogsRequest } from "./ListServiceInstanceLogs/req";
import { ListServiceInstanceLogsResponse } from "./ListServiceInstanceLogs/res";
import { ListServiceInstanceResourcesRequest } from "./ListServiceInstanceResources/req";
import { ListServiceInstanceResourcesResponse } from "./ListServiceInstanceResources/res";
import { GetServiceTemplateParameterConstraintsRequest } from "./GetServiceTemplateParameterConstraints/req";
import { GetServiceTemplateParameterConstraintsResponse } from "./GetServiceTemplateParameterConstraints/res";
import { UpdateServiceInstanceSpecRequest } from "./UpdateServiceInstanceSpec/req";
import { UpdateServiceInstanceSpecResponse } from "./UpdateServiceInstanceSpec/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { RestartServiceInstanceRequest } from "./RestartServiceInstance/req";
import { RestartServiceInstanceResponse } from "./RestartServiceInstance/res";
import { StopServiceInstanceRequest } from "./StopServiceInstance/req";
import { StopServiceInstanceResponse } from "./StopServiceInstance/res";
import { StartServiceInstanceRequest } from "./StartServiceInstance/req";
import { StartServiceInstanceResponse } from "./StartServiceInstance/res";

interface COMPUTENEST {
    /**
     * 调用ListServiceInstances查询服务实例列表。
     */
    ListServiceInstances(query: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse>;
    /**
     * 创建并部署服务实例。
     */
    CreateServiceInstance(query: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse>;
    /**
     * 调用DeleteServiceInstances删除服务实例。
     */
    DeleteServiceInstances(query: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse>;
    /**
     * 查询指定服务实例的详细信息。
     */
    GetServiceInstance(query: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse>;
    /**
     * 服务实例部署失败后，调用ContinueDeployServiceInstance继续部署该服务实例。
     */
    ContinueDeployServiceInstance(query: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse>;
    /**
     * 调用ListServiceInstanceLogs查询服务实例的部署和升级日志。
     */
    ListServiceInstanceLogs(query: ListServiceInstanceLogsRequest): Promise<ListServiceInstanceLogsResponse>;
    /**
     * 调用ListServiceInstanceResources查询服务实例包含的资源。
     */
    ListServiceInstanceResources(query: ListServiceInstanceResourcesRequest): Promise<ListServiceInstanceResourcesResponse>;
    /**
     * 查询ROS模板参数限定值。
     */
    GetServiceTemplateParameterConstraints(query: GetServiceTemplateParameterConstraintsRequest): Promise<GetServiceTemplateParameterConstraintsResponse>;
    /**
     * 当服务实例的参数值或套餐设置不满足您的要求时，调用UpdateServiceInstanceSpec对服务实例执行变配操作。
     */
    UpdateServiceInstanceSpec(query: UpdateServiceInstanceSpecRequest): Promise<UpdateServiceInstanceSpecResponse>;
    /**
     * 修改云资源所属的资源组。
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 当服务实例状态为Deployed（已部署）时，调用RestartServiceInstance接口重启服务实例。
     */
    RestartServiceInstance(query: RestartServiceInstanceRequest): Promise<RestartServiceInstanceResponse>;
    /**
     * 当服务实例状态为Deployed（已部署）、StopFailed（关机失败）时，调用StopServiceInstance接口关闭服务实例。
     */
    StopServiceInstance(query: StopServiceInstanceRequest): Promise<StopServiceInstanceResponse>;
    /**
     * When the service instance status is Stopped (Stopped) or StartFailed (Startup failed), the StartServiceInstance interface is invoked to start the service instance.
     */
    StartServiceInstance(query: StartServiceInstanceRequest): Promise<StartServiceInstanceResponse>;
}
export default COMPUTENEST;
