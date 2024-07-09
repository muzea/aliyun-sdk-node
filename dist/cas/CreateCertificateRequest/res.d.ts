export interface CreateCertificateRequestResponse {
    /**
     * 本次证书申请订单的ID。
     * > 后续您可以使用该ID查询证书申请订单的状态，具体操作，请参见[DescribeCertificateState](~~455800~~)。
     * @example `98987582437920968`
     */
    OrderId: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D`
     */
    RequestId: string;
}
