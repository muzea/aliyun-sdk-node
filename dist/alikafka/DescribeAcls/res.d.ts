export interface DescribeAclsResponse {
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
     * @example `46496E38-881E-4719-A2F3-F3DA6AE****`
     */
    RequestId: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    KafkaAclList: {
        /**
         * ACL列表。
         */
        KafkaAclVO: {
            /**
             * 资源类型。取值：
             * - **Topic**
             * - **Group**
             * @example `Topic`
             */
            AclResourceType: string;
            /**
             * 主机。
             * @example `****`
             */
            Host: string;
            /**
             * 操作类型。返回值：
             * - **Write**：写入
             * - **Read**：读取
             *
             *
             * - **Describe**：读取 TransactionalId
             *
             * - **IdempotentWrite**：幂等写 Cluster，v3 系列实例不支持该值。
             *
             * - **IDEMPOTENT_WRITE**： 幂等写 Cluster，仅 V3 系列实例可用。
             *
             * - **DESCRIBE_CONFIGS**：查询配置，仅 V3 系列实例可用。
             * @example `Write`
             */
            AclOperationType: string;
            /**
             * 资源名称。
             * - Topic或Consumer Group的名称。
             * - 支持使用星号（*）表示所有Topic或Conusmer Group的名称。
             * @example `demo`
             */
            AclResourceName: string;
            /**
             * 匹配模式。取值：
             * - **LITERAL**：全匹配
             * - **PREFIXED**：前缀匹配
             * @example `LITERAL`
             */
            AclResourcePatternType: string;
            /**
             * 用户名。
             * @example `test12***`
             */
            Username: string;
            /**
             * 授权方式。取值：
             * - DENY：拒绝
             * - ALLOW：允许
             * > 该字段仅支持 V3系列（Serverless）实例。
             * @example `DENY`
             */
            AclPermissionType: string;
        }[];
    };
}
