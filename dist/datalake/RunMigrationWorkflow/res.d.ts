export interface RunMigrationWorkflowResponse {
    /**
     * 返回数据，值为工作流实例ID
     * @example `FI-7193B85809CAD95C`
     */
    Data: string;
    /**
     * 请求ID
     * @example `A048EA8E-3519-5B18-B81E-EE3E0B6DBE0C`
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
