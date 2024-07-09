export interface JoinResourceGroupRequest {
    /**
     * ECS资源的类型。取值范围：
     * - instance：实例。
     * - disk：块存储。
     * - snapshot：快照。
     * - image：镜像。
     * - securitygroup：安全组。
     * - ddh：专有宿主机。
     * - ddhcluster：专有宿主机集群。
     * - eni：弹性网卡。
     * - keypair：密钥对。
     * - launchtemplate：启动模板。
     * - command：云助手命令。
     * - activation：云助手托管实例激活码。
     * - managedinstance：云助手托管实例。
     * 以上参数取值均大小写敏感。
     * @example `securitygroup`
     */
    "ResourceType"?: string;
    /**
     * 资源类型的ID标识符。例如，当ResourceType=instance时，则ResourceId可以理解为InstanceId。
     * @example `sg-bp67acfmxazb4p****`
     */
    "ResourceId"?: string;
    /**
     * 资源所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
    /**
     * 目标资源组ID。
     * @example `rg-bp67acfmxazb4p****`
     */
    "ResourceGroupId"?: string;
}
