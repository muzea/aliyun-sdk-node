export interface ListAssociatedTransferSettingResponse {
    /**
     * 请求ID。
     * @example `7556FD65-45D2-5C45-9FC9-A7DE831C775C`
     */
    RequestId: string;
    /**
     * 关联转组功能设置。
     */
    AssociatedTransferSetting: {
        /**
         * 阿里云账号（主账号）ID。
         * @example `121998723923****`
         */
        AccountId: string;
        /**
         * 关联转组功能开通状态。取值：
         * - Enable：开启。
         * - Disable：关闭。
         * @example `Enable`
         */
        Status: string;
        /**
         * 关联转组功能规则设置。
         */
        RuleSettings: {
            /**
             * 关联资源的资源类型。
             * @example `disk`
             */
            AssociatedResourceType: string;
            /**
             * 主资源的资源类型。
             * @example `instance`
             */
            MasterResourceType: string;
            /**
             * 关联资源的云服务代码。
             * @example `ecs`
             */
            AssociatedService: string;
            /**
             * 主资源的云服务代码。
             * @example `ecs`
             */
            MasterService: string;
            /**
             * 关联转组功能开通状态。取值：
             * - Enable：开启。
             * - Disable：关闭。
             * @example `Enable`
             */
            Status: string;
        }[];
        /**
         * 是否启动存量关联资源跟随转组任务。取值：
         * - false：不启动存量关联资源跟随转组任务。
         * - true：启动存量关联资源跟随转组任务。
         * @example `true`
         */
        EnableExistingResourcesTransfer: string;
    };
}
