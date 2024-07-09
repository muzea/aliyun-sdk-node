export interface DescribeExposedInstanceListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `598A4A61-ABA7-456B-8725-7378258276D9`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    PageInfo: {
        /**
         * 分页查询时，当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，每页最多显示的数据条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 暴露在互联网的服务器数据的总条数。
         * @example `2`
         */
        TotalCount: number;
        /**
         * 分页查询时，当前页显示的数据条数。
         * @example `2`
         */
        Count: number;
    };
    /**
     * 资产暴露分析的列表信息。
     */
    ExposedInstances: {
        /**
         * 暴露在互联网上的公网IP。
         * @example `116.12.XX.XX`
         */
        ExposureIp: string;
        /**
         * 暴露在互联网上可被黑客利用的漏洞总数量。
         * @example `0`
         */
        TotalVulCount: number;
        /**
         * 服务器公网IP。
         * @example `116.12.XX.XX`
         */
        InternetIp: string;
        /**
         * 暴露在互联网上可被黑客利用的低危漏洞数量。
         * @example `0`
         */
        NntfVulCount: number;
        /**
         * 服务器实例ID。
         * @example `i-bp1g6wxdwps7s9dz****`
         */
        InstanceId: string;
        /**
         * 暴露方式。取值：
         * - **INTERNET_IP**：ECS公网IP
         * - **SLB**：负载均衡SLB公网IP
         * - **EIP**：弹性公网IP
         * - **DNAT**：使用DNAT功能连接互联网的NAT网关
         * @example `INTERNET_IP`
         */
        ExposureType: string;
        /**
         * 服务器私网IP。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 服务器所在区域的ID。
         * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
         * @example `cn-hangzhou`
         */
        RegionId: string;
        /**
         * 暴露方式对应的实例ID。不同暴露方式对应不同的实例ID，取值：
         * - ExposureType为**INTERNET_IP**时：取值为空。
         * - ExposureType为**SLB**时：取值为负载均衡公网实例ID。
         * - ExposureType为**EIP**时：取值为弹性公网IP的实例ID。
         * - ExposureType为**DNAT**时：取值为NAT网关实例ID。
         * @example `i-ew11313a****`
         */
        ExposureTypeId: string;
        /**
         * 暴露在互联网上可被黑客利用的高危漏洞数量。
         * @example `0`
         */
        AsapVulCount: number;
        /**
         * 暴露在互联网上的端口。
         * @example `22`
         */
        ExposurePort: string;
        /**
         * 服务器UUID。
         * @example `dd803d9e-a337-4add-9c5b-7d503e08****`
         */
        Uuid: string;
        /**
         * 服务器分组名称。
         * @example `testGroup`
         */
        GroupName: string;
        /**
         * 服务器分组ID。
         * @example `9469268`
         */
        GroupId: number;
        /**
         * 暴露在互联网上的服务器总数量。
         * @example `0`
         */
        ExploitHealthCount: number;
        /**
         * 服务器名称。
         * @example `abc_centos7.2_005`
         */
        InstanceName: string;
        /**
         * 暴露在互联网上的系统组件。
         * @example `openssl,openssh`
         */
        ExposureComponent: string;
        /**
         * 暴露在互联网上可被黑客利用的中危漏洞数量。
         * @example `0`
         */
        LaterVulCount: number;
    }[];
}
