export interface ListJobsResponse {
    /**
     * 请求ID。
     * @example `CBC799F0-AS7S-1D30-8A4F-882ED4DD****`
     */
    requestId: string;
    /**
     * 表示业务请求是否成功。
     * @example `true`
     */
    success: boolean;
    /**
     * 固定值200。
     * @example `200`
     */
    httpCode: number;
    /**
     * - 当success为false，返回业务错误码；
     *
     * - 当success为true，返回空值。
     * @example `""`
     */
    errorCode: string;
    /**
     * - 当success为false，返回业务错误信息；
     * - 当success为true，返回空值。
     * @example `""`
     */
    errorMessage: string;
    /**
     * 分页参数，页码索引，表示所请求页码。
     * @example `1`
     */
    pageIndex: number;
    /**
     * 分页参数，表示所请求页码元素数量。
     * @example `10`
     */
    pageSize: number;
    /**
     * 满足查询条件的所有元素的数量。
     * @example `1`
     */
    totalSize: number;
    /**
     * - 当success为true，返回所有满足条件的实例信息；
     * - 当success为false，返回空值。
     */
    data: any[];
}
