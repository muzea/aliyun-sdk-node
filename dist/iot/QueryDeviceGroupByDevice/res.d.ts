export interface QueryDeviceGroupByDeviceResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `7941C8CD-7764-4A94-8CD9-E2762D4A73AC`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    GroupInfos: {
        /**
         * 调用成功时，返回的分组信息。详情请参见以下GroupInfo。
         */
        GroupInfo: {
            /**
             * 分组名称。
             * @example `father1543152336554`
             */
            GroupName: string;
            /**
             * 分组ID。
             * @example `6a3FF2XE2BKa****`
             */
            GroupId: string;
            /**
             * 分组类型。
             * @example `LINK_PLATFORM_DYNAMIC`
             */
            GroupType: string;
            /**
             * 分组描述。
             * @example `father desc`
             */
            GroupDesc: string;
            /**
             * 分组的创建时间。
             * @example `2018-11-25T13:25:37.000Z`
             */
            UtcCreate: string;
        }[];
    };
}
