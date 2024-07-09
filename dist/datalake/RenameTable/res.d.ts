export interface RenameTableResponse {
    /**
     * 状态码描述
     * @example `OK`
     */
    Code: string;
    /**
     * 提示相关错误信息
     * @example `.`
     */
    Message: string;
    /**
     * 请求ID
     * @example `B7F4B621-E41E-4C84-B97F-42B5380A32BB`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * Async task Id
     * @example `c38206c3aca0c41332ffe49294243009`
     */
    TaskId: string;
}
