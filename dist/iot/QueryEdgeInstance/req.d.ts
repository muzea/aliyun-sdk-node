export interface QueryEdgeInstanceRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `iot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 返回结果中每页显示的记录数量。最大取值30，最小取值1，默认取值是10。
     * @example `15`
     */
    "PageSize": number;
    /**
     * 从返回结果中的第几页开始显示。最小取值是1。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 边缘实例名称。
     * @example `测试实例_test`
     */
    "Name"?: string;
}
