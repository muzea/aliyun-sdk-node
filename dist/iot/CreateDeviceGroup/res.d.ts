export interface CreateDeviceGroupResponse {
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
     * @example `4D6D7F71-1C94-4160-8511-EFF4B8F0634D`
     */
    RequestId: string;
    /**
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的分组信息。
     */
    Data: {
        /**
         * 分组ID，系统为分组生成的全局唯一标识符。
         * @example `HtMLECKbdJQL****`
         */
        GroupId: string;
        /**
         * 分组名称。
         * @example `grouptest`
         */
        GroupName: string;
        /**
         * 分组描述。
         * @example `Group test`
         */
        GroupDesc: string;
        /**
         * 创建时间。
         * @example `2018-10-17T11:19:31.000Z`
         */
        UtcCreate: string;
    };
}
