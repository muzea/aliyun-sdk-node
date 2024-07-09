export interface ListRepoSyncTaskRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 仓库所在命名空间的名称
     * @example `ns`
     */
    "RepoNamespaceName"?: string;
    /**
     * 仓库名称
     * @example `test`
     */
    "RepoName"?: string;
    /**
     * 镜像版本
     * @example `nginx`
     */
    "Tag"?: string;
    /**
     * 页号
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 页大小
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 同步任务记录ID
     * @example `crsr-7lph66uloi6h****`
     */
    "SyncRecordId"?: string;
}
