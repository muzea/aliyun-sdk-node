export interface TagResourceRequest {
    /**
     * 密钥的ID，也可以指定为密钥别名或密钥资源名称（ARN）。关于别名的详细介绍，请参见[管理密钥别名](~~480655~~)。
     * >- 访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * - KeyId、SecretName和CertificateId必须且只能指定其中一个参数。
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId"?: string;
    /**
     * 一个或多个标签。格式为Tag对象数组。
     * Tag对象属性如下：
     * - TagKey：标签键。
     * - TagValue：标签值。
     * @example `[{"TagKey":"S1key1","TagValue":"S1val1"},{"TagKey":"S1key2","TagValue":"S2val2"}]`
     */
    "Tags": string;
    /**
     * 凭据名称。
     * > KeyId、SecretName和CertificateId必须且只能指定其中一个参数。
     * @example `MyDbC****`
     */
    "SecretName"?: string;
    /**
     * 证书ID。
     * > KeyId、SecretName和CertificateId必须且只能指定其中一个参数。
     * @example `770dbe42-e146-43d1-a55a-1355db86****`
     */
    "CertificateId"?: string;
}
