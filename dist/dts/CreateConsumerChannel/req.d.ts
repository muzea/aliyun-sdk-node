export interface CreateConsumerChannelRequest {
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
     * 消费组的名称，不超过128个字符。建议配置具有业务意义的名称，便于后续识别。
     * @example `订阅组A`
     */
    "ConsumerGroupName": string;
    /**
     * 消费组的账号密码。
     * - 由大写字母、小写字母、数字、特殊字符中的任意两种或两种以上组成。
     * - 密码长度为8~32个字符。
     * @example `Test123456`
     */
    "ConsumerGroupPassword": string;
    /**
     * 消费组的账号。
     * - 由大写字母、小写字母、数字、下划线中的任意一种或多种组成。
     * - 最长16个字符。
     * @example `dtstest`
     */
    "ConsumerGroupUserName": string;
    "ResourceGroupId"?: string;
}
