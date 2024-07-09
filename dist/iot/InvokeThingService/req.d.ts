export interface InvokeThingServiceRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有**ID**值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要调用服务的设备所属的产品ProductKey。
     * ><notice> 如果传入该参数，需同时传入**DeviceName**。
     * ></notice>
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要调用服务所属设备的DeviceName。
     * ><notice> 如果传入该参数，需同时传入**ProductKey**。
     * ></notice>
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * 服务的标识符。
     * 设备的服务**Identifier**的查看方式：
     * - 登录[物联网平台控制台](https://iot.console.aliyun.com/)，在设备所属产品的**功能定义**中查看。
     * - 调用接口[QueryThingModel](~~150321~~)，从返回的物模型信息中查看。
     * > 如果是自定义（非默认）模块**testFb**下服务**testService**，则参数值为**testFb:testService**。
     * @example `Set`
     */
    "Identifier": string;
    /**
     * 要启用服务的入参信息，数据格式为JSON String，例如**Args={"param1":1}**。
     * 若此参数为空时，需传入 **Args={}** 。
     * ><notice>物模型功能定义数据类型为float或double时，对应参数值（即使值为整数）至少携带一位小数位。例如10.0、11.1。
     * ></notice>
     * @example `{"param1":1}`
     */
    "Args": string;
    /**
     * 要调用服务的设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
     * ><notice> **IotId**作为设备唯一标识符，和**ProductKey**与**DeviceName**组合是一一对应的关系。如果传入该参数，则无需传入**ProductKey**和**DeviceName**。如果您同时传入**IotId**和**ProductKey**与**DeviceName**组合，则以**IotId**为准。
     * ></notice>
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotId"?: string;
    "Qos"?: number;
}
