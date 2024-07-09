export interface CreateAclRequest {
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
     * - 支持使用星号（*）表示所有用户名。
     * >
     * > - 只有当给所有用户授权之后，使用星号（*）才可以查询到所授权的用户。
     * @example `test***`
     */
    "Username": string;
    /**
     * 资源类型。取值：
     * - **Topic**：消息主题。
     * - **Group**：消费组。
     * - **Cluster**：实例。
     * - **TransactionalId**：事务ID。
     * @example `Group`
     */
    "AclResourceType": string;
    /**
     * 资源名称。
     * - 资源的名称，可以是Topic名称、Group ID、集群名称或事务ID。
     * - 支持使用星号（*）表示该类型的资源。
     * >
     * > - 只有当给所有资源授权之后，使用星号（*）才可以查询到所授权的资源。
     * @example `X****`
     */
    "AclResourceName": string;
    /**
     * 匹配模式。取值：
     * - **LITERAL**：完全匹配
     * - **PREFIXED**：前缀匹配
     * @example `LITERAL`
     */
    "AclResourcePatternType": string;
    /**
     * 操作类型。取值：
     * - **Write**：写入
     * - **Read**：读取
     * - **Describe**：读取 TransactionalId
     * - **IdempotentWrite**：幂等写 Cluster
     * - **IDEMPOTENT_WRITE**： 幂等写 Cluster，仅 V3 系列实例可用。
     * - **DESCRIBE_CONFIGS**：查询配置，仅 V3 系列实例可用。
     * @example `Read`
     */
    "AclOperationType": string;
    /**
     * 批量授权操作类型。多个操作以 , 分割。
     * 取值：
     * - **Write**：读取
     * - **Read**：写入
     * - **Describe**：读取 TransactionalId
     * - **IdempotentWrite**：幂等写 Cluster
     * - **IDEMPOTENT_WRITE**： 幂等写 Cluster，仅 V3 系列实例可用。
     * - **DESCRIBE_CONFIGS**：查询配置，仅 V3 系列实例可用。
     * > 该参数仅支持 V3系列（Serverless）实例。
     * @example `Write,Read`
     */
    "AclOperationTypes"?: string;
    /**
     * 授权方式。取值：
     * - **DENY**：拒绝。
     *
     * - **ALLOW**：允许。
     * > 该参数仅支持 V3系列（Serverless）实例。
     * @example `DENY`
     */
    "AclPermissionType"?: string;
    /**
     * 来源 IP。
     * >- 仅支持具体的 IP 地址或者设置 * （IP 全开），不支持设置 IP 网段。
     * >- 该参数仅支持 V3系列（Serverless）实例。
     * @example `*`
     */
    "Host"?: string;
}
