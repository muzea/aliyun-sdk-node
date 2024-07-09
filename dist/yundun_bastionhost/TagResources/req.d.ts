export interface TagResourcesRequest {
    /**
     * 需要创建并绑定标签的堡垒机实例的地域ID。
     * > 地域ID和地域名称的对应关系，请参见[地域和可用区](~~40654~~)。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源类型定义。
     * 唯一取值为**INSTANCE** ，表示堡垒机实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 堡垒机实例ID列表。
     * N的取值范围为1~20。
     * > 可通过调用[DescribeInstances](~~153281~~)接口获取堡垒机实例ID。
     * @example `bastionhost-cn-78v1gc****`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag"?: {
        /**
         * 实例的标签键。
         * N的取值范围：1~20。
         * > - 该参数不允许传入空字符串。最多支持传入128个字符。
         * > - 该参数不能以**aliyun**或**acs:**开头，不能包含**http://**或**https://**。
         * @example `operation`
         */
        Key: string;
        /**
         * 实例的标签值。
         * N的取值范围：1~20。
         * > - 该参数可设置为空字符串，最多支持传入128个字符。
         * > - 该参数不能以**aliyun**或**acs:**开头，不能包含**http://**或者**https://**。
         * @example `operation_test`
         */
        Value: string;
    }[];
}
