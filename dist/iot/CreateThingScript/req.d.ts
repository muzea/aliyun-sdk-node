export interface CreateThingScriptRequest {
    /**
     * 脚本内容。不允许为空。
     * 脚本示例的更多信息，请参见[什么是数据解析](~~68702~~)。
     * @example `"function protocolToRawData(jsonObj) {return rawdata; }function rawDataToProtocol(rawData) {return jsonObj; }"`
     */
    "ScriptContent": string;
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
     * 产品**ProductKey**。
     * 可以在物联网平台控制台产品页查看，或调用[QueryProductList](~~69271~~)查看**ProductKey**的取值。
     * @example `a1Q5XoY****`
     */
    "ProductKey": string;
    /**
     * 脚本类型。取值：
     * - JavaScript
     * - Python_27：表示Python 2.7
     * - PHP_72：表示PHP 7.2
     * @example `JavaScript`
     */
    "ScriptType": string;
}
