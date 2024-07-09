export interface SetDevicesPropertyRequest {
    /**
     * 实例ID。您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。
     * ><notice>
     * - 若有ID值，必须传入该**ID**值，否则调用会失败。
     * - 若无**实例概览**页面或**ID**值，则无需传入。
     * ></notice>
     * 实例的更多信息，请参见[实例概述](~~356505~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 要设置属性值的设备所属的产品**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    "Qos"?: number;
    /**
     * 要设置的属性信息，数据格式为JSON。
     * 每个属性信息由**标识符与属性值（key:value）**构成，多个属性用英文逗号隔开。
     * 例如，设置智能灯的两个属性：
     * - 标识符为**Switch**的开关属性，数据类型为**Bool**，设置值为**1**（开）。
     * - 标识符为**Color**的灯颜色属性，数据类型为**String**，设置值为**blue**。
     * 那么要设置的属性信息，JSON格式如下：
     * `Items={"Switch":1,"Color":"blue"}`
     * > 如果设置自定义模块testFb（非默认模块）的属性，则格式为：`Items={"testFb:Switch":1,"testFb:Color":"blue"}`
     * @example `{"Switch":1,"Color":"blue"}`
     */
    "Items": string;
    /**
     * 要设置属性值的设备名称列表。设备名称的个数范围为1~100个。
     * @example `light`
     */
    "DeviceName": string[];
}
