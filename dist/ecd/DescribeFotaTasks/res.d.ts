export interface DescribeFotaTasksResponse {
    /**
     * 请求ID。
     * @example `1CBAFFAB-B697-4049-A9B1-67E1FC5F****`
     */
    RequestId: string;
    /**
     * 镜像升级任务信息。
     */
    FotaTasks: {
        /**
         * 镜像升级任务的ID。
         * @example `aot-c4khwrp9ocml4****`
         */
        TaskUid: string;
        /**
         * > 此参数不开放使用。
         * @example `To be hidden.`
         */
        FotaProject: string;
        /**
         * 镜像版本。可调用[DescribeImages](~~188895~~)获取该参数。
         * @example `0.0.1-D-20220513.143129`
         */
        AppVersion: string;
        /**
         * 镜像升级任务是否自动推送。
         * @example `valid`
         */
        Status: string;
        /**
         * 升级版本的发布时间。
         * @example `2022-05-31T04:28:48Z`
         */
        PublishTime: string;
        /**
         * 可升级到该版本的云电脑数量。
         * @example `1`
         */
        PendingDesktopCount: number;
        /**
         * 升级版本说明。
         * @example `test`
         */
        ReleaseNote: string;
        /**
         * 升级包大小，单位为KB。
         * @example `568533470`
         */
        Size: number;
        /**
         * 可升级到该版本的自定义镜像数量。
         * @example `1`
         */
        PendingCustomImageCount: number;
    }[];
    /**
     * 修改结果。返回`success`表示成功，否则将返回错误信息。
     * @example `success`
     */
    Code: string;
    /**
     * 错误信息。当Code为`success`时，不返回该参数。
     * @example `The parameter is not specified.`
     */
    Message: string;
    /**
     * 下一个查询开始的Token，NextToken为空表示没有下一个。
     * @example `AAAAAV3MpHK1AP0pfERHZN5pu6nmB7qrRFJ8vmttjxPL****`
     */
    NextToken: string;
}
