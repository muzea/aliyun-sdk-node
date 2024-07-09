export interface DeleteK8sSecretRequest {
    /**
     * 集群ID。
     * @example `2b3a1013-31c7-433b-8fe7-3895d838b824`
     */
    "ClusterId": string;
    /**
     * 保密配置名称，必须以字母开头，支持数字、字母和短划线（-），最多支持63个字符。
     * @example `my-secret`
     */
    "Name": string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace": string;
}
