export interface CreateTagResourcesRequest {
    /**
     * DDoS高防实例所属地域ID。取值固定为**cn-hangzhou**，表示中国内地，即DDoS高防（中国内地）实例。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 资源类型。取值固定为**INSTANCE**，表示DDoS高防实例。
     * @example `INSTANCE`
     */
    "ResourceType": string;
    /**
     * 要绑定标签的DDoS高防（中国内地）实例的ID列表。
     * @example `ddoscoo-cn-mp91j1ao****`
     */
    "ResourceIds": string[];
    /**
     * 要绑定的标签列表。
     */
    "Tags"?: {
        /**
         * 要绑定的标签键。
         * @example `testkey`
         */
        Key: string;
        /**
         * 要绑定的标签值。
         * @example `testvalue`
         */
        Value: string;
    }[];
}
