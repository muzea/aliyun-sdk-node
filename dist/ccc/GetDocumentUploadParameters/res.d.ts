export interface GetDocumentUploadParametersResponse {
    /**
     * 数据。
     */
    Data: {
        /**
         * 签名使用的accessKeyId
         * @example `****`
         */
        AccessKeyId: string;
        /**
         * 签名策略
         * @example `Permit`
         */
        Policy: string;
        /**
         * 签名
         * @example `zi31STIMtIfa/UN2l+6lww****`
         */
        Signature: string;
        /**
         * oss文件路径
         * @example `ccc-test/blacklist.xlsx`
         */
        FilePath: string;
        /**
         * oss host
         * @example `https://ccc-v2-online.oss-cn-shanghai.aliyuncs.com`
         */
        Host: string;
        /**
         * 到期时间
         * @example `1647313420`
         */
        ExpireTime: number;
    };
    /**
     * 请求ID
     * @example `9FBA26B0-462B-4D77-B78F-AF35560DBC71`
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
     * 响应信息
     * @example `无`
     */
    Message: string;
    /**
     * 响应参数。
     */
    Params: string[];
}
