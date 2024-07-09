export interface UpdateApplicationGroupRequest {
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
     * 应用分组的新名称。
     * @example `UpdateMyApplicationGroup`
     */
    "NewName"?: string;
    /**
     * 应用名称。
     * @example `MyApplication`
     */
    "ApplicationName": string;
}
