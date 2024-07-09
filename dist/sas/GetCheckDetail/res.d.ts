export interface GetCheckDetailResponse {
    /**
     * 检查项的描述。
     */
    Description: {
        /**
         * 描述类型，固定值为text。
         * @example `text`
         */
        Type: string;
        /**
         * 检查项的描述的具体信息。
         * @example `The MSE instance does not enable authentication by default. If public network access is enabled at the same time, the data in the configuration center may be dragged and there is a security risk.`
         */
        Value: string;
        /**
         * 检查项的描述的链接。
         * @example `https://www.alibabacloud.com/help/en/object-storage-service/latest/tutorial-implement-data-sharing-across-departments-based-on-bucket-policies`
         */
        Link: string;
    };
    /**
     * 检查项风险的解决方案。
     */
    Solution: {
        /**
         * 检查项风险的解决方案类型。取值：
         * - **text**：文本
         * - **link**：链接
         * @example `text`
         */
        Type: string;
        /**
         * 检查项风险的解决方案类型为text时的文本内容。
         * @example `Enter the MSE product console - registration and configuration center - instance list, click the corresponding instance name to enter the instance details, find the public network whitelist setting option in the basic information, and configure the whitelist according to business needs. It is forbidden to configure 0.0.0.0 or the whitelist as null.`
         */
        Value: string;
        /**
         * 检查项风险的解决方案类型为link时的链接。
         * @example `https://www.alibabacloud.com/help/en/object-storage-service/latest/tutorial-implement-data-sharing-across-departments-based-on-bucket-policies`
         */
        Link: string;
    };
    /**
     * 检查项帮助信息。
     */
    AssistInfo: {
        /**
         * 检查项风险的帮助信息类型。取值：
         * - **text**：文本
         * - **link**：链接
         * @example `text`
         */
        Type: string;
        /**
         * 检查项风险的帮助信息类型为text时的文本内容。
         * @example `Configure an IP address whitelist`
         */
        Value: string;
        /**
         * 检查项风险的帮助信息类型为link时的链接。
         * @example `https://www.alibabacloud.com/help/en/resource-access-management/latest/faq-about-ram-users`
         */
        Link: string;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `15A6ED6A-DBFE-5255-A248-289907809BEC`
     */
    RequestId: string;
    /**
     * 检查项自定义配置项列表。
     */
    CustomConfigs: {
        /**
         * 检查项自定义配置项名称，同检查项唯一。
         * @example `SessionTimeMax`
         */
        Name: string;
        /**
         * 检查项自定义配置项类型JSON字符串。
         * @example `{\"type\":\"NUMBER\",\"range\":[1,24]}`
         */
        TypeDefine: string;
        /**
         * 检查项自定义配置项默认值字符串。
         * @example `12`
         */
        DefaultValue: string;
        /**
         * 检查项自定义配置项用户配置值字符串。
         * @example `11`
         */
        Value: string;
        /**
         * 检查项自定义配置项国际化名称。
         * @example `Maximum session time
        `
         */
        ShowName: string;
    }[];
    /**
     * ><notice>该参数已废弃></notice>
     * @example `true`
     */
    RepairReset: string;
    /**
     * ><notice>该参数已废弃></notice>
     * @example `1`
     */
    RepairSupportType: number;
    /**
     * 检查项修复设置具体信息。
     */
    RepairSetting: {
        /**
         * 该检查项支持的是否支持修复功能：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        RepairSupport: boolean;
        /**
         * 该检查项支持修复的类型：
         * - **1**： 支持修复并支持回滚操作
         * - **2**： 修复不支持回滚
         * - **3**： 跳转到第三方平台操作
         * @example `1`
         */
        RepairSupportType: number;
        /**
         * 该检查项支持的修复功能修复后是否重启：
         * - **true**：重启
         * - **false**： 不需要重启
         * @example `true
        `
         */
        RepairReset: boolean;
        /**
         * 检查项修复支持的入参配置信息。
         */
        RepairConfigs: {
            /**
             * 检查项自定义修复参数名称，同检查项唯一。
             * @example `navicat`
             */
            Name: string;
            /**
             * 检查项自定义配置项类型JSON字符串。
             * @example `{\"type\":\"NUMBER\",\"range\":[1,24]}
            `
             */
            TypeDefine: string;
            /**
             * 检查项修复配置参数的默认值字符串。
             * @example `1`
             */
            DefaultValue: string;
            /**
             * 用户配置的检查项修复参数字符串值。
             * @example `2`
             */
            Value: string;
            /**
             * 用户修复参数配置的展示名称。
             * @example `port`
             */
            ShowName: string;
            /**
             * 修复配置流程对应的ID。
             * @example `64312d3ee19d470a9b54393dab****`
             */
            FlowId: string;
            /**
             * 该修复参数是否支持用户自定义配置：
             * - **true**：支持
             * - **false**：不支持
             * @example `true`
             */
            CustomFlag: boolean;
            /**
             * 与该参数不兼容的其他修复配置参数的数组。
             */
            ExclusiveName: string[];
            ConsoleParamType: string;
            DataTransformType: string;
            UsageType: string;
            EmptyParamSwitch: string;
        }[];
        /**
         * 修复流程说明。
         */
        FlowStep: {
            /**
             * 修复的流程步骤序号。
             * @example `1`
             */
            Step: string;
            /**
             * 修复流程步骤的说明文本。
             * @example `The first step is to open the calling interface.`
             */
            ShowText: string;
        }[];
    };
}
