export interface ListPluginStatusRequest {
    /**
     * 地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID，单次请求最多支持50台实例，N的取值范围为1~50。
     */
    "InstanceId"?: string[];
    /**
     * 插件名称，支持全字符集。长度不得超过255个字符。
     * - 若不指定该参数，会查询实例中已安装插件的状态。
     *     > 若不指定该参数，只能指定一个实例ID。
     * - 若指定该参数，会查询出实例中指定插件的状态。
     * @example `testPluginName`
     */
    "Name"?: string;
    /**
     * 当前页码。
     * - 起始值为1。
     * - 默认值为1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。
     * - 最大值为50。
     * - 默认值为10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时每页的最大条目数。
     * 最大值为50。
     * 默认值为10。
     * @example `10`
     */
    "MaxResults"?: number;
    /**
     * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
     * @example `AAAAAdDWBF2`
     */
    "NextToken"?: string;
}
