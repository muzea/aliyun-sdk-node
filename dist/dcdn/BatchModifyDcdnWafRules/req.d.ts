export interface BatchModifyDcdnWafRulesRequest {
    /**
     * 防护策略ID。
     * @example `10000001`
     */
    "PolicyId": number;
    /**
     * 防护规则配置。
     * @example `[{"id":135,"type":"web_sdk","status":"on","config":{"mode":"automatic","crossDomain":"example.com"},"action":""},{"id":149,"type":"intelligence_fake_crawler","status":"on","config":{},"action":"deny"}]`
     */
    "RuleConfigs": string;
}
