export interface ScanImageResponse {
    /**
     * 请求ID。
     * @example `69B41AE8-1234-1234-1234-12D395695D2D`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 图片检测结果。
         */
        Results: {
            /**
             * 图像URL地址。
             * @example `http://xxx.xxx.xxx/xxx.jpg`
             */
            ImageURL: string;
            /**
             * 数据ID。
             * @example `uuid-xxxx-xxx-1234`
             */
            DataId: string;
            /**
             * 单张图片的检测结果。
             */
            SubResults: {
                /**
                 * 图片中包含暴恐敏感内容时，返回识别出来的暴恐敏感信息。
                 * > 仅适用于terrorism和sface场景。关于该参数在sface场景中的具体内容，请参见敏感人脸检测。
                 */
                SfaceDataList: {
                    /**
                     * 人脸区域宽度。
                     * @example `97`
                     */
                    Width: number;
                    /**
                     * 识别出的人脸信息。
                     */
                    Faces: {
                        /**
                         * 相似人物的名称。
                         * @example `abc`
                         */
                        Name: string;
                        /**
                         * 人脸ID。
                         * @example `AliFace_0001234`
                         */
                        Id: string;
                        /**
                         * 相似概率。
                         * @example `91.54`
                         */
                        Rate: number;
                    }[];
                    /**
                     * 人脸区域高度。
                     * @example `131`
                     */
                    Height: number;
                    /**
                     * 以图片左上角为坐标原点，人脸区域左上角到x轴距离。
                     * @example `39`
                     */
                    Y: number;
                    /**
                     * 以图片左上角为坐标原点，人脸区域左上角到y轴距离。
                     * @example `49`
                     */
                    X: number;
                }[];
                /**
                 * 图片中含有广告时，返回图片中广告文字命中的风险关键词信息。格式为数组。
                 * > 仅适用于ad场景。示例值：`”hintWordsInfo”:[{“context”:”敏感词”}]`。
                 */
                HintWordsInfoList: {
                    /**
                     * 图片中文字命中的风险关键词内容。
                     * @example `abc`
                     */
                    Context: string;
                }[];
                /**
                 * 建议您执行的操作。
                 * - pass：图片正常，无需进行其余操作；或者未识别出目标对象。
                 * - review：检测结果不确定，需要进行人工审核；或者未识别出目标对象。
                 * - block：图片违规，建议执行进一步操作（如直接删除或做限制处理）。
                 * @example `block`
                 */
                Suggestion: string;
                /**
                 * 图片中含有小程序码时，返回小程序码的位置信息。
                 * > 仅适用于qrcode场景，且已通过钉钉群（23109592）联系我们开通了小程序码识别。
                 */
                ProgramCodeDataList: {
                    /**
                     * 小程序码区域宽度。
                     * @example `402.0`
                     */
                    Width: number;
                    /**
                     * 小程序码区域高度。
                     * @example `413.0`
                     */
                    Height: number;
                    /**
                     * 以图片左上角为坐标原点，小程序码区域左上角到x轴距离。
                     * @example `0.0`
                     */
                    Y: number;
                    /**
                     * 以图片左上角为坐标原点，小程序码区域左上角到y轴距离。
                     * @example `11.0`
                     */
                    X: number;
                }[];
                /**
                 * 1
                 */
                OCRDataList: string[];
                /**
                 * 如果待检测图片因为过长被截断，该参数返回截断后的每一帧图像的临时访问地址供您参考。
                 */
                Frames: {
                    /**
                     * 被截断的图片的临时访问URL，地址有效期是5分钟。
                     * @example `http://xxx.xxx.com/xxx-0.jpg`
                     */
                    URL: string;
                    /**
                     * 结果为该分类的概率，取值范围为0~100。值越高，表示越有可能属于该分类。
                     * @example `89.85`
                     */
                    Rate: number;
                }[];
                /**
                 * 图片中含有Logo时，返回识别出来的Logo信息。
                 * > 仅适用于Logo场景。
                 */
                LogoDataList: {
                    /**
                     * 识别出的logo类型，取值为TV（台标）。
                     * @example `TV`
                     */
                    Type: string;
                    /**
                     * Logo区域宽度。
                     * @example `106`
                     */
                    Width: number;
                    /**
                     * Logo区域高度。
                     * @example `106`
                     */
                    Height: number;
                    /**
                     * 以图片左上角为坐标原点，Logo区域左上角到x轴距离。
                     * @example `68`
                     */
                    Y: number;
                    /**
                     * 识别出的Logo名称。
                     * @example `abc`
                     */
                    Name: string;
                    /**
                     * 以图片左上角为坐标原点，Logo区域左上角到y轴距离。
                     * @example `140`
                     */
                    X: number;
                }[];
                /**
                 * 检测结果的分类，与具体的scene对应。取值范围参见scene和label对应关系说明。
                 * @example `normal`
                 */
                Label: string;
                /**
                 * 图片检测场景，和调用请求中的场景（scenes）对应。
                 * @example `ad`
                 */
                Scene: string;
                /**
                 * 结果为该分类的概率，取值范围为0~100。值越高，表示越有可能属于该分类。
                 * @example `99.91`
                 */
                Rate: number;
            }[];
            /**
             * 任务ID。
             * @example `img4wlJcb7p4wH4lAP3111111-123456`
             */
            TaskId: string;
        }[];
    };
}
