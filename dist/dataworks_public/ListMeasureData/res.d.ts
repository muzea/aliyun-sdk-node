export interface ListMeasureDataResponse {
    /**
     * 请求 ID。
     * @example `1AFAE64E-D1BE-432B-A9****`
     */
    RequestId: string;
    /**
     * 查询计量结果。
     */
    MeasureDatas: {
        /**
         * 计量项。
         * @example `DideAlarmPhone`
         */
        DomainCode: string;
        /**
         * 计量组件。
         * @example `Count`
         */
        ComponentCode: string;
        /**
         * 计量周期开始时间戳(毫秒)。
         * @example `1717344000000`
         */
        StartTime: number;
        /**
         * 计量周期结束时间戳(毫秒)。
         * @example `1717430400000`
         */
        EndTime: number;
        /**
         * 计量周期内使用总量。
         * @example `10`
         */
        Usage: number;
    }[];
    /**
     * 请求是否成功，取值如下：
     * - true：请求成功。
     * - false：请求失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求错误码。
     * @example `100001001`
     */
    ErrorCode: string;
    /**
     * 请求报错信息。
     * @example `The user is not in tenant.`
     */
    ErrorMessage: string;
    /**
     * 请求返回码。
     * @example `200`
     */
    HttpStatusCode: number;
}
