export interface RecognizeCharacterResponse {
    /**
     * 请求ID。
     * @example `7A9BC7FE-2D42-57AF-93BC-09A229DD2F1D`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 返回识别信息。
         */
        Results: {
            /**
             * 文字框区域位置。
             */
            TextRectangles: {
                /**
                 * 文字区域左上角y坐标。
                 * @example `150`
                 */
                Top: number;
                /**
                 * 文字区域宽度。
                 * @example `77`
                 */
                Width: number;
                /**
                 * 文字区域高度。
                 * @example `409`
                 */
                Height: number;
                /**
                 * 文字区域角度，角度范围`[-180, 180]`。
                 * > 以文字区域中心点为旋转点，向右旋转角度为正，向左旋转角度为负。
                 * @example `-65`
                 */
                Angle: number;
                /**
                 * 文字区域左上角x坐标。
                 * @example `511`
                 */
                Left: number;
            };
            /**
             * 文字内容。
             * @example `祝你生日快乐`
             */
            Text: string;
            /**
             * 文字内容的概率，取值范围为0~1。
             * @example `0.99`
             */
            Probability: number;
        }[];
    };
}
