export interface CreateOrUpdateContactGroupRequest {
    /**
     * 告警联系人组ID。
     * - 不填代表创建新的联系人组。
     * - 填写代表修改指定告警联系人组信息。
     * @example `123`
     */
    "ContactGroupId"?: number;
    /**
     * 告警联系人组名称。
     * @example `TestGroup`
     */
    "ContactGroupName": string;
    /**
     * 需要添加至该联系人组的联系人ID。多个联系人ID之间通过半角逗号（,）分隔。
     * @example `[1,2,3]`
     */
    "ContactIds"?: string;
}
