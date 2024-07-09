export interface ModifyDBInstanceDescriptionRequest {
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
     * 实例备注描述。
     * @example `测试实例`
     */
    "DBInstanceDescription": string;
}
