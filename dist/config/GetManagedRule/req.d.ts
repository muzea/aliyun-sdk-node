export interface GetManagedRuleRequest {
    /**
     * 规则模板标识。
     * 关于如何获取规则模板标识，请参见[ListManagedRules](~~421144~~)。
     * @example `cdn-domain-https-enabled`
     */
    "Identifier": string;
}
