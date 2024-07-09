export interface GetMediaResourceIdResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 请求ID。
     * @example `F07CF237-F6E3-5F77-B91B-F9B7C5DE84AB`
     */
    RequestId: string;
    /**
     * 调用接口是否成功。取值：
     * - **true**
     * - **false**
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 资源ID。
         * @example `0`
         */
        ResourceId: number;
        /**
         * 资源下载地址。
         * @example `http://test-example.com/download.jpg`
         */
        ResUrlDownload: string;
    };
}
