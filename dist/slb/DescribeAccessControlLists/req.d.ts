export interface DescribeAccessControlListsRequest {
    /**
     * 访问控制策略组的地域ID。
     * 您可以通过调用[DescribeRegions](~~27584~~)接口查询地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制策略组名称。访问控制策略组名称。长度限制为1~80个字符，只支持中文、字母、数字和半角句号（.）、短划线（-）、正斜线（/）和下划线（_）。访问控制策略组名称必须为地域内唯一。访问控制策略组名称支持模糊查询。
     * @example `rule1`
     */
    "AclName"?: string;
    /**
     * 访问控制策略组绑定的实例的IP类型。取值：
     * - **ipv4**：负载均衡实例的IP地址是IPv4类型。
     * - **ipv6**：负载均衡实例的IP地址是IPv6类型。
     * @example `ipv4`
     */
    "AddressIPVersion"?: string;
    /**
     * 分页查询时每页的行数，最大值：**50**，默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 列表的页码，默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 企业资源组ID。
     * @example `rg-atstuj3rtop4****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 资源的标签键。N的取值范围：**1~20**。一旦输入该值，则不允许为空字符串。
         * 最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `test`
         */
        Key: string;
        /**
         * 资源的标签值。N的取值范围：**1~20**。一旦输入该值，可以为空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `1`
         */
        Value: string;
    }[];
}
