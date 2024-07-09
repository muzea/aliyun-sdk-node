export interface DescribeInstanceQpsResponse {
    /**
     * 请求id
     * @example `CEF72CEB-54B6-4AE8-B225-F876FF7BZ004`
     */
    RequestId: string;
    InstanceQps: {
        /**
         * 按实例统计API请求次数
         */
        MonitorItem: {
            /**
             * 对应值
             * @example `500`
             */
            ItemValue: string;
            /**
             * 时间坐标，按照ISO8601标准表示。格式为：YYYY-MM-DDThh:mm:ssZ
             * @example `2022-03-29T06:25:00Z
            `
             */
            ItemTime: string;
        }[];
    };
}
