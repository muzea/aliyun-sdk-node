export interface DescribeContainerAppsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `30CBF632-109F-596F-97F2-451C8B2A****`
     */
    RequestId: string;
    /**
     * 标签值列表。
     */
    TagValues: string[];
}
