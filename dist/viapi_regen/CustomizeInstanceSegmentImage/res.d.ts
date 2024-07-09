export interface CustomizeInstanceSegmentImageResponse {
    /**
     * 请求ID。
     * @example `AB3F19AE-F3D3-5EEE-97AF-57B7397B5C9B`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 检测结果列表。
         */
        Elements: {
            /**
             * 检测框区域。
             */
            Boxes: {
                /**
                 * 检测框X坐标。
                 * @example `822`
                 */
                X: number;
                /**
                 * 检测框Y坐标。
                 * @example `480`
                 */
                Y: number;
                /**
                 * 检测框宽度，单位：像素。
                 * @example `822`
                 */
                Width: number;
                /**
                 * 检测框高度，单位：像素。
                 * @example `1094`
                 */
                Height: number;
            };
            /**
             * 置信度。
             * @example `0.6564025282859802`
             */
            Score: number;
            /**
             * 根据数据集自学习训练得出的分类结果。
             * @example `气球`
             */
            Category: string;
            /**
             * RLE编码区域。
             */
            Mask: {
                /**
                 * RLE编码区域的高度和宽度。第一个元素是高度，第二个元素是宽度，单位：像素。
                 */
                Sizes: number[];
                /**
                 * RLE编码字符串。
                 * @example `UPf1c1Zm1;E;F:E;G9E:G9E;_Oa0_O`0A`0E;I7I8H7H8H9G9F:F9G:D;E;E;D<E;E;F:E;F:F9H****`
                 */
                Counts: string;
            };
            /**
             * 轮廓区域。
             */
            Contours: {
                /**
                 * 轮廓点的X坐标。
                 * @example `1394`
                 */
                X: number;
                /**
                 * 轮廓点的Y坐标。
                 * @example `510`
                 */
                Y: number;
            }[];
        }[];
    };
}
