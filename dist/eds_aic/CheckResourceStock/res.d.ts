export interface CheckResourceStockResponse {
    /**
     * 请求ID。
     * @example `805D8FB6-512A-531C-9E4D-2A807D3C****`
     */
    RequestId: string;
    /**
     * 资源库存详情。
     */
    ResourceStockModels: {
        /**
         * 地域ID。
         * @example `cn-shanghai`
         */
        RegionId: string;
        /**
         * 可用区ID。
         * @example `cn-shanghai-b`
         */
        ZoneId: string;
        /**
         * 实例组库存状态。
         * @example `Available`
         */
        StockStatus: string;
    }[];
}
