export interface ListDpiConfigErrorResponse {
    /**
     * 开始查询下一页的Token。
     * @example `caeba0bbb2be03f84eb48b699f0a****`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `F47B5293-27B6-48EF-A9C6-E90A41449813`
     */
    RequestId: string;
    /**
     * DPI配置异常的总条目数。
     * @example `1`
     */
    Total: number;
    /**
     * 分页查询时允许每页展示的配置异常的最大条目数。
     * @example `10`
     */
    MaxResults: number;
    /**
     * DPI配置异常的信息列表。
     */
    DpiConfigError: {
        /**
         * 智能接入网关设备序列号。
         * @example `sag-2160808****`
         */
        SN: string;
        /**
         * 智能接入网关实例ID。
         * @example `sag-1e8sgws6b133b8****`
         */
        SmartAGId: string;
        /**
         * 配置异常类型。
         * - **DeviceNotSupported **：智能接入网关设备不支持DPI功能。
         * - **VersionNotSupported **：智能接入网关设备运行的DPI版本过低。
         * - **NotEnable**：智能接入网关设备的DPI功能未开启。
         * @example `DeviceNotSupported`
         */
        ErrorType: string;
        /**
         * DPI配置异常的信息列表。
         */
        RuleConfigErrorList: {
            /**
             * 配置异常的应用ID列表。
             */
            DpiSignatureIds: string[];
            /**
             * 配置异常的应用关联的规则ID列表。
             * - 如果您当前查询的是访问控制DPI配置异常信息，则此处显示配置异常的访问控制规则实例ID。
             * - 如果您当前查询的是QoS策略DPI配置异常信息，则此处显示配置异常的五元组规则实例ID。
             * @example `qospy-axud4s62gz632b****`
             */
            RuleId: string;
            /**
             * 配置异常的应用组ID列表。
             */
            DpiGroupIds: string[];
        }[];
    }[];
}
