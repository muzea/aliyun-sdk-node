export interface LockMemberResponse {
    /**
     * 响应状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时，返回的出错信息。
     * @example `The system is busy. Please try again later.`
     */
    Message: string;
    /**
     * 多余参数，请忽略。
     * @example `无`
     */
    Data: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D5C69894-9709-4653-B3D8-25234034C2FC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
}
