export interface SetVpcAccessRequest {
    /**
     * 自定义授权名称，需要保持唯一，不能重复
     * @example `test`
     */
    "Name": string;
    /**
     * 专用网络ID，必须是同账户下可用的专用网络的ID
     * @example `vpc-uf657qec7lx42paw3qxxx`
     */
    "VpcId": string;
    /**
     * 专用网络中的实例ID（ECS/负载均衡）
     * @example `i-uf6bzcg1pr4oh5jjmxxx`
     */
    "InstanceId": string;
    /**
     * 实例对应的端口号
     * @example `80`
     */
    "Port": number;
    /**
     * 描述信息
     * @example `VPC 描述信息`
     */
    "Description"?: string;
    /**
     * 后端授权的host
     * @example `iot.hu***ng.com`
     */
    "VpcTargetHostName"?: string;
    /**
     * 指定规则所适用的对象标签，可设置多个。
     */
    "Tag"?: {
        /**
         * 标签键
         * @example `key`
         */
        Key: string;
        /**
         * 标签的值
         * @example `123`
         */
        Value: string;
    }[];
}
