export interface QueryRingDetailListResponse {
    /**
     * 错误描述
     * @example `xxxx`
     */
    Message: string;
    /**
     * 请求ID，用于跟踪错误原因
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 呼损数据信息
     * @example `{"buId": 0,"gmtModified": "2021-03-08T11:10Z","lstVisitCnt": 3,"fromPhoneNum": "130196","gmtCreate": "2021-03-08T09:52Z","uniqueBizId": "13019651928","toPhoneNum": "057126","dateId": "20210308","lstVisitTime": "2021-03-08 10:17:48", "id":555555 ,  "callOutStatus": "4" }`
     */
    Data: string;
    /**
     * 错误编码
     * @example `Success`
     */
    Code: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    HttpStatusCode: number;
}
