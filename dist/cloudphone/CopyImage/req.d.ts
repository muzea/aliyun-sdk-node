export interface CopyImageRequest {
    /**
     * 发起拷贝的源地域
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 待拷贝的自定义镜像ID
     * @example `cpm-xxxxxxxx`
     */
    "ImageId": string;
    /**
     * 拷贝至目标地域
     * @example `cn-beijing`
     */
    "DestinationRegionId": string;
    /**
     * 镜像名称。长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://和https://开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * @example `myCustomImage`
     */
    "ImageName"?: string;
    /**
     * 镜像的描述信息。长度为2~256个英文或中文字符，不能以http://和https://开头。
     * @example `testDescription`
     */
    "Description"?: string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符，且不能超过64个字符。更多详情，请参见如何保证幂等性。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    "ClientToken"?: string;
}
