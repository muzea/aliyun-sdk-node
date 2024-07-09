export interface DetectKitchenAnimalsResponse {
    /**
     * 请求ID。
     * @example `C306F16F-30E1-54F4-93DF-A52CCF6664D1`
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
             * 检测结果类型。取值如下：
             * - mouse：老鼠
             * - cat：猫
             * @example `mouse`
             */
            Type: string;
            /**
             * 检测结果概率值。
             * @example `0.75105053`
             */
            Score: number;
            /**
             * 检测目标位置。
             */
            Rectangles: {
                /**
                 * 左上角X坐标，单位像素。
                 * @example `1048`
                 */
                Top: number;
                /**
                 * 左上角Y坐标，单位像素。
                 * @example `292`
                 */
                Left: number;
                /**
                 * 高度，单位像素。
                 * @example `64`
                 */
                Height: number;
                /**
                 * 宽度，单位像素。
                 * @example `64`
                 */
                Width: number;
            };
        }[];
    };
}
