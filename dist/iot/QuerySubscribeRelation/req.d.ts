export interface QuerySubscribeRelationRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cn-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * 该订阅中的产品的ProductKey。
     * @example `a1fyXVF****`
     */
    "ProductKey": string;
    /**
     * 订阅类型：
     * - **MNS**
     * - **AMQP**
     * @example `AMQP`
     */
    "Type": string;
}
