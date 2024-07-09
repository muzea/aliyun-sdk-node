export interface CreateOrUpdateContactGroupResponse {
    /**
     * 请求ID。
     * @example `9319A57D-2D9E-472A-B69B-CF3CD16D****`
     */
    RequestId: string;
    /**
     * 返回AlertContactGroup对象。
     */
    AlertContactGroup: {
        /**
         * 告警联系人组ID。
         * @example `123`
         */
        ContactGroupId: number;
        /**
         * 告警联系人组名称。
         * @example `TestGroup`
         */
        ContactGroupName: string;
        /**
         * 告警联系人组包含的联系人ID。
         * @example `[1,2,3]`
         */
        ContactIds: string;
    };
}
