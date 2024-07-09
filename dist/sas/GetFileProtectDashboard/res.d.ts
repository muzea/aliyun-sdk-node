export interface GetFileProtectDashboardResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6673D49C-A9AB-40DD-B4A2-B92306701AE7`
     */
    RequestId: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 启用的规则总数。
         * @example `12`
         */
        EnableRuleCount: number;
        /**
         * 插件安装总数。
         * @example `12`
         */
        PluginCount: number;
        /**
         * 当前在线的插件总数。
         * @example `11`
         */
        PluginOnlineCount: number;
        /**
         * 当前离线的插件总数。
         * @example `1`
         */
        PluginOfflineCount: number;
    };
}
