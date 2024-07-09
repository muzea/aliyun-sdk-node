export interface GetRumOcuStatisticDataResponse {
    /**
     * Id of the request
     * @example `626037F5-FDEB-45B0-804C-B3C92797****`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 调用失败时返回的信息。
     * @example `内部错误，请联系客户人员。`
     */
    Message: string;
    /**
     * 返回结构体。
     */
    Data: {
        /**
         * 查询到的数据列表。
         */
        Items: any[];
        /**
         * 数据总条数。
         * @example `100`
         */
        Total: number;
        /**
         * 当前页。
         * @example `1`
         */
        Page: number;
        /**
         * 分页大小。
         * @example `100`
         */
        PageSize: number;
        /**
         * 是否还有下一页。
         * @example `true`
         */
        Complete: boolean;
    };
}
