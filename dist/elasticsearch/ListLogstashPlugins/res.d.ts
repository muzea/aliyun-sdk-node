export interface ListLogstashPluginsResponse {
    /**
     * 请求ID。
     * @example `99407AB-2FA9-489E-A259-40CF6DCC****	`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        /**
         * 插件描述。
         * @example `The clone filter is for duplicating events.`
         */
        description: string;
        /**
         * 插件的说明文档地址。
         * @example `https://xxx.html`
         */
        specificationUrl: string;
        /**
         * 插件的状态。支持：
         * - INSTALLED：已安装
         * - UNINSTALLED：未安装
         * - INSTALLING：安装中
         * - UNINSTALLING：卸载中
         * - UPGRADING：升级中
         * - FAILED：安装失败
         * - UNKNOWN：集群失联无法获取到创建状态
         * @example `INSTALLED`
         */
        state: string;
        /**
         * 插件来源。
         * @example `SYSTEM`
         */
        source: string;
        /**
         * 插件名称。
         * @example `logstash-filter-clone`
         */
        name: string;
    }[];
}
