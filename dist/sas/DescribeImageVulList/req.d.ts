export interface DescribeImageVulListRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的漏洞的类型。固定取值为**cve**，表示查询容器镜像漏洞。
     * @example `cve`
     */
    "Type": string;
    /**
     * 资产实例的UUID列表。多个UUID之间使用半角逗号（,）分隔。
     * @example `0004a32a0305a7f6ab5ff9600d47****`
     */
    "Uuids"?: string;
    /**
     * 要查询的漏洞的名称。
     * @example `debian:10:CVE-2019-9893`
     */
    "Name"?: string;
    /**
     * 要查询的漏洞的别名。
     * @example `High severity vulnerability that affects org.eclipse.jetty:jetty-server`
     */
    "AliasName"?: string;
    /**
     * 漏洞的修复状态。取值：
     * - **1**：未修复
     * - **4**：修复中
     * - **7**：修复成功
     * @example `1`
     */
    "StatusList"?: string;
    /**
     * 漏洞修复必要性等级。取值：
     * - **asap**：需尽快修复（通常是高危漏洞）
     * - **later**：可延后修复（通常是中危漏洞）
     * - **nntf**：暂可不修复（通常是低危漏洞）
     * @example `asap`
     */
    "Necessity"?: string;
    /**
     * 漏洞是否已处理。取值：
     * - **y**：已处理
     * - **n**：未处理
     * @example `y`
     */
    "Dealed"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的漏洞的数量。默认值为**10**，表示每页显示10条漏洞。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 容器镜像仓库的地域ID。
     * @example `cn-hangzhou`
     */
    "RepoRegionId"?: string;
    /**
     * 容器镜像仓库实例ID。
     * @example `i-qewqrqcsadf****`
     */
    "RepoInstanceId"?: string;
    /**
     * 容器镜像仓库ID。
     * @example `qew****`
     */
    "RepoId"?: string;
    /**
     * 容器镜像仓库的名称。
     * @example `libssh2`
     */
    "RepoName"?: string;
    /**
     * 容器镜像仓库的命名空间。
     * @example `libssh2`
     */
    "RepoNamespace"?: string;
    /**
     * 实例所在的地域的ID。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 资产实例的ID。
     * @example `1-qeqewqw****`
     */
    "InstanceId"?: string;
    /**
     * 容器镜像的标签。
     * @example `oval`
     */
    "Tag"?: string;
    /**
     * 容器镜像的唯一标识。
     * @example `8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d507012`
     */
    "Digest"?: string;
    /**
     * 容器集群的ID。
     * @example `cc20a1024011c44b6a8710d6f8b****`
     */
    "ClusterId"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
    /**
     * 集群名称。
     * @example `docker-law
    `
     */
    "ClusterName"?: string;
    /**
     * 容器编号。
     * @example `c08d5fc1a329a4b88950a253d082f****
    `
     */
    "ContainerId"?: string;
    /**
     * 容器组。
     * @example `22222-7xsqq
    `
     */
    "Pod"?: string;
    /**
     * 命名空间。
     * @example `test-002
    `
     */
    "Namespace"?: string;
    /**
     * 容器镜像名称。
     * @example `registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****
    `
     */
    "Image"?: string;
}
