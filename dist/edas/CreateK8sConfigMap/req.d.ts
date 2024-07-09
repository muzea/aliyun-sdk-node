export interface CreateK8sConfigMapRequest {
    /**
     * 集群ID。
     * @example `b07c8192-****-adf4f7447720`
     */
    "ClusterId"?: string;
    /**
     * K8s集群命名空间。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 配置项名称，必须以字母开头，支持数字、字母和短划线（-），最多支持63个字符。
     * @example `my-configmap`
     */
    "Name"?: string;
    /**
     * 配置项数据， 为JSON数组字符串。
     * @example `[{"Key":"name","Value":"william"},{"Key":"age","Value":"12"}]`
     */
    "Data"?: string;
}
