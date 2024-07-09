export interface QueryImportedDeviceByApplyIdResponse {
    /**
     * 设备所属产品的**ProductKey**。
     * @example `a1BwAGV****`
     */
    ProductKey: string;
    /**
     * 阿里云为该请求生成的唯一标识符。
     * @example `E4C0FF92-2A86-41DB-92D3-73B60310D25E`
     */
    RequestId: string;
    /**
     * 调用失败时，返回的出错信息。
     * @example `系统异常`
     */
    ErrorMessage: string;
    /**
     * 表示是否调用成功。
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
     * 显示返回结果中的第几页。
     * @example `1`
     */
    PageNo: number;
    /**
     * 返回结果的总页数。
     * @example `100`
     */
    TotalPage: number;
    /**
     * 返回结果中每页显示的记录数量。
     * @example `10`
     */
    PageSize: number;
    DeviceList: {
        /**
         * 返回的设备列表信息。
         */
        device: {
            /**
             * 设备所属产品的**ProductKey**。
             * @example `a1BwAGV****`
             */
            ProductKey: string;
            /**
             * 设备序列号。
             * > 若您没有为设备传入序列号，则该参数返回为空。
             * @example `QC4******001`
             */
            Sn: string;
            /**
             * 设备名称。
             * ><notice>
             * 请妥善保管，勿泄露。
             * ></notice>
             * @example `light`
             */
            DeviceName: string;
            /**
             * 设备密钥。
             * ><notice>
             * 请妥善保管，勿泄露。
             * ></notice>
             * @example `b4d43f7******10ba5e5`
             */
            DeviceSecret: string;
        }[];
    };
}
