export interface SaveDocumentResponse {
    /**
     * 数据。
     * @example `0101234****`
     */
    Data: string;
    /**
     * 请求ID
     * @example `01B12EE4-6AF2-4730-8B78-EC15F4E5C025`
     */
    RequestId: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息
     * @example `无`
     */
    Message: string;
    /**
     * 响应参数。
     */
    Params: string[];
}
