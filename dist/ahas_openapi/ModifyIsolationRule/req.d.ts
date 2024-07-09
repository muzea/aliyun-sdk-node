export interface ModifyIsolationRuleRequest {
    /**
     * 隔离规则ID。
     * @example `123`
     */
    "RuleId": number;
    /**
     * 统计维度，0表示当前接口，1表示关联接口，2表示链路入口。
     * @example `0`
     */
    "RelationStrategy"?: number;
    /**
     * 并发数阈值。
     * @example `10`
     */
    "Threshold"?: number;
    /**
     * 来源应用。
     * @example `default`
     */
    "LimitOrigin"?: string;
    /**
     * 关联接口名、callstack入口名，当统计维度为关联接口或链路入口时需设置该值。
     * @example `handleServiceB`
     */
    "RefResource"?: string;
    /**
     * 地域
     * @example `cn-hangzhou`
     */
    "AhasRegionId"?: string;
}
