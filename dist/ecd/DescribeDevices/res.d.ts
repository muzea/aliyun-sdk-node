export interface DescribeDevicesResponse {
    /**
     * 请求ID。
     * @example `5BEFE642-A383-4A18-8939-FB7DE452****`
     */
    RequestId: string;
    /**
     * 返回的设备列表。
     */
    Devices: {
        /**
         * 设备ID。无影硬件终端的SN，或者无影软件客户端的UUID。
         * @example `5F52817BE267A43C608D245070D2****
        `
         */
        DeviceId: string;
        /**
         * 绑定的用户信息列表。
         */
        EndUserList: {
            /**
             * 用户ID。
             * @example `alice`
             */
            EndUserId: string;
            /**
             * 用户账号类型。
             * @example `SIMPLE`
             */
            UserType: string;
            /**
             * 便捷办公网络ID。
             * @example `cn-hangzhou+dir-jedbpr4sl9l37****
            `
             */
            DirectoryId: string;
            /**
             * AD办公网络地址。
             * @example `xn--0zw****
            `
             */
            AdDomain: string;
        }[];
    }[];
}
