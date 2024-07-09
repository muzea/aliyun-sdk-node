export interface ListUpgradeClientsResponse {
    /**
     * 请求ID。
     * @example `89A1AC0F-4A6C-4F3D-98F9-BEF9A823****`
     */
    RequestId: string;
    /**
     * 当前已发布的最新ehpcutil版本。
     * @example `1.2.22`
     */
    LatestVersion: string;
    /**
     * 集群的ehpcutil升级操作记录。
     */
    ClientRecords: {
        /**
         * 升级ehpcutil版本的用户ID。
         * @example `129******84`
         */
        SubUid: string;
        /**
         * 升级前的ehpcutil版本。
         * @example `1.2.16`
         */
        OldVersion: string;
        /**
         * 升级后的ehpcutil版本。
         * @example `1.2.21`
         */
        NewVersion: string;
        /**
         * 操作时间。
         * @example `2022-08-26T06:26:57.000Z`
         */
        UpdateTime: string;
    }[];
    /**
     * 集群当前的ehpcutil版本。
     * @example `1.2.21`
     */
    CurrentVersion: string;
}
