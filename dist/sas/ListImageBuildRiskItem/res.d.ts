export interface ListImageBuildRiskItemResponse {
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 风险构建命令类型Key。
         * @example `key`
         */
        ItemKey: string;
        /**
         * 风险构建命令类型名称。
         * @example `itemName`
         */
        ItemName: string;
    }[];
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A3D7C47D-3F11-57BB-90E8-E5C20C619F37`
     */
    RequestId: string;
}
