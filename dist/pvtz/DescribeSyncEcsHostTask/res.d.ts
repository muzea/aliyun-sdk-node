export interface DescribeSyncEcsHostTaskResponse {
    /**
     * 状态。
     * - ON：开启
     * - OFF：关闭
     * @example `ON`
     */
    Status: string;
    /**
     * Zone的ID。
     * @example `pvtz-test-id-2989149d628c56f00e`
     */
    ZoneId: string;
    /**
     * 唯一请求识别码。
     * @example `75446CC1-FC9A-4595-8D96-089D73D7A63D`
     */
    RequestId: string;
    EcsRegions: {
        /**
         * 同步的地域信息。
         */
        EcsRegion: {
            /**
             * 地域归属的用户ID，用于跨账号同步场景。
             * @example `1234567890`
             */
            UserId: number;
            RegionIds: {
                /**
                 * 地域ID。
                 */
                RegionId: string[];
            };
        }[];
    };
    Regions: {
        /**
         * 当前账号同步的地域信息。
         */
        RegionId: string[];
    };
    /**
     * 获取主机名同步任务详情是否成功。
     * - True
     * - False
     * @example `True`
     */
    Success: boolean;
}
