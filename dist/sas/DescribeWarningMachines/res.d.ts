export interface DescribeWarningMachinesResponse {
    /**
     * 分页查询时，当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 分页查询时，每页显示的服务器信息的数量。默认值为**10**，表示每页显示10条服务器信息。
     * @example `10`
     */
    PageSize: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6E4CBE87-E887-5AF1-86D2-78EB4AA3E771`
     */
    RequestId: string;
    /**
     * 查询到的服务器信息的总数量。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页查询时，当前页面显示的服务器信息的数量。
     * @example `10`
     */
    Count: number;
    /**
     * 服务器的详细信息。
     */
    WarningMachines: {
        /**
         * 基线检查风险项修复完成后，风险项的验证状态。取值：
         * - **1**：已完成
         * - **2**：验证中
         * @example `1`
         */
        Status: number;
        /**
         * 服务器的公网IP。
         * @example `1.2.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的实例ID。
         * @example `i-m5ee8b9nr3h30mhb****`
         */
        InstanceId: string;
        /**
         *  服务器上存在的**高危**检查项的数量。
         * @example `10`
         */
        HighWarningCount: number;
        /**
         * 服务器的私网IP。
         * @example `1.2.XX.XX`
         */
        IntranetIp: string;
        /**
         * 服务器所在的地域ID。
         * @example `cn-qingdao`
         */
        RegionId: string;
        /**
         *  服务器上存在的**低危**检查项的数量。
         * @example `3`
         */
        LowWarningCount: number;
        /**
         * 该服务器是否有端口对公网开放。取值：
         * - **true**：服务器有端口对公网开放
         * - **false**：服务器无端口对公网开放
         * @example `true`
         */
        PortOpen: boolean;
        /**
         * 执行基线检查的服务器的UUID。
         * @example `9888955c-0076-49da-bd9c-34f5492b****`
         */
        Uuid: string;
        /**
         * 服务器上存在的**中危**检查项的数量。
         * @example `2`
         */
        MediumWarningCount: number;
        /**
         *  服务器通过检查的检查项的数量。
         * @example `10`
         */
        PassCount: number;
        /**
         * 服务器实例的名称。
         * @example `oracle-win-00****`
         */
        InstanceName: string;
        /**
         * 资产是否已绑定授权。取值：
         * - **true**：已绑定授权
         * - **false**：未绑定授权
         * @example `true`
         */
        Bind: boolean;
        /**
         * 资产的授权版本。取值：
         * - **1**：免费版
         * - **6**：防病毒版
         * - **5**：高级版
         * - **3**：企业版
         * - **7**：旗舰版
         * - **10**：仅采购增值服务版
         * @example `7`
         */
        AuthVersion: number;
        /**
         * 容器ID。
         * @example `48a6d9a92435a13ad573372c3f3c63b7e04d106458141df9f92155709d******`
         */
        ContainerId: string;
        /**
         * 容器名称。
         * @example `redis`
         */
        ContainerName: string;
    }[];
}
