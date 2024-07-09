export interface CreateRepositoryResponse {
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 镜像仓库 ID
     * @example `crr-xwvi3osiy4ff****`
     */
    RepoId: string;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 请求ID
     * @example `886FB272-15C3-44FC-AA54-F4ABD5B93A28`
     */
    RequestId: string;
}
