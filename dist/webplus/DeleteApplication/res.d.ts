export interface DeleteApplicationResponse {
    /**
     * 响应消息，若成功，则返回success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `ED18C0F9-D542-4EE0-A3EE-BD71A6A*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功，则返回OK
     * @example `OK`
     */
    Code: string;
}
