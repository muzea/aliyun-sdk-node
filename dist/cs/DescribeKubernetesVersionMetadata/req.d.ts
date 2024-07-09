export interface DescribeKubernetesVersionMetadataRequest {
    /**
     * 集群所在地域ID。
     * @example `cn-beijing`
     */
    "Region": string;
    /**
     * 集群类型，取值：
     * - `Kubernetes`: ACK专有版集群。
     * - `ManagedKubernetes`：ACK托管版集群，包括ACK Pro版集群、ACK基础版集群、ACK Serverless Pro版集群、ACK Serverless基础版集群、ACK Edge Pro版集群、ACK Edge基础版。
     * - `ExternalKubernetes`：ACK注册集群。
     * @example `Kubernetes`
     */
    "ClusterType": string;
    /**
     * 集群版本，与Kubernetes社区基线版本保持一致。建议选择最新版本，若不指定，默认使用最新版本。
     * 目前在ACK控制台您可以创建两种最新版本的集群。您可以通过API创建其他Kubernetes版本集群。ACK支持的Kubernetes版本，请参见[Kubernetes版本发布概览](~~185269~~)。
     * @example `1.26.3-aliyun.1`
     */
    "KubernetesVersion"?: string;
    /**
     * 面向场景时的集群类型，取值：
     * - `Default`：非边缘场景集群。
     * - `Edge`：边缘场景集群。
     * - `Serverless`：ASK集群。
     * 默认值：`Default`。
     * @example `Default`
     */
    "Profile"?: string;
    /**
     * 运行时类型，可以通过指定运行时类型，过滤出运行时所支持的系统镜像，取值：
     * - `docker`：docker运行时。
     * - `containerd`：containerd运行时。
     * - `Sandboxed-Container.runv`：安全沙箱。
     * 若指定运行时类型，将返回指定运行时支持的镜像版本。
     * 若不指定运行时类型，默认返回全部镜像。
     * @example `containerd`
     */
    "runtime"?: string;
    /**
     * 查询模式，取值：
     * - `supported`：查询受支持版本
     * - `creatable`：查询可创建版本
     * 若指定`KubernetesVersion`，将忽略查询模式。
     * 若不指定查询模式，默认返回可创建版本。
     * @example `supported`
     */
    "Mode"?: string;
    /**
     * 是否查询该集群版本的可升级版本，仅在指定KubernetesVersion参数时生效。
     */
    "QueryUpgradableVersion"?: boolean;
}
