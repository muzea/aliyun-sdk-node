export interface UpdateWatermarkResponse {
    /**
     * requestId
     * @example `84118BF0-56F7-54D2-8C1A-35BBBBD5016B`
     */
    RequestId: string;
    /**
     * code
     * @example `OK`
     */
    Code: string;
    /**
     * 提示
     * @example `-`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 水印 ID
         * @example `f3bd31c0-0001-4b4b-977d-7cfa64b585f5`
         */
        Id: string;
        /**
         * 创建时间
         * @example `2020-07-14T14:01:41.000+08:00`
         */
        CreatedAt: string;
        /**
         * 水印信息
         * @example `{}`
         */
        Value: string;
        /**
         * 水印名称
         * @example `名称`
         */
        Name: string;
    };
    /**
     * 给 pop 使用的
     * @example `True`
     */
    Success: boolean;
    /**
     * HTTP 状态码
     * @example `200`
     */
    HttpCode: number;
    /**
     * 错误列表
     */
    Errors: {
        /**
         * 错误 ID
         * @example `A1899517-BB99-5D3E-A71B-97524DCB0942`
         */
        Field: string;
        /**
         * 错误信息
         * @example `-`
         */
        Message: string;
    }[];
}
