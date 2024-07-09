export interface ListVirusScanMachineResponse {
    /**
     * 本次调用请求的ID，是由阿里云为该请求生成的唯一标识符，可用于排查和定位问题。
     * @example `A27C1C09-828B-5CB8-9203-F55423BE****`
     */
    RequestId: string;
    /**
     * 分页信息。
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
         * @example `168`
         */
        TotalCount: number;
    };
    /**
     * 数据详情。
     */
    Data: {
        /**
         * 资产实例的UUID。
         * @example `6690a46c-0edb-4663-a641-3629d1a9****`
         */
        Uuid: string;
        /**
         * 实例名称。
         * @example `centos****`
         */
        InstanceName: string;
        /**
         * 关联实例的公网IP。
         * @example `172.16.XX.XX`
         */
        InternetIp: string;
        /**
         * 关联实例的私网IP。
         * @example `10.42.XX.XX`
         */
        IntranetIp: string;
        /**
         * 服务器的实例ID。
         * @example `i-bp180bogui4fc0z4****`
         */
        InstanceId: string;
        /**
         * 安全告警发生次数。
         * @example `28`
         */
        EventCount: number;
    }[];
}
