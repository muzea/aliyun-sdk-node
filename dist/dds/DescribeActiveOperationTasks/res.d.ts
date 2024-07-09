export interface DescribeActiveOperationTasksResponse {
    /**
     * 页码。
     * @example `1`
     */
    PageNumber: number;
    /**
     * 请求ID。
     * @example `111E7B16-0A87-4CBA-B271-F34AD61E099F`
     */
    RequestId: string;
    /**
     * 每页记录数。
     * @example `30`
     */
    PageSize: number;
    /**
     * 总记录数。
     * @example `727`
     */
    TotalRecordCount: number;
    /**
     * 运维任务列表。
     */
    Items: {
        /**
         * 暂无说明
         * @example `***`
         */
        Status: number;
        /**
         * 暂无说明
         * @example `***`
         */
        ChangeLevelEn: string;
        /**
         * 任务类型。
         * @example `***`
         */
        TaskType: string;
        /**
         * 节点ID。
         * @example `***`
         */
        InsName: string;
        /**
         * 区域。
         * @example `cn-hangzhou`
         */
        Region: string;
        /**
         * 暂无说明
         * @example `***`
         */
        ImpactZh: string;
        /**
         * 创建时间。
         * @example `2021-07-14 10:48:43.0`
         */
        CreatedTime: string;
        /**
         * 切换时间点，可能产生闪断，格式为<i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z（UTC时间）。
         * @example `2022-11-24T11:20:00Z`
         */
        SwitchTime: string;
        /**
         * 任务类型（英文）。
         * @example `***`
         */
        ChangeLevelZh: string;
        /**
         * 截止时间。
         * @example `1646014421633`
         */
        Deadline: string;
        /**
         * 运维任务开始时间到切换时间之间所需的准备时间，格式为<i>HH:mm:ss</i>。
         * @example `***`
         */
        PrepareInterval: string;
        /**
         * 任务类型中文。
         * @example `***`
         */
        TaskTypeZh: string;
        /**
         * 暂无说明。
         * @example `***`
         */
        CurrentAVZ: string;
        /**
         * 是否允许修改：
         * - **0**：否。
         * - **1**：是。
         * @example `0`
         */
        AllowChange: string;
        /**
         * 数据库引擎版本号。
         * @example `5.6`
         */
        DbVersion: string;
        /**
         * 暂无说明
         * @example `***`
         */
        ImpactEn: string;
        /**
         * 描述。
         * @example `***`
         */
        InsComment: string;
        /**
         * 任务开始执行的时间，格式为<i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z（UTC时间）。
         * @example `2022-12-24T06:01Z`
         */
        StartTime: string;
        /**
         * 修改时间，格式为<i>yyyy-mm-dd</i>T<i>hh:mm:ss</i>Z（UTC时间）。
         * @example `2021-08-24T09:48:01.000+00:00`
         */
        ModifiedTime: string;
        /**
         * 暂无说明
         * @example `***`
         */
        AllowCancel: string;
        /**
         * 数据库引擎类型。
         * @example `mongoDb`
         */
        DbType: string;
        /**
         * 变更级别。
         * @example `***`
         */
        ChangeLevel: string;
        /**
         * 暂无说明
         * @example `***`
         */
        TaskTypeEn: string;
        /**
         * 结果信息（可忽略）。
         * @example `***`
         */
        ResultInfo: string;
        /**
         * 任务id。
         * @example `***`
         */
        Id: number;
        /**
         * 子实例列表。
         */
        SubInsNames: string[];
    }[];
}
