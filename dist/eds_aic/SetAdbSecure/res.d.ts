export interface SetAdbSecureResponse {
    /**
     * 返回结果对象。
     */
    Data: {
        /**
         * 尝试设置的总实例数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 设置失败的实例数。
         * @example `0`
         */
        FailCount: number;
        /**
         * 设置成功的云手机实例ID列表。
         */
        InstanceIds: string[];
    };
    /**
     * 接口请求ID。
     * @example `69BCBBE4-FCF2-59B8-AD9D-531EB422****`
     */
    RequestId: string;
}
