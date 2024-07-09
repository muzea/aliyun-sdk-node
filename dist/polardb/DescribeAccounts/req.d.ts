export interface DescribeAccountsRequest {
    /**
     * 集群ID。
     * @example `pc-***************`
     */
    "DBClusterId": string;
    /**
     * 账号名称。
     * @example `test_acc`
     */
    "AccountName"?: string;
    /**
     * 页码，取值范围为大于0但不超过Integer最大值的整数。默认值为**1**。
     * @example `1`
     */
    "PageNumber"?: number;
    /**
     * 每页记录数，取值范围：
     * * **30**
     * * **50**
     * * **100**
     * 默认值为**30**。
     * @example `30`
     */
    "PageSize"?: number;
}
