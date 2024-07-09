export interface ListClientUserDefineRulesRequest {
    /**
     * 规则名称。
     * @example `规则****`
     */
    "Name"?: string;
    /**
     * 规则类型列表。
     */
    "Type"?: number[];
    /**
     * 设置从返回结果的第几页开始显示查询结果。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 指定列表每页显示数据条数 。
     * @example `10`
     */
    "PageSize": number;
}
