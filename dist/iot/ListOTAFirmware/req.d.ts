export interface ListOTAFirmwareRequest {
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
     * OTA升级包所属产品的**ProductKey**。
     * 传入该参数，则查询指定产品下的OTA升级包列表；不传入此参数，则返回当前阿里云账号下的所有OTA升级包列表。
     * @example `a19mzPZ****`
     */
    "ProductKey"?: string;
    /**
     * 指定返回结果中每页显示的固件数量。最大限制为100。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 指定从返回结果中的第几页开始显示。页数从1开始排序。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * OTA升级包版本号。传入该参数，则查询版本号为指定版本号的OTA升级包。
     * @example `4.0.0`
     */
    "DestVersion"?: string;
}
