export interface DescribeDBInstanceAttributeRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * ><warning>请勿同时配置多个实例ID进行批量查询，否则将会查询超时导致失败。></warning>
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 实例过期状态，取值如下：
     * * **True**：已过期。
     * * **False**：未过期。
     * @example `False`
     */
    "Expired"?: string;
}
