export interface BackFillResponse {
    /**
     * 请求ID。
     * @example `7FAD400F-7A5C-4193-8F9A-39D86C4F0231`
     */
    RequestId: string;
    /**
     * 错误码。
     * @example `UnknownError`
     */
    ErrorCode: string;
    /**
     * 调用失败时，返回的错误信息。
     * @example `UnknownError`
     */
    ErrorMessage: string;
    /**
     * 请求是否成功，返回值如下：
     * - **true**：请求成功
     * - **false**：请求失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 任务流运行记录ID，可通过调用接口[ListTaskFlowInstance](~~424689~~)获取该参数的值。
     * @example `47****`
     */
    DagInstanceId: number;
    /**
     * 同DagInstanceId。
     * @example `47****
    `
     */
    NodeId: number;
}
