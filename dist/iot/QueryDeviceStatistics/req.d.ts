export interface QueryDeviceStatisticsRequest {
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
     * 要查询设备所属的产品ProductKey。
     * - 传入此参数，返回该产品下的设备统计数据。如果同时传入**GroupId**，返回指定分组下该产品的设备统计数据。
     * - 不传入此参数和**GroupId**，则返回当前账号下所有设备统计数据。
     * @example `a1BwAGV****`
     */
    "ProductKey"?: string;
    /**
     * 要查询设备所属的分组ID。
     * - 传入此参数，返回该分组下的设备统计数据。如果同时传入**ProductKey**，返回该分组下指定产品的设备统计数据。
     * - 不传入此参数和**ProductKey**，返回当前账号下所有设备统计数据。
     * @example `W16X8Tvdosec****`
     */
    "GroupId"?: string;
}
