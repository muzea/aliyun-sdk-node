export interface SubmitCheckRequest {
    /**
     * 检查范围，取值：
     * - **FULL**：扫描所有检查项
     * - **POLICY**：扫描自定义配置的检查项
     * @example `POLICY`
     */
    "ScanRange"?: string;
}
