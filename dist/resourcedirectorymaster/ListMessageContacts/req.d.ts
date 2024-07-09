export interface ListMessageContactsRequest {
    /**
     * 联系人ID。
     * @example `c-qL4HqKONzOM7****`
     */
    "ContactId"?: string;
    /**
     * 绑定目标ID。取值：
     * - 资源目录ID。
     * - 资源夹ID。
     * - 成员ID。
     * @example `fd-ZDNPiT****`
     */
    "Member"?: string;
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
