export interface FailbackResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `56CF7F68-C07B-5BE2-BE82-09D8E9719076`
     */
    RequestId: string;
    /**
     * 任务id。
     * @example `t-0004ka624vrza82g46ne`
     */
    TaskId: string;
    /**
     * 请求是否成功。
     * @example `True`
     */
    Success: boolean;
}
