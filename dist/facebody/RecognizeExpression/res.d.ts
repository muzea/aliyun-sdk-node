export interface RecognizeExpressionResponse {
    /**
     * 请求ID。
     * @example `E1C4C576-1799-4079-A934-15BC406A54EF`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 各个子元素的识别结果。
         */
        Elements: {
            /**
             * 人脸区域信息。
             */
            FaceRectangle: {
                /**
                 * 以图像左上角为坐标原点，人脸区域左上角的y坐标。
                 * @example `67`
                 */
                Top: number;
                /**
                 * 人脸区域的宽度。
                 * @example `113`
                 */
                Width: number;
                /**
                 * 人脸区域的高度。
                 * @example `154`
                 */
                Height: number;
                /**
                 * 以图像左上角为坐标原点，人脸区域左上角的x坐标。
                 * @example `370`
                 */
                Left: number;
            };
            /**
             * 表情类别。取值如下：
             * - neutral：中性
             * - happiness：高兴
             * - surprise：惊讶
             * - sadness：伤心
             * - anger：生气
             * - disgust：厌恶
             * - fear：害怕
             * - pouty：嘟嘴
             * - grimace：做鬼脸
             * @example `happiness`
             */
            Expression: string;
            /**
             * 人脸的概率，取值范围为0~1。
             * @example `0.88330078125`
             */
            FaceProbability: number;
        }[];
    };
}
