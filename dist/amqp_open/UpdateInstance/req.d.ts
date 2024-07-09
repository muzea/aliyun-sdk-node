export interface UpdateInstanceRequest {
    /**
     * 客户端Token
     * @example `c2c5d1274axxxxxxxx`
     */
    "ClientToken"?: string;
    /**
     * 云消息队列 RabbitMQ 版实例的ID。
     * @example `amqp-cn-jtexxxxx`
     */
    "InstanceId": string;
    /**
     * 变配类型，取值如下：
     * - UPGRADE：升配
     * - DOWNGRADE：降配
     * @example `UPGRADE`
     */
    "ModifyType": string;
    /**
     * 实例规格类型， 预付费类型的取值如下：
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
     * 私网TPS流量，单位：次/秒
     * @example `1000`
     */
    "MaxPrivateTps"?: number;
    /**
     * 是否支持公网
     * @example `false`
     */
    "SupportEip"?: boolean;
    /**
     * 公网 TPS 流量峰值，单位：次/秒
     * @example `128`
     */
    "MaxEipTps"?: number;
    /**
     * 配置Queue的数量上限
     * @example `1000`
     */
    "QueueCapacity"?: number;
    /**
     * 最大连接数
     * @example `1000`
     */
    "MaxConnections"?: number;
    /**
     * 配置消息存储空间
     * @example `7`
     */
    "StorageSize"?: number;
    /**
     * 是否开通消息轨迹功能
     * @example `false`
     */
    "SupportTracing"?: boolean;
    /**
     * 配置消息轨迹的保存时长
     * @example `3`
     */
    "TracingStorageTime"?: number;
}
