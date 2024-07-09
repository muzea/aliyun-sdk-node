export interface DescribeImageResultExtResponse {
    /**
     * 请求ID。
     * @example `6CF2815C-C8C7-4A01-B52E-FF6E24F53492`
     */
    RequestId: string;
    /**
     * 状态码。
     * @example `200`
     */
    Code: number;
    /**
     * 请求信息的响应信息。
     * @example `success`
     */
    Msg: string;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 自定义图库命中信息列表。
         */
        CustomImage: {
            /**
             * 图片ID。
             * @example `123456`
             */
            ImageId: string;
            /**
             * 图库名。
             * @example `图库123`
             */
            LibName: string;
            /**
             * 图库ID。
             * @example `123456`
             */
            LibId: string;
        }[];
        /**
         * 返回命中的图片中文字信息。
         */
        TextInImage: {
            /**
             * 返回识别到的图片中的文字信息。
             */
            OcrDatas: string[];
            /**
             * 命中风险关键词
             */
            RiskWords: string[];
            /**
             * 当命中自定义文本库时，返回自定义库ID、自定义库名称和自定义词。
             */
            CustomTexts: {
                /**
                 * 自定义库ID
                 * @example `123456`
                 */
                LibId: string;
                /**
                 * 自定义库名称。
                 * @example `自定义库1`
                 */
                LibName: string;
                /**
                 * 自定义词，多个词用逗号分隔。
                 * @example `自定义词1,自定义词2`
                 */
                KeyWords: string;
            }[];
        };
        /**
         * 人物信息列表。
         */
        PublicFigure: {
            /**
             * 人物ID。
             * @example `yzazhzou`
             */
            FigureId: string;
        }[];
    };
}
