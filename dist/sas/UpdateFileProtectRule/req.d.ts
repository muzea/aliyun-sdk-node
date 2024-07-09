export interface UpdateFileProtectRuleRequest {
    /**
     * 规则名称。
     * @example `test-rule-1`
     */
    "RuleName": string;
    /**
     * 对进程监听的路径列表。
     */
    "ProcPaths": string[];
    /**
     * 监控的文件路径列表，支持通配。
     */
    "FilePaths": string[];
    /**
     * 对文件进行的操作列表。
     */
    "FileOps": string[];
    /**
     * 规则在客户端的表现形式。取值如下：
     * - pass： 放过
     * - alert： 告警
     * @example `pass`
     */
    "RuleAction"?: string;
    /**
     * 报警通知级别。取值如下：
     * - 0: 不告警
     * - 1: 提醒
     * - 2: 可疑
     * - 3: 高危
     * @example `0`
     */
    "AlertLevel"?: number;
    /**
     * 设置规则状态。
     * - **0**：未启用
     * - **1**：已启用
     * @example `1`
     */
    "Status"?: number;
    /**
     * 规则ID。
     * @example `1062`
     */
    "Id"?: number;
}
