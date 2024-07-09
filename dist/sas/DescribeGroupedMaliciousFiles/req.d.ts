export interface DescribeGroupedMaliciousFilesRequest {
    /**
     * 请求和接收消息的语言类型，默认为**zh**。取值：
     * - **zh**：中文
     * - **en**：英文
     * @example `zh`
     */
    "Lang"?: string;
    /**
     * 要查询的镜像恶意样本的危险程度。可输入多个值，多个值之间使用英文逗号（,）分隔。取值：
     * - **serious**：紧急
     * - **suspicious**：可疑
     * - **remind**：提醒
     * @example `serious`
     */
    "Levels"?: string;
    /**
     * 要查询的恶意文件名称。
     * > 支持模糊搜索。
     * @example `Mining`
     */
    "FuzzyMaliciousName"?: string;
    /**
     * 从返回结果中的第几页开始显示。起始值为**1**。默认值为**1**，表示从第1页开始显示。
     * @example `1`
     */
    "CurrentPage": number;
    /**
     * 分页查询时，每页显示的数据的最大条数。默认值为**20**。
     * @example `20`
     */
    "PageSize": string;
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
     * @example `cn-shanghai`
     */
    "RepoRegionId"?: string;
    /**
     * 容器镜像的实例ID。
     * > 调用容器镜像服务的[ListRepository](~~145293~~)接口，通过返回参数**InstanceId**的值可以获取容器镜像实ID。
     * @example `cri-datvailb****`
     */
    "RepoInstanceId"?: string;
    /**
     * 镜像仓库ID。
     * > 调用容器镜像服务的[ListRepository](~~145293~~)接口，通过返回参数**RepoId**的值可以获取镜像仓库ID。
     * @example `crr-vridcl4****`
     */
    "RepoId"?: string;
    /**
     * 镜像仓库名称。
     * > 支持模糊搜索。
     * @example ` centos`
     */
    "RepoName"?: string;
    /**
     * 镜像仓库命名空间名称。
     * > 支持模糊查询。
     * @example `hanghai-namespace`
     */
    "RepoNamespace"?: string;
    /**
     * 镜像标签。
     * @example `0.2`
     */
    "ImageTag"?: string;
    /**
     * 镜像摘要。
     * @example `6a5e103187b31a94592a47a5858617f7****`
     */
    "ImageDigest"?: string;
    /**
     * 镜像的层。
     * @example `27213ad375b53628dd152a5ca****`
     */
    "ImageLayer"?: string;
    /**
     * 需要查询异常事件的服务器的集群ID。
     * @example `c556c8133b5ad4378b7fc533ddbda****`
     */
    "ClusterId"?: string;
    /**
     * 扫描范围集合。
     */
    "ScanRange"?: string[];
    /**
     * 恶意文件的md5值。
     * @example `d836968041f7683b5459****`
     */
    "MaliciousMd5"?: string;
}
