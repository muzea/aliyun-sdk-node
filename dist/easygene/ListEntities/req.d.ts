export interface ListEntitiesRequest {
    /**
     * 工作空间
     * @example `test-workspace`
     */
    "Workspace": string;
    /**
     * 起始查询位置
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    "NextToken"?: string;
    /**
     * 最大返回数量
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 排序条件
     * @example `createtime`
     */
    "OrderBy"?: string;
    /**
     * 是否逆序
     * @example `false`
     */
    "IsReversed"?: boolean;
}
