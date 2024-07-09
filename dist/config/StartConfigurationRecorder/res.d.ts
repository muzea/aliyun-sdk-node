export interface StartConfigurationRecorderResponse {
    /**
     * 请求ID。
     * @example `4D994662-6B27-536F-B320-38F4B3D58705`
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
