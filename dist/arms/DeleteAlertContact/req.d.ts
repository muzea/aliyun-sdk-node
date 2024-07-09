export interface DeleteAlertContactRequest {
    /**
     * 地域ID。默认为`cn-hangzhou`。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 需要删除的报警联系人的ID。可调用SearchAlertContact接口来查询联系人ID，详情请参见[SearchAlertContact](~~130703~~)。
     * @example `123`
     */
    "ContactId": number;
}
