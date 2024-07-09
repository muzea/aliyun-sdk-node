export interface DescribeDcdnWafScenesResponse {
    /**
     * 请求ID。
     * @example `3D7BB13C-DD84-5654-A835-B8E1385DE274`
     */
    RequestId: string;
    /**
     * 防护策略类型。
     */
    DefenseScenes: {
        /**
         * 该策略类型已配置的策略总数。
         * @example `10`
         */
        PolicyCount: number;
        /**
         * 该策略类型已配置的防护规则总数。
         * @example `12`
         */
        RuleCount: number;
        /**
         * 防护策略类型，同请求参数DefenseScenes取值。
         * @example `waf_group`
         */
        DefenseScene: string;
    }[];
}
