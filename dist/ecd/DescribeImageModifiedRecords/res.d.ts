export interface DescribeImageModifiedRecordsResponse {
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6koN7RqHg3d2z8LKmSoe821`
     */
    NextToken: string;
    /**
     * 请求ID。
     * @example `DC40EE61-7E83-59ED-AEA6-7EE9C437F352`
     */
    RequestId: string;
    /**
     * 镜像修改记录总数。
     * @example `20`
     */
    TotalCount: number;
    /**
     * 镜像修改记录集合。
     */
    ImageModifiedRecords: {
        /**
         * 镜像修改的状态。
         * @example `1`
         */
        Status: number;
        /**
         * 最后修改镜像的时间。
         * @example `2022-03-03T02:43:44.851Z`
         */
        UpdateTime: string;
        /**
         * 变更后的新镜像名称。
         * @example `Windows server 2022 Mainland asp`
         */
        NewImageName: string;
        /**
         * 变更前镜像名称。
         * @example `Windows server 2019 Mainland`
         */
        ImageName: string;
        /**
         * 变更后的新镜像ID。
         * @example `desktopimage-windows-server-2022-64-ch-asp`
         */
        NewImageId: string;
        /**
         * 变更前镜像ID。
         * @example `desktopimage-windows-server-2019-64-ch-asp`
         */
        ImageId: string;
    }[];
}
