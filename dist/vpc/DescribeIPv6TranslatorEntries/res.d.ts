export interface DescribeIPv6TranslatorEntriesResponse {
    /**
     * 每页包含多少条目。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `54B48E3D-DF70-471B-AA93-08E683A1B45`
     */
    RequestId: string;
    /**
     * 当前页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 列表条条目数。
     * @example `1`
     */
    TotalCount: number;
    Ipv6TranslatorEntries: {
        /**
         * 查询到的IPv6转换映射条目。
         */
        Ipv6TranslatorEntry: {
            /**
             * 访问控制策略类型。
             * - **white**：允许访问策略组中的IPv6地址访问后端服务。
             * - **black**：禁止访问策略组中的IPv6地址访问后端服务。
             * @example `white`
             */
            AclType: string;
            /**
             * IPv6转换映射条目的状态。
             * @example `active`
             */
            EntryStatus: string;
            /**
             * 协议类型。
             * @example `tcp`
             */
            TransProtocol: string;
            /**
             *  IPv6转换映射条目所属的IPv6转换服务实例ID。
             * @example `ipv6trans-bp1858ys****`
             */
            Ipv6TranslatorId: string;
            /**
             * IPv6转换映射条目的描述。
             * @example `description`
             */
            EntryDescription: string;
            /**
             *  IPv6转换映射条目ID。
             * @example `ipv6transentry-bp1g8bhrde****`
             */
            Ipv6TranslatorEntryId: string;
            /**
             *  IPv6转换服务实例分配的IPv6地址的使用端口。
             * @example `80`
             */
            AllocateIpv6Port: number;
            /**
             * 后端IPv4服务器的公网IP地址。
             * @example `47.99.XX.XX`
             */
            BackendIpv4Addr: string;
            /**
             * 需要提供IPv6访问的IPv4服务器所使用的公网IPv4端口。
             * @example `80`
             */
            BackendIpv4Port: string;
            /**
             *  IPv6转换服务实例的地域。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * IPv6转换映射条目的带宽。
             * @example `1`
             */
            EntryBandwidth: string;
            /**
             * 关联的访问控制策略组ID。
             * @example `ipv6transacl-bp1de2****`
             */
            AclId: string;
            /**
             * IPv6转换映射条目的名称。
             * @example `name`
             */
            EntryName: string;
            /**
             * 是否开启了访问控制。
             * @example `on`
             */
            AclStatus: string;
            /**
             * 分配的IPv6转换服务实例的IPv6地址。
             * @example `2400:3200:1600::XX`
             */
            AllocateIpv6Addr: string;
        }[];
    };
}
