export interface BatchGetEdgeInstanceDriverConfigsResponse {
    /**
     * 接口返回码。Success表示成功，其它表示错误码。详情请参见[错误码](~~135200~~)。
     * @example `Success`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `request parameter error`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `D6113390-F507-458B-8544-7B01F945630B`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的数据。
     */
    DriverConfigList: {
        /**
         * 驱动ID。
         * @example `021d154d2a2f4dd7a489773d9e04****`
         */
        DriverId: string;
        /**
         * 驱动配置信息。
         */
        ConfigList: {
            /**
             * 配置的关键字。在有多个配置的情况下，用于区分配置。
             * @example `key1`
             */
            Key: string;
            /**
             * 配置ID。
             * @example `dac71722ceac4a299dbf3e8dc3c8****`
             */
            ConfigId: string;
            /**
             * 配置文件格式，取值有KV（键值对配置）、JSON（JSON格式）、FILE（配置文件）。
             * @example `JSON`
             */
            Format: string;
            /**
             * 配置内容文本或存储配置内容文件的OSS地址。
             * @example `{\"test\":123}`
             */
            Content: string;
        }[];
    }[];
}
