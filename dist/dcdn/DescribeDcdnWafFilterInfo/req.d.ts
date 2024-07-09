export interface DescribeDcdnWafFilterInfoRequest {
    /**
     * 防护策略类型列表，多个用逗号（,）分隔。目前支持以下场景：
     * - waf_group：Web基础防护
     * - custom_acl：自定义防护策略
     * - whitelist：白名单
     * >不传时，代表返回全部信息。
     * @example `custom_acl`
     */
    "DefenseScenes"?: string;
    /**
     * 设置返回信息语言。取值范围：
     * - en（默认）：英文
     * - cn：简体中文
     * @example `cn`
     */
    "Language": string;
}
