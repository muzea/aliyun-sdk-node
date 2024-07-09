export interface CreateInstanceRequest {
    /**
     * 实例名字
     * @example `第一个实例`
     */
    "InstanceName": string;
    /**
     * 实例描述
     * @example `这个是第一的实例`
     */
    "InstanceDescription"?: string;
    /**
     * 实例最大并发
     * @example `4`
     */
    "MaxConcurrentConversation": number;
    /**
     * 服务类型
     * Managed:智能外呼产品默认智能语音交互产品服务（公共服务）
     * Authorized:公有云客户自己购买的智能语音交互产品服务（客户私有服务），通过场景管理-编辑-调用服务-自定义服务完成授权
     * @example `Provided`
     */
    "NluServiceType"?: string;
    /**
     * 资源组id
     * @example `rg-acfmwd4qr3z773y`
     */
    "ResourceGroupId"?: string;
    /**
     * 主叫号码列表
     */
    "CallingNumber"?: string[];
}
