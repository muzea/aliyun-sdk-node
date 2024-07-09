export interface ModifyDBInstanceAttributeRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 修改项，取值说明：
     * - **MaintainTime**：修改运维时间，格式为hh:mm-hh:mm。
     * - **DBInstanceDescription**：修改实例备注。
     * @example `DBInstanceDescription`
     */
    "InstanceAttributeType": string;
    /**
     * 修改内容。取值说明：
     * - 当InstanceAttributeType为MaintainTime时，您可以取值为00:00-06:00。
     * - 当InstanceAttributeType为DBInstanceDescription时，您可以取值为testdb。
     * @example `testdb01`
     */
    "Value": string;
}
