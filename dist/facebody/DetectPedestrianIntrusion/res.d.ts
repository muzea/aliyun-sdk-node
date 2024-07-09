export interface DetectPedestrianIntrusionResponse {
    /**
     * 请求ID。
     * @example `AA2539F7-D139-458C-A9BA-3321318D6BC4`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输入图片的宽度。
         * @example `899`
         */
        ImageWidth: number;
        /**
         * 输入图片的高度。
         * @example `599`
         */
        ImageHeight: number;
        /**
         * 人体检测框的集合。
         */
        Elements: {
            /**
             * 检测框的置信度，范围为`[0,1]`。
             * @example `0.950289249420166`
             */
            Score: number;
            /**
             * 检测框对应的人体，取值为person。
             * @example `person`
             */
            Type: string;
            /**
             * 判断该人体是否入侵给定的区域或界线。
             * - true：入侵给定区域或界限。
             * - false：未入侵给定区域或界限。
             * @example `false`
             */
            IsIntrude: boolean;
            /**
             * 检测框坐标。
             */
            Box: {
                /**
                 * 矩形区域的左上角横轴坐标。
                 * @example `175`
                 */
                Left: number;
                /**
                 * 矩形区域的左上角纵轴坐标。
                 * @example `153`
                 */
                Top: number;
                /**
                 * 矩形区域的右下角横轴坐标。
                 * @example `418`
                 */
                Right: number;
                /**
                 * 矩形区域的右下角纵轴坐标。
                 * @example `551`
                 */
                Bottom: number;
            };
            /**
             * 检测框的ID。
             * @example `0`
             */
            BoxId: number;
        }[];
    };
}
