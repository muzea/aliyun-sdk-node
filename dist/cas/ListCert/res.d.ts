export interface ListCertResponse {
    /**
     * 分页，每页展示数据大小，默认50条。
     * @example `50`
     */
    ShowSize: number;
    /**
     * 分页。当前页，默认1。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页，总数据。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 证书列表。
     */
    CertList: {
        /**
         * 仓库ID.
         * @example `2`
         */
        WhId: number;
        /**
         * 证书识别码。
         * @example `14dcc8afc7578e`
         */
        Identifier: string;
        /**
         * 仓库实例。
         * @example `test_whInstanceId`
         */
        WhInstanceId: string;
        /**
         * 证书状态，取值：
         * - **ISSUE**：已签发
         * - **REVOKE**： 吊销
         * @example `ISSUE`
         */
        Status: string;
        /**
         * 证书来源，取值：
         * - **upload**：上传证书
         * - **aliyun**：阿里云证书
         * @example `aliyun`
         */
        SourceType: string;
        /**
         * 证书的类型 。取值：
         * - **CA**：表示CA证书。
         * - **CERT**：表示签发的证书。
         * @example `CERT`
         */
        CertType: string;
        /**
         * 域名。
         * @example `aliyun.alibaba.com`
         */
        CommonName: string;
        /**
         * 签发时间。使用时间戳格式，单位为毫秒。
         * @example `1665819958000`
         */
        BeforeDate: number;
        /**
         * 签发者。
         * @example `mySSL`
         */
        Issuer: string;
        /**
         * 到期时间。使用时间戳格式，单位为毫秒。
         * @example `1634283958000`
         */
        AfterDate: number;
        /**
         * 证书是否存在私钥。取值：
         * - **true**
         * - **false**
         * @example `false`
         */
        ExistPrivateKey: boolean;
        /**
         * 证书绑定的所有域名。多个域名之间使用半角逗号（,）分隔。
         * @example `*.alibaba.com,aliyun.alibaba.com`
         */
        Sans: string;
    }[];
    /**
     * 请求ID。
     * @example `15C66C7B-671A-4297-9187-2C4477247A74`
     */
    RequestId: string;
}
