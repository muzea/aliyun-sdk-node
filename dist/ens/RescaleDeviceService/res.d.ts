export interface RescaleDeviceServiceResponse {
    /**
     * 请求ID。
     * @example `3F3F3570-E721-53F6-853F-37B7725AC6CB`
     */
    RequestId: string;
    /**
     * 设备ID列表。
     */
    DeviceIds: string[];
    /**
     * 设备主要属性信息列表。
     */
    ResourceDetailInfos: {
        /**
         * 设备所在的边缘节点ID。
         * @example `cn-chongqing-1`
         */
        RegionID: string;
        /**
         * 设备ID。
         * @example `h-uf6009zoa6hdbjyqxcn1`
         */
        ID: string;
        /**
         * 设备IP。
         * @example `10.152.196.36`
         */
        IP: string;
        /**
         * 设备所在服务器NC名称。
         * @example `ens-nc2`
         */
        Server: string;
        /**
         * 设备类型。
         * @example `ens.ac6.large`
         */
        Type: string;
        /**
         * 设备状态。
         * @example `Running`
         */
        Status: string;
        /**
         * 设备的MAC地址。
         * @example `24:0B:88:04:71:E0`
         */
        Mac: string;
        /**
         * 所属运营商。
         * @example `telecom`
         */
        ISP: string;
    }[];
    /**
     * 订单ID。
     * @example `b3b5bb9a-4e0b-4cac-8ebf-e5e015726723`
     */
    OrderId: string;
}
