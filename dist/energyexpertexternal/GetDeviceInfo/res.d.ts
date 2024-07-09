export interface GetDeviceInfoResponse {
    /**
     * 请求ID
     * @example `83A5A7DD-8974-5769-952E-590A97BEA34E`
     */
    requestId: string;
    /**
     * http状态码
     * @example `200`
     */
    httpCode: number;
    /**
     * 请求返回 code，Success 代表请求成功，其他情况代表请求不成功，具体错误原因描述可通过 msg 查看。
     * @example `Success`
     */
    code: string;
    /**
     * 请求是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回信息
     */
    data: {
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
         * 参数列表
         */
        recordList: {
            /**
             * 统计日期
             * @example `2022-07-26 00:00:00`
             */
            statisticsDate: string;
            /**
             * 参数名称
             * @example `A相电流`
             */
            paramName: string;
            /**
             * 单位
             * @example `A`
             */
            unit: string;
            /**
             * 设备标识符
             * @example `Ia`
             */
            identifier: string;
            /**
             * 测点类型
             * @example `DOUBLE`
             */
            type: string;
            /**
             * 数值
             * @example `20.00`
             */
            value: number;
        }[];
    };
}
