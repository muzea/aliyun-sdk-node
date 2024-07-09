export interface ListStreamingDataServicesResponse {
    /**
     * 请求ID。
     * @example `B4CAF581-2AC7-41AD-8940-D56DF7AADF5B`
     */
    RequestId: string;
    /**
     * 返回实时数据服务条目
     */
    ServiceItems: {
        /**
         * 服务ID。
         * @example `1`
         */
        ServiceId: string;
        /**
         * 服务类型，取值：
         * - **adbpgss**
         * @example `adbpgss`
         */
        ServiceType: string;
        /**
         * 服务名称。
         * @example `test-adbpgss`
         */
        ServiceName: string;
        /**
         * 服务描述。
         * @example `test-adbpgss`
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
         * -  Running：运行中
         * -  Exception：异常
         * -  Paused：暂停
         * @example `Running`
         */
        Status: string;
        /**
         * 服务IP。
         * @example `192.168.0.1`
         */
        ServiceIp: string;
        /**
         * 服务端口。
         * @example `5432`
         */
        ServicePort: string;
        /**
         * 创建时间。
         * @example `2019-09-08T16:00:00Z`
         */
        CreateTime: string;
        /**
         * 最后修改时间
         * @example `2019-09-08T17:00:00Z`
         */
        ModifyTime: string;
        ServiceManaged: boolean;
        ServiceOwnerId: string;
    }[];
    /**
     * 总记录数。
     * @example `1`
     */
    TotalRecordCount: number;
}
