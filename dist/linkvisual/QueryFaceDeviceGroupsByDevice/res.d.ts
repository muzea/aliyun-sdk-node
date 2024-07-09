export interface QueryFaceDeviceGroupsByDeviceResponse {
    /**
     * 错误码
     * @example `200`
     */
    Code: string;
    /**
     * 错误码描述
     * @example `success`
     */
    ErrorMessage: string;
    /**
     * 请求Id
     * @example `0A13279A-5640-45E7-87AA-83750541AD0E`
     */
    RequestId: string;
    /**
     * 接口调用是否成功
     * @example `true`
     */
    Success: boolean;
    /**
     * 接口返回值
     */
    Data: {
        /**
         * 分页号
         * @example `1`
         */
        PageNo: number;
        /**
         * 分页大小
         * @example `20`
         */
        PageSize: number;
        /**
         * 设备组总数
         * @example `5`
         */
        Total: number;
        /**
         * 设备组列表
         */
        DeviceGroupList: {
            /**
             * 设备组Id
             * @example `TestDeviceGroupId`
             */
            DeviceGroupId: string;
            /**
             * 修改时间
             * @example `2020-05-12 17:12:37`
             */
            ModifiedTime: string;
            /**
             * 设备组名称
             * @example `TestDeviceGroupName`
             */
            DeviceGroupName: string;
        }[];
    };
}
