export interface DescribeImageRepoListResponse {
    /**
     * 镜像仓总数量。
     * @example `25`
     */
    AllTargetCount: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7`
     */
    RequestId: string;
    /**
     * 接入镜像仓数量。
     * @example `20`
     */
    AddTargetCount: number;
    /**
     * 排除镜像仓数量。
     * @example `5`
     */
    DelTargetCount: number;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页显示的统计信息的数量。
         * @example `20`
         */
        PageSize: number;
        /**
         * 镜像仓总数量。
         * @example `83`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 镜像仓库的信息列表。
     */
    ImageRepoList: {
        /**
         * 防御是否对该镜像仓生效。取值：
         * - **add**：生效
         * - **del**：不生效
         * @example `add`
         */
        Flag: string;
        /**
         * 容器镜像仓库的名称。
         * @example `zeus`
         */
        RepoName: string;
        /**
         * 容器镜像仓库的命名空间。
         * @example `sas-script`
         */
        RepoNamespace: string;
    }[];
}
