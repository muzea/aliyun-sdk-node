export interface RecognizePdfResponse {
    /**
     * 请求ID。
     * @example `CD9A9659-ABEE-4A7D-837F-9FDF40879A97`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 文档在图中旋转后的高度。
         * @example `788`
         */
        Height: number;
        /**
         * 文档在图中旋转后的宽度。
         * @example `1220`
         */
        Width: number;
        /**
         * 原图高度。
         * @example `610`
         */
        OrgHeight: number;
        /**
         * 原图宽度。
         * @example `394`
         */
        OrgWidth: number;
        /**
         * PDF页数。
         * @example `1`
         */
        PageIndex: number;
        /**
         * PDF文件被旋转的角度。
         * @example `0`
         */
        Angle: number;
        /**
         * 文字信息。
         */
        WordsInfo: {
            /**
             * 被识别字段被旋转的角度。
             * @example `0`
             */
            Angle: number;
            /**
             * 文字信息。
             * @example `发票代码：012002000211`
             */
            Word: string;
            /**
             * 被识别字段的高度。
             * @example `16`
             */
            Height: number;
            /**
             * 被识别字段的宽度。
             * @example `205`
             */
            Width: number;
            /**
             * 被识别字段左上角X坐标。
             * @example `863`
             */
            X: number;
            /**
             * 被识别字段左上角Y坐标。
             * @example `46`
             */
            Y: number;
            /**
             * 文字信息位置。识别矩形框四个角的坐标顺时针排列，分别为左上XY坐标、右上XY坐标、右下XY坐标、左下XY坐标。
             */
            Positions: {
                /**
                 * 矩形框X坐标。
                 * @example `863`
                 */
                X: number;
                /**
                 * 矩形框Y坐标。
                 * @example `43`
                 */
                Y: number;
            }[];
        }[];
    };
}
