export interface GetCreateCustomerInfomationResponse {
    /**
     * 请求iD
     * @example `2E759287-F208-589B-82D8-6D7A30F417E3`
     */
    RequestId: string;
    /**
     * 物联网卡客户资料登记URL地址。
     * @example `https://*******`
     */
    URL: string;
    /**
     * 是否已经登记过标记
     * @example `True`
     */
    CanBuyCard: string;
}
