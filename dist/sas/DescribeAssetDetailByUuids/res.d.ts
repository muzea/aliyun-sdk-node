export interface DescribeAssetDetailByUuidsResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `92016EC8-D52D-49D8-9FF7-9EA340A950B9`
     */
    RequestId: string;
    /**
     * 返回的资产详情列表。
     */
    AssetList: {
        /**
         * 服务器的公网IP。
         * @example `10.10.XX.XX`
         */
        InternetIp: string;
        /**
         * 服务器资产的操作系统名称。
         * @example `CentOS  7.6 64位`
         */
        OsName: string;
        /**
         * 服务器的IP。
         * > 公网IP存在则该值为公网IP，公网IP不存在私网IP存在则为私网IP。
         * @example `10.10.XX.XX`
         */
        Ip: string;
        /**
         * 服务器的操作系统类型。
         * @example `Linux`
         */
        Os: string;
        /**
         * 资产的实例ID。
         * @example `i-rj9gda4wolo0zixi****`
         */
        InstanceId: string;
        /**
         * Agent客户端状态。取值：
         * - **online**：在线
         * - **offline**：离线
         * @example `online`
         */
        ClientStatus: string;
        /**
         * VPC实例ID。
         * @example `13231-331331`
         */
        VpcInstanceId: string;
        /**
         * 服务器的私网IP。
         * @example `192.168.XX.XX`
         */
        IntranetIp: string;
        /**
         * 资产的类型。
         * 唯一取值为**0**，表示ECS服务器。
         * @example `0`
         */
        AssetType: string;
        /**
         * 服务器所在地域。
         * > Region ID和区域名称的对应关系，请参见[地域和可用区](~~40654~~)。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 资产UUID。
         * @example `2a98f149-0256-414c-a29a-a69f8a75****`
         */
        Uuid: string;
        /**
         * 资产厂商。取值：
         * - **0**：阿里云资产
         * - **1**：云外资产
         * - **2**：IDC资产
         * - **3**、**4**、**5**、**7**：其它云资产
         * - **8**：轻量级资产
         * @example `0`
         */
        Flag: number;
        /**
         * 服务器所在地域名称。
         * @example `cn-shenzhen`
         */
        RegionName: string;
        /**
         * 资产的实例名称。
         * @example `TestInstanceName`
         */
        InstanceName: string;
        /**
         * 服务器所在的地域。
         * @example `cn-guangzhou`
         */
        Region: string;
    }[];
}
