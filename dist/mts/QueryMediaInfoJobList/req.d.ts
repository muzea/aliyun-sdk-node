export interface QueryMediaInfoJobListRequest {
    /**
     * 媒体信息作业ID。
     * - 一次最多查询10个，使用半角逗号（,）分隔。
     * - 可以从[提交媒体信息作业](~~602827~~)的返回参数中获取。
     * > 如果不传入此参数，则会返回**InvalidParameter**（参数无效）错误码。
     * @example `23ca1d184c0e4341e5b665e2a12****`
     */
    "MediaInfoJobIds": string;
}
