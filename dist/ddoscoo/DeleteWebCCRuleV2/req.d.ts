export interface DeleteWebCCRuleV2Request {
    /**
     * 网站业务的域名。
     * > 域名必须已配置网站业务转发规则。您可以调用[DescribeDomains](~~91724~~)查询所有域名。
     * @example `www.example.com`
     */
    "Domain": string;
    /**
     * 要删除的规则的名称列表。
     * @example `[\"trdsss\"]`
     */
    "RuleNames"?: string;
    /**
     * 规则来源。取值：
     * - **manual**：手动添加（默认）
     * - **clover**：自动生成（指定删除智能规则使用）
     * @example `manual`
     */
    "Owner"?: string;
}
