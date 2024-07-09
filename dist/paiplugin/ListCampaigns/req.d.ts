export interface ListCampaignsRequest {
    /**
     * 运营活动名称过滤。
     * @example `VIP客户`
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
     * 运营活动备注过滤。
     * @example `充值大于一万`
     */
    "Remark"?: string;
}
