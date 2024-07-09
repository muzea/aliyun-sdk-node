export interface DescribeExternalDataServiceResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 服务ID。
     * @example `1`
     */
    ServiceId: string;
    /**
     * 服务名称。
     * @example `test-pxf`
     */
    ServiceName: string;
    /**
     * 服务描述。
     * @example `pxf test`
     */
    ServiceDescription: string;
    /**
     * 服务规格（单位CU）。
     * @example `8`
     */
    ServiceSpec: string;
    /**
     * 服务状态，取值：
     * - Init：初始化中
     * - Running：运行中
     * - Exception：异常
     * - Paused：暂停
     * @example `Running`
     */
    Status: string;
    /**
     * 创建时间。
     * @example `2019-09-08T16:00:00Z`
     */
    CreateTime: string;
    /**
     * 最后修改时间。
     * @example `2019-09-08T17:00:00Z`
     */
    ModifyTime: string;
}
