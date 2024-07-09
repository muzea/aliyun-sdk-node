export interface DescribeUuidsByVulNamesResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `97286A-4A6B-4A4-95FA-EC7E3E2451`
     */
    RequestId: string;
    /**
     * 资产统计信息列表。
     */
    MachineInfoStatistics: {
        /**
         * 服务器UUID。
         * @example `18375c64-eaa2-4702-92b0-4ee7******`
         */
        Uuid: string;
        /**
         * 服务器机器IP。
         * @example `192.168.XX.XX`
         */
        MachineIp: string;
        /**
         * 服务器的操作系统名称。
         * @example `windows`
         */
        Os: string;
        /**
         * 服务器机器名称。
         * @example `TestMachine`
         */
        MachineName: string;
        /**
         * 服务器实例ID。
         * @example `i-wz9gd1os5talju****`
         */
        MachineInstanceId: string;
        /**
         * 实例所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 关联实例的公网IP。
         * @example `47.98.XX.XX`
         */
        InternetIp: string;
        /**
         * 关联实例的私网IP。
         * @example `172.18.XX.XX`
         */
        IntranetIp: string;
    }[];
    /**
     * 服务器的漏洞的总数量。
     * @example `2`
     */
    VulCount: number;
}
