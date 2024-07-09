export interface DescribeEnsResourceUsageRequest {
    /**
     * vm实例使用结束时间查询开始范围，格式： yyyy-MM-dd或yyyy-MM-dd HH:mm:ss。
     * @example `2018-06-15T09:07:23Z`
     */
    "ExpiredStartTime"?: string;
    /**
     * vm实例使用结束时间查询结束范围，格式： yyyy-MM-dd或yyyy-MM-dd HH:mm:ss。
     * @example `2018-06-15T09:07:23Z`
     */
    "ExpiredEndTime"?: string;
}
