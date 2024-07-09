export interface AddDeviceToSharePromotionRequest {
    /**
     * 促销活动ID。
     * 调用接口**CreateSharePromotionActivity**返回的**Data**值。
     * @example `61******_****_4901_****_47***********`
     */
    "SharePromotionActivityId": string;
    /**
     * 分享任务的分享码。
     * 分享任务的分享码信息，请参见[使用共享设备播报分享语料](~~607661~~)。
     * @example `52******_7**e_4**3_9**e_61**********`
     */
    "ShareTaskCode": string;
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页签，查看当前实例的ID。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无ID值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot-cv3********`
     */
    "IotInstanceId"?: string;
    "DeviceSimpleInfoList": {
        /**
         * 待添加共享设备所属产品的**ProductKey**。
         * @example `a2YwD2****`
         */
        ProductKey: string;
        /**
         * 待添加的共享设备名称。
         * @example `device01`
         */
        DeviceName: string;
    }[];
}
