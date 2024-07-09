export interface UnassociateNetworkAclRequest {
    /**
     * 要解绑关联资源的网络ACL的ID。
     * @example `nacl-a2do9e413e0sp****`
     */
    "NetworkAclId": string;
    /**
     * 要解绑的资源列表，**N**的取值为0~29，即最多可以解绑30个资源。
     */
    "Resource": {
        /**
         * 要解绑的关联资源类型。
         * 取值：
         * * Network 网络。
         * @example `Network`
         */
        ResourceType: string;
        /**
         * 要解绑的关联资源的ID。
         * @example `n-5***`
         */
        ResourceId: string;
    }[];
}
