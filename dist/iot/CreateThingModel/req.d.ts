export interface CreateThingModelRequest {
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
     * 产品的**ProductKey**，物联网平台为产品颁发的全局唯一标识符。
     * 您可以在物联网平台控制台或调用[QueryProductList](~~69271~~)接口，查看当前账号下所有产品的信息。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 新增的功能定义详情。最多能包含10个功能的定义信息。
     * 在**ThingModelJson**每个property结构中，可以使用**extendConfig**来描述扩展物模型的数据。更多信息，请参见[ThingModelJson数据说明](~~150457~~)。
     * ><notice>此处参数**ThingModelJson**的值不可传入完整的物模型TSL数据，只需传入JSON格式的物模型**properties**、**services**和**events**字段数据。
     * ></notice>
     * 以下示例值为包含多种数据类型的属性数据，例如**STRUCT**、**ARRAY**。
     * ```
     * {
     *   "properties": [
     *     {
     *       "custom": true,
     *       "dataSpecsList": [
     *         {
     *           "childDataType": "TEXT",
     *           "childName": "设备SIM卡的CCID",
     *           "dataSpecs": {
     *             "custom": true,
     *             "dataType": "TEXT",
     *             "length": 20
     *           },
     *           "dataType": "STRUCT",
     *           "identifier": "CCID",
     *           "name": "设备SIM卡的CCID"
     *         },
     *         {
     *           "childDataType": "INT",
     *           "childName": "电池电量",
     *           "dataSpecs": {
     *             "custom": true,
     *             "dataType": "INT",
     *             "max": "60000",
     *             "min": "0",
     *             "step": "1"
     *           },
     *           "dataType": "STRUCT",
     *           "identifier": "battery",
     *           "name": "电池电量"
     *         },
     *         {
     *           "childDataType": "TEXT",
     *           "childName": "其他信息",
     *           "dataSpecs": {
     *             "custom": true,
     *             "dataType": "TEXT",
     *             "length": 1024
     *           },
     *           "dataType": "STRUCT",
     *           "identifier": "other_info",
     *           "name": "其他信息"
     *         }
     *       ],
     *       "dataType": "STRUCT",
     *       "identifier": "DEV_INFO",
     *       "name": "设备信息",
     *       "productKey": "a1T***",
     *       "propertyId": 18786548,
     *       "required": false,
     *       "rwFlag": "READ_ONLY"
     *     },
     *     {
     *       "custom": true,
     *       "dataSpecs": {
     *         "childDataType": "INT",
     *         "custom": true,
     *         "dataType": "ARRAY",
     *         "size": 1,
     *         "dataSpecs": {
     *           "custom": true,
     *           "dataType": "INT",
     *           "max": "65535",
     *           "min": "0",
     *           "step": "1",
     *           "unit": "ppm",
     *           "unitName": "百万分率"
     *         }
     *       },
     *       "dataType": "ARRAY",
     *       "identifier": "airRH_SR",
     *       "name": "除湿机湿度",
     *       "productKey": "a1T***",
     *       "propertyId": 18786551,
     *       "required": false,
     *       "rwFlag": "READ_ONLY"
     *     }
     *   ],
     *   "services": [...],
     *   "events": [...]
     * }
     * ```
     * @example `{   "properties":[     {       "identifier": "SimCardType",       "extendConfig":"{...}",       "dataSpecs": {         "max": "1",         "dataType": "INT",         "unit": "mmHg",         "min": "0",         "step": "1"       },       "std": false,       "custom": true,       "dataType": "INT",       "rwFlag": "READ_ONLY",       "productKey": "a1bPo9p****",       "required": false,       "customFlag": true,       "name": "sim卡类型"     }   ]，   "services":[...],   "events":[...] }`
     */
    "ThingModelJson"?: string;
    /**
     * 物模型自定义模块标识符，在产品中具有唯一性。支持英文大小写字母、数字和下划线（_），不超过30个字符。
     * 需与**FunctionBlockName**结合使用。不传入此参数时，新增功能导入默认模块。
     * @example `BatteryModule`
     */
    "FunctionBlockId"?: string;
    /**
     * 物模型的自定义模块名称。支持中文、英文字母、日文、数字和下划线（_），长度限制为4～30个字符，一个中文、一个日文算1个字符。
     * 需与**FunctionBlockId**结合使用。不传入此参数时，新增功能导入默认模块。
     * @example `电池模块`
     */
    "FunctionBlockName"?: string;
}
