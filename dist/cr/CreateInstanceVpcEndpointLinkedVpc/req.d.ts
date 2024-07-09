export interface CreateInstanceVpcEndpointLinkedVpcRequest {
    /**
     * 实例ID。
     * @example `cri-xkx6vujuhay0****`
     */
    "InstanceId": string;
    /**
     * 专有网络ID。
     * @example `vpc-uf6pa68zxnnlc48dd****`
     */
    "VpcId": string;
    /**
     * 虚拟交换机ID。
     * @example `vsw-uf6u0kn8x2gbzxfn2****`
     */
    "VswitchId": string;
    /**
     * 设置访问的模块，取值：
     * - `Registry`：访问镜像仓库。
     * - `Chart`：访问Helm Chart。
     * @example `Registry`
     */
    "ModuleName"?: string;
    /**
     * 是否自动创建Privatezone记录，取值：
     * > 如果您开启了自动创建Privatezone记录，后续添加VPC实例时都会自动创建Privatezone记录。
     * - `true`：自动创建Privatezone记录。
     * - `false`：不自动创建Privatezone记录。
     * @example `false`
     */
    "EnableCreateDNSRecordInPvzt"?: boolean;
}
