export interface UpdateDeviceGroupRequest {
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
     * 分组ID。分组的全局唯一标识符。
     * @example `W16X8Tvdosec****`
     */
    "GroupId": string;
    /**
     * 修改后的分组描述。长度不超过100个字符，一个中文汉字占一个字符。
     * @example `test2`
     */
    "GroupDesc"?: string;
    /**
     * 分组类型。
     * 传入**LINK_PLATFORM_DYNAMIC**时，表示动态分组。不传入时，默认为静态分组。
     * @example `LINK_PLATFORM_DYNAMIC`
     */
    "GroupType"?: string;
}
