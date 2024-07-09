export interface UpdateAiOutboundTaskResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `ok`
     */
    Message: string;
    /**
     * 状态码。
     * @example `ok`
     */
    Code: string;
    /**
     * 调用接口是否成功。
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
}
