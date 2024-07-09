export interface QueryEdgeDriverRequest {
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看当前实例的**ID**。若有ID值，必须传入该ID值，否则调用会失败。
     * > 如果公共实例没有ID值，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 返回结果中，每页显示的记录数量。最大取值30，最小取值1，默认取值为10。
     * @example `15`
     */
    "PageSize": number;
    /**
     * 驱动类型：
     * - **0**：表示官方驱动。
     * - **1**：表示自研驱动。
     * @example `1`
     */
    "Type": number;
    /**
     * 驱动名称。若查询驱动信息时，需要匹配驱动名称，则填写该参数。
     * @example `MyledDriver`
     */
    "DriverName"?: string;
    /**
     * 指定从返回结果中的第几页开始显示。最小取值为1。
     * @example `1`
     */
    "CurrentPage": number;
}
