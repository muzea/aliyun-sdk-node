export interface ScaleoutApplicationWithNewInstancesRequest {
    /**
     * 扩容的目标应用ID，可通过调用ListApplication接口来获取，详情请参见[ListApplication](~~149390~~)。
     * @example `e370c17f-*****-3df0721a327`
     */
    "AppId"?: string;
    /**
     * 扩容应用的目标分组ID，可通过调用ListDeployGroup接口来获取，详情请参见[ListDeployGroup](~~62077~~)。
     * @example `e37**********-33df0721a327`
     */
    "GroupId"?: string;
    /**
     * 此次扩容的实例数量。
     * @example `2`
     */
    "ScalingNum": number;
    /**
     * ECS启动模板ID，可通过调用DescribeLaunchTemplates接口获取，详情请参见[DescribeLaunchTemplates](~~73759~~)。
     * @example `lt-****hy9s2	`
     */
    "TemplateId"?: string;
    /**
     * ECS启动模板版本，可通过调用DescribeLaunchTemplateVersions接口获取，详情请参见[DescribeLaunchTemplateVersions](~~73761~~)。
     * >  设置为`-1`代表使用默认的启动模板版本。
     * @example `-1`
     */
    "TemplateVersion"?: string;
    /**
     * 指定伸缩组的回收模式，取值范围：
     * - recycle：伸缩组的回收模式为停机回收模式。
     * - release：伸缩组的回收模式为释放模式。
     * 从一个伸缩组删除实例，详情请参见[RemoveInstances](~~25955~~)。
     * @example `release`
     */
    "ScalingPolicy"?: string;
    /**
     * 扩容时使用的现有ECS实例ID，若填写此项，将以指定的ECS实例的规格和配置为模板来购买新的ECS实例。
     * @example `i-28wt4****`
     */
    "TemplateInstanceId"?: string;
    /**
     * 扩容的集群ID，若指定了应用和分组进行扩容，此参数将被忽略。
     * @example `e37**********-33df0721a327`
     */
    "ClusterId"?: string;
    /**
     * 实例的付费方式。取值范围：
     * - PrePaid：包年包月。
     * - PostPaid（默认）：按量付费。
     * @example `PrePaid`
     */
    "InstanceChargeType"?: string;
    /**
     * 包年包月计费方式的时长单位。取值范围：
     * - Week：按周计费。
     * - Month（默认）：按月计费。
     * @example `Month`
     */
    "InstanceChargePeriodUnit"?: string;
    /**
     * 购买资源的时长，单位由InstanceChargePeriodUnit指定。当参数InstanceChargeType取值为PrePaid时才生效。
     * - InstanceChargePeriodUnit=Week时，Period取值：{“1”, “2”, “3”, “4”}。
     * - InstanceChargePeriodUnit=Month时，Period取值：{“1”, “2”, “3”, “4”, “5”, “6”, “7”, “8”, “9”, “10”, “11”, “12”, “24”, “36”, ”48”, ”60”}。
     * @example `1`
     */
    "InstanceChargePeriod"?: number;
    /**
     * 是否要自动续费。当参数InstanceChargeType取值PrePaid时才生效。取值范围：
     * - true：自动续费。
     * - false（默认）：不自动续费。
     * @example `true`
     */
    "AutoRenew"?: boolean;
    /**
     * 单次自动续费的续费时长。取值范围：
     * - InstanceChargePeriodUnit=Week时：{“1”, “2”, “3”}。
     * - InstanceChargePeriodUnit=Month时：{“1”, “2”, “3”, “6”, “12”, "24", "36", "48", "60"}。
     * 默认值：1。
     * @example `1`
     */
    "AutoRenewPeriod"?: number;
}
