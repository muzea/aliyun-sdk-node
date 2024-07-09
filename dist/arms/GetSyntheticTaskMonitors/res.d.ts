export interface GetSyntheticTaskMonitorsResponse {
    /**
     * 请求ID。
     * @example `21E85B16-75A6-429A-9F65-8AAC9A54****`
     */
    RequestId: string;
    /**
     * 系统返回状态码：
     * - 1001：请求成功
     * - 1002：请求失败
     * - 1003：参数错误
     * - 1004：鉴权失败
     * - 1006：任务不存在
     * - 1099：内部错误
     * @example `1001`
     */
    Code: string;
    /**
     * 调用失败返回说明。
     * @example `null`
     */
    Msg: string;
    /**
     * 监测点详情。
     */
    Data: {
        /**
         * 客户端类型：
         * - 1：IDC
         * - 2：LASTMILE。
         * @example `1`
         */
        ClientType: number;
        /**
         * 城市ID。
         * @example `1100101`
         */
        CityCode: number;
        /**
         * 城市名称。
         * @example `北京市`
         */
        City: string;
        /**
         * 区域。
         * @example `北京`
         */
        District: string;
        /**
         * 运营商ID。
         * @example `18`
         */
        NetServiceId: number;
        /**
         * 运营商名称。
         * @example `XXX`
         */
        NetServiceName: string;
        /**
         * 任务活跃状态：
         * - 0：活跃。
         * - 1：繁忙。
         * @example `0`
         */
        Busy: number;
    }[];
}
