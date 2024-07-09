export interface DescribeLimitationResponse {
    /**
     * 一个账号在一个地域下支持创建定时任务的最大数量。
     * >限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `70`
     */
    MaxNumberOfScheduledTasks: number;
    /**
     * 一个伸缩组支持关联传统型负载均衡CLB（原SLB）实例的最大数量。
     * >限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `30`
     */
    MaxNumberOfLoadBalancers: number;
    /**
     * 一个伸缩组支持设置的组内最大实例数。
     * >限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `2000`
     */
    MaxNumberOfMaxSize: number;
    /**
     * 一个伸缩组支持关联应用型负载均衡ALB服务器组的最大数量。
     * >限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `30`
     */
    MaxNumberOfAlbServerGroup: number;
    /**
     * 一个伸缩组支持关联网络型负载均衡NLB服务器组的最大数量。
     * >限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `30`
     */
    MaxNumberOfNlbServerGroup: number;
    /**
     * 一个伸缩组支持关联RDS实例的最大数量。
     * > 限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `30`
     */
    MaxNumberOfDBInstances: number;
    /**
     * 一个伸缩组支持创建伸缩配置的最大数量。
     * > 限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `70`
     */
    MaxNumberOfScalingConfigurations: number;
    /**
     * 一个伸缩组支持设置的组内最小实例数。其中，`MaxNumberOfMinSize`的配额值与`MaxNumberOfMaxSize`的配额值保持一致。
     * @example `2000`
     */
    MaxNumberOfMinSize: number;
    /**
     * 一个伸缩组支持创建生命周期挂钩的最大数量。
     * @example `10`
     */
    MaxNumberOfLifecycleHooks: number;
    /**
     * 一个伸缩组单次支持自动扩缩容ECS实例或ECI实例的最大数量。
     * @example `500`
     */
    MaxNumberOfScalingInstances: number;
    /**
     * 一个账号在一个地域下支持创建伸缩组的最大数量。
     * > 限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `200`
     */
    MaxNumberOfScalingGroups: number;
    /**
     * 请求ID。
     * @example `BE9BEB41-E7B8-4C7D-A3CF-2DCB1066****`
     */
    RequestId: string;
    /**
     * 一个伸缩组支持创建事件通知的最大数量。
     * @example `6`
     */
    MaxNumberOfNotificationConfigurations: number;
    /**
     * 关联传统型负载均衡CLB（原SLB）实例时，一个伸缩组支持指定虚拟服务器组的最大数量。
     * >限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `5`
     */
    MaxNumberOfVServerGroups: number;
    /**
     * 一个伸缩组支持创建伸缩规则的最大数量。
     * > 限额与弹性伸缩使用情况有关，请前往[配额中心](https://quotas.console.aliyun.com/products/ess/quotas)查看配额值，您也可以手动申请提升配额值。
     * @example `70`
     */
    MaxNumberOfScalingRules: number;
}
