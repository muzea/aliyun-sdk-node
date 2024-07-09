export interface UpdateOTAModuleRequest {
    /**
     * 新的模块别名。支持中文、英文字母、数字、英文句号（.）、短划线（-）和下划线（_），长度限制为1~64个字符。
     * @example `条码扫描仪2`
     */
    "AliasName"?: string;
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
     * OTA模块名称。
     * @example `barcodeScanner`
     */
    "ModuleName": string;
    /**
     * 新的模块描述信息，支持最多100个字符。
     * @example `条码扫描仪的固件模块`
     */
    "Desc"?: string;
    /**
     * OTA模块所属产品的**ProductKey**。
     * @example `a1Le6d0****`
     */
    "ProductKey": string;
}
