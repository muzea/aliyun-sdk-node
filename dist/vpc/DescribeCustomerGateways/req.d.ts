export interface DescribeCustomerGatewaysRequest {
    /**
     * 用户网关所属的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-shanghai`
     */
    "RegionId": string;
    /**
     * 用户网关的实例ID。
     * > 如果您不指定用户网关的实例ID，则系统默认查询当前地域下所有用户网关的信息。
     * @example `cgw-bp1pvpl9r9adju6l5****`
     */
    "CustomerGatewayId"?: string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的条目数。最大值：**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 用户网关绑定的标签列表。
     */
    "Tag"?: {
        /**
         * 标签键。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一次最多支持输入20个标签键。
         * @example `TagKey`
         */
        Key: string;
        /**
         * 标签值。
         * 标签值最多支持128个字符，可以为空字符串，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一个标签键对应一个标签值。一次最多支持输入20个标签值。
         * @example `TagValue`
         */
        Value: string;
    }[];
    /**
     * 用户网关所属的资源组ID。
     * 您可以调用[ListResourceGroups](~~158855~~)接口查询资源组ID。
     * @example `rg-acfmzs372yg****`
     */
    "ResourceGroupId"?: string;
}
