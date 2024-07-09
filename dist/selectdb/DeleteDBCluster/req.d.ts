export interface DeleteDBClusterRequest {
    /**
     * 资源组ID。
     * @example `rg-4690g37929****`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例ID。
     * @example `selectdb-cn-7213cjv****`
     */
    "DBInstanceId": string;
    /**
     * 集群ID。
     * @example `selectdb-xxxb9f2w-be`
     */
    "DBClusterId": string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
