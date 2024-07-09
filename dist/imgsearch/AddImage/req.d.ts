export interface AddImageRequest {
    /**
     * 数据库名称。支持小写字母、数字、下划线组合，长度2~64。
     * @example `default`
     */
    "DbName": string;
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-test.oss-cn-shanghai.aliyuncs.com/test/imgsearch/xxxx.png`
     */
    "ImageUrl": string;
    /**
     * 自定义数据。支持字母、数据、标点符号、汉字。长度0~512。
     * @example `风景`
     */
    "ExtraData"?: string;
    /**
     * 实体ID，可以作为数据分组的ID。支持小写字母、数字、下划线的组合，长度1~64。
     * @example `001`
     */
    "EntityId": string;
}
