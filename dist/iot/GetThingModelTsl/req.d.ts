export interface GetThingModelTslRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无<props="intl"><ph>**实例概览**页面或</ph></props>ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 产品的ProductKey。
     * 可以在物联网平台控制台产品页查看，或调用[QueryProductList](~~69271~~)查看ProductKey的取值。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要查询的物模型版本号。
     * 不传入此参数，则将返回未发布上线的草稿版物模型TSL。
     * @example `v1.0.0`
     */
    "ModelVersion"?: string;
    /**
     * 是否获取精简版物模型信息。
     * - **true**：获取精简版物模型TSL。
     *     精简版物模型TSL中仅包含属性、服务、事件及入参和出参的标识符（**identifier**）和数据类型（**dataType**），可供设备端开发人员参考。
     * - **false**：获取完整的物模型TSL。
     *     完整物模型TSL中包含属性、服务和事件定义的所有参数和取值，可供云端应用开发人员参考。
     * 不传入此参数，则默认为false，获取完整的物模型信息。
     * @example `true`
     */
    "Simple"?: boolean;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。
     * 不传入此参数时，查询默认模块数据。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
}
