export interface ListNodeGroupTransferPacketsResponse {
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
         * @example `20`
         */
        TotalCount: number;
        /**
         * 列表信息。
         */
        List: {
            /**
             * 数据包传输的 UNIX 时间戳，以毫秒为单位。
             * @example `1514736000000`
             */
            LogMillis: number;
            /**
             * 数据包所经过网关所属用户的阿里云账号 Id。
             * @example `XXX`
             */
            GwOwnerAliyunId: string;
            /**
             * 该报文的处理结果，取值内容参考 ProcessEvent 取值。
             * @example `DEVADDR_ILLEGAL`
             */
            ProcessEvent: string;
            /**
             * Base64 编码后的 MACPayload 报文。
             * @example `XXX`
             */
            Base64EncodedMacPayload: string;
            /**
             * 收发此数据包时所使用的 FPort。
             * @example `99`
             */
            FPort: number;
            /**
             * 收发此数据包的信噪比。
             * @example `-10.5`
             */
            Lsnr: number;
            /**
             * 数据包所经过的网关所采用的频段的频段 Id。
             * @example `101`
             */
            FreqBandPlanGroupId: number;
            /**
             * 此数据包中是否包含业务数据。
             * @example `true`
             */
            HasData: boolean;
            FcntUp: number;
            /**
             * 收发此数据包时的 LoRaWAN Class 模式。
             * @example `C`
             */
            ClassMode: string;
            /**
             * 此数据包的 MACPayload 报文长度。
             * @example `15`
             */
            MacPayloadSize: number;
            /**
             * 消息类型，取值如下表。
             * @example `CONFIRMED_DATA_UP`
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
             * 收发此数据包的节点的 DevEUI。
             * @example `0000000000000001`
             */
            DevEui: string;
            FcntDown: number;
            MacCommandCIDs: string;
            /**
             * 收发此数据包所经过的网关的 GwEUI。
             * @example `0000000000000000`
             */
            GwEui: string;
            /**
             * 收发此数据包的 RSSI。
             * @example `-110`
             */
            Rssi: number;
            /**
             * 此数据包中是否包含 MAC 指令。
             * @example `true`
             */
            HasMacCommand: boolean;
            /**
             * 收发此数据包的频点。
             * @example `470.3`
             */
            Freq: number;
        }[];
    };
}
