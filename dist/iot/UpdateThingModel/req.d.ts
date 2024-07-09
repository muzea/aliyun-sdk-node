export interface UpdateThingModelRequest {
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
     * 产品的**ProductKey**。
     * 可以在物联网平台控制台产品页查看，或调用[QueryProductList](~~69271~~)查看ProductKey的取值。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 功能原有的标识符。
     * 您可调用[GetThingModelTsl](~~150319~~)，从返回参数**TslStr**中查看具体功能的**identifier**。
     * @example `Temperature`
     */
    "Identifier"?: string;
    /**
     * 新的功能定义详情。
     * - **Identifier**不为空时，表示更新功能的标识符，最多能包含1个功能的标识符定义信息。
     * - **Identifier**为空时，表示更新一个服务或事件下，输入或输出参数的定义，可包含多个参数的定义信息，最多不超过50个。
     * ThingModelJson的编写指导，请参见[ThingModelJson数据说明](~~150457~~)。
     * @example `{   "properties":[     {       "identifier": "SimCardType",       "extendConfig":"{...}",       "dataSpecs": {         "max": "1",         "dataType": "INT",         "unit": "mmHg",         "min": "0",         "step": "1"       },       "std": false,       "custom": true,       "dataType": "INT",       "rwFlag": "READ_ONLY",       "productKey": "a1Jw4i****",       "required": false,       "customFlag": true,       "name": "sim卡类型＂    }   ] }`
     */
    "ThingModelJson"?: string;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。
     * 此参数和**FunctionBlockName**均不传入时，更新默认模块中功能。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
    /**
     * 物模型的自定义模块名称。支持中文、英文字母、日文、数字和下划线（_），长度限制为4～30个字符，一个中文、一个日文算1个字符。
     * -  此参数和**FunctionBlockId**均不传入时，更新默认模块中功能。
     * -  如果传入此参数，必须与**FunctionBlockId**结合使用，可修改**FunctionBlockId**对应的自定义模块名称。
     * > 不支持修改默认模块名称。
     * @example `电池模块`
     */
    "FunctionBlockName"?: string;
}
