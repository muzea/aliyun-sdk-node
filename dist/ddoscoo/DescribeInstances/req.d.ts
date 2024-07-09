export interface DescribeInstancesRequest {
    /**
     * DDoS高防实例在资源管理服务中所属的资源组ID。
     * 不设置该参数表示默认资源组。
     * @example `rg-acfm2pz25js****`
     */
    "ResourceGroupId"?: string;
    /**
     * 分页查询时，设置当前页面的页码。
     * @example `1`
     */
    "PageNumber": string;
    /**
     * 分页查询时，设置每页包含实例的数量。取值范围：1~50。
     * @example `10`
     */
    "PageSize": string;
    /**
     * 要查询的DDoS高防实例的IP地址。
     * @example `203.107.XX.XX`
     */
    "Ip"?: string;
    /**
     * 要查询的DDoS高防实例的备注。支持模糊查询。
     * @example `doc-test`
     */
    "Remark"?: string;
    /**
     * 要查询的DDoS高防实例的防护套餐版本。取值：
     * - **0**：表示DDoS高防（非中国内地）保险版。
     * - **1**：表示DDoS高防（非中国内地）无忧版。
     * - **2**： 表示DDoS高防（非中国内地）加速线路。
     * - **9**：表示DDoS高防（中国内地）专业版。
     * @example `9`
     */
    "Edition"?: number;
    /**
     * 要查询的DDoS高防实例的业务流量转发状态。取值：
     * - **0**：表示已停止转发业务流量。
     * - **1**：表示正常转发业务流量。
     * @example `1`
     */
    "Enabled"?: number;
    /**
     * 要查询的DDoS高防实例的最早到期时间（即查询到期时间在**ExpireStartTime**之后的DDoS高防实例）。使用时间戳表示，单位：毫秒。
     * @example `1640361500000`
     */
    "ExpireStartTime"?: number;
    /**
     * 要查询的DDoS高防实例的最晚到期时间（即查询到期时间在**ExpireEndTime**之前的DDoS高防实例）。使用时间戳表示，单位：毫秒。
     * @example `1640361700000`
     */
    "ExpireEndTime"?: number;
    /**
     * 要查询的DDoS高防实例的ID列表。最多可配置200个DDoS高防实例。
     */
    "InstanceIds"?: string[];
    /**
     * 要查询的DDoS高防实例的状态列表。最多可配置2个DDoS高防实例状态。
     */
    "Status"?: number[];
    /**
     * 要查询的DDoS高防实例绑定的标签列表。
     */
    "Tag"?: {
        /**
         * 要查询的DDoS高防实例绑定的标签键。N的最大值：200，即最多可配置200个标签键。配置规则如下：
         * - 每个标签包含一个标签键（**Key**）和一个标签值（**Value**），中间用半角逗号（,）隔开。
         * - 标签之间用半角逗号（,）隔开。
         * > 标签键（**Key**）和标签值（**Value**）必须成对出现。
         * @example `test-key`
         */
        Key: string;
        /**
         * 要查询的DDoS高防实例绑定的标签值。N的最大值：200，即最多可配置200个标签值。配置规则如下：
         * - 每个标签包含一个标签键（**Key**）和一个标签值（**Value**），中间用半角逗号（,）隔开。
         * - 标签之间用半角逗号（,）隔开。
         * > 标签键（**Key**）和标签值（**Value**）必须成对出现。
         * @example `test-value`
         */
        Value: string;
    }[];
}
