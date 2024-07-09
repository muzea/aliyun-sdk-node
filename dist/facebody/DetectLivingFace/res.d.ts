export interface DetectLivingFaceResponse {
    /**
     * 请求ID。
     * @example `2EEA0396-BD84-5729-B8BD-D60776FCEF2B`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回的元素。
         */
        Elements: {
            /**
             * 对应请求中的图像URL地址。
             * @example `http://viapi-test.oss-cn-shanghai.aliyuncs.com/viapi-3.0domepic/facebody/DetectLivingFace/DetectLivingFace4.jpg`
             */
            ImageURL: string;
            /**
             * 该检测任务的ID。
             * @example `img1owc8WGskNm78OEAPJTZal-1****`
             */
            TaskId: string;
            /**
             * 返回结果。调用成功时返回结果中包含一个或多个元素。
             */
            Results: {
                /**
                 * 建议您执行的操作，取值范围如下：
                 * - pass：图片中的活体对象来自直接拍摄，无需进行其余操作。
                 * - review：图片中的活体对象可能来自翻拍，建议您确认后再进行操作。
                 * - block：图片中的活体对象大概率来自翻拍，建议您执行后续操作。
                 * 如果未检测到人脸，则Suggestion返回为block。
                 * @example `review`
                 */
                Suggestion: string;
                /**
                 * **（该字段已废弃）**输入图像为长图（长宽比大于3:1）时，会把原图截成几张正常比例的图，frames保存从图像中裁剪出来的而且是翻拍命中的截图。
                 */
                Frames: {
                    /**
                     * 命中的截图。
                     * @example `http://aligreen-shanghai.oss-cn-shanghai.aliyuncs.com/prod/hammal/26210da42/28118541_TB1urBOQFXXXXbMXFXXXXXXXXXX-1442-257.png?Expires=1582703593&OSSAccessKeyId=H4sp5QfNbuDg****&Signature=%2B8iUkb5YjomYR8ujV2c8wMAavs****&x-oss-process=image%2Fcrop%2Cx_0%2Cw_288%2Fauto-orient%2C0`
                     */
                    Url: string;
                    /**
                     * 结果为该分类的概率，取值范围为\[0.00,100.00]。取值越大，表示属于该分类的概率越大。
                     * 如果未检测到人脸，则Rate返回为100。
                     * @example `84.83`
                     */
                    Rate: number;
                }[];
                /**
                 * 检测结果的分类，取值包括：
                 * - normal：活体照片
                 * - liveness：翻拍照片
                 * 如果未检测到人脸，则Label返回为liveness。
                 * @example `liveness`
                 */
                Label: string;
                /**
                 * 结果为该分类的概率，取值范围为\[0.00,100.00]。表示属于该分类的概率越大。
                 * @example `76.22`
                 */
                Rate: number;
                /**
                 * 人脸检测框信息。
                 */
                Rect: {
                    /**
                     * 检测框左上角的点x坐标。
                     * @example `20`
                     */
                    Left: number;
                    /**
                     * 检测框左上角的点y坐标。
                     * @example `30`
                     */
                    Top: number;
                    /**
                     * 检测框宽度。
                     * @example `50`
                     */
                    Width: number;
                    /**
                     * 检测框高度。
                     * @example `60`
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
