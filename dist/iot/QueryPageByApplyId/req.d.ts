export interface QueryPageByApplyIdRequest {
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
     * 指定返回结果中每页显示的记录数量。数量限制：每页最多可显示50条。默认值是10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 要查询的申请批次ID。申请批次ID可在[BatchRegisterDeviceWithApplyId](~~69514~~)和[BatchRegisterDevice](~~69473~~)接口返回结果中查看。
     * @example `1295006`
     */
    "ApplyId": number;
    /**
     * 指定从返回结果中的第几页开始显示。默认值是1。
     * @example `1`
     */
    "CurrentPage"?: number;
}
