export interface DescribeAffectedMaliciousFileImagesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `ACF97412-FD09-4D1F-994F-34DF12BREF20`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 指定分页查询时，显示的当前页的页码。起始值为**1**，默认值为**1**。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 指定分页查询时，每页显示的数据的最大条数。默认值为**20**。
         * @example `20`
         */
        PageSize: number;
        /**
         * 检测出恶意样本的镜像总数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 当前页返回的存在镜像恶意样本的镜像数量。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 检测出恶意样本的镜像列表信息。
     */
    AffectedMaliciousFileImagesResponse: {
        /**
         * 镜像恶意样本处理状态。取值：
         * - **0**：未处理
         * - **1**：已处理
         * - **2**：验证中
         * - **3**：已加白
         * @example `1`
         */
        Status: number;
        /**
         * 镜像摘要。
         * @example `6a5e1031a5858617f7d8a179ead6****`
         */
        Digest: string;
        /**
         * 最新验证时间戳。
         * @example `1596522711000`
         */
        LatestVerifyTimestamp: number;
        /**
         * 容器镜像实例ID。
         * @example `cri-datvail3m****`
         */
        RepoInstanceId: string;
        /**
         * 镜像仓库命名空间。
         * @example `hanghai-namespace`
         */
        Namespace: string;
        /**
         * 镜像标签。
         * @example `0.2`
         */
        Tag: string;
        /**
         * 镜像仓库的RegionId。
         * @example `cn-shanghai`
         */
        RepoRegionId: string;
        /**
         * 镜像UUID。
         * @example `e05c0de798217637868ef4****`
         */
        ImageUuid: string;
        /**
         * 首次扫描时间戳。
         * @example `1594907349000`
         */
        FirstScanTimestamp: number;
        /**
         * 恶意文件的MD5值。
         * @example `d836968041f768300d9605a****`
         */
        MaliciousMd5: string;
        /**
         * 镜像文件路径。
         * @example `/d836968041f7683b5605a****`
         */
        FilePath: string;
        /**
         * 镜像仓库ID。
         * @example `crr-vridcl4****`
         */
        RepoId: string;
        /**
         * 镜像的层。
         * @example `27213ad3447f0209dd152a5cadea****`
         */
        Layer: string;
        /**
         * 最新扫描时间戳。
         * @example `1596522785000`
         */
        LatestScanTimestamp: number;
        /**
         * 镜像仓库名称。
         * @example `centos`
         */
        RepoName: string;
        /**
         * 镜像恶意样本的紧急程度。取值：
         * - **serious**：紧急
         * - **suspicious**：可疑
         * - **remind**：提醒
         * @example `serious`
         */
        Level: string;
        /**
         * 恶意样本下载链接。
         * @example `https://aegis-metadata-file.oss-cn-shanghai.aliyuncs.com/`
         */
        DownloadUrl: string;
        /**
         * 高亮显示文本。
         * @example `{"ruleVersion":"highlight_20210908","ruleId":600106,"events":[[2,54]]}`
         */
        HighLight: string;
        /**
         * 容器编号。
         * @example `04d20e98c8e2c93b7b864372084320a15a58c8671e53c972ce3a71d9c163****`
         */
        ContainerId: string;
        /**
         * 镜像名称。
         * @example `registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-conta****`
         */
        Image: string;
        /**
         * 容器组。
         * @example `22222-7xsqq`
         */
        Pod: string;
        /**
         * 集群编号。
         * @example `c08d5fc1a329a4b88950a253d082f1****`
         */
        ClusterId: string;
        /**
         * 集群名称。
         * @example `docker-law`
         */
        ClusterName: string;
        /**
         * 服务器实例的名称。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP地址。
         * @example `47.101.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP地址。
         * @example `172.22.XX.XX`
         */
        IntranetIp: string;
        /**
         * 扫描对象ID。
         * @example `m-bp17m0pc0xprzbwo****`
         */
        TargetId: string;
        /**
         * 扫描对象名称。
         * @example `source-test-obj-9LaLJ`
         */
        TargetName: string;
        /**
         * 扫描对象类型。取值：
         * - **ECS_IMAGE**：镜像。
         * - **ECS_SNAPSHOT**：快照
         * @example `ECS_IMAGE`
         */
        TargetType: string;
        /**
         * 服务器的UUID。
         * @example `48a473c4-1650-4931-a822-7e6c2c28****`
         */
        Uuid: string;
        /**
         * 告警事件ID。
         * @example `1000040`
         */
        Id: number;
    }[];
}
