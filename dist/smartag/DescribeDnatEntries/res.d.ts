export interface DescribeDnatEntriesResponse {
    /**
     * 记录总数。
     * @example `50`
     */
    TotalCount: number;
    /**
     * 分页查询时设置的每页行数，默认值为**10**，最大值为**50**。
     * @example `1`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `635640CA-2335-4856-A9CB-1CB5C444DC5A`
     */
    RequestId: string;
    /**
     * 实例状态列表的页码，默认值为**1**。
     * @example `12`
     */
    PageNumber: number;
    DnatEntries: {
        /**
         * DNAT条目规则列表。
         */
        DnatEntry: {
            /**
             * DNAT类型，包括以下选项：
             * * **Intranet**：缺省值，表示私网DNAT。
             * * **Internet**：表示公网DNAT。
             * @example `Intranet`
             */
            Type: string;
            /**
             * 智能接入网关实例ID。
             * @example `sag-jfh********`
             */
            SagId: string;
            /**
             * 目标私网IP地址。
             * @example `192.168.0.1`
             */
            InternalIp: string;
            /**
             * 目标私网端口号。
             * 取值范围：**1~65535**，**any**表示所有端口。
             * @example `80`
             */
            InternalPort: string;
            /**
             * 协议类型，包含以下选项：
             * * **tcp**：转发TCP协议的报文。
             * * **udp**：转发UDP协议的报文。
             * * **any**：转发所有协议的报文。
             * @example `tcp`
             */
            IpProtocol: string;
            /**
             * 公网端口。
             * 取值范围：**1~65535**，**any**表示所有端口。
             * @example `12`
             */
            ExternalPort: string;
            /**
             * DNAT实例ID。
             * @example `fwd-kxe4fq3xuzczze****`
             */
            DnatEntryId: string;
            /**
             * 外部的公网IP地址。
             * @example `10.10.**.**`
             */
            ExternalIp: string;
        }[];
    };
}
