export interface GetHostGroupResponse {
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `EC9BF0F4-8983-491A-BC8C-1B4DD94976DE`
     */
    RequestId: string;
    /**
     * 查询到的资产组详细信息。
     */
    HostGroup: {
        /**
         * 资产组ID。
         * @example `1`
         */
        HostGroupId: string;
        /**
         * 资产组的备注信息。
         * @example `备注`
         */
        Comment: string;
        /**
         * 资产组名称。
         * @example `资产组1`
         */
        HostGroupName: string;
    };
}
