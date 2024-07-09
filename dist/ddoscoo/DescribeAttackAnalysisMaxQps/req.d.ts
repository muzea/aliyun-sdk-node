export interface DescribeAttackAnalysisMaxQpsRequest {
    /**
     * 查询开始时间。使用时间戳格式，单位：秒。
     * @example `1622476799`
     */
    "StartTime": number;
    /**
     * 查询结束时间。使用时间戳格式，单位：秒。
     * @example `1619798400`
     */
    "EndTime": number;
}
