export interface DeleteAlertContactGroupRequest {
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要删除的联系人分组的ID。可调用SearchAlertContactGroup接口来查询联系人分组ID，详情请参见[SearchAlertContactGroup](~~130671~~)。
     * @example `123`
     */
    "ContactGroupId": number;
}
