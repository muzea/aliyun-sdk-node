export interface DescribeImageGroupedVulListRequest {
    /**
     * 要查询的漏洞的类型。取值：
     * - **cve**：镜像系统漏洞
     * - **sca**：镜像应用漏洞
     * @example `cve`
     */
    "Type"?: string;
    /**
     * 资产分组ID。
     * @example `1311`
     */
    "GroupId"?: string;
    /**
     * 漏洞的CVE编号。
     * @example `CVE-2017-15420`
     */
    "CveId"?: string;
    /**
     * 资产实例的唯一标识ID列表，多个ID用英文逗号（,）分隔。
     * @example `uuid-13134124****`
     */
    "Uuids"?: string;
    /**
     * 漏洞的名称。
     * @example `debian:10:CVE-2019-9893`
     */
    "Name"?: string;
    /**
     * 漏洞的别名。
     * @example `High severity vulnerability that affects org.eclipse.jetty:jetty-server`
     */
    "AliasName"?: string;
    /**
     * 漏洞补丁的ID。
     * @example `1341512412`
     */
    "PatchId"?: number;
    /**
     * 漏洞修复的必要性等级。取值：
     * - **asap**：需尽快修复（通常是高危漏洞）
     * - **later**：可延后修复（通常是中危漏洞）
     * - **nntf**：暂可不修复（通常是低危漏洞）
     * @example `asap`
     */
    "Necessity"?: string;
    /**
     * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 设置分页查询时，每页显示的镜像漏洞的数量。默认值为**20**，表示每页显示20条镜像漏洞。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 镜像仓库的地域ID。
     * @example `cn-hangzhou`
     */
    "RepoRegionId"?: string;
    /**
     * 镜像仓库的实例ID。
     * @example `i-qewqrqcsadf****`
     */
    "RepoInstanceId"?: string;
    /**
     * 镜像仓库的ID。
     * @example `qew****`
     */
    "RepoId"?: string;
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
     * 镜像的标签。
     * @example `oval`
     */
    "ImageTag"?: string;
    /**
     * 镜像摘要的SHA256值。
     * @example `w213412341dfsfasdfafadfasfasf`
     */
    "ImageDigest"?: string;
    /**
     * 镜像的层级。
     * @example `b1f5b9420803ad0657cf21566e3e20acc08581e7f22991249ef3aa80b8b1c587`
     */
    "ImageLayer"?: string;
    /**
     * 请求和接收消息的语言类型，默认值**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 是否要查询最新镜像的漏洞，不设置该参数表示查询所有镜像的漏洞。取值：
     * - **0**：否
     * - **1**：是
     * @example `0`
     */
    "IsLatest"?: number;
    /**
     * 指定要查询的容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c60b77fe62093480db6164a3c2fa5****`
     */
    "ClusterId"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
}
