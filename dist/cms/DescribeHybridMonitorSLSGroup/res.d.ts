export interface DescribeHybridMonitorSLSGroupResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `NotFound.SLSGroup`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `66683237-7126-50F8-BBF8-D67ACC919A17`
     */
    RequestId: string;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `无。`
     */
    Success: string;
    /**
     * Logstore组列表。
     */
    List: {
        /**
         * Logstore组名称。
         * @example `Logstore_test`
         */
        SLSGroupName: string;
        /**
         * Logstore组描述。
         * @example `阿里云产品归属的Logstore组。`
         */
        SLSGroupDescription: string;
        /**
         * Logstore组的配置信息。
         */
        SLSGroupConfig: {
            /**
             * 地域。
             * @example `cn-hangzhou`
             */
            SLSRegion: string;
            /**
             * 日志项目。
             * @example `aliyun-project`
             */
            SLSProject: string;
            /**
             * 日志库。
             * @example `Logstore-aliyun-all`
             */
            SLSLogstore: string;
            /**
             * 成员ID。
             * > 当您通过管理账号调用API时，显示该参数。
             * @example `120886317861****`
             */
            SLSUserId: string;
        }[];
        /**
         * 创建Logstore组的时间戳。
         * 单位：毫秒。
         * @example `1652845630000`
         */
        CreateTime: string;
        /**
         * 修改Logstore组的时间戳。
         * 单位：毫秒。
         * @example `1652845630000`
         */
        UpdateTime: string;
    }[];
    /**
     * 分页时每页显示的数据行数。
     * @example `10`
     */
    PageSize: number;
    /**
     * 页面。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 总记录条数。
     * @example `2`
     */
    Total: number;
}
