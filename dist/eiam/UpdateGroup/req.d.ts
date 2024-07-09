export interface UpdateGroupRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 组ID。
     * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "GroupId": string;
    /**
     * 组名称。
     * @example `name_test`
     */
    "GroupName"?: string;
    /**
     * 组外部ID。
     * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "GroupExternalId"?: string;
}
