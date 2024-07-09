export interface DescribeDcdnSubListResponse {
    /**
     * 已定制的报表任务。
     * @example `"data": [{"subId": 336,"reportId": [6,8],"createTime": "2021-07-05T06:18:46Z","domains": ["example.com"],"effectiveFrom": "2021-07-05T06:18:46Z","effectiveEnd": "2021-10-05T06:18:46Z","status": "enable"}]`
     */
    Content: string;
    /**
     * 请求ID。
     * @example `3250A51D-C11D-46BA-B6B3-95348EEDE652`
     */
    RequestId: string;
}
