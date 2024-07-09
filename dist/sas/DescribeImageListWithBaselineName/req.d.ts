export interface DescribeImageListWithBaselineNameRequest {
    /**
     * 镜像检查基线结果的名称。
     * @example `ak_leak`
     */
    "BaselineNameKey": string;
    /**
     * 基线的查询条件。
     * @example `Unauthorized access`
     */
    "Criteria"?: string;
    /**
     * 基线的查询类型。取值：
     * - **BaselineNameAlias**：基线名称
     * - **BaselineClassAlias**：基线分类
     * @example `BaselineNameAlias`
     */
    "CriteriaType"?: string;
    /**
     * 镜像仓库的实例ID。
     * @example `i-qewqrqcsadf****`
     */
    "RepoInstanceId"?: string;
    /**
     * 镜像仓库的名称。
     * @example `libssh2`
     */
    "RepoName"?: string;
    /**
     * 镜像仓库的命名空间。
     * @example `libssh2`
     */
    "RepoNamespace"?: string;
    /**
     * 镜像摘要的SHA256值。
     * @example `2e6daffce524ffeae66cccaa90c8fc47de912346dcec295c27395b6d66db6423`
     */
    "ImageDigest"?: string;
    /**
     * 设置分页查询时，每页显示的镜像基线检查结果详情的数量。默认值为**10**，表示每页显示10条镜像基线检查结果详情。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `cc20a1024011c44b6a8710d6f8b****`
     */
    "ClusterId"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
    /**
     * 容器编号。
     * @example `c08d5fc1a329a4b88950a253d082f****`
     */
    "ContainerId"?: string;
    /**
     * 集群名称。
     * @example `docker-law`
     */
    "ClusterName"?: string;
    /**
     * 容器组。
     * @example `22222-7xsqq`
     */
    "Pod"?: string;
    /**
     * 命名空间。
     * @example `test-002`
     */
    "Namespace"?: string;
    /**
     * 容器镜像名称。
     * @example `registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****`
     */
    "Image"?: string;
}
