export interface GetAlarmMachineCountResponse {
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 存在安全告警的服务器的数量。
         * @example `1`
         */
        MachineCount: number;
    };
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `6D3A2E7D-1238-5DD4-B3C3-BF06FCAD****`
     */
    RequestId: string;
}
