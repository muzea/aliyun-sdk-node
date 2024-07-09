export interface UntagResourcesRequest {
    /**
     * 资源所属的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。取值范围：
     * - instance：ECS实例。
     * - disk：磁盘。
     * - snapshot：快照。
     * - image：镜像。
     * - securitygroup：安全组。
     * - volume：存储卷。
     * - eni：弹性网卡。
     * - ddh：专有宿主机。
     * - ddhcluster：专有宿主机集群。
     * - keypair：SSH密钥对。
     * - launchtemplate：启动模板。
     * - reservedinstance：预留实例券。
     * - snapshotpolicy：自动快照策略。
     * - elasticityassurance：弹性保障。
     * - capacityreservation：容量预定。
     * - command：云助手命令。
     * - invocation：云助手命令执行结果。
     * @example `instance`
     */
    "ResourceType": string;
    /**
     * 是否解绑资源上全部的标签。当请求中未设置TagKey.N时，该参数才有效。取值范围：
     * - true
     * - false
     * 默认值：false
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID列表。可输入最多50个资源ID。
     * @example `i-bp67acfmxazb4ph****`
     */
    "ResourceId": string[];
    /**
     * 资源的标签键列表。可输入最多20个标签键。
     * @example `TestKey`
     */
    "TagKey"?: string[];
}
