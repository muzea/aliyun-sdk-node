export interface ListRtcMPUTaskDetailRequest {
    /**
     * 应用ID。
     * > 应用ID由大小写字母、数字、下划线、短划线（-）组成，最大64字符。
     * @example `yourAppId`
     */
    "AppId": string;
    /**
     * 任务ID。
     * > - 任务ID由大小写字母、数字、下划线、短划线（-）组成，最大55字符。
     * - 指定任务ID时，优先按任务ID查询，返回结果为指定任务ID的旁路转推任务的参数明细。
     * @example `yourTaskId`
     */
    "TaskId"?: string;
    /**
     * 单页显示记录的数量，取值范围：1~100。
     * > 未指定任务ID时，需要指定PageSize与PageNo参数，此时会返回指定应用ID下所有旁路转推任务参数明细的分页查询结果。
     * @example `10`
     */
    "PageSize"?: number;
    /**
     * 页码。
     * @example `20`
     */
    "PageNo"?: number;
}
