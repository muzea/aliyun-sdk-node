interface ListNotificationsRequest {
    "RegionId"?: string;
    /**
    * 查询的起始位置，从 0 开始的偏移。
    * @example `0`
    */ "Offset": number;
    /**
    * 查询的通知数量上限，大于等于 1。
    * @example `2`
    */ "Limit": number;
    "Category"?: string[];
    /**
    * 根据通知处理状态过滤，传 null 则不过滤处理状态。
    * @example `HANDLED`
    */ "HandleState"?: string;
    /**
    * 时间查询，毫秒为单位的 UNIX 时间戳。
    * @example `1514736000000`
    */ "BeginMillis"?: number;
    /**
    * 时间查询，毫秒为单位的 UNIX 时间戳。
    * @example `1514736000000`
    */ "EndMillis"?: number;
    /**
    * 排序字段，可取值为**NOTICE_MILLIS**(按照通知发生时间排序)。
    * @example `NOTICE_MILLIS`
    */ "SortingField"?: string;
    /**
    * 配合SortingField参数一起使用，**true**表示升序，**false**表示降序。
    * @example `false`
    */ "Ascending"?: boolean;
}
export { ListNotificationsRequest };