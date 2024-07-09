export interface ListFileProtectRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `FBBEB173-1F43-505F-A876-C03ECDF6CE4C`
     */
    RequestId: string;
    /**
     * 分页查询时的页面信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `253`
         */
        TotalCount: number;
    };
    /**
     * 返回的数据列表。
     */
    FileProtectList: {
        /**
         * 规则对应的状态。取值如下：
         * - 0： 关闭
         * - 1： 开启
         * @example `1`
         */
        Status: number;
        /**
         * 报警通知级别。取值如下：
         * - 0： 不告警
         * - 1： 提醒
         * - 2： 可疑
         * - 3： 高危
         * @example `0`
         */
        AlertLevel: string;
        /**
         * 规则对应的开关ID。
         * @example `FILE_PROTECT_RULE_SWITCH_TYPE_1693474122927`
         */
        SwitchId: string;
        /**
         * 规则ID。
         * @example `1412511`
         */
        Id: number;
        /**
         * 对文件进行的操作列表。
         */
        FileOps: string[];
        /**
         * 规则在客户端的表现形式。取值如下：
         * - pass： 放过
         * - alert： 告警
         * @example `pass`
         */
        Action: string;
        /**
         * 监控的文件路径列表，支持通配。
         */
        FilePaths: string[];
        /**
         * 对进程监听的路径列表，支持通配。
         */
        ProcPaths: string[];
        /**
         * 规则名称。
         * @example `test11`
         */
        RuleName: string;
        /**
         * 创建时间。
         * @example `1682304179000`
         */
        GmtCreate: number;
        /**
         * 最新一次修改时间。
         * @example `1682304179000`
         */
        GmtModified: number;
        /**
         * 受影响资产总数。
         * @example `12`
         */
        EffectInstanceCount: number;
    }[];
}
