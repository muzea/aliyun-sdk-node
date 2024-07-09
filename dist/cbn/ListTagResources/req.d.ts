export interface ListTagResourcesRequest {
    /**
     * 资源类型。取值：
     * **Cen**，表示云企业网实例。
     * **BandwidthPackage**，表示带宽包实例。
     * **TransitRouter**，表示转发路由器实例。
     * **TransitRouterVpcAttachment**，表示Vpc连接实例。
     * **TransitRouterVbrAttachment**，表示Vbr连接实例。
     * **TransitRouterPeerAttachment**，表示跨地域连接实例。
     * **TransitRouterVpnAttachment**，表示Vpn连接实例。
     * **TransitRouterRouteTable**，表示路由表实例。
     * **Flowlog**，表示Flowlog实例。
     * **TransitRouterMulticastDomain**，表示组播域实例。
     * @example `cen`
     */
    "ResourceType": string;
    /**
     * 是否拥有下一次查询的令牌（Token）。取值：
     * - 第一次查询和没有下一次查询时，均无需填写。
     * - 如果有下一次查询，取值为上一次API调用返回的NextToken值。
     * @example `FFmyTO70tTpLG6I3FmYAXGKPd****`
     */
    "NextToken"?: string;
    /**
     * 分批次查询时每批次显示的条目数。取值范围：**1**~**50**。默认值：**10**。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 云企业网实例ID。
     * 一次最多支持输入20个云企业网实例ID。
     * @example `cen-8z69wtwqel33lq****`
     */
    "ResourceId"?: string[];
    /**
     * 云企业网实例的标签信息。
     * 一次最多支持查询20个标签。
     */
    "Tag"?: {
        /**
         * 标签键。
         * 一个标签键最多支持输入64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一次最多支持输入20个标签的标签键。
         * @example `test`
         */
        Key: string;
        /**
         * 标签值。
         * 一个标签值最多支持输入128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * 一次最多支持输入20个标签的标签值。
         * @example `Bp`
         */
        Value: string;
    }[];
    /**
     * 资源实例所属地域ID。
     * 当资源类型为Cen和BandwidthPackage不需要填写，其余类型必填。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
