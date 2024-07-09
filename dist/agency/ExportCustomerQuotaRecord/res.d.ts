export interface ExportCustomerQuotaRecordResponse {
    /**
     * Id of the request
     * @example `210bc4b416874189683843905d9f9a`
     */
    RequestId: string;
    /**
     * 描述
     * @example `SUCCESS`
     */
    Msg: string;
    /**
     * code
     * @example `200`
     */
    Code: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 导出任务id
         * @example `1231`
         */
        Id: number;
        /**
         * 预估耗时，单位分钟
         * @example `1`
         */
        Cost: number;
    };
}
