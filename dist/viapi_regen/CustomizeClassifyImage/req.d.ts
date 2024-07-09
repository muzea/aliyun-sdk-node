export interface CustomizeClassifyImageRequest {
    /**
     * 图像URL地址。推荐使用上海地域的OSS链接，对于文件在本地或者非上海地域OSS链接的情况，请参见[文件URL处理](~~155645~~)。
     * @example `https://viapi-regen-shanghai-prod-public.oss-cn-shanghai-internal.aliyuncs.com/example/common_classify/****.jpg`
     */
    "ImageUrl": string;
    /**
     * 自学习服务的**ServiceId**字段。
     * @example `db9616e093e6c7c668bc9ddab6aa****`
     */
    "ServiceId": string;
}
