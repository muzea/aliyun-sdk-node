export interface TransformClusterMemberRequest {
    /**
     * 实例ID集合 ，用半角逗号（,）分割：
     * - 实例可以不属于任何集群，但一个实例最多只能归属于一个集群。
     * - ECS实例和目标集群需在同一个VPC内。
     * @example `i-2ze7s2v0b789k60p****`
     */
    "InstanceIds": string;
    /**
     * 目标集群ID。
     * @example `b3e3f77b-462e-****-****-bec8727a****`
     */
    "TargetClusterId": string;
    /**
     * 加入目标集群的实例需要设置的登录密码。
     * @example `Hello****`
     */
    "Password": string;
}
