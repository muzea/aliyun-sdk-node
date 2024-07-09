export interface DescribeDcdnWafSpecInfoResponse {
    /**
     *  WAF版本信息。
     * @example `dcdnwaf_afterpay`
     */
    Edition: string;
    /**
     * 请求ID。
     * @example `7281593a-f414-42c1-b7ba-2ce65e21cc00`
     */
    RequestId: string;
    /**
     * 支持的防护策略类型及防护规则配置信息。
     */
    SpecInfos: {
        /**
         * 防护策略类型，目前支持以下场景：
         * - waf_group：Web基础防护。
         * - custom_acl：自定义防护策略。
         * - whitelist：白名单。
         * - ip_blacklist：IP黑名单。
         * - region_block：区域封禁。
         * - bot：Bot管理。
         * @example `custom_acl`
         */
        DefenseScene: string;
        /**
         * 防护规则对应的配置信息。
         */
        Configs: {
            /**
             * 防护规则对应的配置表达式值。
             * @example `on`
             */
            Value: string;
            /**
             * 防护规则对应的配置代码。
             * @example `enable`
             */
            Config: string;
            /**
             * 防护规则对应的配置表达式。
             * @example `equal`
             */
            Expr: string;
        }[];
    }[];
}
