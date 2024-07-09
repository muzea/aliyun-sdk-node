export interface RecognizeFaceResponse {
    /**
     * 请求ID。
     * @example `8251C88E-8273-4DBF-94FB-A6BCB268CEA2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 1
         */
        Pupils: number[];
        /**
         * 1
         */
        GenderList: number[];
        /**
         * 1
         */
        Expressions: number[];
        /**
         * 1
         */
        DenseFeatures: string[];
        /**
         * 检测出来的人脸个数。
         * @example `1`
         */
        FaceCount: number;
        /**
         * 1
         */
        Landmarks: number[];
        /**
         * 人脸检测的特征点数目，目前固定为105点。依次为：眉毛24点，眼睛32点，鼻子6点，嘴巴34点，外轮廓9点。
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
        /**
         * 1
         */
        BeautyList: number[];
        /**
         * 1
         */
        HatList: number[];
        /**
         * 1
         */
        FaceProbabilityList: number[];
        /**
         * 1
         */
        Glasses: number[];
        /**
         * 1
         */
        FaceRectangles: number[];
        /**
         * 1
         */
        PoseList: number[];
        /**
         * 1
         */
        AgeList: number[];
        /**
         * 人脸识别返回的特征维度，目前固定为1024。
         * @example `1024`
         */
        DenseFeatureLength: number;
        /**
         * 1
         */
        Masks: number[];
    };
}
