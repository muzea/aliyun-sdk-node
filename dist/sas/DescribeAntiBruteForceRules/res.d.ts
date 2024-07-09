export interface DescribeAntiBruteForceRulesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `4E5BFDCF-B9DD-430D-9DA4-151BCB581C9D`
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
         * 已创建的防暴力破解规则的总数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 防暴力破解规则详情列表。
     */
    Rules: {
        /**
         * 配置该暴力破解防御规则的服务器数量。
         * @example `3`
         */
        MachineCount: number;
        /**
         * 该参数已废弃，无需关注。
         * @example `false`
         */
        EnableSmartRule: boolean;
        /**
         * 暴力破解防御规则生效的用户登录的失败次数阈值。
         * @example `15`
         */
        FailCount: number;
        /**
         * 暴力破解防御规则生效后对攻击方IP禁用的时间，单位（分钟）。
         * @example `360`
         */
        ForbiddenTime: number;
        /**
         * 暴力破解防御规则生效的时间阈值，单位为分钟。例如**span**为10，表示如果在10分钟内登录失败次数超过设置的阈值，防暴力破解规则会生效并在指定时间内拦截登录。
         * @example `10`
         */
        Span: number;
        /**
         * 当前规则是否为默认规则。取值：
         * - **true**：是默认规则。
         * - **false**：不是默认规则。
         * > 设置为默认规则的防暴力破解规则会对所有未添加防御规则的服务器生效。
         * @example `true`
         */
        DefaultRule: boolean;
        /**
         * 暴力破解防御规则的名称。
         * @example `AntiBruteForceRule01`
         */
        Name: string;
        /**
         * 暴力破解防御规则的规则ID。
         * @example `1629`
         */
        Id: number;
        /**
         * 配置该暴力破解防御规则的服务器的UUID列表。
         */
        UuidList: string[];
        /**
         * 防暴力破解规则创建时间戳。单位：毫秒。
         * @example `1669800181000`
         */
        CreateTimestamp: number;
    }[];
}
