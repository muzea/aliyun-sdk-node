export interface BatchGetEdgeDriverRequest {
    /**
     * 实例ID。公共实例不传此参数，企业版实例需传入。
     * @example `ot_instc_pu****_c*-v64********`
     */
    "IotInstanceId"?: string;
    /**
     * 驱动ID列表。最多可填写30个驱动ID，即一次最多支持查询30个驱动的信息。格式请参见本文下方请求示例。
     * @example `fec565038d7544978d9aed5c1a******`
     */
    "DriverIds": string[];
}
