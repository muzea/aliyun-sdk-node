export interface DescribeRiskItemTypeResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3B3F3A90-46A5-4023-A2D8-D68B14262F96`
     */
    RequestId: string;
    /**
     * 云产品配置检测项类型信息集合。
     */
    List: {
        /**
         * 云产品配置检测项的ID。
         * @example `37625`
         */
        Id: number;
        /**
         * 检测类型名称。
         * @example `身份认证及权限`
         */
        Title: string;
    }[];
}
