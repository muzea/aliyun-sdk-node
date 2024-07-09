export interface DeleteK8sAccessInfoResponse {
    /**
     * 处理结果。取值：
     * - **true**：成功
     * - **false**：失败
     * @example `true`
     */
    Data: boolean;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `C5338DE5-5D80-51A1-B330-98300AFB80E9`
     */
    RequestId: string;
}
