export interface UpdateConfigurationRecorderResponse {
    /**
     * 请求ID。
     * @example `2A1D5095-D1F9-56B6-A712-EA495608E79A`
     */
    RequestId: string;
    /**
     * 资源监控信息。
     */
    ConfigurationRecorder: {
        /**
         * 资源监控状态。取值：
         * - REGISTRABLE：未注册。
         * - BUILDING：构建中。
         * - REGISTERED：已注册。
         * - REBUILDING：重新构建中。
         * @example `REGISTERED`
         */
        ConfigurationRecorderStatus: string;
        /**
         * 监控资源类型列表。
         */
        ResourceTypes: string[];
    };
}
