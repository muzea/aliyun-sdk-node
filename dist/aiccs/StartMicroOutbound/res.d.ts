export interface StartMicroOutboundResponse {
    /**
     * 发起创建时间
     * @example `2019-05-23 17:30:32.525`
     */
    InvokeCreateTime: string;
    /**
     * 请求ID。
     * @example `EE338D98-9BD3-4413-B165`
     */
    RequestId: string;
    /**
     * 状态码描述。
     * @example `OK`
     */
    Message: string;
    /**
     * 发起命令ID。
     * @example `8883f165-4a0d-4da2-a2d2`
     */
    InvokeCmdId: string;
    /**
     * 客户信息。
     * @example `{\"caseId\":2323****}`
     */
    CustomerInfo: string;
    /**
     * 状态码。返回200表示请求成功。
     * @example `200`
     */
    Code: string;
}
