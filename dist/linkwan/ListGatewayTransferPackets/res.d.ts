export interface ListGatewayTransferPacketsResponse {
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
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
         * 满足过滤条件的数据包信息列表。
         */
        List: {
            /**
             * 数据包传输的UNIX时间戳，以毫秒为单位。
             * @example `1514736000000`
             */
            LogMillis: string;
            /**
             * 该报文的处理结果。
             * @example `SUCCESS`
             */
            ProcessEvent: string;
            /**
             * Base64编码后的MACPayload报文。
             * @example `xxx`
             */
            Base64EncodedMacPayload: string;
            /**
             * 收发此数据包时所使用的FPort。
             * @example `99`
             */
            FPort: number;
            /**
             * 收发此数据包的信噪比。
             * @example `-10.5`
             */
            Lsnr: number;
            /**
             * 此数据包中是否包含业务数据。
             * @example `true`
             */
            HasData: boolean;
            /**
             * 收发此数据包时的通信模式。
             * @example `C`
             */
            ClassMode: string;
            /**
             * 此数据包的MACPayload报文长度。
             * @example `15`
             */
            MacPayloadSize: number;
            /**
             * 消息类型。
             * @example `JOIN_REQUEST`
             */
            MessageType: string;
            /**
             * 收发此数据包的数据速率。
             * @example `SF12BW125`
             */
            Datr: string;
            /**
             * 收发此数据包的节点的网络地址。
             * @example `00000000`
             */
            DevAddr: string;
            /**
             * 收发此数据包的节点的DevEUI。
             * @example `0000000000000001`
             */
            DevEui: string;
            /**
             * 节点拥有者的阿里云账号ID。
             * @example `23546`
             */
            NodeOwnerAliyunId: string;
            /**
             * 收发此数据包所经过的网关的GwEUI。
             * @example `0000000000000000`
             */
            GwEui: string;
            /**
             * 收发此数据包的RSSI。
             * @example `-110`
             */
            Rssi: number;
            /**
             * 此数据包中是否包含MAC指令。
             * @example `true`
             */
            HasMacCommand: boolean;
            /**
             * 收发此数据包的频点。
             * @example `470.3`
             */
            Freq: string;
            MacCommandCIDs: any[];
        }[];
    };
}
