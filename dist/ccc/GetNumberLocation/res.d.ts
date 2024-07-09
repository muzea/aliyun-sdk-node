export interface GetNumberLocationResponse {
    /**
     * 响应码。
     * @example `OK`
     */
    Code: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 响应信息。
     * @example `无`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `584AA2E3-9AC4-561B-BC8D-C74BA11B1387`
     */
    RequestId: string;
    /**
     * 数据。
     */
    Data: {
        /**
         * 号码。
         * @example `1312121****`
         */
        Number: string;
        /**
         * 号码归属地市。
         * @example `北京`
         */
        City: string;
        /**
         * 号码归属地省。
         * @example `北京`
         */
        Province: string;
    };
}
