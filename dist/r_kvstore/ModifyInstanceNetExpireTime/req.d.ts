export interface ModifyInstanceNetExpireTimeRequest {
    /**
     * 实例ID。
     * @example `r-bp1zxszhcgatnx****`
     */
    "InstanceId": string;
    /**
     * 实例的经典网络连接地址。
     * @example `r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`
     */
    "ConnectionString": string;
    /**
     * 延长经典网络连接地址的保留时间。取值：**14**、**30**、**60**或**120**，单位为天。
     * @example `14`
     */
    "ClassicExpiredDays": number;
}
