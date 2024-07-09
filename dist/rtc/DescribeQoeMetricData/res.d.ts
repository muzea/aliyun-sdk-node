export interface DescribeQoeMetricDataResponse {
    /**
     * 视频数据。
     */
    VideoData: {
        /**
         * 影响通信体验的指标类型。取值：
         * - **VIDEO_CAMERA**：摄像头码率。
         * - **VIDEO_SCREEN_SHARE**：共享屏幕流码率。
         * - **VIDEO_STUCK_CAMERA**：摄像头卡顿。
         * - **VIDEO_STUCK_SCREEN_SHARE**：屏幕共享卡顿。
         * - **VIDEO_VAGUE_CAMERA**：摄像头模糊。
         * - **VIDEO_VAGUE_SCREEN_SHARE**：屏幕共享模糊。
         * @example `VIDEO_CAMERA`
         */
        Type: string;
        /**
         * 用户ID
         * @example `testuserid2`
         */
        UserId: string;
        /**
         * 视频指标趋势图坐标点列表。
         */
        Nodes: {
            /**
             * 视频指标趋势图中x轴横坐标。
             * @example `1548670256`
             */
            X: string;
            /**
             * 视频指标趋势图中y轴纵坐标。
             * @example `123`
             */
            Y: string;
        }[];
    }[];
    /**
     * 音频数据。
     */
    AudioData: {
        /**
         * 通信体验。取值：
         * - **AUDIO**：音频码率。
         * - **AUDIO_STUCK**：音频下行卡顿。
         * @example `AUDIO`
         */
        Type: string;
        /**
         * 用户ID。
         * @example `testuserid2`
         */
        UserId: string;
        /**
         * 音频指标趋势图坐标点列表。
         */
        Nodes: {
            /**
             * 音频指标趋势图中x轴横坐标。
             * @example `1548670256`
             */
            X: string;
            /**
             * 音频指标趋势图中y轴纵坐标。
             * @example `123`
             */
            Y: string;
        }[];
    }[];
    /**
     * 请求ID。
     * @example `231470C1-ACFB-4C9F-844F-4CFE1E3804C5`
     */
    RequestId: string;
}
