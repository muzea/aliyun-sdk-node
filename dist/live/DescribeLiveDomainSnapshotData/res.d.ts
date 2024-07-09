export interface DescribeLiveDomainSnapshotDataResponse {
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693F`
     */
    RequestId: string;
    SnapshotDataInfos: {
        /**
         * 直播截图张数的每日数据统计。
         */
        SnapshotDataInfo: {
            /**
             * 日期，具体到天。
             * @example `20180209`
             */
            Date: string;
            /**
             * 单日截图总张数。
             * @example `110`
             */
            Total: number;
        }[];
    };
}
