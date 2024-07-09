export interface DescribeEnsNetDistrictResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    EnsNetDistricts: {
        /**
         * 地域信息。
         */
        EnsNetDistrict: {
            /**
             * 地域下的节点数量。
             * @example `2`
             */
            EnsRegionIdCount: string;
            /**
             * 地域代码。
             * @example `100106`
             */
            NetDistrictCode: string;
            /**
             * 地域英文名称。
             * @example `southWest`
             */
            NetDistrictEnName: string;
            /**
             * 地域上级代码。
             * @example `100000`
             */
            NetDistrictFatherCode: string;
            /**
             * 地域层级。
             * - **Big**：大区级。
             * - **Middle**：省份级。
             * - **Small**：城市级。
             * @example `Big`
             */
            NetDistrictLevel: string;
            /**
             * 地域中文名称。
             * @example `西南`
             */
            NetDistrictName: string;
        }[];
    };
    /**
     * 请求ID。
     * @example `F3B261DD-3858-4D3C-877D-303ADF374600`
     */
    RequestId: string;
}
