export interface QueryDeviceRequest {
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
     * 指定返回结果中每页显示的记录数量，最大值是50。默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的设备所属产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    "ProductKey": string;
    /**
     * 指定显示返回结果中的第几页的内容。默认值是 1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 下一页标识，首次查询无需传入。后续查询需使用的**NextToken**，要从上一次查询的返回结果中获取。
     * 当**PageSize**×**CurrentPage**值大于10,000时，必须传入**NextToken**。否则，无法返回数据。
     * ><notice>
     * 如果传入**NextToken**值，则**PageSize**×**CurrentPage**值必须小于1,000,000。否则，无法返回数据。
     * ></notice>
     * @example `TGlzdFJlc291cm***`
     */
    "NextToken"?: string;
}
