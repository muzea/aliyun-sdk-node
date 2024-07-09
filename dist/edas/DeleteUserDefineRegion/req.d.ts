export interface DeleteUserDefineRegionRequest {
    /**
     * 定义命名空间的唯一标识序号，可调用ListUserDefineRegion接口获取，详情请参见[ListUserDefineRegion](~~149377~~)。
     * @example `2564`
     */
    "Id"?: number;
    /**
     * 命名空间标签。
     * @example `regiontag`
     */
    "RegionTag"?: string;
}
