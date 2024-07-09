export interface GetRumExceptionStackResponse {
    /**
     * Id of the request
     * @example `B6A00968-82A8-4F14-9D1B-B53827DB****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 请求是否执行成功：
     * - `true`：操作成功
     * - `false`：操作失败
     * @example `true`
     */
    Success: string;
    /**
     * 调用失败时返回的信息。
     * @example `内部错误，请联系管理员。`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: string;
    /**
     * 返回结果信息。
     */
    Data: {
        /**
         * 线程ID。
         * @example `16643`
         */
        ThreadId: string;
        /**
         * 堆栈列表。
         */
        Lines: string[];
    };
}
