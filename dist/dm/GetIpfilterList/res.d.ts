export interface GetIpfilterListResponse {
    /**
     * 每页显示条数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 请求id
     * @example `84DD77C7-A091-5139-9530-2D1F7CCE59E0`
     */
    RequestId: string;
    /**
     * 当前页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总数量
     * @example `1`
     */
    TotalCount: number;
    data: {
        /**
         * 数据记录
         */
        ipfilters: {
            /**
             * IP地址/IP区间/IP段
             * @example `单个IP格式，如：xxx.xxx.xxx.xxx
            IP区间格式，如：xxx.xxx.xxx.xxx-xxx.xxx.xxx.xxx
            IP段格式，如：xxx.xxx.xxx.xxx/xxx`
             */
            IpAddress: string;
            /**
             * 记录Id。
             * @example `10083`
             */
            Id: string;
            /**
             * 时间戳
             * @example `1653547140`
             */
            CreateTime: string;
        }[];
    };
}
