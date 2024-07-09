export interface DeleteShareTaskDeviceRequest {
    /**
     * 分享任务ID。
     * @example `Md3ZiTL888K9llXDy7890***********`
     */
    "ShareTaskId": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该ID值，否则调用会失败。
     * - 若无**实例概览**页面或ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 待删除的设备列表，需传入设备对应的**IotId**，该参数可以通过调用[QueryDevice](~~69905~~)获取。
     * @example `Q7uOhVRdZRRlDnTLv****00100`
     */
    "IotIdList"?: string[];
}
