export interface DescribeMeterImsSummaryResponse {
    /**
     * 请求ID。
     * @example `BEA98A0C-7870-15FE-B96F-8880BB600A2C`
     */
    RequestId: string;
    /**
     * IMS点播用量统计数据。
     */
    Data: {
        /**
         * 点播转码时长。
         * @example `17337`
         */
        MpsTranscodeDuration: number;
        /**
         * 音画增强时长。
         * @example `300`
         */
        MpsTranscodeUHDDuration: number;
        /**
         * 直播转码时长。
         * @example `12356`
         */
        LiveTranscodeDuration: number;
        /**
         * 视频剪辑时长。
         * @example `8722`
         */
        EditingDuration: string;
        /**
         * 视频AI时长。
         * @example `0`
         */
        MpsAiDuration: number;
        /**
         * 直播录制时长
         * @example `100`
         */
        LiveRecordDuration: string;
        /**
         * 直播剪辑时长
         * @example `2000`
         */
        LiveEditDuration: string;
        /**
         * 直播截图数量
         * @example `100`
         */
        LiveSnapshotCount: string;
    }[];
}
