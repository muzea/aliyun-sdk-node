export interface DescribeOfflineMachinesResponse {
    /**
     * 分页查询时，显示的当前页的页码。
     * @example `1`
     */
    CurrentPage: number;
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `7E0618A9-D5EF-4220-9471-C42B5E92719F`
     */
    RequestId: string;
    /**
     * 分页查询时，显示的每页数据的最大条数。
     * @example `5`
     */
    PageSize: number;
    /**
     * 数据的总条数。
     * @example `44`
     */
    TotalCount: number;
    /**
     * 服务器信息列表。
     */
    MachineList: {
        /**
         * 服务器UUID。
         * @example `6d5b361f-958d-48a8-a9d2-d6e82c1****`
         */
        Uuid: string;
        /**
         * 服务器所在的地域。
         * @example `cn-hangzhou`
         */
        MachineRegion: string;
        /**
         * 服务器外网IP。
         * @example `120.79.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器的服务商名称。
         * 取值：
         * - **ALIYUN**：阿里云
         * - **OUT**：云外资产
         * - **IDC**：IDC
         * - **TENCENT**：其它云
         * - **HUAWEICLOUD**：其它云
         * - **Microsoft**：其它云
         * - **AWS**：其它云
         * - **TRIPARTITE**：轻量级服务器
         * @example `ALIYUN`
         */
        VendorName: string;
        /**
         * 服务器实例的名称。
         * @example `sql-test-001`
         */
        InstanceName: string;
        /**
         * 服务器的操作系统。取值：
         * - **linux**：linux
         * - **windows**：windows
         * - **windows-2003**：windows-2003
         * @example `linux`
         */
        Os: string;
        /**
         * 服务器实例的ID。
         * @example `sas-bdrvxb4b****`
         */
        InstanceId: string;
        /**
         * 服务器的私网IP地址。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 服务器厂商。取值：
         * - **0**：阿里云资产
         * - **1**：云外资产
         * - **2**：IDC资产
         * - **3**、**4**、**5**、**7**：其它云资产
         * - **8**：轻量级资产
         * @example `0`
         */
        Vendor: number;
        /**
         * 服务器所在的地域的ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
    }[];
}
