export interface DescribeImageInfoListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `BC3B0DAE-CC0E-59E9-9383-6F060F22****`
     */
    RequestId: string;
    /**
     * 镜像信息images组成的集合。
     */
    ImageInfos: {
        /**
         * 镜像状态。
         * @example `NORMAL`
         */
        Status: string;
        /**
         * 镜像服务的endpoint列表。
         * @example `cn-hangzhou-x7`
         */
        Endpoints: string;
        /**
         * 镜像是否存在安全风险。取值：
         * - **YES**：存在风险
         * - **NO**：不存在风险
         * @example `YES`
         */
        RiskStatus: string;
        /**
         * 实例是否存在漏洞。取值：
         * - **YES**：存在漏洞。
         * - **NO**：不存在漏洞。
         * @example `YES`
         */
        VulStatus: string;
        /**
         * 镜像创建时间。
         * @example `1636962328000`
         */
        ImageCreate: number;
        /**
         * 资产是否存在安全告警。取值：
         * - **YES**：存在安全告警
         * - **NO**：不存在安全告警
         * @example `YES`
         */
        AlarmStatus: string;
        /**
         * 镜像digest值。
         * @example `a3521b04dfdd1361a24be6263f2983cf12ba910989f4d9f7324da7e1e89f****`
         */
        Digest: string;
        /**
         * 注册类型。
         * @example `harbor`
         */
        RegistryType: string;
        /**
         * 镜像更新时间。
         * @example `1636974116000`
         */
        ImageUpdate: number;
        /**
         * 镜像标签。
         * @example `v1`
         */
        Tag: string;
        /**
         * 镜像实例的ID。
         * @example `i-wz95abw6pa7y79ve****`
         */
        InstanceId: string;
        /**
         * 仓库类型，取值：
         * - `PUBLIC`：公开
         * - `PRIVATE`：私有
         * @example `PUBLIC`
         */
        RepoType: string;
        /**
         * 镜像实例所在的地域ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 服务器的uuid。
         * @example `ff9ca084-7faa-4ab2-8728-69024755****`
         */
        Uuid: string;
        /**
         * 镜像大小。
         * @example `157408623`
         */
        ImageSize: number;
        /**
         * 镜像仓的ID。
         * @example `crr-5qk9v2rdt0s****`
         */
        RepoId: string;
        /**
         * 标签不可变性。
         * @example `0`
         */
        TagImmutable: number;
        /**
         * 您资产中的漏洞总数量。
         * @example `1`
         */
        VulCount: number;
        /**
         * 在当前容器组、应用、命名空间或集群中检测出的告警数量。
         * @example `10`
         */
        AlarmCount: number;
        /**
         * 镜像的ID。
         * @example `bb0175afea16138815a8900adeeb0315d88a83a2376eeffa14db1d693a15****`
         */
        ImageId: string;
        /**
         * 镜像仓库的名称。
         * @example `opa-test`
         */
        RepoName: string;
        /**
         * 镜像仓库的命名空间。
         * @example `libssh2`
         */
        RepoNamespace: string;
    }[];
}
