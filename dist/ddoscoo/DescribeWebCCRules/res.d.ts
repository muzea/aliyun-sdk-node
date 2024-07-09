export interface DescribeWebCCRulesResponse {
    /**
     * 频率控制（CC防护）自定义规则的总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 本次请求的ID。
     * @example `EAED912D-909E-45F0-AF74-AC0CCDCAE314`
     */
    RequestId: string;
    /**
     * 频率控制（CC防护）自定义规则。
     */
    WebCCRules: {
        /**
         * 封禁时长。取值范围：**1**~**1440**，单位：分钟。
         * @example `60`
         */
        Ttl: number;
        /**
         * 阻断类型。取值：
         * - **close**：封禁
         * - **captcha**：人机识别
         * @example `close`
         */
        Act: string;
        /**
         * 检测间隔。取值范围：**5**~**10800**，单位：秒。
         * @example `5`
         */
        Interval: number;
        /**
         * 匹配模式。取值：
         * - **prefix**：前缀匹配
         * - **match**：完全匹配
         * @example `prefix`
         */
        Mode: string;
        /**
         * 规则名称。
         * @example `wq`
         */
        Name: string;
        /**
         * 检测路径。
         * @example `/hello`
         */
        Uri: string;
        /**
         * 单一IP访问次数。取值范围：**2**~**2000**。
         * @example `3`
         */
        Count: number;
    }[];
}
