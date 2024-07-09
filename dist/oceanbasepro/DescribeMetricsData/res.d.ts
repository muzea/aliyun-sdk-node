export interface DescribeMetricsDataResponse {
    /**
     * 请求 ID。
     * @example `EE205C00-30E4-xxxx-xxxx-87E3A8A2AA0C`
     */
    RequestId: string;
    /**
     * 返回数据。
     * @example `[
                    {
                        "sql_select_count":75.****15****1515,
                        "timestamp":165079****
                    },
                    ......
                ]`
     */
    Data: string[];
}
