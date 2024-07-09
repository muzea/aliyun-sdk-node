export interface SearchAlertContactRequest {
    /**
     * 报警联系人名称。
     * @example `John Doe`
     */
    "ContactName"?: string;
    /**
     * 报警联系人电话号码。
     * @example `1381111*****`
     */
    "Phone"?: string;
    /**
     * 联系人邮箱地址。
     * @example `someone@example.com`
     */
    "Email"?: string;
    /**
     * 查询分页的当前页码。
     * @example `1`
     */
    "CurrentPage"?: string;
    /**
     * 查询分页的每页项目数量。
     * @example `20`
     */
    "PageSize"?: string;
    /**
     * 地域ID。始终填写`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报警联系人ID。
     * @example `[12345]`
     */
    "ContactIds"?: string;
}
