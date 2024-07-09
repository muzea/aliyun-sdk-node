export interface DescribeDBInstanceNetInfoRequest {
    /**
     * 用于保证请求的幂等性，防止重复提交请求。由客户端生成该参数值，要保证在不同请求间唯一，最大值不超过64个ASCII字符，且该参数值中不能包含非ASCII字符。
     * @example `ETnLKlblzczshOTUbOC****`
     */
    "ClientToken"?: string;
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备用参数，无需配置。
     * @example `test`
     */
    "Flag"?: number;
    /**
     * 连接地址类型，取值：
     * * **Normal**：普通连接地址。
     * * **ReadWriteSplitting**：读写分离连接地址。
     * >默认返回所有类型连接地址。
     * @example `Normal`
     */
    "DBInstanceNetRWSplitType"?: string;
    /**
     * 专属集群MySQL通用版实例所属的组名。
     * @example `rgc-2ze****`
     */
    "GeneralGroupName"?: string;
}
