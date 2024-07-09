export interface UpdateAccountWebhookResponse {
    /**
     * 请求ID。
     * @example `744c4b5c79c9432497a075bdfca3****`
     */
    RequestId: string;
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~196974~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 提示信息，当返回异常时有值。
     * @example `SUCCESS`
     */
    Message: string;
    /**
     * 访问被拒绝详细信息。
     * @example `无`
     */
    AccessDeniedDetail: string;
}
