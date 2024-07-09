export interface DescribeJobMonitorRuleRequest {
    /**
     * 迁移、同步或订阅任务ID，可通过调用[DescribeDtsJobs](~~209702~~)获取。
     * @example `ta7w132u12h****`
     */
    "DtsJobId": string;
    /**
     * DTS实例所属的地域，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-shenzhen`
     */
    "RegionId"?: string;
    "ResourceGroupId"?: string;
}
