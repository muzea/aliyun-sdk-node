export interface QueryBatchRegisterDeviceStatusResponse {
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * > 目前仅华东2（cn-shanghai）地域支持设备X.509证书，如果地域不是华东2（cn-shanghai），则不能生成X.509证书，返回错误码iot.device.RegionNotSupportX509。
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
     * @example `E55E50B7-40EE-4B6B-8BBE-D3ED55CCF565`
     */
    RequestId: string;
    /**
     * 表示是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用成功时，返回的状态信息。
     */
    Data: {
        /**
         * 申请单的处理状态和结果，取值：
         * - **CHECK**：正在校验设备名称。
         * - **CHECK_SUCCESS**：申请单中的所有设备名称校验成功。
         * - **CHECK_FAILED**：申请单中有设备名称校验失败。
         * - **CREATE**：正在创建设备。
         * - **CREATE_SUCCESS**：申请单中的所有设备创建成功。
         *     > 当设备所属产品的认证类型是X.509证书时，表示所有设备和对应的X.509证书都创建成功。
         * - **CREATE_FAILED**：申请单中有设备创建失败。
         *     > 当设备所属产品的认证类型是X.509时，只要当前批次中，任意一个设备或X.509证书创建失败，则返回创建失败。
         * @example `CREATE_SUCCESS`
         */
        Status: string;
        InvalidDetailList: {
            /**
             * - 当返回**Status**参数值为**CHECK_FAILED**或**CREATE_FAILED**时，表示有设备创建失败，该参数返回创建失败的设备的详情集合。
             * - 当返回**Status**参数值为**CHECK_SUCCESS**或**CREATE_SUCCESS**时，表示所有设备创建成功，无需返回失败详情，该参数为空数组。
             */
            invalidDetailList: {
                /**
                 * 创建设备失败，返回的出错信息。
                 * > 多个出错信息间使用竖线（|）隔开。
                 * @example `The nick name is illegal.`
                 */
                ErrorMsg: string;
                /**
                 * 设备的备注名称。
                 * @example `园区灯-1`
                 */
                NickName: string;
                /**
                 * 设备名称。
                 * @example `light`
                 */
                DeviceName: string;
            }[];
        };
        InvalidList: {
            Name: string[];
        };
        ValidList: {
            Name: string[];
        };
    };
}
