export interface ListContainerDefenseRuleResponse {
    /**
     * 规则列表。
     */
    List: {
        /**
         * 规则ID。
         * @example `181`
         */
        RuleId: number;
        /**
         * 规则类型，取值：
         * - **1**： 系统规则。
         * - **2**： 用户自定义规则。
         * @example `1`
         */
        RuleType: number;
        /**
         * 规则名称。
         * @example `test-rule-01`
         */
        RuleName: string;
        /**
         * 规则描述。
         * @example `defense rule.`
         */
        Description: string;
        /**
         * 规则动作，取值：
         * - **1**：告警。
         * - **2**：拦截。
         * @example `1`
         */
        RuleAction: number;
        /**
         * 规则的开关状态。取值：
         * - **1**：表示开启。
         * - **0**：表示关闭。
         * @example `0`
         */
        RuleSwitch: number;
        /**
         * 总集群数。
         * @example `1`
         */
        ClusterCount: number;
        /**
         * 规则内的集群列表。
         * @example `cfb41a8**8a106`
         */
        ClusterIdList: string;
    }[];
    /**
     * 查询结果的分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总记录数。
         * @example `45`
         */
        TotalCount: number;
        /**
         * 返回结果的当前页显示数据条数。
         * @example `9`
         */
        Count: number;
        /**
         * 最后一条数据的键。
         * @example `CAESGgo***jE2NDc4NjE=`
         */
        LastRowKey: string;
        /**
         * 使用NextToken方式下返回的NextToken值。
         * @example `B60***`
         */
        NextToken: string;
    };
    /**
     * 接口调用是否成功。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Success: boolean;
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: string;
    /**
     * 请求结果返回信息。
     * @example `successful`
     */
    Message: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5E3A63BA-***843`
     */
    RequestId: string;
    /**
     * 请求数据结果的HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
}
