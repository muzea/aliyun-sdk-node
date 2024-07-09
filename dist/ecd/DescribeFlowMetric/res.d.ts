export interface DescribeFlowMetricResponse {
    /**
     * 指标数据。
     * @example `{'instanceId': 'np-4wrye3ishxi47****', 'requestId': '4F0CD5B6-70D6-5115-A2F7-7EAC3981****', 'dataPoints': [{'timeStamp': 1636510320000, 'Average': 293752.0}]}`
     */
    Data: string;
    /**
     * 请求ID。
     * @example `6857EDCB-631F-5405-BE95-45CBB4C3****`
     */
    RequestId: string;
}
