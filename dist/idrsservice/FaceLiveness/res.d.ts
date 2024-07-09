export interface FaceLivenessResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7AC54DAF-38F8-58C7-8383-3131FEDDA***`
     */
    RequestId: string;
    /**
     * 状态码
     * @example `OK`
     */
    Code: number;
    /**
     * 错误信息
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 人脸任务ID
         * @example `d61be709-49d2-4cf1-b219-cd6181f72***
        `
         */
        PublicId: string;
        /**
         * 人脸接口返回的code
         * @example `2000000`
         */
        Code: string;
        /**
         * 人脸接口返回的错误信息
         * @example `success`
         */
        Message: string;
        /**
         * 识别是否通过
         * @example `T`
         */
        Passed: string;
        /**
         * 分值
         * @example `3.24324324324`
         */
        Score: number;
        /**
         * 任务状态
         * @example `COMPLETED`
         */
        Status: string;
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
