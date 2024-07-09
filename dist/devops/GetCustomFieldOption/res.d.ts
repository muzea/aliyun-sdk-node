export interface GetCustomFieldOptionResponse {
    /**
     * 请求id，每次请求都是唯一值，便于后续排查问题
     * @example `ASSDS-ASSASX-XSAXSA-XSAXSAXS`
     */
    requestId: string;
    /**
     * 错误信息
     * @example `error`
     */
    errorMsg: string;
    /**
     * 错误码
     * @example `Openapi.RequestError`
     */
    errorCode: string;
    /**
     * true或者false
     * @example `true`
     */
    success: boolean;
    /**
     * 字段值信息
     */
    fileds: {
        /**
         * 展示的值
         * @example `223`
         */
        displayValue: string;
        /**
         * 字段唯一标识
         * @example `e8bxxxxxxxxxxxxxxxx23`
         */
        fieldIdentifier: string;
        /**
         * 迭代唯一标识符
         * @example `3345`
         */
        identifier: string;
        /**
         * 展示级别，数字范围1~9，数字越大，颜色越浅
         * @example `1`
         */
        level: number;
        /**
         * 待选值顺序
         * @example `1`
         */
        position: number;
        /**
         * 字段中文名称
         * @example `223`
         */
        value: string;
        /**
         * 字段英文名称
         * @example `223`
         */
        valueEn: string;
    }[];
}
