export interface ListVirtualWareHouseConfigsResponse {
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 参数的配置文件类型，取值：
         * - **config.xml**
         * - **users.xml**
         * @example `config.xml`
         */
        ConfigType: string;
        /**
         * 参数名。
         * @example `keep_alive_timeout`
         */
        ConfigFullPath: string;
        /**
         * 参数默认值。
         * @example `300`
         */
        DefaultValue: string;
        /**
         * 参数的取值范围。
         * @example `>=10`
         */
        Spec: string;
        /**
         * 参数描述。
         * @example `The number of seconds that ClickHouse HTTP server waits for incoming requests before closing the connection`
         */
        Description: string;
        /**
         * 修改参数后是否需要重启计算组使参数生效，取值说明：
         * - **true**：需要重启计算组。
         * - **false**：不需要重启计算组。
         * @example `true`
         */
        NeedRestart: boolean;
        /**
         * 参数运行值。
         * @example `300`
         */
        Value: string;
    }[];
    /**
     * 请求ID。
     * @example `87B839E3-7384-52D5-9CAB-756DD3BF7B9B`
     */
    RequestId: string;
}
