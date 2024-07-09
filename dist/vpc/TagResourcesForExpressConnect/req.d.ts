export interface TagResourcesForExpressConnectRequest {
    /**
     * 资源类型。取值：
     * - **PHYSICALCONNECTION**：表示高速通道专线实例。
     * - **VIRTUALBORDERROUTER**：表示边界路由器。
     * - **ROUTERINTERFACE**：表示VBR上连。
     * @example `PHYSICALCONNECTION`
     */
    "ResourceType": string;
    /**
     * 要创建并绑定标签的资源所在的地域ID。
     * 您可以通过调用[DescribeRegions](~~36063~~)接口获取地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 资源ID。最多支持输入20个资源ID。
     */
    "ResourceId": string[];
    /**
     * 资源标签列表。
     */
    "Tag": {
        /**
         * 资源的标签键。最多支持输入20个标签键。如果传入该值，则不能输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceDept`
         */
        Key: string;
        /**
         * 资源的标签值。最多支持输入20个标签值。如需传入该值，可以输入空字符串。
         * 最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `FinanceJoshua`
         */
        Value: string;
    }[];
}
