export interface ListAcrImageTagsRequest {
    /**
     * 分页查询时每页行数。其中最大值为100行，默认值为20行。
     * @example `20`
     */
    "MaxResults"?: number;
    /**
     * 下一个查询开始token。
     * @example `AAAAAW8kZY+u1sYOaYf5JmgmDQQ=`
     */
    "NextToken"?: string;
    /**
     * 镜像ID。
     * @example `crr-3gqhkza0wbxxxxxx`
     */
    "RepoId": string;
    /**
     * 部署物类型。默认值为：AcrImage。可能的值：
     * - HelmChart：Helm Chart镜像。
     * - AcrImage：容器镜像。
     * @example `AcrImage`
     */
    "ArtifactType": string;
}
