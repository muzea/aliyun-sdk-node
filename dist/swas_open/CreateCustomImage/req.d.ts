export interface CreateCustomImageRequest {
    /**
     * 地域ID。您可以调用[ListRegions](~~189315~~)查询可用地域。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。**ClientToken**只支持ASCII字符，且不能超过64个字符。更多信息，请参见[如何保证幂等性](~~25693~~)。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 指定的轻量应用服务器的实例ID。
     * @example `ace0706b2ac4454d984295a94213****`
     */
    "InstanceId": string;
    /**
     * 自定义镜像名称。长度为2~128个英文或中文字符，必须以大小写字母或中文开头或数字开头，可以包含数字、半角冒号（:）、下划线（_）或者短划线（-）。
     * 默认值：空
     * @example `customImage-test`
     */
    "ImageName": string;
    /**
     * 系统盘快照ID。
     * @example `s-acscasca****`
     */
    "SystemSnapshotId"?: string;
    /**
     * 镜像描述信息。
     * @example `test`
     */
    "Description"?: string;
    /**
     * 数据盘快照ID。
     * @example `s-acscasca****`
     */
    "DataSnapshotId"?: string;
    /**
     * 标签列表，最多包含20个子项。
     */
    "Tag"?: {
        /**
         * 为自定义镜像指定的标签键。N 的取值范围：1~20。
         * 一旦传入该值，则不允许为空字符串。最多支持 64 个字符，不能以 aliyun 和 acs:开头，不能包含 http://或者 https://。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为自定义镜像指定的标签值。N 的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持 64 个字符，不能包含 http://或者 https://。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 资源组ID。
     * @example `rg-aek2bti7cf7****`
     */
    "ResoureGroupId"?: string;
}
