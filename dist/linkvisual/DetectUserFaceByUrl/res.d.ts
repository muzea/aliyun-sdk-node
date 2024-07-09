export interface DetectUserFaceByUrlResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~145071~~)。
     * @example `200`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `can not find this face`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `df554760-7ccd-11eb-9a25-8f6d8670ef61`
     */
    RequestId: string;
    /**
     * 是否调用成功：
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 响应结果。
         * > 仅当存在人脸数据时才会返回Data。
         */
        data: {
            /**
             * 人脸模糊度得分。得分的取值范围为0~1。
             * > 数值越高表示人脸图片质量越高。
             * @example `0.795382022857666`
             */
            BlurScore: number;
            /**
             * 检测图片中人脸的性别：
             * - 0：未知
             * - 1：男性
             * - 2：女性
             * @example `1`
             */
            Gender: number;
            /**
             * 人脸遮挡得分。得分的取值范围为0~1。
             * > 数值越高表示人脸图片质量越高。
             * @example `0.9867380261421204`
             */
            OcclusionScore: number;
            /**
             * 是否适合收录入人脸底库：
             * - ture：适合
             * - false：不适合
             * @example `true`
             */
            GoodForLibrary: boolean;
            /**
             * 是否适合用于人脸检测：
             * - true：适合
             * - false：不适合
             * > 若值为false，建议更换原图片，重新调用该接口。否则可能引起人脸识别结果不准确。
             * @example `true`
             */
            GoodForRecognition: boolean;
            /**
             * 人脸的年龄。
             * > 0表示未检测到人脸的年龄。
             * @example `20`
             */
            Age: number;
            /**
             * 图片是人脸的概率。
             * > 数值越高表示图片是人脸的概率越高。
             * @example `0.9999769926071167`
             */
            FaceProbability: number;
            /**
             * 人脸角度得分。得分的取值范围为0~1。
             * > 数值越高表示人脸图片质量越高。
             * @example `0.9167874261423875`
             */
            PoseScore: number;
            FaceRects: {
                FaceRectsData: string[];
            };
            Landmarks: {
                LandmarksData: string[];
            };
        }[];
    };
}
