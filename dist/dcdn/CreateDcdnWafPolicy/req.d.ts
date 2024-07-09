export interface CreateDcdnWafPolicyRequest {
    /**
     * 防护策略名称。支持输入中文字符、英文字符（大小写）、数字（0~9）及下划线（_），最大输入64个字符。
     * @example `policy_test`
     */
    "PolicyName": string;
    /**
     * 设置当前策略是否为默认策略，取值：
     * - default：默认策略。
     * - custom：非默认策略。
     * @example `default`
     */
    "PolicyType": string;
    /**
     * 防护策略状态，取值：
     * - on：开启。
     * - off：关闭。
     * @example `on`
     */
    "PolicyStatus": string;
    /**
     * WAF防护策略类型，取值：
     * - waf_group：Web基础防护。
     * - custom_acl：自定义防护策略。
     * - whitelist：白名单。
     * - ip_blacklist：IP黑名单。
     * - region_block：区域封禁。
     * - bot：Bot管理。
     * @example `waf_group`
     */
    "DefenseScene": string;
}
