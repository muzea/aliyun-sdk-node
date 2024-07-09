export interface GetBatchTranslateResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: number;
    /**
     * 返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求的唯一id，用于后续排查问题使用
     * @example `86D18195-D89C-4C8C-9DC4-5FCE789CE6D5`
     */
    RequestId: string;
    TranslatedList: any[];
}
