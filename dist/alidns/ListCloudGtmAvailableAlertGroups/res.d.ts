export interface ListCloudGtmAvailableAlertGroupsResponse {
    /**
     * 唯一请求识别码。
     * @example `536E9CAD-DB30-4647-AC87-AA5CC38C5382`
     */
    RequestId: string;
    AlertGroups: {
        /**
         * 报警通知组列表。
         */
        AlertGroup: {
            /**
             * 报警通知组名称。
             * @example `云账号报警联系人`
             */
            GroupName: string;
        }[];
    };
}
