export interface CreateAiOutboundTaskBatchResponse {
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `OK`
     */
    Message: string;
    /**
     * 请求状态码。
     * @example `OK`
     */
    Code: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**：成功。
     * - **false**：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 新建的任务批次版本ID。
     * @example `123456`
     */
    Data: number;
}
