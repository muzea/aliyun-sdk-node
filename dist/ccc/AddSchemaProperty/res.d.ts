export interface AddSchemaPropertyResponse {
    /**
     * 请求ID
     * @example `BF268B34-09C2-43FD-BAC4-5D31EA633111`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 响应参数。
     */
    Params: string[];
}
