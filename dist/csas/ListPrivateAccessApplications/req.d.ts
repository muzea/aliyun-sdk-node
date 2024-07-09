export interface ListPrivateAccessApplicationsRequest {
    /**
     * 分页查询时显示的当前页的页码。取值：1~10000。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时设置的每页数量。取值：1~1000。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 内网访问应用名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `private_access_application_name`
     */
    "Name"?: string;
    /**
     * 内网访问应用状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "Status"?: string;
    /**
     * 内网访问应用地址。长度为1~128个字符，支持IPv4地址、CIDR、域名、泛域名。
     * @example `192.168.0.0/16`
     */
    "Address"?: string;
    /**
     * 内网访问应用ID集合。最多可输入100个内网访问应用ID。
     */
    "ApplicationIds"?: string[];
    /**
     * 内网访问标签ID。取值来源：
     * - [ListPrivateAccessTags](~~ListPrivateAccessTags~~)：批量查询内网访问标签。
     * - [CreatePrivateAccessTag](~~CreatePrivateAccessTag~~)：创建内网访问标签。
     * @example `tag-d3f64e8bdd4a****`
     */
    "TagId"?: string;
    /**
     * 内网访问策略ID。取值来源：
     * - [ListPrivateAccessPolices](~~ListPrivateAccessPolices~~)：批量查询内网访问策略。
     * - [CreatePrivateAccessPolicy](~~CreatePrivateAccessPolicy~~)：创建内网访问策略。
     * @example `pa-policy-54a7838a48bf****`
     */
    "PolicyId"?: string;
    /**
     * ConnectorID。取值来源：[ListConnectors](~~ListConnectors~~)批量查询Connector。
     * @example `connector-94db94e06b98****`
     */
    "ConnectorId"?: string;
}
