export interface GetImageDiagnoseResponse {
    /**
     * 状态码，正常请求返回200
     * @example `200`
     */
    Code: number;
    /**
     * 错误的时候返回错误信息
     * @example `ok`
     */
    Message: string;
    /**
     * 请求唯一串
     * @example `DC2DCCC9-C3DF-4F59-8D8E-78185729F16D`
     */
    RequestId: string;
    /**
     * 返回的结果
     */
    Data: {
        /**
         * 图片中的文字识别后的语种
         * @example `zh`
         */
        Language: string;
    };
}
