export interface GetNodeTransferPacketResponse {
    /**
     * 是否调用成功。返回值：
     * - **true**：调用成功。
     * - ** false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `89EF6CAA-958F-F32C-BE45-FE003C6DE097`
     */
    RequestId: string;
    /**
     * 调用成功时返回的数据包信息列表。
     */
    Data: {
        /**
         * 数据包所经过网关所属用户的阿里云账号。
         * @example `XXX`
         */
        GwOwnerAliyunId: string;
        /**
         * 数据包传输的UNIX时间戳，以毫秒为单位。
         * @example `1514736000000`
         */
        LogMillis: number;
        /**
         * 该报文的处理结果。返回值：
         * - **SUCCESS**：成功。
         * - **DEVADDR_ILLEGAL**：**DevAddr**不合法。
         * - **MIC_FAIL**：MIC校验失败。
         * - **DEVEUI_ILLEGAL**：**DevEUI**不合法。
         * - **JOINEUI_ILLEGAL**：**JoinEUI**不合法。
         * - **STATUS_INVALID**：节点状态不合法。
         * - **REDUPLICATE**：重复包。
         * - **ISOLATED**：网间隔离。
         * - **APPKEY_ILLEGAL**：**AppKey**不合法。
         * - **UPDATE_RUNTIME_CFG_FAIL**：更新运行时配置失败。
         * - **DELAY_PROCESS**：延迟处理。
         * - **GWEUI_ILLEGAL**：**GwEUI**不合法。
         * - **GW_STATUS_INVALID**：网关状态不合法。
         * - **GW_FREQ_NOT_MATCH**：网关频点不匹配。
         * - **其它**：未知错误。
         * @example `SUCCESS`
         */
        ProcessEvent: string;
        /**
         * Base64编码后的MACPayload报文。
         * @example `SGVsbG8hIQ==`
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
         * 数据包所经过的网关所采用的频段ID。
         * @example `101`
         */
        FreqBandPlanGroupId: number;
        /**
         * 此数据包中是否包含业务数据。返回值：
         * - **true**：包含。
         * - **false**：不包含。
         * @example `true`
         */
        HasData: boolean;
        /**
         * 收发此数据包时的LoRaWAN Class模式。
         * @example `C`
         */
        ClassMode: string;
        /**
         * 此数据包的MACPayload报文长度。
         * @example `15`
         */
        MacPayloadSize: number;
        /**
         * 消息类型。返回值：
         * - **JOIN_REQUEST**：Join-request消息。
         * - **JOIN_ACCEPT**：Join-accept消息。
         * - **UNCONFIRMED_UP**：Unconfirmed上行消息。
         * - **UNCONFIRMED_DOWN**：Unconfirmed下行消息。
         * - **CONFIRMED_UP**：Confirmed上行消息。
         * - **CONFIRMED_DOWN**：Confirmed下行消息。
         * - **REJOIN_REQUEST**：Rejoin-request消息。
         * - **PROPRIETARY**：Proprietary消息（私有消息）。
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
         * 此数据包中是否包含MAC指令。返回值：
         * - **true**：包含。
         * - **false**：不包含。
         * @example `true`
         */
        HasMacCommand: boolean;
        /**
         * 收发此数据包的频点。
         * @example `470.3`
         */
        Freq: number;
        MacCommandCIDs: any[];
    };
}
