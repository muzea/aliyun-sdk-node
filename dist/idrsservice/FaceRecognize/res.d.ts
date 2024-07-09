export interface FaceRecognizeResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `59b0bbfe-929b-4a8c-9833-3ce70b4ba***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误消息
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 识别是否通过
         * @example `T `
         */
        ComparePassed: string;
        /**
         * 分值
         * @example `32.435`
         */
        CompareScore: number;
        /**
         * 识别是否通过
         * @example `T`
         */
        LivenessPassed: string;
        /**
         * 分值
         * @example `56.34`
         */
        LivenessScore: number;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * http状态码
     * @example `200`
     */
    HttpCode: number;
}
