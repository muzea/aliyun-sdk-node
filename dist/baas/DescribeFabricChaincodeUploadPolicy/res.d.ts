export interface DescribeFabricChaincodeUploadPolicyResponse {
    /**
     * 请求ID
     * @example `1890FA4F-067A-4CE9-AC9B-2BD2E58FB5D3`
     */
    RequestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误码
     * @example `200`
     */
    ErrorCode: number;
    /**
     * 结果
     */
    Result: {
        /**
         * OSS签名
         * @example `signature`
         */
        Signature: string;
        /**
         * OSS域名
         * @example `https://chaincode.oss-cn-beijing.aliyuncs.com`
         */
        Host: string;
        /**
         * OSS安全策略
         * @example `eyJleHBpcmF0aW9uIjoiMjAxOC0wNy0zMVQwODoyNjozMC40NzdaIiwiY29uZGl`
         */
        Policy: string;
        /**
         * 上传目录
         * @example `test3/4bd1de21-2fff-4405-a8e9-f864c4bee24f`
         */
        Dir: string;
        /**
         * 访问OSS的ID
         * @example `accessId`
         */
        AccessId: string;
        /**
         * 过期时间
         * @example `1533025590`
         */
        Expire: number;
    };
}
