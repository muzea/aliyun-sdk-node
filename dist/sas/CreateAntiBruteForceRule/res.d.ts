export interface CreateAntiBruteForceRuleResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `F35F45B0-5D6B-4238-BE02-A62D0760E840`
     */
    RequestId: string;
    /**
     * 创建的防暴力破解规则的信息。
     */
    CreateAntiBruteForceRule: {
        /**
         * 防暴力破解规则的ID。
         * @example `65778`
         */
        RuleId: number;
    };
}
