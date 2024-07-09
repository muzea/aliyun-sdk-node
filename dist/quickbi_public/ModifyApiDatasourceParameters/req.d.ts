export interface ModifyApiDatasourceParametersRequest {
    /**
     * API数据源的ID。
     * @example `b66a66de51f24d149116c17718138194`
     */
    "ApiId": string;
    /**
     * 工作空间ID。
     * @example `726bee5a-****-43e1-9a8e-b550f0120f35`
     */
    "WorkspaceId": string;
    /**
     * JSONArray格式的API数据参数配置，修改的参数数量不能超过10个。
     * - name：普通参数或查询语句中的参数名称
     * - value：普通参数或查询语句中的参数值
     * @example `[{"name":"token","value":"xxxxxxxxxxxx"},{"name":"pageSize","value":100}]`
     */
    "Parameters": string;
}
