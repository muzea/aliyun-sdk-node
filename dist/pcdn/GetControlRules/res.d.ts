export interface GetControlRulesResponse {
    /**
     * 业务码，成功返回0。
     * @example `0`
     */
    Code: number;
    /**
     * 请求ID。
     * @example `20963AEE-E3A5-461F-8809-C494558373AB`
     */
    RequestId: string;
    /**
     * 分页信息。
     */
    Pager: {
        /**
         * 每页的记录条数。
         * @example `2`
         */
        PageSize: number;
        /**
         * 总记录的条数。
         * @example `173`
         */
        Total: number;
        /**
         * 当前页码。
         * @example `1`
         */
        Page: number;
    };
    SettingList: {
        /**
         * 返回的计费信息列表。
         */
        Setting: {
            /**
             * 插入时间。
             * @example `2017-06-02 13:16:37.0`
             */
            CreatedAt: string;
            /**
             * 业务类型。
             * @example `live`
             */
            BusinessType: string;
            /**
             * 用户ID。
             * @example `200000`
             */
            ClientId: string;
            /**
             * 规则是否启用，一般为true。
             * @example `true`
             */
            Usable: boolean;
            /**
             * 终端类型代码。
             * @example `01`
             */
            PlatformType: string;
            /**
             * 地区。
             * @example `11`
             */
            Region: string;
            /**
             * 市场类型。
             * @example `all`
             */
            MarketType: string;
            /**
             * 更新时间。
             * @example `2017-06-01 21:19:12.0`
             */
            UpdatedAt: string;
            /**
             * 应用版本号。
             * @example `6.6.2`
             */
            AppVersion: string;
            /**
             * 运营商。
             * @example `unicom`
             */
            IspName: string;
            /**
             * 启停状态。
             * @example `false`
             */
            Onoff: boolean;
            /**
             * 规则名称。
             * @example `qqq`
             */
            Name: string;
            /**
             * 启停规则资源ID。
             * @example `lrntfr`
             */
            ResourceId: string;
        }[];
    };
}
