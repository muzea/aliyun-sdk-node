export interface UpdatePublicWhiteIpsResponse {
    /**
     * 请求ID。
     * @example `C82758DD-282F-4D48-934F-92170A33****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Result: {
        publicIpWhitelist: string[];
    };
}
