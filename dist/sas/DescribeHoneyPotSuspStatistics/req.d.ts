export interface DescribeHoneyPotSuspStatisticsRequest {
    /**
     * 指定发起请求的来源，固定值为**honeypot**。
     * @example `honeypot`
     */
    "From": string;
    /**
     * 指定需要查询的资产类型。取值：
     * - **vpcInstanceId**：VPC实例
     * - **uuid**：服务器
     * @example `vpcInstanceId`
     */
    "StatisticsKeyType": string;
    /**
     * 指定需要查询的数据的时间范围。单位为天。
     * @example `30`
     */
    "StatisticsDays": number;
    /**
     * 指定请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
}
