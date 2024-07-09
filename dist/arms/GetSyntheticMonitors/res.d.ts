export interface GetSyntheticMonitorsResponse {
    /**
     * 请求ID。
     * @example `2FD473FF-5398-5A85-9BF6-7AB45561522F`
     */
    RequestId: string;
    /**
     * 状态码。200表示成功。
     * @example `200`
     */
    Code: number;
    /**
     * 返回结果的提示信息。
     * @example `success`
     */
    Message: string;
    /**
     * 监测点列表。
     */
    Data: {
        /**
         * 国家。
         * @example `中国`
         */
        Country: string;
        /**
         * 地域。
         * @example `浙江`
         */
        Region: string;
        /**
         * 城市。
         * @example `北京市`
         */
        City: string;
        /**
         * 城市编码
         * @example `1100101`
         */
        CityCode: string;
        /**
         * 运营商。
         * @example `阿里云`
         */
        Operator: string;
        /**
         * 运营商编码。
         * @example `1`
         */
        OperatorCode: string;
        /**
         * 拨测点客户端类型。
         * - 1：IDC
         * - 2：网民
         * - 3：移动端
         * - 4：云主机
         * @example `1`
         */
        ClientType: number;
        /**
         * 是否选中。
         * - true：选中
         * - false：未选中
         * @example `true`
         */
        CanBeSelected: boolean;
        /**
         * 是否可用。
         * - true：可用
         * - false：不可用
         * @example `true`
         */
        Available: string;
        /**
         * 是否支持IPv6。
         * - 0：不支持
         * - 1：支持
         * @example `0`
         */
        Ipv6: number;
    }[];
}
