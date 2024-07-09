export interface DeployK8sApplicationResponse {
    /**
     * 变更流程ID，可调用GetChangeOrderInfo接口获取，详情请参见[GetChangeOrderInfo](~~62072~~)。
     * @example `cd65b247-****-475b-ad4b-7039040d625c`
     */
    ChangeOrderId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息 。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `a5281053-08e4-47a5-b2ab-5c0323de*****`
     */
    RequestId: string;
}
