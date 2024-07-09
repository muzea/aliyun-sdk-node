export interface CallBackThirdRightSendPlanResponse {
    /**
     * 返回结果 true/false
     */
    RetValue: boolean;
    /**
     * 错误信息
     * @example `系统异常`
     */
    RetMsg: string;
    /**
     * 错误状态码
     * @example `400`
     */
    RetCode: string;
    /**
     * 请求id
     * @example `908FA068-529C-0C20-8DB5-63B0EF7CFF1F`
     */
    requestId: string;
}
