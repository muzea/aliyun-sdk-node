export interface UpdateSyncEcsHostTaskRequest {
    /**
     * 语言。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * Zone的ID。
     * @example `test79afafec***********1d28f7889c`
     */
    "ZoneId": string;
    /**
     * 状态。
     * - ON：开启
     * - OFF：关闭
     * @example `ON`
     */
    "Status": string;
    /**
     * 待同步的地域信息列表。
     */
    "Region": {
        /**
         * 地域归属的用户ID，用于跨账号同步场景。
         * @example `1234567890`
         */
        UserId: number;
        /**
         * 地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
    }[];
}
