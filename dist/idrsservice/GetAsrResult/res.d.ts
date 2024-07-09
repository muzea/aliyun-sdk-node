export interface GetAsrResultResponse {
    /**
     * 唯一请求识别码
     * @example `C14ED32C-B9E4-54E7-BA85-C2B562C5B***`
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
         * asr识别出的文本
         * @example `北京的天气`
         */
        Result: string;
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
