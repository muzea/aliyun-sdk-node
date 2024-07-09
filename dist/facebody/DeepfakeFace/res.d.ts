export interface DeepfakeFaceResponse {
    /**
     * 请求ID。
     * @example `8E6F65D5-62A1-1E5B-BC0B-00508034AC92`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回识别的元素。
         */
        Elements: {
            /**
             * 对应请求中的图像URL地址。
             * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DeepfakeFace/DeepfakeFace1.jpg`
             */
            ImageURL: string;
            /**
             * 该检测任务的ID。
             * @example `8E6F65D5-62A1-1E5B-BC0B-00508034AC92`
             */
            TaskId: string;
            /**
             * 返回结果。调用成功时返回结果中包含一个或多个元素。
             */
            Results: {
                /**
                 * 检测结果的分类，取值包括：
                 * - normalface：真脸照片
                 * - deepfakeface：换脸照片
                 * 如果未检测到人脸，则Label返回为`deepfake`。
                 * @example `normalface`
                 */
                Label: string;
                /**
                 * 取值范围为\[0.00,100.00]。数值越低表示属于真脸的概率越大。
                 * @example `36.6455`
                 */
                Confidence: number;
                /**
                 * 人脸检测框信息。
                 */
                Rect: {
                    /**
                     * 检测框左上角的点x坐标。
                     * @example `373`
                     */
                    Left: number;
                    /**
                     * 检测框左上角的点y坐标。
                     * @example `111`
                     */
                    Top: number;
                    /**
                     * 检测框宽度。
                     * @example `207`
                     */
                    Width: number;
                    /**
                     * 检测框高度。
                     * @example `284`
                     */
                    Height: number;
                };
                /**
                 * 提示信息。
                 * - 如输入模糊、遮挡或大角度等的人脸，则返回提示信息：`blurred, occluded or large angle face, please check.`
                 * - 如未检测到人脸，则返回提示信息：`no face detected, try again please.`
                 * @example `blurred, occluded or large angle face, please check.`
                 */
                MessageTips: string;
            }[];
            /**
             * 单张图片检测到的人脸数量。
             * 如果未检测到人脸，FaceNumber返回为0。
             * @example `1`
             */
            FaceNumber: number;
        }[];
    };
}
