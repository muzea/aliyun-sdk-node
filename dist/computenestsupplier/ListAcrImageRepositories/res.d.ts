export interface ListAcrImageRepositoriesResponse {
    /**
     * 请求ID。
     * @example `C4A145D8-6F6C-532A-9001-9730CDA27578`
     */
    RequestId: string;
    /**
     * 下一个查询开始token。
     * @example `AAAAAfu+XtuBE55iRLHEYYuojI4=`
     */
    NextToken: string;
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    MaxResults: number;
    /**
     * 总数量。
     * @example `4`
     */
    TotalCount: number;
    /**
     * 镜像列表。
     */
    Repositories: {
        /**
         * 镜像ID。
         * @example `crr-3gqhkza0wbxxxxxx`
         */
        RepoId: string;
        /**
         * 镜像名称。
         * @example `wordpress`
         */
        RepoName: string;
        /**
         * 创建时间。
         * @example `2021-05-20T00:00:00Z`
         */
        CreateTime: string;
        /**
         * 修改时间。
         * @example `2021-05-20T00:00:00Z`
         */
        ModifiedTime: string;
    }[];
}
