export interface DescribeRestoreIncrDetailRequest {
    /**
     * 备份恢复的集群Id。
     * @example `ld-m5eyf188hw481xxxx`
     */
    "ClusterId": string;
    /**
     * 恢复记录Id，可通过DescribeRestoreSummary接口获取到。
     * @example `2020110514xxxx`
     */
    "RestoreRecordId": string;
}
