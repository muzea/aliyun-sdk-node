export interface DescribeCheckWarningMachinesResponse {
    /**
     * 存在同样风险的服务器列表。
     */
    Machines: {
        /**
         * 服务器的UUID。
         * @example `D0D6E6E4-CB8C-4897-B852-46AEFDA0****`
         */
        Uuid: string;
        /**
         * 服务器实例的名称。
         * @example `test****`
         */
        InstanceName: string;
        /**
         * 服务器的公网IP地址。
         * @example `8.210.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的私网IP地址。
         * @example `172.25.XX.XX`
         */
        IntranetIp: string;
        /**
         * 服务器的实例ID。
         * @example `i-bp1dp42hgn1xcq8l****`
         */
        InstanceId: string;
        /**
         * 服务器所在的地域的ID。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 资产是否已绑定授权。取值：
         * - **true**：已绑定授权
         * - **false**：未绑定授权
         * @example `true`
         */
        Bind: boolean;
    }[];
    /**
     * 存在同样风险的服务器列表结果数量。
     * @example `10`
     */
    Count: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `B3D989EB-2E59-584C-8438-5DFAA34A****`
     */
    RequestId: string;
    PageSize: number;
    CurrentPage: number;
}
