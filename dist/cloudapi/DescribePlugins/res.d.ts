export interface DescribePluginsResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `46373DC4-19F1-4DC8-8C31-1107289BB5E0`
     */
    RequestId: string;
    /**
     * 返回指定的每页条数
     * @example `10`
     */
    PageSize: number;
    /**
     * 返回结果的总条数
     * @example `1`
     */
    TotalCount: number;
    Plugins: {
        /**
         * 由 PluginAttribute 组成的数组格式，返回插件信息
         */
        PluginAttribute: {
            /**
             * 插件ID
             * @example `9a3f1a5279434f2ba74ccd91c295af9f`
             */
            PluginId: string;
            /**
             * 最后修改时间，格林威治时间
             * @example `2019-01-11T09:29:58Z`
             */
            ModifiedTime: string;
            /**
             * 插件定义语句
             * @example `{"unit":"MINUTE","apiDefault":20}`
             */
            PluginData: string;
            /**
             * 插件描述
             * @example `流控`
             */
            Description: string;
            /**
             * 插件名称
             * @example `firstPlugin`
             */
            PluginName: string;
            /**
             * 创建时间，格林威治时间
             * @example `2019-01-11T09:29:58Z`
             */
            CreatedTime: string;
            /**
             * 插件类型
             * @example `trafficControl`
             */
            PluginType: string;
            /**
             * 插件所在Region
             * @example `cn-qingdao`
             */
            RegionId: string;
            Tags: {
                /**
                 * 标签列表
                 */
                TagInfo: {
                    /**
                     * 标签键
                     * @example `testkey`
                     */
                    Key: string;
                    /**
                     * 标签值
                     * @example `tetstvalue`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
