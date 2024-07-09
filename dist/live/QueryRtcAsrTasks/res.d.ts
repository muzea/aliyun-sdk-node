export interface QueryRtcAsrTasksResponse {
    /**
     * 结果描述，为success时成功，失败则返回错误信息。
     * @example `success`
     */
    Description: string;
    /**
     * 网关请求ID。
     * @example `D8ADAB55-1BB8-5C01-8434-C45D353BB1FD`
     */
    RequestId: string;
    /**
     * 状态码。返回2000表示成功，返回其他表示异常。
     * @example `2000`
     */
    RetCode: number;
    /**
     * Task结果集合。
     */
    Tasks: any;
}
