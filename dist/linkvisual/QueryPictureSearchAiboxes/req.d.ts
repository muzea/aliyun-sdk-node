export interface QueryPictureSearchAiboxesRequest {
    /**
     * 以图搜图应用实例ID。可调用[QueryPictureSearchApps](~~206608~~)接口查询。
     * @example `5a502d3fbab8410e8fd4be9037c7****`
     */
    "AppInstanceId": string;
    /**
     * 返回结果中，每页显示的记录数量。最大取值30，最小取值1，默认取值为10。
     * @example `10`
     */
    "PageSize": number;
    /**
     * 指定从返回结果中的第几页开始显示。最小取值为1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 实例ID。
     * 您可在物联网平台控制台的**实例概览**页面，查看您的实例ID。
     * > 如果公共实例没有ID，请参见[如何获取实例ID](~~267533~~)。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
}
