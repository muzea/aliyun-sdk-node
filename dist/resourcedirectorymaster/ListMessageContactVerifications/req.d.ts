export interface ListMessageContactVerificationsRequest {
    /**
     * 联系人ID。
     * @example `c-qL4HqKONzOM7****`
     */
    "ContactId"?: string;
    /**
     * 页码。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页时每页显示的数据条数。
     * @example `10`
     */
    "PageSize"?: number;
}
