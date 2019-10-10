interface RefreshVodObjectCachesRequest {
    "RegionId"?: string;
    /**
    * 输入示例：abc.com/image/1.png，多个URL用换行符（\n或\r\n）分隔。
    * @example `abc.com/image/1.png`
    */ "ObjectPath": string;
    "OwnerId"?: number;
    /**
    * 刷新的类型。取值范围：
    * - File（默认值）
    * - Directory
    * @example `File`
    */ "ObjectType"?: string;
}
export { RefreshVodObjectCachesRequest };