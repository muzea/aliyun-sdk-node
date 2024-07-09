export interface InsertClusterMemberRequest {
    /**
     * 需导入ECS实例的目标集群ID。
     * @example `b3e3f77b-462e-****-****-bec8727a4dc8`
     */
    "clusterId": string;
    /**
     * 要导入集群的ECS实例ID，多个ECS实例请用英文逗号（,）分隔。
     * @example `i-2ze7s2v0b789k60p****`
     */
    "instanceIds": string;
    /**
     * 要导入集群的ECS实例的登录密码。
     * @example `YourPassword`
     */
    "password": string;
}
