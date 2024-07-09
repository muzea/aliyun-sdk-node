export interface ListInstancesResponse {
    /**
     * 请求ID。
     * @example `CCBB1225-C392-480E-8C7F-D09AB2CD2***`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 表示当前调用返回读取到的位置，空代表数据已经读取完毕。
         * @example `caebacccb2be03f84eb48b699f0a****`
         */
        NextToken: string;
        /**
         * 最大结果集。
         * @example `1`
         */
        MaxResults: number;
        /**
         * 实例。
         */
        Instances: {
            /**
             * 实例状态。取值如下：
             * - DEPLOYING：实例部署中
             * - EXPIRED：实例已过期
             * - SERVING：实例服务中
             * - RELEASED：实例已被释放
             * @example `SERVING`
             */
            Status: string;
            /**
             * 是否支持EIP。
             * @example `true`
             */
            SupportEIP: boolean;
            /**
             * 实例过期的时间戳，单位：毫秒。
             * @example `1651507200000`
             */
            ExpireTime: number;
            /**
             * 订单创建的时间戳，单位：毫秒。
             * @example `1572441939000`
             */
            OrderCreateTime: number;
            /**
             * 实例的VPC接入点。
             * @example `amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com`
             */
            PrivateEndpoint: string;
            /**
             * 磁盘容量，单位：GB。
             * > 专业版实例和企业版实例无此参数，返回**-1**。
             * @example `200`
             */
            StorageSize: number;
            /**
             * 实例的公网TPS流量峰值，单位：条/秒。
             * @example `24832`
             */
            MaxEipTps: number;
            /**
             * 实例ID。
             * @example `amqp-cn-st21x7kv****`
             */
            InstanceId: string;
            /**
             * 实例类型。
             * - PROFESSIONAL：专业版
             * - ENTERPRISE：企业版
             * - VIP：铂金版
             * <props="china">- SERVERLESS：Serverless版</props>
             * @example `professional`
             */
            InstanceType: string;
            /**
             * 实例的公网接入点。
             * @example `amqp-cn-st21x7kv****.mq-amqp.cn-hangzhou-a.aliyuncs.com`
             */
            PublicEndpoint: string;
            /**
             * 经典接入点，该参数不再使用。
             * @example `amqp-cn-st21x7kv****.not-support`
             */
            ClassicEndpoint: string;
            /**
             * 实例的Vhost的数量上限，单位：个。
             * @example `50`
             */
            MaxVhost: number;
            /**
             * 实例的私网TPS流量峰值，单位：条/秒。
             * @example `5000`
             */
            MaxTps: number;
            /**
             * 是否自动更新实例。
             * @example `false`
             */
            AutoRenewInstance: boolean;
            /**
             * 实例名称。
             * @example `amqp-cn-st21x7kv****`
             */
            InstanceName: string;
            /**
             * 实例的Queue的数量上限，单位：个。
             * @example `50`
             */
            MaxQueue: number;
            /**
             * 订单类型。
             * - PRE_PAID：预付费。
             * - POST_PAID：后付费。
             * @example `PRE_PAID`
             */
            OrderType: string;
            /**
             * 标签列表。
             */
            Tags: {
                /**
                 * 标签键。
                 * @example `region`
                 */
                Key: string;
                /**
                 * 标签值。
                 * @example `hangzhou`
                 */
                Value: string;
            }[];
        }[];
    };
}
