export interface ListClientUserDefineRulesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB393***`
     */
    RequestId: string;
    /**
     * 分页信息。
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
         * 总条数。
         * @example `69`
         */
        TotalCount: number;
    };
    /**
     * 规则列表。
     */
    UserDefineRuleList: {
        /**
         * 规则类型。取值：
         * - **1**：进程hash
         * - **2**：命令行
         * - **3**：进程网络
         * - **4**：文件读写
         * - **5**：操作注册表
         * - **6**：加载动态链接库
         * - **7**：文件重命名
         * @example `1`
         */
        Type: number;
        /**
         * 规则名称。
         * @example `规则****`
         */
        Name: string;
        /**
         * 规则对应的开关ID。
         * @example `USER-DEFINE-RULE-SWITCH-TYPE_200****`
         */
        SwitchId: string;
        /**
         * 规则ID。
         * @example `200****`
         */
        Id: number;
        /**
         * 操作类型。取值：
         * - **0**：加白
         * - **1**：加黑
         * @example `0`
         */
        ActionType: number;
        /**
         * 操作系统类型。取值：
         * - **windows**：widows
         * - **linux**：linux
         * - **all**：全部
         * @example `linux`
         */
        Platform: string;
    }[];
}
