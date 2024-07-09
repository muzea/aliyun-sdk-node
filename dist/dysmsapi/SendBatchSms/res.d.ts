export interface SendBatchSmsResponse {
    /**
     * 请求状态码。
     * - 返回OK代表请求成功。
     * - 其他错误码，请参见[错误码列表](~~101346~~)。
     * @example `OK`
     */
    Code: string;
    /**
     * 是否调用接口成功的描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 发送回执ID。
     * - 根据该ID在接口[QuerySendDetails](~~102352~~)中查询具体的发送状态。
     * - 登录[短信服务控制台](https://dysms.console.aliyun.com/dysms.htm#/overview)，在**业务统计**-**发送记录查询**页面查看发送详情。
     * @example `9006197469364984400`
     */
    BizId: string;
    /**
     * 请求ID。
     * @example `F655A8D5-B967-440B-8683-DAD6FF8D230E`
     */
    RequestId: string;
}
