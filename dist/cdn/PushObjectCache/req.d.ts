interface PushObjectCacheRequest {
    "RegionId"?: string;
    /**
    * 多个URL之间需要用换行符（\n）或（\r\n）分隔。
    * @example `abc.com/image/1.png`
    */ "ObjectPath": string;
    "OwnerId"?: number;
    /**
    * 预热区域。取值：
    * - **domestic**。
    * - **overseas**。
    * @example `domestic`
    */ "Area"?: string;
}
export { PushObjectCacheRequest };