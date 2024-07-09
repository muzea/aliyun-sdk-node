export interface GetApplicationRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "Name": string;
}
