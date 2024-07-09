export interface ValuateTemplateRequest {
    /**
     * 模板ID
     * @example `0KSHPM6SJU03TNZP`
     */
    "TemplateId": string;
    /**
     * 幂等标记
     * @example `1600765710019`
     */
    "ClientToken": string;
    /**
     * 区域ID
     * @example `cn-hangzhou`
     */
    "AreaId"?: string;
    /**
     * 待替换实例列表
     */
    "Instances"?: {
        /**
         * 实例类型
         * @example `ecs`
         */
        NodeType: string;
        /**
         * 图上实例名
         * @example `ecs`
         */
        NodeName: string;
        /**
         * 实例ID
         * @example `vpc-bp1q56trhtaq40vlq5oj`
         */
        Id: string;
    }[];
    /**
     * 应用所属资源组ID
     * @example `rg-acfmyjt3c5om3fi`
     */
    "ResourceGroupId"?: string;
    /**
     * 对于带参数的模板，这个字段用于传递相关参数值，如果未传递，则使用默认值
     */
    "Variables"?: any;
}
