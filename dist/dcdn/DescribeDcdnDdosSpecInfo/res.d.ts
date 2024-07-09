export interface DescribeDcdnDdosSpecInfoResponse {
    /**
     * 版本。取值范围：
     * - **poc**：poc版
     * - **basic**：基础版。
     * -  **insurance**：保险版。
     * - **unlimited** ：无忧版。
     * - **port_enhancement**：特殊端口增强版。
     * @example `insurance`
     */
    Edition: string;
    /**
     * 请求ID。
     * @example `DEA8E7BE-33C6-56F5-AC56-74D50547CF34`
     */
    RequestId: string;
    /**
     * 用户是否开启DDoS防护服务  。取值范围：
     * - **on**：开启。
     * - **off**：关闭。
     * @example `on`
     */
    Enable: string;
    /**
     * 防护地区。取值范围：
     * - **global**：全球。
     * - **chinese_mainland**：中国内地。
     * - **global_excluding_the_chinese_mainland**：全球(不包含中国内地)。
     * @example `global`
     */
    ProtectedArea: string;
    /**
     * 单实例限制带宽。
     * @example `40Gbps`
     */
    BandwidthLimit: string;
    /**
     * QPS限制。
     * @example `100`
     */
    QpsLimit: string;
    /**
     * 支持的规则代码及规则的配置信息。
     */
    SpecInfos: {
        /**
         * 版本规则。取值范围：
         * - **version_defense_num**：版本防护次数相关规则。
         * - **domain_num**：域名数限制相关规则。
         * - **defence_package_num**：额外防护次数包相关规则。
         * @example `version_defense_num`
         */
        Rule: string;
        /**
         * 版本规则对应的配置。
         */
        Configs: {
            /**
             * 版本规则对应的配置表达式值。
             * @example `1`
             */
            Value: string;
            /**
             * 版本规则对应的配置代码。取值范围：
             * - **total_defense_num**：版本总防护次数。
             * - **consume_defense_num**：已使用的版本防护次数 。
             * - **max_domain_num**：接入域名限制数。
             * - **emain_domain_num**：已接入域名数 。
             * - **defence_package_num**：额外购买的总防护次数。
             * - **consume_defence_package_num**：额外购买的已使用的防护次数。
             * @example `total_defense_num`
             */
            Config: string;
            /**
             * 版本规则对应的配置表达式。
             * @example `equal`
             */
            Expr: string;
        }[];
    }[];
    /**
     * 是否支持自定义端口。取值范围：
     * - **yes**：支持。
     * - **no**：不支持。
     * @example `no`
     */
    IsSpecialPort: string;
}
