export interface OnsInstanceCreateResponse {
    /**
     * 公共参数，每个请求的ID都是唯一的，可用于排查和定位问题。
     * @example `A07E3902-B92E-44A6-B6C5-6AA111111****`
     */
    RequestId: string;
    /**
     * 返回结果。
     */
    Data: {
        /**
         * 创建的实例ID。
         * @example `MQ_INST_188077086902****_BXSuW61e`
         */
        InstanceId: string;
        /**
         * 创建的实例类型，取值说明如下：
         * - **1**：标准版实例
         * @example `1`
         */
        InstanceType: number;
    };
}
