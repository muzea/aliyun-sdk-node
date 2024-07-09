export interface UpdatePrivateNetworkWhiteIpsResponse {
    /**
     * 请求ID。
     * @example `6DEBE5EE-0368-4757-8F82-EF9C3972****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        privateNetworkIpWhiteList: string[];
    };
}
