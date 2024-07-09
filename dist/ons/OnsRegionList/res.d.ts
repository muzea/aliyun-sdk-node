export interface OnsRegionListResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `72D14A84-45E5-4E01-A6DB-F63C4721****`
     */
    RequestId: string;
    Data: {
        /**
         * 查询结果。
         */
        RegionDo: {
            /**
             * 更新时间。
             * @example `1411623866000`
             */
            UpdateTime: number;
            /**
             * 地域名称。
             * @example `华东1（杭州）`
             */
            RegionName: string;
            /**
             * 渠道名称。
             * @example `ALIYUN`
             */
            ChannelName: string;
            /**
             * 创建时间。
             * @example `1411623866000`
             */
            CreateTime: number;
            /**
             * ID。
             * @example `1`
             */
            Id: number;
            /**
             * 地域的ID。
             * @example `cn-hangzhou`
             */
            OnsRegionId: string;
        }[];
    };
}
