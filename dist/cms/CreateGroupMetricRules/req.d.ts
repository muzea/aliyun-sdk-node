interface CreateGroupMetricRulesRequest {
    "RegionId"?: string;
    /**
    * 应用分组ID。
    * @example `123456`
    */ "GroupId": number;
    "GroupMetricRules"?: string[];
}
export { CreateGroupMetricRulesRequest };