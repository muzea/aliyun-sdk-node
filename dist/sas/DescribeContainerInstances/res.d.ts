export interface DescribeContainerInstancesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `79CFF74D-E967-5407-8A78-EE03B925FDAA`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 查询结果的总数。
         * @example `45`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `3`
         */
        Count: number;
    };
    /**
     * 容器资产信息列表。
     */
    ContainerInstanceList: {
        /**
         * 镜像的标签。
         * @example `0.3.1.0-dfa2010-aliyun`
         */
        ImageRepoTag: string;
        /**
         * 应用名称。
         * @example `alibaba-log-controller`
         */
        AppName: string;
        /**
         * pod地址。
         * @example `172.24.XX.XX`
         */
        PodIp: string;
        /**
         * 当前容器集群中存在漏洞数量。
         * @example `15`
         */
        VulCount: number;
        /**
         * 基线风险状态。取值：
         * - **NO**：没有基线问题
         * - **YES**：有基线问题
         * @example `YES`
         */
        HcStatus: string;
        /**
         * 镜像ID。
         * @example `registry-vpc.cn-beijing.aliyuncs.com/acs/log-controller@sha256:5b046e2de8c490819125193ee2eb71a66f2cc16c032dcd8b69ead4be1024****`
         */
        ImageId: string;
        /**
         * 集群ID。
         * @example `cfb41a869c71e4678a97021582dd8a****`
         */
        ClusterId: string;
        /**
         * 镜像的仓库名称。
         * @example `log-controller`
         */
        ImageRepoName: string;
        /**
         * 主机IP。
         * @example `172.24.XX.XX`
         */
        HostIp: string;
        /**
         * 容器组。
         * @example `alibaba-log-controller-6f847f8786-mk2mg`
         */
        Pod: string;
        /**
         * 是否存在风险 。取值：
         * - **NO**：无风险
         * - **YES**：有风险
         * @example `YES`
         */
        RiskStatus: string;
        /**
         * 容器资产是否存在漏洞。取值：
         * - **YES**：存在漏洞
         * - **NO**：不存在漏洞
         * @example `YES`
         */
        VulStatus: string;
        /**
         * 容器是否存在安全告警。取值：
         * - **YES**：存在安全告警
         * - **NO**：不存在安全告警
         * @example `YES`
         */
        AlarmStatus: string;
        /**
         * 容器镜像。
         * @example `docker.io/library/nginx:latest`
         */
        Image: string;
        /**
         * 镜像仓库命名空间。
         * @example `acs`
         */
        ImageRepoNamespace: string;
        /**
         * 镜像digest值。
         * @example `5b046e2de8c490819125193ee2eb71a66f2cc16c032dcd8b69ead4be1024****`
         */
        ImageDigest: string;
        /**
         * 命名空间。
         * @example `kube-system`
         */
        Namespace: string;
        /**
         * 资产实例ID。
         * @example `i-2zegzjyotydfkz9****`
         */
        InstanceId: string;
        /**
         * 节点信息。
         * @example `test`
         */
        NodeInfo: string;
        /**
         * 镜像UUID。
         * @example `5f23dfbceec289a49ac94e035e2****`
         */
        ImageUuid: string;
        /**
         * 容器所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 容器资产的更新标识。
         * @example `79cff74d-e967-5407-8a78-ee03b9****`
         */
        UpdateMark: string;
        /**
         * 容器ID。
         * @example `48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f92155709d****`
         */
        ContainerId: string;
        /**
         * 节点名称。
         * @example `test`
         */
        NodeName: string;
        /**
         * 基线风险数量。
         * @example `1`
         */
        HcCount: number;
        /**
         * 集群名称。
         * @example `test`
         */
        ClusterName: string;
        /**
         * 风险数量。
         * @example `1`
         */
        RiskCount: string;
        /**
         * 告警数量。
         * @example `1`
         */
        AlarmCount: number;
        /**
         * 创建集群时间戳，单位为毫秒。
         * @example `1670368337000`
         */
        CreateTimestamp: number;
        /**
         * 是否公网暴露。
         * - **1**：暴露
         * - **0**：未暴露
         * @example `1`
         */
        Exposed: number;
        /**
         * json字符串暴露详情。
         * @example `[{\"exposedName\":\"nginx-ingress-lb\",\"exposedType\":\"LoadBalancer\",\"portDOList\":[{\"name\":\"http\",\"nodePort\":32268,\"port\":80,\"targetPort\":80},{\"name\":\"https\",\"nodePort\":32376,\"port\":443,\"targetPort\":443}]}] `
         */
        ExposedDetail: string;
    }[];
}
