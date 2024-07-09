export interface UpdateK8sSecretRequest {
    /**
     * 集群ID。
     * @example `9c28bbb9-****-44b3-b953-54ef8a2d0be2`
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
     * 证书ID。
     * @example `6650277`
     */
    "CertId"?: string;
    /**
     * 证书所在地域。
     * @example `cn-hangzhou`
     */
    "CertRegionId"?: string;
    /**
     * 数据部分是否已经经过Base64编码。
     * @example `false`
     */
    "Base64Encoded"?: boolean;
}
