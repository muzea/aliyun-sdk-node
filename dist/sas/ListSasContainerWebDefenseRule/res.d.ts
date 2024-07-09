export interface ListSasContainerWebDefenseRuleResponse {
    /**
     * 请求的ID。用于定位日志，排查问题。
     * @example `8C376***AE74FB4`
     */
    RequestId: string;
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询到的数据总条数。
         * @example `42`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `4`
         */
        Count: number;
    };
    /**
     * 容器防篡改规则列表。
     */
    ContainerWebDefenseRuleList: {
        /**
         * 规则状态。取值说明如下：
         * - **1**：启用
         * - **0**：禁用
         * @example `1`
         */
        RuleStatus: number;
        /**
         * 用户ID。
         * @example `1766185894104675`
         */
        AliUid: number;
        /**
         * 配置的应用数量。
         * @example `10`
         */
        ApptotalCount: number;
        /**
         * 规则ID。
         * @example `420336648`
         */
        Id: number;
        /**
         * 规则名称。
         * @example `test2`
         */
        RuleName: string;
        /**
         * 创建时间。单位：毫秒。
         * @example `1698978109000`
         */
        GmtCreate: number;
        /**
         * 告警事件最后修改的时间戳。单位：毫秒。
         * @example `1678852686000`
         */
        GmtModified: number;
        /**
         * 规则防御路径列表。
         */
        PathConfDTOList: {
            /**
             * 排除的文件。
             * @example `php`
             */
            ExcludeFile: string;
            /**
             * 防护模式 。
             * - **0** ：基础模式 （白名单）
             * - **1** ：复杂模式（黑名单）
             * @example `0`
             */
            GuardType: number;
            /**
             * 排除文件路径。
             * @example `/usr/tt`
             */
            ExcludeFilePath: string;
            /**
             * 包含的文件。
             * @example `/usr/test`
             */
            IncludeFile: string;
            /**
             * 包含文件的类型
             * @example `php`
             */
            IncludeFileType: string;
            /**
             * 防御路径。
             * @example `/usr/test/`
             */
            DefensePath: string;
            /**
             * 排除文件类型。
             * @example `jsp`
             */
            ExcludeFileType: string;
            /**
             * 防护模式 。
             * - **block** ：阻断
             * - **audit** ：审计
             * @example `audit`
             */
            DefenseMode: string;
            /**
             * 备份路径。
             * @example `/tmp/test`
             */
            BackupPath: string;
            /**
             * 白名单进程列表。
             */
            ProcessPathList: string[];
        }[];
    }[];
}
