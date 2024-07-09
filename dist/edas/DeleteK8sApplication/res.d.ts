export interface DeleteK8sApplicationResponse {
    /**
     * 如果被删除应用有机器没有下线，或者SLB未解绑，此时会生成变更流程ID，并进行删除。调用GetChangeOrderInfo接口获取这次删除具体执行进展。根据Code判断是否删除成功。
     * @example `0a34531a-****-49dc-8e7f-0cbbbfa12cf0`
     */
    ChangeOrderId: string;
    /**
     * 接口状态或POP错误码。
     * @example `200`
     */
    Code: number;
    /**
     * 附加信息。
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `a5281053-08e4-47a5-b2ab-5c0323******`
     */
    RequestId: string;
}
