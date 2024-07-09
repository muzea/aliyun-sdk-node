export interface DeleteBackupPlanRequest {
    /**
     * 备份的集群的ID。
     * @example `cds-bp11tjzh50****7c`
     */
    "ClusterId": string;
    /**
     * 备份集群数据中心ID。
     * @example ` cn-hangzhou-g`
     */
    "DataCenterId": string;
}
