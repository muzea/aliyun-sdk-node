export interface ModifyAccountDescriptionRequest {
    /**
     * 数据库账号的描述，取值说明：
     * - 不能以http://和https://开头。
     * - 长度为0~256个字符。
     * @example `test`
     */
    "Comment": string;
    /**
     * 数据库账号。
     * @example `test`
     */
    "Account": string;
    /**
     * 集群ID。
     * @example `cc-bp108z124a8o7****`
     */
    "DBClusterId": string;
    /**
     * 地域ID。您可以通过调用[DescribeRegions](~~416820~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
