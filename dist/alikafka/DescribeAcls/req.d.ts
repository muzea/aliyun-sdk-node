export interface DescribeAclsRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `alikafka_pre-cn-v0h1cng****`
     */
    "InstanceId": string;
    /**
     * 用户名。
     * - 支持使用星号（*）表示所有用户。
     * >
     * > - 只有当给所有用户授权之后，使用星号（*）才可以查询到所授权的用户。
     * @example `test12****`
     */
    "Username": string;
    /**
     * 资源类型。取值：
     * - **Topic**
     * - **Group**
     * - **Cluster**
     * - **TransactionalId**
     * @example `Topic`
     */
    "AclResourceType": string;
    /**
     * 资源名称。
     * - Topic或Group的名称。
     * - 支持使用星号（*）表示所有Topic或Group的名称。
     * >
     * > - 只有当给所有资源授权之后，使用星号（*）才可以查询到所授权的资源。
     * @example `demo`
     */
    "AclResourceName": string;
    /**
     * 匹配模式。取值：
     * - LITERAL：全匹配
     * - PREFIXED：前缀匹配
     * @example `LITERAL`
     */
    "AclResourcePatternType"?: string;
    /**
     * 来源 IP。
     * >-  仅支持具体的 IP 地址或者设置 * （IP 全开），不支持设置 IP 网段。
     * > - 该参数仅支持 V3系列（Serverless）实例。
     * @example `*`
     */
    "Host"?: string;
    /**
     * 授权方式。取值：
     * - DENY：拒绝
     * - ALLOW：允许
     * > 该参数仅支持 V3系列（Serverless）实例。
     * @example `DENY`
     */
    "AclPermissionType"?: string;
    /**
     * 操作类型。取值：
     * - **Write**：写入
     * - **Read**：读取
     *
     * - **Describe**：读取 TransactionalId
     *
     * - **IdempotentWrite**：幂等写 Cluster，v3 系列实例不支持该参数，v3 系列实例请使用 IDEMPOTENT_WRITE。
     *
     * - **IDEMPOTENT_WRITE**： 幂等写 Cluster，仅 V3 系列实例可用。
     *
     * - **DESCRIBE_CONFIGS**：查询配置，仅 V3 系列实例可用。
     * @example `Write`
     */
    "AclOperationType"?: string;
}
