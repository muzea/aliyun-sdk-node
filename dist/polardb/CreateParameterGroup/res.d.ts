export interface CreateParameterGroupResponse {
    /**
     * 请求ID。
     * @example `514D1D87-E243-4A5F-A87D-2785C3******`
     */
    RequestId: string;
    /**
     * 参数模板ID。
     * > 您可以通过[DescribeParameterGroups](~~207178~~)接口查看目标地域的参数模板列表，包括参数模板ID。
     * @example `pcpg-**************`
     */
    ParameterGroupId: string;
}
