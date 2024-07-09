export interface DescribeCdnDomainConfigsResponse {
    /**
     * 请求ID。
     * @example `C80705BF-0F76-41FA-BAD1-5B59296A4E59`
     */
    RequestId: string;
    DomainConfigs: {
        /**
         * 域名配置。
         */
        DomainConfig: {
            /**
             * 配置状态。取值：
             * - **success**：成功。
             * - **testing**：测试中。
             * - **failed**：失败。
             * - **configuring**：配置中。
             * @example `success`
             */
            Status: string;
            /**
             * 规则条件ID，非必填项。
             * 通过配置[域名配置功能参数](~~388460~~)中的功能函数**condition**（规则引擎），可以创建出规则条件（规则条件可以通过识别用户请求中携带的各种参数来匹配和过滤用户请求），每一个规则条件被创建以后都会生成一个对应的[ConfigId](~~388994~~)，ConfigId可以被当作ParentId参数被其他功能函数引用，这样规则条件就可以与功能配置一起组合形成更灵活的配置。
             * 具体配置操作请参考[批量配置域名](~~90915~~)或下文ParentId配置示例说明。
             * @example `222728944812032`
             */
            ParentId: string;
            /**
             * 配置ID。
             * @example `6295`
             */
            ConfigId: string;
            /**
             * 功能函数名称。
             * @example `aliauth`
             */
            FunctionName: string;
            FunctionArgs: {
                /**
                 * 各个功能函数所对应的参数配置。
                 */
                FunctionArg: {
                    /**
                     * 参数名称，**functionName**的配置项（可配置多个配置项）。
                     * @example `auth_type`
                     */
                    ArgName: string;
                    /**
                     * 参数值，**functionName**的配置项的取值。
                     * @example `req_auth`
                     */
                    ArgValue: string;
                }[];
            };
        }[];
    };
}
