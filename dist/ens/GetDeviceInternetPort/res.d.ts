export interface GetDeviceInternetPortResponse {
    /**
     * 请求ID。
     * @example `36311833-83FC-57C3-A7DD-768F61F65555`
     */
    RequestId: string;
    /**
     * 实例ID，为板卡ID/容器ID。
     * @example `i-5sadvk2xnylvra9kyejcnevi6`
     */
    InstanceId: string;
    /**
     * 实例网络映射信息。
     */
    NetworkInfo: {
        /**
         * 内网IP。
         * @example `10.0.XX.XX`
         */
        InternalIp: string;
        /**
         * 内网端口。
         * @example `2020/2025`
         */
        InternalPort: string;
        /**
         * 公网IP。
         * @example `39.105.XX.XX`
         */
        ExternalIp: string;
        /**
         * 外部端口。
         * @example `20`
         */
        ExternalPort: string;
        /**
         * 公网所属运营商。
         * @example `cmcc`
         */
        ISP: string;
        /**
         * 外网端口状态。
         * @example `Running`
         */
        Status: string;
    }[];
}
