export interface DescribeSchedulerRulesResponse {
    /**
     * 流量调度规则的总数。
     * @example `1`
     */
    TotalCount: string;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `11C55595-1757-4B17-9ACE-4ACB68C2D989`
     */
    RequestId: string;
    /**
     * 流量调度规则信息。
     */
    SchedulerRules: {
        /**
         * 规则类型。取值：
         * - **2**：阶梯防护
         * - **3**：出海加速
         * - **5**：CDN联动
         * - **6**：云产品联动
         * - **8**：安全加速
         * @example `2`
         */
        RuleType: string;
        /**
         * CNAME值。
         * @example `4eru5229a843****.aliyunddos0001.com`
         */
        Cname: string;
        /**
         * 规则名称。
         * @example `doctest`
         */
        RuleName: string;
        /**
         * 规则列表。
         */
        Rules: {
            /**
             * 资源地址的格式。取值：
             * - **A**：IPv4地址
             * - **CNAME**：CNAME地址
             * @example `A`
             */
            Type: string;
            /**
             * 规则生效状态。取值：
             * - **0**：未生效
             * - **1**：生效
             * @example `0`
             */
            Status: number;
            /**
             * 资源地址。
             * @example `203.***.***.39`
             */
            Value: string;
            /**
             * 资源地址类型。取值：
             * - **1**：DDoS高防IP
             * - **2**：（阶梯防护）云资源IP
             * - **3**：（出海加速）加速线路IP
             * - **5**：（CDN联动）加速域名
             * - **6**：（云产品联动）云资源IP
             * - **8**：（安全加速）安全加速P
             * @example `1`
             */
            ValueType: number;
            /**
             * 规则优先级。
             * @example `100`
             */
            Priority: number;
            /**
             * 回切时间，单位为分钟。
             * @example `60`
             */
            RestoreDelay: number;
            /**
             * 地域ID。
             * > 仅当RuleType（即阶梯防护规则）取值为2时返回。
             * @example `1`
             */
            RegionId: string;
            Line: string;
        }[];
        /**
         * 全球加速实例联动DDoS高防的规则。
         */
        Param: {
            /**
             * 联动资源的类型。取值：**GA**，表示全球加速实例。
             * @example `GA`
             */
            ParamType: string;
            /**
             * 联动资源。
             */
            ParamData: {
                /**
                 * 全球加速实例的ID。
                 * @example `ga-bp1htlajy5509rc99****`
                 */
                CloudInstanceId: string;
            };
        };
    }[];
}
