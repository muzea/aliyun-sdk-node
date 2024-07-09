export interface PutContactGroupRequest {
    /**
     * 报警联系组的名称。
     * 关于如何获取报警联系组的名称，请参见[DescribeContactGroupList](~~114922~~)。
     * @example `ECS_Group`
     */
    "ContactGroupName": string;
    /**
     * 报警联系组的描述信息。
     * @example `ECS_Alert_Group`
     */
    "Describe"?: string;
    /**
     * 是否开启周报订阅功能。取值：
     * - true：是。
     * - false：否。
     * > 目前仅当ECS实例等于或大于5时，才能开启周报订阅功能。
     * @example `true`
     */
    "EnableSubscribed"?: boolean;
    /**
     * 报警联系人的名称。N的取值范围：1~100。
     * @example `Alice`
     */
    "ContactNames"?: string[];
}
