export interface GetEnterpriseDingtalkGroupCustomerMemberResponse {
    /**
     * 接口请求的唯一ID, 每次调用requestID唯一
     * @example `12`
     */
    RequestId: string;
    /**
     * 调用接口返回是否成功, true代表调用正常
     * @example `true`
     */
    Success: boolean;
    /**
     * 错误信息, 当success=false的时候, 可以取到message
     * @example `Invalid data`
     */
    Message: string;
    /**
     * 接口请求结果返回码
     * @example `200`
     */
    Code: string;
    /**
     * 成员信息列表
     */
    Data: any;
}
