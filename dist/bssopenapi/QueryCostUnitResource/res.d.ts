export interface QueryCostUnitResourceResponse {
    /**
     * 状态码。
     * @example `Success`
     */
    Code: string;
    /**
     * 错误信息。
     * @example `Successful！`
     */
    Message: string;
    /**
     * 请求ID。
     * @example `04332CB7-9A57-4461-97E0-02821D044414`
     */
    RequestId: string;
    /**
     * 是否成功。
     * @example `true`
     */
    Success: boolean;
    /**
     * 返回数据。
     */
    Data: {
        /**
         * 页码。
         * @example `1`
         */
        PageNum: number;
        /**
         * 每页条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 总记录数。
         * @example `12`
         */
        TotalCount: number;
        /**
         * 资源实例列表。
         */
        ResourceInstanceDtoList: {
            /**
             * 资源的商品code。
             * @example `rds`
             */
            CommodityCode: string;
            /**
             * 资源属主的用户名。
             * @example `test@test.aliyun.com`
             */
            ResourceUserName: string;
            /**
             * 资源的商品名。
             * @example `云数据库`
             */
            CommodityName: string;
            /**
             * 资源的属主用户ID。
             * @example `2424242134`
             */
            ResourceUserId: number;
            /**
             * 资源分拆名。
             * @example `test`
             */
            ApportionName: string;
            /**
             * 资源分拆code。
             * @example `test`
             */
            ApportionCode: string;
            /**
             * 资源类型。
             * @example `FPT_ossbag_absolute_Storage_bj`
             */
            ResourceType: string;
            /**
             * 资源的自定义昵称。
             * @example `testResource`
             */
            ResourceNick: string;
            /**
             * 资源的Tag标签。
             * @example `testResource`
             */
            ResourceTag: string;
            /**
             * 资源的实例ID。
             * @example `OSSBAG-cn-v0h1s4hma018`
             */
            ResourceId: string;
            /**
             * 资源所属的资源组。
             * @example `默认资源组`
             */
            ResourceGroup: string;
            /**
             * 资源实例相关的资源。
             * @example `oss`
             */
            RelatedResources: string;
            /**
             * 资源状态。
             * @example `Available`
             */
            ResourceStatus: string;
            PipCode: string;
            ResourceSource: string;
        }[];
        /**
         * 财务单元信息。
         */
        CostUnit: {
            /**
             * 父财务单元ID，-1表示财务单元根。
             * @example `23421`
             */
            ParentUnitId: number;
            /**
             * 财务单元的名字。
             * @example `test`
             */
            UnitName: string;
            /**
             * 财务单元的ID。
             * @example `123412`
             */
            UnitId: number;
            /**
             * 财务单元的属主用户ID。
             * @example `321432`
             */
            OwnerUid: number;
        };
        /**
         * 财务单元的统计信息。
         */
        CostUnitStatisInfo: {
            /**
             * 当前财务单元下的所有资源实例数（包含子财务单元）。
             * @example `3`
             */
            TotalResourceCount: number;
            /**
             * 当前财务单元下的资源实例数。
             * @example `1`
             */
            ResourceCount: number;
            /**
             * 当前财务单元下的所有关联账号数（包含子财务单元）。
             * @example `2`
             */
            TotalUserCount: number;
            /**
             * 当前财务单元下的子单元数。
             * @example `2`
             */
            SubUnitCount: number;
            /**
             * 当前财务单元下的资源组数。
             * @example `1`
             */
            ResourceGroupCount: number;
            /**
             * 当前财务单元下的所有资源组数（包含子财务单元）。
             * @example `2`
             */
            TotalResourceGroupCount: number;
            /**
             * 当前财务单元下的子单元数。
             * @example `0`
             */
            UserCount: number;
        };
    };
}
