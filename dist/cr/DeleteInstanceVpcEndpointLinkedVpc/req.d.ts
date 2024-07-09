export interface DeleteInstanceVpcEndpointLinkedVpcRequest {
    /**
     * 实例ID
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 专有网络ID
     * @example `vpc-uf6pa68zxnnlc48dd****`
     */
    "VpcId": string;
    /**
     * 虚拟交换机ID
     * @example `vpc-uf6pa68zxnnlc48dd****`
     */
    "VswitchId": string;
    /**
     * 设置访问的模块，取值：
     * - `Registry`：访问镜像仓库
     * - `Chart`：访问Helm Chart
     * @example `Chart`
     */
    "ModuleName"?: string;
}
