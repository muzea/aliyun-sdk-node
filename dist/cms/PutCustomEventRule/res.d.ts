export interface PutCustomEventRuleResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The request has failed due to a temporary failure of the server.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `AD5DCD82-BD1C-405F-BAED-32302DE9F498`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
}
