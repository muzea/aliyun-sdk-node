export interface TestRuleV4Request {
    /**
     * 是否为新版质检，0：旧版质检；1：新版质检。默认为1
     * @example `1`
     */
    "IsSchemeData"?: number;
    /**
     * 测试规则请求参数JSON，详情见请求参数补充说明。
     * @example `{"ruleList":[9771],"dialogues":[{"begin":0,"end":760,"hourMinSec":"00:00","role":"客户","identity":"客户","words":"123"},{"begin":21004,"end":21494,"hourMinSec":"00:21","role":"客服","identity":"客服","words":"123"}]}`
     */
    "TestJson": string;
}
