export interface ListDeploymentJobCertResponse {
    /**
     * 请求接口返回的数据。
     */
    Data: {
        /**
         * 证书ID。
         * @example `11174100`
         */
        CertId: number;
        /**
         * 证书订单ID。
         * >返回CertId后，则不会返回该参数。
         * @example `6127067`
         */
        OrderId: number;
        /**
         * 证书实例ID。
         * @example `cas-ivauto-2crxzi`
         */
        CertInstanceId: string;
        /**
         * 证书名称。
         * @example `cert-11488855`
         */
        CertName: string;
        /**
         * 证书公用名。
         * @example `example.com`
         */
        CommonName: string;
        /**
         * 证书SANs。
         */
        Sans: string[];
        /**
         * 证书公钥算法。
         * @example `RSA`
         */
        Algorithm: string;
        /**
         * 证书有效期开始时间（秒，时间戳格式）。
         * @example `1683625266108`
         */
        NotBeforeTime: number;
        /**
         * 证书有效期截止时间（秒，时间戳格式）。
         * @example `1683625266108`
         */
        NotAfterTime: number;
        /**
         * 证书申请月份。
         * @example `12`
         */
        Month: number;
        /**
         * 证书状态码。
         * - **payed**：已付款，待申请
         * - **checking**：审核中
         * - **checkedFail**：审核失败
         * - **revoked**：吊销
         * - **revokeChecking**：吊销审核中
         * - **issued**：已签发，不包含已经托管的签发证书、即将过期的证书、已经过期证书、上传等
         * - **trustee**：已签发的托管证书
         * - **upload**：上传证书，不包含即将过期和已经过期的证书
         * - **willExpired**：即将过期，包含控制台签发和上传证书
         * - **expired**：已经过期，包括签发和上传的证书
         * - **validity**：有效证书，包含所有未过期、未吊销证书
         * - **refund**：退款
         * - **closed**：关闭
         * @example `issued`
         */
        StatusCode: string;
        /**
         * 证书类型。
         * @example `DV`
         */
        CertType: string;
        /**
         * 证书订单类型。
         * - **upload**：上传证书
         * - **buy**：自购证书
         * - **free**：免费证书（仅中国站）
         * @example `buy`
         */
        CertOrderType: string;
        /**
         * 是否托管。
         * - **true**：已托管。
         * - **false**：未托管。
         * @example `true`
         */
        IsTrustee: boolean;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
}
