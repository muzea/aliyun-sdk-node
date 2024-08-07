export interface DeleteOTAFirmwareRequest {
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
     * @example `s8SSHiKjpBfrM3BSN0z803****`
     */
    "FirmwareId": string;
}
