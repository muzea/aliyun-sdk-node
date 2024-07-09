export interface DeleteSaslUserRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `alikafka_pre-cn-v0h1cng0****`
     */
    "InstanceId": string;
    /**
     * 用户名。
     * @example `test***`
     */
    "Username": string;
    /**
     * 类型。取值：
     * - **plain**：一种简单的用户名密码校验机制。消息队列Kafka版优化了PLAIN机制，支持不重启实例的情况下动态增加SASL用户。
     * - **scram**：一种用户名密码校验机制，安全性比PLAIN更高。消息队列Kafka版使用SCRAM-SHA-256。
     * - **LDAP**：仅适应于删除 Confluent 实例用户。
     * 默认值为**plain**。
     * @example `scram`
     */
    "Type"?: string;
    /**
     * 加密方式。取值：
     * - SCRAM-SHA-512 （默认选中）
     * - SCRAM-SHA-256
     * > 该参数仅支持 V3系列（Serverless）实例。
     * @example `SCRAM-SHA-256
    `
     */
    "Mechanism"?: string;
}
