interface CountNotificationsRequest {
    /**
    * 地域ID。
    * @example `cn-shanghai`
    */ "RegionId"?: string;
    "Category"?: string[];
    /**
    * 根据通知处理状态过滤，传null值则不过滤处理状态。
    * @example `UNHANDLED`
    */ "HandleState"?: string;
    /**
    * 查询开始时间，毫秒为单位的 UNIX 时间戳。
    * @example `1514736000000`
    */ "BeginMillis"?: number;
    /**
    * 查询结束时间，毫秒为单位的 UNIX 时间戳。
    * @example `1514736000000`
    */ "EndMillis"?: number;
}
export { CountNotificationsRequest };