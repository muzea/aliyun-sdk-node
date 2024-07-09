export interface CountYunIdInfoResponse {
    /**
     * 请求ID
     * @example `E94C9864-56FB-44AD-AC0C-A1CEFB332254`
     */
    RequestId: string;
    /**
     * 云设备统计数据信息
     */
    YunIdInfo: {
        /**
         * 总品牌数
         * @example `5`
         */
        TotalBrandCount: number;
        /**
         * 总激活设备数
         * @example `100`
         */
        TotalDeviceCount: number;
        /**
         * 总机型数
         * @example `10`
         */
        TotalDeviceModelCount: number;
    }[];
}
