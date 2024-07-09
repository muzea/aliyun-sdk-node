export interface ListOTAJobByFirmwareRequest {
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
     * 升级包ID，升级包的唯一标识符。
     * 升级包ID是调用[CreateOTAFirmware](~~147311~~)创建升级包时，返回的参数之一。
     * 可以调用[ListOTAFirmware](~~147450~~)，从返回参数中查看。
     * @example `FJFx8JzpnhpIsKftRjjm03****`
     */
    "FirmwareId": string;
    /**
     * 指定返回结果中，每页显示的升级批次数量。最大值200。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * @example `1`
     */
    "CurrentPage": number;
}
