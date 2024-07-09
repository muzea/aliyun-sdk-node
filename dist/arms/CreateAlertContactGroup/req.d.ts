export interface CreateAlertContactGroupRequest {
    /**
     * 报警联系人分组名称。
     * @example `TestGroup`
     */
    "ContactGroupName": string;
    /**
     * 要包含在报警联系人分组内的联系人ID。多个联系人ID以空格分隔。可调用SearchAlertContact接口来查询联系人ID，详情请参见[SearchAlertContact](~~130703~~)。
     * @example `12* 23* 34*`
     */
    "ContactIds"?: string;
    /**
     * 地域ID。默认情况下请填写`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
