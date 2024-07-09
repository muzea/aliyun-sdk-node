export interface CreateCustomBlockRecordRequest {
    /**
     * 资产实例的UUID列表。多个UUID之间使用半角逗号（,）分隔。
     * @example `71c846d6-5c84-4714-acfc-58265bc3****,5013b5e8-1613-43a8-b4de-651db318****,df53f0ad-b3ba-4fe0-9ec7-f42a2ae2****`
     */
    "Uuids": string;
    /**
     * 指定需要进行阻断的单个IP地址，为服务器阻断该IP上面的流量访问。
     * @example `192.168.xx.xx`
     */
    "BlockIp": string;
    /**
     * 自定义IP与服务器的流量禁用方向。
     * 取值：
     * - **in**：入流量
     * - **out**：出流量
     * @example `in`
     */
    "Bound": string;
    /**
     * 该策略的到期时间。
     * @example `1859094550000`
     */
    "ExpireTime": number;
}
