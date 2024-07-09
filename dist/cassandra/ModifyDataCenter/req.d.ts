export interface ModifyDataCenterRequest {
    /**
     * 集群ID。
     * @example `cds-bp1b136j****5d57`
     */
    "ClusterId": string;
    /**
     * 数据中心ID。
     * @example `cn-hangzhou-g`
     */
    "DataCenterId": string;
    /**
     * 修改后的数据中心名称。
     * @example `Cassandra_test`
     */
    "DataCenterName"?: string;
}
