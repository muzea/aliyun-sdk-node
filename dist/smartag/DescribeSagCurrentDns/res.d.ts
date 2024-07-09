export interface DescribeSagCurrentDnsResponse {
    /**
     * 请求ID。
     * @example `0937DEA0-AB4B-42F4-9314-07B97D30282B`
     */
    RequestId: string;
    /**
     * 备DNS服务器IP地址。
     * @example `114.XX.XX.114`
     */
    SlaveDns: string;
    /**
     * 主DNS服务器IP地址。
     * @example `223.XX.XX.5`
     */
    MasterDns: string;
}
