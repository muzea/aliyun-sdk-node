export interface GetRepoTagRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 仓库ID
     * @example `crr-tquyps22md8p****`
     */
    "RepoId": string;
    /**
     * 仓库版本
     * @example `1.0`
     */
    "Tag": string;
}
