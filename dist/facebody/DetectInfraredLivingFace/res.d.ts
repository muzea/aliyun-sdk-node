export interface DetectInfraredLivingFaceResponse {
    /**
     * 请求ID。
     * @example `68DF6EC7-3B1D-11EE-9FA7-1122F1AE92DD`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回的结果数据内容。
         */
        Elements: {
            /**
             * 单张图片检测到的人脸数量。如果没有检测到人脸，FaceNumber返回为0。
             * @example `1`
             */
            FaceNumber: number;
            /**
             * 对应请求中的图像URL地址。
             * @example `http://viapi-demo.oss-cn-shanghai.aliyuncs.com/viapi-demo/images/SegmentCommonImage/segmentimage-src-hu.jpeg`
             */
            ImageURL: string;
            /**
             * 返回人脸坐标和活体结果。
             */
            Results: {
                /**
                 * 检测结果的分类，取值包括：
                 * - normal：活体照片
                 * - liveness：翻拍照片
                 * 如果没有检测到人脸，则Label返回为liveness。
                 * @example `liveness`
                 */
                Label: string;
                /**
                 * 结果为该分类的概率，取值范围为\[0.00-100.00]。取值越大表示属于该分类的概率越大。
                 * 如果未检测到人脸，则Rate返回为100。
                 * @example `83.3848`
                 */
                Rate: number;
                /**
                 * 人脸检测框信息。如果未检测到人脸，则Rect人脸检测坐标返回全为0。
                 */
                Rect: {
                    /**
                     * 检测框高度。
                     * @example `20`
                     */
                    Height: number;
                    /**
                     * 检测框宽度。
                     * @example `30`
                     */
                    Width: number;
                    /**
                     * 检测框左上角的点y坐标。
                     * @example `50`
                     */
                    Top: number;
                    /**
                     * 检测框左上角的点x坐标。
                     * @example `60`
                     */
                    Left: number;
                };
                /**
                 * 建议您执行的操作，取值范围如下：
                 * - pass：图片中的活体对象来自直接拍摄，无需进行其余操作。
                 * - review：图片中的活体对象可能为攻击样本，建议您确认后再进行操作。
                 * - block：图片中的活体对象大概率为攻击样本，建议您执行后续操作。
                 * 如果未检测到人脸，则Suggestion返回为block。
                 * @example `review`
                 */
                Suggestion: string;
                /**
                 * 提示信息，纯文字描述。
                 * - `blurred, occluded or large angle face, please check.`：如输入模糊、遮挡或大角度等的人脸。
                 * - `no face detected, try again please.`：如没有检测到人脸。
                 * @example `blurred, occluded or large angle face, please check.`
                 */
                MessageTips: string;
            }[];
        }[];
    };
}
