export interface TagResourcesRequest {
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
     * 资源列表。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "ResourceId": string[];
    /**
     * 标签列表。
     */
    "Tag": {
        /**
         * 标签键。
         * 支持输入多个标签键。**N**的取值范围：**1**~**20**。
         * 标签键最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TagKey`
         */
        Key: string;
        /**
         * 标签值。
         * 每一个标签键对应一个标签值。**N**的取值范围：**1**~**20**。
         * 标签值最多支持128个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
         * @example `TagValue`
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
