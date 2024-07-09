export interface DeleteK8sConfigMapRequest {
    /**
     * 集群ID。
     * @example `51e37e91-6403-423a-9913-f236aa7a6a50`
     */
    "ClusterId": string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 配置项名称，必须以字母开头，支持数字、字母和短划线（-），最多支持63个字符。
     * @example `my-configmap`
     */
    "Name": string;
}
