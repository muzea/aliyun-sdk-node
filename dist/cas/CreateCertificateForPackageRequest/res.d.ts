export interface CreateCertificateForPackageRequestResponse {
    /**
     * 本次证书申请订单的ID。
     * > 后续您可以使用该ID查询证书申请订单的状态，具体操作，请参见[DescribeCertificateState](~~455800~~)。
     * @example `2021010`
     */
    OrderId: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5890029B-938A-589E-98B9-3DEC7BA7C400`
     */
    RequestId: string;
}
