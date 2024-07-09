export interface ModifyConsumerChannelRequest {
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
     * @example `dtsor2y66j4219****`
     */
    "ConsumerGroupId": string;
    /**
     * 修改后的消费组账号密码。
     * - 由大写字母、小写字母、数字、特殊字符中的任意两种或两种以上组成。
     * - 密码长度为8~32个字符。
     * @example `Test123456`
     */
    "ConsumerGroupPassword"?: string;
    /**
     * 修改后的消费组的账号。
     * - 由大写字母、小写字母、数字、下划线中的任意一种或多种组成。
     * - 最长16个字符。
     * @example `dtstest`
     */
    "ConsumerGroupUserName"?: string;
    /**
     * 修改后的消费组名称，不超过128个字符。建议配置具有业务意义的名称，便于后续识别。
     * @example `订阅组B`
     */
    "ConsumerGroupName"?: string;
    "ResourceGroupId"?: string;
}
