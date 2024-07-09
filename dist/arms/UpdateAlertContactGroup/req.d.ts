export interface UpdateAlertContactGroupRequest {
    /**
     * 将报警联系人分组的名称修改为此值。
     * @example `TestGroup`
     */
    "ContactGroupName": string;
    /**
     * 要包含在报警联系人分组内的联系人ID。多个联系人ID以空格分隔。可调用SearchAlertContact接口来查询联系人ID，详情请参见[SearchAlertContact](~~130703~~)。
     * @example `123 234 345`
     */
    "ContactIds"?: string;
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要更新的联系人分组的ID。可调用SearchAlertContactGroup接口来查询联系人分组ID，详情请参见[SearchAlertContactGroup](~~130671~~)。
     * @example `123`
     */
    "ContactGroupId": number;
}
