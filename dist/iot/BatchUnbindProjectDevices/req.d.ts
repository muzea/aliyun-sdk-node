export interface BatchUnbindProjectDevicesRequest {
    /**
     * 实例ID。
     * <props="china">您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。</props>
     * <props="china">
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。</props>
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 项目ID。
     * 1. 您可登录[物联网应用开发控制台](https://studio.iot.aliyun.com/?spm=a2c4g.11186623.2.8.1e7830fagdybMb)，在页面左上角选择对应实例后，在左侧导航栏单击项目管理。
     * 2. 在普通项目列表中，找到目标项目，单击项目卡片，在地址栏中查看。
     * @example `a12******`
     */
    "ProjectId": string;
    /**
     * 需要解除关联的设备列表。
     */
    "Devices": {
        /**
         * 解除项目中关联设备所隶属的产品ProductKey列表。
         * @example `a1BwAGV****`
         */
        ProductKey: string;
        /**
         * 需要解除项目中关联设备的DeviceName列表。
         * @example `Ee2******`
         */
        DeviceName: string;
    }[];
}
