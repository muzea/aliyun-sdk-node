export interface CreateLoRaNodesTaskRequest {
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
     * 设备所隶属产品的ProductKey。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * LoRaWAN设备列表。
     */
    "DeviceInfo": {
        /**
         * LoRaWAN设备的DevEUI，其全球唯一标识。
         * @example `d896e0efff00****`
         */
        DevEui: string;
        /**
         * LoRaWAN设备的PIN Code，用于校验DevEUI的合法性。
         * @example `123***`
         */
        PinCode: string;
    }[];
}
