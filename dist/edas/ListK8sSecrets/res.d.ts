export interface ListK8sSecretsResponse {
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
     * @example `b197-40ab-9155-****`
     */
    RequestId: string;
    /**
     * K8s保密配置查询结果。
     */
    Result: {
        /**
         * 总记录数。
         * @example `6`
         */
        Total: number;
        /**
         * 保密配置列表。
         */
        Secrets: {
            /**
             * 保密配置类型，支持以下两种类型：
             * - Opaque：用户自定义数据类型。
             * - kubernetes.io/tls：TLS证书类型。
             * @example `Opaque`
             */
            Type: string;
            /**
             * 创建时间。格式为：<i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z（UTC时间）。
             * @example `2022-05-26T02:57:02Z`
             */
            CreationTime: string;
            /**
             * 集群名称。
             * @example `test-cluster`
             */
            ClusterName: string;
            /**
             * K8s集群命名空间。
             * @example `default`
             */
            Namespace: string;
            /**
             * 数据是否进过base64编码：
             * - true：已编码。
             * - false：未编码。
             * @example `false`
             */
            Base64Encoded: boolean;
            /**
             * 证书所属的区域。
             * @example `cn-hangzhou`
             */
            CertRegionId: string;
            /**
             * 阿里云证书服务的证书ID。
             * @example `123456`
             */
            CertId: string;
            /**
             * 保密配置名称，必须以字母开头，支持数字、字母和短划线（-），最多支持63个字符。
             * @example `my-secret`
             */
            Name: string;
            /**
             * EDAS集群ID。
             * @example `4472a6d3-f01d-4087-85a7-3dc52********`
             */
            ClusterId: string;
            /**
             * 关联的应用路由规则列表。
             */
            RelatedIngressRules: {
                /**
                 * 应用路由规则名称。
                 * @example `testrulename`
                 */
                Name: string;
                /**
                 * K8s命名空间。
                 * @example `default`
                 */
                Namespace: string;
                /**
                 * 应用路由关联应用列表。
                 */
                RelatedApps: {
                    /**
                     * EDAS应用名称。
                     * @example `app-test`
                     */
                    AppName: string;
                    /**
                     * 应用ID。
                     * @example `6dc74432-5a35-4e68-8aaa-3700********`
                     */
                    AppId: string;
                }[];
            }[];
            /**
             * 保密配置数据。
             */
            Data: {
                /**
                 * 用户自定义的secret键。
                 * @example `name`
                 */
                Key: string;
                /**
                 * 用户自定义的secret值。
                 * @example `william`
                 */
                Value: string;
            }[];
            /**
             * 使用了该保密配置的应用列表。
             */
            RelatedApps: {
                /**
                 * 应用名称。
                 * @example `my-app`
                 */
                AppName: string;
                /**
                 * 应用ID。
                 * @example `b08eeb18-8946-410c-a1ea-dbbc********`
                 */
                AppId: string;
            }[];
            /**
             * SSL证书详情。
             */
            CertDetail: {
                /**
                 * 证书结束时间。
                 * @example `2022-02-22T02:32:41Z`
                 */
                EndTime: string;
                /**
                 * 证书状态：
                 * - normal：有效证书。
                 * - invalid：无效证书。
                 * - expired：证书已过期。
                 * - not\_yet\_valid：尚未到生效时间。
                 * - about\_to\_expire：证书即将过期。
                 * @example `normal`
                 */
                Status: string;
                /**
                 * 证书生效时间。
                 * @example `2022-01-02T22:40:00Z`
                 */
                StartTime: string;
                /**
                 * 证书颁发机构。
                 * @example `CN=GlobalSign Root CA, OU=Root CA, O=GlobalSign nv-sa, C=BE`
                 */
                Issuer: string;
                /**
                 * SSL证书关联的域名列表。
                 */
                DomainNames: string[];
            };
        }[];
    };
}
