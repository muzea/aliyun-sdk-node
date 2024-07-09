export interface DisableAutoResourceOptimizeRulesRequest {
    /**
     * 备用参数。
     * @example `None`
     */
    "ConsoleContext"?: string;
    /**
     * 数据库实例ID。
     * > 数据格式为JSONArray，例如`['实例ID1','实例ID2']`，实例ID间用英文逗号（,）分隔。
     * @example `['rm-2ze8g2am97624****','rm-2ze9xrhze0709****']`
     */
    "InstanceIds": string;
}
