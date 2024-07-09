export interface DescribeHanaDatabasesRequest {
    /**
     * 备份库仓库ID。
     * @example `v-00063fq******8xjr`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000hpc******uv14x`
     */
    "ClusterId": string;
    /**
     * 分页页码。从1开始，默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小。最小值为1，最大值为99，默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 资源组ID。
     * @example `rg-acfmw2azsegupmi`
     */
    "ResourceGroupId"?: string;
}
