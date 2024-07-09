export interface ListConnectorsRequest {
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
     * Connector名称。长度为1~128个字符，支持中文和大小写英文字母，可包含数字、半角句号（.）、下划线（_）和短划线（-）。
     * @example `connector_name`
     */
    "Name"?: string;
    /**
     * Connector连接状态。取值：
     * - **Online**：在线。
     * - **Offline**：离线。
     * @example `Online`
     */
    "Status"?: string;
    /**
     * Connector实例状态。取值：
     * - **Enabled**：开启。
     * - **Disabled**：关闭。
     * @example `Enabled`
     */
    "SwitchStatus"?: string;
    /**
     * ConnectorID集合。最多可输入100个ConnectorID。
     */
    "ConnectorIds"?: string[];
}
