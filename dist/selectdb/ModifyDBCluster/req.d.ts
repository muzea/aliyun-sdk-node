export interface ModifyDBClusterRequest {
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
     * 集群ID。
     * @example `selectdb-xxxb9f2w-be`
     */
    "DBClusterId": string;
    /**
     * 集群规格，取值说明：
     * - **selectdb.xlarge**：4核 32GB。
     * - **selectdb.2xlarge**：8核 64GB。
     * - **selectdb.4xlarge**：16核 128GB。
     * - **selectdb.8xlarge**：32核 256GB。
     * - **selectdb.16xlarge**：16核 512GB。
     * - **selectdb.24xlarge**：24核 768GB。
     * - **selectdb.32xlarge**：32核 1024GB。
     * @example `selectdb.2xlarge`
     */
    "DBClusterClass": string;
    /**
     * 数据库类型，固定为selectdb。
     * @example `selectdb`
     */
    "Engine"?: string;
    /**
     * 预留缓存大小。
     * @example `200`
     */
    "CacheSize"?: string;
}
