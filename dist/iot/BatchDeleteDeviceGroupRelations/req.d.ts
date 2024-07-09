export interface BatchDeleteDeviceGroupRelationsRequest {
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
     * 分组ID，分组的全局唯一标识符。
     * @example `W16X8Tvdosec****`
     */
    "GroupId": string;
    /**
     * 要从分组中删除的设备列表。
     */
    "Device"?: {
        /**
         * 要从分组中删除的设备所属产品的ProductKey，最多可传入200个。
         * @example `a1kORrK****`
         */
        ProductKey: string;
        /**
         * 要从分组中删除的设备名称，最多可传入200个。
         * @example `ZHuPo6sZzv7pOzYh****`
         */
        DeviceName: string;
    }[];
}
