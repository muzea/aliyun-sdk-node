export interface LicenseAuthResponse {
    /**
     * 请求ID
     * @example `13E0445E-CA7F-5DD3-9B0F-D4B39E0180F7
    `
     */
    RequestId: string;
    /**
     * 返回结果码
     * @example `0`
     */
    Code: string;
    /**
     * 返回信息。
     * @example `operation success.
    `
     */
    Message: string;
    /**
     * 调用是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回结果
     */
    Data: {
        /**
         * 端渲染sdk对接需要的鉴权token
         * @example `vHOgG+IbVrm0QXTzVB/O4GJJLEAWr67gl7NGWowHjioMKIh2yc9PNu21S7t8mjuVo3Z`
         */
        Token: string;
    };
}
