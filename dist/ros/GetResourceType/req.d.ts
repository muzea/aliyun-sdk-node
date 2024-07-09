export interface GetResourceTypeRequest {
    /**
     * 资源类型。
     * 关于ROS支持的资源类型，请参见[资源类型索引](~~127039~~)。
     * @example `ALIYUN::ROS::WaitConditionHandle`
     */
    "ResourceType": string;
    /**
     * 版本ID。如果要查询资源类型某个版本，请指定该参数。否则，查询资源类型。
     * > 当前仅模块支持版本。
     * @example `v1`
     */
    "VersionId"?: string;
}
