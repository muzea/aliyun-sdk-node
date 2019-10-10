interface PutEventRuleTargetsRequest {
    "RegionId"?: string;
    /**
    * 报警规则名称。
    * @example `testEventRule`
    */ "RuleName": string;
    "FcParameters"?: string[];
    "ContactParameters"?: string[];
    "MnsParameters"?: string[];
    "WebhookParameters"?: string[];
    "SlsParameters"?: string[];
}
export { PutEventRuleTargetsRequest };