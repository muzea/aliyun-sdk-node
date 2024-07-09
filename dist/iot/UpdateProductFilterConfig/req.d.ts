export interface UpdateProductFilterConfigRequest {
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
     * 产品的ProductKey。ProductKey是物联网平台为新建产品颁发的产品Key，作为其全局唯一标识符。
     * 您可以在物联网平台控制台查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 是否根据属性上报时间进行消息去重。可选值：
     * - **true**：对设备上报的时间戳相同的属性消息进行去重。
     * - **false**：不根据时间戳进行消息去重。
     * @example `false`
     */
    "PropertyTimestampFilter": boolean;
    /**
     * 是否根据属性值进行消息去重。可选值：
     * - **true**：对设备上报相同属性值的消息进行去重。
     * - **false**：不根据属性值进行消息去重。
     * @example `true`
     */
    "PropertyValueFilter": boolean;
}
