export interface BatchGetEdgeInstanceChannelResponse {
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
     * @example `5B86570E-C1A7-4569-BF7B-F7F09EB35BEB`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 调用成功时返回的数据。
         */
        Channel: {
            /**
             * 驱动通道名称。
             * @example `le_name0`
             */
            ChannelName: string;
            /**
             * 驱动通道ID。
             * @example `BE0BD49EF5EF4D119D09CC1B25******`
             */
            ChannelId: string;
            ConfigList: {
                /**
                 * 配置信息列表。
                 */
                Config: {
                    /**
                     * 配置的关键字。
                     * @example `key1`
                     */
                    Key: string;
                    /**
                     * 配置ID。
                     * @example `5d6016035c1a451daf174b1051******`
                     */
                    ConfigId: string;
                    /**
                     * 配置格式。取值有KV（键值对配置）、JSON（JSON格式）、FILE（配置文件）。
                     * @example `JSON`
                     */
                    Format: string;
                    /**
                     * 配置内容。
                     * @example `{\"protocol\":\"TCP\", \"ip\":\"1.2.3.4\", \"port\":1}`
                     */
                    Content: string;
                }[];
            };
        }[];
    };
}
