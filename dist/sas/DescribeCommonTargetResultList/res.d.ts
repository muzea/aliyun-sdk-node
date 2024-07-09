export interface DescribeCommonTargetResultListResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6673D49C-A9AB-40DD-B4A2-B92306701AE7`
     */
    RequestId: string;
    /**
     * 配置信息。
     */
    TargetConfig: {
        /**
         * 配置类型。取值：
         * - **webshell_timescan**：网站后门查杀。
         * - **aliscriptengine**：深度检测引擎。
         * - **alidetect**：本地文件检测引擎的安装范围。
         * - **alidetect-scan-enable**：本地文件检测引擎的检测范围。
         * @example `webshell_timescan`
         */
        Type: string;
        /**
         * 资产配置标识。取值：
         * - **add**：对该资产生效。
         * - **del**：不对该资产生效。
         * @example `del`
         */
        Flag: string;
        /**
         * 数据的总条数。
         * @example `22`
         */
        TotalCount: string;
        /**
         * 资产配置默认标识。
         * @example `add`
         */
        TargetDefault: string;
        /**
         * 生效资产的选择模式。取值：
         * - **uuid**：按单个资产添加。
         * - **groupId**：按照服务器分组添加。
         * @example `uuid`
         */
        TargetType: string;
        /**
         * 生效的群组编号或资产UUID。
         * > 若**TargetType**返回**uuid**时，该项标识资产的**UUID**。若**TargetType**返回**groupId**时，该项表示群组编号。
         */
        TargetList: string[];
    };
}
