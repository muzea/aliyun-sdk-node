export interface DescribeHanaBackupPlansRequest {
    /**
     * 备份仓库ID。
     * @example `v-000i4lg4kz******ahl`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-000chxz******lz7bk`
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
     * 数据库名称。
     * @example `SYSTEMDB`
     */
    "DatabaseName"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfmvywqfey5njq`
     */
    "ResourceGroupId"?: string;
}
