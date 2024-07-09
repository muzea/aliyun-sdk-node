export interface BatchCreateDcdnWafRulesRequest {
    /**
     * 防护策略ID。
     * @example `1000001`
     */
    "PolicyId": number;
    /**
     * 防护规则配置。
     * @example `{"name":"ttttt","action":"monitor","conditions":[{"key":"URL","opValue":"match-one","values":"1,2,3,4,5"},{"key":"Header","opValue":"contain-one","subKey":"testheader","values":"6,7,8,9,10"}],"ratelimit":{"target":"header","interval":10,"threshold":5,"ttl":1800,"subKey":"testheadercc","status":{"code":"502","count":5}},"ccStatus":"on","effect":"rule","status":"on"}`
     */
    "RuleConfigs": string;
}
