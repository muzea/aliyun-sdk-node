export interface DescribeHanaInstancesRequest {
    /**
     * 备份仓库ID。
     * @example `v-000b0ov******6zs`
     */
    "VaultId"?: string;
    /**
     * SAP HANA实例ID。
     * @example `cl-0001zfc******50pr3`
     */
    "ClusterId"?: string;
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
     * SAP HANA实例标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * @example `ace:rm:rgld`
         */
        Key: string;
        /**
         * 标签值。
         * @example `rg-acfmwutpyat2kwy`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-aekz24ikcjyqjkq`
     */
    "ResourceGroupId"?: string;
}
