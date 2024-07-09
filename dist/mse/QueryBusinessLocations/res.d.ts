export interface QueryBusinessLocationsResponse {
    /**
     * 返回信息。
     * @example `参数不合法`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `3369AD10-F1A6-4E6F-B99E-20F51826****`
     */
    RequestId: string;
    /**
     * 数据概览。
     */
    Data: {
        /**
         * 订购。
         * @example `6`
         */
        Ordering: number;
        /**
         * 类型。
         * @example `region`
         */
        Type: string;
        /**
         * 地域英语名称。
         * @example `Asia Pacific`
         */
        DistrictEnName: string;
        /**
         * 显示名称。
         * @example `华东2（上海）`
         */
        ShowName: string;
        /**
         * 地域中文名称。
         * @example `亚太`
         */
        DistrictCnName: string;
        /**
         * 英语名称。
         * @example `China (Shanghai)`
         */
        EnName: string;
        /**
         * 地域ID。
         * @example `asia-pacific`
         */
        DistrictId: string;
        /**
         * 地域展示名称。
         * @example `亚太`
         */
        DistrictShowName: string;
        /**
         * 描述。
         * @example `华东 2`
         */
        Description: string;
        /**
         * 英语描述。
         * @example `China East 2 (Shanghai)`
         */
        EnDescription: string;
        /**
         * 中文名称。
         * @example `华东2（上海）`
         */
        CnName: string;
        /**
         * 名称。
         * @example `cn-shanghai`
         */
        Name: string;
        /**
         * 地区订购。
         * @example `101`
         */
        DistrictOrdering: number;
    }[];
    /**
     * 错误码。
     * @example `mse-100-000`
     */
    ErrorCode: string;
    /**
     * 请求结果。
     * @example `true`
     */
    Success: string;
}
