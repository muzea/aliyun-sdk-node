export interface ModifyReadonlyInstanceDelayReplicationTimeRequest {
    /**
     * 只读实例ID。可调用DescribeDBInstances获取。
     * @example `rr-bp****`
     */
    "DBInstanceId": string;
    /**
     * 延迟复制时间。单位：秒。
     * @example `100`
     */
    "ReadSQLReplicationTime": string;
    /**
     * 资源组ID。可调用DescribeDBInstanceAttribute获取。
     * @example `rg-acfmy****`
     */
    "ResourceGroupId"?: string;
}
