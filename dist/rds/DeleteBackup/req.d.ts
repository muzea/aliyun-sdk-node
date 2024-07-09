export interface DeleteBackupRequest {
    /**
     * 实例ID。可调用DescribeDBInstances获取。
     * @example `rm-uf6wjk5****`
     */
    "DBInstanceId": string;
    /**
     * 备份集ID。可通过接口DescribeBackups查询。多组值以英文逗号（,）隔开，单次最多传入100个。
     * >仅支持删除DescribeBackups中**StoreStatus**为**Enabled**的备份集。
     * @example `32490****`
     */
    "BackupId": string;
}
