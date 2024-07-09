export interface ListRepositoryResponse {
    /**
     * 请求ID
     * @example `5241C090-DA69-4B0F-8E3F-2F24FDE1110E`
     */
    RequestId: string;
    /**
     * 返回值
     * @example `success`
     */
    Code: string;
    /**
     * 页号
     * @example `1`
     */
    PageNo: number;
    /**
     * 是否成功
     * @example `true`
     */
    IsSuccess: boolean;
    /**
     * 页大小
     * @example `30`
     */
    PageSize: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: string;
    /**
     * 仓库列表
     */
    Repositories: {
        /**
         * 摘要信息
         * @example `test OK`
         */
        Summary: string;
        /**
         * 仓库构建类型，取值：
         * - `AUTO`：自动触发构建
         * - `MANUAL`：手动触发构建
         * @example `MANUAL`
         */
        RepoBuildType: string;
        /**
         * 最近修改时间
         * @example `1564153576000`
         */
        ModifiedTime: number;
        /**
         * 仓库ID
         * @example `crr-03cuozrsqhkw****`
         */
        RepoId: string;
        /**
         * 创建时间
         * @example `1564153576000`
         */
        CreateTime: number;
        /**
         * 仓库命名空间
         * @example `test`
         */
        RepoNamespaceName: string;
        /**
         * 镜像tag不可变性
         * @example `true`
         */
        TagImmutability: boolean;
        /**
         * 实例ID
         * @example `cri-kmsiwlxxdcv****`
         */
        InstanceId: string;
        /**
         * 仓库类型，取值：
         * - `PUBLIC`：公开
         * - `PRIVATE`：私有
         * @example `PRIVATE`
         */
        RepoType: string;
        /**
         * 仓库状态
         * @example `NORMAL`
         */
        RepoStatus: string;
        /**
         * 仓库名称
         * @example `test`
         */
        RepoName: string;
        /**
         * 资源组ID
         * @example `rg-acfm4n5kzyfxxxx
        `
         */
        ResourceGroupId: string;
    }[];
}
