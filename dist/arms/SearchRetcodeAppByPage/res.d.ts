export interface SearchRetcodeAppByPageResponse {
    /**
     * 请求ID。
     * @example `626037F5-FDEB-45B0-804C-B3C92797A64E`
     */
    RequestId: string;
    /**
     * 每页返回信息。
     */
    PageBean: {
        /**
         * 当前查询页码。
         * @example `1`
         */
        PageNumber: number;
        /**
         * 每页数据行数。
         * @example `2`
         */
        PageSize: number;
        /**
         * 查询结果总数。
         * @example `8`
         */
        TotalCount: number;
        /**
         * 每页返回前端监控任务信息。
         */
        RetcodeApps: {
            /**
             * 监控类型。
             * - `TRACE`：应用监控。
             * - `RETCODE`：前端监控。
             * @example `RETCODE`
             */
            Type: string;
            /**
             * 应用名称。
             * @example `a3`
             */
            AppName: string;
            /**
             * 接入的前端类型。
             * - `web`：Web端。
             * - `weex`：Weex端。
             * - `mini_dd`：钉钉应用。
             * - `mini_alipay`：支付宝小程序。
             * - `mini_wx`：微信小程序。
             * - `mini_common`：其他类型小程序。
             * @example `web`
             */
            RetcodeAppType: string;
            /**
             * 更新时间。
             * @example `1545363321000`
             */
            UpdateTime: number;
            /**
             * 创建时间。
             * @example `1545363321000`
             */
            CreateTime: number;
            /**
             * 应用的ID标识串。
             * @example `eb4zdose6v@9781be0f44d****`
             */
            Pid: string;
            /**
             * 应用ID，数据库自增字段。
             * @example `16064`
             */
            AppId: number;
            /**
             * 用户ID。
             * @example `12341234`
             */
            UserId: string;
            /**
             * 地域ID。
             * @example `cn-hangzhou`
             */
            RegionId: string;
            /**
             * 应用别名。
             * @example `c1`
             */
            NickName: string;
            /**
             * 资源组ID。
             * @example `rg-acfmxyexli2****`
             */
            ResourceGroupId: string;
            /**
             * 标签。
             */
            Tags: {
                /**
                 * 标签的键（key）。
                 * @example `TestKey`
                 */
                Key: string;
                /**
                 * 标签的值（value）。
                 * @example `TestValue`
                 */
                Value: string;
            }[];
        }[];
    };
}
