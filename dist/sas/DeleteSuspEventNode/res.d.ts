export interface DeleteSuspEventNodeResponse {
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 附加消息。
     * @example `successful`
     */
    Message: string;
    /**
     * 唯一请求ID。
     * @example `A57C711B-AA15-55B2-8F61-4D09CEXXXXX`
     */
    RequestId: string;
}
