export interface DescribeLiveDomainRecordDataResponse {
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693F`
     */
    RequestId: string;
    RecordDataInfos: {
        /**
         * 直播录制时长的每日数据统计。
         */
        RecordDataInfo: {
            /**
             * 日期，具体到天。
             * @example `20180202`
             */
            Date: string;
            /**
             * 单日录制总时长。单位：秒。
             * @example `4710`
             */
            Total: number;
            /**
             * 区分录制格式的录制时长信息。
             */
            Detail: {
                /**
                 * FLV格式录制时长。单位：秒。
                 * @example `100`
                 */
                FLV: number;
                /**
                 * TS格式录制时长。单位：秒。
                 * @example `456`
                 */
                TS: number;
                /**
                 * MP4格式录制时长。单位：秒。
                 * @example `230`
                 */
                MP4: number;
            };
        }[];
    };
}
