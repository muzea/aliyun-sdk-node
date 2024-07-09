export interface ListAvailableBusiRegionsResponse {
    /**
     * 请求ID。
     * @example `DE77A7F3-3B74-41C0-A5BC-CAFD188C28B6`
     */
    RequestId: string;
    /**
     * 地域信息。
     */
    Regions: {
        /**
         * 地域名称。
         * @example `青岛`
         */
        LocalName: string;
        /**
         * 地域ID。
         * @example `cn-qingdao`
         */
        RegionId: string;
        /**
         * 是否为阿里云POP点。取值：
         * - **true**：是阿里云POP点。
         * - **false**：不是阿里云POP点。
         * @example `false`
         */
        Pop: boolean;
        /**
         * 是否为中国内地地域。取值：
         * - **true**：是中国内地地域。
         * - **false**：非中国内地地域。
         * @example `true`
         */
        ChinaMainland: boolean;
    }[];
}
