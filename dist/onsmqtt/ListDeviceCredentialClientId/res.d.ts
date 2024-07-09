export interface ListDeviceCredentialClientIdResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `020F6A43-19E6-4B6E-B846-44EB31DF****`
     */
    RequestId: string;
    /**
     * 返回信息列表。
     */
    DeviceCredentialClientIdList: {
        /**
         * 查询结果总数。
         * @example `10`
         */
        Total: string;
        /**
         * 客户端列表。
         */
        ClientIdList: string[];
        /**
         * 当前返回的查询记录是第几页。
         * @example `1`
         */
        PageNo: string;
        /**
         * 每页显示的最大结果数。
         * @example `100`
         */
        PageSize: string;
        /**
         * 是否拥有下一次查询的令牌（Token）。取值：
         * - 第一次查询和没有下一次查询时，均无需填写。
         * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
         * @example `634dxxxxx75b5f`
         */
        NextToken: string;
    };
}
