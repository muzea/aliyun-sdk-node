export interface CreateIdleInstanceCullerRequest {
    /**
     * 设定自动关机的实例ID。如何获取实例ID，请参见[ListInstances](~~470439~~)。
     * @example `dsw-730xxxxxxxxxx`
     */
    "InstanceId": string;
    /**
     * 请求body。
     */
    "body"?: {
        /**
         * CPU使用率阈值，单位是百分比，取值1~100，低于此值则认为实例当前处于闲置。
         * @example `20`
         */
        CpuPercentThreshold: number;
        /**
         * GPU使用率阈值，单位是百分比，取值1~100。如果实例为GPU类型，则此参数生效。CPU和GPU同时低于阈值则认为指定实例处于闲置。
         * @example `10`
         */
        GpuPercentThreshold: number;
        /**
         * 闲置等待时间阈值，单位是分钟。如果闲置时长超过此值，将自动停止DSW实例。
         * @example `60`
         */
        MaxIdleTimeInMinutes: number;
    };
}
