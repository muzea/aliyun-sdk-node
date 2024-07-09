export interface DescribeDataSourceParametersRequest {
    /**
     * 接入的数据源类型。取值：
     *  - **ckafka**：腾讯云ckafka。
     *  - **obs**：华为云obs。
     *  - **wafApi**：腾讯云waf攻击日志下载api。
     * @example `obs`
     */
    "DataSourceType": string;
    /**
     * 多云的code。
     * @example `hcloud`
     */
    "CloudCode": string;
    /**
     * 威胁分析的数据管理中心所在地。您需要根据资产所在地域，选择管理中心所在地。取值：
     * - cn-hangzhou：资产属于中国内地与中国香港
     * - ap-southeast-1：资产属于海外地域
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
