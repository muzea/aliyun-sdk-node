export interface DescribeWebhookContactsRequest {
    /**
     * Webhook告警联系人名称。
     * @example `webhook名称`
     */
    "WebhookName"?: string;
    /**
     * 查询页数。
     * @example `1`
     */
    "Page": number;
    /**
     * 每页展示的Webhook告警联系人数。
     * @example `20`
     */
    "Size": number;
    /**
     * 联系人ID。
     * @example `123`
     */
    "ContactIds"?: string;
}
