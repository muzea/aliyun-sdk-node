export interface ModifyConsumerGroupPasswordRequest {
    /**
     * 数据订阅实例所在地域的ID，详情请参见[支持的地域列表](~~141033~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 数据订阅实例ID，可以通过调用DescribeSubscriptionInstances接口查询。
     * @example `dtsg2m10r1x15a****`
     */
    "SubscriptionInstanceId": string;
    /**
     * 消费组ID，
     * 您可以调用[DescribeConsumerGroup](~~122886~~)接口查询消费组ID。
     * @example `dtswc411cg617p****`
     */
    "ConsumerGroupID": string;
    /**
     * 消费组名称，您可以调用[DescribeConsumerGroup](~~122886~~)接口查询。
     * @example `dts订阅测试`
     */
    "ConsumerGroupName"?: string;
    /**
     * 消费组账号，您可以调用[DescribeConsumerGroup](~~122886~~)接口查询。
     * @example `dtstest`
     */
    "ConsumerGroupUserName"?: string;
    /**
     * 消费组当前的密码。
     * @example `Test123456`
     */
    "ConsumerGroupPassword": string;
    /**
     * 消费组的新密码。
     * - 密码由大写字母、小写字母、数字、特殊字符中的任意两种或两种以上组成。
     * - 密码长度为8~32个字符。
     * @example `Test654321`
     */
    "consumerGroupNewPassword": string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
