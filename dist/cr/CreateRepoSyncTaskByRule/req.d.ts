export interface CreateRepoSyncTaskByRuleRequest {
    /**
     * 实例ID
     * @example `cri-hpdfkc6utbaq****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-hnoq7j93or3k****`
     */
    "RepoId": string;
    /**
     * 待同步的镜像版本
     * @example `1.24`
     */
    "Tag": string;
    /**
     * 同步规则ID
     * @example `crsr-o8n4dijbumgq****`
     */
    "SyncRuleId": string;
}
