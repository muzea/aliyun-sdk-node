export interface GetUploadCredentialsResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 访问密钥ID。
         * @example `STS.NUCe19W1FKaHAYAhe********`
         */
        AccessKeyId: string;
        /**
         * 访问密钥secret值。
         * @example `8LQGp59mY23pcXeTdcvSA1cUQZBeD92sFrXi********`
         */
        AccessKeySecret: string;
        /**
         * 安全token。
         * @example `CAISzQN1q6Ft5B2yfSjIr5b2LouNuu5n/KOjQ3/wjGUHYdlagYGdmzz2IH1Le3NrBO8esfgymGFU6v8dlo1dYLQeHhadQI5cs80HtFqLSNaE65LswPlZ2M2ISETPJzfV9pCK`
         */
        SecurityToken: string;
        /**
         * 权限过期时间。
         * @example `2023-05-18T12:27:59Z`
         */
        ExpireDate: string;
        /**
         * 地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 存储空间名称。
         * @example `service-info-private`
         */
        BucketName: string;
        /**
         * 具体的Key。
         * @example `221514575922756034/cn-hangzhou/d57c62fbd508xxxxxxxx.json`
         */
        Key: string;
    };
    /**
     * 接口调用结果标识，true表示成功，false表示失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用返回码。
     * @example `200`
     */
    Code: string;
    /**
     * 请求返回的信息。
     * @example `Success.`
     */
    Message: string;
    /**
     * HTTP状态码。
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID。
     * @example `FCC3321E-D518-1BC4-861E-588E9D4DAFB7`
     */
    RequestId: string;
}
