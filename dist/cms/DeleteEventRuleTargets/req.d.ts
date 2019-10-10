interface DeleteEventRuleTargetsRequest {
    "RegionId"?: string;
    "Ids": string[];
    /**
    * 报警规则名称。
    * @example `testRule`
    */ "RuleName": string;
}
export { DeleteEventRuleTargetsRequest };