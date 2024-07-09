export interface ListApplicationsForPrivateAccessTagResponse {
    /**
     * 本次请求的ID。
     * @example `B608C6AE-623D-55C4-9454-601B88AE937E`
     */
    RequestId: string;
    /**
     * 内网访问标签列表。
     */
    Tags: {
        /**
         * 内网访问标签ID。
         * @example `tag-7ffc82853476****`
         */
        TagId: string;
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
             * @example `private_access_application_name
            `
             */
            Name: string;
            /**
             * 内网访问应用描述。
             * @example `这是一条内网访问应用
            `
             */
            Description: string;
            /**
             * 内网访问应用地址集合。
             */
            Addresses: string[];
            /**
             * 内网访问应用端口范围集合。多个端口范围不可重复或重叠。
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
             * @example `All`
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
