export interface QuerySuperDeviceGroupResponse {
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
     * @example `7411716B-A488-4EEB-9AA0-6DB05AD2491F`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    Data: {
        /**
         * 调用成功时，返回的父分组信息数据。请参见以下**GroupInfo**。
         */
        GroupInfo: {
            /**
             * 子分组所属的父分组ID。
             * @example `tDQvBJqbUyHskDse`
             */
            GroupId: string;
            /**
             * 子分组所属的父分组名称。
             * @example `IOTTEST`
             */
            GroupName: string;
            /**
             * 父分组描述。
             * @example `A test`
             */
            GroupDesc: string;
        }[];
    };
}
