export interface GetMainDomainNameRequest {
    /**
     * 用户语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * 字符串，最长不超过128个字符。
     * @example `dns-example.top`
     */
    "InputString": string;
}
