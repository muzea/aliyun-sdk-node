export interface BatchSubmitReviewInfoRequest {
    /**
     * 入参JSON，具体参考请求参数补充说明。
     * @example `{"isSchemeData":1,"schemeTaskConfigId":334,"sourceDataType":2,"startTime":"2022-08-25 00:00:00","endTime":"2022-09-23 23:59:59","sessionList":[{"taskId":"20220831-F8D7F4DF-0A16-1A1C-BA63-28F203922692","fileId":"20220831-164343"},{"taskId":"20220831-F2A50A72-82C4-1E3F-A1FD-52A662283D25","fileId":"20220831-164343"}]}`
     */
    "jsonStr"?: string;
    /**
     * 业务空间Id
     */
    "BaseMeAgentId"?: number;
}
