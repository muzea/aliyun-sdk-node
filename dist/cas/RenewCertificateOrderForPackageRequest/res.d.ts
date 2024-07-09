export interface RenewCertificateOrderForPackageRequestResponse {
    /**
     * 本次证书申请（续费）订单的ID。
     * > 后续您可以使用该ID查询证书申请订单的状态，具体操作，请参见[DescribeCertificateState](~~455800~~)。
     * @example `323451222`
     */
    OrderId: number;
    /**
     * 本次请求的ID。
     * @example `082FAB35-6AB9-4FD5-8750-D36673548E76`
     */
    RequestId: string;
}
