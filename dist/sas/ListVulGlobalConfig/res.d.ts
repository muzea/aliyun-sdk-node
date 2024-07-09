export interface ListVulGlobalConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 配置集合。
     */
    VulGlobalConfigList: {
        /**
         * 配置项的key。
         * @example `vul_scan_ip_list`
         */
        ConfigKey: string;
        /**
         * 配置项取值信息。
         * @example `127.0.*.*,127.0.*.*`
         */
        ConfigValue: string;
    }[];
}
