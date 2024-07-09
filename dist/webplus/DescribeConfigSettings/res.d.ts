export interface DescribeConfigSettingsResponse {
    ConfigSettings: {
        /**
         * 配置设置
         */
        ConfigSetting: {
            /**
             * 选项名称
             * @example `intervalSeconds`
             */
            OptionName: string;
            /**
             * 路径名称
             * @example `application.healthCheck`
             */
            PathName: string;
            /**
             * 配置设置值
             * @example `3`
             */
            SettingValue: string;
        }[];
    };
    /**
     * 响应消息，若成功请求为success
     * @example `success`
     */
    Message: string;
    /**
     * 请求ID
     * @example `F4D6243F-67B6-4528-A3CA-A963E12*****`
     */
    RequestId: string;
    /**
     * 响应代码，若成功请求为OK
     * @example `OK`
     */
    Code: string;
}
