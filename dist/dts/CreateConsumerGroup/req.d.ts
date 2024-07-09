export interface CreateConsumerGroupRequest {
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
     * 消费组名称，不超过128个字符。建议配置具有业务意义的名称，便于后续识别。
     * @example `测试订阅组`
     */
    "ConsumerGroupName": string;
    /**
     * 消费组的账号。
     * - 由大写字母、小写字母、数字、下划线中的任意一种或多种组成。
     * - 最长16个字符。
     * @example `dtstest`
     */
    "ConsumerGroupUserName": string;
    /**
     * 消费组账号的密码。
     * - 由大写字母、小写字母、数字、特殊字符中的任意两种或两种以上组成。
     * - 密码长度为8~32个字符。
     * @example `Test123456`
     */
    "ConsumerGroupPassword": string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    "ResourceGroupId"?: string;
}
