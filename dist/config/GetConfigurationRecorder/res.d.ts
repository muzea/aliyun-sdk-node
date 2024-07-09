export interface GetConfigurationRecorderResponse {
    /**
     * 请求ID。
     * @example `AE43696A-B3AF-5E55-9845-11393127E6D3`
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
         * - REBUILDING：重新构建中
         * @example `REGISTERED`
         */
        ConfigurationRecorderStatus: string;
        /**
         * 监控的资源类型列表。
         */
        ResourceTypes: string[];
    };
}
