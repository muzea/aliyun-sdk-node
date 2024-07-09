export interface DescribeBackupPolicyRequest {
    /**
     * 实例ID。
     * @example `dds-bp16cb162771****`
     */
    "DBInstanceId": string;
    "InstanceType"?: string;
    "SrcRegion"?: string;
}
