export interface RegisterDeviceRequest {
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
     * 待注册设备所隶属的产品的ProductKey。ProductKey是物联网平台为新建产品颁发的产品Key，作为其全局唯一标识符。
     * 您可以在物联网平台控制台查看或调用[QueryProductList](~~69271~~)查看当前账号下所有产品的信息。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 为待注册的设备命名。设备名称长度为4~32个字符，可以包含英文字母、数字和特殊字符：短划线（-）、下划线（_）、at（@）、半角句号（.）、半角冒号（:）。
     * DeviceName通常与ProductKey组合使用，用作设备标识。
     * > 如果不传入该参数，则由系统随机生成设备名称。
     * @example `light`
     */
    "DeviceName"?: string;
    /**
     * LoRaWAN设备的DevEUI。
     * 创建LoRaWAN设备时，该参数必传。
     * @example `e8SDdgeIlk3nED****`
     */
    "DevEui"?: string;
    /**
     * 为待注册的设备设置备注名称。备注名称长度为4~64个字符，可包含中文汉字、英文字母、数字和下划线（_）。一个中文汉字算2个字符。
     * > 如果不传入该参数，系统不会为设备生成备注名称。
     * @example `园区灯`
     */
    "Nickname"?: string;
    /**
     * LoRaWAN设备的PIN Code，用于校验DevEUI的合法性。
     * 创建LoRaWAN设备时，**LoraNodeType**为**ALIYUNDEFINED**，该参数必传。
     * @example `DIe80dfeg*****`
     */
    "PinCode"?: string;
    /**
     * LoRaWAN设备的入网凭证JoinEui。
     * 创建LoRaWAN设备时，**LoraNodeType**为**USERDEFINED**，该参数必传。
     * @example `Ede4tde8erth****`
     */
    "JoinEui"?: string;
    /**
     * LoRaWAN设备的AppKey。
     * 创建LoRaWAN设备时，**LoraNodeType**为**USERDEFINED**，该参数必传。
     * @example `674f***`
     */
    "AppKey"?: string;
    /**
     * LoRaWAN设备类型。可取值：
     * - **ALIYUNDEFINED**：阿里云颁发类型，需同时传入**DevEui**和**PinCode**。
     * - **USERDEFINED**：用户自定义类型，需同时传入**DevEui**、**JoinEui**和**AppKey**。
     * @example `ALIYUNDEFINED`
     */
    "LoraNodeType"?: string;
}
