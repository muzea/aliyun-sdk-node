export interface ListPublicKeysRequest {
    /**
     * 公钥名称
     * @example `mykey`
     */
    "KeyName"?: string;
    /**
     * 公钥分组名
     * @example `g-test`
     */
    "KeyGroup"?: string;
    /**
     * 查询列表的页码。起始值为1。
     * 默认值：1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数，取值1～100。
     * 默认值：10
     * @example `10`
     */
    "PageSize"?: number;
}
