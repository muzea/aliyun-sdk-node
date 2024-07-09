export interface ListCheckInstanceResultResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `3AB18264-8A1B-52A6-A9AF-A886556E0F2E`
     */
    RequestId: string;
    /**
     * 影响实例基础信息列表。
     */
    BasicData: {
        /**
         * 检查实例结果ID。
         * @example `300054`
         */
        Id: number;
        /**
         * 检查项的状态列表。多个状态之间使用半角逗号（,）分隔。取值：
         * - **PASS**：通过
         * - **NOT_PASS**：未通过
         * - **CHECKING**：检查中
         * - **NOT_CHECK**：未检查
         * - **WHITELIST**：加白
         * @example `NOT_PASS`
         */
        Status: string;
        /**
         * 实例所在的地域的ID。
         * @example `ap-southeast-1`
         */
        RegionId: string;
        /**
         * 服务器实例ID。
         * @example `rm-m5es7ch1s62i4****`
         */
        InstanceId: string;
        /**
         * 服务器实例的名称。
         * @example `sg-t4nbk2aodzio52xv****`
         */
        InstanceName: string;
        /**
         * 检查项异常状态信息。
         * @example `检查任务失败。`
         */
        StatusMessage: string;
        /**
         * 对应检查项展示实例的信息。
         */
        InstanceInfo: {
            /**
             * 首次检查时间。
             * @example `1716447535531`
             */
            FirstUpdateTime: number;
            /**
             * 最新检查时间。
             * @example `1716447535531`
             */
            LastUpdateTime: number;
            /**
             * 对应修复配置展示当前实例信息。
             */
            Config: {
                /**
                 * 对应配置的名称，唯一。
                 * @example `prot`
                 */
                Name: string;
                /**
                 * 当前资产对应配置的值。
                 * @example `8080`
                 */
                Value: string;
                /**
                 * 对应配置项的国际化名称。
                 * @example `prot`
                 */
                ShowName: string;
            }[];
        };
    }[];
    /**
     * 影响实例信息展示列表元数据。
     */
    Columns: {
        /**
         * 检查实例结果属性类型。取值：
         * - **text**：文本
         * - **link**：链接
         * @example `text`
         */
        Type: string;
        /**
         * 列表属性的键。
         * @example `RegionIdShow`
         */
        Key: string;
        /**
         * 展示名称。
         * @example `Region`
         */
        ShowName: string;
        /**
         * 是否支持搜索。取值：
         * - **true**：是
         * - **false**：否
         * @example `true`
         */
        Search: boolean;
        /**
         * 搜索使用的键。
         * @example `InstanceIdKey`
         */
        SearchKey: string;
        /**
         * 列表类型元数据列表。
         */
        Grids: {
            /**
             * 检查实例结果类型。取值：
             * - **text**：文本
             * - **link**：链接
             * @example `text`
             */
            Type: string;
            /**
             * 搜索值。
             * @example `RegionIdShow`
             */
            Key: string;
            /**
             * 搜索展示名称。
             * @example `Region`
             */
            ShowName: string;
        }[];
    }[];
    /**
     * 影响实例扩展信息列表。
     * @example `[{
        "SecurityGroupNameShow": {
            "value": "Sas_Malicious_Ip_Security_Group"
        },
        "InstanceIdShow": {
            "link": "https://ecs.console.aliyun.com/#/securityGroupDetail/region/ap-southeast-1/groupId/sg-t4nbk2aodzio52xvj00s/rule/intranetIngress",
            "value": "sg-t4nbk2aodzio52xv****"
        }
    }]`
     */
    Checks: any[];
    /**
     * 分页查询时页面显示的信息。
     */
    PageInfo: {
        /**
         * 分页查询时，显示的当前页的页码。
         * @example `1`
         */
        CurrentPage: number;
        /**
         * 分页查询时，显示的每页数据的最大条数。
         * @example `20`
         */
        PageSize: number;
        /**
         * 数据的总条数。
         * @example `100`
         */
        TotalCount: number;
        /**
         * 返回结果的当前页显示数据条数。
         * @example `20`
         */
        Count: string;
    };
}
