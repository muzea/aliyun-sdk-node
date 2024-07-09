export interface GetSmsAuthTokensResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[服务端API返回码](~~85198~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 状态码的描述。
     * @example `请求成功`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `8906582E-6722`
     */
    RequestId: string;
    /**
     * 结构体。
     */
    Data: {
        /**
         * 业务Token。
         * @example `FZSMeRbLCiapIBo65NXNHvGbkGDmhs23XWTZDOtZN0g5n/kqSc2FU27Gc9YhGb6dNn9/L9ZXSYiIB6C6LMLQJjyXjRzt5v6pzZXqnjO4cSuPWYUxJvdc8l8OpucEYe8Mx17HxsHDzj0VC4D5+atcrTpJE6jQ7e2QVNjZIPMwsfxELjQS7c****`
         */
        BizToken: string;
        /**
         * 访问密钥。
         * @example `VboZ4xbZ****`
         */
        StsAccessKeySecret: string;
        /**
         * 访问密钥ID。
         * @example `STS.NSqC****`
         */
        StsAccessKeyId: string;
        /**
         * 过期时间。时间戳表示。
         * @example `1631526326000`
         */
        ExpireTime: number;
        /**
         * 安全令牌。
         * @example `CAISiQJ1q6Ft5B2yfSjIr5DEDP/BurtW9PemMEfBrEpsOr5K17XjuDz2IHtLfXFsBusYt/U2nWpX5v4clrxIToR7SFbFY9pb6ZhazBisebDGv8HtR3TcFEjiSwapEBfe8JL4QYeQFaHwGJqEb1TDiVUAo9/TfimjWFqIKICAjYUdAP0cQgi/a0gtZr4UXHwAzvUXLnzML/2gHwf3i27LdipStxF7lHl05NbUoKTeyGKH3AGqlLVF9tite8f9NpczBvolDYfpht4RX7HazStd5yJN8KpLl6Fe8V/FxIrGXAAJv0rdbbOFq4Q1c18hOLJHAKtfsvXmlPNpsevfmpnsx****`
         */
        StsToken: string;
    };
}
