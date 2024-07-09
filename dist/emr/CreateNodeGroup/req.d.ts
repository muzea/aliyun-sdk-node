export interface CreateNodeGroupRequest {
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    "RegionId": string;
    /**
     * 集群ID。
     * @example `C-E525E04F3914****`
     */
    "ClusterId": string;
    /**
     * 机器组信息。
     */
    "NodeGroup": any;
}
