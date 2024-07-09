export interface CreateFileProtectRuleRequest {
    /**
     * 配置规则名称。
     * @example `tetsRule`
     */
    "RuleName": string;
    /**
     * 对进程监听的路径列表，支持通配。
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
    "RuleAction": string;
    /**
     * 报警通知级别。取值如下：
     * - 0：不告警
     * - 1： 提醒
     * - 2： 可疑
     * - 3： 高危
     * @example `0`
     */
    "AlertLevel"?: number;
    /**
     * 规则对应的开关ID。
     * @example `FILE_PROTECT_RULE_SWITCH_TYPE_0000`
     */
    "SwitchId"?: string;
    /**
     * 规则状态。
     * - **1**：已启用
     * - **0**：未启用
     * @example `1`
     */
    "Status"?: number;
}
