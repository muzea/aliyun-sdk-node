export interface DescribeDcdnWafScenesRequest {
    /**
     * 设置查询的防护策略类型，多个策略类型用英文逗号（,）分隔。目前支持以下场景：
     * - waf_group：Web基础防护。
     * - custom_acl：自定义防护策略。
     * - whitelist：白名单。
     * - ip_blacklist：IP黑名单。
     * - region_block：区域封禁。
     * - bot：Bot管理。
     * >不传默认查询所有场景。
     * @example `waf_group,custom_acl,whitelist`
     */
    "DefenseScenes"?: string;
}
