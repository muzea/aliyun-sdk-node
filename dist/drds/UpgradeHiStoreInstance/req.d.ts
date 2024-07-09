export interface UpgradeHiStoreInstanceRequest {
    /**
     * DRDS 实例 ID
     * @example `drdssad23sdfc`
     */
    "DrdsInstanceId": string;
    /**
     * 地域 ID
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * DRDS 列式存储实例 ID
     * @example `hi-sesex2e`
     */
    "HistoreInstanceId": string;
}
