export interface GetRepositoryResponse {
    /**
     * 摘要信息
     * @example `Automatically created repository`
     */
    Summary: string;
    /**
     * 创建时间
     * @example `1570759546000`
     */
    CreateTime: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 实例ID
     * @example `cri-kmsiwlxxdcva****`
     */
    InstanceId: string;
    /**
     * 仓库状态
     * @example `NORMAL`
     */
    RepoStatus: string;
    /**
     * 仓库类型，取值：
     * - `PUBLIC`：公开仓库
     * - `PRIVATE`：私有仓库
     * @example `PRIVATE`
     */
    RepoType: string;
    /**
     * 仓库构建类型，取值：
     * - `MANUAL`：手动触发构建
     * - `AUTO`：自动触发构建
     * @example `MANUAL`
     */
    RepoBuildType: string;
    /**
     * 最近修改时间
     * @example `1570759546100`
     */
    ModifiedTime: number;
    /**
     * 请求ID
     * @example `915E6734-3E50-4640-8DBA-126D2D94DE29`
     */
    RequestId: string;
    /**
     * 仓库ID
     * @example `crr-l5eoubonp0l****`
     */
    RepoId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 命名空间名称
     * @example `test`
     */
    RepoNamespaceName: string;
    /**
     * 镜像tag不可变性，取值：
     * - `true`：开启
     * - `false`：关闭
     * @example `true`
     */
    TagImmutability: boolean;
    /**
     * 仓库名称
     * @example `test`
     */
    RepoName: string;
    /**
     * 细节信息
     * @example `test`
     */
    Detail: string;
    /**
     * 资源组ID
     * @example `rg-acfmv36i4is****`
     */
    ResourceGroupId: string;
}
