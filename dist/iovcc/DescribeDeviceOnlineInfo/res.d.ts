export interface DescribeDeviceOnlineInfoResponse {
    /**
     * 请求ID。
     * @example `629586FE-CB2E-4742-995E-121F952CEB72`
     */
    RequestId: string;
    /**
     * 设备在线详情列表。
     */
    Devices: {
        /**
         * 最近联网时间
         * @example `1525701500000`
         */
        LoginTime: number;
        /**
         * dis系统设备ID
         * @example `fc71429ddd9b473c81d7ef5f33ab10cc`
         */
        DeviceId: string;
        /**
         * 设备是否在线。
         * 1表示在线，0表示不在线，-1表示设备不存在。
         * @example `1`
         */
        Online: number;
        /**
         * iovcc项目工程ID
         * @example `gsgshhfs`
         */
        ProjectId: string;
        /**
         * ias系统账号ID
         * @example `123xxxxxxxxxxx`
         */
        IasId: string;
        /**
         * 系统版本
         * @example `5.3.0`
         */
        SystemVersion: string;
        /**
         * 设备机型
         * @example `iphone7`
         */
        Terminal: string;
        /**
         * cmns客户端版本
         * @example `2.1.0.1.20170327`
         */
        ClientVersion: string;
    }[];
}
