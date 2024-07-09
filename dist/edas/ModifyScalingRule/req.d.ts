export interface ModifyScalingRuleRequest {
    /**
     * 应用ID。
     * @example `74ee****-db65-4322-a1f6-bcb60e5b****`
     */
    "AppId": string;
    /**
     * 部署分组ID。
     * @example `8123db90-880f-486f-****-************`
     */
    "GroupId": string;
    /**
     * 触发条件。
     * - OR：任一条件
     * - AND：所有条件
     * @example `"OR"`
     */
    "InCondition"?: string;
    /**
     * 是否包含缩容规则。
     * - true：包含
     * - false：不包含
     * @example `true`
     */
    "InEnable"?: boolean;
    /**
     * 触发指标：CPU使用率。
     * @example `50`
     */
    "InCpu"?: number;
    /**
     * 持续时间，单位为分钟。
     * @example `50`
     */
    "InDuration"?: number;
    /**
     * 分组缩容时需要保留的最小实例数。
     * @example `3`
     */
    "InInstanceNum"?: number;
    /**
     * 触发指标：系统负载。
     * @example `50`
     */
    "InLoad"?: number;
    /**
     * 触发指标：服务时延。单位为毫秒，最小值为0。
     * @example `50`
     */
    "InRT"?: number;
    /**
     * 每次缩容的实例数。
     * @example `1`
     */
    "InStep"?: number;
    /**
     * 触发条件。
     * - OR：任一条件
     * - AND：所有条件
     * @example `"OR"`
     */
    "OutCondition"?: string;
    /**
     * 触发指标：CPU使用率。
     * @example `50`
     */
    "OutCPU"?: number;
    /**
     * 持续时间，单位为分钟。
     * @example `50`
     */
    "OutDuration"?: number;
    /**
     * 是否包含扩容规则。
     * @example `true`
     */
    "OutEnable"?: boolean;
    /**
     * 分组扩容时的最大实例数。
     * @example `10`
     */
    "OutInstanceNum"?: number;
    /**
     * 触发指标：系统负载。
     * @example `50`
     */
    "OutLoad"?: number;
    /**
     * 触发指标：服务时延。单位为毫秒，最小值为0。
     * @example `0`
     */
    "OutRT"?: number;
    /**
     * 每次扩容的实例数。
     * @example `0`
     */
    "OutStep"?: number;
    /**
     * 扩容实例来源。
     * - NEW：弹性资源。
     * - AVAILABLE：已有资源。已有资源优先为AVAILABLE_FIRST。
     * NEW或AVAILABLE_FIRST需指定弹性扩容参数，弹性扩容包括两种模式：启动模版和基于现有实例规则。
     * @example `"AVAILABLE"`
     */
    "ResourceFrom"?: string;
    /**
     * 弹性扩容的多可用区扩缩容策略。包含两种策略：
     * - PRIORITY：优先级策略。
     * - BALANCE：均衡分布策略。
     * @example `"PRIORITY"`
     */
    "MultiAzPolicy"?: string;
    /**
     * 弹性扩容的“启动模版”或“基于现有实例规则”所关联的VPC ID。
     * @example `"vpc-bp1j55oz3bg*****"`
     */
    "VpcId"?: string;
    /**
     * VPC相关的vswitch ID列表，多个以半角逗号（,）分割。
     * @example `"vsw-bp1ldxs3d4fd*****"`
     */
    "VSwitchIds"?: string;
    /**
     * 弹性缩容的回收模式。
     * - release：释放模式
     * - recycle：停机回收模式。
     * @example `"release"`
     */
    "ScalingPolicy"?: string;
    /**
     * 弹性扩容“基于现有实例规则”的实例ID。OutEnable为true（真）才有效。
     * @example `"1"`
     */
    "TemplateInstanceId"?: string;
    /**
     * 弹性扩容“基于现有实例规则”的实例名称。TemplateInstanceId存在才有效。
     * @example `"tpl-tdy218"`
     */
    "TemplateInstanceName"?: string;
    /**
     * 实例登录密码。当弹性扩容使用“基于现有实例规则”才有效。
     * @example `"Pwd*****"`
     */
    "Password"?: string;
    /**
     * 实例登录密钥名称。当弹性扩容使用“基于现有实例规则”才有效。
     * @example `"tdy218"`
     */
    "KeyPairName"?: string;
    /**
     * 若使用弹性扩容，则必须设置为true。
     * @example `true`
     */
    "AcceptEULA"?: boolean;
    /**
     * 弹性扩容“启动模版”ID。OutEnable为true（真）才有效，优先级高于TemplateInstanceId。
     * @example `"lt-wz9hkhn8wp*****"`
     */
    "TemplateId"?: string;
    /**
     * 弹性扩容“启动模版”版本。OutEnable为true（真）才有效。若使用默认模版，则设置为`-1`，否则设置为相应的版本号。
     * @example `-1`
     */
    "TemplateVersion"?: number;
}
