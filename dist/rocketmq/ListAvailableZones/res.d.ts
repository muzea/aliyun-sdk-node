export interface ListAvailableZonesResponse {
    /**
     * 请求ID
     * @example `AF9A8B10-C426-530F-A0DD-96320B39****`
     */
    requestId: string;
    /**
     * 是否成功
     * @example `true`
     */
    success: boolean;
    /**
     * 返回结果
     */
    data: {
        /**
         * 可用区id
         * @example `cn-qingdao-b`
         */
        zoneId: string;
        /**
         * 可用区名称
         * @example `ha-cn-t9b30w902vm_qrs`
         */
        zoneName: string;
        /**
         * 创建时间
         * @example `2022-08-01 20:05:50`
         */
        createTime: string;
        /**
         * 修改时间
         * @example `2022-08-01 20:05:50`
         */
        updateTime: string;
    }[];
    /**
     * 错误码
     * @example `Topic.NotFound`
     */
    code: string;
    /**
     * 错误信息
     * @example `Parameter instanceId is mandatory for this action .`
     */
    message: string;
    /**
     * HTTP状态码
     * @example `200`
     */
    httpStatusCode: number;
    /**
     * 动态错误码
     * @example `InstanceId`
     */
    dynamicCode: string;
    /**
     * 动态错误信息
     * @example `InstanceId`
     */
    dynamicMessage: string;
}
