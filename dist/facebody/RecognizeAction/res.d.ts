export interface RecognizeActionResponse {
    /**
     * 请求ID。
     * @example `E9C40AF5-A7F8-49D5-8A0C-B21F15A07F17`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回的结果元素列表。
         */
        Elements: {
            Scores: number[];
            Labels: string[];
            /**
             * 具体动作的坐标框列表。
             */
            Boxes: {
                Box: number[];
            }[];
            /**
             * 当前行为在视频或者图像中发生的时间戳信息。
             * @example `3`
             */
            Timestamp: number;
        }[];
    };
}
