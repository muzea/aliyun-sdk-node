export interface ListLogstashRequest {
    /**
     * 实例列表的页码。默认值：1。
     * @example `1`
     */
    "page"?: number;
    /**
     * 分页查询时设置的每页条数。默认值：20。
     * @example `10`
     */
    "size"?: number;
    /**
     * 实例名称，支持模糊查询。例如查询名称为abc的实例，则可能返回名称为abc、abcde、xyabc、xabcy的所有实例。
     * @example `ls-cn-abc`
     */
    "description"?: string;
    /**
     * 实例ID。
     * @example `ls-cn-n6w1o5jq****`
     */
    "instanceId"?: string;
    /**
     * 实例版本。
     * @example `5.5.3_with_X-Pack`
     */
    "version"?: string;
    /**
     * 资源组ID。
     * @example `rg-acfm2h5vbzd****`
     */
    "resourceGroupId"?: string;
    /**
     * 实例标签。
     * @example `[{"tagKey":"key1","tagValue":"value1"}]`
     */
    "tags"?: string;
}
