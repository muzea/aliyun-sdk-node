export interface CountActivatedOrNewRegistrationDeviceResponse {
    /**
     * 请求ID
     * @example `6F25F67C-F411-499F-BCE2-67CA563CB064`
     */
    RequestId: string;
    /**
     * 统计数据返回结果
     */
    Statistics: {
        Categories: string[];
        /**
         * 统计的分类结果
         */
        Series: {
            Data: string[];
            /**
             * 统计分类
             * @example `increment`
             */
            Name: string;
        }[];
    };
}
