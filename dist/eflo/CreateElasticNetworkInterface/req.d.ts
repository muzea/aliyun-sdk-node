export interface CreateElasticNetworkInterfaceRequest {
    /**
     * 地域ID。
     * @example `cn-wulanchabu`
     */
    "RegionId": string;
    /**
     * 可用区ID。
     * @example `cn-wulanchabu-a`
     */
    "ZoneId": string;
    /**
     * 灵骏节点ID。
     * @example `e01-cn-lbj3aej****`
     */
    "NodeId"?: string;
    /**
     * 云上VPC ID。
     * > NodeId为空时，VpcId必填；NodeId不为空时，VpcId选填。
     * @example `vpc-uf6aa4ddo97fr****`
     */
    "VpcId"?: string;
    /**
     * 交换机ID。
     * @example `vsw-t4nahb0pxck****`
     */
    "VSwitchId"?: string;
    /**
     * 安全组ID。
     * @example `sg-wz9fj2s3o21nw2****`
     */
    "SecurityGroupId"?: string;
    /**
     * 描述信息。
     * @example `描述`
     */
    "Description"?: string;
    /**
     * POP API默认不忽略，幂等使用。
     * @example `3fd79d62-ab1d-11ec-9a53-0242ac110004`
     */
    "ClientToken"?: string;
}
