export interface UpdateResourceDLinkRequest {
    /**
     * 资源组所在的地域ID。
     * @example `cn-shanghai`
     */
    "ClusterId": string;
    /**
     * 资源组的ID。如何查询资源组ID，请参见[ListResources](~~412133~~)。
     * @example `eas-r-w1ttszneb9n994****`
     */
    "ResourceId": string;
    /**
     * 请求Body。
     */
    "body"?: {
        /**
         * 对端的主VSwitchID，会在该VSwitch中创建ENI。
         * @example `vpc-uf66uio7md****`
         */
        VSwitchId: string;
        /**
         * 客户端ECS归属的安全组。
         * @example `sg-bp149cedsfx2rfs****`
         */
        SecurityGroupId: string;
        /**
         * 要打通的客户端的VSwitch列表，会将这些VSwitch对应的网段加入到服务端的回包路由中。
         */
        VSwitchIdList: string[];
        /**
         * 要打通的客户端的网段信息，会将该网段加入到服务端的回包路由中，与VSwitchIdList可二选一。
         * @example `172.16.0.0/16`
         */
        DestinationCIDRs: string;
    };
}
