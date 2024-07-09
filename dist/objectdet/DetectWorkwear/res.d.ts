export interface DetectWorkwearResponse {
    /**
     * 请求ID。
     * @example `16CA8094-D7BC-51D4-8D55-6AC59AB20E0B`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测结果。
         */
        Elements: {
            /**
             * 检测结果属性。仅当**Type**返回0或1时，该字段显示返回结果，否则返回为空。
             */
            Property: {
                /**
                 * 检测的属性。
                 * @example `hat`
                 */
                Label: string;
                /**
                 * 检测概率数据。
                 */
                Probability: {
                    /**
                     * 确定未戴口罩、未穿工装、未戴帽子的概率。
                     * @example `0.00036084422`
                     */
                    No: number;
                    /**
                     * 系统推荐的阈值。
                     * @example `0`
                     */
                    Threshold: number;
                    /**
                     * 未知概率。
                     * @example `0.0006906331`
                     */
                    Unknown: number;
                    /**
                     * 确定戴口罩、穿工装、戴帽子的概率。
                     * @example `0.9989485`
                     */
                    Yes: number;
                };
            }[];
            /**
             * 检测结果位置信息。
             */
            Rectangles: {
                /**
                 * 高度，单位像素。
                 * @example `96`
                 */
                Height: number;
                /**
                 * 左上角Y坐标，单位像素。
                 * @example `1067`
                 */
                Left: number;
                /**
                 * 左上角X坐标，单位像素。
                 * @example `426`
                 */
                Top: number;
                /**
                 * 宽度，单位像素。
                 * @example `88`
                 */
                Width: number;
            };
            /**
             * 检测结果概率值。
             * @example `0.63913465`
             */
            Score: number;
            /**
             * 检测结果类型。取值如下：
             * - 0：人体
             * - 1：人头
             * - 2：人脸
             * - 3：手
             * @example `1`
             */
            Type: string;
        }[];
    };
}
