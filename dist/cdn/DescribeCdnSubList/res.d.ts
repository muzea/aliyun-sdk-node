export interface DescribeCdnSubListResponse {
    /**
     * 已定制的报表任务。
     * @example `{"RequestId":"3250A51D-C11D-46BA-B6B3-95348EEDE652","Description":"成功","Content":{"data":[{"subId":5,"reportId":[1,2,3],"createTime":"2020-09-25T09:39:33Z","domains"["www.example.com","www.example.com"],"effectiveFrom":"2020-09-17T00:00:00Z","effectiveEnd":"2020-11-17T00:00:00Z","status":"enable"}]}}`
     */
    Content: string;
    /**
     * 请求ID。
     * @example `3250A51D-C11D-46BA-B6B3-95348EEDE652`
     */
    RequestId: string;
}
