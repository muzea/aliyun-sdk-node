export interface CreatePublishGroupTaskResponse {
    /**
     * 任务ID。
     * @example `522***`
     */
    TaskId: number;
    /**
     * 请求ID。
     * @example `28A1B16E-8CC7-51C3-A298-B8FC79AEB0A0`
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
}
