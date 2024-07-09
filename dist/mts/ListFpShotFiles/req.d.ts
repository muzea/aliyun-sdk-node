export interface ListFpShotFilesRequest {
    /**
     * 分页查询。请求第一页时，NextPageToken为空；请求后续文件时需传入前一页查询结果中的NextPageToken值。
     * @example `ae0fd49c0840e14daf0d66a75b83****`
     */
    "NextPageToken"?: string;
    /**
     * 单页数据个数，默认为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 需要查询的DNA库ID。可以从[提交新建DNA库](~~170149~~)的返回参数中获取。
     * @example `2288c6ca184c0e47098a5b665e2a12****`
     */
    "FpDBId": string;
    /**
     * 入库时间范围开始时间。日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为`YYYY-MM-DDThh:mm:ssZ`。
     * > 此参数支持使用的地域为华北2（北京）、华东1（杭州）、华东2（上海），暂不支持亚太东南1（新加坡）地域使用。
     * @example `2022-09-01T00:00:28Z`
     */
    "StartTime"?: string;
    /**
     * 入库时间范围结束时间。日期格式按照ISO8601标准表示，并需要使用UTC时间。格式为`YYYY-MM-DDThh:mm:ssZ`。
     * > 此参数支持使用的地域为华北2（北京）、华东1（杭州）、华东2（上海），暂不支持亚太东南1（新加坡）地域使用。
     * @example `2022-09-08T23:32:56Z`
     */
    "EndTime"?: string;
}
