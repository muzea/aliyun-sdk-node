export interface UpgradeDBInstanceEngineVersionRequest {
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 数据库版本。
     * @example `2.4`
     */
    "EngineVersion": string;
    /**
     * 升级方式。不填写代表立即升级，填写1代表在可维护的时间段升级。
     * @example `1`
     */
    "SwitchTimeMode"?: string;
}
