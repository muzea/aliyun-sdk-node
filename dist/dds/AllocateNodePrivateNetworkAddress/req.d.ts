export interface AllocateNodePrivateNetworkAddressRequest {
    /**
     * 实例所属的可用区ID。
     * > 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询实例的可用区ID。
     * @example `cn-hangzhou-b`
     */
    "ZoneId"?: string;
    /**
     * 分片集群实例ID。
     * @example `dds-bp1fa5efaa93****`
     */
    "DBInstanceId": string;
    /**
     * Shard节点ID或ConfigServer节点ID。
     * > 您可以调用[DescribeDBInstanceAttribute](~~62010~~)接口查询Shard/ConfigServer节点ID。
     * @example `d-bp124beeb0ac****`
     */
    "NodeId": string;
    /**
     * 账户名。
     * > - 以小写字母开头，长度为4~16位，由小写字母、数字或下划线组成。
     * > - 仅在首次申请Shard/ConfigServer地址时，需要设置账户名和账户密码。即所有Shard节点和ConfigServer节点都将使用首次申请地址时设置的账户和密码。
     * > - 该账户的权限固定为只读权限。
     * @example `shardcsaccount`
     */
    "AccountName"?: string;
    /**
     * 账户密码。
     * - 密码由大写字母、小写字母、数字、特殊字符中的至少三种组成，特殊字符为`!#$%^&*()_+-=`
     * - 密码长度为8-32位。
     * @example `Test123456`
     */
    "AccountPassword"?: string;
}
