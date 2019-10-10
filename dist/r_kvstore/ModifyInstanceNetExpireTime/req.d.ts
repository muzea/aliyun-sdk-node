interface ModifyInstanceNetExpireTimeRequest {
    "RegionId"?: string;
    /**
    * 实例的经典网络连接地址。
    * @example `r-bp1xxxxxxxxxxxxx.redis.rds.aliyuncs.com`
    */ "ConnectionString": string;
    /**
    * 延长经典网络连接地址的保留时间。取值：14、30、60或120，单位为天。
    * @example `14`
    */ "ClassicExpiredDays": number;
    "OwnerId"?: number;
    /**
    * 目标实例的ID。
    * @example `r-bp1xxxxxxxxxxxxx`
    */ "InstanceId": string;
}
export { ModifyInstanceNetExpireTimeRequest };