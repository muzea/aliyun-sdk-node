export interface DetectFaceResponse {
    /**
     * 请求ID。
     * @example `26B5334B-FD8A-5994-A1DA-3CA8F7B25676`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 1
         */
        FaceProbabilityList: number[];
        /**
         * 1
         */
        Pupils: number[];
        /**
         * 1
         */
        FaceRectangles: number[];
        /**
         * 检测出的人脸个数。
         * @example `1`
         */
        FaceCount: number;
        /**
         * 1
         */
        PoseList: number[];
        /**
         * 1
         */
        Landmarks: number[];
        LandmarkScore: number[];
        /**
         * 人脸特征点数目，目前固定为105点。依次为：眉毛24点，眼睛32点，鼻子6点，嘴巴34点，外轮廓9点。
         * @example `105`
         */
        LandmarkCount: number;
        /**
         * 人脸质量情况，分数越高表示越有利于识别。
         */
        Qualities: {
            /**
             * 1
             */
            ScoreList: number[];
            /**
             * 1
             */
            BlurList: number[];
            /**
             * 1
             */
            FnfList: number[];
            /**
             * 1
             */
            GlassList: number[];
            /**
             * 1
             */
            IlluList: number[];
            /**
             * 1
             */
            MaskList: number[];
            /**
             * 1
             */
            NoiseList: number[];
            /**
             * 1
             */
            PoseList: number[];
        };
    };
}
