export interface GetCreateCustomerInformationResponse {
    /**
     * 请求iD
     * @example `AE0BA8E5-1E0C-5171-852F-826301C76BBE`
     */
    RequestId: string;
    /**
     * 物联网卡客户资料登记URL地址。
     * @example `https://*******`
     */
    URL: string;
    /**
     * 是否已经登记过标记，未登记资料，此字段无返回
     * @example `True`
     */
    CanBuyCard: string;
}
