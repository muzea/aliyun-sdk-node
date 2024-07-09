export interface ChangeCheckCustomConfigResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `DA8133CC-CCA0-5CF2-BF64-FE7D52C44***`
     */
    RequestId: string;
    /**
     * 检查项自定义配置项不合法列表。
     */
    IllegalCustomConfigs: {
        /**
         * 检查项自定义配置项名称，同检查项唯一。
         * @example `SessionTimeMax`
         */
        Name: string;
    }[];
    /**
     * 检查项修复配置项不合法列表。
     */
    IllegalRepairConfigs: {
        /**
         * 用户配置的修复检查配置不满足要求，返回的对应配置的名称。
         * @example `SessionTimeMax`
         */
        Name: string;
    }[];
}
