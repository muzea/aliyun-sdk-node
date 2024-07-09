export interface GetTitleGenerateResponse {
    /**
     * 状态码，正常返回200
     * @example `200`
     */
    Code: number;
    /**
     * 错误的时候，返回错误信息
     * @example `ok`
     */
    Message: string;
    /**
     * 请求唯一串
     * @example `DC2DCCC9-C3DF-4F59-8D8E-78185729F16D`
     */
    RequestId: string;
    /**
     * 返回内容
     */
    Data: {
        /**
         * 优化后的标题内容
         * @example `10pcs 80ml Kitchen Disposable Plastic Sauce Cup Pot Chutney Container`
         */
        Titles: string;
    };
}
