export interface DescribeSubscriptionInstancesRequest {
    /**
     * 数据订阅实例所在地域的ID，详情请参见[支持的地域列表](~~49442~~)。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 每页记录数，取值：**30**、**50**、**100**，默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
    /**
     * 页码，取值为大于**0**且不超过Integer数据类型的最大值，默认值为**1**。
     * @example `1`
     */
    "PageNum"?: number;
    /**
     * 订阅实例名称。
     * > 传入本参数后，DTS将在调用结果中返回包含该名称的订阅实例。
     * @example `MySQL订阅`
     */
    "SubscriptionInstanceName"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。
     * @example `0c593ea1-3bea-11e9-b96b-88e9fe63****`
     */
    "ClientToken"?: string;
    /**
     * 阿里云主账号ID，无需设置，该参数即将下线。
     * @example `12323344****`
     */
    "AccountId"?: string;
    /**
     * 数据迁移实例的标签，作为过滤项，当此项不为空时，仅拥有此标签的实例会返回。
     */
    "Tag"?: {
        /**
         * 标签的键。
         * > - N表示传入第几个标签的键。例如：Tag.1.Key表示传入第一个标签的键；Tag.2.Key表示传入第二个标签的键。可以同时查询1~20个标签键。
         * - 不允许传入空字符串。
         * @example `testkey1`
         */
        Key: string;
        /**
         * 标签的值。
         * >- N表示传入第几个标签的值。例如：Tag.1.Value表示传入第一个标签的值；Tag.2.Value表示传入第二个标签的值。可以同时查询1~20个标签值。
         * - 允许传入空字符串。
         * @example `testvalue1`
         */
        Value: string;
    }[];
    "ResourceGroupId"?: string;
}
