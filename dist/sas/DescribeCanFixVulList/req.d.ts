export interface DescribeCanFixVulListRequest {
    /**
     * 漏洞类型。取值包括：
     * - **cve**：系统漏洞
     * - **sca**：应用漏洞
     * @example `cve`
     */
    "Type": string;
    /**
     * 镜像的UUID。多个UUID使用半角逗号（,）分隔。
     * @example `d15df12472809c1c3b158606c0f1****`
     */
    "Uuids"?: string;
    /**
     * 漏洞的名称。
     * @example `scan:AVD-2022-953356`
     */
    "Name"?: string;
    /**
     * 漏洞公告中的别名。
     * @example `RHSA-2017:0184-Important: mysql security update`
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
     * 要查询的漏洞修复必要性等级。多个等级之间使用半角逗号（,）分隔。取值：
     * - **asap**：高
     * - **later**：中
     * - **nntf**：低
     * @example `asap,later,nntf`
     */
    "Necessity"?: string;
    /**
     * 漏洞是否处理。取值：
     * **y**：已处理
     * **n**：未处理
     * @example `n`
     */
    "Dealed"?: string;
    /**
     * 分页查询时，显示的当前页的页码。起始值为1，默认值为1。
     * @example `1`
     */
    "CurrentPage"?: number;
    /**
     * 分页查询时，显示每页数据的最大条数。默认值为20。
     * @example `20`
     */
    "PageSize"?: number;
    /**
     * 镜像仓库的地域ID。取值：
     * - **cn-beijing**：华北2（北京）
     * - **cn-zhangjiakou**：华北3（张家口）
     * - **cn-hangzhou**：华东1（杭州）
     * - **cn-shanghai**：华东2（上海）
     * - **cn-shenzhen**：华南1（深圳）
     * - **cn-hongkong**：中国香港
     * - **ap-southeast-1**：新加坡
     * - **ap-southeast-5**：印度尼西亚（雅加达）
     * - **us-east-1**：美国（弗吉尼亚）
     * - **us-west-1**：美国（硅谷）
     * - **eu-central-1**：德国（法兰克福）
     * - **eu-west-1**：英国（伦敦）
     * - **ap-south-1**：印度（孟买）
     * @example `cn-hangzhou`
     */
    "RepoRegionId"?: string;
    /**
     * 指定容器镜像实例ID。
     * > 调用容器镜像服务的[ListRepository](~~451339~~)接口，通过返回参数**InstanceId**的值可以获取容器镜像实例ID。
     * @example `cri-rv4nvbv8iju4****`
     */
    "RepoInstanceId"?: string;
    /**
     * 镜像仓库ID。
     * > 调用容器镜像服务的[ListRepository](~~145293~~)接口，通过返回参数**RepoId**的值可以获取镜像仓库ID。
     * @example `crr-avo7qp02simz2njo`
     */
    "RepoId"?: string;
    /**
     * 镜像仓库名称。
     * > 支持模糊搜索。
     * @example `digital-account`
     */
    "RepoName"?: string;
    /**
     * 指定镜像仓库命名空间名称。
     * > 支持模糊查询。
     * @example `ns-digital-dev`
     */
    "RepoNamespace"?: string;
    /**
     * 镜像仓库的地域ID。取值：
     * - **cn-beijing**：华北2（北京）
     * - **cn-zhangjiakou**：华北3（张家口）
     * - **cn-hangzhou**：华东1（杭州）
     * - **cn-shanghai**：华东2（上海）
     * - **cn-shenzhen**：华南1（深圳）
     * - **cn-hongkong**：中国香港
     * - **ap-southeast-1**：新加坡
     * - **ap-southeast-5**：印度尼西亚（雅加达）
     * - **us-east-1**：美国（弗吉尼亚）
     * - **us-west-1**：美国（硅谷）
     * - **eu-central-1**：德国（法兰克福）
     * - **eu-west-1**：英国（伦敦）
     * - **ap-south-1**：印度（孟买）
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 指定容器镜像实例ID。
     * > 调用容器镜像服务的[ListRepository](~~451339~~)接口，通过返回参数**InstanceId**的值可以获取容器镜像实例ID。
     * @example `cri-rv4nvbv8iju4****`
     */
    "InstanceId"?: string;
    /**
     *  容器镜像的标签。
     * @example `0.1.0`
     */
    "Tag"?: string;
    /**
     *  容器镜像的唯一标识。
     * @example `8f0fbdb41d3d1ade4ffdf21558443f4c03342010563bb8c43ccc09594d50****`
     */
    "Digest"?: string;
    /**
     * 容器集群的ID。
     * > 您可以调用[DescribeGroupedContainerInstances](~~DescribeGroupedContainerInstances~~)接口获取该参数。
     * @example `c80f79959fd724a888e1187779b13****`
     */
    "ClusterId"?: string;
    /**
     * 扫描范围。取值：
     * - **image**：镜像。
     * - **container**：容器。
     */
    "ScanRange"?: string[];
    /**
     * 容器集群名称。
     * @example `sas-test-cnnf`
     */
    "ClusterName"?: string;
    /**
     * 容器ID。
     * @example `48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f92155709d5a****`
     */
    "ContainerId"?: string;
    /**
     * 容器组名称。
     * @example `22222-7xsqq
    `
     */
    "Pod"?: string;
    /**
     * 集群命名空间。
     * > 您可通过调用[GetOpaClusterNamespaceList](~~GetOpaClusterNamespaceList~~)接口查询该值。
     * @example `default`
     */
    "Namespace"?: string;
    /**
     * 容器镜像名称。
     * @example `registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-****
    `
     */
    "Image"?: string;
}
