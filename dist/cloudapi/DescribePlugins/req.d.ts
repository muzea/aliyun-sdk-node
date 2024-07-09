export interface DescribePluginsRequest {
    /**
     * API网关插件ID
     * @example `a96926e82f994915a8da40a119374537 `
     */
    "PluginId"?: string;
    /**
     * API网关插件业务类型
     * @example `cors`
     */
    "PluginType"?: string;
    /**
     * API网关插件名称
     * @example `testPlugin`
     */
    "PluginName"?: string;
    /**
     * 指定要查询的页码，默认是1，起始是1
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 指定分页查询时每页行数，最大值100，默认值为10
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     * @example `Key， Value`
     */
    "Tag"?: {
        /**
         * 标签键。
         * n 的取值范围为 `[1, 20]`
         * @example `env`
         */
        Key: string;
        /**
         * 标签值。
         * n 的取值范围为 `[1, 20]`
         * @example `' '`
         */
        Value: string;
    }[];
}
