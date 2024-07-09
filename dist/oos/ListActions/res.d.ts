export interface ListActionsResponse {
    /**
     * 翻页标记的Token
     * @example `xxx`
     */
    NextToken: string;
    /**
     * 请求ID
     * @example `F9154C02-F847-4563-BB6A-6DD01A4F0`
     */
    RequestId: string;
    /**
     * 分页大小
     * @example `50`
     */
    MaxResults: number;
    /**
     * 动作列表
     */
    Actions: {
        /**
         * 使用热度
         * @example `5`
         */
        Popularity: number;
        /**
         * 动作类型。
         * 1. 原子动作
         *     - Atomic.API
         *     - Atomic.Trigger
         *     - Atomic.Control
         *     - Atomic.Embedded
         * 2. 云产品动作
         *     - Product.ECS
         *     - Product.RDS
         *     - Product.VPC
         *     - Product.FC
         *     - …..
         * @example `ACS::Template`
         */
        ActionType: string;
        /**
         * 动作说明
         * @example `ReplaceSystemDisk`
         */
        Description: string;
        /**
         * 动作创建时间
         * @example `2019-05-16T10:26:14Z`
         */
        CreatedDate: string;
        /**
         * 动作所对应的模板版本。
         * > 对于原子动作，该字段不返回。
         * @example `v1`
         */
        TemplateVersion: string;
        /**
         * 动作名称
         * @example `ACS::ECS::ReplaceSystemDisk`
         */
        OOSActionName: string;
        /**
         * 动作参数
         * @example `{ "ImageId": { "Description": "The mirror ID you will use when resetting the system", "Type": "String" }, "InstanceId": { "Description": "the instance id that you will handle .", "Type": "String" } }`
         */
        Properties: string;
    }[];
}
