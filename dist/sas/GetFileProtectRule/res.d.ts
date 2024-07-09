export interface GetFileProtectRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `C0DF9057-67C5-574D-A2D2-0CA9AC74C4D3`
     */
    RequestId: string;
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 规则在客户端的表现形式。取值如下：
         * 1. pass： 放过
         * 2. alert： 告警
         * @example `pass`
         */
        Action: string;
        /**
         * 规则名称。
         * @example `test-000`
         */
        RuleName: string;
        /**
         * 规则对应的开关ID。
         * @example `FILE_PROTECT_RULE_SWITCH_TYPE_0000`
         */
        SwitchId: string;
        /**
         * 规则ID。
         * @example `44616`
         */
        Id: number;
        /**
         * 报警通知级别。取值如下：
         * - 0： 不告警
         * - 1： 提醒
         * - 2： 可疑
         * - 3： 高危
         * @example `0`
         */
        AlertLevel: number;
        /**
         * 对文件进行的操作列表。
         */
        FileOps: string[];
        /**
         * 监控的文件路径。
         */
        FilePaths: string[];
        /**
         * 对进程监听的路径列表。
         */
        ProcPaths: string[];
        /**
         * 规则对应的状态。取值如下：
         * 1. 0： 关闭
         * 2. 1： 开启
         * @example `1`
         */
        Status: number;
    };
}
