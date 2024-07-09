export interface CreateExportMigrationResponse {
    /**
     * 请求ID。用于定位日志，排查问题。
     * @example `34267E2E-0335-1A60-A1F0-ADA530890CBA`
     */
    RequestId: string;
    /**
     * 导出任务的ID。
     * @example `1234`
     */
    Data: number;
    /**
     * 调用是否成功。取值如下：
     * - true：调用成功。
     * - false：调用失败，您可以根据请求ID定位具体问题。
     * @example `true`
     */
    Success: boolean;
}
