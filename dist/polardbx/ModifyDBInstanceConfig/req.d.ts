export interface ModifyDBInstanceConfigRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `pxc-hzjasd****`
     */
    "DBInstanceName": string;
    /**
     * 待修改的配置项，详情请参见[计算层变量](~~316576~~)。
     * @example `ENABLE_CONSISTENT_REPLICA_READ`
     */
    "ConfigName": string;
    /**
     * 如果configName = ENABLE_CONSISTENT_REPLICA_READ， 取值”true”或“false”。
     * @example `true`
     */
    "ConfigValue": string;
}
