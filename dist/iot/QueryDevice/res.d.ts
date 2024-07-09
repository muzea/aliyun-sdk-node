export interface QueryDeviceResponse {
    /**
     * 下一页标识。可在下次请求时传入，来获取下一页数据。
     * 如果**NextToken**值为空，表示没有下一页数据。
     * @example `TGlzdFJlc291cm***`
     */
    NextToken: string;
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
     * 是否调用成功。
     * - **true**：调用成功。
     * - **false**：调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 调用失败时，返回的错误码。更多信息，请参见[错误码](~~87387~~)。
     * @example `iot.system.SystemException`
     */
    Code: string;
    /**
     * 每页显示的设备数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 总页数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 设备总数。
     * @example `2`
     */
    Total: number;
    /**
     * 当前页面号。
     * @example `1`
     */
    Page: number;
    Data: {
        /**
         * 调用成功时，返回设备信息列表（**DeviceInfo**）。
         * > 返回的设备信息按照设备创建时间倒序排列。
         */
        DeviceInfo: {
            /**
             * 设备名称。
             * @example `light`
             */
            DeviceName: string;
            /**
             * 设备ID（旧版参数）。
             * > 该参数是旧版本遗留参数，已无实际作用，不能用来标识设备。目前，有效的设备标识符为**IotId**和**ProductKey**与**DeviceName**组合。
             * @example `dwnS41bhNxjslDAI****`
             */
            DeviceId: string;
            /**
             * 设备所属产品的品类。
             * > 目前不返回此参数。
             * @example `Lighting`
             */
            DeviceType: string;
            /**
             * 设备创建时间，UTC格式。
             * @example `2019-02-20T02:16:09.000Z`
             */
            UtcCreate: string;
            /**
             * 设备状态。取值：
             * - **ONLINE**：设备在线。
             * - **OFFLINE**：设备离线。
             * - **UNACTIVE**：设备未激活。
             * - **DISABLE**：设备已禁用。
             * @example `ONLINE`
             */
            DeviceStatus: string;
            /**
             * 设备信息最后一次更新时的时间，GMT格式。
             * @example `Wed, 20-Feb-2019 02:16:09 GMT`
             */
            GmtModified: string;
            /**
             * 设备所隶属的产品ProductKey。
             * @example `a1BwAGV****`
             */
            ProductKey: string;
            /**
             * 设备信息最后一次更新时的时间，UTC格式。
             * @example `2019-02-20T02:16:09.000Z`
             */
            UtcModified: string;
            /**
             * 设备密钥。
             * @example `sLefbFmN9SYfnWLJTePG893XNuRV****`
             */
            DeviceSecret: string;
            /**
             * 设备创建时间，GMT格式。
             * @example `Wed, 20-Feb-2019 02:16:09 GMT`
             */
            GmtCreate: string;
            /**
             * 设备的备注名称。
             * @example `智能灯设备`
             */
            Nickname: string;
            /**
             * 设备ID。物联网平台为该设备颁发的ID，设备的唯一标识符。
             * @example `Q7uOhVRdZRRlDnTLv****00100`
             */
            IotId: string;
        }[];
    };
}
