export interface SearchAlertContactGroupRequest {
    /**
     * 报警联系人分组名称。
     * @example `TestGroup`
     */
    "ContactGroupName"?: string;
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 报警联系人名称。
     * @example `John Doe`
     */
    "ContactName"?: string;
    /**
     * 报警联系人ID。可调用SearchAlertContact接口来查询联系人ID，请参见[SearchAlertContact](~~130703~~)。
     * @example `123`
     */
    "ContactId"?: number;
    /**
     * 报警联系人分组ID。可以同时查询多个联系人分组ID，联系人分组ID之间用英文逗号（,）分隔。
     * @example `746`
     */
    "ContactGroupIds"?: string;
    /**
     * 是否返回联系人分组中包含的所有联系人。默认不返回所有联系人。
     * @example `true`
     */
    "IsDetail"?: boolean;
}
