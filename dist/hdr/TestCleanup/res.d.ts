export interface TestCleanupResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 请求ID
     * @example `531E3DB9-3ED6-5F06-A09A-721F279CB64B`
     */
    RequestId: string;
    /**
     * 任务id。
     * @example `t-000bzkmmlwh6tpzhitdz`
     */
    TaskId: string;
    /**
     * 操作是否成功。
     * @example `True`
     */
    Success: boolean;
}
