export interface ModifyInstanceDeploymentRequest {
    /**
     * 实例所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 实例ID。
     * @example `i-bp67acfmxazb4ph***`
     */
    "InstanceId": string;
    /**
     * 专有宿主机ID。调用[DescribeDedicatedHosts](~~134242~~)查看可以使用的专有宿主机。
     * 修改ECS实例宿主机（即将ECS实例从共享宿主机迁移至专有宿主机，或在不同专有宿主机间迁移ECS实例）时：
     * - 若将实例迁移至指定专有宿主机上，必须设置该参数。
     * - 若将实例迁移至系统自动为您选择的专有宿主机上，必须将该参数设置为空，并将参数`Tenancy`设置为host。
     * 自动部署功能详情，请参见[专有宿主机功能特性](~~118938~~)。
     * @example `dh-bp67acfmxazb4ph****`
     */
    "DedicatedHostId"?: string;
    /**
     * 部署集ID。
     * 将ECS实例加入一个部署集，或调整ECS实例的部署集时，该参数为必填参数。
     * > 修改专有宿主机的相关参数（`Tenancy`、`Affinity`和`DedicatedHostId`）时，不可同时修改部署集。
     * @example `ds-bp67acfmxazb4ph****`
     */
    "DeploymentSetId"?: string;
    /**
     * 当ECS实例要加入或调整的部署集策略为部署集组高可用策略（AvailabilityGroup）时，可以通过该参数指定实例在部署集中的分组号。取值范围：1~7。
     * > 如果您为ECS实例调整部署集，且部署集策略为部署集组高可用策略（`AvailablilityGroup`），当不指定该参数时，系统会自动在各组之间均衡分配ECS实例。如果您为ECS实例指定的仍是当前实例所属的部署集，系统也会重新在各组之间均衡分配ECS实例。
     * @example `3`
     */
    "DeploymentSetGroupNo"?: number;
    /**
     * 实例在调整部署集时，是否强制更换实例宿主机。取值范围：
     *
     * - true：允许。允许重启运行中（Running）、已停止（Stopped）状态的ECS实例。已停止状态的实例不包括启用节省停机模式的按量付费ECS实例。
     *     > 如果您指定的ECS实例搭载了本地盘，则本地盘也会允许强制更换，这可能导致在更换宿主机时本地盘数据丢失，请谨慎操作。
     * - false：不允许。只在当前宿主机上加入部署集。这可能导致更换部署集失败。
     * 默认值：false。
     * @example `false`
     */
    "Force"?: boolean;
    /**
     * 实例是否与专有宿主机关联。取值范围：
     * - host：关联。已启用节省停机模式的实例停机后再次启动时，仍部署在原专有宿主机上。
     * - default：不关联。已启用节省停机模式的实例停机后再次启动时，若原专有宿主机资源不足，可迁移至自动部署资源池中的其它专有宿主机上。
     * 实例从共享宿主机迁移至专有宿主机时，默认值为default。
     * @example `host`
     */
    "Affinity"?: string;
    /**
     * 实例是否在专有宿主机上部署。取值：host，仅支持实例在专有宿主机上部署。
     * @example `host`
     */
    "Tenancy"?: string;
    /**
     * 是否先停止实例，再迁移到目标专有宿主机。取值范围：
     * - reboot：先停止实例再迁移。
     * - live：不停止实例，直接迁移。此时，您必须指定参数DedicatedHostId。该取值不支持在迁移ECS实例的同时变更实例规格。
     * 默认值：reboot。
     * @example `live`
     */
    "MigrationType"?: string;
    /**
     * ECS实例要变更的目标实例规格。调用[DescribeInstanceTypes](~~25620~~)接口可获取最新实例规格列表。
     * 修改ECS实例宿主机时，可同时变更ECS实例规格。目标实例规格必须与指定专有宿主机的规格相匹配，详情请参见[宿主机规格](~~68564~~)。
     * - 变更实例规格时，必须指定专有宿主机ID，即设置参数`DedicatedHostId`的值。
     * - 使用自动部署功能迁移ECS实例时，不能变更实例规格。
     * @example `ecs.c6.large`
     */
    "InstanceType"?: string;
    /**
     * 专有宿主机集群ID。
     * @example `dc-bp67acfmxazb4ph****`
     */
    "DedicatedHostClusterId"?: string;
    /**
     * 是否将所选实例移出所选部署集。取值范围：
     * - true：是。
     * - false：否。
     * 默认值：false。
     * > 当该参数为true时，必须指定具有所属关系的InstanceId和DeploymentSetId。
     * @example `false`
     */
    "RemoveFromDeploymentSet"?: boolean;
}
