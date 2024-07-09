export interface ListTemplatesRequest {
    /**
     * 工作空间
     * @example `test-workspace`
     */
    "Workspace": string;
    /**
     * 下次查询起始位置
     * @example `MTIzNDU2P1dvcmtzcGFjZT93cy1mMDE4OTgxNGU1ZTkK`
     */
    "NextToken"?: string;
    /**
     * 最大返回结果数
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 排序依据
     * @example `createtime`
     */
    "OrderBy"?: string;
    /**
     * 是否逆序
     * @example `false`
     */
    "IsReversed"?: boolean;
    /**
     * Label 选择器
     * @example `key1=value1`
     */
    "LabelSelector"?: string;
    /**
     * 查找条件
     * @example `test`
     */
    "Search"?: string;
}
