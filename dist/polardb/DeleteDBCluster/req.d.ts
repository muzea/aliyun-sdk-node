export interface DeleteDBClusterRequest {
    /**
     * 集群ID。
     * @example `pc-**************`
     */
    "DBClusterId": string;
    /**
     * 删除集群时备份集保留策略，取值范围如下：
     * * **ALL**：长期保留全部备份。
     * * **LATEST**：长期保留最后一个备份（删除前自动备份）。
     * * **NONE**：集群删除时不保留备份集。
     * @example `NONE`
     */
    "BackupRetentionPolicyOnClusterDeletion"?: string;
}
