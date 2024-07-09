export interface QueryPictureSearchAppsRequest {
    /**
     * 返回结果中，每页显示的记录数量。最大取值50，最小取值1，默认取值为20。
     * @example `20`
     */
    "PageSize": number;
    /**
     * 指定从返回结果中的第几页开始显示。最小取值为1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
