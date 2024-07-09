export interface CreateInstanceRequest {
    /**
     * 客户端Token。
     * @example `c2c5d1274axxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 付费类型，取值如下：
     * - Subscription：预付费
     * - PayAsYouGo ： 后付费（即 Serverless）
     * @example `Subscription`
     */
    "PaymentType": string;
    /**
     * 预付费周期，单位：periodCycle。
     * > 当 PaymentType 为 Subscription 时，该参数有效，默认值为1。
     * @example `1`
     */
    "Period"?: number;
    /**
     * 预付费周期单位，取值如下：
     * - Month：月
     * - Year：年
     * 当PaymentType为Subscription时，该参数有效，默认值为Month。
     * @example `Month`
     */
    "PeriodCycle"?: string;
    /**
     * 续费方式，取值如下：
     * - true：自动续费
     * - false：手动续费
     * @example `false`
     */
    "AutoRenew"?: boolean;
    /**
     * 自动续费周期，单位 RenewalDurationUnit 值，默认为：月。
     * > 当 AutoRenew 为 true 时，该参数有效，默认值为1 。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
    /**
     * 续费状态,等同于 autoRenew ，二选1 配置即可，取值如下：
     * - AutoRenewal: 自动续费
     * > 和renewStatus都是续费方式，当两个同时填写时，以renewStatus为准
     * @example `false`
     */
    "RenewStatus"?: string;
    /**
     * 自动续费周期单位，取值如下：
     * - Month：月
     * - Year：年
     */
    "RenewalDurationUnit"?: string;
    /**
     * 实例规格类型，
     * 预付费类型的取值如下：
     * - professional：专业版
     * - enterprise：企业版
     * - vip：铂金版
     * 后付费实例：无需填写
     * @example `professional`
     */
    "InstanceType"?: string;
    /**
     * 后付费（即 Serverless）实例的计费类型，取值如下：
     * - onDemand：按量累计
     * @example `onDemand`
     */
    "ServerlessChargeType"?: string;
    /**
     * 实例名称。建议长度不超过64个字符。
     * @example `amqp-xxxxx`
     */
    "InstanceName"?: string;
    /**
     * 私网TPS流量，单位：次/秒。
     * 请根据 “[云消息队列 RabbitMQ 版-购买页](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre)” 所给出的取值设置。
     * @example `1000`
     */
    "MaxPrivateTps"?: number;
    /**
     * 是否支持公网，取值如下：
     * - true：支持公网
     * - false：不支持公网
     * @example `true`
     */
    "SupportEip"?: boolean;
    /**
     * 公网网TPS流量峰值，单位：TPS。
     * 请根据 “[云消息队列 RabbitMQ 版-购买页](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre)” 所给出的取值设置。
     * @example `128`
     */
    "MaxEipTps"?: number;
    /**
     * 配置Queue的数量，单位：个。
     * 请根据 “[云消息队列 RabbitMQ 版-购买页](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre)” 所给出的取值设置。
     * @example `1000`
     */
    "QueueCapacity"?: number;
    /**
     * 最大连接数。
     * 请根据 “[云消息队列 RabbitMQ 版-购买页](https://common-buy.aliyun.com/?commodityCode=ons_onsproxy_pre)” 所给出的取值设置。
     * @example `50000`
     */
    "MaxConnections"?: number;
    /**
     * 配置消息存储空间，单位： GB，取值如下：
     * - 专业版实例和企业版实例：固定为0。
     * > 取值为0表示专业版和企业版实例不收取存储费用，而非没有存储空间。
     * - 铂金版实例：m×100，其中m的取值范围为\[7,28\]。
     * @example `7`
     */
    "StorageSize"?: number;
    /**
     * 是否开通消息轨迹功能，取值如下：
     * - true：开通消息轨迹功能
     * - false：不开通消息轨迹功能
     * > - 铂金版实例免费提供15天消息轨迹功能，轨迹功能只能选择开启且轨迹保存时长只能设置为15天。
     * - 其他规格类型实例可选择开启或关闭轨迹功能。
     * @example `true`
     */
    "SupportTracing"?: boolean;
    /**
     * 配置消息轨迹的保存时长，单位：天，取值如下：
     * - 3：3天
     * - 7：7天
     * - 15：15天
     * 当SupportTracing为true时，该参数有效。
     * @example `3`
     */
    "TracingStorageTime"?: number;
}
