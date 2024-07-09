export interface DescribeIpv6AddressesRequest {
    /**
     * 要查询的IPv6地址所在的地域ID。您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-huhehaote`
     */
    "RegionId": string;
    /**
     * 要查询的IPv6地址ID。每次调用最多可以输入20个IPv6地址ID，以半角逗号（,）分隔。
     * @example `ipv6-2zen5j4axcp5l5qyy****`
     */
    "Ipv6AddressId"?: string;
    /**
     * 要查询的IPv6地址。
     * @example `2408:XXXX:153:3921:851c:c435:7b12:1c5f`
     */
    "Ipv6Address"?: string;
    /**
     * 要查询的IPv6地址的名称。
     * 名称长度为2~128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。但不能以`http://`或`https://`开头。
     * @example `test`
     */
    "Name"?: string;
    "AddressType"?: string;
    /**
     * 要查询的IPv6地址关联的实例ID。
     * @example `i-2ze72wuqj4y3jl4f****`
     */
    "AssociatedInstanceId"?: string;
    /**
     * 要查询的IPv6地址所关联的实例类型，取值：
     *  - **EcsInstance**：VPC类型的ECS。
     * - **NetworkInterface**：辅助弹性网卡ENI。
     * @example `EcsInstance`
     */
    "AssociatedInstanceType"?: string;
    /**
     * 要查询的IPv6地址的通信能力类型，取值：
     * - **Private**：私网通信类型。
     * - **Public**：公网通信类型。
     * @example `Private`
     */
    "NetworkType"?: string;
    /**
     * 要查询的IPv6地址所在的VPC ID。
     * @example `vpc-bp15zckdt37pq72zv****`
     */
    "VpcId"?: string;
    /**
     * 要查询的IPv6地址所在的交换机ID。
     * @example `vsw-25navfgbue4g****`
     */
    "VSwitchId"?: string;
    /**
     * 开通公网带宽后，要查询的IPv6地址对应的公网带宽实例ID。
     * @example `ipv6bw-uf6hcyzu65v98v3du****`
     */
    "Ipv6InternetBandwidthId"?: string;
    /**
     * 是否包含未生效的订购数据，取值：
     * - **false**（默认值）：不包含未生效的订购数据。
     * - **true**：包含未生效的订购数据。
     * @example `false`
     */
    "IncludeReservationData"?: boolean;
    /**
     * IPv6网关所属的资源组ID。
     * @example `rg-bp67acfmxazb4ph****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。列表元素最大数量：20。
     */
    "Tag"?: {
        /**
         * 资源的标签键。最多支持输入20个标签键。如需传入该值，则不能输入空字符串。
         * 一个标签键最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 一个标签值最多支持128个字符，必须以字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-），不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `yunke`
         */
        Value: string;
    }[];
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时每页的行数，最大值：**50**；默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 是否为托管实例。取值：
     * - **true**：是托管实例。
     * - **false**：不是托管实例。
     * 不填默认查询所有实例。
     * @example `false`
     */
    "ServiceManaged"?: boolean;
}
