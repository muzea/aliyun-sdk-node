export interface ListPluginForUuidResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 插件信息列表。
     */
    AegisUuidTargetPluginConfigList: {
        /**
         * 插件类型名称。取值：
         * - **alihips**：执行病毒木马防护功能
         * - **alisecguard**：执行攻击防护功能
         * - **alinet**：防护网络侧对服务器发起攻击
         * @example `alisecguard`
         */
        PluginName: string;
        /**
         * 插件是否已安装，取值：
         * - **true**：已安装
         * - **false**：未安装
         * @example `true`
         */
        PluginOnlineInstalled: boolean;
        /**
         * 插件是否在线。取值：
         * - **true**：在线
         * - **false**：离线
         * @example `true`
         */
        PluginOnlineStatus: boolean;
        /**
         * 插件实例安装码。
         * @example `k5O5nd`
         */
        PluginInstallCode: string;
        /**
         * 插件版本。
         * @example `00_10`
         */
        PluginVersion: string;
        /**
         * 插件配置信息列表。
         */
        AegisSuspiciousConfigList: {
            /**
             * 插件类型名称。取值：
             * - **alihips**：执行病毒木马防护功能
             * - **alisecguard**：执行攻击防护功能
             * - **alinet**：防护网络侧对服务器发起攻击
             * @example `alisecguard`
             */
            Type: string;
            /**
             * 是否启用。取值：
             * - **true**：启用
             * - **false**：禁用
             * @example `true`
             */
            Config: boolean;
            /**
             * 插件授权绑定信息。取值：
             * - **authorized**：已授权
             * - **unauthorized**：未授权
             * - **unbind**：未绑定
             * - **nonsupport**：不支持
             * @example `authorized`
             */
            Msg: string;
            /**
             * 是否全局配置。取值：
             * - **true**：是
             * - **false**：否
             * @example `true`
             */
            OverallConfig: boolean;
        }[];
    }[];
    /**
     * 结果代码，**200**表示成功，若为别的值则表示失败，调用方可根据此字段判断失败原因。
     * @example `200`
     */
    Code: number;
    /**
     * 错误码的详细信息。
     * @example `successful`
     */
    Message: string;
}
