export interface ListSubmissionsRequest {
    /**
     * 工作空间
     * @example `TestWorkspace`
     */
    "Workspace": string;
    /**
     * 状态
     * @example `Failed`
     */
    "Status"?: string;
    /**
     * 搜索ID
     * @example `sub-13BeXWnGvrOl3MC124tazcJVKaV`
     */
    "Search"?: string;
    /**
     * Next Token
     * @example `TestToken`
     */
    "NextToken"?: string;
    /**
     * 最大返回数目
     * @example `5`
     */
    "MaxResults"?: number;
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
}
