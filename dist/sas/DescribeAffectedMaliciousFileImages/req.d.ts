export interface DescribeAffectedMaliciousFileImagesRequest {
    /**
     * 指定恶意文件的MD5值。
     * > 调用[DescribeGroupedMaliciousFiles](~~DescribeGroupedMaliciousFiles~~)接口可以获取恶意文件的MD5值。
     * @example `d836968041f7683b5459****`
     */
    "MaliciousMd5"?: string;
    /**
     * 指定分页查询时，显示的当前页的页码。起始值为**1**，默认值为**1**。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 指定分页查询时，每页显示的数据的最大条数。默认值为**20**。
     * @example `20`
     */
    "PageSize": string;
    /**
     * 请求和接收消息的语言类型。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 指定镜像仓库的地域ID。取值：
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
     * > 调用容器镜像服务的[ListRepository](~~145293~~)接口，通过返回参数**InstanceId**的值可以获取容器镜像实例ID。
     * @example `cri-datvailb****`
     */
    "RepoInstanceId"?: string;
    /**
     * 指定镜像仓库ID。
     * > 调用容器镜像服务的[ListRepository](~~145293~~)接口，通过返回参数**RepoId**的值可以获取镜像仓库ID。
     * @example `crr-vridcl4****`
     */
    "RepoId"?: string;
    /**
     * 指定镜像仓库名称。
     * > 支持模糊查询。
     * @example ` centos`
     */
    "RepoName"?: string;
    /**
     * 指定镜像仓库命名空间名称。
     * > 支持模糊查询。
     * @example `hanghai-namespace`
     */
    "RepoNamespace"?: string;
    /**
     * 指定镜像标签。
     * @example `0.2`
     */
    "ImageTag"?: string;
    /**
     * 指定镜像摘要。
     * @example `6a5e103187b31a94592a47a5858617f7a179ead61df7606****`
     */
    "ImageDigest"?: string;
    /**
     * 指定镜像的层。
     * @example `27213ad375b53628dd152a5ca****`
     */
    "ImageLayer"?: string;
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
    /**
     * 集群名称。
     * @example `minikube`
     */
    "ClusterName"?: string;
    /**
     * 容器编号。
     * @example `cc20a1024011c44b6a8710d6f8b****`
     */
    "ContainerId"?: string;
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
    /**
     * 紧急程度。多个采用英文半角逗号隔开，取值：
     * * **serious**：紧急
     * * **suspicious**：可疑
     * * **remind**：提醒
     * @example `serious,suspicious`
     */
    "Levels"?: string;
    /**
     * 镜像恶意样本处理状态。取值：
     * - **0**：未处理
     * - **1**：已处理
     * - **2**：验证中
     * - **3**：已加白
     * @example `0`
     */
    "Status"?: string;
}
