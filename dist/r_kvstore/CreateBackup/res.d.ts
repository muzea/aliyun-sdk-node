export interface CreateBackupResponse {
    /**
     * 备份任务ID。
     * 针对2023-12-05前申请的集群实例，返回值是由各个子DB节点的jobId组成，例如2分片的集群实例，BackupJobID值的返回值会如 "10000,10001"。
     * 针对2023-12-05之后申请的集群实例，一个集群下所有DB节点的job统一由一个jobId描述，用户只需关心这一个jobId即可。
     * @example `"1022,2480"`
     */
    BackupJobID: string;
    /**
     * 请求ID。
     * @example `2FF6158E-3394-4A90-B634-79C49184****`
     */
    RequestId: string;
}
