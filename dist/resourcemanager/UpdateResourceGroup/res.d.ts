export interface UpdateResourceGroupResponse {
    /**
     * 请求ID。
     * @example `04F0F334-1335-436C-A1D7-6C044FE73368`
     */
    RequestId: string;
    /**
     * 资源组信息。
     */
    ResourceGroup: {
        /**
         * 资源组显示名称。
         * @example `project`
         */
        DisplayName: string;
        /**
         * 资源组所属的阿里云账号ID。
         * @example `123456789****`
         */
        AccountId: string;
        /**
         * 资源组唯一标识。
         * @example `my-project`
         */
        Name: string;
        /**
         * 资源组创建时间（UTC时间）。
         * @example `2015-01-23T12:33:18+08:00`
         */
        CreateDate: string;
        /**
         * 资源组ID。
         * @example `rg-9gLOoK****`
         */
        Id: string;
    };
}
