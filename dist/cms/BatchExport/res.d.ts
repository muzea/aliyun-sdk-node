export interface BatchExportResponse {
    /**
     * 返回信息。
     * @example `success`
     */
    Message: string;
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 请求ID。
     * @example `251402CD-305C-1617-808E-D8C11FC8138D`
     */
    RequestId: string;
    /**
     * 用于再次调用本接口。
     * > 如果返回结果为`null`，则说明监控数据导出完成。
     * @example `v2.5eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0ODAwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQzMjdhNjU2MjY3N2E2NjZhNzczOTY2NmM3Mjc0NjM3MzY5Njg3NDcyMjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2MH0***`
     */
    Cursor: string;
    /**
     * 本次调用数据返回的条数。
     * @example `1000`
     */
    Length: number;
    /**
     * 后端请求数据的时间戳。时间戳越大，表示导出数据越靠近当前时间。
     * @example `1678781819000`
     */
    Anchor: number;
    /**
     * 数据是否已完成导出。取值：
     * - true：部分数据未完成导出。
     * - false：数据已完成导出。
     * @example `true`
     */
    HasNext: boolean;
    /**
     * 当前调用的返回数据。
     */
    DataResults: any[];
}
