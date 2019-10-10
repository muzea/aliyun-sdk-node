interface DescribeBackupPolicyRequest {
    /**
    * 实例所属的地域ID，您可以通过调用[DescribeDBInstanceAttribute](~~62010~~)进行查询。
    * @example `cn-hangzhou`
    */ "RegionId"?: string;
    "OwnerId"?: number;
    /**
    * 实例ID。
    * @example `dds-bpxxxxxxxx`
    */ "DBInstanceId": string;
}
export { DescribeBackupPolicyRequest };