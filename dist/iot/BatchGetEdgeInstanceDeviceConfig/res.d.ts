export interface BatchGetEdgeInstanceDeviceConfigResponse {
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
     * @example `D4A102C2-36A5-4964-9694-0F8EFF95CCA8`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的设备配置数据。
     */
    DeviceConfigList: {
        /**
         * 设备ID。
         * @example `sjI0Sd124XFYyjBY****000101`
         */
        IotId: string;
        /**
         * 设备配置信息。
         */
        Config: {
            /**
             * 配置内容文本或存储配置内容文件的OSS地址。
             * @example `{\"test\": \"device_config_demo\"}`
             */
            Content: string;
            /**
             * 配置文件格式。参数值有KV（键值对配置）、JSON（JSON格式）、FILE（配置文件）。
             * @example `JSON`
             */
            Format: string;
        };
    }[];
}
