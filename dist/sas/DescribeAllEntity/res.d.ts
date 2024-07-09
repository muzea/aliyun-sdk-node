export interface DescribeAllEntityResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 实例列表。
     */
    EntityList: {
        /**
         * 服务器的UUID。
         * @example `4fe8e1cd-3c37-4851-b9de-124da32c****`
         */
        Uuid: string;
        /**
         * 资产分组ID。
         * @example `281801`
         */
        GroupId: number;
        /**
         * 公网IP地址。
         * @example `172.19.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器实例名称。
         * @example `abc`
         */
        InstanceName: string;
        /**
         * 服务器IP地址。
         * @example `101.132.XX.XX`
         */
        Ip: string;
        /**
         * 服务器的操作系统。取值：
         * - **linux**
         * - **windows**
         * @example `windows`
         */
        Os: string;
        /**
         * 私网IP地址。
         * @example `100.104.XX.XX`
         */
        IntranetIp: string;
    }[];
}
