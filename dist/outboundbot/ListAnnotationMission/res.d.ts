export interface ListAnnotationMissionResponse {
    /**
     * 是否调用成功。true：表示调用成功。false：表示调用失败。
     * @example `true`
     */
    Success: boolean;
    /**
     * 响应码
     * @example `OK`
     */
    Code: string;
    /**
     * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
     * @example `CDR 'job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff' doesn't exists.`
     */
    Message: string;
    /**
     * 数据
     */
    Data: {
        /**
         * 标注任务列表
         */
        AnnotationMissionList: {
            /**
             * 标注数据来源，1:外呼、2：导航
             * @example `1`
             */
            AnnotationMissionDataSourceType: number;
            /**
             * 实例id
             * @example `32be9d94-1346-4c4a-a4d0-ccd379f87013`
             */
            InstanceId: string;
            /**
             * 任务id
             * @example `ddce607f-f537-4ebd-9914-cf45671defb9`
             */
            AnnotationMissionId: string;
            /**
             * 任务名称
             * @example `体验场景--移车-标注任务-20230220-141347`
             */
            AnnotationMissionName: string;
            /**
             * 标注状态
             * @example `1`
             */
            AnnotationStatus: number;
            /**
             * 创建时间
             * @example `1676170339515`
             */
            CreateTime: number;
            /**
             * 标注任务总数
             * @example `1`
             */
            SessionTotalCount: number;
            /**
             * 标注任务完成数
             * @example `1`
             */
            SessionFinishCount: number;
            /**
             * 标注任务完成时间
             * @example `1683443903785`
             */
            FinishTime: number;
            /**
             * 排除session
             * @example `false`
             */
            ExcludeOtherMissionSession: boolean;
            /**
             * 创建任务使用的通话结束类型列表
             */
            SessionEndReasonFilterList: number[];
            /**
             * 标注任务通话时间查询条件开始时间
             * @example `1683216000000`
             */
            ConversationTimeStartFilter: number;
            /**
             * 标注任务通话时间查询条件结束时间
             * @example `1684511999000`
             */
            ConversationTimeEndFilter: number;
            /**
             * 抽样类型
             * @example `1`
             */
            SamplingType: number;
            /**
             * 抽样比例
             * @example `1`
             */
            SamplingRate: number;
            /**
             * 抽样数量最大值限制
             * @example `1`
             */
            SamplingCount: number;
            /**
             * 抽样描述
             * @example `标注`
             */
            SamplingDescription: string;
            /**
             * 标注调试数据源列表
             */
            AnnotationMissionDebugDataSourceList: number[];
        }[];
        /**
         * 页号
         * @example `1`
         */
        PageIndex: number;
        /**
         * 每页显示的条数
         * @example `10`
         */
        PageSize: number;
        /**
         * 总计个数
         * @example `30`
         */
        TotalCount: number;
        /**
         * 总页数
         * @example `4`
         */
        TotalPageCount: number;
        /**
         * 是否调用成功。true：表示调用成功。false：表示调用失败。
         * @example `true`
         */
        Success: boolean;
        /**
         * 附加信息。取值说明如下：请求正常，返回success。请求异常，返回具体异常错误码。
         * @example `CDR 'job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff' doesn't exists.`
         */
        Message: string;
    };
    /**
     * HTTP状态码
     * @example `200`
     */
    HttpStatusCode: number;
    /**
     * 请求ID
     * @example `254EB995-DEDF-48A4-9101-9CA5B72FFBCC`
     */
    RequestId: string;
}
