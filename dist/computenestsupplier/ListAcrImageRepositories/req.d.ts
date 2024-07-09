export interface ListAcrImageRepositoriesRequest {
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始token。
     * @example `AAAAAWns8w4MmhzeptXVRG0PUEU=`
     */
    "NextToken"?: string;
    /**
     * 镜像仓库的名称。
     * @example `wordpress`
     */
    "RepoName"?: string;
    /**
     * 部署物类型。默认值为：AcrImage。可能的值：
     * - HelmChart：Helm Chart镜像。
     * - AcrImage：容器镜像。
     * @example `AcrImage`
     */
    "ArtifactType"?: string;
}
