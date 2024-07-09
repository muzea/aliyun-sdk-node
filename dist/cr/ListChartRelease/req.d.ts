export interface ListChartReleaseRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 仓库名称
     * @example `repo1`
     */
    "RepoName": string;
    /**
     * 命名空间名称
     * @example `ns1`
     */
    "RepoNamespaceName": string;
    /**
     * 页码
     * @example `1`
     */
    "PageNo"?: number;
    /**
     * 单页条目数
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 版本前缀
     * @example `null`
     */
    "Chart"?: string;
}
