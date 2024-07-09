export interface DescribeImageListWithBaselineNameResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `5B8C2156-2DB9-5A42-99E7-F2ED5AE9EA1F`
     */
    RequestId: string;
    /**
     * 分页查询时页面显示的信息。
     */
    PageInfo: {
        /**
         * 设置从返回结果的第几页开始显示查询结果。默认值为**1**，表示从第1页开始显示。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 设置分页查询时，每页显示的镜像基线检查结果的数量。默认值为**10**，表示每页显示10条镜像基线检查结果。
         * @example `10`
         */
        PageSize: number;
        /**
         * 镜像基线检查中，存在基线风险的镜像的总数量。
         * @example `1`
         */
        TotalCount: number;
        /**
         * 当前页面显示的存在基线风险的镜像的数量。
         * @example `1`
         */
        Count: number;
    };
    /**
     * 镜像信息列表。
     */
    ImageInfos: {
        /**
         * 存在基线风险问题的风险等级为**中危**的镜像的数量。
         * @example `0`
         */
        MiddleRiskImage: number;
        /**
         * 镜像是否存在安全风险。取值：
         * - **YES**：存在风险
         * - **NO**：不存在风险
         * @example `YES`
         */
        RiskStatus: string;
        /**
         * 镜像创建的时间戳，单位为毫秒。
         * @example `1636962328000`
         */
        ImageCreate: number;
        /**
         * 镜像摘要的SHA256值。
         * @example `2e6daffce524ffeae66cccaa90c8fc47de912346dcec295c27395b6d66db6423`
         */
        Digest: string;
        /**
         * 镜像的版本。
         * @example `v1`
         */
        Tag: string;
        /**
         * 镜像更新的时间戳，单位为毫秒。
         * @example `1636974116000`
         */
        ImageUpdate: number;
        /**
         * 镜像实例的ID。
         * @example `cri-a595qp31knh9****`
         */
        InstanceId: string;
        /**
         * 存在基线风险问题的风险等级为**低危**镜像的数量。
         * @example `0`
         */
        LowRiskImage: number;
        /**
         * 镜像仓的类型。
         * @example `PRIVATE`
         */
        RepoType: string;
        /**
         * 镜像实例所在的地域ID。
         * @example `cn-beijing`
         */
        RegionId: string;
        /**
         * 镜像的唯一标识。
         * @example `f58681174f944623345379e23b7b****`
         */
        Uuid: string;
        /**
         * 镜像的大小。
         * @example `157408623`
         */
        ImageSize: number;
        /**
         * 镜像仓的ID。
         * @example `crr-1lt6q7167yh6****`
         */
        RepoId: string;
        /**
         * 该镜像中存在的基线风险的风险项的总数量。
         * @example `3`
         */
        TotalItemCount: number;
        /**
         * 存在基线风险问题的风险等级为**高危**镜像的数量。
         * @example `1`
         */
        HighRiskImage: number;
        /**
         * 不存在基线风险问题的镜像的数量。
         * @example `0`
         */
        NoRiskImage: number;
        /**
         * 镜像的ID。
         * @example `cddb5fd33b34a1fabb358d0a19497cdfe362fe624821cb250947af0ea5cc****`
         */
        ImageId: string;
        /**
         * 镜像仓库的名称。
         * @example `scanner`
         */
        RepoName: string;
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
         * 镜像仓库的命名空间。
         * @example `libssh2`
         */
        RepoNamespace: string;
        /**
         * 容器组。
         * @example `22222-7xsqq`
         */
        Pod: string;
        /**
         * 命名空间。
         * @example `test-002`
         */
        Namespace: string;
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
         * 服务器实例的名称。
         * @example `pre.mongo-196`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP地址。
         * @example `47.96.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP地址。
         * @example `172.16.XX.XX`
         */
        IntranetIp: string;
        /**
         * 扫描对象名称。
         * @example `spod`
         */
        TargetName: string;
        /**
         * 扫描对象ID。
         * @example `m-bp17m0pc0xprzbwo****`
         */
        TargetId: string;
        /**
         * 扫描对象类型。取值：
         * - ** ECS_IMAGE**：镜像。
         * - ** ECS_SNAPSHOT**：快照
         * @example `ECS_IMAGE`
         */
        TargetType: string;
        /**
         * 最新扫描的时间戳，单位：毫秒。
         * @example `1649814050000`
         */
        LastScanTime: number;
        /**
         * 首次扫描的时间戳，单位：毫秒。
         * @example `1649814050000`
         */
        FirstScanTime: number;
    }[];
}
