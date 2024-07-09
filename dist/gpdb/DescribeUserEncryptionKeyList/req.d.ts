export interface DescribeUserEncryptionKeyListRequest {
    /**
     * 地域ID，您可通过接口[DescribeRegions](~~86912~~)查看可用的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 页码，大于0且不超过Integer的最大值，默认值：1。
     * @example `1`
     */
    "PageNumber"?: string;
    /**
     * 每页记录数，取值说明：
     * - **30**
     * - **50**
     * - **100**
     * 默认值：**30**。
     * @example `30`
     */
    "PageSize"?: string;
}
