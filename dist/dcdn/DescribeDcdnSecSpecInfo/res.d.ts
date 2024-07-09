export interface DescribeDcdnSecSpecInfoResponse {
    /**
     * 安全DCDN版本。
     * @example `enterprise`
     */
    Version: string;
    /**
     * 请求ID。
     * @example `32f6cbb7-13e5-403a-9941-4d4e978dd227`
     */
    RequestId: string;
    /**
     * 支持的规则代码及规则的配置信息。
     */
    SpecInfos: {
        /**
         * 用户对应的安全规则代码。
         * @example `accurate_***`
         */
        RuleCode: string;
        /**
         * 安全规则对应的配置。
         */
        RuleConfigs: {
            /**
             * 安全规则对应的配置代码。
             * @example `custom_****_number`
             */
            Code: string;
            /**
             * 安全规则对应的配置表达式值。
             * @example `20`
             */
            Value: string;
            /**
             * 安全规则对应的配置表达式。
             * @example `equal`
             */
            Expr: string;
        }[];
    }[];
}
