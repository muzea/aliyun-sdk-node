export interface ListDNAFilesRequest {
    /**
     * 分页查询。请求第一页时，NextPageToken为空；请求后续文件时需传入前一页查询结果中的NextPageToken值。
     * @example `ae0fd49c0840e14daf0d66a75b83****`
     */
    "NextPageToken"?: string;
    /**
     * 单页数据个数，默认为20，最大100。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * DNA库Id。
     * @example `2288c6ca184c0e47098a5b665e2a12****`
     */
    "DBId": string;
}
