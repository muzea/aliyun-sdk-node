export interface CreateTicketResponse {
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `A450574A-337F-43E2-BC59-9C6594C994C6`
     */
    RequestId: string;
    /**
     * 返回数据，工单ID。
     * @example `3d26b90a-c5d2-4b09-8219-60cda1******`
     */
    Data: string;
}
