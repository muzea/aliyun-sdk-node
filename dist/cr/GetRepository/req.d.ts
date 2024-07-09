export interface GetRepositoryRequest {
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    "InstanceId": string;
    /**
     * 仓库ID。该 API 支持通过 RepoId 查询，或通过 RepoNamespaceName+RepoName 查询。
     * @example `crr-03cuozrsqhkw****`
     */
    "RepoId"?: string;
    /**
     * 仓库命名空间名称。该 API 支持通过 RepoId 查询，或通过 RepoNamespaceName+RepoName 查询。
     * @example `test`
     */
    "RepoNamespaceName"?: string;
    /**
     * 仓库名称。该 API 支持通过 RepoId 查询，或通过 RepoNamespaceName+RepoName 查询。
     * @example `test`
     */
    "RepoName"?: string;
}
