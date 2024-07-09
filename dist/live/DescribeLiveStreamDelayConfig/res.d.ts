export interface DescribeLiveStreamDelayConfigResponse {
    /**
     * 请求ID。
     * @example `785C9CB0-EB8A-4912-BBF2-966BEFD32DC3`
     */
    RequestId: string;
    /**
     * HLS延迟。
     */
    LiveStreamHlsDelayConfig: {
        /**
         * 播放延迟时间。单位：秒。
         * @example `3`
         */
        Delay: number;
        /**
         * 延迟级别。取值：
         * - **short**：Delay小于等于4秒。
         * - **medium**：Delay大于4秒，且小于等于8秒。
         * - **long**：Delay大于8秒。
         * @example `short`
         */
        Level: string;
    };
    /**
     * FLV延迟。
     */
    LiveStreamFlvDelayConfig: {
        /**
         * 播放延迟时间。单位：秒。
         * @example `5`
         */
        Delay: number;
        /**
         * 延迟级别。取值：
         * - **short**：Delay小于等于4秒。
         * - **medium**：Delay大于4秒，且小于等于8秒。
         * - **long**：Delay大于8秒。
         * @example `medium`
         */
        Level: string;
    };
    /**
     * RTMP延迟。
     */
    LiveStreamRtmpDelayConfig: {
        /**
         * 播放延迟时间。单位：秒。
         * @example `4`
         */
        Delay: number;
        /**
         * 延迟级别。取值：
         * - **short**：Delay小于等于4秒。
         * - **medium**：Delay大于4秒，且小于等于8秒。
         * - **long**：Delay大于8秒。
         * @example `short`
         */
        Level: string;
    };
}
