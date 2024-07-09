export interface DescribeConsumerChannelRequest {
    /**
     * DTS订阅实例所在地域的ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 订阅实例ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * > 参数**DtsInstanceId**与**DtsJobId**，两者必须传入其一。
     * @example `dtsboss6pn1w******`
     */
    "DtsInstanceId"?: string;
    /**
     * 订阅任务ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * > 参数**DtsInstanceId**与**DtsJobId**，两者必须传入其一。
     * @example `boss6pn1w******`
     */
    "DtsJobId"?: string;
    /**
     * 每页记录数，取值范围为**1**~**100**，默认值为**20**。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分布式任务的父任务ChannelId。
     * @example `dtsan5114c52******`
     */
    "ParentChannelId"?: string;
    "ResourceGroupId"?: string;
}
