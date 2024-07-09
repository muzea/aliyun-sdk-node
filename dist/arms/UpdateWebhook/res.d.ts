export interface UpdateWebhookResponse {
    /**
     * 请求结果。
     * - `true`：修改成功。
     * - `false`：修改失败。
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID。
     * @example `16AF921B-8187-489F-9913-43C808B4****`
     */
    RequestId: string;
}
