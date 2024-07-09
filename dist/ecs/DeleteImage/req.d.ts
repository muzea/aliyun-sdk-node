export interface DeleteImageRequest {
    /**
     * 自定义镜像所在的地域ID。您可以调用[DescribeRegions](~~25609~~)查看最新的阿里云地域列表。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 镜像ID。如果指定的自定义镜像不存在，则请求将被忽略。
     * @example `m-bp67acfmxazb4p****`
     */
    "ImageId": string;
    /**
     * 是否执行强制删除。取值范围：
     *
     * - true：强制删除自定义镜像，忽略当前镜像是否被其他实例使用。
     * - false：正常删除自定义镜像，删除前检查当前镜像是否被其他实例使用。
     * 默认值：false
     * @example `false`
     */
    "Force"?: boolean;
}
