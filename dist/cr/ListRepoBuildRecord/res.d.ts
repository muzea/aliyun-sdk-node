export interface ListRepoBuildRecordResponse {
    /**
     * 请求ID
     * @example `9D23DEDF-E91D-434B-B7D5-9D12C648D166`
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
     * 是否调用API成功，取值：
     * - `true`：调用API成功
     * - `false`：调用API失败
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
     * 构建记录列表
     */
    BuildRecords: {
        /**
         * 结束时间
         * @example `1572875610000`
         */
        EndTime: string;
        /**
         * 开始时间
         * @example `1572872207000`
         */
        StartTime: string;
        /**
         * 构建状态
         * @example `SUCCESS`
         */
        BuildStatus: string;
        /**
         * 构建记录ID
         * @example `537e08ab-735e-415f-b7c2-160eb87f8****`
         */
        BuildRecordId: string;
        /**
         * 镜像信息
         */
        Image: {
            /**
             * 仓库命名空间名称
             * @example `test`
             */
            RepoNamespaceName: string;
            /**
             * 镜像TAG
             * @example `v0.1`
             */
            ImageTag: string;
            /**
             * 仓库ID
             * @example `crr-gzsrlevmvoaq****`
             */
            RepoId: string;
            /**
             * 仓库名称
             * @example `test`
             */
            RepoName: string;
        };
    }[];
}
