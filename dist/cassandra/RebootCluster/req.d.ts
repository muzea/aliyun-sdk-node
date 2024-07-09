export interface RebootClusterRequest {
    /**
     * 要重启集群的ID。
     * @example `cds-bp1b136j****5d51`
     */
    "ClusterId": string;
    /**
     * 数据中心ID。
     * @example `cn-hangzhou-g`
     */
    "DataCenterId": string;
}
