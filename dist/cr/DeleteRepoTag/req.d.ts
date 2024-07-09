export interface DeleteRepoTagRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay****`
     */
    "InstanceId": string;
    /**
     * 镜像仓库ID
     * @example `crr-xwvi3osiy4ff****`
     */
    "RepoId": string;
    /**
     * 镜像版本
     * @example `1.24`
     */
    "Tag": string;
}
