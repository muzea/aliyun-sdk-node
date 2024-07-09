export interface UntagResourcesRequest {
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
     * 是否删除全部标签。取值：
     * - **true** ：是
     * - **false**（默认值）：否
     * > 仅针对**TagKey.N**为空时生效。
     * @example `false`
     */
    "All"?: boolean;
    /**
     * 资源ID。**N**的取值范围为**1**~**50**。
     * @example `cen-7qthudw0ll6jmc****`
     */
    "ResourceId": string[];
    /**
     * 标签键。
     * 标签键最多支持64个字符，不能以`aliyun`和`acs:`开头，不能包含`http://`或者`https://`。
     * 如果您同时输入了多个标签键，各个标签键之间为**或**的关系。**N**的取值范围：**1**~**20**。
     * @example `FinanceDept`
     */
    "TagKey"?: string[];
    /**
     * 资源实例所属地域ID。
     * 当资源类型为Cen和BandwidthPackage不需要填写，其余类型必填。
     * @example `cn-hangzhou`
     */
    "RegionId"?: string;
}
