export interface CreateApplicationRequest {
    /**
     * 模板ID
     * @example `0KSHPM6SJU03TNZP`
     */
    "TemplateId": string;
    /**
     * 客户端 Token，用于保证请求的幂等性。
     * 从您的客户端生成一个参数值，确保不同请求间该参数值唯一。ClientToken 只支持 ASCII 字符。
     * @example `1600765710019`
     */
    "ClientToken"?: string;
    /**
     * 输入应用名称。
     * - 应用名称需唯一，不能与其他应用名称重复，可以调用<props="china">[ListApplication](~~428266~~)</props><props="intl">[ListApplication](https://www.alibabacloud.com/help/zh/bp-studio/latest/api-bpstudio-2021-09-31-listapplication)</props>获取应用列表。
     * - 长度为2~128个英文或中文字符。必须以大小字母或中文开头，不能以http://或https://开头。可以包含数字、下划线（_）、或者短划线（-）。
     * @example `cadt-application`
     */
    "Name": string;
    /**
     * 区域ID
     * @example `cn-hangzhou`
     */
    "AreaId"?: string;
    /**
     * 支持在已保有VPC下创建
     */
    "Instances"?: {
        /**
         * 实例类型
         * @example `vpc`
         */
        NodeType: string;
        /**
         * 节点名称
         * @example `vpc`
         */
        NodeName: string;
        /**
         * 实例ID
         * @example `vpc-bp1q56trhtaq40vlq5ojm`
         */
        Id: string;
    }[];
    /**
     * 应用所属资源组ID
     * @example `rg-acfmyjt3c5om3hi`
     */
    "ResourceGroupId"?: string;
    /**
     * 应用相关配置参数，例如：enableMonitor 代表是否自动创建云监控; enableReport 代表是否生成相关报告
     */
    "Configuration"?: any;
    /**
     * 对于带参数的模板，这个字段用于传递相关参数值，如果未传递，则使用默认值
     */
    "Variables"?: any;
}
