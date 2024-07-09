export interface DetectPedestrianResponse {
    /**
     * 请求ID。
     * @example `45DBA494-6250-42C4-80D1-7CF19BDD2CB1`
     */
    RequestId: string;
    /**
     * 返回的数据内容。
     */
    Data: {
        /**
         * 人体检测框的集合。
         */
        Elements: {
            /**
             * 检测框对应的检测结果类型。仅返回参数值`person`。
             * @example `person`
             */
            Type: string;
            /**
             * 1
             */
            Boxes: number[];
            /**
             * 检测框的置信度，取值范围为0~1，得分越接近1表示人体框准确的概率越大。
             * @example `0.999`
             */
            Score: number;
        }[];
        /**
         * 输入图像的宽度，单位像素。
         * @example `899`
         */
        Width: number;
        /**
         * 输入图像的高度，单位像素。
         * @example `599`
         */
        Height: number;
    };
}
