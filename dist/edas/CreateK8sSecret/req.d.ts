export interface CreateK8sSecretRequest {
    /**
     * 集群ID
     * @example `712082c3-****-****-9217-a947b5cde6ee`
     */
    "ClusterId"?: string;
    /**
     * 保密配置名称，必须以字母开头，支持数字、字母和短划线（-），最多支持63个字符。
     * @example `my-secret`
     */
    "Name"?: string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 保密配置类型，支持以下两种类型：
     * - Opaque：用户自定义数据类型
     * - kubernetes.io/tls：TLS证书类型
     * @example `Opaque`
     */
    "Type"?: string;
    /**
     * 保密配置数据，使用JSON数组表示，数组对象包括以下内容：
     * - Key：保密配置键
     * - Value：保密配置值
     * @example `[{"Key":"name","Value":"william"},{"Key":"age","Value":"12"}]`
     */
    "Data"?: string;
    /**
     * 阿里云证书服务的证书ID。
     * @example `6651483`
     */
    "CertId"?: string;
    /**
     * 证书所属的区域。
     * @example `cn-hangzhou`
     */
    "CertRegionId"?: string;
    /**
     * 数据是否进过base64编码，true - 已编码， false - 未编码。
     * @example `true`
     */
    "Base64Encoded"?: boolean;
}
