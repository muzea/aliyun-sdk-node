export interface DescribeCertificateStateRequest {
    /**
     * 要查询的证书申请订单的ID。
     * > 此ID可通过调用[ListUserCertificateOrder](~~455804~~)获取。
     * @example `123451222`
     */
    "OrderId": number;
}
