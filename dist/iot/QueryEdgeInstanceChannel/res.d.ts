export interface QueryEdgeInstanceChannelResponse {
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
     * @example `AA1EF007-0455-43C7-8E03-39D0BA20F4F5`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。true表示调用成功，false表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时返回的数据。
     */
    Data: {
        /**
         * 当前页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 返回结果中每页显示的记录数量。
         * @example `15`
         */
        PageSize: number;
        /**
         * 驱动通道总数量。
         * @example `1`
         */
        Total: number;
        ChannelList: {
            /**
             * 驱动通道信息列表。
             */
            Channel: {
                /**
                 * 创建驱动通道的Unix时间戳。
                 * @example `1584371212000`
                 */
                GmtCreateTimestamp: number;
                /**
                 * 驱动通道名称。
                 * @example `le_name0`
                 */
                ChannelName: string;
                /**
                 * 最后一次更新驱动通道的Unix时间戳。
                 * @example `1584371212000`
                 */
                GmtModifiedTimestamp: number;
                /**
                 * 驱动通道ID。
                 * @example `BE0BD49EF5EF4D119D09CC1B25******`
                 */
                ChannelId: string;
                /**
                 * 创建驱动通道的时间。
                 * @example `2020-03-16 23:06:52`
                 */
                GmtCreate: string;
                /**
                 * 最后一次更新驱动通道的时间。
                 * @example `2020-03-16 23:06:52`
                 */
                GmtModified: string;
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
    };
}
