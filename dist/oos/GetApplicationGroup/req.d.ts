export interface GetApplicationGroupRequest {
    /**
     * 地域ID，目前仅支持cn-hangzhou。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 应用分组名称。
     * @example `MyApplicationGroup`
     */
    "Name": string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "ApplicationName": string;
}
