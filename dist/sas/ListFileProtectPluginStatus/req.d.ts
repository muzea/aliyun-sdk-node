export interface ListFileProtectPluginStatusRequest {
    /**
     * 规则对应的开关ID。
     * @example `FILE_PROTECT_RULE_SWITCH_TYPE_1693474122927`
     */
    "SwitchId"?: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定返回结果的当前页码。
     * @example `1`
     */
    "CurrentPage"?: number;
}
