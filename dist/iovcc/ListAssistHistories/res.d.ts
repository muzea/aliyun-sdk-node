export interface ListAssistHistoriesResponse {
    /**
     * 总数目
     * @example `46`
     */
    TotalCount: number;
    /**
     * 请求ID
     * @example `9c7a3b09-a69a-43f5-8bf2-84f7119810eb`
     */
    RequestId: string;
    /**
     * 每页数目
     * @example `20`
     */
    PerPage: number;
    /**
     * 历史列表
     */
    Histories: {
        /**
         * 序列号
         * @example `BALFL8429SN`
         */
        SerialNumber: string;
        /**
         * 结束时间
         * @example `1525767680000`
         */
        EndTime: number;
        /**
         * 开始时间
         * @example `1525767660000`
         */
        StartTime: number;
        /**
         * 操作者用户名
         * @example `admin`
         */
        UNAME: string;
        /**
         * 硬件ID
         * @example `BALFL8429HI`
         */
        HardwareId: string;
        /**
         * 设备名称
         * @example `Model S`
         */
        DeviceName: string;
        /**
         * AliOS设备UUID
         * @example `842972B2C0F4C9F030E60769CA65806A`
         */
        UUID: string;
        /**
         * 设备ID
         * @example `6fde56979c484b93b99fba257e3cbe83`
         */
        DeviceId: string;
        /**
         * 车架号
         * @example `LHK000026VFAG7A31`
         */
        VIN: string;
        /**
         * 操作者用户ID
         * @example `12345`
         */
        UID: string;
        /**
         * 诊断会话ID
         * @example `510`
         */
        ID: string;
    }[];
    /**
     * 页码
     * @example `1`
     */
    PageIndex: number;
}
