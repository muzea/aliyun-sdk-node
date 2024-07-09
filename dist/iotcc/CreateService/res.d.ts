export interface CreateServiceResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 系统为分应用统计服务生成的ID，全网唯一。
     * @example `c910061f-****-44e6-b659-***c`
     */
    ServiceId: string;
}
