export interface DeleteConsumerChannelRequest {
    /**
     * DTS订阅实例所在地域的ID，请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 订阅实例ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * > 参数**DtsInstanceId**与**DtsJobId**，两者必须传入其一。
     * @example `dtsboss6pn1w73****`
     */
    "DtsInstanceId"?: string;
    /**
     * 订阅任务ID，可以调用[DescribeDtsJobs](~~209702~~)查询。
     * > 参数**DtsInstanceId**与**DtsJobId**，两者必须传入其一。
     * @example `boss6pn1w73****`
     */
    "DtsJobId"?: string;
    /**
     * 消费组ID，您可以调用[DescribeConsumerChannel](~~264169~~)接口查询消费组ID。
     * @example `dtsktbb6jdn2******`
     */
    "ConsumerGroupId": string;
    "ResourceGroupId"?: string;
}
