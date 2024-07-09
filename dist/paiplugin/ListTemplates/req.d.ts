export interface ListTemplatesRequest {
    /**
     * 模板内容过滤。
     * @example `七夕`
     */
    "Content"?: string;
    /**
     * 模板名称过滤。
     * @example `召回`
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
     * 审核状态过滤。
     * - 0 : 审核中。
     * - 1 : 审核通过。
     * - 2 : 审核不通过。
     * @example `0`
     */
    "Status"?: number;
    /**
     * 模板类型过滤。
     * - 0 : 验证码。
     * - 1 : 短信通知。
     * - 2 : 推广短信。
     * @example `0`
     */
    "Type"?: number;
}
