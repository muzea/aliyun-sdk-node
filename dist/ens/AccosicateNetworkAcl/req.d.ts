export interface AccosicateNetworkAclRequest {
    /**
     * 网络ACL的ID。
     * @example `nacl-a2do9e413e0sp****`
     */
    "NetworkAclId": string;
    /**
     * 关联的资源信息。
     */
    "Resource": {
        /**
         * 关联资源的类型。取值：**Network**，网络。
         * **N**的取值为0~29，即最多可以关联30个资源。
         * @example `Network`
         */
        ResourceType: string;
        /**
         * 关联资源的ID。
         * @example `n-5****`
         */
        ResourceId: string;
    }[];
}
