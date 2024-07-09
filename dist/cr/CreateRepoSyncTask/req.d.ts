export interface CreateRepoSyncTaskRequest {
    /**
     * 源实例ID
     * @example `cri-hpdfkc6utbaq****`
     */
    "InstanceId": string;
    /**
     * 源实例镜像仓库ID
     * @example `crr-iql7jalx4g0****`
     */
    "RepoId": string;
    /**
     * 源实例镜像Tag
     * @example `tag1`
     */
    "Tag": string;
    /**
     * 目标实例地域ID
     * @example `cn-hangzhou`
     */
    "TargetRegionId": string;
    /**
     * 目标实例ID
     * @example `cri-ibxs3piklys3****`
     */
    "TargetInstanceId": string;
    /**
     * 目标实例命名空间
     * @example `ns1`
     */
    "TargetNamespace": string;
    /**
     * 目标实例镜像仓库名称
     * @example `repo1`
     */
    "TargetRepoName": string;
    /**
     * 目标实例镜像Tag
     * @example `tag1`
     */
    "TargetTag": string;
    /**
     * 目标实例所在账号UID
     * @example `12345***`
     */
    "TargetUserId"?: string;
    /**
     * 是否强制覆盖已存在镜像：
     * - `true`：强制覆盖已存在镜像
     * - `false`：不强制覆盖已存在镜像
     * @example `true`
     */
    "Override"?: boolean;
}
