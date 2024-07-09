export interface DescribeContactGroupListResponse {
    /**
     * 状态码。
     * > 200表示成功。
     * @example `200`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `The Request is not authorization.`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `916EE694-03C2-47B6-85EE-5054E3C168D3`
     */
    RequestId: string;
    /**
     * 总记录条数。
     * @example `22`
     */
    Total: number;
    /**
     * 操作是否成功。取值：
     * - true：成功。
     * - false：失败。
     * @example `true`
     */
    Success: boolean;
    ContactGroups: {
        ContactGroup: string[];
    };
    ContactGroupList: {
        /**
         *  报警联系组详情列表。
         */
        ContactGroup: {
            /**
             * 报警联系组描述信息。
             * @example `PE报警组`
             */
            Describe: string;
            /**
             * 修改时间。Unix时间戳：从1970年1月1日开始所经过的毫秒数。
             * @example `1589447759000`
             */
            UpdateTime: number;
            /**
             * 创建时间。Unix时间戳：从1970年1月1日开始所经过的毫秒数。
             * @example `1507070598000`
             */
            CreateTime: number;
            /**
             * 是否支持周报订阅。取值：
             * - true：支持。
             * - false：不支持。
             * > 目前仅ECS实例数量大于5的阿里云账号支持周报订阅。
             * @example `true`
             */
            EnabledWeeklyReport: boolean;
            /**
             * 报警联系组的名称。
             * @example `Contact1`
             */
            Name: string;
            /**
             * 是否开启周报订阅。
             * - true：开启。
             * - false：关闭。
             * @example `true`
             */
            EnableSubscribed: boolean;
            Contacts: {
                Contact: string[];
            };
        }[];
    };
}
