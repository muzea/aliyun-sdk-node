export interface ListNodeTransferPacketsResponse {
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID，阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097	`
     */
    RequestId: string;
    /**
     * 返回的结果。
     */
    Data: {
        /**
         * 满足过滤条件的数据包总数。
         * @example `10`
         */
        TotalCount: number;
        /**
         * 满足过滤条件的数据包列表。
         */
        List: {
            /**
             * 数据包传输的UNIX时间戳，单位为毫秒。
             * @example `1514736000000`
             */
            LogMillis: number;
            /**
             * 收发此数据包的数据速率。
             * @example `SF12BW125`
             */
            Datr: string;
            /**
             * 收发此数据包的信噪比。
             * @example `-10.5`
             */
            Snr: number;
            /**
             * 收发此数据包的节点的DevEUI。
             * @example `0000000000000001`
             */
            DevEui: string;
            /**
             * 收发此数据包所经过的网关的GwEUI。
             * @example `0000000000000000`
             */
            GwEui: string;
            /**
             * 收发此数据包时的LoRaWAN Class模式。
             * @example `C`
             */
            ClassMode: string;
            /**
             * 收发此数据包的RSSI。
             * @example `-110`
             */
            Rssi: number;
            /**
             * 收发此数据包的频点。
             * @example `470.3`
             */
            Freq: number;
        }[];
    };
}
