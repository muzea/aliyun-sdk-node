export interface DescribeTaskAttributeResponse {
    /**
     * 任务创建时间。
     * @example `2015-11-23T02:13Z`
     */
    CreationTime: string;
    /**
     * 是否可以取消任务（[CancelTask](~~25624~~)）。取值范围：
     *
     * - true：可以取消
     * - false：无法取消
     *
     * @example `true`
     */
    SupportCancel: string;
    /**
     * 任务总数。
     * @example `1`
     */
    TotalCount: number;
    /**
     * 成功任务数。
     * @example `1`
     */
    SuccessCount: number;
    /**
     * 地域ID。
     * @example `cn-hangzhou`
     */
    RegionId: string;
    /**
     * 任务操作的接口名称。
     * @example `ExportImage`
     */
    TaskAction: string;
    /**
     * 失败任务数。
     * @example `0`
     */
    FailedCount: number;
    /**
     * 请求ID。
     * @example `473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E`
     */
    RequestId: string;
    /**
     * 任务状态。
     * @example `Finished`
     */
    TaskStatus: string;
    /**
     * 任务进程。
     * @example `100%`
     */
    TaskProcess: string;
    /**
     * 任务完成时间。
     * @example `2015-11-23T02:19Z`
     */
    FinishedTime: string;
    /**
     * 任务ID。
     * @example `t-ce946ntx4wr****`
     */
    TaskId: string;
    OperationProgressSet: {
        /**
         * 返回任务包含的信息，其中包括每一个子任务的状态和相关信息。
         */
        OperationProgress: {
            /**
             * 错误信息。
             * @example `The specified RegionId parameter is invalid.`
             */
            ErrorMsg: string;
            /**
             * 错误代码。
             * @example `ParameterInvalid`
             */
            ErrorCode: string;
            /**
             * 操作状态。
             * @example `Success`
             */
            OperationStatus: string;
            RelatedItemSet: {
                /**
                 * 资源信息类型。
                 */
                RelatedItem: {
                    /**
                     * 相关项名称。
                     * @example `OSSObject`
                     */
                    Name: string;
                    /**
                     * 相关项值。
                     * @example `MYOSSPRE_m-23f8tcp***_t-23ym6mv***.vhd`
                     */
                    Value: string;
                }[];
            };
        }[];
    };
}
