export interface DetectCelebrityResponse {
    /**
     * 请求ID。
     * @example `4E92C0D4-BB0F-4F25-AD13-E87D02FAA205`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 识别结果数据。
         */
        FaceRecognizeResults: {
            /**
             * 1
             */
            FaceBoxes: number[];
            /**
             * 识别出的人物名称。
             * @example `张三`
             */
            Name: string;
        }[];
        /**
         * 图像宽度，单位像素。
         * @example `1000`
         */
        Width: number;
        /**
         * 图像高度，单位像素。
         * @example `1000`
         */
        Height: number;
    };
}
