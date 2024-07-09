export interface DescribeBackupSetDownloadLinkRequest {
    /**
     * OceanBase 集群 ID。
     * @example `ob317v4uif****`
     */
    "InstanceId": string;
    /**
     * 目标备份集所对应的下载任务 ID。
     * @example `1000002`
     */
    "DownloadTaskId": string;
}
