export interface DescribeSourceServersRequest {
    /**
     * 迁移任务ID。
     * @example `j-bp19vlwm0tyigbmj****`
     */
    "JobId"?: string;
    /**
     * 迁移源状态。取值范围：
     * - Unavailable：不可用，包括离线和出错。
     * - Available：在线。
     * - InUse：迁移中。
     * - Deleting：删除中。
     * @example `Available`
     */
    "State"?: string;
    /**
     * 迁移源名称。长度为2~128个英文或中文字符。必须以大小写字母或中文开头，不能以http:\//和https:\//开头。可以包含数字、半角冒号（:）、下划线（_）或者连字符（-）。
     * 默认值：空
     * @example `testSourceServerName`
     */
    "Name"?: string;
    /**
     * 返回的迁移源列表的页码。起始值：1。
     * 默认值：1。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 分页查询时设置的每页行数。最大值：50。
     * 默认值：10。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 迁移源ID，可以输入多个。
     * @example `s-bp1e2fsl57knvuug****`
     */
    "SourceId"?: string[];
    /**
     * 资源组ID。
     * @example `rg-acfmw3ty5y7****`
     */
    "ResourceGroupId"?: string;
    /**
     * 标签。
     */
    "Tag"?: {
        /**
         * 为SMC资源指定的标签键。N的取值范围：1~20
         * 一旦传入该值，则不允许为空字符串。最多支持64个字符，不能以aliyun和acs:开头，不能包含http:\//或者https:\//。
         * @example `TestKey`
         */
        Key: string;
        /**
         * 为SMC资源指定的标签值。N的取值范围：1~20。
         * 一旦传入该值，可以为空字符串。最多支持64个字符，不能包含http:\//或者https:\//。
         * @example `TestValue`
         */
        Value: string;
    }[];
    /**
     * 关联任务类型。
     */
    "RelatedJobType"?: string[];
}
