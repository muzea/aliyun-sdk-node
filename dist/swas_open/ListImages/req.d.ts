export interface ListImagesRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询轻量应用服务器的可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID。取值可以由一个或多个镜像ID组成一个JSON数组。格式为`["xxx", "yyy", … "zzz"]`。支持最多50个ID，用半角逗号字符隔开。
     * @example `["fe9c66133a9d4688872869726b52****", "794c230fd3e64ea19f83f4d7a0ad****"]`
     */
    "ImageIds"?: string;
    /**
     * 镜像类型。取值范围：
     * - system：系统镜像
     * - app：应用镜像
     * - custom：自定义镜像
     * @example `system`
     */
    "ImageType"?: string;
}
