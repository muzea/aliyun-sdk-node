export interface ListApplicationsForPrivateAccessPolicyResponse {
    /**
     * 本次请求的ID。
     * @example `4D169859-A4F2-5EC8-853B-8447787C0D8A`
     */
    RequestId: string;
    /**
     * 内网访问策略列表。
     */
    Polices: {
        /**
         * 策略ID。
         * @example `pa-policy-1b0d0e8b4bcf****`
         */
        PolicyId: string;
        /**
         * 内网访问应用集合。
         */
        Applications: {
            /**
             * 内网访问应用ID。
             * @example `pa-application-7a9243dd02f4****`
             */
            ApplicationId: string;
            /**
             * 内网访问应用名称。
             * @example `application_name`
             */
            Name: string;
            /**
             * 内网访问应用描述。
             * @example `这是一条被内网访问策略引用的内网访问应用`
             */
            Description: string;
            /**
             * 内网访问应用地址集合。
             */
            Addresses: string[];
            /**
             * 内网访问应用端口范围集合。
             */
            PortRanges: {
                /**
                 * 起始端口。
                 * @example `80`
                 */
                Begin: number;
                /**
                 * 结束端口。
                 * @example `81`
                 */
                End: number;
            }[];
            /**
             * 内网访问应用协议。取值：
             * - **All**：全部。
             * - **TCP**
             * - **UDP**
             * @example `TCP`
             */
            Protocol: string;
            /**
             * 内网访问应用状态。取值：
             * - **Enabled**：开启。
             * - **Disabled**：关闭。
             * @example `Enabled`
             */
            Status: string;
            /**
             * 内网访问应用创建时间。
             * @example `2022-09-27 18:10:25`
             */
            CreateTime: string;
        }[];
    }[];
}
