export interface DescribeResourcesModificationRequest {
    /**
     * 目标地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID。例如，当待查询的资源为实例时，可以理解为InstanceId。
     * @example `i-bp67acfmxazb4p****`
     */
    "ResourceId": string;
    /**
     * 是否支持跨集群升级实例规格。取值范围：
     *
     * - true：支持。
     * - false：不支持。
     * 默认值：false。
     * 当参数MigrateAcrossZone取值为true时，一旦您根据返回信息升级了云服务器，请留意以下注意事项：
     *
     * - 经典网络类型实例：
     *     - 对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，实例私网IP地址、云盘设备名和软件授权码会发生变化。对于Linux实例，普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
     *     - 对于[正常售卖的实例规格族](~~25378~~)，实例的私网IP地址会发生变化。
     *
     * - 专有网络VPC类型实例：对于[已停售的实例规格](~~55263~~)，非I/O优化实例变配到I/O优化实例时，云服务器云盘设备名和软件授权码会发生变化。Linux实例的普通云盘（cloud）会被识别为xvda或者xvdb等，高效云盘（cloud_efficiency）和SSD云盘（cloud_ssd）会被识别为vda或者vdb等。
     * @example `true`
     */
    "MigrateAcrossZone"?: boolean;
    /**
     * 目标资源类型。取值范围：
     *
     * - InstanceType：实例规格。
     * - SystemDisk：系统盘类型。
     * @example `InstanceType`
     */
    "DestinationResource": string;
    /**
     * 更改资源配置的操作类型。
     * - 包年包月资源的取值范围：
     *     - Upgrade：升级资源。
     *     - Downgrade：降级资源。
     *     - RenewDowngrade：续费降配。
     *     - RenewModify：过期实例的续费变配。
     * - 按量付费资源的取值：Upgrade。
     * 默认值：Upgrade。
     * @example `Upgrade`
     */
    "OperationType"?: string;
    /**
     * 实例规格。更多信息，请参见[实例规格族](~~25378~~)，也可以调用[DescribeInstanceTypes](~~25620~~) 接口获得最新的规格表。当参数DestinationResource取值为SystemDisk时，必须同时指定InstanceType参数。
     * @example `ecs.g5.large`
     */
    "InstanceType"?: string;
    /**
     * 实例规格的vCPU内核数目。取值请参见[实例规格族](~~25378~~)。当DestinationResource=InstanceType参数有效，Cores才为有效参数。
     * @example `2`
     */
    "Cores"?: number;
    /**
     * 实例规格的内存大小，单位为GiB。取值请参见[实例规格族](~~25378~~)。当DestinationResource=InstanceType，Memory才为有效参数。
     * @example `8.0`
     */
    "Memory"?: number;
    /**
     * 可用区ID。
     * @example `cn-hangzhou-e`
     */
    "ZoneId"?: string;
    /**
     * 条件列表。
     */
    "Conditions"?: string[];
}
