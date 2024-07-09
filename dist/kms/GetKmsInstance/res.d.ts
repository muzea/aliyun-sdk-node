export interface GetKmsInstanceResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `46b4a94a-57d2-44b4-9810-1e87d31abb33`
     */
    RequestId: string;
    /**
     * KMS实例详情。
     */
    KmsInstance: {
        /**
         * KMS实例的ID。
         * @example `kst-bjj62f5ba3dnpb6v8****`
         */
        InstanceId: string;
        /**
         * KMS实例的名称。
         * @example `kst-bjj62f5ba3dnpb6v8****`
         */
        InstanceName: string;
        /**
         * KMS实例的状态。取值：
         * - Uninitialized：未启用
         * - Connecting：连接中
         * - Connected：已启用
         * - Disconnected：已断开
         * - Error：状态异常
         * @example `Connected`
         */
        Status: string;
        /**
         * KMS实例创建的时间。
         * @example `2023-09-05T12:44:20Z`
         */
        CreateTime: string;
        /**
         * KMS实例的计算性能。
         * @example `1000`
         */
        Spec: number;
        /**
         * KMS实例支持创建的密钥数量。
         * @example `1000`
         */
        KeyNum: number;
        /**
         * KMS实例支持创建的凭据数量。
         * @example `10`
         */
        SecretNum: string;
        /**
         * KMS实例的访问管理总量。
         * @example `5`
         */
        VpcNum: number;
        /**
         * KMS实例绑定的VPC。
         * @example `vpc-bp19z7cwmltad5dff****`
         */
        VpcId: string;
        /**
         * KMS实例绑定的可用区。
         * @example `"cn-hangzhou-k",       "cn-hangzhou-j"`
         */
        ZoneIds: string;
        /**
         * KMS实例绑定的VPC中的交换机。
         * @example `vsw-bp1i512amda6d10a0****`
         */
        VswitchIds: string;
        /**
         * KMS实例的到期时间。
         * @example `2023-10-05T16:00:00Z`
         */
        EndDate: string;
        /**
         * KMS实例启用的时间。
         * @example `2023-09-05T12:44:19Z`
         */
        StartDate: string;
        /**
         * KMS实例的CA证书的内容。
         * @example `-----BEGIN CERTIFICATE-----\r\nMIIDuzCCAqOgAwIBAgIJALTKwWAjvbMiMA0GCSqGSIb3DQEBCwUAMHQxCzAJBgNV****-----END CERTIFICATE-----`
         */
        CaCertificateChainPem: string;
        BindVpcs: {
            /**
             * 配置的VPC列表。
             * >如果您的自建应用部署在同地域的多个VPC中，除了KMS实例所属的VPC（即启用KMS实例时设置的VPC）外，您还可以将其他VPC配置到KMS实例中，这些VPC可以属于同一个阿里云账号，也可以属于不同阿里云账号。配置完成后，在这些VPC中的自建应用即可以访问指定的KMS实例。
             */
            BindVpc: {
                /**
                 * VPC所属的地域。
                 * @example `cn-hangzhou`
                 */
                RegionId: string;
                /**
                 * VPC的ID。
                 * @example `vpc-bp19z7djuhtad5dff****`
                 */
                VpcId: string;
                /**
                 * VPC所属的阿里云账号。
                 * @example `190325303126****`
                 */
                VpcOwnerId: string;
                /**
                 * VPC下的交换机。
                 * @example `vsw-bp1i512amhdje10f1****`
                 */
                VSwitchId: string;
            }[];
        };
    };
}
