export interface DescribeClustersRequest {
    /**
     * 集群ID。
     * @example `gws-rhzlyl5zx3ua****`
     */
    "ClusterId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页的行数。
     * @example `10`
     */
    "PageSize"?: number;
}
