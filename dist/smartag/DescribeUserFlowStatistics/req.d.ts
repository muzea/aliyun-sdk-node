export interface DescribeUserFlowStatisticsRequest {
    /**
     * 智能接入网关App实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 智能接入网关App实例ID。
     * @example `sag-mfkg*****`
     */
    "SmartAGId": string;
    /**
     * 统计日期，格式为YYYYMM。
     * > 如果不设置，默认表示当月。
     * @example `201905`
     */
    "StatisticsDate"?: string;
    /**
     * 用户名列表。列表最大长度为50。
     */
    "UserNames": string[];
}
