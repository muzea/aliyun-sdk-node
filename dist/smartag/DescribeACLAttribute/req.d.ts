export interface DescribeACLAttributeRequest {
    /**
     * 访问控制实例所属地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 访问控制实例ID。
     * @example `acl-ohlexqptfhyaq****`
     */
    "AclId": string;
    /**
     * 分页查询时每页展示的访问控制规则条目数。
     * 取值范围：**1**~**50**。
     * 默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 分页查询时的页码。默认值：**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 访问控制规则应用方向。取值：
     * - **in**：入方向，指从外部访问智能接入网关实例所在的本地分支的流量。
     * - **out**：出方向，指从智能接入网关实例所在的本地分支访问外部的流量。
     * @example `out`
     */
    "Direction"?: string;
    /**
     * 订单ID。
     * @example `1255444444`
     */
    "Order"?: string;
    /**
     * 访问控制实例名称。
     * 长度为2~100个字符，以大小写字母或中文开头，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * > 该参数支持模糊搜索。
     * @example `doctest`
     */
    "Name"?: string;
}
