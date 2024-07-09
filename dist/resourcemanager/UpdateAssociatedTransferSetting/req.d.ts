export interface UpdateAssociatedTransferSettingRequest {
    /**
     * 关联转组功能规则设置。
     */
    "RuleSettings"?: {
        /**
         * 关联转组功能开通状态。取值：
         * - Enable：开启。
         * - Disable：关闭。
         * @example `Enable`
         */
        Status: string;
        /**
         * 主资源的云服务代码。
         * 您可以从[支持资源组的云服务](~~94479~~)的**云服务代码**列获取云服务代码。
         * @example `ecs`
         */
        MasterService: string;
        /**
         * 主资源的资源类型。
         * 您可以从[支持资源组的云服务](~~94479~~)的**资源类型**列获取资源类型。
         * @example `instance`
         */
        MasterResourceType: string;
        /**
         * 关联资源的云服务代码。
         * 您可以从[支持资源组的云服务](~~94479~~)的**云服务代码**列获取云服务代码。
         * @example `ecs`
         */
        AssociatedService: string;
        /**
         * 关联资源的资源类型。
         * 您可以从[支持资源组的云服务](~~94479~~)的**资源类型**列获取资源类型。
         * @example `disk`
         */
        AssociatedResourceType: string;
    }[];
    /**
     * 是否启动存量关联资源跟随转组任务。取值：
     * - false：不启动存量关联资源跟随转组任务。
     * - true：启动存量关联资源跟随转组任务。
     * @example `false`
     */
    "EnableExistingResourcesTransfer"?: string;
}
