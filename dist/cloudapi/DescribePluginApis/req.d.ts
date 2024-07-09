export interface DescribePluginApisRequest {
    /**
     * 指定要查询的API网关插件的ID。
     * @example `bf6583efcef44c51adb00c4e********`
     */
    "PluginId": string;
    /**
     * 指定要查询的API所属分组ID。
     * @example `231a4bb81ee94da785733c29********`
     */
    "GroupId"?: string;
    /**
     * 指定要查询的API编号。
     * @example `c6b0dd188b0e4e408e12f926********`
     */
    "ApiId"?: string;
    /**
     * API名称。
     * @example `API名称`
     */
    "ApiName"?: string;
    /**
     * API请求路径。
     * @example `/sendVerifyCode`
     */
    "Path"?: string;
    /**
     * API的请求HTTP Method。
     * @example `GET`
     */
    "Method"?: string;
    /**
     * API描述信息。
     * @example `API描述信息`
     */
    "Description"?: string;
    /**
     * 分页参数，每页显示条数，默认值10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 指定要查询的页码，默认是1，起始是1。
     * @example `1`
     */
    "PageNumber"?: number;
}
