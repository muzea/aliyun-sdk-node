export interface AssessSharpnessResponse {
    /**
     * 请求ID。
     * @example `C0B594A1-383E-4F97-A740-0D51CF8E37D2`
     */
    RequestId: string;
    /**
     * 返回的结果数据内容。
     */
    Data: {
        /**
         * 输出图像清晰度评分，取值范围0~1。评分越高图像越清晰。
         * @example `0.1`
         */
        Sharpness: number;
    };
}
