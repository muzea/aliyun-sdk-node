export interface CreateGroupRequest {
    /**
     * 实例ID。
     * @example `idaas_ue2jvisn35ea5lmthk267xxxxx`
     */
    "InstanceId": string;
    /**
     * 组名称，最大长度限制64字符。
     * @example `name_test`
     */
    "GroupName": string;
    /**
     * 组外部ID，用于与外部系统关联，默认为组ID，最大长度限制64字符。
     * @example `group_d6sbsuumeta4h66ec3il7yxxxx`
     */
    "GroupExternalId"?: string;
    /**
     * 描述信息，最大限制长度256字符。
     * @example `this is a test.`
     */
    "Description"?: string;
}
