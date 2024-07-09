import { ListServicesRequest } from "./ListServices/req";
import { ListServicesResponse } from "./ListServices/res";
import { UpdateServiceRequest } from "./UpdateService/req";
import { UpdateServiceResponse } from "./UpdateService/res";
import { RegisterServiceRequest } from "./RegisterService/req";
import { RegisterServiceResponse } from "./RegisterService/res";
import { GetServiceInstanceRequest } from "./GetServiceInstance/req";
import { GetServiceInstanceResponse } from "./GetServiceInstance/res";
import { DeleteServiceRequest } from "./DeleteService/req";
import { DeleteServiceResponse } from "./DeleteService/res";
import { ListServiceInstancesRequest } from "./ListServiceInstances/req";
import { ListServiceInstancesResponse } from "./ListServiceInstances/res";
import { CreateServiceRequest } from "./CreateService/req";
import { CreateServiceResponse } from "./CreateService/res";
import { GetServiceRequest } from "./GetService/req";
import { GetServiceResponse } from "./GetService/res";
import { AddServiceSharedAccountsRequest } from "./AddServiceSharedAccounts/req";
import { AddServiceSharedAccountsResponse } from "./AddServiceSharedAccounts/res";
import { CreateArtifactRequest } from "./CreateArtifact/req";
import { CreateArtifactResponse } from "./CreateArtifact/res";
import { UpdateArtifactRequest } from "./UpdateArtifact/req";
import { UpdateArtifactResponse } from "./UpdateArtifact/res";
import { ListArtifactVersionsRequest } from "./ListArtifactVersions/req";
import { ListArtifactVersionsResponse } from "./ListArtifactVersions/res";
import { GetArtifactRequest } from "./GetArtifact/req";
import { GetArtifactResponse } from "./GetArtifact/res";
import { ListArtifactsRequest } from "./ListArtifacts/req";
import { ListArtifactsResponse } from "./ListArtifacts/res";
import { ReleaseArtifactRequest } from "./ReleaseArtifact/req";
import { ReleaseArtifactResponse } from "./ReleaseArtifact/res";
import { DeleteArtifactRequest } from "./DeleteArtifact/req";
import { DeleteArtifactResponse } from "./DeleteArtifact/res";
import { ContinueDeployServiceInstanceRequest } from "./ContinueDeployServiceInstance/req";
import { ContinueDeployServiceInstanceResponse } from "./ContinueDeployServiceInstance/res";
import { CreateServiceInstanceRequest } from "./CreateServiceInstance/req";
import { CreateServiceInstanceResponse } from "./CreateServiceInstance/res";
import { DeleteServiceInstancesRequest } from "./DeleteServiceInstances/req";
import { DeleteServiceInstancesResponse } from "./DeleteServiceInstances/res";
import { GetServiceTemplateParameterConstraintsRequest } from "./GetServiceTemplateParameterConstraints/req";
import { GetServiceTemplateParameterConstraintsResponse } from "./GetServiceTemplateParameterConstraints/res";
import { GetServiceEstimateCostRequest } from "./GetServiceEstimateCost/req";
import { GetServiceEstimateCostResponse } from "./GetServiceEstimateCost/res";
import { ListServiceUsagesRequest } from "./ListServiceUsages/req";
import { ListServiceUsagesResponse } from "./ListServiceUsages/res";
import { UpdateServiceInstanceAttributeRequest } from "./UpdateServiceInstanceAttribute/req";
import { UpdateServiceInstanceAttributeResponse } from "./UpdateServiceInstanceAttribute/res";
import { ListAcrImageRepositoriesRequest } from "./ListAcrImageRepositories/req";
import { ListAcrImageRepositoriesResponse } from "./ListAcrImageRepositories/res";
import { ListAcrImageTagsRequest } from "./ListAcrImageTags/req";
import { ListAcrImageTagsResponse } from "./ListAcrImageTags/res";
import { GetArtifactRepositoryCredentialsRequest } from "./GetArtifactRepositoryCredentials/req";
import { GetArtifactRepositoryCredentialsResponse } from "./GetArtifactRepositoryCredentials/res";
import { UpgradeServiceInstanceRequest } from "./UpgradeServiceInstance/req";
import { UpgradeServiceInstanceResponse } from "./UpgradeServiceInstance/res";
import { UpdateServiceInstanceSpecRequest } from "./UpdateServiceInstanceSpec/req";
import { UpdateServiceInstanceSpecResponse } from "./UpdateServiceInstanceSpec/res";
import { ModifyServiceInstanceResourcesRequest } from "./ModifyServiceInstanceResources/req";
import { ModifyServiceInstanceResourcesResponse } from "./ModifyServiceInstanceResources/res";
import { DeployServiceInstanceRequest } from "./DeployServiceInstance/req";
import { DeployServiceInstanceResponse } from "./DeployServiceInstance/res";
import { GetUploadCredentialsRequest } from "./GetUploadCredentials/req";
import { GetUploadCredentialsResponse } from "./GetUploadCredentials/res";
import { PushMeteringDataRequest } from "./PushMeteringData/req";
import { PushMeteringDataResponse } from "./PushMeteringData/res";
import { StartServiceInstanceRequest } from "./StartServiceInstance/req";
import { StartServiceInstanceResponse } from "./StartServiceInstance/res";
import { RestartServiceInstanceRequest } from "./RestartServiceInstance/req";
import { RestartServiceInstanceResponse } from "./RestartServiceInstance/res";
import { StopServiceInstanceRequest } from "./StopServiceInstance/req";
import { StopServiceInstanceResponse } from "./StopServiceInstance/res";

interface COMPUTENESTSUPPLIER {
    /**
     * 通过指定地域ID、服务ID等参数，查询服务信息列表。例如，服务状态，服务版本，发布时间等信息。
     */
    ListServices(query: ListServicesRequest): Promise<ListServicesResponse>;
    /**
     * 升级服务。
     */
    UpdateService(query: UpdateServiceRequest): Promise<UpdateServiceResponse>;
    /**
     * 注册部署物。
     */
    RegisterService(query: RegisterServiceRequest): Promise<RegisterServiceResponse>;
    /**
     * 查询指定服务实例的详细信息。
     */
    GetServiceInstance(query: GetServiceInstanceRequest): Promise<GetServiceInstanceResponse>;
    /**
     * 删除指定服务。
     */
    DeleteService(query: DeleteServiceRequest): Promise<DeleteServiceResponse>;
    /**
     * 查询服务实例列表。
     */
    ListServiceInstances(query: ListServiceInstancesRequest): Promise<ListServiceInstancesResponse>;
    /**
     * 创建新的服务。
     */
    CreateService(query: CreateServiceRequest): Promise<CreateServiceResponse>;
    /**
     * 调用GetService查询指定服务的详细信息。
     */
    GetService(query: GetServiceRequest): Promise<GetServiceResponse>;
    /**
     * 调用AddServiceSharedAccounts新增服务的共享账号。
     */
    AddServiceSharedAccounts(query: AddServiceSharedAccountsRequest): Promise<AddServiceSharedAccountsResponse>;
    /**
     * 调用CreateArtifact创建部署物。
     */
    CreateArtifact(query: CreateArtifactRequest): Promise<CreateArtifactResponse>;
    /**
     * 调用UpdateArtifact更新部署物。
     */
    UpdateArtifact(query: UpdateArtifactRequest): Promise<UpdateArtifactResponse>;
    /**
     * 调用ListArtifactVersions查询部署物版本信息。
     */
    ListArtifactVersions(query: ListArtifactVersionsRequest): Promise<ListArtifactVersionsResponse>;
    /**
     * 调用GetArtifact查询部署物详情。
     */
    GetArtifact(query: GetArtifactRequest): Promise<GetArtifactResponse>;
    /**
     * 调用ListArtifacts查询部署物列表。
     */
    ListArtifacts(query: ListArtifactsRequest): Promise<ListArtifactsResponse>;
    /**
     * 调用ReleaseArtifact发布部署物。
     */
    ReleaseArtifact(query: ReleaseArtifactRequest): Promise<ReleaseArtifactResponse>;
    /**
     * 当您不再需要部署物或部署物对应版本，调用DeleteArtifact删除部署物。
     */
    DeleteArtifact(query: DeleteArtifactRequest): Promise<DeleteArtifactResponse>;
    /**
     * 服务实例部署失败后，调用ContinueDeployServiceInstance继续部署该服务实例。
     */
    ContinueDeployServiceInstance(query: ContinueDeployServiceInstanceRequest): Promise<ContinueDeployServiceInstanceResponse>;
    /**
     * 创建并部署服务实例。
     */
    CreateServiceInstance(query: CreateServiceInstanceRequest): Promise<CreateServiceInstanceResponse>;
    /**
     * 调用DeleteServiceInstances删除服务实例。
     */
    DeleteServiceInstances(query: DeleteServiceInstancesRequest): Promise<DeleteServiceInstancesResponse>;
    /**
     * 查询ROS模板参数限定值。
     */
    GetServiceTemplateParameterConstraints(query: GetServiceTemplateParameterConstraintsRequest): Promise<GetServiceTemplateParameterConstraintsResponse>;
    /**
     * 查询创建服务实例的预估价格。
     */
    GetServiceEstimateCost(query: GetServiceEstimateCostRequest): Promise<GetServiceEstimateCostResponse>;
    /**
     * 查看用户自己当前的服务使用申请。
     */
    ListServiceUsages(query: ListServiceUsagesRequest): Promise<ListServiceUsagesResponse>;
    /**
     * 更新服务实例的属性。
     */
    UpdateServiceInstanceAttribute(query: UpdateServiceInstanceAttributeRequest): Promise<UpdateServiceInstanceAttributeResponse>;
    /**
     * 调用ListAcrImageRepositories查看已上传至ACR的镜像列表。
     */
    ListAcrImageRepositories(query: ListAcrImageRepositoriesRequest): Promise<ListAcrImageRepositoriesResponse>;
    /**
     * 调用ListAcrImageTags查看镜像仓库中已上传的镜像版本。
     */
    ListAcrImageTags(query: ListAcrImageTagsRequest): Promise<ListAcrImageTagsResponse>;
    /**
     * 获取部署物上传所需的凭证。
     */
    GetArtifactRepositoryCredentials(query: GetArtifactRepositoryCredentialsRequest): Promise<GetArtifactRepositoryCredentialsResponse>;
    /**
     * 调用UpgradeServiceInstance升级服务实例。
     */
    UpgradeServiceInstance(query: UpgradeServiceInstanceRequest): Promise<UpgradeServiceInstanceResponse>;
    /**
     * 变配服务实例。
     */
    UpdateServiceInstanceSpec(query: UpdateServiceInstanceSpecRequest): Promise<UpdateServiceInstanceSpecResponse>;
    /**
     * 修改服务实例的资源信息。
     */
    ModifyServiceInstanceResources(query: ModifyServiceInstanceResourcesRequest): Promise<ModifyServiceInstanceResourcesResponse>;
    /**
     * 部署服务实例。
     */
    DeployServiceInstance(query: DeployServiceInstanceRequest): Promise<DeployServiceInstanceResponse>;
    /**
     * 获取上传文件的访问密钥。
     */
    GetUploadCredentials(query: GetUploadCredentialsRequest): Promise<GetUploadCredentialsResponse>;
    /**
     * 推送云市场计量数据。
     */
    PushMeteringData(query: PushMeteringDataRequest): Promise<PushMeteringDataResponse>;
    /**
     * 当服务实例状态为Stopped（已关机）、StartFailed（开机失败）时，调用StartServiceInstance接口启动服务实例。
     */
    StartServiceInstance(query: StartServiceInstanceRequest): Promise<StartServiceInstanceResponse>;
    /**
     * 当服务实例状态为Deployed（已部署）时，调用RestartServiceInstance接口重启服务实例。
     */
    RestartServiceInstance(query: RestartServiceInstanceRequest): Promise<RestartServiceInstanceResponse>;
    /**
     * 当服务实例状态为Deployed（已部署）、StopFailed（关机失败）时，调用StopServiceInstance接口关闭服务实例。
     */
    StopServiceInstance(query: StopServiceInstanceRequest): Promise<StopServiceInstanceResponse>;
}
export default COMPUTENESTSUPPLIER;
