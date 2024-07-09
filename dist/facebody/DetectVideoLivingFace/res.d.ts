export interface DetectVideoLivingFaceResponse {
    /**
     * 请求ID。
     * @example `8E92F28B-F889-48CB-9FCC-3207CFA2215E`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测结果数据。
         */
        Elements: {
            Rect: number[];
            /**
             * 活体的置信度，取值范围为0~1。
             * @example `0.72464925050735474`
             */
            LiveConfidence: number;
            /**
             * 人脸的置信度，取值范围为0~1。
             * @example `0.84644949436187744`
             */
            FaceConfidence: number;
        }[];
    };
}
