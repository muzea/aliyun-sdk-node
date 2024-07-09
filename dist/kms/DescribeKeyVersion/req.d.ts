export interface DescribeKeyVersionRequest {
    /**
     * 密钥的ID，也可以指定为密钥别名或密钥资源名称（ARN）。关于别名的详细介绍，请参见[管理密钥别名](~~480655~~)。
     * >访问其他阿里云账号下的密钥时，必须输入密钥ARN。密钥ARN的格式为`acs:kms:${region}:${account}:key/${keyid}`。
     * @example `key-hzz630494463ejqjx****`
     */
    "KeyId": string;
    /**
     * 密钥版本的全局唯一标识符。
     * 您可以调用[ListKeyVersions](~~133966~~)接口，获取KeyVersionId。
     * @example `2ab1a983-7072-4bbc-a582-584b5bd8****`
     */
    "KeyVersionId": string;
}
