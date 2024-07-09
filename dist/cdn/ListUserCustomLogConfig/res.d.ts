export interface ListUserCustomLogConfigResponse {
    /**
     * 请求ID。
     * @example `95D5B69F-8AEC-419B-8F3A-612B35032B0D`
     */
    RequestId: string;
    ConfigIds: {
        /**
         * 日志配置ID列表。
         */
        ConfigId: string[];
    };
}
