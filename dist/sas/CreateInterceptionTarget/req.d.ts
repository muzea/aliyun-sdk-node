export interface CreateInterceptionTargetRequest {
    /**
     * 拦截对象名称。
     * @example `test`
     */
    "TargetName": string;
    /**
     * 对象类型。取值：
     * - **IMAGE**：镜像
     * @example `IMAGE`
     */
    "TargetType": string;
    /**
     * 指定网络对象包含的命名空间。
     * @example `default`
     */
    "Namespace": string;
    /**
     * 指定网络对象包含的应用名称。
     * @example `frontend`
     */
    "AppName"?: string;
    /**
     * 指定网络对象包含的镜像列表。
     */
    "ImageList"?: string[];
    /**
     * 指定网络对象包含的标签列表。
     */
    "TagList"?: string[];
    /**
     * 集群ID。
     * @example `cc20a1024011c44b6a8710d6f8b****`
     */
    "ClusterId"?: string;
    /**
     * 集群名称。
     * @example `sas-test-cnnf`
     */
    "ClusterName"?: string;
}
