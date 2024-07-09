export interface ListWorkitemTimeResponse {
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
     * 工时信息
     */
    workitemTime: {
        /**
         * 工作项id，唯一标识
         * @example `5daa9a15c7fd55523996......`
         */
        workitemIdentifier: string;
        /**
         * 工时唯一标识
         * @example `a4ac3a81e90217db32b7......`
         */
        identifier: string;
        /**
         * 开始时间
         * @example `1653235200000`
         */
        gmtStart: number;
        /**
         * 结束时间
         * @example `1653235200000`
         */
        gmtEnd: number;
        /**
         * 实际工时，精度到小数点后一位
         * @example `1`
         */
        actualTime: number;
        /**
         * 工时类型，如设计、研发、测试、文档、其他
         * @example `研发`
         */
        type: string;
        /**
         * 工时描述信息
         * @example `开发代码等`
         */
        description: string;
        /**
         * 登记人的account Id
         * @example `1967043931......`
         */
        recordUser: string;
        /**
         * 工时记录的创建时间
         * @example `1653235200000`
         */
        gmtCreate: number;
        /**
         * 工时记录的修改时间
         * @example `1653235200000`
         */
        gmtModified: number;
    }[];
    /**
     * 接口返回code
     * @example `200`
     */
    code: number;
}
