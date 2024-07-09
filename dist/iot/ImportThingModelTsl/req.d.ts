export interface ImportThingModelTslRequest {
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
     * 资源组ID。
     * ><notice>目前，物联网平台仅支持实例维度的资源组管理。请求参数**ResourceGroupId**配置已无效，无需再传入。
     * ></notice>
     * @example `rg-acfm4l5tcwd****`
     */
    "ResourceGroupId"?: string;
    /**
     * 产品的ProductKey。
     * 可以在物联网平台控制台产品页查看，或调用[QueryProductList](~~69271~~)查看ProductKey的取值。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 您编辑的物模型（TSL）。JSON格式的字符串。产品的物模型（TSL）包含属性、服务和事件的定义。
     * **TslStr**格式需为标准的物模型数据格式，请参见[物模型格式](~~73727~~)。
     * > 目前该参数为必填参数，只能通过**TslStr**导入物模型。
     * @example `{"schema":"https://iotx-tsl.oss-ap-southeast-1.aliyuncs.com/schema.json","profile":{"productKey":"a14TeW****"},"properties":[]}`
     */
    "TslStr"?: string;
    /**
     * 物模型数据在对象存储（OSS）上的存储地址URI。
     * > 目前该参数暂时无效，请传入**TslStr**导入物模型。
     * @example `https://iotx-pop-dsl.oss-cn-shanghai.aliyuncs.com/thing/a14TeWI****​/model.json?Expires=1581947119...`
     */
    "TslUrl"?: string;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。支持英文大小写字母、数字和下划线（_），不超过30个字符。
     * 需与**FunctionBlockName**结合使用。不传入此参数时，导入默认模块。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
    /**
     * 物模型的自定义模块名称。支持中文、英文字母、日文、数字和下划线（_），长度限制为4～30个字符，一个中文、一个日文算1个字符。
     * 需与**FunctionBlockId**结合使用。不传入此参数时，导入默认模块。
     * @example `电池模块`
     */
    "FunctionBlockName"?: string;
}
