export interface UpdateGatewayOptionResponse {
    /**
     * 请求ID。
     * @example `124D02EB-DBDD-534D-A701-B4A95D3D****`
     */
    RequestId: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回信息。
     * - 当请求成功时，返回成功信息。
     * - 当请求失败时，返回失败原因。
     * @example `请求处理成功`
     */
    Message: string;
    /**
     * 返回值。
     * @example `200`
     */
    Code: number;
    /**
     * 请求结果，取值如下：
     * - `true`：请求成功。
     * - `false`：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     * @example `{'LogConfigDetails': {'LogEnabled': True}, 'TraceDetails': {'Sample': 17, 'TraceEnabled': True}}`
     */
    Data: any;
}
