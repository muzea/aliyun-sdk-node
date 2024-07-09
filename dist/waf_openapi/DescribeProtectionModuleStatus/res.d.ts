export interface DescribeProtectionModuleStatusResponse {
    /**
     * 防护功能模块的启用状态。取值：
     * - **0**：表示功能模块已关闭。
     * - **1**：表示功能模块已开启。
     * @example `1`
     */
    ModuleStatus: number;
    /**
     * 本次请求的ID。
     * @example `D7861F61-5B61-46CE-A47C-6B19160D5EB0`
     */
    RequestId: string;
}
