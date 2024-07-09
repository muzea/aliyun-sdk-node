export interface CreateInstanceShutdownTimerRequest {
    /**
     * 定时关机任务对应实例的ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 定时关机属性。
     */
    "body"?: {
        /**
         * 定时关机设定时间。
         * @example `2021-01-12T14:36:01Z`
         */
        DueTime: string;
        /**
         * 距离定时关机的时间段，单位为毫秒。
         * @example `3600000`
         */
        RemainingTimeInMs: number;
    };
}
