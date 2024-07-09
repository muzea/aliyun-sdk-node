export interface DescribeParentPlatformDevicesResponse {
    /**
     * 第几个分页。
     * @example `1`
     */
    PageNum: number;
    /**
     * 分页大小。
     * @example `20`
     */
    PageSize: number;
    /**
     * 请求ID。
     * @example `BEA5625F-8FCF-48F4-851B-CA63946DA664`
     */
    RequestId: string;
    /**
     * 设备总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 分页总数。
     * @example `1`
     */
    PageCount: number;
    /**
     * 设备列表。
     */
    Devices: {
        /**
         * 上级设备ID。
         * @example `3614*****766212-cn-qingdao`
         */
        ParentId: string;
        /**
         * 设备国标ID。
         * @example `310101*****7542007`
         */
        GbId: string;
        /**
         * 设备所属空间ID。
         * @example `3484*****8732174-cn-qingdao`
         */
        GroupId: string;
        /**
         * 设备名称。
         * @example `测试设备1`
         */
        Name: string;
        /**
         * 设备ID。
         * @example `3487*****323380-cn-qingdao`
         */
        Id: string;
    }[];
}
