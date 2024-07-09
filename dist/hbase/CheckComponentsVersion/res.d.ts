export interface CheckComponentsVersionResponse {
    /**
     * 请求ID。
     * @example `E3537EB4-1100-41CA-A147-C74CCC8BB12C`
     */
    RequestId: string;
    Components: {
        /**
         * 组件是否为最新版本的信息列表。
         */
        Component: {
            /**
             * 组件版本是否为最新版本。
             * @example `true`
             */
            IsLatestVersion: string;
            /**
             * 组件名称。
             * @example `HBASE`
             */
            Component: string;
        }[];
    };
}
