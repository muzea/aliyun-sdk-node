export interface DeleteCertificateRequestRequest {
    /**
     * 要删除的证书申请订单的ID。
     * > 证书订单ID一般是通过调用[CreateCertificateForPackageRequest](~~455296~~)、[CreateCertificateRequest](~~455292~~)或[CreateCertificateWithCsrRequest](~~455801~~)接口返回的证书申请订单ID（即**OrderId**）。此ID可通过调用[ListUserCertificateOrder](~~455804~~)获取。
     * @example `123451222`
     */
    "OrderId": number;
}
