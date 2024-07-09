export interface MigrateSessionPackageResponse {
    /**
     * 请求ID。
     * @example `E25FC620-6B6F-12D2-A992-AD8727DC****`
     */
    RequestId: string;
    /**
     * 接口请求返回的信息。
     * @example `会话包不处于可用状态`
     */
    Message: string;
    /**
     * 错误码。
     * @example `NO_DATA`
     */
    Code: string;
    /**
     * 请求成功与否，成功返回为true，失败为false
     * @example `true`
     */
    Success: boolean;
}
