export interface RecognizePublicFaceResponse {
    /**
     * 请求ID。
     * @example `AC4D107C-29E3-4873-A719-0D2217EA28A8`
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
             * @example `https://viapi-oss.oss-cn-shanghai.aliyuncs.com/doc/facebody/xxx.jpg`
             */
            ImageURL: string;
            /**
             * 该检测任务的ID。
             * @example `img3dhYqt1e4wO77Wnf2y@t@E-1tYAEt`
             */
            TaskId: string;
            /**
             * 返回结果。调用成功时返回结果中包含一个或多个元素。
             */
            Results: {
                /**
                 * 建议您执行的操作，取值包括：
                 * - pass：图片正常，无需进行其余操作。
                 * - review：检测结果不确定，需要进行人工审核。
                 * - block：图片违规，建议执行进一步操作（如直接删除或做限制处理）。
                 * @example `review`
                 */
                Suggestion: string;
                /**
                 * 检测结果的分类，取值包括：
                 * - normal：正常图片，不包含敏感人脸。
                 * - sface：图片中包含敏感人脸。
                 * @example `sface`
                 */
                Label: string;
                /**
                 * 识别出来的人脸信息列表。
                 */
                SubResults: {
                    /**
                     * 人脸区域宽度。
                     * @example `132`
                     */
                    W: number;
                    /**
                     * 识别出的人脸信息。
                     */
                    Faces: {
                        /**
                         * 识别出的相似人物名称。
                         * @example `张三`
                         */
                        Name: string;
                        /**
                         * 人脸ID。
                         * @example `AliFace_0006272`
                         */
                        Id: string;
                        /**
                         * 相似概率。
                         * @example `98.35`
                         */
                        Rate: number;
                    }[];
                    /**
                     * 人脸区域高度。
                     * @example `153`
                     */
                    H: number;
                    /**
                     * 以图片左上角为坐标原点，人脸区域左上角到y轴距离。
                     * @example `153`
                     */
                    Y: number;
                    /**
                     * 以图片左上角为坐标原点，人脸区域左上角到x轴距离。
                     * @example `182`
                     */
                    X: number;
                }[];
                /**
                 * 检测结果的置信度，取值范围为`[0.00,100.00]`。值越高，表示属于该分类的概率越大。
                 * @example `98.35`
                 */
                Rate: number;
            }[];
        }[];
    };
}
