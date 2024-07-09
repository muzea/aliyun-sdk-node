export interface DescribeDcdnL2IpsResponse {
    /**
     * 请求ID。
     * @example `C370DAF1-C838-4288-A1A0-9A87633D248E`
     */
    RequestId: string;
    /**
     * 节点IP段列表，IP段以CIDR形式表示。
     */
    Vips: string[];
}
