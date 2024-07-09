export interface GetDeviceListResponse {
    /**
     * 请求ID
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * 返回数据
     */
    data: {
        /**
         * 场站id
         * @example `pn_95`
         */
        factoryId: string;
        /**
         * 设备列表
         */
        deviceList: {
            /**
             * 设备id
             * @example `pn_69873`
             */
            deviceId: string;
            /**
             * 设备名称
             * @example `主变4#`
             */
            deviceName: string;
            /**
             * 表计一级类型
             * @example `电表`
             */
            firstTypeName: string;
            /**
             * 表计二级类型
             * @example `关口表`
             */
            secondTypeName: string;
            /**
             * 上级设备
             * @example `pn_6987`
             */
            parentDevice: string;
            /**
             * 设备信息
             */
            info: {
                /**
                 * 倍率
                 * @example `80`
                 */
                magnification: number;
                /**
                 * 高低压
                 * @example `0`
                 */
                pressure: number;
                /**
                 * 电压变比值
                 * @example `80`
                 */
                pt: number;
                /**
                 * 电流变比值
                 * @example `1`
                 */
                ct: number;
                /**
                 * 额定容量。单位：kVA
                 * @example `100`
                 */
                constKva: number;
            };
        }[];
        /**
         * http状态码
         * @example `200`
         */
        httpCode: number;
        /**
         * 状态码
         * @example `Success`
         */
        code: string;
        /**
         * 表示实际请求是否成功
         * @example `true`
         */
        success: boolean;
    };
    /**
     * http状态码
     * @example `200`
     */
    httpCode: number;
    /**
     * 状态码
     * @example `Success`
     */
    code: string;
    /**
     * 表示实际请求是否成功
     * @example `true`
     */
    success: boolean;
}
