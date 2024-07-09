export interface SendUnicastCommandRequest {
    /**
     * 物联网平台的实例id，为空表示公共实例。
     * @example `iotx-oxssharez`
     */
    "IotInstanceId"?: string;
    /**
     * 目标节点。
     * @example `0000000000000000`
     */
    "DevEui": string;
    /**
     * 最大重发次数，默认为0。
     * @example `0`
     */
    "MaxRetries"?: number;
    /**
     * 是否清空该节点的堆积指令，并下发该指令。默认为**false**。
     * @example `false`
     */
    "CleanUp"?: boolean;
    /**
     * fPort。
     * @example `0`
     */
    "FPort": number;
    /**
     * 是否是confirmed指令，默认为**false**。
     * @example `false`
     */
    "Confirmed"?: boolean;
    /**
     * 要发送的内容。16进制字符串，最长51个字节（如果换算成16进制字符串，最长为51*2个字符）。
     * @example `xxx`
     */
    "Content": string;
}
