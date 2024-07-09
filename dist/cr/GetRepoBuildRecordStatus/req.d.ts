export interface GetRepoBuildRecordStatusRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-jnzm47ihjmgc****`
     */
    "RepoId": string;
    /**
     * 构建记录ID
     * @example `a78ec6fb-16ea-4649-93b7-f52afba7d****`
     */
    "BuildRecordId": string;
}
