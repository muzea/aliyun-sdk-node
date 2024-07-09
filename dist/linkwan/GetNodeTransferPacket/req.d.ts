export interface GetNodeTransferPacketRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 数据包所涉及的DevEUI，为16位HEX。
     * @example `0000000000000001`
     */
    "DevEui": string;
    /**
     * Base64编码后的MACPayload报文，可调用[ListNodeGroupTransferPackets](~~109959~~)接口查询获取。
     * @example `SGVsbG8hIQ==`
     */
    "Base64EncodedMacPayload": string;
    /**
     * 数据包的发送时间，可调用[ListNodeGroupTransferPackets](~~109959~~)接口查询获取。
     * @example `1514736000000`
     */
    "LogMillis": number;
}
