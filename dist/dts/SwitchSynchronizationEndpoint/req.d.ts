export interface SwitchSynchronizationEndpointRequest {
    /**
     * 地域ID，传入本参数来指定实例所在地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据同步实例ID，可以通过调用DescribeSynchronizationJobs接口查询。
     * @example `dtsexjk1alb116****`
     */
    "SynchronizationJobId": string;
    /**
     * 同步方向，取值：
     * - **Forward**：正向。
     * - **Reverse**：反向。
     * > 默认取值为**Forward**。
     * 只有当数据同步实例的同步拓扑为双向同步时，本参数传入**Reverse**才会生效。
     * @example `Forward`
     */
    "SynchronizationDirection"?: string;
    /**
     * 待调整连接信息的实例，取值：
     * - **Source**：源实例。
     * - **Destination**：目标实例。
     * @example `Destination`
     */
    "Endpoint.Type": string;
    /**
     * 新数据库所属的实例类型，取值：
     * - **LocalInstance**：有公网IP的自建数据库；
     * - **ECS**：ECS上的自建数据库。
     * - **Express**：通过专线接入的自建数据库。
     * @example `ECS`
     */
    "Endpoint.InstanceType": string;
    /**
     * ECS或专有网络的实例ID。
     * > - 当**Endpoint.InstanceType**取值为**ECS**时，本参数需传入ECS实例的ID。
     * - 当**Endpoint.InstanceType**取值为**Express**时，本参数需传入专有网络ID。
     * @example `i-bp11haem1kpkhoup****`
     */
    "Endpoint.InstanceId": string;
    /**
     * 新数据库的IP地址。
     * > 当**Endpoint.InstanceType**取值为**Express**时，本参数才可用且必须传入。
     * @example `172.15.185.***`
     */
    "Endpoint.IP"?: string;
    /**
     * 新的数据库服务端口。
     * @example `3306`
     */
    "Endpoint.Port": string;
    /**
     * 当源实例与目标实例所属阿里云账号不同时，您需要传入该参数指定源实例的所属阿里云账号的ID。
     * @example `14069264****`
     */
    "SourceEndpoint.OwnerID"?: string;
    /**
     * 当源实例与目标实例所属阿里云账号不同时，需传入该参数，来指定源实例的授权角色，以允许目标实例阿里云账号访问源实例的实例信息。
     * > 角色所需的权限及授权方式，请参见[跨阿里云账号数据迁移或同步时如何配置RAM授权](~~48468~~)。
     * @example `ram-for-dts`
     */
    "SourceEndpoint.Role"?: string;
    /**
     * 阿里云账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
}
