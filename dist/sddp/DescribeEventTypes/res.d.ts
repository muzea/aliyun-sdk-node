export interface DescribeEventTypesResponse {
    /**
     * 结果的请求ID。
     * @example `769FB3C1-F4C9-42DF-9B72-7077A8989C13`
     */
    RequestId: string;
    /**
     * 异常事件类型列表。
     * > ParentTypeId为空时，返回异常事件父类型；ParentTypeId不为空时，返回异常事件子类型。
     */
    EventTypeList: {
        /**
         * 父类型异常事件编码。
         * @example `01`
         */
        Code: string;
        /**
         * 父类型异常事件描述信息。
         * @example `权限使用异常，****`
         */
        Description: string;
        /**
         * 父类型异常事件名称。
         * @example `权限使用异常`
         */
        Name: string;
        /**
         * 父类型异常事件的唯一标识ID。
         * @example `1`
         */
        Id: number;
        /**
         * 子类型异常事件列表。
         */
        SubTypeList: {
            /**
             * DSC对子类型异常事件的检测功能。取值：
             * - **1**：开启。
             * - **0**：关闭。
             * @example `1`
             */
            Status: number;
            /**
             * 子类型异常事件描述信息。
             * @example `配置失当-ODPS敏感项目未设置保护，****`
             */
            Description: string;
            /**
             * 规则项内容格式。取值：
             * - **0**：数字类（阈值等）。
             * - **1**：文本类（IP等）。
             * @example `1`
             */
            ConfigContentType: number;
            /**
             * 事件命中次数。
             * @example `2`
             */
            EventHitCount: number;
            /**
             * 配置值。
             * @example `90`
             */
            ConfigValue: string;
            /**
             * 配置编码。
             * @example `0100**`
             */
            ConfigCode: string;
            /**
             * 子类型异常事件编码。
             * @example `020008`
             */
            Code: string;
            /**
             * 配置描述。
             * @example `权限闲置期间超过阈值：目前的阈值定义为${value}个自然日`
             */
            ConfigDescription: string;
            /**
             * 子类型异常事件名称。
             * @example `配置失当-ODPS敏感项目未设置保护`
             */
            Name: string;
            /**
             * 规则适用产品。取值：**MaxCompute**、**OSS**、**ADS**、**OTS**、**RDS**等。
             * @example `RDS`
             */
            AdaptedProduct: string;
            /**
             * 子类型异常事件唯一标识ID。
             * @example `1`
             */
            Id: number;
        }[];
    }[];
}
