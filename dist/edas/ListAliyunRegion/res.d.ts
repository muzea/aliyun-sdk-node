export interface ListAliyunRegionResponse {
    /**
     * HTTP状态码
     * @example `200`
     */
    Code: number;
    /**
     * 请求返回信息
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `b197-40ab-9155-7ca7`
     */
    RequestId: string;
    RegionEntityList: {
        /**
         * 地域列表
         */
        RegionEntity: {
            /**
             * 地域名称
             * @example `China East 1 (Hangzhou)`
             */
            Name: string;
            /**
             * 地域ID
             * @example `cn-hangzhou`
             */
            Id: string;
        }[];
    };
}
