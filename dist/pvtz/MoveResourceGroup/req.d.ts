export interface MoveResourceGroupRequest {
    /**
     * 部分返回参数语言。默认值：en。取值范围：en、zh、ja。
     * @example `en`
     */
    "Lang"?: string;
    /**
     * Zone Id。
     * @example `AgIDE1MA_149`
     */
    "ResourceId": string;
    /**
     * 资源组ID。
     * @example `rg-aekzzk7hx3glaoq`
     */
    "NewResourceGroupId": string;
    /**
     * 保证请求幂等性。从您的客户端生成一个参数值，确保不同请求间该参数值唯一。只支持ASCII字符，且不能超过64个字符。
     * @example `21079fa016944979537637959d09bc`
     */
    "ClientToken"?: string;
}
