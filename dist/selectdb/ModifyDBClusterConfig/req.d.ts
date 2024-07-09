export interface ModifyDBClusterConfigRequest {
    /**
     * 参数及参数值的JSON串。
     * @example `[{\"name\":\"param1\",\"value\":\"1234577777\"},{\"name\":\"param2\",\"value\":\"${yyyyMMdd}\"}]`
     */
    "Parameters": string;
    /**
     * 修改的配置项文件，计算集群固定为be.conf，fe集群固定为fe.conf。
     * @example `be.conf`
     */
    "ConfigKey": string;
    /**
     * 集群ID。
     * @example `selectdb-cn-7213c8yvv09-be`
     */
    "DBClusterId": string;
    /**
     * 实例ID。
     * @example `selectdb-xxxd8a5h60y`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 升级方式。不填写代表立即升级，填写1代表在可维护的时间段升级。
     * @example `1`
     */
    "SwitchTimeMode"?: string;
}
