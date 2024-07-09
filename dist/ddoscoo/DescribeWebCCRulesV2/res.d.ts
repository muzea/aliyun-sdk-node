export interface DescribeWebCCRulesV2Response {
    /**
     * 本次调用请求的 ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CF33B4C3-196E-4015-AADD-5CAD00057B80`
     */
    RequestId: string;
    /**
     * 频率控制规则总数。
     * @example `12`
     */
    TotalCount: string;
    /**
     * 网站业务的域名。
     * @example `www.aliyun.com`
     */
    Domain: string;
    /**
     * 频率控制（CC防护）自定义规则。
     */
    WebCCRules: {
        /**
         * 规则来源。取值：
         * - **manual**（默认）：手动添加
         * - **clover**：自动生成
         * @example `manual`
         */
        Owner: string;
        /**
         * 规则有效期。单位：秒。规则的匹配动作为阻断时（action为block）生效，在规则有效期内阻断访问请求。0表示永久生效。
         * @example `0`
         */
        Expires: number;
        /**
         * 规则名称。
         * @example `wq`
         */
        Name: string;
        /**
         * 规则详情。
         */
        RuleDetail: {
            /**
             * 老规则格式，已废弃。
             * @example `废弃`
             */
            Mode: string;
            /**
             * 老规则格式，已废弃。
             * @example `废弃`
             */
            Count: number;
            /**
             * 规则名称。
             * @example `ccauto14`
             */
            Name: string;
            /**
             * 匹配动作。取值：
             * - **accept**：放行
             * - **block**：封禁
             * - **challenge**：挑战
             * - **watch**：观察
             * @example `block`
             */
            Action: string;
            /**
             * 老规则格式，已废弃。
             * @example `60`
             */
            Interval: number;
            /**
             * 老规则格式，已废弃。
             * @example `300`
             */
            Ttl: number;
            /**
             * 老规则格式，已废弃。
             * @example `/p3shijihao`
             */
            Uri: string;
            /**
             * 频率统计。
             */
            RateLimit: {
                /**
                 * 字段名称（仅当统计源为header时设置）。
                 * @example `action`
                 */
                SubKey: string;
                /**
                 * 统计周期。单位：秒。
                 * @example `60`
                 */
                Interval: number;
                /**
                 * 触发阈值。
                 * @example `20`
                 */
                Threshold: number;
                /**
                 * 封禁时长。单位：秒。
                 * @example `15`
                 */
                Ttl: number;
                /**
                 * 统计源。取值：
                 * - **ip**：按照IP统计
                 * - **header**：按照Header统计
                 * @example `ip`
                 */
                Target: string;
            };
            /**
             * 匹配条件列表。
             */
            Condition: {
                /**
                 * 匹配方法。
                 * @example `belong`
                 */
                MatchMethod: string;
                /**
                 * 匹配字段。
                 * @example `ip`
                 */
                Field: string;
                /**
                 * 自定义HTTP头部字段名称。
                 * > 仅在**Field**为**header**时有效。
                 * @example `null`
                 */
                HeaderName: string;
                /**
                 * 匹配内容。
                 * @example `192.0.XX.XX`
                 */
                Content: string;
            }[];
            /**
             * 去重统计，可缺省（缺省为不去重统计）。
             */
            Statistics: {
                /**
                 * 去重模式。取值：
                 * - **count**：不去重统计
                 * - **distinct**：去重统计
                 * @example `count`
                 */
                Mode: string;
                /**
                 * 统计源。取值：
                 * - **ip**：按照IP统计
                 * - **header**：按照Header统计
                 * - **uri**：按照uri统计
                 * @example `uri`
                 */
                Field: string;
                /**
                 * 仅当统计源为header时设置。
                 * @example `hello`
                 */
                HeaderName: string;
            };
            /**
             * 状态码。
             */
            StatusCode: {
                /**
                 * 是否可用。取值：
                 * - **true**：开启。
                 * - **false**：关闭。
                 * @example `true`
                 */
                Enabled: boolean;
                /**
                 * 状态码。值范围**100**~**599**：
                 * - **200**：表示成功。
                 * - 其它：表示错误码。
                 * @example `200`
                 */
                Code: number;
                /**
                 * 是否使用比率：
                 * - **true**：使用。
                 * - **false**：不使用。
                 * @example `true`
                 */
                UseRatio: boolean;
                /**
                 * 不使用比率时，仅在对应状态码达到 **CountThreshold** 时触发处置动作，值范围**2**~**50000**。
                 * @example `10`
                 */
                CountThreshold: number;
                /**
                 * 使用比率时，仅在对应状态码达到 **RatioThreshold** 时触发处置动作，值范围**1**~**100**。
                 * @example `10`
                 */
                RatioThreshold: number;
            };
        };
    }[];
}
