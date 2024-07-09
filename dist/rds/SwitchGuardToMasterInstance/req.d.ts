export interface SwitchGuardToMasterInstanceRequest {
    /**
     * 灾备实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5*****`
     */
    "DBInstanceId": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
