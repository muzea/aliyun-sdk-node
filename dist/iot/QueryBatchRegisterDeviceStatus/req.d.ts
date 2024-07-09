export interface QueryBatchRegisterDeviceStatusRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要查询的设备所属的产品**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 要查询的申请批次ID。
     * 申请批次ID在成功调用[BatchCheckDeviceNames](~~69482~~)或[BatchRegisterDevice](~~69473~~)接口的返回结果中。
     * @example `1295006`
     */
    "ApplyId": number;
}
