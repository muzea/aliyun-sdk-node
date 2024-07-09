export interface GetApplicationResponse {
    Application: {
        /**
         * 应用名称。
         * @example `HDFS`
         */
        ApplicationName: string;
        /**
         * 应用版本。
         * @example `2.8.5`
         */
        ApplicationVersion: string;
        /**
         * 社区版本。
         * @example `2.8.5`
         */
        CommunityVersion: string;
        /**
         * 操作列表。
         */
        Actions: {
            /**
             * 执行范围。
             * @example `CLUSTER`
             */
            RunActionScope: string;
            /**
             * 组件名称。
             * @example `DataNode`
             */
            ComponentName: string;
            /**
             * 操作名称。
             * @example `START`
             */
            ActionName: string;
            /**
             * 操作描述。
             * @example `描述`
             */
            Description: string;
            /**
             * 命令。
             * @example `START`
             */
            Command: string;
            /**
             * 操作参数。
             */
            ActionParams: {
                /**
                 * 动作参数KEY。
                 */
                Key: string;
                /**
                 * 动作参数属性。
                 */
                ValueAttribute: {
                    /**
                     * 属性值类型。
                     * @example `STRING`
                     */
                    ValueType: string;
                    /**
                     * 最大值。
                     * @example `20`
                     */
                    ValueMaximum: string;
                    /**
                     * 最小值。
                     * @example `1`
                     */
                    ValueMinimum: string;
                    /**
                     * 值单位。
                     * @example `number`
                     */
                    ValueUnit: string;
                    /**
                     * 值步长。
                     * @example `2`
                     */
                    ValueIncrementStep: string;
                    /**
                     * 值表述。
                     * @example `描述`
                     */
                    Description: string;
                };
                /**
                 * 动作参数描述。
                 * @example `start`
                 */
                Description: string;
            }[];
        }[];
        /**
         * 应用操作状态。
         */
        ApplicationState: string;
    };
    /**
     * 请求ID。
     * @example `DD6B1B2A-5837-5237-ABE4-FF0C8944****`
     */
    RequestId: string;
}
