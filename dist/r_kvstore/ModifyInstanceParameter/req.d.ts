export interface ModifyInstanceParameterRequest {
    /**
     * 参数模板ID。
     * > 您可以通过DescribeParameterGroups接口查看目标地域的参数模板列表，包括参数模板ID。
     * @example `g-idhwofwofewhf****`
     */
    "ParameterGroupId"?: string;
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 参数信息。
     * @example `{"hz": "50"}`
     */
    "Parameters"?: string;
}
