export interface InvokeThingsServiceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要调用服务的设备所隶属的产品**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    "Qos"?: number;
    /**
     * 服务的标识符。
     * 设备的服务**Identifier**的查看方式：
     * - 登录物联网平台控制台，在设备所属产品的**功能定义**中查看。
     * - 调用接口[QueryThingModel](~~150321~~)，从返回的物模型信息中查看。
     * > 如果是自定义（非默认）模块**testFb**下服务**testService**，则参数值为**testFb:testService**。
     * @example `Set`
     */
    "Identifier": string;
    /**
     * 要启用服务的入参信息，数据格式为JSON String，例如**Args={"param1":1}**。
     * 若此参数为空时，需传入**Args={} **。
     * ><notice>物模型功能定义数据类型为float或double时，对应参数值（即使值为整数）至少携带一位小数位。例如10.0、11.1。
     * ></notice>
     * @example `{"param1":1}`
     */
    "Args": string;
    /**
     * 要调用服务的设备的名称列表。最多支持传入100个设备名称。
     * @example `device1`
     */
    "DeviceName": string[];
}
