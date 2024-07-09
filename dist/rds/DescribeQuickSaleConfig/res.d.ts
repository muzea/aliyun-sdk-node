export interface DescribeQuickSaleConfigResponse {
    /**
     * Id of the request
     * @example `5DFFE9EC-3369-5937-A4E2-507C0C86A4C6`
     */
    RequestId: string;
    /**
     * `商品code
     * - rds：包年包月
     * - bards：按量付费
     * @example `rds`
     */
    Commodity: string;
    /**
     * 商品配置详情
     */
    Items: any;
}
