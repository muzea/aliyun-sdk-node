export interface DescribeContactsRequest {
    /**
     * 告警联系人姓名。
     * @example `John Doe`
     */
    "ContactName"?: string;
    /**
     * 告警联系人手机号码。
     * @example `1381111*****`
     */
    "Phone"?: string;
    /**
     * 告警联系人邮箱地址。
     * @example `someone@example.com`
     */
    "Email"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的联系人数。
     * @example `20`
     */
    "Size": number;
    /**
     * 需要查询的联系人id。多个联系人id以空格分隔。
     * @example `123,321`
     */
    "ContactIds"?: string;
    /**
     * 返回冗余信息开关
     * @example `true`
     */
    "Verbose"?: string;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
