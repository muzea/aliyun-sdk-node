export interface ListIdpConfigsResponse {
    /**
     * 本次请求的ID。
     * @example `FD724DBC-CD76-5235-BF76-59C51B73296D`
     */
    RequestId: string;
    /**
     * 身份源配置。
     */
    Data: {
        /**
         * 记录总数。
         * @example `1`
         */
        TotalNum: number;
        /**
         * 身份源配置列表。
         */
        DataList: {
            /**
             * 身份源配置ID。
             * @example `277`
             */
            Id: string;
            /**
             * 身份源配置名称。
             * @example `示例身份源`
             */
            Name: string;
            /**
             * 身份源配置类型。
             * @example `DingTalk`
             */
            Type: string;
            /**
             * 身份源配置描述。
             * @example `示例描述`
             */
            Description: string;
            /**
             * 二次认证类型。
             * @example `totp`
             */
            Mfa: string;
            /**
             * 移动端登录类型。
             * @example `password`
             */
            MobileLoginType: string;
            /**
             * 移动端二次认证配置类型。
             * @example `password`
             */
            MobileMfaConfigType: string;
            /**
             * 多身份源配置ID列表。
             * @example `1482,1355`
             */
            MultiIdpInfo: string;
            /**
             * PC端登录类型。
             * @example `password`
             */
            PcLoginType: string;
            /**
             * 身份源配置启用状态。取值：
             * - **Enabled**：开启。
             * - **Disabled**：关闭。
             * @example `Disabled`
             */
            Status: string;
            /**
             * 更新时间。
             * @example `2023-05-09T02:22:41.430Z`
             */
            UpdateTime: string;
        }[];
    };
}
