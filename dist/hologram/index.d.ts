import { EnableHiveAccessRequest } from "./EnableHiveAccess/req";
import { EnableHiveAccessResponse } from "./EnableHiveAccess/res";
import { DisableHiveAccessRequest } from "./DisableHiveAccess/req";
import { DisableHiveAccessResponse } from "./DisableHiveAccess/res";
import { DeleteInstanceRequest } from "./DeleteInstance/req";
import { DeleteInstanceResponse } from "./DeleteInstance/res";
import { StopInstanceRequest } from "./StopInstance/req";
import { StopInstanceResponse } from "./StopInstance/res";
import { UpdateInstanceNetworkTypeRequest } from "./UpdateInstanceNetworkType/req";
import { UpdateInstanceNetworkTypeResponse } from "./UpdateInstanceNetworkType/res";
import { ResumeInstanceRequest } from "./ResumeInstance/req";
import { ResumeInstanceResponse } from "./ResumeInstance/res";
import { RestartInstanceRequest } from "./RestartInstance/req";
import { RestartInstanceResponse } from "./RestartInstance/res";
import { GetInstanceRequest } from "./GetInstance/req";
import { GetInstanceResponse } from "./GetInstance/res";
import { UpdateInstanceNameRequest } from "./UpdateInstanceName/req";
import { UpdateInstanceNameResponse } from "./UpdateInstanceName/res";
import { ListInstancesRequest } from "./ListInstances/req";
import { ListInstancesResponse } from "./ListInstances/res";
import { ListWarehousesRequest } from "./ListWarehouses/req";
import { ListWarehousesResponse } from "./ListWarehouses/res";
import { RenewInstanceRequest } from "./RenewInstance/req";
import { RenewInstanceResponse } from "./RenewInstance/res";
import { CreateInstanceRequest } from "./CreateInstance/req";
import { CreateInstanceResponse } from "./CreateInstance/res";
import { ScaleInstanceRequest } from "./ScaleInstance/req";
import { ScaleInstanceResponse } from "./ScaleInstance/res";
import { ChangeResourceGroupRequest } from "./ChangeResourceGroup/req";
import { ChangeResourceGroupResponse } from "./ChangeResourceGroup/res";
import { GetWarehouseDetailRequest } from "./GetWarehouseDetail/req";
import { GetWarehouseDetailResponse } from "./GetWarehouseDetail/res";

interface HOLOGRAM {
    /**
     * 开启数据湖加速。
     */
    EnableHiveAccess(query: EnableHiveAccessRequest): Promise<EnableHiveAccessResponse>;
    /**
     * 关闭数据湖加速。
     */
    DisableHiveAccess(query: DisableHiveAccessRequest): Promise<DisableHiveAccessResponse>;
    /**
     * 该接口用于释放Hologres实例。
     */
    DeleteInstance(query: DeleteInstanceRequest): Promise<DeleteInstanceResponse>;
    /**
     * 暂停实例。
     */
    StopInstance(query: StopInstanceRequest): Promise<StopInstanceResponse>;
    /**
     * 修改实例网络。
     */
    UpdateInstanceNetworkType(query: UpdateInstanceNetworkTypeRequest): Promise<UpdateInstanceNetworkTypeResponse>;
    /**
     * 恢复暂停的实例。
     */
    ResumeInstance(query: ResumeInstanceRequest): Promise<ResumeInstanceResponse>;
    /**
     * 重启实例。
     */
    RestartInstance(query: RestartInstanceRequest): Promise<RestartInstanceResponse>;
    /**
     * 获取实例详情。
     */
    GetInstance(query: GetInstanceRequest): Promise<GetInstanceResponse>;
    /**
     * 修改实例名称。
     */
    UpdateInstanceName(query: UpdateInstanceNameRequest): Promise<UpdateInstanceNameResponse>;
    /**
     * 获取实例列表。
     */
    ListInstances(query: ListInstancesRequest): Promise<ListInstancesResponse>;
    /**
     * 计算组列表
     */
    ListWarehouses(query: ListWarehousesRequest): Promise<ListWarehousesResponse>;
    /**
     * 该接口用于为Hologres实例手动续费。可以在续费的同时开启按月自动续费。
     */
    RenewInstance(query: RenewInstanceRequest): Promise<RenewInstanceResponse>;
    /**
     * 该接口用于创建Hologres实例。
     */
    CreateInstance(query: CreateInstanceRequest): Promise<CreateInstanceResponse>;
    /**
     * 该接口用于变更Hologres实例的规格和存储空间。
     */
    ScaleInstance(query: ScaleInstanceRequest): Promise<ScaleInstanceResponse>;
    /**
     * 更新资源组
     */
    ChangeResourceGroup(query: ChangeResourceGroupRequest): Promise<ChangeResourceGroupResponse>;
    /**
     * 计算组详细信息。
     */
    GetWarehouseDetail(query: GetWarehouseDetailRequest): Promise<GetWarehouseDetailResponse>;
}
export default HOLOGRAM;
