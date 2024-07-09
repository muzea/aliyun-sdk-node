export interface DescribeHaVipsRequest {
    /**
     * HaVip实例所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 列表的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值为**50**。默认值为**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 过滤条件详细信息。
     */
    "Filter"?: {
        /**
         * 过滤条件，最多可支持5个过滤条件。**N**的取值范围为**1~5**。
         * 支持的过滤条件如下：
         * - **VpcId**：专有网络ID。
         * - **VSwitchId**：交换机ID。
         * - **Status**：HaVip实例状态。
         * - **HaVipId**：HaVip实例ID。
         * - **HaVipAddress**：HaVip实例的IP地址。
         * 每个过滤条件（Filter Key）可以过滤多个值，每个值之间为“或”关系，只要有其中一个值符合则视为符合参数的过滤条件。
         * 各个过滤条件（Filter Key）之间为“与”关系，必须符合所有参数的过滤条件，才能被查询出来。
         * @example `HaVipId`
         */
        Key: string;
        /**
         * 指定的过滤条件对应的值。**N**的取值范围为**1~5**。
         * @example `havip-bp19o63nequs01i8d****`
         */
        Value: string[];
    }[];
    /**
     * 高可用虚拟IP所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tags"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
