export interface QueryTopicReverseRouteTableRequest {
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
     * 设备所在地域（与控制台上的地域对应），如cn-shanghai。
     * > 目前此参数已包含在公共请求参数中，不再作为API特有参数传入。
     * @example `cn-shanghai`
     */
    "RegionId"?: string;
    /**
     * 要查询的目标Topic，即接收消息的Topic。
     * @example `/x7aWKW9***​/testDataToDataHub/user/update`
     */
    "Topic": string;
}
