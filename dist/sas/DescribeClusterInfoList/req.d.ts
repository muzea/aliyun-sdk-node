export interface DescribeClusterInfoListRequest {
    /**
     * 配置类型。取值：
     * - **containerNetwork**：容器网络
     * - **interceptionSwitch**：集群微隔离
     * @example `containerNetwork`
     */
    "Type": string;
    /**
     * 目标开关的配置的操作维度。取值：
     * - **Cluster**：集群ID
     * @example `Cluster`
     */
    "TargetType": string;
    /**
     * 目标开关的配置的操作值。该值表示集群ID。
     * @example `c23551de6149343e8a54e69fbefe6****`
     */
    "Target"?: string;
}
