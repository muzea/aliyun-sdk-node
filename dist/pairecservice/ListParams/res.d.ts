export interface ListParamsResponse {
    /**
     * Id of the request
     * @example `A2D07551-38DA-531E-9B22-877D1D86A579`
     */
    RequestId: string;
    /**
     * 列表内元素总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 参数列表。
     */
    Params: {
        /**
         * 参数ID。
         * @example `4`
         */
        ParamId: string;
        /**
         * 参数名称。
         * @example `home`
         */
        Name: string;
        /**
         * 参数值。
         * @example `house`
         */
        Value: string;
        /**
         * 参数所属的环境。
         * ● Daily-日常环境
         * ● Prepub-预发环境
         * ● Product-生产环境
         * @example `Daily`
         */
        Environment: string;
        /**
         * 更新时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtModifiedTime: string;
    }[];
}
