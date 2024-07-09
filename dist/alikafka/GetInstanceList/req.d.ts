export interface GetInstanceListRequest {
    /**
     * 实例的地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 订单ID。您可以在阿里云用户中心的<props="china">[订单管理](https://usercenter2.aliyun.com/order/list?pageIndex=1&pageSize=20)中获取。</props>
     * <props="intl">[订单管理](https://usercenter2-intl.aliyun.com/order/list?pageIndex=1&pageSize=20&spm=5176.12818093.top-nav.ditem-ord.36f016d0OQFmJa)中获取。</props>
     * ><notice>V3系列暂不支持通过订单 ID 查询。></notice>
     * @example `6072673****`
     */
    "OrderId"?: string;
    /**
     * 实例ID列表。
     * @example `alikafka_post-cn-mp91gnw0p***`
     */
    "InstanceId"?: string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。
         * - 如果为空，则匹配所有标签键。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
         * @example `test`
         */
        Key: string;
        /**
         * 资源的标签值。
         * - 标签键为空时，必须为空。如果为空，匹配所有标签值。
         * - 最多支持128个字符，不能以aliyun和acs:开头，不能包含`http://`或者`https://`。
         * @example `test`
         */
        Value: string;
    }[];
    /**
     * 资源组ID，可通过资源组控制台查询。
     * @example `rg-ac***********7q`
     */
    "ResourceGroupId"?: string;
    /**
     * 实例系列标识，可根据系列号来过滤不同系列的实例。取值如下：
     * - v2
     * - v3
     * - confluent
     * @example `v3`
     */
    "Series"?: string;
}
