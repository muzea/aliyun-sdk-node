export interface DescribeLiveDomainTranscodeDataResponse {
    /**
     * 请求ID。
     * @example `B955107D-E658-4E77-B913-E0AC3D31693F`
     */
    RequestId: string;
    TranscodeDataInfos: {
        /**
         * 直播转码时长的每日数据统计。
         */
        TranscodeDataInfo: {
            /**
             * 日期，具体到天。
             * @example `20180202`
             */
            Date: string;
            /**
             * 单日转码总时长。单位：秒。
             * @example `4710`
             */
            Total: number;
            /**
             * 区分转码规格的转码时长信息。
             * 转码类型字段含义请参见下文**转码类型说明**。
             * @example `{ "LD_CASTER": 86315, "SD_CASTER": 86315 }, "Date": "20180212", "Total": 172630}`
             */
            Detail: string;
        }[];
    };
}
