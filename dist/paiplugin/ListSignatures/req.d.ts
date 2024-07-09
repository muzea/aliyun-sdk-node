export interface ListSignaturesRequest {
    /**
     * 签名名称过滤。
     * @example `用户增长`
     */
    "Name"?: string;
    /**
     * 分页数，从1开始，默认为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页大小，默认为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 签名审核状态过滤。
     * - 0：审核中。
     * - 1：审核通过。
     * - 2：审核不通过。
     * @example `0`
     */
    "Status"?: number;
}
