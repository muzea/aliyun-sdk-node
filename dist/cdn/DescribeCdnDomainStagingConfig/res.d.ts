export interface DescribeCdnDomainStagingConfigResponse {
    /**
     * 加速域名。
     * @example `example.com`
     */
    DomainName: string;
    /**
     * 请求ID。
     * @example `C80705BF-0F76-41FA-BAD1-5B59296A4E59`
     */
    RequestId: string;
    /**
     * 域名配置列表。
     */
    DomainConfigs: {
        /**
         * 配置状态。取值：
         * - **testing**：配置校验中。
         * - **configuring**：配置中。
         * - **success**：成功。
         * - **failed**：失败。
         * @example `success`
         */
        Status: string;
        /**
         * 规则条件ID，非必填项。通过配置[域名配置功能参数](~~388460~~)中的功能函数**condition**（规则引擎），可以创建出规则条件（规则条件可以通过识别用户请求中携带的各种参数来匹配和过滤用户请求），每一个规则条件被创建以后都会生成一个对应的[ConfigId](~~388994~~)，ConfigId可以被当作ParentId参数被其他功能函数引用，这样规则条件就可以与功能配置一起组合形成更灵活的配置。
         * 具体配置操作请参考[批量配置域名](~~90915~~)或下文ParentId配置示例说明。
         * @example `222728944812032`
         */
        ParentId: string;
        /**
         * 配置ID。
         * @example `6xx5`
         */
        ConfigId: string;
        /**
         * 功能名称。
         * @example `aliauth`
         */
        FunctionName: string;
        /**
         * 各个功能说明。
         */
        FunctionArgs: {
            /**
             * 配置名称。
             * @example `auth_type`
             */
            ArgName: string;
            /**
             * 配置值。
             * @example `req_auth`
             */
            ArgValue: string;
        }[];
    }[];
}
