export interface ModifyOTAFirmwareRequest {
    /**
     * OTA升级包所属产品的**ProductKey**。
     * @example `a1uctKe****`
     */
    "ProductKey": string;
    /**
     * OTA升级包ID，OTA升级包的唯一标识符。
     * OTA升级包ID是调用接口[CreateOTAFirmware](~~147311~~)创建OTA升级包时，返回的参数之一。
     * 您也可以调用接口[ListOTAFirmware](~~147450~~)，从返回参数中查看。
     * @example `s8SSHiKjpBfrM3BSN0z803****`
     */
    "FirmwareId": string;
    /**
     * OTA升级包描述。长度不可超过100个字符。一个中文汉字算一个字符。
     * @example `OTA function updated`
     */
    "FirmwareDesc"?: string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-0pp1n8t****`
     */
    "IotInstanceId"?: string;
    /**
     * OTA升级包名称，需在阿里云账号下唯一。支持中文、英文字母、日文、数字、短划线（-）、下划线（_）和半角圆括号（()），必须以中文、英文、日文或数字开头，长度限制为1~40个字符。
     * @example `Firmwaretest`
     */
    "FirmwareName"?: string;
    /**
     * 推送给设备的自定义信息。不限制文本内容格式，长度不超过4096个字符。
     * @example `{"ota_notice":"升级底层摄像头驱动，解决视频图像模糊的问题。"}`
     */
    "FirmwareUdi"?: string;
}
