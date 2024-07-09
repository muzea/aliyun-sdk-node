export interface GetCnameTokenRequest {
    /**
     * Bucket名称。
     * @example `examplebucket
    `
     */
    "bucket": string;
    /**
     * 绑定的Cname名称。
     * @example `example.com`
     */
    "cname": string;
}
