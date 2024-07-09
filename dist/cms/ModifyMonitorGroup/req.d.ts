export interface ModifyMonitorGroupRequest {
    /**
     * 应用分组ID。
     * @example `123456`
     */
    "GroupId": string;
    /**
     * 应用分组名称。
     * @example `ecs_group`
     */
    "GroupName"?: string;
    /**
     * 报警联系人组。
     * @example `alarm_ecs_group`
     */
    "ContactGroups"?: string;
}
