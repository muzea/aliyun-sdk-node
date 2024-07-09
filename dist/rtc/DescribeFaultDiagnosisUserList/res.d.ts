export interface DescribeFaultDiagnosisUserListResponse {
    /**
     * 异常用户明细列表。
     */
    UserList: {
        /**
         * 频道ID。
         * @example `904`
         */
        ChannelId: string;
        /**
         * 用户ID。
         * @example `testuserid`
         */
        UserId: string;
        /**
         * 用户首次进入频道时间，使用UNIX时间戳表示，单位：秒。
         * @example `1614936817`
         */
        CreatedTs: number;
        /**
         * 用户最后一次离开频道时间，使用UNIX时间戳表示，单位：秒。
         * @example `1614936817`
         */
        DestroyedTs: number;
        /**
         * 频道的创建时间戳，使用UNIX时间戳表示，单位：秒。
         * @example `1614936817`
         */
        ChannelCreatedTs: number;
        /**
         * 异常列表。
         */
        FaultList: {
            /**
             * 异常类型。
             * @example `JOIN_SLOW`
             */
            FaultType: string;
        }[];
    }[];
    /**
     * 页码。
     * @example `1`
     */
    PageNo: number;
    /**
     * 每页数量。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总数量。
     * @example `1`
     */
    TotalCnt: number;
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
