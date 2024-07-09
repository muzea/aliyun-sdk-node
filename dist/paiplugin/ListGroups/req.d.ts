export interface ListGroupsRequest {
    /**
     * 人群名称过滤。
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
     * 是否包含手机号过滤。
     * @example `true`
     */
    "PhoneNumber"?: boolean;
    /**
     * 人群备注过滤。
     * @example `充值大于一万`
     */
    "Remark"?: string;
    /**
     * 来源过滤。
     * @example `0`
     */
    "Source"?: number;
    /**
     * 审核状态过滤。
     * @example `0`
     */
    "Status"?: number;
}
