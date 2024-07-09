export interface UpdateAutoSqlOptimizeStatusRequest {
    /**
     * 数据库实例ID，多个ID间以英文逗号（,）分隔。
     * > 最多不能输入超过50个数据库实例ID。
     * @example `rm-bp10usoc1erj7****,rm-bp10usoc1erj7****`
     */
    "Instances": string;
    /**
     * 自动SQL优化功能的状态：
     * - **0**：关闭自动SQL优化功能。
     * - **1**：设置为**SQL诊断并自动索引创建**。
     * - **3**：设置为**仅SQL诊断**。
     * @example `1`
     */
    "Status": number;
}
