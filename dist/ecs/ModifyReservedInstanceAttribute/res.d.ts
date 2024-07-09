export interface ModifyReservedInstanceAttributeResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 返回错误码。
     * @example `200`
     */
    Code: string;
    /**
     * 实例操作返回错误信息。返回值Success为成功，更多请参见下文错误码列表。
     * @example `Success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3****`
     */
    RequestId: string;
}
