export interface ListChartRepositoryResponse {
    /**
     * 请求ID
     * @example `0AB62FB8-6873-4032-8515-4578D27523B7`
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
         * 仓库概述
         * @example `test`
         */
        Summary: string;
        /**
         * 仓库修改时间
         * @example `1571930329000`
         */
        ModifiedTime: number;
        /**
         * 仓库ID
         * @example `crcr-gpsu7b8chmxk****`
         */
        RepoId: string;
        /**
         * 仓库创建时间
         * @example `1571926644000`
         */
        CreateTime: number;
        /**
         * 仓库命名空间
         * @example `ns1`
         */
        RepoNamespaceName: string;
        /**
         * 实例ID
         * @example `cri-xkx6vujuhay0****`
         */
        InstanceId: string;
        /**
         * 仓库状态，取值：
         * - `PRIVATE`：私有仓库
         * - `PUBLIC`：公开仓库
         * @example `PUBLIC`
         */
        RepoType: string;
        /**
         * 仓库状态，取值：
         * - `NORMAL`：正常
         * - `DELETING`：删除中
         * @example `NORMAL`
         */
        RepoStatus: string;
        /**
         * 仓库名称
         * @example `repo1`
         */
        RepoName: string;
        /**
         * 资源组 ID
         * @example `rg-aek2ikd5rxxxxxx`
         */
        ResourceGroupId: string;
    }[];
}
