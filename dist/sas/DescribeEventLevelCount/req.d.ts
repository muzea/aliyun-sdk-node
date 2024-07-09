export interface DescribeEventLevelCountRequest {
    /**
     * 请求来源标识，固定为**sas**。
     * @example `sas`
     */
    "From"?: string;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c7e3c5b420a7947c2933303144688****`
     */
    "ClusterId"?: string;
    /**
     * 容器id。
     * @example `xxxxxx30389a10c28f6d38f2398f0dcexxxxxxx922b9e8290dc7c3019d4a8,48b87f2c0662e334820f436cb9133f1ae4e053d39b6fad42xxxxxxxxxx`
     */
    "ContainerIds"?: string;
    /**
     * 容器检索项。取值：
     * - **instanceId**：实例ID
     * - **appName**：应用名
     * - **clusterId**：集群ID
     * - **regionId**：地域
     * - **nodeName**：节点名
     * - **namespace**：命名空间
     * - **clusterName**：集群名称
     * - **image**：镜像名称
     * - **imageRepoName**：镜像的仓库名称
     * - **imageRepoNamespace**：镜像的仓库命名空间
     * - **imageRepoTag**：镜像的标签
     * - **imageDigest**：镜像摘要
     * @example `clusterId`
     */
    "ContainerFieldName"?: string;
    /**
     * 指定要查询的字段的值。存在多个值时，使用英文逗号（,）分隔。
     * @example `c951761046a9c4afe92be0a7b5bexxxxx`
     */
    "ContainerFieldValue"?: string;
    /**
     * 查询类型。取值：
     * - **containerId**：容器ID
     * - **uuid**：资产ID
     * @example `uuid`
     */
    "TargetType"?: string;
}
