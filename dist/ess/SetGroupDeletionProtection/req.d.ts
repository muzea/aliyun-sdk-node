export interface SetGroupDeletionProtectionRequest {
    /**
     * 是否为伸缩组开启删除保护。取值范围：
     * - true：开启删除保护功能。开启删除保护功能后，不能在控制台或者通过调用API删除伸缩组。如果需要删除伸缩组，必须先关闭删除保护功能。
     * - false：关闭删除保护功能。
     * 默认值：false。
     * @example `true`
     */
    "GroupDeletionProtection": boolean;
    /**
     * 伸缩组的ID。
     * @example `asg-bp1igpak5ft1flyp****`
     */
    "ScalingGroupId": string;
    /**
     * 伸缩组所属的地域ID。
     * @example `cn-qingdao`
     */
    "RegionId"?: string;
}
