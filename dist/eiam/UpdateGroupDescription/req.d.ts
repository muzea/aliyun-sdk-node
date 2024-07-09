export interface UpdateGroupDescriptionRequest {
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
     * 组描述，最大长度限制256。
     * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "Description"?: string;
}
