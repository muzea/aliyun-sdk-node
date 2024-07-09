export interface TagResourcesRequest {
    /**
     * 资源ID，最多支持输入20个资源ID。
     */
    "ResourceId": string[];
    /**
     * 标签信息。
     */
    "Tag": {
        /**
         * 资源的标签键。至少输入1个标签键，最多支持输入20个标签键。一旦传入该值，则不允许为空字符串。
         * 最多支持 128 个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。至少输入1个标签值，最多支持输入20个标签值。一旦传入该值，可以为空字符串。
         * 最多支持 128 个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
    /**
     * 资源类型。取值：**PeerConnection**，表示VPC对等连接。
     * @example `PeerConnection`
     */
    "ResourceType": string;
    /**
     * 客户端Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken只支持ASCII字符。
     * > 若您未指定，则系统自动使用API请求的**RequestId**作为**ClientToken**标识。每次API请求的**RequestId**不一样。
     * @example `123e4567-e89b-12d3-a456-426655440000`
     */
    "ClientToken"?: string;
    /**
     * 要创建并绑定标签的资源所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
}
