export interface DescribeAvailableEngineVersionResponse {
    /**
     * 请求ID。
     * @example `52507B6B-003B-47A3-A0A3-9FE992C7A243`
     */
    RequestId: string;
    EngineVersions: {
        /**
         * 可升级的版本列表。
         * > 如果当前已经是最新版本，则本参数返回为空。
         */
        EngineVersion: string[];
    };
}
