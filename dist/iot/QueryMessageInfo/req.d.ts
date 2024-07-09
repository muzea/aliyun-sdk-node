export interface QueryMessageInfoRequest {
    /**
     * 实例ID。<props="china"><ph>您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。</ph></props>
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * <props="china">实例的更多信息，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot-cn-0pp1n8t***`
     */
    "IotInstanceId"?: string;
    /**
     * 物联网平台为消息生成的唯一标识ID。
     * 您可登录[物联网平台控制台](http://iot.console.aliyun.com/)，在**监控运维 > 日志服务**页面，获取消息ID信息。
     * @example `323455***`
     */
    "UniMsgId": string;
}
