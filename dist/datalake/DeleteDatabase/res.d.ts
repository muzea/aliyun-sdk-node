export interface DeleteDatabaseResponse {
    /**
     * 状态描述
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
     * @example `73201200-4C1A-4FEF-BD6B-C0DA7994FFA2`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 异步删除Database的taskId
     * @example `c38206c3aca0c41332ffe49294243009`
     */
    TaskId: string;
}
