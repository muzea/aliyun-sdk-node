export interface DescribeSaslUsersResponse {
    /**
     * 状态码。返回200代表成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息。
     * @example `operation success.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `9E3B3592-5994-4F65-A61E-E62A77A****`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    SaslUserList: {
        /**
         * SASL用户列表。
         */
        SaslUserVO: {
            /**
             * 类型。取值：
             * - **plain**： 一种简单的用户名密码校验机制。消息队列Kafka版优化了PLAIN机制，支持不重启实例的情况下动态增加SASL用户。
             * - **scram**：一种用户名密码校验机制，安全性比PLAIN更高。消息队列Kafka版使用SCRAM-SHA-256。
             * - **LDAP**：只有当是 Confluent 实例才会显示此用户类型。
             * 默认值为**plain**。
             * @example `scram`
             */
            Type: string;
            /**
             * 密码。
             * @example `******`
             */
            Password: string;
            /**
             * 用户名。
             * @example `test12***`
             */
            Username: string;
            /**
             * 加密方式。
             * > 该字段仅 V3系列（Serverless）实例支持。
             * @example `SCRAM-SHA-256`
             */
            Mechanism: string;
        }[];
    };
}
