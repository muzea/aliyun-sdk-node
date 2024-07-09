export interface UpdateMeshCRAggregationRequest {
    /**
     * 服务网格实例ID。
     * @example `c08ba3fd1e6484b0f8cc1ad8fe10d****`
     */
    "ServiceMeshId": string;
    /**
     * 是否启用数据面KubeAPI访问ASM中的Istio资源，取值：
     * - `true`：启用数据库KubeAPI访问ASM中的Istio资源。
     * - `false`：不启用数据库KubeAPI访问ASM中的Istio资源。
     * @example `true`
     */
    "Enabled"?: boolean;
    /**
     * 启用数据面KubeAPI访问ASM中的Istio资源时，需要在数据面集群安装组件。此组件的CPU资源请求，可以使用Kubernetes标准CPU表示形式。
     * @example `1`
     */
    "CPURequirement"?: string;
    /**
     * 启用数据面KubeAPI访问ASM中的Istio资源时，需要在数据面集群安装组件。此组件的内存资源请求，可以使用Kubernetes标准内存表示形式。1 Mi为1024 KB。
     * @example `500Mi`
     */
    "MemoryRequirement"?: string;
    /**
     * 启用数据面KubeAPI访问ASM中的Istio资源时，需要在数据面集群安装组件。此组件的CPU资源上限，可以使用Kubernetes标准CPU表示形式。
     * @example `1`
     */
    "CPULimit"?: string;
    /**
     * 启用数据面KubeAPI访问ASM中的Istio资源时，需要在数据面集群安装组件。此组件的内存资源上限，可以使用Kubernetes标准内存表示形式。1 Mi为1024 KB。
     * @example `500Mi`
     */
    "MemoryLimit"?: string;
    /**
     * 启用数据面KubeAPI访问ASM中的Istio资源时，指定数据面是否通过ASM API Server的公网端点访问ASM中的Istio资源，取值：
     * - `true`：数据面KubeAPI通过ASM API Server的公网端点访问ASM中的Istio资源。
     * - `false`：数据面KubeAPI通过ASM API Server的私网端点访问ASM中的Istio资源。
     * 默认值为`false`。
     * @example `false`
     */
    "UsePublicApiServer"?: boolean;
}
