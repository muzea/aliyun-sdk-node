export interface DescribeAppAttributesResponse {
    /**
     * 返回指定的页码
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID
     * @example `8883AC74-259D-4C0B-99FC-0B7F9A588B2F`
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
    Apps: {
        /**
         * 由 AppAttribute 组成的数组格式，返回app的信息
         */
        AppAttribute: {
            /**
             * APP名称
             * @example `CreateApptest`
             */
            AppName: string;
            /**
             * 修改时间(格林威治时间)
             * @example `2016-07-31T04:10:19Z`
             */
            ModifiedTime: string;
            /**
             * APP描述信息
             * @example `App test`
             */
            Description: string;
            /**
             * 创建时间(格林威治时间)
             * @example `2016-07-31T04:10:19Z`
             */
            CreatedTime: string;
            /**
             * APP编号
             * @example `20112314518278`
             */
            AppId: number;
            /**
             * 扩展信息
             * @example `110461946884`
             */
            Extend: string;
            Tags: {
                /**
                 * 标签列表
                 */
                TagInfo: {
                    /**
                     * 标签键
                     * @example `appid`
                     */
                    Key: string;
                    /**
                     * 标签值
                     * @example `123`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
