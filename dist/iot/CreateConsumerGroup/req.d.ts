export interface CreateConsumerGroupRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 消费组名称。支持中文汉字、英文字母、数字和下划线（_），长度为4~30个字符，一个汉字计为两个字符。
     * @example `消费组1`
     */
    "GroupName": string;
}
