export interface ListCrowdsResponse {
    /**
     * Id of the request
     * @example `9763624B-5FBB-5E3A-9193-B1ADB554CEAE`
     */
    RequestId: string;
    /**
     * 列表内元素总数。
     * @example `10`
     */
    TotalCount: number;
    /**
     * 人群列表。
     */
    Crowds: {
        /**
         * 人群ID。
         * @example `3`
         */
        CrowdId: string;
        /**
         * 人群名称。
         * @example `crowd1`
         */
        Name: string;
        /**
         * 人群描述。
         * @example `This is a test.`
         */
        Description: string;
        /**
         * 人群标签。
         * @example `os=android`
         */
        Label: string;
        /**
         * 人群来源。
         * ● ManualInput-手工输入
         * ● UploadFile-文件上传
         * @example `ManualInput`
         */
        Source: string;
        /**
         * 数量。
         * @example `10`
         */
        Quantity: string;
        /**
         * 人群内包含的用户，多个用户间以逗号隔开。
         * @example `user1,user2`
         */
        Users: string;
        /**
         * 人群创建时间。
         * @example `2021-12-15T23:24:33.132+08:00`
         */
        GmtCreateTime: string;
    }[];
}
