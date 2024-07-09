export interface DescribeDcdnWafDomainDetailResponse {
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA630`
     */
    RequestId: string;
    /**
     * 加速域名。
     */
    Domain: {
        /**
         * 加速域名。
         * @example `example.com`
         */
        DomainName: string;
        /**
         * 防护策略类型。
         */
        DefenseScenes: {
            /**
             * 防护策略类型，目前支持以下场景：
             * - waf_group：Web基础防护。
             * - custom_acl：自定义防护策略。
             * - whitelist：白名单。
             * @example `waf_group`
             */
            DefenseScene: string;
            /**
             * 防护策略ID，如果有多个ID，只显示一个。
             * @example `10000002`
             */
            PolicyId: number;
            /**
             * 防护策略ID，多个ID用半角逗号（,）分隔。
             * @example `10000001,10000004`
             */
            PolicyIds: string;
        }[];
    };
}
