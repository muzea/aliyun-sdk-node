export interface CancelOTATaskByDeviceRequest {
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
     * OTA升级包ID，OTA升级包的唯一标识符。
     * OTA升级包ID是调用[CreateOTAFirmware](~~147311~~)创建OTA升级包时，返回的参数之一。
     * 可以调用[ListOTAFirmware](~~147450~~)，从返回参数中查看。
     * @example `T0F5b5tpFnHQrgfk****030100`
     */
    "FirmwareId": string;
    /**
     * 要取消升级的设备所属产品的ProductKey。
     * @example `a1V4kde****`
     */
    "ProductKey": string;
    /**
     * 升级批次ID。传入此参数则只取消指定批次下的设备升级任务。
     * 批次ID是您调用[CreateOTAVerifyJob](~~147480~~)、[CreateOTAStaticUpgradeJob](~~147496~~)或[CreateOTADynamicUpgradeJob](~~147887~~)创建升级任务后返回的**JobId**。您也可以在物联网平台控制台上固件的**固件详情**页查看。
     * @example `wahVIzGkCMuAUE2gDERM02****`
     */
    "JobId"?: string;
    /**
     * 要取消升级的设备名称。
     * 设备名称不能重复。
     * 最多可传入200个设备名称。
     * @example `device1`
     */
    "DeviceName": string[];
}
