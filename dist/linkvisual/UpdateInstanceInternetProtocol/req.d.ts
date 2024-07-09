export interface UpdateInstanceInternetProtocolRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-n6w1y59****`
     */
    "IotInstanceId": string;
    /**
     * IP协议版本：
     * - IPv4（默认）
     * - IPv6
     * > 当IP协议版本设置为IPv6，流媒体相关地址会修改为IPv4/IPv6双栈地址，请确保您的设备和应用端已完成IPv6相关设置，否则会出现播放画面加载失败等异常情况。
     * @example `IPv4`
     */
    "IpVersion": string;
}
