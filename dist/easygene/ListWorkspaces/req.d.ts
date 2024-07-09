export interface ListWorkspacesRequest {
    /**
     * 查找条件
     * @example `s1`
     */
    "Search"?: string;
    /**
     * 排序依据
     * @example `createtime`
     */
    "OrderBy"?: string;
    /**
     * 逆序
     * @example `true`
     */
    "IsReversed"?: boolean;
    /**
     * 查询起始Token
     * @example `TestToken`
     */
    "NextToken"?: string;
    /**
     * 最多返回数量
     * @example `5`
     */
    "MaxResults"?: number;
    /**
     * Label选择器
     * @example `env=test`
     */
    "LabelSelector"?: string;
}
